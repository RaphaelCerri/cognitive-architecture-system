---
schema_version: 0.1.0-experimental
document_role: research_decision_framework
title: Reference Translation and Decision Framework
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0009]
language: pt-BR
---

# Reference Translation and Decision Framework

## Status

**[Decisão]** Este framework organiza inventory, analysis, conflict, adaptation e traceability; não é schema, workflow engine, prompt, design direction generator ou approval automation.

## Reference lifecycle candidate

```text
Intake → Purpose/Context → Provenance/Risk Triage → Observation
       → Inference/Alternatives/Confidence → Project Relevance
       → Conflict Checks → Candidate Operation
       → Recommendation → Human/Governed Decision → Validation/Expiry
```

**[Hipótese]** Stages podem ser combinados em casos simples; consequential references retain explicit evidence and decision record.

## 1. Reference Inventory candidate

| Campo | Purpose | Discipline |
|---|---|---|
| Reference ID | distinguish source/variant | local handle; not canonical type |
| Source/owner/author | attribution and authority | `unknown` if not verified |
| URL or file | retrieval pointer | do not fetch/execute implicitly |
| Collected/provided date | custody/freshness | distinguish source publication date |
| Type and platform | screenshot, moodboard, logo etc. | multiple values possible |
| Purpose/intent | inspire, compare, diagnose, migrate, avoid | user-supplied claim, not observed fact |
| Positive/negative/mixed | desired relationship | presence does not mean approval |
| Relevant areas | layout/type/color/content/etc. | bound analysis scope |
| Known/unknown context | audience/task/state/version/viewport | expose gaps |
| Rights/license notes | owned/licensed/third-party/unknown | not legal determination |
| Provenance signals | provider, metadata/C2PA if checked later | signal, not truth verdict |
| Sensitive/security notes | PII, credentials, confidential, untrusted content | triage/escalation |
| Status | active, stale, superseded, rejected, restricted | candidate vocabulary only |

No schema/cardinality is approved.

## 2. Purpose clarification

Adaptive questions:

- what exactly matters: layout, content, type, color, brand, behavior or feeling?
- preserve, adapt, combine, compare, diagnose or avoid?
- own product, competitor, platform convention or unknown source?
- same audience/task/platform/state/time period?
- what must not be reproduced?
- which current identity/assets/requirements are authoritative?
- are rights and accessibility constraints known?

**[Heurística]** If stakeholder says “make it like this”, decompose desired properties and unacceptable similarity before recommendation. Do not implement questionnaire.

## 3. Analysis layers

| Layer | Output candidate | Cannot silently become |
|---|---|---|
| Observation | visible evidence with region/source | intent, requirement or quality verdict |
| Inference | possible explanation + alternatives/confidence | fact |
| Interpretation | contextual synthesis | authorized decision |
| Preference | stakeholder desired/avoided aspect | user need/norm |
| Recommendation | proposed treatment + trade-offs | approval |
| Decision | accepted/rejected/deferred operation | universal rule |

## 4. Project relevance

**[Hipótese]** Scoreless relevance assessment asks:

1. Which user need/task/requirement or brand constraint is affected?
2. Is context comparable or merely visually similar?
3. Does the element solve a real problem or express only taste?
4. What accessibility/security/performance/maintenance/IP risks arise?
5. What evidence would falsify the interpretation?
6. Who has authority to accept the consequence?

Result candidates: `relevant`, `conditionally relevant`, `context mismatch`, `insufficient evidence`, `prohibited/restricted`, `not relevant`. These are hypotheses, not engine states.

## 5. Intent extraction record

For an inferred quality — trust, speed, calm, technicality, exclusivity etc. — record:

| Element | Example form |
|---|---|
| Observed signals | contrast, density, imagery, wording, spacing |
| Candidate intent | “may seek institutional authority” |
| Alternative explanations | platform convention, content shortage, campaign style |
| Cultural/audience caveat | association not universal |
| Compatibility | fit/conflict with project goals/brand |
| Risk | exclusion, confusion, dark pattern, similarity |
| Confidence/validation | ordinal level and research/test |

## 6. Reference comparison

**[Heurística]** Compare on context before appearance. A matrix may use rows for reference and columns for purpose, platform, audience/task, observed patterns, distinctive assets, intent hypotheses, accessibility/deceptive/IP risks, freshness and confidence.

Findings:

- `common`: observed across comparable references;
- `repeated preference`: stakeholder-selected, not universal evidence;
- `unique/distinctive`: potentially differentiating or protected;
- `conflicting`: cannot coexist without decision;
- `incomparable`: context difference defeats direct conclusion;
- `missing`: needed state/viewport/source absent.

## 7. Conflict resolution

| Conflict | Required treatment candidate |
|---|---|
| Reference vs requirement/Policy | requirement/Policy prevails; adapt/reject reference |
| Preference vs accessibility | preserve intent through accessible alternative or reject |
| Competitor similarity vs differentiation | extract principle, change expression; legal/brand review |
| Mobile simplicity vs desktop density | preserve hierarchy principle, redesign information expression |
| Multiple visual languages | separate roles, identify shared principles or choose; no automatic fusion |
| Old reference vs current platform/brand | verify freshness and migration purpose |
| Polished design vs deceptive behavior | reject harmful mechanism; retain unrelated safe principles only |
| Performance/maintenance mismatch | reduce/adapt/defer visual treatment |

