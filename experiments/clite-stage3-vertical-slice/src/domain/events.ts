/**
 * Domain events — facts recorded after command validation.
 * User Intent != Command != Event != State.
 * Names are E45 candidates; experimental, not canonical.
 */
import type { ActorRole } from './types.ts';

export type DomainEvent =
  | { type: 'IDEA_SUBMITTED'; actor: ActorRole; text: string }
  | { type: 'DISCOVERY_ANSWERED'; actor: ActorRole; questionId: string; value: string; isUnknown: boolean }
  | { type: 'ASSUMPTION_INSPECTED'; actor: ActorRole; assumptionId: string }
  | { type: 'ASSUMPTION_CORRECTED'; actor: ActorRole; assumptionId: string; correctedText: string }
  | { type: 'CONTRADICTION_RESOLVED'; actor: ActorRole; contradictionId: string; chosenInterpretation: number }
  | { type: 'UNDERSTANDING_CONFIRMED'; actor: ActorRole }
  | { type: 'PLAN_PROPOSED'; actor: ActorRole; version: number }
  | { type: 'PLAN_REVISION_REQUESTED'; actor: ActorRole; comment: string }
  | { type: 'PLAN_REVISED'; actor: ActorRole; version: number }
  | { type: 'PLAN_SUBMITTED'; actor: ActorRole; version: number }
  | { type: 'PLAN_AUTHORIZED'; actor: ActorRole; reason: string }
  | { type: 'PLAN_DENIED'; actor: ActorRole; reason: string }
  | { type: 'EXECUTION_QUEUED'; actor: ActorRole; executionId: string }
  | { type: 'EXECUTION_STARTED'; actor: ActorRole; executionId: string }
  | { type: 'SCENARIO_ADVANCED'; actor: ActorRole; cursor: number }
  | { type: 'INPUT_REQUESTED'; actor: ActorRole; inputId: string }
  | { type: 'INPUT_PROVIDED'; actor: ActorRole; inputId: string; answer: string }
  | { type: 'EXECUTION_RESUMED'; actor: ActorRole }
  | { type: 'EXECUTION_PAUSED'; actor: ActorRole }
  | { type: 'EXECUTION_FAILED'; actor: ActorRole; reason: string }
  | { type: 'RETRY_REQUESTED'; actor: ActorRole }
  | { type: 'SCOPE_REVISED'; actor: ActorRole; removedClaim: string }
  | { type: 'EXECUTION_CANCELLED'; actor: ActorRole; reason: string }
  | { type: 'EXECUTION_COMPLETED'; actor: ActorRole }
  | { type: 'ARTIFACT_GENERATED'; actor: ActorRole; artifactId: string }
  | { type: 'EVIDENCE_RECORDED'; actor: ActorRole; evidenceIds: string[] }
  | { type: 'REVIEW_STARTED'; actor: ActorRole }
  | { type: 'RESULT_ACCEPTED'; actor: ActorRole; reason: string }
  | { type: 'REVISION_REQUESTED'; actor: ActorRole; comment: string; affectedScope: string }
  | { type: 'RESULT_REJECTED'; actor: ActorRole; reason: string }
  | { type: 'MEMORY_UPDATED'; actor: ActorRole; change: string }
  | { type: 'PROJECT_RESUMED'; actor: ActorRole }
  | { type: 'VIEW_REFRESHED'; actor: ActorRole };

export type CommandResult =
  | { ok: true; events: DomainEvent[] }
  | { ok: false; reason: string };
