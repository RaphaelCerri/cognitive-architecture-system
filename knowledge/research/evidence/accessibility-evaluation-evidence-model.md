---
schema_version: 0.1.0-experimental
document_role: research_evaluation_model
title: Accessibility Evaluation and Evidence Model
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0009, ARP-0007]
language: pt-BR
---

# Accessibility Evaluation and Evidence Model

## Escopo e princípio

**[Decisão]** Comparar automated/manual/AT/user evaluation, evidence, severity, exceptions e regression. Não executa audit/tool, não cria test matrix/schema/gate e não produz conformance claim.

```text
No detected violation != Accessible experience
Test != Evidence package != Conformance claim != Certification
```

W3C WAI afirma que nenhuma ferramenta isolada determina conformance; knowledgeable human evaluation é necessária. User participation complementa standards evaluation e uma pessoa não representa toda disability population.

## Evaluation layers

| Layer | Pode produzir | Não prova isoladamente |
|---|---|---|
| requirement/design review | missing requirement, visual/content/flow risk | implementation behavior |
| static/lint analysis | detectable source/markup pattern | rendered/accessibility-tree/task outcome |
| DOM/rule automation | rule violation/pass in rendered state | all states, meaningful names, usability, AT compatibility |
| component/integration automation | regression of specified behavior | contextual composition and human comprehension |
| manual expert review | contextual semantics, keyboard, focus, content, modes | all users/platforms or legal conformance |
| assistive-technology test | behavior in named AT/browser/platform/version | compatibility outside matrix or overall usability |
| disabled-user participation | lived/task evidence for participants/context | universal representation or standards conformance |
| implementation inspection | causal/technical evidence | complete user experience |
| production feedback | real barriers and recurrence | absence of reports means absence of barriers |

## Automated testing

Categories: static analysis/lint; rule-engine/browser audit; DOM/accessibility-tree inspection; contrast calculation; component and end-to-end assertions; snapshot/state checks.

For every automated rule/result preserve:

- requirement/rule/version and implementation version;
- page/component/state/content/viewport/theme/language scope;
- browser/platform and relevant configuration;
- selector/node/evidence and expected/actual;
- confidence, false-positive/negative risk and manual follow-up;
- run date, owner and regression linkage.

Automation is strong for repeatable machine-determinable conditions and regression breadth. It is weak where human judgment, context, complete tasks, quality of alternatives, reading/focus intent, AT interoperability or cognitive load matter. Score aggregation can hide one task-blocking issue among many passes.

## Manual expert testing

Candidate protocols include:

- semantic structure/accessibility-tree and content inspection;
- keyboard-only complete task, focus order/visibility/traps/restoration;
- screen reader by supported browser/AT/version;
- zoom, text resize/reflow, user styles, forced/high contrast;
- reduced motion, pause/stop, flash and timing;
- voice control, switch access and external mobile keyboard when applicable;
- mobile screen readers/gestures/orientation/scaling;
- cognitive walkthrough for clarity, predictability, memory, errors/recovery;
- documents/media/data visualization and localization review.

Record protocol, evaluator competence, environment, preconditions/data, task/steps, expected/actual, reproduction artifacts, severity rationale, limitations and retest.

## User participation

Participation can occur in discovery, co-design, prototypes, implemented tasks, longitudinal feedback and remediation. Requirements:

- recruit for relevant access needs/contexts, not diagnosis tokenism;
- accessible recruitment/materials/session tools;
- consent, privacy, safety, compensation and accommodations;
- multiple participation modes and support persons where chosen;
- avoid exposing unnecessary disability/AT telemetry;
- distinguish observation, participant interpretation and team inference;
- report sample/context/representation limits and research fatigue;
- combine with standards and expert evaluation.

One participant finding is real evidence for that experience, not population prevalence or certification.

## Candidate evaluation matrix dimensions

```text
Requirement × Critical Task/State × Platform/Browser/AT
× Input Method × Viewport/Scale × Language/Script
× Theme/Mode × Test Type × Expected Behavior
→ Result/Evidence/Residual Risk
```

Select combinations by user evidence, product analytics/context, platform support, criticality, change impact and risk—not exhaustive Cartesian multiplication. Declare untested combinations as unknown.

## Evidence record quality

Candidate evidence metadata:

- requirement/source/version and test method/protocol version;
- product/build/component/content version;
- environment: OS/platform/browser/AT/input/viewport/theme/language;
- task/state/data/preconditions and expected behavior;
- result, observed barrier, reproduction and artifacts;
- evaluator/tool/version/date and review independence;
- coverage, exclusions, uncertainty and false-positive/negative risk;
- linked issue/fix/retest, expiry/freshness and residual risk.

Evidence is fit-for-claim only within its scope. Freshness expires through code/content/design/dependency/browser/AT/platform/language/requirement changes.

## Conformance boundary

WCAG conformance is scoped to full pages, complete processes, supported technologies and conformance requirements. WCAG-EM is a methodology for evaluating websites, not a universal product certification. Section 508/EN/EAA have their own scope and legal context. This model emits findings/evidence candidates only—never a conformance report.

## Severity and prioritization

Candidate dimensions:

