/**
 * Update proposal generator — domain state → MemoryUpdateProposal.
 * The adapter NEVER writes to the canonical artifact and NEVER emits any
 * status other than 'proposed'. Applying a proposal is a human/governed act.
 *
 *   Generated Update Proposal != Accepted Canonical Change
 */
import type { AppState } from '../../clite-domain-extraction-feasibility/src/types.ts';
import type { MemoryFieldChange, MemoryUpdateProposal, NormalizedMemoryRecord } from './memory-types.ts';

export interface ProposalInput {
  base: NormalizedMemoryRecord;
  current: AppState;
  reason: string;
  originatingDecision: string;
  provenance: string[];
}

/** Fields the proposal compares — the canonical surface, nothing runtime-only. */
function projectCanonicalView(base: NormalizedMemoryRecord, s: AppState): MemoryFieldChange[] {
  const changes: MemoryFieldChange[] = [];
  const compare = (path: string, before: unknown, after: unknown): void => {
    if (JSON.stringify(before) !== JSON.stringify(after)) changes.push({ path, before, after });
  };

  compare('governance.plan_state', base.governance.plan_state, s.plan.state);
  compare('governance.plan_version', base.governance.plan_version, s.plan.versions.length);
  compare('governance.authorization_state', base.governance.authorization_state, s.authorization.state);
  compare('execution.execution_state', base.execution.execution_state, s.execution.state);
  compare('execution.scenario_cursor', base.execution.scenario_cursor, s.execution.scenarioCursor);
  compare('execution.requested_input',
    base.execution.requested_input,
    s.execution.requestedInput
      ? { id: s.execution.requestedInput.id, status: s.execution.requestedInput.status, ...(s.execution.requestedInput.answer ? { answer: s.execution.requestedInput.answer } : {}) }
      : null);
  compare('execution.scope_revisions', base.execution.scope_revisions, s.execution.scopeRevisions);
  compare('result.artifact_state', base.result.artifact_state, s.artifact.state);
  compare('result.artifact_ref', base.result.artifact_ref, s.artifact.item?.id ?? null);
  compare('result.evidence_refs',
    base.result.evidence_refs,
    s.evidence.map((e) => ({ id: e.id, status: e.status })));
  compare('result.review_state', base.result.review_state, s.review.state);
  compare('continuity.pending_action', base.continuity.pending_action, s.pendingAction);
  compare('continuity.unresolved_items', base.continuity.unresolved_items, s.unresolved);
  compare('continuity.recent_changes', base.continuity.recent_changes, s.recentChanges);
  return changes;
}

export function generateUpdateProposal(input: ProposalInput): MemoryUpdateProposal {
  const changes = projectCanonicalView(input.base, input.current);
  const affected = [...new Set(changes.map((c) => c.path.split('.')[0]!))];

  return {
    base_memory_id: input.base.memory_id,
    base_version: input.base.content_version,
    proposed_version: input.base.content_version + 1,
    changes,
    affected_sections: affected,
    reason: input.reason,
    provenance: input.provenance,
    originating_decision: input.originatingDecision,
    // Authority is REFERENCED per E56–E59 vocabulary, never enforced here.
    required_authority: 'AuthorityGrant ref: decision_authority ou product_owner do projeto (E57, experimental_only)',
    status: 'proposed',
  };
}

/**
 * Staleness guard for proposals: a proposal built over an outdated base must
 * never be applied. The adapter only CHECKS; it never applies anything.
 */
export function validateProposalAgainstBase(
  proposal: MemoryUpdateProposal,
  currentBase: NormalizedMemoryRecord,
): { applicable: boolean; reason: string } {
  if (proposal.base_memory_id !== currentBase.memory_id) {
    return { applicable: false, reason: `Proposta pertence a outra Memory ("${proposal.base_memory_id}" ≠ "${currentBase.memory_id}").` };
  }
  if (proposal.base_version !== currentBase.content_version) {
    return {
      applicable: false,
      reason: `Proposta foi gerada sobre a versão ${proposal.base_version}, mas a Memory está na versão ${currentBase.content_version}: exige decisão humana.`,
    };
  }
  return { applicable: true, reason: 'Base compatível; aplicação continua sendo um ato humano/governado.' };
}
