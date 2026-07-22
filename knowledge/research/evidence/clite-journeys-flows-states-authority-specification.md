---
schema_version: 0.1.0-experimental
id: ARP-0009-E22
kind: knowledge
knowledge_type: research_evidence
title: C-lite Journeys, Flows, States and Authority Specification
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E18
---

# C-lite Journeys, Flows, States and Authority Specification

## Natureza

Documentary baseline only. Actions, states and authorities are benchmark contracts for review, not executable permissions, canonical enums, workflow schemas or UI controls.

## Actors and authority matrix

Legend: `P` propose; `I` inspect within scope; `C` comment/request revision; `A` authorize/decide; `E` execute authorized work; `O` observe/audit; `—` no baseline authority; `*` conditional and Council-defined.

| Action | Chief / Product Owner | Council / Approver | CSA / Reviewer | CEA / Codex | Research Agent | Observer / Auditor |
|---|---|---|---|---|---|---|
| propose context/plan | P/C | I/C | I/C | P | — | I/O |
| inspect scoped package | I | I | I | I | I* | I/O |
| comment/request revision | C | C | C | C | C* | C* |
| authorize research execution | P* | A | C | — | — | — |
| execute bounded research | — | — | — | E/orchestrate | E | O |
| pause/cancel execution | P* | A* | C | E when policy allows | E when delegated | O |
| retry/resume failed work | P* | A* | C | E after valid authority | E after delegation | O |
| accept/reject artifact outcome | P/C* | A | C/recommend | — | — | O |
| request artifact revision | C | A/C | C | P response | — | O |
| update Project Memory | P* | A/source decision | C | E from authorized event | — | O |
| approve exception | — | A* | C | — | — | O |
| view sensitive information | scoped minimum | scoped decision need | scoped review need | task-scoped | least task scope | explicitly granted audit scope |

Matrix is candidate. Exact legal/domain authority, delegation, emergency cancel and sensitive scope remain Council decisions. Execution capability != decision authority. Visibility != permission.

## Separation of duties

- proposal does not self-authorize;
- CEA/Research Agent execution does not accept its own outcome;
- evidence producer cannot certify or silently expire/upgrade evidence;
- CSA review may recommend but does not imply final authority;
- Council approval cannot manufacture missing evidence;
- Project Memory mutation requires a traceable authorized decision/event;
- observer access is scoped and does not grant action authority;
- proportional independence and conflicts/dissent are recorded.

## Journey specifications

| Journey | Intent/entry and stages | Decisions/authority | Failure/recovery/completion/evidence |
|---|---|---|---|
| J1 First use and idea intake | actor enters → understands proposition/limits → describes idea → sees next step | consent to begin discovery | unclear proposition or unsupported input → explanation/retry; complete when intent captured with source |
| J2 Discovery and assumption review | questions → reasons → unknowns/contradictions → assumptions → corrected understanding | actor confirms/corrects project understanding | hidden inference/conflict → reopen question; complete with reviewed context and unresolved register |
| J3 Governed plan review | plan scope/artifacts/risks/effort uncertainty/authority → revision loop | Council/authorized actor approves, rejects or requests revision | vague/bundled approval → hold; complete with scoped decision and rationale |
| J4 Authorized research execution | authorized identity → queue/run → activity/evidence/input → failure/recovery → completion | pause/cancel/retry/input per matrix | stale/unknown/failure → explain, preserve partial work, safe next action; complete when execution terminal and outputs linked |
| J5 Artifact and evidence review | artifact → sources/evidence/limits/findings → compare decision alternatives | accept, revise or reject by authority | unavailable/stale/disputed evidence → block/condition; complete with review decision/effects |
| J6 Return and resume | re-enter project → changes/current state/pending/blocked → select resume point | user chooses permitted next action | stale context/denied target → refresh/explain; complete when actor can state status and resume safely |

Each journey requires actor, intent, entry, stages, information, state, authority, failure, recovery, completion claim and evidence link. Prototype layout is absent.

## Task-flow baseline

