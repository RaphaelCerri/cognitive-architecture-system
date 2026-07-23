---
schema_version: 0.1.0-experimental
id: ARP-0009-E25
kind: knowledge
knowledge_type: research_evidence
title: C-lite Non-functional Prototype Proposal
status: experimental
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E21
  - type: refines
    target: ARP-0009-E24
---

# C-lite Non-functional Prototype Proposal

## Natureza, purpose and sources

Governed proposal only. It contains no wireframe, screen drawing, image, visual direction, prototype, UI, tool selection, dataset, user study, frontend or implementation. Local identifiers `PQ`, `HP`, `SF` and `SC` are trace anchors, not schemas or Ontology.

Primary sources are the Council decision recognizing `420aec0034ebaeacc4af2ae00998b169a593c9d4`, C-lite Stage 1 artifacts ARP-0009-E21–E24 and their inherited evidence ARP-0009-E17–E20. Council acceptance authorizes proposal preparation, not prototype creation. Stage 1 requirements/hypotheses remain candidate product knowledge unless explicitly fixed for this benchmark.

Purpose: define the smallest non-functional prototype capable of testing high-risk C-lite comprehension, authority, state, recovery, evidence and return assumptions without pretending runtime architecture, security enforcement or real AI execution.

```text
Prototype Proposal != Prototype != Wireframe
Simulated state != Runtime behavior != Security enforcement
```

## Prototype questions and traceability

| ID / question | Requirement / risk | Journey / state | Surface | Future method | Expected evidence |
|---|---|---|---|---|---|
| PQ-01 purpose before start? | CL-UN-01 / R-03 | J1 / interface idle | SF-01 | comprehension + first-click | explanation and chosen entry path |
| PQ-02 incomplete idea understood as valid? | CL-UN-02 / R-02 | J1 / editing | SF-01 | moderated task | task start without invented completeness |
| PQ-03 why each discovery question? | CL-PN-01 / R-06 | J2 / asking | SF-02 | task + neutral probe | rationale found/explained |
| PQ-04 question vs assumption vs requirement vs decision? | CL-PN-02 / R-03 | J2/J3 / mixed states | SF-02/03 | comprehension/card classification | correct distinctions and confusion cases |
| PQ-05 incorrect interpretation corrected? | CL-PN-02 / R-03 | J2 / resolving | SF-02 | moderated correction task | correction and downstream impact understood |
| PQ-06 proposed plan scope understood? | CL-GOV-01 / R-06 | J3 / proposed | SF-03 | task/content review | scope, outputs, exclusions and risks located |
| PQ-07 what executes before authorization? | CL-GOV-01/02 / R-04 | J3/J4 / pending | SF-04 | comprehension task | actor explains proposed action/effects |
| PQ-08 who has authority? | CL-GOV-02 / R-04 | J3/J4 / pending approval | SF-04 | authority walkthrough | correct actor and limits identified |
| PQ-09 proposed/authorized/queued/running/awaiting input distinct? | CL-ARCH-01 / R-05 | J4 / execution family | SF-05 | state comprehension | state/effect/action distinctions |
| PQ-10 unknown progress understood without percent? | CL-UN-03 / R-05 | J4 / running | SF-05 | comparison/comprehension | calibrated interpretation, no false completion |
| PQ-11 partial outputs/evidence found? | CL-PN-03 / R-06 | J4 / running | SF-05 | findability task | correct output/evidence and status |
| PQ-12 requested input answered safely? | CL-PN-03 / R-04 | J4 / awaiting input | SF-06 | moderated task | reason/effect/responder understood |
| PQ-13 cancel/interruption understood? | CL-GOV-03 / R-04 | J4 / running | SF-05/06 | consequence task | availability, authority and partial effects explained |
| PQ-14 failure/recovery choices understood? | CL-PN-04 / R-05 | J4 / failed | SF-06 | recovery task | safe retry/revise/cancel/escalate choice |
| PQ-15 artifact and evidence reviewed distinctly? | CL-EVAL-01 / R-06 | J5 / under review | SF-07 | findability/comprehension | artifact, evidence, limits and freshness distinguished |
| PQ-16 accept/revise/reject consequences? | CL-GOV-04 / R-04 | J5 / decision pending | SF-07 | decision task | correct effect/authority/reversibility |
| PQ-17 return context reconstructed? | CL-UN-04 / R-03 | J6 / stale view/current | SF-08 | return task | current state, changes, pending and next step |
| PQ-18 Memory update understood? | CL-PN-05 / R-03 | J5/J6 / updated | SF-08 | provenance task | source event/decision and changed items found |
| PQ-19 keyboard completion possible? | CL-AX-01 / R-09 | J1–J6 / all | SF-01–08 | keyboard walkthrough | complete ordered path and focus issues |
| PQ-20 state/change without color/motion only? | CL-AX-02 / R-09 | J2–J6 / dynamic | SF-02–08 | accessibility expert review | text/structure/cue coverage and gaps |

`PQ` links candidate questions to Stage 1; it does not assert that future prototype fidelity can answer every property conclusively.

## Hypothesis register

