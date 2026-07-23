import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { initialState } from '../src/domain/machine.ts';
import { dispatch, runUntil } from './helpers.ts';

describe('governed cycle — valid transitions', () => {
  it('completes the full journey idea → accept with separated families', () => {
    const s = runUntil('accepted', initialState());
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
    const authorized = runUntil('authorized', initialState());
    assert.equal(authorized.authorization.state, 'approved');
    assert.equal(authorized.execution.state, 'none'); // approving starts nothing
    const queued = dispatch(authorized, { kind: 'QueueExecution', actor: 'product_owner' });
    assert.equal(queued.execution.state, 'queued'); // queued != running
    const running = dispatch(queued, { kind: 'StartExecution', actor: 'system' });
    assert.equal(running.execution.state, 'running');
  });

  it('records requested input with an observable effect (F-04)', () => {
    const awaiting = runUntil('awaiting_input', initialState());
    assert.equal(awaiting.execution.state, 'awaiting_input');
    const resumed = dispatch(awaiting, { kind: 'ProvideInput', actor: 'product_owner', answer: 'Comparar ambas' });
    assert.equal(resumed.execution.state, 'running');
    assert.equal(resumed.execution.requestedInput?.status, 'provided');
    const resumeActivity = resumed.execution.activities.at(-1);
    assert.match(resumeActivity?.note ?? '', /Comparar ambas/);
    assert.ok(resumed.log.some((l) => l.eventType === 'INPUT_PROVIDED'));
    assert.ok(resumed.log.some((l) => l.eventType === 'EXECUTION_RESUMED'));
  });

  it('preserves partial work through failure and retry (F-03 explicit path)', () => {
    const failed = runUntil('failed', initialState());
    assert.equal(failed.execution.state, 'failed');
    assert.ok(failed.execution.failure);
    const notesBefore = failed.execution.activities.length;
    assert.ok(failed.evidence.some((e) => e.status === 'unavailable'));

    const retried = dispatch(failed, { kind: 'RequestRetry', actor: 'product_owner' });
    assert.equal(retried.execution.state, 'queued'); // failed → retry_requested → queued
    const running = dispatch(retried, { kind: 'StartExecution', actor: 'system' });
    assert.equal(running.execution.state, 'running');
    assert.equal(running.execution.activities.length, notesBefore); // nothing erased
    const done = dispatch(dispatch(running, { kind: 'AdvanceScenario', actor: 'system' }), { kind: 'AdvanceScenario', actor: 'system' });
    assert.equal(done.execution.state, 'completed');
  });

  it('cancel preserves history and is terminal', () => {
    const failed = runUntil('failed', initialState());
    const cancelled = dispatch(failed, { kind: 'CancelExecution', actor: 'product_owner', reason: 'Escopo será revisto.' });
    assert.equal(cancelled.execution.state, 'cancelled');
    assert.ok(cancelled.execution.activities.length > 0); // preserved
    assert.ok(cancelled.decisions.some((d) => d.type === 'cancellation'));
  });

  it('denial creates no execution and preserves plan history', () => {
    const submitted = runUntil('plan_submitted', initialState());
    const denied = dispatch(submitted, { kind: 'Deny', actor: 'decision_authority', reason: 'Escopo de identidade amplo.' });
    assert.equal(denied.authorization.state, 'denied');
    assert.equal(denied.execution.state, 'none');
    assert.equal(denied.plan.versions.length, 2); // both versions preserved
  });

  it('plan revision preserves lineage (version 1 kept, version 2 created)', () => {
    const submitted = runUntil('plan_submitted', initialState());
    assert.equal(submitted.plan.versions.length, 2);
    assert.equal(submitted.plan.versions[0]?.version, 1);
    assert.equal(submitted.plan.versions[1]?.version, 2);
    assert.equal(submitted.plan.revisionComments.length, 1);
  });

  it('is deterministic: two identical runs yield identical results', () => {
    const a = runUntil('accepted', initialState());
    const b = runUntil('accepted', initialState());
    assert.equal(a.clockTick, b.clockTick);
    assert.equal(a.seq, b.seq);
    assert.deepEqual(a.log.map((l) => l.eventType), b.log.map((l) => l.eventType));
    assert.deepEqual(a.evidence, b.evidence);
  });
});
