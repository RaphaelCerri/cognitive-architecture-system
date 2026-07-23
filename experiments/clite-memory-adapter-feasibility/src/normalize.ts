/**
 * Normalization — ValidatedMemoryDocument → NormalizedMemoryRecord.
 * Deterministic: YAML key order and Markdown whitespace never change the
 * result. Conflicts and staleness are classified, never resolved silently.
 */
import {
  MemoryValidationError,
  type ApprovalDecisionRecord, type MemoryIssue, type NormalizedMemoryRecord,
  type SoloOperatorException, type ValidatedMemoryDocument,
} from './memory-types.ts';
import type { ActorRole } from '../../clite-domain-extraction-feasibility/src/types.ts';

const EXECUTION_STATES = ['none', 'queued', 'running', 'awaiting_input', 'paused', 'failed', 'retry_requested', 'cancelled', 'completed'];
const PLAN_STATES = ['none', 'proposed', 'revision_requested', 'submitted'];
const AUTH_STATES = ['none', 'pending', 'approved', 'denied'];
const ARTIFACT_STATES = ['none', 'generated', 'under_review', 'accepted', 'revision_requested', 'rejected'];
const REVIEW_STATES = ['not_started', 'in_review', 'decided'];
const ACTOR_ROLES = ['product_owner', 'decision_authority', 'research_executor', 'system'];

function str(v: unknown, fallback = ''): string {
  return typeof v === 'string' ? v.trim() : fallback;
}
function num(v: unknown, fallback = 0): number {
  return typeof v === 'number' && Number.isFinite(v) ? v : fallback;
}
function arr(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}
function rec(v: unknown): Record<string, unknown> {
  return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {};
}

