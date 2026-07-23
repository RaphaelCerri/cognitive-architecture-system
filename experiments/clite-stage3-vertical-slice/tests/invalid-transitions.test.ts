import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { applyEvent, initialState, InvalidTransitionError } from '../src/domain/machine.ts';
import { dispatch, expectRejected, runUntil } from './helpers.ts';

describe('invalid transitions — every rejection explains itself', () => {
  it('1. approval cannot start execution directly (approved → running)', () => {
    const authorized = runUntil('authorized', initialState());
    const reason = expectRejected(authorized, { kind: 'StartExecution', actor: 'system' });
    assert.match(reason, /Aprovação não inicia/);
  });

  it('2. execution cannot be queued without authorization', () => {
    const early = runUntil('understanding', initialState());
    const reason = expectRejected(early, { kind: 'QueueExecution', actor: 'product_owner' });
    assert.match(reason, /aprovação válida/);
  });

  it('3. retry is rejected on completed execution', () => {
    const completed = runUntil('completed', initialState());
    const reason = expectRejected(completed, { kind: 'RequestRetry', actor: 'product_owner' });
    assert.match(reason, /já foi concluída/);
  });

  it('4. failed → completed direct is an invalid event application', () => {
    const failed = runUntil('failed', initialState());
    assert.throws(
      () => applyEvent(failed, { type: 'EXECUTION_COMPLETED', actor: 'system' }, 'test'),
      InvalidTransitionError,
    );
  });

  it('5. the research executor cannot accept its own result', () => {
    const underReview = runUntil('under_review', initialState());
    const reason = expectRejected(underReview, {
      kind: 'DecideReview', actor: 'research_executor', outcome: 'accept', reason: 'Autoaprovação.',
    });
    assert.match(reason, /não pode aceitar ou rejeitar o próprio resultado/);
  });

  it('6. review cannot start before an artifact exists', () => {
    const running = runUntil('running', initialState());
    const reason = expectRejected(running, { kind: 'StartReview', actor: 'product_owner' });
    assert.match(reason, /não há resultado/i);
  });

  it('7. accept is rejected when no usable evidence exists', () => {
    const underReview = runUntil('under_review', initialState());
    const crippled = structuredClone(underReview);
    for (const e of crippled.evidence) e.status = 'unavailable';
    const reason = expectRejected(crippled, {
      kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Tentativa.',
    });
    assert.match(reason, /evidência utilizável/);
  });

  it('8. sensitive actions are blocked on a stale view until refresh', () => {
    const underReview = runUntil('under_review', initialState());
    const resumed = dispatch(underReview, { kind: 'ResumeProject', actor: 'product_owner' });
    assert.equal(resumed.ui.state, 'stale_view');
    const reason = expectRejected(resumed, {
      kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Sem atualizar.',
    });
    assert.match(reason, /desatualizado/);
    const refreshed = dispatch(resumed, { kind: 'RefreshView', actor: 'product_owner' });
    const decided = dispatch(refreshed, {
      kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Após atualizar.',
    });
    assert.equal(decided.artifact.state, 'accepted');
  });

  it('9. cancel is rejected after a terminal state', () => {
    const completed = runUntil('completed', initialState());
    const reason = expectRejected(completed, { kind: 'CancelExecution', actor: 'product_owner', reason: 'Tarde.' });
    assert.match(reason, /já encerrada/);
  });

  it('10. assumptions cannot change after plan submission without reopening', () => {
    const submitted = runUntil('plan_submitted', initialState());
    const fresh = structuredClone(submitted);
    fresh.discovery.assumptions.push({
      id: 'A-02', text: 'Nova suposição.', origin: 'teste', confidence: 'baixa',
      impact: 'teste', status: 'active',
    });
    const reason = expectRejected(fresh, { kind: 'CorrectAssumption', actor: 'product_owner', assumptionId: 'A-02' });
    assert.match(reason, /reabrir a descoberta/);
  });

  it('non-executor without authority cannot authorize', () => {
    const submitted = runUntil('plan_submitted', initialState());
    const reason = expectRejected(submitted, { kind: 'Authorize', actor: 'research_executor', reason: 'Autoautorização.' });
    assert.match(reason, /Quem executa não aprova/);
  });

  it('empty idea is rejected with retained-input guidance', () => {
    const reason = expectRejected(initialState(), { kind: 'SubmitIdea', actor: 'product_owner', text: '   ' });
    assert.match(reason, /texto digitado foi mantido/);
  });

  it('input outside the offered options is rejected (no scope widening)', () => {
    const awaiting = runUntil('awaiting_input', initialState());
    const reason = expectRejected(awaiting, { kind: 'ProvideInput', actor: 'product_owner', answer: 'Ampliar tudo' });
    assert.match(reason, /não amplia o escopo/);
  });
});