Protocol: identify → classify evidence/authority → explain impact → propose operations → name residual risk → obtain decision → validate.

## 8. Adaptation operations

- **[Hipótese] Preserve:** owned/authorized element required for continuity; retain with applicability checks.
- **[Hipótese] Adapt:** retain principle/function, alter visual expression for context/accessibility/originality.
- **[Hipótese] Combine:** use compatible principles in distinct roles with coherence rationale.
- **[Hipótese] Reinterpret:** pursue inferred intent through an original expression.
- **[Hipótese] Reject:** conflict, harm, rights, deception or poor fit outweighs value.
- **[Hipótese] Defer:** decision not needed or evidence insufficient.
- **[Hipótese] Validate:** test a material hypothesis before decision.

“Copy” is not a candidate operation. Reconstruction is restricted to owned/authorized interface with explicit purpose, provenance and review.

## 9. Constraint gates — conceptual, not automated

Before recommendation, consider:

1. requirement/user need/task fit;
2. accessibility risks and evidence gaps;
3. security/privacy/deceptive-design risks;
4. brand/identity and confusion risk;
5. copyright/license/design-right uncertainty;
6. platform/responsive/content fit;
7. performance/maintenance constraints;
8. freshness/provenance/trust tier.

No gate certifies compliance or replaces specialist authority.

## 10. Reference-to-decision traceability

```text
R-? Reference
 └─ O-? Observation
     └─ I-? Inference/Interpretation [confidence]
         └─ Project need/requirement relevance
             └─ Adaptation rule / Recommendation
                 └─ Decision [owner/date/scope]
                     └─ Future requirement/test/evidence
```

Candidate integrity questions:

- decision without attributable source/rationale?
- reference used outside declared purpose?
- observation contains hidden-property assertion?
- preference masquerades as user need?
- adopted element lacks accessibility/originality check?
- rejected alternative/risk missing?
- superseded/stale reference still affects current decision?

Relations and identifiers are illustrative, not schema.

## 11. Decision record candidate

| Item | Content |
|---|---|
| Decision | preserve/adapt/combine/reinterpret/reject/defer/validate |
| Scope | which product/flow/direction concern |
| Authority | decision owner/reviewers |
| Sources | references, requirements, external evidence |
| Rationale | why this operation fits |
| Rejected alternatives | and why |
| Accessibility/security/IP | reviews, gaps and escalation |
| Confidence | evidence strength, not certainty score |
| Consequences | intended and residual risks |
| Validation/expiry | test/event/date that revisits decision |

Could be a section of existing artifact; no new Knowledge Type.

## 12. Visual DNA and direction synthesis boundary

**[Hipótese]** Visual DNA aggregates only patterns that matter to a project decision. It cannot independently generate Design Direction. Future direction candidates must combine project requirements, brand/user context, content, IA/flows, references, accessibility, originality and platform constraints.

No direction is chosen/generated here. Future candidate set should enable comparison and human review, not stochastic variations presented as decisions.

## 13. Freshness, change and expiry

Triggers: source product redesign, brand update, platform convention change, new WCAG/policy applicability, license/ownership change, reference URL loss, evidence contradiction or project requirement change.

**[Heurística]** Preserve collected date and evaluated version. `Latest` is a time-sensitive claim requiring verification. Superseded references may remain for migration/history with that purpose explicit.

## 14. Proportional application

| Case | Minimum sufficient treatment candidate |
|---|---|
| one owned screenshot, low-risk inspiration | purpose + observations + adaptation/originality check |
| competitor/brand reference | full provenance, distinctive-elements and confusion review |
| many conflicting references | inventory + comparison + conflict decisions |
| legacy migration | versioned inventory + preserve/adapt/reject + continuity risks |
| authentication/payment/high-impact | security/phishing/deception/legal escalation |
| unknown external file | do not process/execute; security intake required in future |

These are **[Hipótese]**, not tiers or risk certificates.

## 15. Evaluation mapping

| Claim | Suitable future evidence | Unsuitable substitute |
|---|---|---|
| “users perceive it as calm” | perception study in target context | designer assertion/color rule |
| “hierarchy supports task” | usability/attention/content evidence | visual similarity |
| “accessible” | criteria-based implementation + manual/AT/user tests | screenshot review only |
| “original enough” | design/brand/legal review based on facts | numeric pixel-distance threshold |
| “responsive” | multi-viewport implementation testing | one desktop/mobile image |
| “safe from injection” | adversarial/system security evaluation | prompt wording/detector alone |

## Anti-patterns and stop conditions

Stop/escalate on unknown rights for intended reuse, confidential/credential/PII exposure, competitor login/payment cloning, suspicious embedded instructions/files, unresolved higher-authority conflict, or request for precise hidden behavior without evidence.

Avoid reference treated as requirement; preference as decision; observations rewritten to fit desired narrative; confidence score without calibration; compatibility inferred from aesthetics; copied pixels/assets; currentness assumed; and recommendation implemented before review.

## Preliminary disposition

**[Recomendação]** Use inventory and full traceability only when risk/complexity warrants; otherwise preserve a compact context-observation-inference-operation-decision record. Defer schema, automated confidence, reference engine and design-direction generation pending empirical cases and Council decision.
