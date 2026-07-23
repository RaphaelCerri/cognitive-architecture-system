import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { initialState } from '../src/machine.ts';
import { OFICINA_HORIZONTE } from '../src/fixtures/oficina-horizonte.ts';
import { ESTUFA_VERTICAL } from '../src/fixtures/estufa-vertical.ts';
import { dispatch, runUntil } from './helpers.ts';

// The full valid-transition suite runs against BOTH fixtures: the same
// mechanics must hold regardless of scenario content.
for (const fx of [OFICINA_HORIZONTE, ESTUFA_VERTICAL]) {
  describe(`governed cycle — valid transitions [${fx.projectId}]`, () => {
    it('completes the full journey idea → accept with separated families', () => {
      const s = runUntil(fx, 'accepted');
      assert.equal(s.project.state, 'resolved');
      assert.equal(s.plan.state, 'submitted');
      assert.equal(s.authorization.state, 'approved');
      assert.equal(s.execution.state, 'completed');
      assert.equal(s.artifact.state, 'accepted');
      assert.equal(s.review.state, 'decided');
      // no universal status: families evolve independently
      assert.notEqual(s.project.state as string, s.execution.state as string);
    });

    it('separates approval from queue and start (authorization != execution)', () => {
      const authorized = runUntil(fx, 'authorized');
      assert.equal(authorized.authorization.state, 'approved');
      assert.equal(authorized.execution.state, 'none'); // approving starts nothing
      const queued = dispatch(fx, authorized, { kind: 'QueueExecution', actor: 'product_owner' });
      assert.equal(queued.execution.state, 'queued'); // queued != running
      const running = dispatch(fx, queued, { kind: 'StartExecution', actor: 'system' });
      assert.equal(running.execution.state, 'running');
    });

    it('records requested input with an observable effect (F-04)', () => {
      const awaiting = runUntil(fx, 'awaiting_input');
      assert.equal(awaiting.execution.state, 'awaiting_input');
      const answer = awaiting.execution.requestedInput!.options[0]!;
      const resumed = dispatch(fx, awaiting, { kind: 'ProvideInput', actor: 'product_owner', answer });
      assert.equal(resumed.execution.state, 'running');
      assert.equal(resumed.execution.requestedInput?.status, 'provided');
      const resumeActivity = resumed.execution.activities.at(-1);
      assert.ok(resumeActivity?.note?.includes(answer));
      assert.ok(resumed.log.some((l) => l.eventType === 'INPUT_PROVIDED'));
      assert.ok(resumed.log.some((l) => l.eventType === 'EXECUTION_RESUMED'));
    });

    it('preserves partial work through failure and retry (F-03 explicit path)', () => {
      const failed = runUntil(fx, 'failed');
      assert.equal(failed.execution.state, 'failed');
      assert.ok(failed.execution.failure);
      const notesBefore = failed.execution.activities.length;
      assert.ok(failed.evidence.some((e) => e.status === 'unavailable'));

      const retried = dispatch(fx, failed, { kind: 'RequestRetry', actor: 'product_owner' });
      assert.equal(retried.execution.state, 'queued'); // failed → retry_requested → queued
      const running = dispatch(fx, retried, { kind: 'StartExecution', actor: 'system' });
      assert.equal(running.execution.state, 'running');
      assert.equal(running.execution.activities.length, notesBefore); // nothing erased
    });

    it('cancel preserves history and is terminal', () => {
      const failed = runUntil(fx, 'failed');
      const cancelled = dispatch(fx, failed, { kind: 'CancelExecution', actor: 'product_owner', reason: 'Escopo será revisto.' });
      assert.equal(cancelled.execution.state, 'cancelled');
      assert.ok(cancelled.execution.activities.length > 0); // preserved
      assert.ok(cancelled.decisions.some((d) => d.type === 'cancellation'));
    });

    it('denial creates no execution and preserves plan history', () => {
      const submitted = runUntil(fx, 'plan_submitted');
      const denied = dispatch(fx, submitted, { kind: 'Deny', actor: 'decision_authority', reason: 'Escopo amplo.' });
      assert.equal(denied.authorization.state, 'denied');
      assert.equal(denied.execution.state, 'none');
      assert.equal(denied.plan.versions.length, 2); // both versions preserved
    });

    it('plan revision preserves lineage (version 1 kept, version 2 created)', () => {
      const submitted = runUntil(fx, 'plan_submitted');
      assert.equal(submitted.plan.versions.length, 2);
      assert.equal(submitted.plan.versions[0]?.version, 1);
      assert.equal(submitted.plan.versions[1]?.version, 2);
      assert.equal(submitted.plan.revisionComments.length, 1);
    });

    it('is deterministic: two identical runs yield identical results', () => {
      const a = runUntil(fx, 'accepted');
      const b = runUntil(fx, 'accepted');
      assert.equal(a.clockTick, b.clockTick);
      assert.equal(a.seq, b.seq);
      assert.deepEqual(a.log.map((l) => l.eventType), b.log.map((l) => l.eventType));
      assert.deepEqual(a.evidence, b.evidence);
    });

    it('replays deterministically from the recorded event-type history', () => {
      const a = runUntil(fx, 'accepted');
      const replay = runUntil(fx, 'accepted', initialState(fx));
      assert.deepEqual(replay, a); // full deep-equal, not just event names
    });
  });
}
