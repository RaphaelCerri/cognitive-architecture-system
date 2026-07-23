import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { initialState } from '../src/machine.ts';
import { deriveMemory } from '../src/memory.ts';
import {
  createMemoryStorage, loadSnapshot, reset, saveSnapshot, serializeSnapshot, SNAPSHOT_KEY,
} from '../src/persistence.ts';
import { OFICINA_HORIZONTE } from '../src/fixtures/oficina-horizonte.ts';
import { ESTUFA_VERTICAL } from '../src/fixtures/estufa-vertical.ts';
import { dispatch, runUntil } from './helpers.ts';

for (const fx of [OFICINA_HORIZONTE, ESTUFA_VERTICAL]) {
  describe(`review outcomes — executable consequences [${fx.projectId}]`, () => {
    it('accept creates a decision, accepts the artifact and bounds the next action', () => {
      const s = runUntil(fx, 'accepted');
      const d = s.decisions.find((x) => x.type === 'review_accept');
      assert.ok(d);
      assert.equal(s.artifact.state, 'accepted');
      assert.match(d!.consequence, /nova proposta/i);
      assert.match(s.pendingAction, /nova proposta/i);
    });

    it('request revision preserves the artifact and creates pending work', () => {
      const underReview = runUntil(fx, 'under_review');
      const s = dispatch(fx, underReview, {
        kind: 'DecideReview', actor: 'decision_authority', outcome: 'revise',
        reason: 'Separar conclusões dependentes de fonte indisponível.',
        affectedScope: 'Seção de comparação',
      });
      assert.equal(s.artifact.state, 'revision_requested');
      assert.ok(s.artifact.item); // artifact preserved
      assert.equal(s.review.comments.length, 1);
      assert.equal(s.review.comments[0]?.affectedScope, 'Seção de comparação');
      assert.ok(s.decisions.some((d) => d.type === 'review_revision'));
    });

    it('reject preserves evidence and history', () => {
      const underReview = runUntil(fx, 'under_review');
      const evidenceBefore = underReview.evidence.length;
      const logBefore = underReview.log.length;
      const s = dispatch(fx, underReview, {
        kind: 'DecideReview', actor: 'decision_authority', outcome: 'reject',
        reason: 'Evidência insuficiente para a conclusão.',
      });
      assert.equal(s.artifact.state, 'rejected');
      assert.equal(s.evidence.length, evidenceBefore);
      assert.ok(s.log.length > logBefore);
      assert.match(s.pendingAction, /plano/i);
    });
  });

  describe(`Project Memory — derived view [${fx.projectId}]`, () => {
    it('reconstructs summary, changes, pending action and provenance-like history', () => {
      const s = runUntil(fx, 'accepted');
      const m = deriveMemory(s);
      assert.ok(m.projectSummary.includes(fx.projectName));
      assert.ok(m.initialIntent.length > 0);
      assert.ok(m.assumptions.some((a) => a.startsWith('Corrigida')));
      assert.match(m.plan, /Versão 2/);
      assert.match(m.authorizationDecision, /aprovar não a inicia/i);
      assert.equal(m.evidence.length, s.evidence.length);
      assert.ok(m.evidence.some((e) => e.includes('indisponível')));
      assert.match(m.reviewDecision, /Consequência/);
      assert.ok(m.recentChanges.length > 0);
      assert.deepEqual(m.unresolvedItems, fx.understanding.unknowns);
    });

    it('never exposes repository paths or internal IDs as primary experience', () => {
      const s = runUntil(fx, 'accepted');
      const m = deriveMemory(s);
      const all = JSON.stringify(m);
      assert.doesNotMatch(all, /knowledge\/research|milestones\/|\.md\b/);
      assert.doesNotMatch(all, /research_executor/);
    });

    it('derives from domain state and events only — no DOM, no rendered strings', () => {
      // deriveMemory receives ONLY AppState; this test reconstructs the same
      // memory from a JSON round-trip of the state (no live object, no UI).
      const s = runUntil(fx, 'accepted');
      const rehydrated = JSON.parse(JSON.stringify(s));
      assert.deepEqual(deriveMemory(rehydrated), deriveMemory(s));
    });
  });

  describe(`persistence boundary — in-memory adapter [${fx.projectId}]`, () => {
    it('saves and restores a snapshot with matching versions', () => {
      const storage = createMemoryStorage();
      const s = runUntil(fx, 'under_review');
      saveSnapshot(fx, storage, s);
      const restored = loadSnapshot(fx, storage);
      assert.equal(restored.kind, 'restored');
      if (restored.kind === 'restored') {
        assert.equal(restored.state.artifact.state, 'under_review');
        assert.equal(restored.state.seq, s.seq);
      }
    });

    it('invalidates the snapshot when fixture or contract version changes', () => {
      const storage = createMemoryStorage();
      const s = runUntil(fx, 'queued');
      const tampered = serializeSnapshot(fx, s).replace(fx.version, 'other-version-0.0');
      storage.set(SNAPSHOT_KEY, tampered);
      const result = loadSnapshot(fx, storage);
      assert.equal(result.kind, 'invalidated');
      assert.equal(storage.get(SNAPSHOT_KEY), null); // discarded
    });

    it('discards a corrupted snapshot instead of crashing', () => {
      const storage = createMemoryStorage();
      storage.set(SNAPSHOT_KEY, '{not json');
      assert.equal(loadSnapshot(fx, storage).kind, 'invalidated');
    });

    it('reset removes the snapshot and rebuilds the fixture state deterministically', () => {
      const storage = createMemoryStorage();
      saveSnapshot(fx, storage, runUntil(fx, 'accepted'));
      const fresh = reset(fx, storage);
      assert.equal(storage.get(SNAPSHOT_KEY), null);
      assert.deepEqual(fresh, initialState(fx));
    });

    it('a snapshot from one fixture never restores under another', () => {
      const other = fx === OFICINA_HORIZONTE ? ESTUFA_VERTICAL : OFICINA_HORIZONTE;
      const storage = createMemoryStorage();
      saveSnapshot(fx, storage, runUntil(fx, 'queued'));
      assert.equal(loadSnapshot(other, storage).kind, 'invalidated');
    });
  });
}
