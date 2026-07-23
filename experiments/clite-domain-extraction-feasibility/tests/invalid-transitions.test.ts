import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { applyEvent, initialState, InvalidTransitionError } from '../src/machine.ts';
import { OFICINA_HORIZONTE } from '../src/fixtures/oficina-horizonte.ts';
import { ESTUFA_VERTICAL } from '../src/fixtures/estufa-vertical.ts';
import { dispatch, expectRejected, runUntil } from './helpers.ts';

for (const fx of [OFICINA_HORIZONTE, ESTUFA_VERTICAL]) {
  describe(`invalid transitions — every rejection explains itself [${fx.projectId}]`, () => {
    it('1. approval cannot start execution directly (approved → running)', () => {
      const authorized = runUntil(fx, 'authorized');
      const reason = expectRejected(fx, authorized, { kind: 'StartExecution', actor: 'system' });
      assert.match(reason, /Aprovação não inicia/);
    });

    it('2. execution cannot be queued without authorization', () => {
      const early = runUntil(fx, 'understanding');
      const reason = expectRejected(fx, early, { kind: 'QueueExecution', actor: 'product_owner' });
      assert.match(reason, /aprovação válida/);
    });

    it('3. retry is rejected on completed execution', () => {
      const completed = runUntil(fx, 'completed');
      const reason = expectRejected(fx, completed, { kind: 'RequestRetry', actor: 'product_owner' });
      assert.match(reason, /já foi concluída/);
    });

    it('4. failed → completed direct is an invalid event application', () => {
      const failed = runUntil(fx, 'failed');
      assert.throws(
        () => applyEvent(fx, failed, { type: 'EXECUTION_COMPLETED', actor: 'system' }, 'test'),
        InvalidTransitionError,
      );
    });

    it('5. the research executor cannot accept its own result', () => {
      const underReview = runUntil(fx, 'under_review');
      const reason = expectRejected(fx, underReview, {
        kind: 'DecideReview', actor: 'research_executor', outcome: 'accept', reason: 'Autoaprovação.',
      });
      assert.match(reason, /não pode aceitar ou rejeitar o próprio resultado/);
    });

    it('6. review cannot start before an artifact exists', () => {
      const running = runUntil(fx, 'running');
      const reason = expectRejected(fx, running, { kind: 'StartReview', actor: 'product_owner' });
      assert.match(reason, /não há resultado/i);
    });

    it('7. accept is rejected when no usable evidence exists', () => {
      const underReview = runUntil(fx, 'under_review');
      const crippled = structuredClone(underReview);
      for (const e of crippled.evidence) e.status = 'unavailable';
      const reason = expectRejected(fx, crippled, {
        kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Tentativa.',
      });
      assert.match(reason, /evidência utilizável/);
    });

    it('8. sensitive actions are blocked on stale context until refresh', () => {
      const underReview = runUntil(fx, 'under_review');
      const resumed = dispatch(fx, underReview, { kind: 'ResumeProject', actor: 'product_owner' });
      assert.equal(resumed.context.stale, true); // representable without a browser
      const reason = expectRejected(fx, resumed, {
        kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Sem atualizar.',
      });
      assert.match(reason, /desatualizado/);
      const refreshed = dispatch(fx, resumed, { kind: 'RefreshContext', actor: 'product_owner' });
      assert.equal(refreshed.context.stale, false);
      const decided = dispatch(fx, refreshed, {
        kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Após atualizar.',
      });
      assert.equal(decided.artifact.state, 'accepted');
    });

    it('9. cancel is rejected after a terminal state', () => {
      const completed = runUntil(fx, 'completed');
      const reason = expectRejected(fx, completed, { kind: 'CancelExecution', actor: 'product_owner', reason: 'Tarde.' });
      assert.match(reason, /já encerrada/);
    });

    it('10. assumptions cannot change after plan submission without reopening', () => {
      const submitted = runUntil(fx, 'plan_submitted');
      const fresh = structuredClone(submitted);
      fresh.discovery.assumptions.push({
        id: 'X-99', text: 'Nova suposição.', origin: 'teste', confidence: 'baixa',
        impact: 'teste', status: 'active',
      });
      const reason = expectRejected(fx, fresh, { kind: 'CorrectAssumption', actor: 'product_owner', assumptionId: 'X-99' });
      assert.match(reason, /reabrir a descoberta/);
    });

    it('executor without authority cannot authorize (self-authorization)', () => {
      const submitted = runUntil(fx, 'plan_submitted');
      const reason = expectRejected(fx, submitted, { kind: 'Authorize', actor: 'research_executor', reason: 'Autoautorização.' });
      assert.match(reason, /Quem executa não aprova/);
    });

    it('empty idea is rejected with retained-input guidance', () => {
      const reason = expectRejected(fx, initialState(fx), { kind: 'SubmitIdea', actor: 'product_owner', text: '   ' });
      assert.match(reason, /texto digitado foi mantido/);
    });

    it('input outside the offered options is rejected (no scope widening)', () => {
      const awaiting = runUntil(fx, 'awaiting_input');
      const reason = expectRejected(fx, awaiting, { kind: 'ProvideInput', actor: 'product_owner', answer: 'Ampliar tudo' });
      assert.match(reason, /não amplia o escopo/);
    });
  });
}