| Flow | Preconditions → key decisions → completion | Required failure/recovery |
|---|---|---|
| submit idea | actor/context available → submit free intent → intent identity/source | empty/unsafe/unsupported input explained, preserve editable text |
| answer discovery | active discovery → question reason/answer/skip-unknown → recorded answer | unavailable answer remains unknown, never invented |
| inspect assumption | derived assumption linked to source → confirm/correct/dispute | correction propagates impact review |
| resolve contradiction | conflicting claims shown → select/correct/defer with rationale | unresolved conflict blocks dependent plan claim |
| approve understanding | reviewed context/unknowns → scoped confirmation | not blanket truth; reopen on material change |
| inspect plan | plan + scope/output/risk/unknown/authority → navigate details | missing material field marks not ready |
| request plan revision | reason/target entered → proposal returns for revision | prior proposal/version/history preserved |
| authorize execution | approved plan + correct authority → explicit action/scope/expiry | unauthorized attempt denied/audited without execution |
| monitor execution | execution identity → actual state/activity/output/blocker | refresh/reconnect without inventing progress |
| provide requested input | explicit request/source/effect → authorized response | late/conflicting input handled and traced |
| cancel execution | cancellable state + effect preview + authority → cancel requested/confirmed | non-cancellable/partial effects explained |
| retry failed execution | failure/checkpoint/idempotency reviewed → scoped retry | duplicate/unsafe retry blocked; partial work retained |
| inspect artifact | stable artifact version → content/owner/status/history | unavailable/superseded version explained |
| inspect source/evidence | evidence link → provenance/scope/freshness/limitations | stale/disputed/missing shown, never silently accepted |
| accept result | eligible review + authority → acceptance decision/effects | blocker/missing evidence prevents unconditional acceptance |
| request revision | findings/scope → revision decision/new work proposal | acceptance state not overwritten; lineage retained |
| reject result | reason/effects → rejection decision | artifact/history retained; rejection != deletion |
| resume project later | project identity → changes/pending/current → permitted action | stale permissions/context refreshed before action |

## State-family baseline

| Family | Candidate states/transitions | Authority/triggers/recovery | Invalid/confused transitions |
|---|---|---|---|
| Project | draft → discovery → planning → active → under review → completed; paused/blocked/archived branches | authorized project events; reopen/supersede documented | execution completion cannot auto-complete project |
| Discovery | not started → asking → awaiting answer → resolving conflict → reviewed; paused/incomplete | actor answers/corrects; reopen after material assumption change | reviewed cannot mean all unknowns resolved |
| Plan | draft → proposed → revision requested → pending approval → approved/rejected/superseded | proposer revises; Council/authority decides | approved plan cannot imply execution started |
| Execution | proposed → authorized → queued → running → awaiting input/approval → paused → completed/failed/cancelled | executor operates within authorization; safe retry creates traced attempt | proposed cannot run; failed cannot silently become running |
| Artifact | draft/generated → under review → revision requested → accepted/rejected/superseded | producer creates; approver decides; revision creates version | completed execution cannot auto-accept artifact |
| Evidence | missing → partial → available → stale/disputed → accepted-for-decision/superseded | custodian records; reviewer/authority scopes reliance | available cannot mean valid for every claim |
| Review | not started → in review → awaiting clarification → recommendation issued → closed/reopened | reviewer recommends; authority closes/reopens | reviewer recommendation != decision |
| Decision | proposed → pending → approved/rejected → superseded/expired | designated authority only | approval cannot outlive scope/expiry silently |
| Interface | idle/loading/editing/submitting/error/offline/stale view | local interaction/runtime signal | interface state cannot mutate domain state by label |

Names are candidates, not canonical enums. Each Stage 2 proposal must identify source of truth, transition command/event, authorization, terminality, recovery and unknown handling.

## Long-running execution contract

- stable execution identity, plan/version/authorization linkage;
- proposed, authorized, queued, running and awaiting-human distinctions;
- current activity and elapsed time; progress only with objective denominator;
- streaming/preview separate from committed artifact;
- partial outputs/evidence and provenance available without implying acceptance;
- requested input includes why, deadline/impact and authorized responder;
- blockers/failure reason include scope, partial effects and safe choices;
- pause/cancel/retry/resume availability, authority, idempotency and late-result policy;
- completion is execution terminality, not artifact acceptance or project completion;
- status history and accessible announcements are retained/proportional.

## Approval contract

Every approval candidate records requested decision, requesting actor, rationale, scope/version, inputs, affected artifacts/data, intended action, risks/unknowns, required authority, reversibility/compensation, expiry/revalidation trigger, alternatives, expected result and evidence. “Continuar?” without those elements is an anti-pattern. Approval is scoped authorization, not certification.

## Project Memory baseline

Human-readable project context; stable artifact identity; status/owner/version; relations; provenance/source access; history/supersession; decisions/evidence; unresolved questions; recent changes and affected items; pending/blocked action; return anchors. Physical paths/IDs may appear for audit/detail but are not primary labels or navigation prerequisites.

## Search baseline

Search by project, artifact, decision, evidence, execution, status, owner, date, unresolved item and text. Project-context search is default candidate; global search is explicit. Results respect permissions/sensitive redaction, expose type/context/status/match, support filters/direct navigation, distinguish empty from denied/unavailable and avoid language-command side effects without preview/authority.

## Graph baseline

Conceptual needs: relations, dependency, lineage, impact, filter, zoom, selection/detail and large-graph behavior. Equivalent list/tree/table/text paths are mandatory for required tasks. Graph remains optional for first prototype unless a prototype question proves it necessary; no library or visualization is selected.

## Open authority/state questions

Emergency cancel authority, delegated retry, conditional Chief acceptance, Council versus domain approver, sensitive evidence classes, expiration, Project Memory event sources, state vocabulary and retry-attempt identity require Council/domain review before executable design.
