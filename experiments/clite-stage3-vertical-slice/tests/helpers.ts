import { handleCommand, type Command } from '../src/domain/commands.ts';
import { applyEvent } from '../src/domain/machine.ts';
import type { AppState } from '../src/domain/types.ts';

/** Runs a command that MUST succeed; applies its events. */
export function dispatch(state: AppState, cmd: Command): AppState {
  const result = handleCommand(state, cmd);
  if (!result.ok) {
    throw new Error(`Comando ${cmd.kind} rejeitado inesperadamente: ${result.reason}`);
  }
  return result.events.reduce((s, ev) => applyEvent(s, ev, cmd.kind), state);
}

/** Runs a command expected to FAIL; returns the rejection reason. */
export function expectRejected(state: AppState, cmd: Command): string {
  const result = handleCommand(state, cmd);
  if (result.ok) throw new Error(`Comando ${cmd.kind} deveria ter sido rejeitado.`);
  return result.reason;
}

/** Deterministic happy path up to a named milestone. */
export function runUntil(
  milestone:
    | 'understanding' | 'plan_submitted' | 'authorized' | 'queued' | 'running'
    | 'awaiting_input' | 'failed' | 'completed' | 'under_review' | 'accepted',
  start: AppState,
): AppState {
  let s = start;
  s = dispatch(s, { kind: 'SubmitIdea', actor: 'product_owner', text: 'Quero organizar o atendimento da oficina.' });
  s = dispatch(s, { kind: 'AnswerQuestion', actor: 'product_owner', questionId: 'DQ-01', value: 'Eu e as duas pessoas da recepção.', isUnknown: false });
  s = dispatch(s, { kind: 'AnswerQuestion', actor: 'product_owner', questionId: 'DQ-02', value: 'Os mecânicos também atualizam.', isUnknown: false });
  s = dispatch(s, { kind: 'InspectAssumption', actor: 'product_owner', assumptionId: 'A-01' });
  s = dispatch(s, { kind: 'CorrectAssumption', actor: 'product_owner', assumptionId: 'A-01' });
  s = dispatch(s, { kind: 'ResolveContradiction', actor: 'product_owner', chosenInterpretation: 1 });
  s = dispatch(s, { kind: 'AnswerQuestion', actor: 'product_owner', questionId: 'DQ-03', value: 'Sem conta, pelo aplicativo de mensagens.', isUnknown: false });
  s = dispatch(s, { kind: 'ConfirmUnderstanding', actor: 'product_owner' });
  if (milestone === 'understanding') return s;
  s = dispatch(s, { kind: 'ProposePlan', actor: 'product_owner' });
  s = dispatch(s, { kind: 'RequestPlanRevision', actor: 'product_owner', comment: 'Deixar estoque e pagamento explicitamente fora.' });
  s = dispatch(s, { kind: 'RevisePlan', actor: 'product_owner' });
  s = dispatch(s, { kind: 'SubmitPlan', actor: 'product_owner' });
  if (milestone === 'plan_submitted') return s;
  s = dispatch(s, { kind: 'Authorize', actor: 'decision_authority', reason: 'Escopo limitado a fontes públicas.' });
  if (milestone === 'authorized') return s;
  s = dispatch(s, { kind: 'QueueExecution', actor: 'product_owner' });
  if (milestone === 'queued') return s;
  s = dispatch(s, { kind: 'StartExecution', actor: 'system' });
  if (milestone === 'running') return s;
  s = dispatch(s, { kind: 'AdvanceScenario', actor: 'system' }); // activity 1
  s = dispatch(s, { kind: 'AdvanceScenario', actor: 'system' }); // activity 2
  s = dispatch(s, { kind: 'AdvanceScenario', actor: 'system' }); // input request
  if (milestone === 'awaiting_input') return s;
  s = dispatch(s, { kind: 'ProvideInput', actor: 'product_owner', answer: 'Comparar ambas' });
  s = dispatch(s, { kind: 'AdvanceScenario', actor: 'system' }); // activity 3
  s = dispatch(s, { kind: 'AdvanceScenario', actor: 'system' }); // failure
  if (milestone === 'failed') return s;
  s = dispatch(s, { kind: 'RequestRetry', actor: 'product_owner' });
  s = dispatch(s, { kind: 'StartExecution', actor: 'system' });
  s = dispatch(s, { kind: 'AdvanceScenario', actor: 'system' }); // retry activity
  s = dispatch(s, { kind: 'AdvanceScenario', actor: 'system' }); // completion
  if (milestone === 'completed') return s;
  s = dispatch(s, { kind: 'StartReview', actor: 'product_owner' });
  if (milestone === 'under_review') return s;
  s = dispatch(s, { kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Aceito somente para este ciclo.' });
  return s;
}
