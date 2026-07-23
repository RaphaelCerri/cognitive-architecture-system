/**
 * Experimental types for the Canonical Project Memory Adapter feasibility.
 * NOT a stable schema, NOT Ontology, NOT production persistence.
 *
 * Pipeline (each boundary is explicit and lossy where declared):
 *   Markdown/YAML Project Memory
 *     → ValidatedMemoryDocument   (parsed, version-checked, fields present)
 *     → NormalizedMemoryRecord    (normalized values, derived states computed)
 *     → Domain Initialization     (AppState built with fixture content)
 *
 *   Parsed Document != Canonical Artifact
 *   Normalized Record != Ontology
 *   Domain Initialization Input != Runtime State
 */
import type { ActorRole } from '../../clite-domain-extraction-feasibility/src/types.ts';

export const SUPPORTED_FORMAT_VERSION = 'memory-format-0.1-experimental';

/* ---------- Issues (staleness, conflict, loss) ---------- */

export type IssueSeverity = 'reject' | 'require_human_decision' | 'warn' | 'recoverable_by_normalization';

export interface MemoryIssue {
  severity: IssueSeverity;
  code: string;
  message: string;       // always explainable, never silent
}

export class MemoryValidationError extends Error {
  issues: MemoryIssue[];
  constructor(message: string, issues: MemoryIssue[]) {
    super(message);
    this.name = 'MemoryValidationError';
    this.issues = issues;
  }
}

/* ---------- Validated document (post-parse, pre-normalization) ---------- */

export interface ValidatedMemoryDocument {
  frontmatter: Record<string, unknown>;
  narrativeBody: string;            // human context; read, never required for init
  unknownTopLevelFields: string[];  // explicit, never silently dropped
}

/* ---------- Normalized record ---------- */

export interface SoloOperatorException {
  active: boolean;
  risk_class: 'low';                // any other class is rejected at validation
  independent_review: false;
  reversible: boolean;
  external_effect: boolean;
  reason: string;
}

export interface ApprovalDecisionRecord {
  decision: 'approved' | 'denied';
  approver_label: string;
  approver_role: ActorRole;
  authority_basis: string;          // referenced, never enforced (E57)
  reason: string;
  validity: string;
}

export interface NormalizedMemoryRecord {
  memory_id: string;
  format_version: string;
  project_id: string;
  project_title: string;
  scenario_id: string;
  scenario_fixture_version: string;
  created_from: string;
  last_accepted_checkpoint: string;
  content_version: number;

  intent: {
    initial_intent: string;
    understanding_confirmed: boolean;
    unknowns: string[];
    assumptions: { id: string; status: 'active' | 'corrected' }[];
    contradictions: { id: string; status: 'open' | 'resolved' | 'unresolved_kept'; chosen_interpretation?: number }[];
    answers: { question_id: string; value: string; is_unknown: boolean }[];
  };

  governance: {
    plan_state: 'none' | 'proposed' | 'revision_requested' | 'submitted';
    plan_version: number;
    plan_revision_comments: string[];
    authorization_state: 'none' | 'pending' | 'approved' | 'denied';
    approval_decision: ApprovalDecisionRecord | null;
    solo_operator_exception: SoloOperatorException | null;
  };

  execution: {
    execution_state:
      | 'none' | 'queued' | 'running' | 'awaiting_input' | 'paused'
      | 'failed' | 'retry_requested' | 'cancelled' | 'completed';
    scenario_cursor: number;
    last_tick: number;
    last_seq: number;
    requested_input: { id: string; status: 'requested' | 'provided' | 'deferred'; answer?: string } | null;
    scope_revisions: string[];
  };

  result: {
    artifact_state: 'none' | 'generated' | 'under_review' | 'accepted' | 'revision_requested' | 'rejected';
    artifact_ref: string | null;
    evidence_refs: { id: string; status: 'current' | 'partial' | 'unavailable' | 'stale' }[];
    review_state: 'not_started' | 'in_review' | 'decided';
    review_decision: { outcome: 'accept' | 'revise' | 'reject'; reason: string; decided_by_role: ActorRole; decided_by_label: string } | null;
  };

  continuity: {
    pending_action: string;
    unresolved_items: string[];
    recent_changes: string[];
    provenance_refs: string[];
    limitations: string[];
  };

  issues: MemoryIssue[];            // warn/recoverable issues survive normalization
}

/* ---------- Update proposal (never auto-applied) ---------- */

export interface MemoryFieldChange {
  path: string;                     // dotted path within the record
  before: unknown;
  after: unknown;
}

export interface MemoryUpdateProposal {
  base_memory_id: string;
  base_version: number;
  proposed_version: number;
  changes: MemoryFieldChange[];
  affected_sections: string[];
  reason: string;
  provenance: string[];
  originating_decision: string;
  required_authority: string;       // referenced authority, never enforced
  status: 'proposed';               // the adapter NEVER emits any other status
}

/* ---------- Classification (canonical vs derived vs runtime) ---------- */

export type MemoryFieldClass =
  | 'canonical_required' | 'canonical_optional' | 'derived'
  | 'runtime_only' | 'audit_only' | 'fixture_only' | 'reject_from_memory';

/** Machine-checkable classification matrix (tested; documented in E60). */
export const FIELD_CLASSIFICATION: Record<string, MemoryFieldClass> = {
  'memory_id': 'canonical_required',
  'format_version': 'canonical_required',
  'scenario_id': 'canonical_required',
  'scenario_fixture_version': 'canonical_required',
  'content_version': 'canonical_required',
  'intent.initial_intent': 'canonical_required',
  'intent.answers': 'canonical_required',            // user input is not derivable
  'intent.assumptions.status': 'canonical_required',
  'governance.plan_state': 'canonical_required',
  'governance.plan_revision_comments': 'canonical_required',
  'governance.approval_decision': 'canonical_required',
  'governance.solo_operator_exception': 'canonical_optional',
  'execution.execution_state': 'canonical_required',
  'execution.scenario_cursor': 'canonical_required',
  'execution.requested_input.answer': 'canonical_required',
  'execution.last_tick': 'canonical_optional',
  'execution.last_seq': 'canonical_optional',
  'result.review_decision': 'canonical_required',
  'continuity.pending_action': 'canonical_required',
  'continuity.unresolved_items': 'canonical_required',
  'continuity.provenance_refs': 'canonical_required',
  'project.state': 'derived',                        // computed from canonical markers
  'discovery.state': 'derived',
  'plan.versions.content': 'fixture_only',           // plan text lives in the fixture
  'questions.text': 'fixture_only',
  'artifact.content': 'fixture_only',
  'evidence.content': 'fixture_only',                // refs canonical; content in evidence artifacts
  'evidence.confidence': 'reject_from_memory',       // belongs to the evidence artifact
  'context.stale': 'derived',                        // computed on restore, never stored
  'log.event_sequence': 'audit_only',                // full event log is NOT Memory (E58)
  'clockTick.exact_per_event': 'runtime_only',
  'ui.view': 'reject_from_memory',                   // presentation; not extracted domain either
  'recentChanges.full_history': 'runtime_only',      // only the recent slice is canonical
};
