import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { initialState } from '../src/domain/machine.ts';
import { deriveMemory } from '../src/domain/memory.ts';
import {
  loadSnapshot, reset, saveSnapshot, serializeSnapshot, SNAPSHOT_KEY, type StorageAdapter,
} from '../src/app/persistence.ts';
import { dispatch, runUntil } from './helpers.ts';

function memStorage(): StorageAdapter & { map: Map<string, string> } {
  const map = new Map<string, string>();
  return {
    map,
    get: (k) => map.get(k) ?? null,
    set: (k, v) => void map.set(k, v),
    remove: (k) => void map.delete(k),
  };
}

describe('review outcomes — executable consequences', () => {
  it('accept creates a decision, accepts the artifact and bounds the next action', () => {
    const s = runUntil('accepted', initialState());
    const d = s.decisions.find((x) => x.type === 'review_accept');
    assert.ok(d);
    assert.equal(s.artifact.state, 'accepted');
    assert.match(d!.consequence, /nova proposta/i);
    assert.match(s.pendingAction, /nova proposta/i);
  });

  it('request revision preserves the artifact and creates pending work', () => {
    const underReview = runUntil('under_review', initialState());
    const s = dispatch(underReview, {
      kind: 'DecideReview', actor: 'decision_authority', outcome: 'revise',
      reason: 'Separar a conclusão sobre autoria da conclusão sobre registro do momento.',
      affectedScope: 'Seção de aprovação externa',
    });
    assert.equal(s.artifact.state, 'revision_requested');
    assert.ok(s.artifact.item); // artifact preserved
    assert.equal(s.review.comments.length, 1);
    assert.equal(s.review.comments[0]?.affectedScope, 'Seção de aprovação externa');
    assert.ok(s.decisions.some((d) => d.type === 'review_revision'));
  });

  it('reject preserves evidence and history', () => {
    const underReview = runUntil('under_review', initialState());
    const evidenceBefore = underReview.evidence.length;
    const logBefore = underReview.log.length;
    const s = dispatch(underReview, {
      kind: 'DecideReview', actor: 'decision_authority', outcome: 'reject',
      reason: 'Evidência insuficiente para a conclusão de identidade.',
    });
    assert.equal(s.artifact.state, 'rejected');
    assert.equal(s.evidence.length, evidenceBefore);
    assert.ok(s.log.length > logBefore);
    assert.match(s.pendingAction, /plano/i);
  });
});

describe('Project Memory — derived view', () => {
  it('reconstructs summary, changes, pending action and provenance-like history', () => {
    const s = runUntil('accepted', initialState());
    const m = deriveMemory(s);
    assert.match(m.projectSummary, /Oficina Horizonte/);
    assert.match(m.initialIntent, /atendimento/);
    assert.ok(m.assumptions.some((a) => a.startsWith('Corrigida')));
    assert.match(m.plan, /Versão 2/);
    assert.match(m.authorizationDecision, /aprovar não a inicia/i);
    assert.equal(m.evidence.length, 3);
    assert.ok(m.evidence.some((e) => e.includes('indisponível')));
    assert.match(m.reviewDecision, /Consequência/);
    assert.ok(m.recentChanges.length > 0);
    assert.ok(m.unresolvedItems.some((u) => /identidade/i.test(u)));
  });

  it('never exposes repository paths or internal IDs as primary experience', () => {
    const s = runUntil('accepted', initialState());
    const m = deriveMemory(s);
    const all = JSON.stringify(m);
    assert.doesNotMatch(all, /knowledge\/research|milestones\/|\.md\b/);
    assert.doesNotMatch(all, /research_executor/);
  });
});

describe('persistence — snapshot and deterministic reset', () => {
  it('saves and restores a snapshot with matching versions', () => {
    const storage = memStorage();
    const s = runUntil('under_review', initialState());
    saveSnapshot(storage, s);
    const restored = loadSnapshot(storage);
    assert.equal(restored.kind, 'restored');
    if (restored.kind === 'restored') {
      assert.equal(restored.state.artifact.state, 'under_review');
      assert.equal(restored.state.seq, s.seq);
    }
  });

  it('invalidates the snapshot when fixture or contract version changes', () => {
    const storage = memStorage();
    const s = runUntil('queued', initialState());
    const tampered = serializeSnapshot(s).replace('clite-fixture-1.0', 'clite-fixture-0.9');
    storage.set(SNAPSHOT_KEY, tampered);
    const result = loadSnapshot(storage);
    assert.equal(result.kind, 'invalidated');
    assert.equal(storage.get(SNAPSHOT_KEY), null); // discarded
  });

  it('discards a corrupted snapshot instead of crashing', () => {
    const storage = memStorage();
    storage.set(SNAPSHOT_KEY, '{not json');
    assert.equal(loadSnapshot(storage).kind, 'invalidated');
  });

  it('reset removes the snapshot and rebuilds the fixture state deterministically', () => {
    const storage = memStorage();
    saveSnapshot(storage, runUntil('accepted', initialState()));
    const fresh = reset(storage);
    assert.equal(storage.get(SNAPSHOT_KEY), null);
    assert.deepEqual(fresh, initialState());
  });
});