| ID | Hypothesis/source/rationale/confidence | Treatment/method | Failure implication |
|---|---|---|---|
| HP-01 | task entry is clearer than ontology entry; E21 leakage review; medium | SF-01 first-click/comprehension | revisit entry/terminology, not ontology menu by default |
| HP-02 | persistent project context improves orientation; E21 IA; medium | common context in SF-02–08, return task | test alternate context cues/IA |
| HP-03 | explicit assumptions increase correction ability; CL-PN-02; medium | assumption/source/impact treatment, PQ-05 | revise distinction/content and propagation |
| HP-04 | structured approvals reduce ambiguous authority; E22; medium | SF-04 contract, PQ-07/08 | hold prototype authorization model for review |
| HP-05 | activity + state calibrates unknown progress better than fake percent; E22/E23; medium | SF-05 comparison, PQ-09/10 | revise status vocabulary/information hierarchy |
| HP-06 | artifact and evidence should be linked but visually/conceptually distinct; E21/E24; medium | SF-07 findability task | revise relation/content grouping |
| HP-07 | pending decisions are essential to return; CL-UN-04; medium | SF-08 return condition | reassess return summary and navigation |
| HP-08 | plain-language labels reduce ontology leakage; E23; medium | candidate labels + comprehension | retain internal terms only in contextual detail |
| HP-09 | graph is unnecessary for first core task; E22; medium | accessible relation list, no graph | reopen only if relation task fails without graph |

No hypothesis is proved or adopted as final product decision.

## Fidelity options

| Option | Capability | Value | Limitation/risk |
|---|---|---|---|
| A low-fidelity task flows | static structure, basic content/navigation/main states | lowest cost, rapid correction | cannot adequately test cross-state interaction, approval consequences or recovery |
| B structured interactive prototype | simulated navigation/forms/approval/state/failure/return with neutral treatment | smallest option covering PQ-01–20 at appropriate conceptual level | may be mistaken for real behavior/security; needs explicit simulation annotation |
| C high-fidelity visual prototype | B + developed visual expression/polish | supports perception/direction questions | premature visual decisions, cost and polish masking comprehension defects |

**Recommendation:** Option B, bounded structured interactive prototype with content-first neutral visual treatment. Do not simulate backend intelligence or claim functional behavior. Option A is insufficient for state/authority/recovery; Option C answers questions outside current uncertainty.

## Representative scenario candidates

| Candidate | Discovery/contradiction/research/failure | Bias or cost |
|---|---|---|
| small repair-shop operations SaaS | quotes/approvals via messaging; contradiction between no customer account and traceable approval; bounded workflow research; unavailable source | familiar, non-regulated core, supports authority/evidence; moderate domain assumptions |
| personal organization tool | priorities/sharing; privacy contradiction; productivity-pattern research | too simple for governed approval/evidence |
| education platform | teachers/students; assessment/access contradiction; accessibility research | scope and policy expand quickly |
| market-research system | source/evidence rich; failure natural | resembles system research capability and risks self-reference |
| customer-service tool | routing/escalation; privacy; workflow research | roles/integrations may broaden scope |

**Selected recommendation:** a fictitious small repair-shop service-operations SaaS. Initial idea candidate: “Quero organizar solicitações, orçamentos e aprovações que hoje acontecem pelo WhatsApp.” Discovery exposes the desire to avoid customer accounts while requiring secure, traceable approval. The bounded future research produces one workflow/approval requirements brief with a small evidence set; one primary source becomes unavailable, requiring scope/source recovery. No final scenario content or dataset is created now.

## Scope and surface families

| Surface family | Required conceptual coverage |
|---|---|
| SF-01 Entry and Idea | proposition, incomplete idea, first action |
| SF-02 Discovery and Assumptions | justified questions, contradiction, assumption correction |
| SF-03 Project Context and Plan | reviewed understanding, scope/output/risk/unknowns, revision |
| SF-04 Authorization | requester/executor/authority/action/effects/expiry/alternatives |
| SF-05 Execution Overview | proposed/authorized/queued/running, activity, unknown progress, partial output/evidence, cancel |
| SF-06 Input, Failure and Recovery | requested input, failed/retry/revise/cancel/escalate, preserved state |
| SF-07 Artifact, Evidence and Review | artifact/evidence/limits/freshness, accept/revise/reject |
| SF-08 Project Memory and Return | summary, changes, pending/blocked, decision/evidence/history, resume |

Required surfaces are families, not eight fixed screens. Loading, empty, error, partial, awaiting input, permission denied, stale evidence, revision requested, cancelled and recovery are state variants/panels/overlays/inline conditions rather than page multiplication.

Optional future concepts: contextual relationship list and activity history inside SF-08. Global search and graph are excluded from interactive scope. Complete admin, billing, Agent builder, Skill marketplace, advanced collaboration, tenancy, production settings, full Design System and native mobile remain excluded.

## Journey coverage

All six Stage 1 journeys are non-removable. J1–J5 require interactive task paths; J6 begins from a separately seeded return state and is interactive through resume. Repeated setup/background may be summarized, but no authority, failure/recovery, evidence review or return transition may be summarized away.

## Visual Direction boundary

Future Stage 2 may use **neutral structural treatment only**: sufficient hierarchy, focus/state differentiation and realistic density, without brand direction, copied reference, visual alternatives, tokens or Design System. A single candidate visual direction or two-direction preference test is out because PQs target comprehension/authority/state, not aesthetic positioning.

## Proposal conclusion

The proposal is coherent at scope/fidelity level but does not authorize creation. Readiness depends on governance, participant/privacy, specialist, budget, entry and invalidation conditions in E28.
