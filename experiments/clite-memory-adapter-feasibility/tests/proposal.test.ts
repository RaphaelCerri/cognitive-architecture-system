import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { readMemoryFile } from '../src/reader.ts';
import { normalizeMemory } from '../src/normalize.ts';
import { initializeFromMemory } from '../src/initialize.ts';
import { generateUpdateProposal, validateProposalAgainstBase } from '../src/proposal.ts';
import { handleCommand, type Command } from '../../clite-domain-extraction-feasibility/src/commands.ts';
import { applyEvent } from '../../clite-domain-extraction-feasibility/src/machine.ts';
import { OFICINA_HORIZONTE } from '../../clite-domain-extraction-feasibility/src/fixtures/oficina-horizonte.ts';
import type { AppState } from '../../clite-domain-extraction-feasibility/src/types.ts';

const MEMORIES = join(import.meta.dirname, '..', 'memories');
const OFICINA_PATH = join(MEMORIES, 'oficina-horizonte-memory.md');

function dispatch(state: AppState, cmd: Command): AppState {
  const result = handleCommand(OFICINA_HORIZONTE, state, cmd);
  assert.ok(result.ok);
  return (result as { ok: true; events: Parameters<typeof applyEvent>[2][] }).events
    .reduce((s, ev) => applyEvent(OFICINA_HORIZONTE, s, ev, cmd.kind), state);
}

describe('update proposal — generated, never applied', () => {
  it('captures field-level before/after for real progress', () => {
    const base = normalizeMemory(readMemoryFile(OFICINA_PATH));
    let { state } = initializeFromMemory(base);
    state = dispatch(state, { kind: 'ProvideInput', actor: 'product_owner', answer: 'Comparar ambas' });

    const proposal = generateUpdateProposal({
      base, current: state,
      reason: 'Pendência RI-01 respondida; pesquisa retomada.',
      originatingDecision: 'ProvideInput do product_owner',
      provenance: ['test-session'],
    });

    assert.equal(proposal.status, 'proposed');
    assert.equal(proposal.base_memory_id, 'MEM-OFICINA-01');
    assert.equal(proposal.base_version, 1);
    assert.equal(proposal.proposed_version, 2);
    const paths = proposal.changes.map((c) => c.path);
    assert.ok(paths.includes('execution.execution_state'));       // awaiting_input → running
    assert.ok(paths.includes('execution.requested_input'));       // requested → provided + answer
    assert.ok(paths.includes('continuity.pending_action'));
    assert.ok(proposal.affected_sections.includes('execution'));
    const inputChange = proposal.changes.find((c) => c.path === 'execution.requested_input');
    assert.deepEqual(inputChange?.after, { id: 'RI-01', status: 'provided', answer: 'Comparar ambas' });
  });

  it('produces zero changes for an unchanged state', () => {
    const base = normalizeMemory(readMemoryFile(OFICINA_PATH));
    const { state } = initializeFromMemory(base);
    const proposal = generateUpdateProposal({
      base, current: state, reason: 'nenhuma', originatingDecision: 'none', provenance: [],
    });
    assert.equal(proposal.changes.length, 0);
  });

  it('never emits any status other than proposed and references (not enforces) authority', () => {
    const base = normalizeMemory(readMemoryFile(OFICINA_PATH));
    const { state } = initializeFromMemory(base);
    const proposal = generateUpdateProposal({
      base, current: state, reason: 'x', originatingDecision: 'x', provenance: [],
    });
    assert.equal(proposal.status, 'proposed');
    assert.match(proposal.required_authority, /experimental_only/);
  });

  it('flags a proposal built over an outdated base version (stale update)', () => {
    const base = normalizeMemory(readMemoryFile(OFICINA_PATH));
    const { state } = initializeFromMemory(base);
    const proposal = generateUpdateProposal({
      base, current: state, reason: 'x', originatingDecision: 'x', provenance: [],
    });
    const newerBase = { ...base, content_version: 2 };
    const check = validateProposalAgainstBase(proposal, newerBase);
    assert.equal(check.applicable, false);
    assert.match(check.reason, /decisão humana/);
    const sameBase = validateProposalAgainstBase(proposal, base);
    assert.equal(sameBase.applicable, true);
  });

  it('NO AUTO-WRITE: the canonical file is byte-identical after the full read→work→propose cycle', () => {
    const before = readFileSync(OFICINA_PATH, 'utf-8');
    const base = normalizeMemory(readMemoryFile(OFICINA_PATH));
    let { state } = initializeFromMemory(base);
    state = dispatch(state, { kind: 'ProvideInput', actor: 'product_owner', answer: 'Comparar ambas' });
    generateUpdateProposal({ base, current: state, reason: 'x', originatingDecision: 'x', provenance: [] });
    const after = readFileSync(OFICINA_PATH, 'utf-8');
    assert.equal(after, before);
  });
});
