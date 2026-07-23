/**
 * C-lite Stage 3 vertical slice — experimental domain types.
 * These are working contracts of the slice (E45 candidates), NOT canonical
 * Ontology, NOT stable schemas. They must not be promoted without Council decision.
 */

export const CONTRACT_VERSION = 'slice-contracts-0.1';

/* ---------- State families (separate; no universal status) ---------- */

export type ProjectState =
  | 'draft' | 'discovering' | 'contextualized' | 'planning'
  | 'researching' | 'reviewing' | 'resolved';

export type DiscoveryState = 'asking' | 'inspecting' | 'resolving_conflict' | 'reviewed';

export type PlanState = 'none' | 'proposed' | 'revision_requested' | 'submitted';

export type AuthorizationState = 'none' | 'pending' | 'approved' | 'denied';

export type ExecutionState =
  | 'none' | 'queued' | 'running' | 'awaiting_input' | 'paused'
  | 'failed' | 'retry_requested' | 'cancelled' | 'completed';

export type ArtifactState = 'none' | 'generated' | 'under_review' | 'accepted' | 'revision_requested' | 'rejected';

export type EvidenceStatus = 'current' | 'partial' | 'unavailable' | 'stale';

export type ReviewState = 'not_started' | 'in_review' | 'decided';

export type InterfaceState = 'idle' | 'busy' | 'stale_view' | 'error';

/* ---------- Actors ----------
 * Internal role IDs are never rendered; views translate via fixture labels (F-01). */
export type ActorRole = 'product_owner' | 'decision_authority' | 'research_executor' | 'system';

/* ---------- Entities (minimum fields only) ---------- */

export interface DiscoveryQuestion {
  id: string;
  text: string;
  reason: string;
  status: 'asked' | 'answered' | 'unknown';
}

export interface Answer { questionId: string; value: string; isUnknown: boolean; }

export interface Assumption {
  id: string;
  text: string;
  origin: string;
  confidence: 'baixa' | 'média' | 'alta';
  impact: string;
  status: 'active' | 'corrected';
  correctedText?: string;
}

export interface Contradiction {
  id: string;
  statements: [string, string];
  whyItMatters: string;
  interpretations: string[];
  status: 'open' | 'resolved' | 'unresolved_kept';
  chosenInterpretation?: number;
}

export interface Understanding {
  version: number;
  problem: string;
  users: string;
  inScope: string[];
  nonGoals: string[];
  assumptions: string[];
  unknowns: string[];
}

export interface PlanVersion {
  version: number;
  objective: string;
  steps: string[];
  expectedArtifacts: string[];
  risks: string[];
  limits: string[];
}

export interface AuthorizationRequest {
  id: string;
  action: string;
  requestingActorLabel: string;
  executorRole: ActorRole;      // internal ID; rendered via label only
  authorityLabel: string;
  scope: string;
  risks: string[];
  reversibility: string;
  expiry: string;
  expectedOutput: string;
}

export interface RequestedInput {
  id: string;
  missing: string;
  reason: string;
  impactIfAbsent: string;
  options: string[];
  status: 'requested' | 'provided' | 'deferred';
  answer?: string;
}

export interface FailureInfo { reason: string; preserved: string[]; }

export interface ExecutionActivity { step: number; text: string; note?: string; }

export interface ArtifactFinding { id: string; text: string; }

export interface Artifact {
  id: string;
  title: string;
  version: string;
  findings: ArtifactFinding[];
  limitations: string[];
  contentSections: { heading: string; body: string }[];
}

export interface EvidenceItem {
  id: string;
  claim: string;
  supportsFinding: string;      // claim-level link; never a bare URL list
  source: string;
  provenance: string;
  status: EvidenceStatus;
  freshness: string;
  limitation: string;
  confidence: 'none' | 'low' | 'medium';
}

export interface DecisionRecord {
  id: string;
  type: 'authorization' | 'denial' | 'review_accept' | 'review_revision' | 'review_reject' | 'cancellation';
  actorRole: ActorRole;
  actorLabel: string;
  reason: string;
  scope: string;
  consequence: string;
  atTick: number;
}

export interface HistoryEntry {
  seq: number;
  eventType: string;
  atTick: number;
  actorRole: ActorRole;
  commandOrigin: string;
  previousState: string;
  resultingState: string;
  reason?: string;
  pendingAction: string;
}

export type ViewId = 'entry' | 'discovery' | 'plan' | 'execution' | 'review' | 'memory';

/* ---------- Aggregate application state ---------- */

export interface AppState {
  project: { id: string; name: string; state: ProjectState };
  idea: { text: string; submittedAtTick: number } | null;
  discovery: {
    state: DiscoveryState;
    questions: DiscoveryQuestion[];
    answers: Answer[];
    assumptions: Assumption[];
    contradiction: Contradiction | null;
    currentQuestionIndex: number;
  };
  understanding: Understanding | null;
  plan: { state: PlanState; versions: PlanVersion[]; revisionComments: string[] };
  authorization: { state: AuthorizationState; request: AuthorizationRequest | null };
  execution: {
    state: ExecutionState;
    id: string | null;
    scenarioCursor: number;
    checkpoint: number;
    activities: ExecutionActivity[];
    failure: FailureInfo | null;
    requestedInput: RequestedInput | null;
    scopeRevisions: string[];
  };
  artifact: { state: ArtifactState; item: Artifact | null };
  evidence: EvidenceItem[];
  review: { state: ReviewState; comments: { text: string; affectedScope: string }[] };
  decisions: DecisionRecord[];
  ui: { state: InterfaceState; view: ViewId };
  pendingAction: string;
  recentChanges: string[];
  unresolved: string[];
  log: HistoryEntry[];
  seq: number;
  clockTick: number; // synthetic time; never wall-clock
}
