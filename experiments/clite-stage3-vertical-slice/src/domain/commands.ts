/**
 * Commands — validated requests. A rejected command emits NO domain event
 * and returns an explanation. Authority here is representation with
 * consequence (guards), never real access control.
 */
import type { ActorRole, AppState } from './types.ts';
import type { CommandResult, DomainEvent } from './events.ts';
import * as FX from './fixture.ts';

export type Command =
  | { kind: 'SubmitIdea'; actor: ActorRole; text: string }
  | { kind: 'AnswerQuestion'; actor: ActorRole; questionId: string; value: string; isUnknown: boolean }
  | { kind: 'InspectAssumption'; actor: ActorRole; assumptionId: string }
  | { kind: 'CorrectAssumption'; actor: ActorRole; assumptionId: string }
  | { kind: 'ResolveContradiction'; actor: ActorRole; chosenInterpretation: number }
  | { kind: 'ConfirmUnderstanding'; actor: ActorRole }
  | { kind: 'ProposePlan'; actor: ActorRole }
  | { kind: 'RequestPlanRevision'; actor: ActorRole; comment: string }
  | { kind: 'RevisePlan'; actor: ActorRole }
  | { kind: 'SubmitPlan'; actor: ActorRole }
  | { kind: 'Authorize'; actor: ActorRole; reason: string }
  | { kind: 'Deny'; actor: ActorRole; reason: string }
  | { kind: 'QueueExecution'; actor: ActorRole }
  | { kind: 'StartExecution'; actor: ActorRole }
  | { kind: 'AdvanceScenario'; actor: ActorRole }
  | { kind: 'ProvideInput'; actor: ActorRole; answer: string }
  | { kind: 'ResumeExecution'; actor: ActorRole }
  | { kind: 'PauseExecution'; actor: ActorRole }
  | { kind: 'RequestRetry'; actor: ActorRole }
  | { kind: 'ReviseScope'; actor: ActorRole }
  | { kind: 'CancelExecution'; actor: ActorRole; reason: string }
  | { kind: 'StartReview'; actor: ActorRole }
  | { kind: 'DecideReview'; actor: ActorRole; outcome: 'accept' | 'revise' | 'reject'; reason: string; affectedScope?: string }
  | { kind: 'ResumeProject'; actor: ActorRole }
  | { kind: 'RefreshView'; actor: ActorRole };

const SENSITIVE: Command['kind'][] = [
  'Authorize', 'Deny', 'QueueExecution', 'StartExecution', 'DecideReview',
  'CancelExecution', 'RequestRetry', 'ReviseScope',
];

function reject(reason: string): CommandResult {
  return { ok: false, reason };
}

