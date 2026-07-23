import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { readMemoryFile, parseMemoryDocument } from '../src/reader.ts';
import { normalizeMemory } from '../src/normalize.ts';
import { initializeFromMemory } from '../src/initialize.ts';
import { handleCommand, type Command } from '../../clite-domain-extraction-feasibility/src/commands.ts';
import { applyEvent } from '../../clite-domain-extraction-feasibility/src/machine.ts';
import { deriveMemory } from '../../clite-domain-extraction-feasibility/src/memory.ts';
import { OFICINA_HORIZONTE } from '../../clite-domain-extraction-feasibility/src/fixtures/oficina-horizonte.ts';
import { ESTUFA_VERTICAL } from '../../clite-domain-extraction-feasibility/src/fixtures/estufa-vertical.ts';
import type { AppState } from '../../clite-domain-extraction-feasibility/src/types.ts';
import type { ScenarioFixture } from '../../clite-domain-extraction-feasibility/src/fixture-contract.ts';

const MEMORIES = join(import.meta.dirname, '..', 'memories');

function loadState(file: string) {
  return initializeFromMemory(normalizeMemory(readMemoryFile(join(MEMORIES, file))));
}

function dispatch(fx: ScenarioFixture, state: AppState, cmd: Command): AppState {
  const result = handleCommand(fx, state, cmd);
  assert.ok(result.ok, `Comando ${cmd.kind} rejeitado: ${result.ok ? '' : result.reason}`);
  return (result as { ok: true; events: Parameters<typeof applyEvent>[2][] }).events
    .reduce((s, ev) => applyEvent(fx, s, ev, cmd.kind), state);
}

/** Resumption point 1 — after discovery, before authorization (inline memory). */
const POINT1_MEMORY = `---
memory_id: MEM-OFICINA-P1
format_version: memory-format-0.1-experimental
project_id: PRJ-01
project_title: Oficina Horizonte — pesquisa de atendimento
scenario_id: oficina-horizonte
scenario_fixture_version: clite-fixture-oficina-1.0
created_from: test
last_accepted_checkpoint: IHR-0029
content_version: 1
intent:
  initial_intent: Quero organizar o atendimento da oficina.
  understanding_confirmed: true
  unknowns: [Permissões por papel]
  assumptions: [{ id: A-01, status: corrected }]
  contradictions: [{ id: C-01, status: resolved, chosen_interpretation: 1 }]
  answers:
    - { question_id: DQ-01, value: Eu e a recepção., is_unknown: false }
    - { question_id: DQ-02, value: Os mecânicos também., is_unknown: false }
    - { question_id: DQ-03, value: Sem conta., is_unknown: false }
governance:
  plan_state: none
  plan_version: 0
  plan_revision_comments: []
  authorization_state: none
  approval_decision: null
  solo_operator_exception: null
execution:
  execution_state: none
  scenario_cursor: 0
  last_tick: 9
  last_seq: 8
  requested_input: null
  scope_revisions: []
result:
  artifact_state: none
  artifact_ref: null
  evidence_refs: []
  review_state: not_started
  review_decision: null
continuity:
  pending_action: Preparar o plano de pesquisa.
  unresolved_items: [Permissões por papel]
  recent_changes: [Entendimento versão 1 confirmado (não significa completo ou verdadeiro).]
  provenance_refs: [IHR-0029]
  limitations: [Log não reconstruível.]
---
Ponto de retomada 1.
`;

