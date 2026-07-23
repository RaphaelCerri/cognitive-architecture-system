/**
 * Domain state machine — pure event application with guards, extracted from
 * the Stage 3 vertical slice with the fixture dependency INVERTED: scenario
 * content arrives via the ScenarioFixture parameter instead of a module import.
 * Command Rejected != Domain Event Emitted — rejected commands never reach here.
 * applyEvent throws InvalidTransitionError for events impossible in the
 * current state (e.g. failed → completed remains forbidden).
 */
import type { AppState, HistoryEntry } from './types.ts';
import type { DomainEvent } from './events.ts';
import type { ScenarioFixture } from './fixture-contract.ts';

export class InvalidTransitionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidTransitionError';
  }
}

export function initialState(fx: ScenarioFixture): AppState {
  return {
    project: { id: fx.projectId, name: fx.projectName, state: 'draft' },
    idea: null,
    discovery: {
      state: 'asking',
      questions: fx.questions.map((q) => ({ ...q })),
      answers: [],
      assumptions: fx.initialAssumptions.map((a) => ({ ...a })),
      contradiction: null,
      currentQuestionIndex: 0,
    },
    understanding: null,
    plan: { state: 'none', versions: [], revisionComments: [] },
    authorization: { state: 'none', request: null },
    execution: {
      state: 'none', id: null, scenarioCursor: 0, checkpoint: 0,
      activities: [], failure: null, requestedInput: null, scopeRevisions: [],
    },
    artifact: { state: 'none', item: null },
    evidence: [],
    review: { state: 'not_started', comments: [] },
    decisions: [],
    context: { stale: false },
    pendingAction: fx.initialPendingAction,
    recentChanges: [],
    unresolved: [],
    log: [],
    seq: 0,
    clockTick: 0,
  };
}

function summarize(s: AppState): string {
  return [
    `projeto:${s.project.state}`, `descoberta:${s.discovery.state}`,
    `plano:${s.plan.state}`, `aprovação:${s.authorization.state}`,
    `execução:${s.execution.state}`, `resultado:${s.artifact.state}`,
    `revisão:${s.review.state}`,
  ].join(' ');
}

function pushChange(s: AppState, change: string): void {
  s.recentChanges.unshift(change);
  if (s.recentChanges.length > 8) s.recentChanges.pop();
}

function expect(cond: boolean, message: string): void {
  if (!cond) throw new InvalidTransitionError(message);
}