export function handleCommand(state: AppState, cmd: Command): CommandResult {
  // Stale-view guard: sensitive actions require refreshed context after resume.
  if (state.ui.state === 'stale_view' && SENSITIVE.includes(cmd.kind)) {
    return reject('O contexto exibido pode estar desatualizado. Atualize a visão antes de ações sensíveis.');
  }

  switch (cmd.kind) {
    case 'SubmitIdea': {
      if (state.project.state !== 'draft') return reject('A ideia já foi enviada.');
      if (!cmd.text.trim()) {
        return reject('A ideia está vazia. Descreva o que você quer melhorar; o texto digitado foi mantido.');
      }
      return { ok: true, events: [{ type: 'IDEA_SUBMITTED', actor: cmd.actor, text: cmd.text }] };
    }
    case 'AnswerQuestion': {
      if (state.project.state !== 'discovering') return reject('A descoberta não está ativa.');
      const q = state.discovery.questions.find((x) => x.id === cmd.questionId);
      if (!q) return reject('Pergunta desconhecida.');
      if (q.status !== 'asked') return reject('Esta pergunta já foi tratada.');
      return {
        ok: true,
        events: [{
          type: 'DISCOVERY_ANSWERED', actor: cmd.actor,
          questionId: cmd.questionId, value: cmd.value, isUnknown: cmd.isUnknown,
        }],
      };
    }
    case 'InspectAssumption':
      return { ok: true, events: [{ type: 'ASSUMPTION_INSPECTED', actor: cmd.actor, assumptionId: cmd.assumptionId }] };
    case 'CorrectAssumption': {
      if (state.plan.state === 'submitted') {
        return reject('O plano já foi enviado para aprovação. Corrigir suposições agora exige reabrir a descoberta, o que está fora deste ciclo.');
      }
      const a = state.discovery.assumptions.find((x) => x.id === cmd.assumptionId);
      if (!a) return reject('Suposição desconhecida.');
      if (a.status !== 'active') return reject('A suposição já foi corrigida.');
      return {
        ok: true,
        events: [{
          type: 'ASSUMPTION_CORRECTED', actor: cmd.actor,
          assumptionId: cmd.assumptionId, correctedText: FX.CORRECTED_ASSUMPTION_TEXT,
        }],
      };
    }
    case 'ResolveContradiction': {
      const c = state.discovery.contradiction;
      if (!c || c.status !== 'open') return reject('Não há contradição aberta.');
      if (cmd.chosenInterpretation < 0 || cmd.chosenInterpretation >= c.interpretations.length) {
        return reject('Escolha uma das interpretações apresentadas.');
      }
      return {
        ok: true,
        events: [{
          type: 'CONTRADICTION_RESOLVED', actor: cmd.actor,
          contradictionId: c.id, chosenInterpretation: cmd.chosenInterpretation,
        }],
      };
    }
    case 'ConfirmUnderstanding': {
      if (state.project.state !== 'discovering') return reject('Não há descoberta ativa.');
      if (state.discovery.contradiction?.status === 'open') {
        return reject('Há uma contradição aberta. Resolva-a antes de confirmar o entendimento.');
      }
      return { ok: true, events: [{ type: 'UNDERSTANDING_CONFIRMED', actor: cmd.actor }] };
    }
    case 'ProposePlan': {
      if (state.project.state !== 'contextualized') {
        return reject('Confirme o entendimento antes de preparar o plano.');
      }
      return { ok: true, events: [{ type: 'PLAN_PROPOSED', actor: cmd.actor, version: 1 }] };
    }
    case 'RequestPlanRevision': {
      if (state.plan.state !== 'proposed') return reject('Só um plano proposto pode receber pedido de revisão.');
      return { ok: true, events: [{ type: 'PLAN_REVISION_REQUESTED', actor: cmd.actor, comment: cmd.comment }] };
    }
    case 'RevisePlan': {
      if (state.plan.state !== 'revision_requested') return reject('Não há pedido de revisão aberto.');
      const v = (state.plan.versions[state.plan.versions.length - 1]?.version ?? 0) + 1;
      return { ok: true, events: [{ type: 'PLAN_REVISED', actor: cmd.actor, version: v }] };
    }
    case 'SubmitPlan': {
      if (state.plan.state !== 'proposed') return reject('Só um plano proposto pode ser enviado para aprovação.');
      return {
        ok: true,
        events: [{ type: 'PLAN_SUBMITTED', actor: cmd.actor, version: state.plan.versions.length }],
      };
    }
    case 'Authorize': {
      if (state.authorization.state !== 'pending') return reject('Não há aprovação pendente.');
      if (cmd.actor !== 'decision_authority') {
        return reject('Somente a autoridade de decisão pode aprovar. Quem executa não aprova o próprio trabalho.');
      }
      return { ok: true, events: [{ type: 'PLAN_AUTHORIZED', actor: cmd.actor, reason: cmd.reason }] };
    }
    case 'Deny': {
      if (state.authorization.state !== 'pending') return reject('Não há aprovação pendente.');
      if (cmd.actor !== 'decision_authority') return reject('Somente a autoridade de decisão pode negar.');
      return { ok: true, events: [{ type: 'PLAN_DENIED', actor: cmd.actor, reason: cmd.reason }] };
    }
    case 'QueueExecution': {
      if (state.authorization.state !== 'approved') {
        return reject('Enfileirar exige aprovação válida. A aprovação ainda não existe ou foi negada.');
      }
      if (state.execution.state !== 'none' && state.execution.state !== 'retry_requested') {
        return reject('A pesquisa não pode ser enfileirada neste estado.');
      }
      return { ok: true, events: [{ type: 'EXECUTION_QUEUED', actor: cmd.actor, executionId: FX.EXECUTION_ID }] };
    }
    case 'StartExecution': {
      if (state.execution.state !== 'queued') {
        return reject('Iniciar exige uma pesquisa enfileirada. Aprovação não inicia a pesquisa.');
      }
      return { ok: true, events: [{ type: 'EXECUTION_STARTED', actor: cmd.actor, executionId: state.execution.id ?? FX.EXECUTION_ID }] };
    }
    case 'AdvanceScenario': {
      if (state.execution.state !== 'running') return reject('O cenário só avança com a pesquisa em andamento.');
      if (state.execution.scenarioCursor >= FX.SCENARIO_STEPS.length) return reject('O cenário terminou.');
      const step = FX.SCENARIO_STEPS[state.execution.scenarioCursor]!;
      const events: DomainEvent[] = [{ type: 'SCENARIO_ADVANCED', actor: 'system', cursor: state.execution.scenarioCursor }];
      if (step.kind === 'input_request') {
        events.push({ type: 'INPUT_REQUESTED', actor: 'system', inputId: FX.REQUESTED_INPUT_RI01.id });
      }
      if (step.kind === 'completion') {
        events.push(
          { type: 'ARTIFACT_GENERATED', actor: 'research_executor', artifactId: FX.ARTIFACT_A01.id },
          { type: 'EVIDENCE_RECORDED', actor: 'research_executor', evidenceIds: FX.EVIDENCE_ITEMS.slice(0, 2).map((e) => e.id) },
        );
      }
      return { ok: true, events };
    }
    case 'ProvideInput': {
      if (state.execution.state !== 'awaiting_input') return reject('Não há pendência aguardando resposta.');
      const ri = state.execution.requestedInput;
      if (!ri || ri.status !== 'requested') return reject('A pendência não está aberta.');
      if (!ri.options.includes(cmd.answer)) return reject('Escolha uma das opções apresentadas; a resposta não amplia o escopo.');
      return {
        ok: true,
        events: [
          { type: 'INPUT_PROVIDED', actor: cmd.actor, inputId: ri.id, answer: cmd.answer },
          { type: 'EXECUTION_RESUMED', actor: 'system' },
        ],
      };
    }
    case 'ResumeExecution': {
      if (state.execution.state !== 'paused') return reject('Não há pesquisa pausada.');
      return { ok: true, events: [{ type: 'EXECUTION_RESUMED', actor: cmd.actor }] };
    }
    case 'PauseExecution': {
      if (state.execution.state !== 'running') return reject('Só uma pesquisa em andamento pode ser pausada.');
      return { ok: true, events: [{ type: 'EXECUTION_PAUSED', actor: cmd.actor }] };
    }
    case 'RequestRetry': {
      if (state.execution.state === 'completed') return reject('A pesquisa já foi concluída; não há o que tentar novamente.');
      if (state.execution.state !== 'failed') return reject('Nova tentativa só é possível após falha.');
      if (state.authorization.state !== 'approved') return reject('Nova tentativa exige autorização vigente.');
      return {
        ok: true,
        events: [
          { type: 'RETRY_REQUESTED', actor: cmd.actor },
          { type: 'EXECUTION_QUEUED', actor: cmd.actor, executionId: state.execution.id ?? FX.EXECUTION_ID },
        ],
      };
    }
    case 'ReviseScope': {
      if (state.execution.state !== 'failed' && state.execution.state !== 'paused') {
        return reject('Revisão de escopo só é possível com a pesquisa interrompida.');
      }
      return {
        ok: true,
        events: [{
          type: 'SCOPE_REVISED', actor: cmd.actor,
          removedClaim: 'Conclusão sobre identidade da aprovação removida deste ciclo.',
        }],
      };
    }
    case 'CancelExecution': {
      if (['completed', 'cancelled', 'none'].includes(state.execution.state)) {
        return reject('Não é possível cancelar uma pesquisa já encerrada.');
      }
      return { ok: true, events: [{ type: 'EXECUTION_CANCELLED', actor: cmd.actor, reason: cmd.reason }] };
    }
    case 'StartReview': {
      if (state.artifact.state !== 'generated') {
        return reject('Ainda não há resultado disponível para revisão.');
      }
      return { ok: true, events: [{ type: 'REVIEW_STARTED', actor: cmd.actor }] };
    }
    case 'DecideReview': {
      if (state.artifact.state !== 'under_review') return reject('Não há resultado em revisão.');
      if (cmd.actor === 'research_executor') {
        return reject('Quem executa a pesquisa não pode aceitar ou rejeitar o próprio resultado.');
      }
      if (cmd.actor !== 'decision_authority' && cmd.actor !== 'product_owner') {
        return reject('A decisão exige uma autoridade designada.');
      }
      if (cmd.outcome === 'accept') {
        const usable = state.evidence.some((e) => e.status === 'current' || e.status === 'partial');
        if (!usable) return reject('Aceitar exige ao menos uma evidência utilizável; todas estão indisponíveis.');
        return { ok: true, events: [{ type: 'RESULT_ACCEPTED', actor: cmd.actor, reason: cmd.reason }] };
      }
      if (cmd.outcome === 'revise') {
        return {
          ok: true,
          events: [{
            type: 'REVISION_REQUESTED', actor: cmd.actor,
            comment: cmd.reason, affectedScope: cmd.affectedScope ?? 'Seção de aprovação externa',
          }],
        };
      }
      return { ok: true, events: [{ type: 'RESULT_REJECTED', actor: cmd.actor, reason: cmd.reason }] };
    }
    case 'ResumeProject':
      return { ok: true, events: [{ type: 'PROJECT_RESUMED', actor: cmd.actor }] };
    case 'RefreshView':
      return { ok: true, events: [{ type: 'VIEW_REFRESHED', actor: cmd.actor }] };
    default: {
      const never: never = cmd;
      return reject(`Comando desconhecido: ${JSON.stringify(never)}`);
    }
  }
}
