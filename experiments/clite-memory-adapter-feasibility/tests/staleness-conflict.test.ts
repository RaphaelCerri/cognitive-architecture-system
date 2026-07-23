import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseMemoryDocument } from '../src/reader.ts';
import { normalizeMemory } from '../src/normalize.ts';
import { initializeFromMemory } from '../src/initialize.ts';
import { MemoryValidationError } from '../src/memory-types.ts';

const MEMORIES = join(import.meta.dirname, '..', 'memories');
const oficina = () => readFileSync(join(MEMORIES, 'oficina-horizonte-memory.md'), 'utf-8');
const estufa = () => readFileSync(join(MEMORIES, 'estufa-vertical-memory.md'), 'utf-8');

function expectIssue(content: string, code: string, severities: string[]): void {
  try {
    const record = normalizeMemory(parseMemoryDocument(content));
    initializeFromMemory(record);
    assert.fail(`deveria ter sinalizado ${code}`);
  } catch (err) {
    assert.ok(err instanceof MemoryValidationError, `erro inesperado: ${err}`);
    const hit = err.issues.find((i) => i.code === code);
    assert.ok(hit, `issue ${code} ausente; recebidas: ${err.issues.map((i) => i.code).join(', ')}`);
    assert.ok(severities.includes(hit!.severity), `severidade ${hit!.severity} fora de ${severities}`);
  }
}

describe('staleness and conflict — classified, never silent', () => {
  it('rejects an unknown scenario', () => {
    expectIssue(oficina().replace('scenario_id: oficina-horizonte', 'scenario_id: cenario-inexistente'), 'unknown_scenario', ['reject']);
  });

  it('rejects an incompatible fixture version', () => {
    expectIssue(oficina().replace('clite-fixture-oficina-1.0', 'clite-fixture-oficina-0.9'), 'fixture_version_mismatch', ['reject']);
  });

  it('requires human decision for execution recorded without approval', () => {
    expectIssue(
      oficina().replace('authorization_state: approved', 'authorization_state: pending'),
      'execution_without_approval', ['require_human_decision'],
    );
  });

  it('requires human decision for a contradictory decision (denied but executing)', () => {
    const content = oficina()
      .replace('authorization_state: approved', 'authorization_state: denied')
      .replace('decision: approved', 'decision: denied');
    expectIssue(content, 'execution_after_denial', ['require_human_decision']);
  });

  it('requires human decision when the approval has no authority basis', () => {
    const content = oficina().replace(/authority_basis: .*/, 'authority_basis: ""');
    expectIssue(content, 'missing_authority_basis', ['require_human_decision']);
  });

  it('requires human decision for a missing referenced artifact', () => {
    expectIssue(estufa().replace('artifact_ref: CMP-A01', 'artifact_ref: REL-99'), 'missing_artifact_ref', ['require_human_decision']);
  });

  it('requires human decision for missing referenced evidence', () => {
    expectIssue(estufa().replace('- id: EX-02', '- id: EX-99'), 'missing_evidence_ref', ['require_human_decision']);
  });

  it('rejects a review decision recorded by the executor (SoD in Memory)', () => {
    const content = estufa().replace(
      'review_decision: null',
      'review_decision: { outcome: accept, reason: auto, decided_by_role: research_executor, decided_by_label: Executor }',
    );
    expectIssue(content, 'self_review_in_memory', ['reject']);
  });

  it('rejects invalid enum values instead of silently defaulting', () => {
    expectIssue(oficina().replace('execution_state: awaiting_input', 'execution_state: turbo'), 'invalid_execution_state', ['reject']);
  });

  it('requires human decision when pending_action is missing', () => {
    expectIssue(oficina().replace(/pending_action: .*/, 'pending_action: ""'), 'missing_pending_action', ['require_human_decision']);
  });
});

describe('solo operator exception — low risk only', () => {
  it('accepts an explicit low-risk exception (estufa memory)', () => {
    const record = normalizeMemory(parseMemoryDocument(estufa()));
    assert.equal(record.governance.solo_operator_exception?.active, true);
    assert.equal(record.governance.solo_operator_exception?.risk_class, 'low');
    assert.equal(record.governance.solo_operator_exception?.independent_review, false);
    const { state } = initializeFromMemory(record);
    assert.equal(state.artifact.state, 'under_review');
  });

  it('rejects an active exception with high risk class', () => {
    expectIssue(estufa().replace('risk_class: low', 'risk_class: high'), 'solo_exception_high_risk', ['reject']);
  });

  it('rejects an exception presented as independent review', () => {
    expectIssue(estufa().replace('independent_review: false', 'independent_review: true'), 'solo_exception_claims_independence', ['reject']);
  });
});