describe('deterministic initialization', () => {
  it('two initializations of the same memory are deep-equal', () => {
    const a = loadState('oficina-horizonte-memory.md');
    const b = loadState('oficina-horizonte-memory.md');
    assert.deepEqual(a.state, b.state);
    assert.deepEqual(a.unreconstructable, b.unreconstructable);
  });

  it('initial state does not depend on wall clock or file path', () => {
    const { state } = loadState('oficina-horizonte-memory.md');
    assert.equal(state.clockTick, 21);        // canonical last_tick, never Date.now()
    assert.equal(state.seq, 17);
    assert.doesNotMatch(JSON.stringify(state), /memories[\\/]|C:\\\\|file:\/\//);
  });

  it('restored context is ALWAYS stale until refreshed (derived, not stored)', () => {
    const { state } = loadState('oficina-horizonte-memory.md');
    assert.equal(state.context.stale, true);
    const fx = OFICINA_HORIZONTE;
    const blocked = handleCommand(fx, state, { kind: 'CancelExecution', actor: 'product_owner', reason: 'x' });
    assert.ok(!blocked.ok && /desatualizado/.test(blocked.reason));
  });

  it('declares what cannot be reconstructed instead of faking it', () => {
    const { state, unreconstructable } = loadState('oficina-horizonte-memory.md');
    assert.ok(unreconstructable.some((u) => /Event log/i.test(u)));
    assert.equal(state.log.length, 1);        // one restoration marker, no synthetic history
    assert.equal(state.log[0]?.commandOrigin, 'MemoryAdapter.initializeFromMemory');
  });
});

describe('resumability point 1 — after discovery, before authorization', () => {
  it('reconstructs contextualized state and accepts the next valid command (ProposePlan)', () => {
    const record = normalizeMemory(parseMemoryDocument(POINT1_MEMORY));
    const { state } = initializeFromMemory(record);
    assert.equal(state.project.state, 'contextualized');
    assert.equal(state.discovery.state, 'reviewed');
    assert.equal(state.plan.state, 'none');
    assert.equal(state.authorization.state, 'none');
    assert.equal(state.pendingAction, 'Preparar o plano de pesquisa.');
    const fx = OFICINA_HORIZONTE;
    const next = dispatch(fx, state, { kind: 'ProposePlan', actor: 'product_owner' });
    assert.equal(next.plan.state, 'proposed');
    // premature commands remain invalid after restore
    const early = handleCommand(fx, state, { kind: 'StartReview', actor: 'product_owner' });
    assert.ok(!early.ok);
  });
});

describe('resumability point 2 — awaiting input (oficina memory file)', () => {
  it('continues from the pending input all the way to acceptance', () => {
    const fx = OFICINA_HORIZONTE;
    let { state: s } = loadState('oficina-horizonte-memory.md');
    assert.equal(s.execution.state, 'awaiting_input');
    assert.equal(s.execution.requestedInput?.status, 'requested');
    assert.equal(s.authorization.state, 'approved');
    assert.equal(s.plan.versions.length, 2);  // plan lineage rebuilt deterministically

    s = dispatch(fx, s, { kind: 'ProvideInput', actor: 'product_owner', answer: 'Comparar ambas' });
    assert.equal(s.execution.state, 'running');
    s = dispatch(fx, s, { kind: 'AdvanceScenario', actor: 'system' });     // activity
    s = dispatch(fx, s, { kind: 'AdvanceScenario', actor: 'system' });     // failure
    assert.equal(s.execution.state, 'failed');

    // sensitive action (retry) requires refreshing the stale context first
    const blocked = handleCommand(fx, s, { kind: 'RequestRetry', actor: 'product_owner' });
    assert.ok(!blocked.ok && /desatualizado/.test(blocked.reason));
    s = dispatch(fx, s, { kind: 'RefreshContext', actor: 'product_owner' });
    s = dispatch(fx, s, { kind: 'RequestRetry', actor: 'product_owner' });
    s = dispatch(fx, s, { kind: 'StartExecution', actor: 'system' });
    s = dispatch(fx, s, { kind: 'AdvanceScenario', actor: 'system' });     // retry activity
    s = dispatch(fx, s, { kind: 'AdvanceScenario', actor: 'system' });     // completion
    assert.equal(s.execution.state, 'completed');
    s = dispatch(fx, s, { kind: 'StartReview', actor: 'product_owner' });
    s = dispatch(fx, s, { kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Aceito para este ciclo.' });
    assert.equal(s.artifact.state, 'accepted');
    assert.equal(s.project.state, 'resolved');
  });
});

describe('resumability point 3 — artifact under review (estufa memory file)', () => {
  it('reconstructs review context and reaches the final decision', () => {
    const fx = ESTUFA_VERTICAL;
    let { state: s } = loadState('estufa-vertical-memory.md');
    assert.equal(s.execution.state, 'completed');
    assert.equal(s.artifact.state, 'under_review');
    assert.equal(s.review.state, 'in_review');
    assert.equal(s.artifact.item?.id, 'CMP-A01');
    assert.equal(s.evidence.length, 2);
    assert.ok(s.evidence.some((e) => e.status === 'unavailable')); // failure consequence preserved
    assert.equal(s.execution.requestedInput?.answer, 'Incluir o temporizador');

    // sensitive decision blocked until refresh, then decidable by the authority
    const blocked = handleCommand(fx, s, { kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'x' });
    assert.ok(!blocked.ok && /desatualizado/.test(blocked.reason));
    s = dispatch(fx, s, { kind: 'RefreshContext', actor: 'product_owner' });
    const selfReview = handleCommand(fx, s, { kind: 'DecideReview', actor: 'research_executor', outcome: 'accept', reason: 'x' });
    assert.ok(!selfReview.ok); // separation of duties survives restoration
    s = dispatch(fx, s, { kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Comparativo suficiente para este ciclo.' });
    assert.equal(s.artifact.state, 'accepted');
  });

  it('derived Project Memory view still works over a restored state', () => {
    const { state } = loadState('estufa-vertical-memory.md');
    const view = deriveMemory(state);
    assert.ok(view.projectSummary.includes('Estufa Vertical'));
    assert.ok(view.evidence.some((e) => e.includes('indisponível')));
    assert.doesNotMatch(JSON.stringify(view), /research_executor/);
  });
});

describe('scenario independence', () => {
  it('the same adapter feeds both scenarios with no scenario-specific rules', () => {
    const a = loadState('oficina-horizonte-memory.md');
    const b = loadState('estufa-vertical-memory.md');
    assert.notEqual(a.state.project.name, b.state.project.name);
    assert.equal(a.state.context.stale, true);
    assert.equal(b.state.context.stale, true);
  });
});
