/**
 * Deterministic domain initialization from a NormalizedMemoryRecord.
 * The Memory carries decisions, user input and progress markers (canonical);
 * scenario CONTENT comes from the fixture; project/discovery states and the
 * stale flag are DERIVED; the event log is NOT reconstructable and is never
 * faked — losses are declared in `unreconstructable`.
 *
 *   Canonical Project Memory != Runtime State != Event Log != Snapshot
 *   Read Adapter != Write Authority
 */
import type { AppState, DecisionRecord } from '../../clite-domain-extraction-feasibility/src/types.ts';
import type { ScenarioFixture } from '../../clite-domain-extraction-feasibility/src/fixture-contract.ts';
import { initialState } from '../../clite-domain-extraction-feasibility/src/machine.ts';
import { OFICINA_HORIZONTE } from '../../clite-domain-extraction-feasibility/src/fixtures/oficina-horizonte.ts';
import { ESTUFA_VERTICAL } from '../../clite-domain-extraction-feasibility/src/fixtures/estufa-vertical.ts';
import {
  MemoryValidationError,
  type MemoryIssue, type NormalizedMemoryRecord,
} from './memory-types.ts';

/** Scenario registry — the ONLY scenario-specific knowledge in the adapter. */
export const FIXTURE_REGISTRY: Record<string, ScenarioFixture> = {
  'oficina-horizonte': OFICINA_HORIZONTE,
  'estufa-vertical': ESTUFA_VERTICAL,
};

export interface InitializationResult {
  state: AppState;
  warnings: MemoryIssue[];
  /** Honest declaration of what the Memory cannot reconstruct. */
  unreconstructable: string[];
}

export function resolveFixture(record: NormalizedMemoryRecord): ScenarioFixture {
  const fx = FIXTURE_REGISTRY[record.scenario_id];
  if (!fx) {
    throw new MemoryValidationError(`Cenário desconhecido: "${record.scenario_id}".`, [
      { severity: 'reject', code: 'unknown_scenario', message: `scenario_id "${record.scenario_id}" não existe no registro de fixtures.` },
    ]);
  }
  if (fx.version !== record.scenario_fixture_version) {
    throw new MemoryValidationError('Versão de fixture incompatível.', [
      {
        severity: 'reject', code: 'fixture_version_mismatch',
        message: `Memory referencia fixture "${record.scenario_fixture_version}", mas o cenário atual é "${fx.version}".`,
      },
    ]);
  }
  return fx;
}

