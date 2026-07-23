/**
 * ScenarioFixture — experimental contract that inverts the Stage 3 coupling:
 * the domain machine no longer imports a concrete fixture; scenario content is
 * injected. EXPERIMENTAL ONLY — not a canonical schema, not Ontology, not a
 * public API. Promotion requires Council decision.
 */
import type {
  ActorRole, Artifact, Assumption, AuthorizationRequest, Contradiction,
  DiscoveryQuestion, EvidenceItem, PlanVersion, RequestedInput, Understanding,
} from './types.ts';

export type ScenarioStep =
  | { kind: 'activity'; text: string; note?: string }
  | { kind: 'input_request' }
  | { kind: 'failure' }
  | { kind: 'completion' };

export interface ScenarioFixture {
  /** Version marker used for snapshot invalidation. */
  version: string;
  projectId: string;
  projectName: string;
  /** F-01: internal role IDs are never rendered; labels are. */
  roleLabels: Record<ActorRole, string>;
  initialPendingAction: string;
  questions: DiscoveryQuestion[];
  initialAssumptions: Assumption[];
  /** Which answered question deterministically surfaces the contradiction. */
  contradictionTriggerQuestionId: string;
  contradiction: Contradiction;
  correctedAssumptionText: string;
  understanding: Understanding;
  plan: PlanVersion;
  /** Limit line appended when the plan is revised. */
  planRevisionAddedLimit: string;
  authorizationRequest: AuthorizationRequest;
  executionId: string;
  requestedInput: RequestedInput;
  failureReason: string;
  /** Evidence surfaced when the scripted failure step runs. */
  failureEvidence: EvidenceItem[];
  completionArtifact: Artifact;
  /** Evidence surfaced when the scripted completion step runs. */
  completionEvidence: EvidenceItem[];
  scenarioSteps: ScenarioStep[];
  /** Synthetic minutes per scenario advance; never wall-clock. */
  ticksPerStep: number;
  /** Claim removed when scope is revised after interruption. */
  scopeRevisionClaim: string;
}
