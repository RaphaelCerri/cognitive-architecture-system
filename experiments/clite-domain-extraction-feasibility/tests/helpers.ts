/**
 * Fixture-generic test driver: no question ID, answer text or step ordering
 * from any specific scenario is hardcoded here. The driver reacts to domain
 * state, which is exactly what proves scenario independence.
 */
import { handleCommand, type Command } from '../src/commands.ts';
import { applyEvent, initialState } from '../src/machine.ts';
import type { AppState } from '../src/types.ts';
import type { ScenarioFixture } from '../src/fixture-contract.ts';

export function dispatch(fx: ScenarioFixture, state: AppState, cmd: Command): AppState {
  const result = handleCommand(fx, state, cmd);
  if (!result.ok) {
    throw new Error(`Comando ${cmd.kind} rejeitado inesperadamente: ${result.reason}`);
  }
  return result.events.reduce((s, ev) => applyEvent(fx, s, ev, cmd.kind), state);
}

export function expectRejected(fx: ScenarioFixture, state: AppState, cmd: Command): string {
  const result = handleCommand(fx, state, cmd);
  if (result.ok) throw new Error(`Comando ${cmd.kind} deveria ter sido rejeitado.`);
  return result.reason;
}

export type Milestone =
  | 'understanding' | 'plan_submitted' | 'authorized' | 'queued' | 'running'
  | 'awaiting_input' | 'failed' | 'completed' | 'under_review' | 'accepted';

/** Deterministic happy path up to a named milestone, derived from the fixture. */
export function runUntil(fx: ScenarioFixture, milestone: Milestone, start?: AppState): AppState {
  let s = start ?? initialState(fx);
  s = dispatch(fx, s, { kind: 'SubmitIdea', actor: 'product_owner', text: `Ideia inicial de ${fx.projectName}.` });

  // Discovery: answer every question in fixture order; when the contradiction
  // opens, inspect and correct the first active assumption, then resolve it.
  for (const q of fx.questions) {
    s = dispatch(fx, s, {
      kind: 'AnswerQuestion', actor: 'product_owner',
      questionId: q.id, value: `Resposta sintética para ${q.id}.`, isUnknown: false,
    });
    const contradiction = s.discovery.contradiction;
    if (contradiction?.status === 'open') {
      const active = s.discovery.assumptions.find((a) => a.status === 'active');
      if (active) {
        s = dispatch(fx, s, { kind: 'InspectAssumption', actor: 'product_owner', assumptionId: active.id });
        s = dispatch(fx, s, { kind: 'CorrectAssumption', actor: 'product_owner', assumptionId: active.id });
      }
      const lastInterpretation = contradiction.interpretations.length - 1;
      s = dispatch(fx, s, { kind: 'ResolveContradiction', actor: 'product_owner', chosenInterpretation: lastInterpretation });
    }
  }
  s = dispatch(fx, s, { kind: 'ConfirmUnderstanding', actor: 'product_owner' });
  if (milestone === 'understanding') return s;

  s = dispatch(fx, s, { kind: 'ProposePlan', actor: 'product_owner' });
  s = dispatch(fx, s, { kind: 'RequestPlanRevision', actor: 'product_owner', comment: 'Deixar limites explícitos.' });
  s = dispatch(fx, s, { kind: 'RevisePlan', actor: 'product_owner' });
  s = dispatch(fx, s, { kind: 'SubmitPlan', actor: 'product_owner' });
  if (milestone === 'plan_submitted') return s;

  s = dispatch(fx, s, { kind: 'Authorize', actor: 'decision_authority', reason: 'Escopo limitado a fontes públicas.' });
  if (milestone === 'authorized') return s;
  s = dispatch(fx, s, { kind: 'QueueExecution', actor: 'product_owner' });
  if (milestone === 'queued') return s;
  s = dispatch(fx, s, { kind: 'StartExecution', actor: 'system' });
  if (milestone === 'running') return s;

  // Execution: react to domain state instead of scripting step positions.
  let retried = false;
  for (let guard = 0; guard < 100; guard += 1) {
    if (s.execution.state === 'awaiting_input') {
      if (milestone === 'awaiting_input') return s;
      const firstOption = s.execution.requestedInput!.options[0]!;
      s = dispatch(fx, s, { kind: 'ProvideInput', actor: 'product_owner', answer: firstOption });
    } else if (s.execution.state === 'failed') {
      if (milestone === 'failed') return s;
      if (retried) throw new Error('Cenário falhou duas vezes; fixture inesperado.');
      retried = true;
      s = dispatch(fx, s, { kind: 'RequestRetry', actor: 'product_owner' });
      s = dispatch(fx, s, { kind: 'StartExecution', actor: 'system' });
    } else if (s.execution.state === 'running') {
      s = dispatch(fx, s, { kind: 'AdvanceScenario', actor: 'system' });
    } else if (s.execution.state === 'completed') {
      break;
    } else {
      throw new Error(`Estado de execução inesperado no driver: ${s.execution.state}`);
    }
  }
  if (s.execution.state !== 'completed') throw new Error('O cenário não chegou à conclusão.');
  if (milestone === 'completed') return s;

  s = dispatch(fx, s, { kind: 'StartReview', actor: 'product_owner' });
  if (milestone === 'under_review') return s;
  s = dispatch(fx, s, { kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Aceito somente para este ciclo.' });
  return s;
}