/** Pure-by-copy event application. Guards enforce family separation. */
export function applyEvent(fx: ScenarioFixture, prev: AppState, ev: DomainEvent, commandOrigin: string): AppState {
  const s: AppState = structuredClone(prev);
  const before = summarize(prev);
  s.seq += 1;
  s.clockTick += 1;

  switch (ev.type) {
    case 'IDEA_SUBMITTED': {
      expect(s.project.state === 'draft', 'A ideia já foi enviada.');
      expect(ev.text.trim().length > 0, 'A ideia não pode ser vazia.');
      s.idea = { text: ev.text, submittedAtTick: s.clockTick };
      s.project.state = 'discovering';
      s.pendingAction = 'Responder às perguntas de descoberta.';
      pushChange(s, 'Ideia enviada; descoberta iniciada.');
      break;
    }
    case 'DISCOVERY_ANSWERED': {
      expect(s.project.state === 'discovering', 'Descoberta não está ativa.');
      const q = s.discovery.questions.find((x) => x.id === ev.questionId);
      expect(!!q, `Pergunta desconhecida: ${ev.questionId}`);
      q!.status = ev.isUnknown ? 'unknown' : 'answered';
      s.discovery.answers.push({ questionId: ev.questionId, value: ev.value, isUnknown: ev.isUnknown });
      // The fixture declares which answer surfaces the contradiction deterministically.
      if (ev.questionId === fx.contradictionTriggerQuestionId && !ev.isUnknown) {
        s.discovery.contradiction = { ...fx.contradiction };
        s.discovery.state = 'resolving_conflict';
        s.pendingAction = 'Resolver a contradição identificada entre as respostas.';
        pushChange(s, 'Contradição identificada entre respostas.');
      } else {
        s.discovery.currentQuestionIndex += 1;
        s.pendingAction = 'Continuar a descoberta.';
      }
      break;
    }
    case 'ASSUMPTION_INSPECTED': {
      expect(s.discovery.state !== 'reviewed', 'O entendimento já foi confirmado.');
      s.discovery.state = 'inspecting';
      s.pendingAction = 'Inspecionar a suposição e decidir se ela deve ser corrigida.';
      break;
    }
    case 'ASSUMPTION_CORRECTED': {
      expect(s.plan.state !== 'submitted',
        'O plano já foi enviado para aprovação; corrigir suposições exige reabrir a descoberta.');
      const a = s.discovery.assumptions.find((x) => x.id === ev.assumptionId);
      expect(!!a, `Suposição desconhecida: ${ev.assumptionId}`);
      expect(a!.status === 'active', 'A suposição já foi corrigida.');
      a!.status = 'corrected';
      a!.correctedText = ev.correctedText;
      s.pendingAction = 'Revisar o entendimento atual.';
      pushChange(s, 'Suposição corrigida a partir da inspeção.');
      break;
    }
    case 'CONTRADICTION_RESOLVED': {
      const c = s.discovery.contradiction;
      expect(!!c && c.status === 'open', 'Não há contradição aberta.');
      expect(ev.chosenInterpretation >= 0 && ev.chosenInterpretation < c!.interpretations.length,
        'Interpretação fora das opções.');
      c!.status = 'resolved';
      c!.chosenInterpretation = ev.chosenInterpretation;
      s.discovery.state = 'asking';
      s.discovery.currentQuestionIndex += 1;
      s.pendingAction = 'Continuar a descoberta ou revisar o entendimento.';
      pushChange(s, 'Contradição resolvida sem inventar permissões.');
      break;
    }
    case 'UNDERSTANDING_CONFIRMED': {
      expect(s.project.state === 'discovering', 'Não há descoberta ativa para confirmar.');
      const blockingOpen = s.discovery.contradiction?.status === 'open';
      expect(!blockingOpen, 'Há uma contradição aberta que bloqueia a confirmação.');
      s.discovery.state = 'reviewed';
      s.understanding = structuredClone(fx.understanding);
      s.project.state = 'contextualized';
      s.unresolved = [...s.understanding.unknowns];
      s.pendingAction = 'Preparar o plano de pesquisa.';
      pushChange(s, 'Entendimento versão 1 confirmado (não significa completo ou verdadeiro).');
      break;
    }
    case 'PLAN_PROPOSED': {
      expect(s.project.state === 'contextualized', 'O entendimento precisa ser confirmado antes do plano.');
      s.plan.versions.push(structuredClone(fx.plan));
      s.plan.state = 'proposed';
      s.project.state = 'planning';
      s.pendingAction = 'Revisar o plano proposto.';
      pushChange(s, 'Plano versão 1 proposto — ainda não autorizado.');
      break;
    }
    case 'PLAN_REVISION_REQUESTED': {
      expect(s.plan.state === 'proposed', 'Só um plano proposto pode receber pedido de revisão.');
      s.plan.state = 'revision_requested';
      s.plan.revisionComments.push(ev.comment);
      s.pendingAction = 'Produzir a versão revisada do plano.';
      pushChange(s, 'Revisão do plano solicitada; versão anterior preservada.');
      break;
    }
    case 'PLAN_REVISED': {
      expect(s.plan.state === 'revision_requested', 'Não há pedido de revisão aberto.');
      const prevV = s.plan.versions[s.plan.versions.length - 1]!;
      const next = structuredClone(prevV);
      next.version = prevV.version + 1;
      next.limits = [...next.limits, fx.planRevisionAddedLimit];
      s.plan.versions.push(next);
      s.plan.state = 'proposed';
      s.pendingAction = 'Enviar o plano para aprovação.';
      pushChange(s, `Plano versão ${next.version} criado em resposta ao comentário.`);
      break;
    }
    case 'PLAN_SUBMITTED': {
      expect(s.plan.state === 'proposed', 'Só um plano proposto pode ser enviado para aprovação.');
      s.plan.state = 'submitted';
      s.authorization.state = 'pending';
      s.authorization.request = structuredClone(fx.authorizationRequest);
      s.pendingAction = 'Decidir sobre a aprovação da pesquisa.';
      pushChange(s, 'Plano enviado para aprovação.');
      break;
    }
    case 'PLAN_AUTHORIZED': {
      expect(s.authorization.state === 'pending', 'Não há aprovação pendente.');
      s.authorization.state = 'approved';
      s.decisions.push({
        id: `DEC-${s.decisions.length + 1}`, type: 'authorization',
        actorRole: ev.actor, actorLabel: fx.roleLabels[ev.actor],
        reason: ev.reason, scope: fx.authorizationRequest.scope,
        consequence: 'A pesquisa pode ser enfileirada; aprovar não a inicia.', atTick: s.clockTick,
      });
      s.pendingAction = 'Enfileirar a pesquisa autorizada.';
      pushChange(s, 'Execução autorizada — ainda não iniciada.');
      break;
    }
    case 'PLAN_DENIED': {
      expect(s.authorization.state === 'pending', 'Não há aprovação pendente.');
      s.authorization.state = 'denied';
      s.plan.state = 'revision_requested';
      s.decisions.push({
        id: `DEC-${s.decisions.length + 1}`, type: 'denial',
        actorRole: ev.actor, actorLabel: fx.roleLabels[ev.actor],
        reason: ev.reason, scope: fx.authorizationRequest.scope,
        consequence: 'Nenhuma execução foi criada; plano e decisão permanecem no histórico.', atTick: s.clockTick,
      });
      s.pendingAction = 'Revisar o plano para nova proposta.';
      pushChange(s, 'Aprovação negada; histórico preservado.');
      break;
    }
    case 'EXECUTION_QUEUED': {
      expect(s.authorization.state === 'approved', 'Enfileirar exige aprovação válida.');
      expect(s.execution.state === 'none' || s.execution.state === 'retry_requested',
        'A execução não pode ser enfileirada neste estado.');
      const isRetry = s.execution.state === 'retry_requested';
      s.execution.state = 'queued';
      s.execution.id = ev.executionId;
      if (!isRetry) s.execution.scenarioCursor = 0;
      s.project.state = 'researching';
      s.pendingAction = 'Iniciar a pesquisa enfileirada.';
      pushChange(s, isRetry ? 'Nova tentativa enfileirada a partir do ponto preservado.' : 'Pesquisa enfileirada.');
      break;
    }
    case 'EXECUTION_STARTED': {
      expect(s.execution.state === 'queued', 'Só uma execução enfileirada pode iniciar.');
      s.execution.state = 'running';
      s.pendingAction = 'Acompanhar a pesquisa em andamento.';
      pushChange(s, 'Pesquisa em andamento; progresso desconhecido.');
      break;
    }
    case 'SCENARIO_ADVANCED': {
      expect(s.execution.state === 'running', 'O cenário só avança com a pesquisa em andamento.');
      const step = fx.scenarioSteps[ev.cursor];
      expect(!!step, 'O cenário não possui mais passos.');
      s.execution.scenarioCursor = ev.cursor + 1;
      s.execution.checkpoint = ev.cursor + 1;
      s.clockTick += fx.ticksPerStep - 1;
      if (step!.kind === 'activity') {
        s.execution.activities.push({ step: ev.cursor + 1, text: step!.text, note: step!.note });
        s.pendingAction = 'Acompanhar a pesquisa em andamento.';
      } else if (step!.kind === 'input_request') {
        s.execution.state = 'awaiting_input';
        s.execution.requestedInput = structuredClone(fx.requestedInput);
        s.pendingAction = 'Responder à pendência da pesquisa.';
        pushChange(s, 'A pesquisa aguarda uma decisão sua.');
      } else if (step!.kind === 'failure') {
        s.execution.state = 'failed';
        s.execution.failure = {
          reason: fx.failureReason,
          preserved: ['Notas provisórias', 'Resultado parcial', 'Histórico', 'Ponto de retomada'],
        };
        for (const item of fx.failureEvidence) {
          if (!s.evidence.some((e) => e.id === item.id)) s.evidence.push(structuredClone(item));
        }
        s.pendingAction = 'Escolher uma opção de recuperação.';
        pushChange(s, 'Fonte primária indisponível; trabalho parcial preservado.');
      } else {
        s.execution.state = 'completed';
        s.artifact.state = 'generated';
        s.artifact.item = structuredClone(fx.completionArtifact);
        for (const item of fx.completionEvidence) {
          if (!s.evidence.some((e) => e.id === item.id)) s.evidence.push(structuredClone(item));
        }
        s.pendingAction = 'Inspecionar o resultado produzido.';
        pushChange(s, 'Pesquisa concluída; o resultado ainda não foi aceito.');
      }
      break;
    }
    case 'INPUT_PROVIDED': {
      expect(s.execution.state === 'awaiting_input', 'Não há pendência aguardando resposta.');
      const ri = s.execution.requestedInput;
      expect(!!ri && ri.status === 'requested', 'A pendência não está aberta.');
      expect(ri!.options.includes(ev.answer), 'A resposta precisa ser uma das opções apresentadas.');
      ri!.status = 'provided';
      ri!.answer = ev.answer;
      s.pendingAction = 'Retomar a pesquisa do ponto preservado.';
      pushChange(s, `Pendência respondida: ${ev.answer}.`);
      break;
    }
    case 'EXECUTION_RESUMED': {
      expect(s.execution.state === 'awaiting_input' || s.execution.state === 'paused',
        'Não há execução aguardando retomada.');
      if (s.execution.state === 'awaiting_input') {
        expect(s.execution.requestedInput?.status === 'provided',
          'A pendência precisa ser respondida antes da retomada.');
      }
      s.execution.state = 'running';
      s.execution.activities.push({
        step: s.execution.checkpoint,
        text: 'Pesquisa retomada do ponto preservado',
        note: s.execution.requestedInput?.answer
          ? `Escopo registrado: ${s.execution.requestedInput.answer}`
          : undefined,
      });
      s.pendingAction = 'Acompanhar a pesquisa em andamento.';
      pushChange(s, 'Pesquisa retomada; escopo registrado no histórico.');
      break;
    }
    case 'EXECUTION_PAUSED': {
      expect(s.execution.state === 'running', 'Só uma pesquisa em andamento pode ser pausada.');
      s.execution.state = 'paused';
      s.pendingAction = 'Retomar ou cancelar a pesquisa pausada.';
      pushChange(s, 'Pesquisa pausada; ponto de retomada preservado.');
      break;
    }
    case 'EXECUTION_FAILED': {
      expect(s.execution.state === 'running', 'Falha só pode ocorrer com a pesquisa em andamento.');
      s.execution.state = 'failed';
      s.execution.failure = { reason: ev.reason, preserved: ['Notas', 'Resultado parcial', 'Histórico'] };
      s.pendingAction = 'Escolher uma opção de recuperação.';
      break;
    }
    case 'RETRY_REQUESTED': {
      expect(s.execution.state === 'failed', 'Nova tentativa só é possível após falha.');
      expect(s.authorization.state === 'approved', 'Nova tentativa exige autorização vigente.');
      s.execution.state = 'retry_requested';
      s.pendingAction = 'Enfileirar a nova tentativa.';
      pushChange(s, 'Nova tentativa solicitada; nada do trabalho preservado será apagado.');
      break;
    }
    case 'SCOPE_REVISED': {
      expect(s.execution.state === 'failed' || s.execution.state === 'paused',
        'Revisão de escopo só é possível com a pesquisa interrompida.');
      s.execution.scopeRevisions.push(ev.removedClaim);
      const item = s.evidence.find((e) => e.status === 'unavailable');
      if (item) item.limitation = 'Conclusão dependente removida do escopo por revisão.';
      s.pendingAction = 'Escolher recuperação ou cancelar.';
      pushChange(s, `Escopo revisado: ${ev.removedClaim}`);
      break;
    }
    case 'EXECUTION_CANCELLED': {
      expect(!['completed', 'cancelled', 'none'].includes(s.execution.state),
        'Não é possível cancelar uma pesquisa já encerrada.');
      s.execution.state = 'cancelled';
      s.decisions.push({
        id: `DEC-${s.decisions.length + 1}`, type: 'cancellation',
        actorRole: ev.actor, actorLabel: fx.roleLabels[ev.actor],
        reason: ev.reason, scope: 'Esta execução',
        consequence: 'Notas, resultado parcial e histórico permanecem preservados.', atTick: s.clockTick,
      });
      s.pendingAction = 'Revisar o plano para uma nova proposta, se desejar.';
      pushChange(s, 'Pesquisa cancelada; cancelar não apaga o projeto.');
      break;
    }
    case 'EXECUTION_COMPLETED': {
      // Only the completion scenario step may complete an execution (guards F-03).
      expect(s.execution.state === 'running', 'Conclusão direta é inválida: a pesquisa precisa estar em andamento.');
      s.execution.state = 'completed';
      break;
    }
    case 'REVIEW_STARTED': {
      expect(s.artifact.state === 'generated', 'Não há resultado disponível para revisão.');
      s.artifact.state = 'under_review';
      s.review.state = 'in_review';
      s.project.state = 'reviewing';
      s.pendingAction = 'Escolher aceitar, pedir revisão ou rejeitar.';
      pushChange(s, 'Resultado em revisão; concluído não significa aceito.');
      break;
    }
    case 'RESULT_ACCEPTED': {
      expect(s.artifact.state === 'under_review', 'Só um resultado em revisão pode ser aceito.');
      const usable = s.evidence.some((e) => e.status === 'current' || e.status === 'partial');
      expect(usable, 'Aceitar exige ao menos uma evidência utilizável.');
      s.artifact.state = 'accepted';
      s.review.state = 'decided';
      s.project.state = 'resolved';
      s.decisions.push({
        id: `DEC-${s.decisions.length + 1}`, type: 'review_accept',
        actorRole: ev.actor, actorLabel: fx.roleLabels[ev.actor],
        reason: ev.reason, scope: 'Somente este ciclo de pesquisa',
        consequence: 'Nenhuma nova pesquisa começa sem nova proposta e aprovação.', atTick: s.clockTick,
      });
      s.pendingAction = 'Nenhuma ação pendente; nova pesquisa exige nova proposta.';
      pushChange(s, 'Resultado aceito somente para este ciclo.');
      break;
    }
    case 'REVISION_REQUESTED': {
      expect(s.artifact.state === 'under_review', 'Só um resultado em revisão pode receber pedido de revisão.');
      s.artifact.state = 'revision_requested';
      s.review.state = 'decided';
      s.review.comments.push({ text: ev.comment, affectedScope: ev.affectedScope });
      s.decisions.push({
        id: `DEC-${s.decisions.length + 1}`, type: 'review_revision',
        actorRole: ev.actor, actorLabel: fx.roleLabels[ev.actor],
        reason: ev.comment, scope: ev.affectedScope,
        consequence: 'Nova edição exigirá proposta; a versão atual e a decisão permanecem.', atTick: s.clockTick,
      });
      s.pendingAction = 'Nova edição ou pesquisa exigirá proposta futura.';
      pushChange(s, 'Revisão do resultado solicitada; versão preservada.');
      break;
    }
    case 'RESULT_REJECTED': {
      expect(s.artifact.state === 'under_review', 'Só um resultado em revisão pode ser rejeitado.');
      s.artifact.state = 'rejected';
      s.review.state = 'decided';
      s.project.state = 'resolved';
      s.decisions.push({
        id: `DEC-${s.decisions.length + 1}`, type: 'review_reject',
        actorRole: ev.actor, actorLabel: fx.roleLabels[ev.actor],
        reason: ev.reason, scope: 'Este resultado',
        consequence: 'Evidências, limitações e histórico permanecem preservados.', atTick: s.clockTick,
      });
      s.pendingAction = 'Revisar o plano para nova proposta, se desejar.';
      pushChange(s, 'Resultado rejeitado; evidências e histórico preservados.');
      break;
    }
    case 'MEMORY_UPDATED': {
      pushChange(s, ev.change);
      break;
    }
    case 'PROJECT_RESUMED': {
      // Restored context is explicitly stale until refreshed (Derived Status
      // != Canonical Decision) — representable without any browser.
      s.context.stale = true;
      s.pendingAction = s.pendingAction || 'Retomar pela pendência registrada.';
      break;
    }
    case 'CONTEXT_REFRESHED': {
      s.context.stale = false;
      break;
    }
    // Informational events: the state effect happens in the completion
    // scenario step; these exist so the log records the facts explicitly.
    case 'INPUT_REQUESTED':
    case 'ARTIFACT_GENERATED':
    case 'EVIDENCE_RECORDED':
      break;
    default: {
      const never: never = ev;
      throw new InvalidTransitionError(`Evento desconhecido: ${JSON.stringify(never)}`);
    }
  }

  const entry: HistoryEntry = {
    seq: s.seq,
    eventType: ev.type,
    atTick: s.clockTick,
    actorRole: ev.actor,
    commandOrigin,
    previousState: before,
    resultingState: summarize(s),
    pendingAction: s.pendingAction,
  };
  s.log.push(entry);
  return s;
}