export function normalizeMemory(doc: ValidatedMemoryDocument): NormalizedMemoryRecord {
  const fm = doc.frontmatter;
  const issues: MemoryIssue[] = [];

  for (const field of doc.unknownTopLevelFields) {
    issues.push({ severity: 'warn', code: 'unknown_field', message: `Campo desconhecido ignorado explicitamente: ${field}.` });
  }

  const intent = rec(fm['intent']);
  const governance = rec(fm['governance']);
  const execution = rec(fm['execution']);
  const result = rec(fm['result']);
  const continuity = rec(fm['continuity']);

  /* ---- enums: invalid values are rejects, not silent defaults ---- */
  const executionState = str(execution['execution_state'], 'none');
  if (!EXECUTION_STATES.includes(executionState)) {
    issues.push({ severity: 'reject', code: 'invalid_execution_state', message: `execution_state inválido: "${executionState}".` });
  }
  const planState = str(governance['plan_state'], 'none');
  if (!PLAN_STATES.includes(planState)) {
    issues.push({ severity: 'reject', code: 'invalid_plan_state', message: `plan_state inválido: "${planState}".` });
  }
  const authState = str(governance['authorization_state'], 'none');
  if (!AUTH_STATES.includes(authState)) {
    issues.push({ severity: 'reject', code: 'invalid_authorization_state', message: `authorization_state inválido: "${authState}".` });
  }
  const artifactState = str(result['artifact_state'], 'none');
  if (!ARTIFACT_STATES.includes(artifactState)) {
    issues.push({ severity: 'reject', code: 'invalid_artifact_state', message: `artifact_state inválido: "${artifactState}".` });
  }
  const reviewState = str(result['review_state'], 'not_started');
  if (!REVIEW_STATES.includes(reviewState)) {
    issues.push({ severity: 'reject', code: 'invalid_review_state', message: `review_state inválido: "${reviewState}".` });
  }

  /* ---- approval decision: authority basis is mandatory when present ---- */
  let approval: ApprovalDecisionRecord | null = null;
  const approvalRaw = governance['approval_decision'];
  if (approvalRaw) {
    const a = rec(approvalRaw);
    const decision = str(a['decision']);
    const role = str(a['approver_role']);
    const basis = str(a['authority_basis']);
    if (decision !== 'approved' && decision !== 'denied') {
      issues.push({ severity: 'reject', code: 'invalid_approval_decision', message: `approval_decision.decision inválido: "${decision}".` });
    }
    if (!ACTOR_ROLES.includes(role)) {
      issues.push({ severity: 'reject', code: 'invalid_approver_role', message: `approver_role inválido: "${role}".` });
    }
    if (!basis) {
      issues.push({
        severity: 'require_human_decision', code: 'missing_authority_basis',
        message: 'approval_decision sem authority_basis: a decisão existe mas sua base de autoridade não está registrada.',
      });
    }
    approval = {
      decision: decision as 'approved' | 'denied',
      approver_label: str(a['approver_label']),
      approver_role: role as ApprovalDecisionRecord['approver_role'],
      authority_basis: basis,
      reason: str(a['reason']),
      validity: str(a['validity']),
    };
  }

  /* ---- solo operator exception: low risk only, never independent review ---- */
  let solo: SoloOperatorException | null = null;
  const soloRaw = governance['solo_operator_exception'];
  if (soloRaw) {
    const s = rec(soloRaw);
    const riskClass = str(s['risk_class']);
    if (s['active'] === true && riskClass !== 'low') {
      issues.push({
        severity: 'reject', code: 'solo_exception_high_risk',
        message: `solo_operator_exception ativa com risk_class "${riskClass}": a exceção de operador único só é admissível para baixo risco.`,
      });
    }
    if (s['independent_review'] === true) {
      issues.push({
        severity: 'reject', code: 'solo_exception_claims_independence',
        message: 'solo_operator_exception não pode ser apresentada como revisão independente.',
      });
    }
    if (!str(s['reason'])) {
      issues.push({ severity: 'require_human_decision', code: 'solo_exception_without_reason', message: 'solo_operator_exception sem reason registrada.' });
    }
    solo = {
      active: s['active'] === true,
      risk_class: 'low',
      independent_review: false,
      reversible: s['reversible'] === true,
      external_effect: s['external_effect'] === true,
      reason: str(s['reason']),
    };
  }

  /* ---- cross-family consistency (contradictory decisions) ---- */
  const executionActive = ['queued', 'running', 'awaiting_input', 'paused', 'failed', 'retry_requested', 'completed'].includes(executionState);
  if (executionActive && authState !== 'approved') {
    issues.push({
      severity: 'require_human_decision', code: 'execution_without_approval',
      message: `Decisão contraditória: execution_state "${executionState}" com authorization_state "${authState}".`,
    });
  }
  if (approval?.decision === 'denied' && executionActive) {
    issues.push({
      severity: 'require_human_decision', code: 'execution_after_denial',
      message: 'Decisão contraditória: aprovação negada mas execução registrada como ativa.',
    });
  }
  if (artifactState !== 'none' && executionState !== 'completed' && executionState !== 'cancelled') {
    issues.push({
      severity: 'require_human_decision', code: 'artifact_without_completion',
      message: `Artifact "${artifactState}" com execução "${executionState}": estado potencialmente inconsistente.`,
    });
  }

  const record: NormalizedMemoryRecord = {
    memory_id: str(fm['memory_id']),
    format_version: str(fm['format_version']),
    project_id: str(fm['project_id']),
    project_title: str(fm['project_title']),
    scenario_id: str(fm['scenario_id']),
    scenario_fixture_version: str(fm['scenario_fixture_version']),
    created_from: str(fm['created_from']),
    last_accepted_checkpoint: str(fm['last_accepted_checkpoint']),
    content_version: num(fm['content_version'], -1),

    intent: {
      initial_intent: str(intent['initial_intent']),
      understanding_confirmed: intent['understanding_confirmed'] === true,
      unknowns: arr(intent['unknowns']).map((u) => str(u)),
      assumptions: arr(intent['assumptions']).map((a) => {
        const m = rec(a);
        return { id: str(m['id']), status: (str(m['status']) === 'corrected' ? 'corrected' : 'active') as 'active' | 'corrected' };
      }),
      contradictions: arr(intent['contradictions']).map((c) => {
        const m = rec(c);
        const status = str(m['status']);
        return {
          id: str(m['id']),
          status: (['open', 'resolved', 'unresolved_kept'].includes(status) ? status : 'open') as 'open' | 'resolved' | 'unresolved_kept',
          ...(typeof m['chosen_interpretation'] === 'number' ? { chosen_interpretation: m['chosen_interpretation'] as number } : {}),
        };
      }),
      answers: arr(intent['answers']).map((a) => {
        const m = rec(a);
        return { question_id: str(m['question_id']), value: str(m['value']), is_unknown: m['is_unknown'] === true };
      }),
    },

    governance: {
      plan_state: planState as NormalizedMemoryRecord['governance']['plan_state'],
      plan_version: num(governance['plan_version'], 0),
      plan_revision_comments: arr(governance['plan_revision_comments']).map((c) => str(c)),
      authorization_state: authState as NormalizedMemoryRecord['governance']['authorization_state'],
      approval_decision: approval,
      solo_operator_exception: solo,
    },

    execution: {
      execution_state: executionState as NormalizedMemoryRecord['execution']['execution_state'],
      scenario_cursor: num(execution['scenario_cursor'], 0),
      last_tick: num(execution['last_tick'], 0),
      last_seq: num(execution['last_seq'], 0),
      requested_input: execution['requested_input']
        ? (() => {
            const r = rec(execution['requested_input']);
            const status = str(r['status']);
            return {
              id: str(r['id']),
              status: (['requested', 'provided', 'deferred'].includes(status) ? status : 'requested') as 'requested' | 'provided' | 'deferred',
              ...(str(r['answer']) ? { answer: str(r['answer']) } : {}),
            };
          })()
        : null,
      scope_revisions: arr(execution['scope_revisions']).map((s) => str(s)),
    },

    result: {
      artifact_state: artifactState as NormalizedMemoryRecord['result']['artifact_state'],
      artifact_ref: str(result['artifact_ref']) || null,
      evidence_refs: arr(result['evidence_refs']).map((e) => {
        const m = rec(e);
        const status = str(m['status']);
        return {
          id: str(m['id']),
          status: (['current', 'partial', 'unavailable', 'stale'].includes(status) ? status : 'current') as 'current' | 'partial' | 'unavailable' | 'stale',
        };
      }),
      review_state: reviewState as NormalizedMemoryRecord['result']['review_state'],
      review_decision: result['review_decision']
        ? (() => {
            const r = rec(result['review_decision']);
            const outcome = str(r['outcome']);
            const role = str(r['decided_by_role']);
            if (!['accept', 'revise', 'reject'].includes(outcome)) {
              issues.push({ severity: 'reject', code: 'invalid_review_outcome', message: `review_decision.outcome inválido: "${outcome}".` });
            }
            if (role === 'research_executor') {
              issues.push({
                severity: 'reject', code: 'self_review_in_memory',
                message: 'review_decision registrada pelo próprio executor: viola separation of duties.',
              });
            }
            return {
              outcome: outcome as 'accept' | 'revise' | 'reject',
              reason: str(r['reason']),
              decided_by_role: role as ActorRole,
              decided_by_label: str(r['decided_by_label']),
            };
          })()
        : null,
    },

    continuity: {
      pending_action: str(continuity['pending_action']),
      unresolved_items: arr(continuity['unresolved_items']).map((u) => str(u)),
      recent_changes: arr(continuity['recent_changes']).map((c) => str(c)),
      provenance_refs: arr(continuity['provenance_refs']).map((p) => str(p)),
      limitations: arr(continuity['limitations']).map((l) => str(l)),
    },

    issues,
  };

  if (!record.continuity.pending_action) {
    issues.push({ severity: 'require_human_decision', code: 'missing_pending_action', message: 'pending_action ausente: a retomada perde a próxima ação.' });
  }
  if (record.content_version < 1) {
    issues.push({ severity: 'reject', code: 'invalid_content_version', message: `content_version inválida: ${record.content_version}.` });
  }

  const rejects = issues.filter((i) => i.severity === 'reject');
  if (rejects.length > 0) {
    throw new MemoryValidationError('A Memory foi rejeitada na normalização.', issues);
  }
  return record;
}
