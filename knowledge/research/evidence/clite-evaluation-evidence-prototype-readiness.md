---
schema_version: 0.1.0-experimental
id: ARP-0009-E24
kind: knowledge
knowledge_type: research_evidence
title: C-lite Evaluation, Evidence and Prototype Readiness
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E19
  - type: refines
    target: ARP-0009-E20
---

# C-lite Evaluation, Evidence and Prototype Readiness

## Natureza

Documentary evaluation/readiness record. No prototype, participant, runtime evidence, test, score, gate, benchmark run or Stage 2 authorization exists.

## Quality-scenario baseline

Each `QS` is a conceptual trace anchor, not executable test case.

| ID / scenario | Context, actor, state and stimulus | Expected response | Failure/risk | Future method/evidence |
|---|---|---|---|---|
| QS-01 first-use comprehension | primary actor, first entry, asks what system does | explains purpose/limits/next action | ontology jargon or false automation promise | comprehension task/content review |
| QS-02 incomplete idea | idea partial, actor submits | records intent; asks justified adaptive questions; unknown stays unknown | invented requirement | trace + moderated task later |
| QS-03 contradictory answers | discovery has conflicting answers | shows conflict/sources/impact and resolution choices | silent premise selection | flow/provenance review |
| QS-04 assumption correction | reviewed assumption is wrong | correction retained and affected context/plan flagged | stale downstream assumption | impact/trace walkthrough |
| QS-05 plan revision | proposed plan too broad | targeted revision with version/history | overwrite or scope drift | authority/version review |
| QS-06 unauthorized execution | non-authorized actor attempts start | deny without effect, explain required authority, audit attempt | execution or sensitive leak | security/authorization review |
| QS-07 authorized execution | approved scoped plan and authority | stable execution linked to approval/version | approval detached from action | contract/audit trace |
| QS-08 unknown progress | running work has no denominator | show state/current activity/elapsed/uncertainty, no fake percent | misleading progress/trust | content/state/user review |
| QS-09 requested input | execution awaits material input | request explains why/effect/authorized responder; resume traceably | hidden wait or wrong responder | task/state review |
| QS-10 failed execution | partial output then failure | reason/known effects/checkpoint/safe retry-cancel choices | dead end, duplicate or data loss | recovery/architecture review |
| QS-11 evidence review | artifact completed, reviewer opens | sources/evidence/limits/findings/version and actions linked | plausible output accepted blindly | evidence/task review |
| QS-12 stale evidence | dependency/content/version changes | affected evidence marked stale and reliance constrained | old evidence shown current | freshness/trace review |
| QS-13 permission denial | direct link/search result beyond scope | deny safely, avoid existence/data leak, offer valid next step | sensitive disclosure | privacy/security review |
| QS-14 prompt/reference attack | untrusted reference contains instructions | treat as content, preserve higher authority and warn/escalate | tool/authority compromise | threat/abuse review |
| QS-15 return journey | actor returns after time | show current state/changes/pending/blocked/next action | stale or wrong-project action | longitudinal task later |
| QS-16 keyboard completion | keyboard user performs all six journeys | logical navigation/focus/actions/recovery | blocked task/focus loss | full keyboard journey |
| QS-17 screen-reader status | AT user during streaming/input/failure | meaningful non-overwhelming announcements and navigation | silent or noisy critical change | screen-reader journey |
| QS-18 graph alternative | relationship question without visual graph | equivalent list/tree/text answer/action | graph-only evidence/impact | equivalent-task AT review |

## Acceptance model

### Non-compensable blockers

- B-01 execution without valid scoped authority;
- B-02 hidden/misleading authority or approval effect;
- B-03 primary C-lite task cannot complete or recover;
- B-04 critical keyboard/AT barrier in required process;
- B-05 artifact evidence/source unavailable for required review;
- B-06 failure irrecoverable without disclosed reason/partial effects;
- B-07 invented/misleading execution status or progress;
- B-08 sensitive information/action exposed beyond permission;
- B-09 proposal, execution, artifact and decision state conflated so action is unsafe.

### Required quality

Comprehensible, traceable, recoverable, accessible, responsive across authorized target contexts, evidence-linked, authority-explicit, provenance-preserving and return-context preserving. Stage 2 must define observable criteria for each claim.

### Desired qualities

Efficient, polished, flexible, visually distinctive and highly customizable. Desired quality cannot compensate a blocker or missing required evidence. No aggregate score.

## Documentary evidence plan and coverage

| Evidence class | Stage 1 artifact/evidence | Coverage claim/limit |
|---|---|---|
| benchmark decision | Council directive + E21 decisions | fixes scope/actor/task/output for baseline only |
| requirements | E21 classified register | candidate needs traceable; not user validated |
| actor/authority | E22 matrix/separation | exposes gaps; not executable authorization |
| journeys/flows | E22 J1–J6 + task-flow table | conceptual complete-process coverage; no observed completion |
| states | E22 nine families | prevents conflation; names/transitions not canonical |
| content/terminology | E23 principles/review | candidate comprehension; no tested copy |
| ontology leakage | E23 directed findings | no current ontology mutation; Stage 2 review still needed |
| accessibility | E23 CL-AX requirements/methods | coverage planned; no conformance evidence |
| security/privacy | E23 threat/authority/data requirements | experience boundary only; no control/audit evidence |
| AI-native | E23 plan/tool/stream/recovery requirements | scenario coverage; no model/system evaluation |
| architecture needs | E23 technology/architecture inputs | readiness questions; no architecture decision |
| quality/acceptance | E24 QS-01–18/blockers | future evaluation contract; no runtime evidence |
| assumptions/risks | E24 registers | decision visibility; not mitigation completion |