export function initializeFromMemory(record: NormalizedMemoryRecord): InitializationResult {
  const fx = resolveFixture(record);
  // Conflicts are never resolved silently: a record carrying
  // require_human_decision issues refuses to initialize.
  const humanNeeded = record.issues.filter((i) => i.severity === 'require_human_decision');
  if (humanNeeded.length > 0) {
    throw new MemoryValidationError('A Memory exige decisão humana antes da inicialização.', record.issues);
  }
  const issues: MemoryIssue[] = [...record.issues];
  const unreconstructable: string[] = [
    'Event log evento-a-evento (o histórico completo é audit_only, não Memory).',
    'Atividades de retomada inseridas por EXECUTION_RESUMED em execuções vivas.',
    'Ticks exatos por evento (somente last_tick é canônico-opcional).',
  ];

  /* ---- referenced artifacts/evidence must exist in the fixture ---- */
  if (record.result.artifact_ref && record.result.artifact_ref !== fx.completionArtifact.id) {
    throw new MemoryValidationError('Artifact referenciado ausente.', [
      {
        severity: 'require_human_decision', code: 'missing_artifact_ref',
        message: `artifact_ref "${record.result.artifact_ref}" não corresponde a nenhum artifact do cenário ("${fx.completionArtifact.id}").`,
      },
    ]);
  }
  const knownEvidence = new Map([...fx.failureEvidence, ...fx.completionEvidence].map((e) => [e.id, e]));
  for (const ref of record.result.evidence_refs) {
    if (!knownEvidence.has(ref.id)) {
      throw new MemoryValidationError('Evidence referenciada ausente.', [
        {
          severity: 'require_human_decision', code: 'missing_evidence_ref',
          message: `evidence_ref "${ref.id}" não existe no cenário.`,
        },
      ]);
    }
  }

  const s: AppState = initialState(fx);

  /* ---- intent and discovery (canonical user input + fixture content) ---- */
  if (record.intent.initial_intent) {
    s.idea = { text: record.intent.initial_intent, submittedAtTick: 0 };
  }
  for (const answer of record.intent.answers) {
    const q = s.discovery.questions.find((x) => x.id === answer.question_id);
    if (!q) {
      throw new MemoryValidationError('Resposta órfã na Memory.', [
        { severity: 'require_human_decision', code: 'unknown_question_ref', message: `answers referencia pergunta inexistente: ${answer.question_id}.` },
      ]);
    }
    q.status = answer.is_unknown ? 'unknown' : 'answered';
    s.discovery.answers.push({ questionId: answer.question_id, value: answer.value, isUnknown: answer.is_unknown });
  }
  s.discovery.currentQuestionIndex = record.intent.answers.length;
  for (const a of record.intent.assumptions) {
    const target = s.discovery.assumptions.find((x) => x.id === a.id);
    if (target && a.status === 'corrected') {
      target.status = 'corrected';
      target.correctedText = fx.correctedAssumptionText;
    }
  }
  for (const c of record.intent.contradictions) {
    if (c.id === fx.contradiction.id) {
      s.discovery.contradiction = { ...fx.contradiction, status: c.status };
      if (typeof c.chosen_interpretation === 'number') {
        s.discovery.contradiction.chosenInterpretation = c.chosen_interpretation;
      }
    }
  }
  if (record.intent.understanding_confirmed) {
    s.discovery.state = 'reviewed';
    s.understanding = structuredClone(fx.understanding);
    s.unresolved = [...record.continuity.unresolved_items];
  } else if (s.discovery.contradiction?.status === 'open') {
    s.discovery.state = 'resolving_conflict';
  }

  /* ---- plan (versions rebuilt deterministically from fixture) ---- */
  if (record.governance.plan_version > 0) {
    for (let v = 1; v <= record.governance.plan_version; v += 1) {
      const version = structuredClone(fx.plan);
      version.version = v;
      for (let i = 1; i < v; i += 1) version.limits = [...version.limits, fx.planRevisionAddedLimit];
      s.plan.versions.push(version);
    }
    s.plan.state = record.governance.plan_state;
    s.plan.revisionComments = [...record.governance.plan_revision_comments];
  }

  /* ---- authorization + decisions (partial reconstruction, declared) ---- */
  s.authorization.state = record.governance.authorization_state;
  if (record.governance.plan_state === 'submitted') {
    s.authorization.request = structuredClone(fx.authorizationRequest);
  }
  const decisions: DecisionRecord[] = [];
  const approval = record.governance.approval_decision;
  if (approval) {
    decisions.push({
      id: `DEC-${decisions.length + 1}`,
      type: approval.decision === 'approved' ? 'authorization' : 'denial',
      actorRole: approval.approver_role,
      actorLabel: approval.approver_label || fx.roleLabels[approval.approver_role],
      reason: approval.reason,
      scope: fx.authorizationRequest.scope,
      consequence: approval.decision === 'approved'
        ? 'A pesquisa pode ser enfileirada; aprovar não a inicia.'
        : 'Nenhuma execução foi criada; plano e decisão permanecem no histórico.',
      atTick: record.execution.last_tick,
    });
  }
  const review = record.result.review_decision;
  if (review) {
    const typeMap = { accept: 'review_accept', revise: 'review_revision', reject: 'review_reject' } as const;
    decisions.push({
      id: `DEC-${decisions.length + 1}`,
      type: typeMap[review.outcome],
      actorRole: review.decided_by_role,
      actorLabel: review.decided_by_label || fx.roleLabels[review.decided_by_role],
      reason: review.reason,
      scope: 'Somente este ciclo de pesquisa',
      consequence: 'Reconstruído da Memory; consequência original preservada por referência.',
      atTick: record.execution.last_tick,
    });
  }
  s.decisions = decisions;
  unreconstructable.push('Ticks originais de cada DecisionRecord (aproximados por last_tick).');

  /* ---- execution (progress markers canonical; activities derived) ---- */
  s.execution.state = record.execution.execution_state;
  if (record.execution.execution_state !== 'none') {
    s.execution.id = fx.executionId;
  }
  s.execution.scenarioCursor = record.execution.scenario_cursor;
  s.execution.checkpoint = record.execution.scenario_cursor;
  for (let i = 0; i < record.execution.scenario_cursor; i += 1) {
    const step = fx.scenarioSteps[i];
    if (step?.kind === 'activity') {
      s.execution.activities.push({ step: i + 1, text: step.text, note: step.note });
    }
  }
  if (record.execution.requested_input) {
    s.execution.requestedInput = {
      ...structuredClone(fx.requestedInput),
      status: record.execution.requested_input.status,
      ...(record.execution.requested_input.answer ? { answer: record.execution.requested_input.answer } : {}),
    };
    if (record.execution.requested_input.id !== fx.requestedInput.id) {
      throw new MemoryValidationError('Pendência referenciada ausente.', [
        { severity: 'require_human_decision', code: 'unknown_requested_input', message: `requested_input "${record.execution.requested_input.id}" não existe no cenário.` },
      ]);
    }
  }
  if (record.execution.execution_state === 'failed') {
    s.execution.failure = {
      reason: fx.failureReason,
      preserved: ['Notas provisórias', 'Resultado parcial', 'Histórico', 'Ponto de retomada'],
    };
  }
  s.execution.scopeRevisions = [...record.execution.scope_revisions];

  /* ---- artifact and evidence (content from fixture; refs canonical) ---- */
  s.artifact.state = record.result.artifact_state;
  if (record.result.artifact_state !== 'none') {
    s.artifact.item = structuredClone(fx.completionArtifact);
  }
  s.evidence = record.result.evidence_refs.map((ref) => ({
    ...structuredClone(knownEvidence.get(ref.id)!),
    status: ref.status,
  }));
  s.review.state = record.result.review_state;

  /* ---- continuity + derived states ---- */
  s.pendingAction = record.continuity.pending_action;
  s.recentChanges = [...record.continuity.recent_changes];
  s.project.state = deriveProjectState(record);
  s.clockTick = record.execution.last_tick;
  s.seq = record.execution.last_seq;

  // Restored context is ALWAYS stale until refreshed — derived, never stored.
  s.context.stale = true;

  // The log cannot be faked: a single restoration marker, never synthetic history.
  s.log = [{
    seq: s.seq,
    eventType: 'PROJECT_RESUMED',
    atTick: s.clockTick,
    actorRole: 'system',
    commandOrigin: 'MemoryAdapter.initializeFromMemory',
    previousState: `memory:${record.memory_id}@v${record.content_version}`,
    resultingState: 'estado reconstruído da Project Memory canônica',
    pendingAction: s.pendingAction,
  }];

  return { state: s, warnings: issues.filter((i) => i.severity !== 'reject'), unreconstructable };
}

/** project.state is DERIVED from canonical markers, never stored in Memory. */
function deriveProjectState(record: NormalizedMemoryRecord): AppState['project']['state'] {
  if (record.result.review_state === 'decided') return 'resolved';
  if (record.result.review_state === 'in_review') return 'reviewing';
  if (record.execution.execution_state !== 'none') return 'researching';
  if (record.governance.plan_state !== 'none') return 'planning';
  if (record.intent.understanding_confirmed) return 'contextualized';
  if (record.intent.initial_intent) return 'discovering';
  return 'draft';
}