- blocked/degraded task and affected capability;
- user harm, safety, privacy and dignity;
- frequency/reach and criticality;
- workaround availability, quality and burden;
- legal/normative relevance and confidence;
- recurrence/system amplification;
- reversibility and remediation complexity;
- evidence quality and affected states/platforms.

Do not sum violation counts into universal score. A single login blocker can outrank many cosmetic/redundant findings. Population size cannot erase severe exclusion of fewer users.

Candidate dispositions: release-blocking; urgent remediation; scheduled remediation with mitigation; evidence needed; accepted temporary exception; not applicable/false positive with rationale. No thresholds are approved.

## Exceptions and residual risk

Exception record candidate:

```text
Requirement; Barrier; Affected Users/Tasks; Reason;
Alternatives Considered; Mitigation; Evidence; Owner;
Independent Approval; Expiration; Residual Risk; Remediation Plan
```

Technical limitation, third-party dependency, legacy constraint or disproportionate-burden claim must be evidenced and periodically revisited. Implementer should not self-approve material deviation. Alternative channel does not automatically provide equivalent access and may introduce privacy/cost/delay.

## Regression and debt

Sources: component/token/content/flow changes; framework/dependency/browser/AT/platform changes; localization; new state; stale test; fork; exception; generated document; model/tool behavior.

Future controls candidates:

- requirement-linked regression tests for machine-determinable behavior;
- risk-triggered manual/AT retest and critical-flow review;
- evidence expiry on affected change/version;
- component consumer inventory and change propagation;
- exception/debt owner, age, remediation and release visibility;
- production barrier intake, triage and linkage;
- periodic representative review without treating cadence as proof.

## Release gates proportional to risk

| Risk profile | Candidate evidence, not approved gate |
|---|---|
| low-risk/content change | content/semantic review + applicable automation |
| shared component change | contract, keyboard/focus/state/content + supported AT/modes |
| critical flow/auth/payment | complete-flow expert/AT tests, security/accessibility review, exception check |
| new platform/interaction | user-needs evidence, platform/AT/manual evaluation and direct user participation |
| document/media pipeline | source/generation/output semantics and representative output validation |
| AI/agent consequential action | streaming/state/keyboard/approval/cancel/recovery and human review |

Simple and critical work should not have identical ceremony. Criticality, novelty, scope and uncertainty drive evidence.

## Governance

Candidate roles:

- owner maintains requirements/evidence/debt;
- accessibility lead defines strategy and specialist triggers;
- designer/content/developer produce contract-conformant work;
- QA/reviewer independently evaluates within competence;
- product owner prioritizes/remediates and owns user outcome;
- security/privacy/legal review tensions/applicability;
- approver accepts scoped release/exception risk within authority;
- user researcher ensures ethical participation;
- operations/support closes production feedback loop.

Separation of duties grows with consequence. Training/competence and test environment maintenance are governance responsibilities, not individual heroics.

## Metrics and limits

Candidate signals: task-blocking findings; severity distribution; requirement/test coverage; critical-flow coverage; remediation time; regression/recurrence; evidence freshness; component/consumer coverage; user-reported barriers; exception age; reopen rate.

Misleading metrics: raw violation count, automated score, “pages passed”, issue closure without retest, number of trained staff, component claim coverage. Metrics need denominator, scope and counter-metrics for user outcome.

## AI-native evaluation cases

- streaming rate/chunk announcements, pause and navigation;
- tool execution states, permission, source/provenance, cancel and takeover;
- plan/action keyboard review and focus stability;
- long generated content structure, links/citations and alternatives;
- uncertainty/status independent of color;
- multi-agent identity/state/order;
- generated files/documents and multimodal alternatives;
- model update regression and content variability.

Deterministic test fixtures can test contracts; they do not establish all generated outputs are accessible.

## Anti-patterns

Automation as certification; one browser/AT/desktop/English state; screen-reader test without keyboard/content; user test replacing standards; standards test replacing users; severity by count; inaccessible test protocol; stale evidence reused after change; issue closed without retest; exception without expiry; “not reported” as pass; overlay as universal remediation; high score ending review.

## Recommendations e open questions

Recommendations: triangulate evidence; preserve environment/version; test complete critical tasks; expose unknown coverage; link findings to requirements/releases; expire evidence on material change; prioritize harm/task rather than count; include users ethically and proportionally.

Open: supported matrix; evidence retention/expiry; severity/approval thresholds; critical-flow definition; production monitoring boundaries; acceptable sampling; evaluator competence; AT/version policy; AI variability testing; legal-conformance handoff.

## Fontes e proveniência

Acesso em 2026-07-22:

- WAI Evaluating Accessibility: https://www.w3.org/WAI/test-evaluate/
- WAI Involving Users: https://www.w3.org/WAI/test-evaluate/involving-users/
- WAI Evaluation Tools disclaimer: https://www.w3.org/WAI/test-evaluate/tools/list/
- WCAG-EM: https://www.w3.org/TR/WCAG-EM/
- W3C ACT Rules: https://www.w3.org/WAI/standards-guidelines/act/rules/
- Section 508 ICT Testing Baseline Portfolio: https://www.section508.gov/test/ict-testing-baseline-portfolio/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WCAG2ICT: https://www.w3.org/TR/wcag2ict-22/

Limites: no test was run; coverage, severity levels, gates, matrix and evidence fields remain candidates.