Stage 1 evidence is document coherence/coverage only. It cannot prove usability, accessibility conformance, security, performance or product value.

## Assumption register

| ID | Assumption/source/confidence | Impact and validation need | Owner/expiry/affected artifacts |
|---|---|---|---|
| A-01 | technical founder can use moderate technical depth; Council decision + hypothesis; medium | terminology/density; test with target participants | Product/User Research; before Stage 2 conclusions; E21/E23 |
| A-02 | one research cycle represents material platform complexity; C-lite decision; medium | benchmark validity; review construct after prototype | Benchmark Owner; each stage; all |
| A-03 | explicit governance increases trust more than friction; product hypothesis; low-medium | approval/content flow; usability study | Product/Research; Stage 2; E21/E22 |
| A-04 | hybrid IA best balances task/context/lineage; analysis; medium | prototype IA questions | Experience Owner; Stage 2; E21/E22 |
| A-05 | Project Memory can hide repo structure while preserving audit | navigation/lineage; prototype and expert review | Product/Architecture; Stage 2; E22/E23 |
| A-06 | primary artifact + small evidence set is understandable | review density; participant/evidence-findability study | Product/Research; Stage 2; E21/E24 |
| A-07 | progress often lacks objective denominator | status model; validate per representative execution | Architecture/Executor; before implementation; E22/E23 |
| A-08 | graph is optional for primary task | prototype scope; test relation tasks without graph | Experience Owner; Stage 2 proposal; E22/E23 |
| A-09 | Council directive is sufficient authoritative source for benchmark baseline | governance validity; Council review of package | Council; this checkpoint; all |

Assumption fields are conceptual; table is not schema. Material changes reopen affected artifacts.

## Risk register

| ID | Risk/impact | Candidate response/owner | Residual status |
|---|---|---|---|
| R-01 self-reference/overfitting | case rewards repository language | independent review, freeze construct; Benchmark Owner | open |
| R-02 founder/technical-user bias | excludes non-technical/access needs | do not universalize; diverse later research; Product/Research | open |
| R-03 ontology leakage | internal types become IA/copy | E23 review + prototype terminology test; Experience/Architecture | bounded, open |
| R-04 authority confusion | unsafe execution/acceptance | matrix, contracts, security review; Council/ARP-0007 owner | blocker-sensitive |
| R-05 fake progress | misplaced trust | unknown-progress contract/QS-08; Product/Architecture | open |
| R-06 evidence overload | review impossible | small set, progressive disclosure, task test; Experience | open |
| R-07 information density | comprehension/accessibility failure | hierarchy/content/reflow testing; Experience/Accessibility | open |
| R-08 AI overtrust/nondeterminism | plausible invalid outcome | provenance/uncertainty/human review; AI/Security owners | open |
| R-09 accessibility gaps | critical task exclusion | CL-AX/QS-16–18 and specialist/user review; Accessibility | blocker-sensitive |
| R-10 scope growth | benchmark becomes platform | frozen C-lite/non-goals/change authority; Council | controlled |
| R-11 synthetic future data | unrealistic or biased results | versioned representative failures/provenance; Benchmark Owner | future |
| R-12 implementation pressure | decisions invented in design/code | Stage boundary/readiness conditions; Council | controlled |

## Prototype readiness assessment

| Criterion | Stage 1 finding |
|---|---|
| C-lite scope frozen for proposal | satisfied by Council decision; changes require version/review |
| primary actor identified | satisfied for baseline, not empirically confirmed |
| representative task/output bounded | satisfied by Council decision |
| authority matrix reviewed | documented; Council/domain confirmation remains condition |
| requirements classified/traceable | documented; user/product hypotheses remain unvalidated |
| journeys/flows/state families reviewed | documented baseline; names/transitions non-canonical |
| blocker model | documented; thresholds/method execution future |
| terminology usable | candidate review complete; usability unknown |
| accessibility/security baselines | present with future methods; specialist confirmation pending |
| evaluation plan/prototype questions | present in QS/evidence plan |
| unknowns bounded | material assumptions/risks/open authorities explicit |

## Recommendation

**Ready with bounded conditions** for a future **Stage 2 proposal**, not Stage 2 execution.

Conditions before Council may authorize Stage 2: accept/revise this baseline; name benchmark/requirement/experience/authority owners; confirm matrix and emergency/delegated actions; freeze versioned C-lite package; choose exact non-functional prototype questions/fidelity/artifacts/budget; obtain accessibility/security specialist review of requirements; define participant/research/privacy plan if users are involved; retain graph as optional unless task evidence requires it; define change/invalidation and review acceptance.

Reasoning: documentary context, requirements, authority, journeys, states, content, risk and evaluation are coherent enough to avoid inventing their broad categories during prototyping. They are not validated enough to prescribe final IA, terminology, visual direction, state machine, architecture or controls.

## Future Stage 2 questions

Can actor explain purpose/authority? Which discovery explanation supports correction without overload? Does hybrid IA support six journeys? Which state/approval presentation prevents conflation? Can users find source/evidence/limitations? How should unknown progress/streaming/recovery be represented accessibly? Is graph needed? Which terminology and density work? These questions must drive prototype scope rather than visual completeness.
