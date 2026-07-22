---
schema_version: 0.1.0-experimental
id: ARP-0009-E14
kind: knowledge
knowledge_type: research_evidence
title: Requirement, Evaluation and Evidence Traceability Framework
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0008
---

# Requirement, Evaluation and Evidence Traceability Framework

## Natureza

Modelo conceitual candidato; não é schema, database, test management system, gate ou canonical artifact. Preserva bidirectional traceability e uncertainty sem exigir ceremony uniforme.

```text
Intent -> Need -> Requirement -> Risk / Quality Attribute
 -> Acceptance Claim -> Scenario -> Method -> Result / Observation
 -> Evidence Item -> Finding -> Remediation / Exception / Decision
 -> Release Scope -> Production Revalidation -> Requirement Feedback
```

Cada arrow candidate precisa rationale/source, owner e scope. Many-to-many é esperado: um requirement pode precisar vários methods; uma evidence item pode informar várias claims, mas scope não deve ser expandido silenciosamente.

## Concept map

| Element | Candidate responsibility | Integrity rule |
|---|---|---|
| Intent/Need | desired outcome/problem/context | não inferir requirement sem authority |
| Requirement | testable/assessable obligation or need | source, owner, applicability/version |
| Risk/Quality Attribute | potential harm/quality concern | não converter preference em gate |
| Acceptance Claim | statement whose truth supports decision | claim, population/environment/time explicit |
| Quality Scenario | context/stimulus/expected response/measure/recovery | not test implementation |
| Evaluation Method | procedure class fit for claim | capabilities/limitations declared |
| Result/Observation | direct output of method | no interpretation beyond method |
| Evidence Item | result + provenance/context/limitations | immutable observation, correction traceable |
| Finding | interpreted significance against claim | confidence/alternatives/reviewer |
| Defect | confirmed requirement non-fulfillment | affected version/scope/owner |
| Risk | uncertainty and potential impact | may exist without defect |
| Remediation | planned change/root-cause response | validation and regression prevention |
| Exception | temporary authorized deviation | independent authority/expiry/residual risk |
| Approval | authorized decision for defined scope | not certification or eternal validity |
| Production Observation | field signal under real conditions | sampling/confounding/privacy limits |

## Traceability views

1. **Requirement coverage:** requirement -> scenarios/methods/evidence/findings; reveals unassessed claims.
2. **Method justification:** method/test -> requirement/risk/claim; reveals orphan tests and ritual automation.
3. **Evidence sufficiency:** decision -> claims -> evidence portfolio/limitations/unknowns.
4. **Finding lifecycle:** finding -> affected requirements/users/releases -> owner/remediation/exception/revalidation.
5. **Change impact:** code/content/config/dependency/browser/AT/model/infrastructure change -> invalidated claims/evidence/approvals.
6. **Production feedback:** observation/incident/report -> requirement/risk/architecture/test updates and decisions.

## Evidence item fields candidates

```text
identity and claim
requirement / risk / decision relation
epistemic class
method and procedure version
environment / build / release / configuration
input / population / sample / data
expected and actual result
evaluator / automation identity
timestamp and artifact/source provenance
coverage / applicability / assumptions
limitations / false-positive-negative risk
confidence / conflicting evidence / unknowns
freshness / expiry / invalidation triggers
affected decision and review authority
```

Do not collapse to `pass: true`. Automated, manual, user and production results remain typed; conversion to finding/decision is explicit.

## Quality scenario template candidate

- Context/environment and product/release state;
- actor/user/access need and precondition;
- stimulus/task/event/failure;
- expected response and forbidden outcome;
- quality attribute/requirement;
- measure/distribution/threshold where justified;
- recovery/rollback expectation;
- candidate methods and limitations;
- criticality/reversibility and gate relation;
- owner and revalidation trigger.

For usability, measure may include completion, assistance, errors, time and comprehension within context; ISO 9241-11 does not make any single metric universal. For security/accessibility, a critical qualitative failure can dominate aggregate metrics.

## Task and flow coverage model

Coverage set candidate: entry/preconditions, happy/alternate/exception/recovery, role/permission, first/repeat use, empty/loading/partial/degraded/offline/stale/conflict, cancel/undo/destructive, session expiry, async/reconnect, multi-device/locale/accessibility modes. Coverage reports what was examined and omitted; no universal percentage.

Trace task outcome across content, navigation, component/pattern, frontend/backend/integration, operation and support. A defect may span boundaries; ownership cannot be assigned solely to visible component.

## Finding and severity

Finding fields candidates: evidence references, expected/observed, epistemic class, affected task/users/environments/releases, impact/harm, frequency/exposure, workaround, recurrence, reversibility, security/legal/accessibility relevance, confidence/conflicts, root-cause hypothesis, owner/status.

Severity decision considers blocked critical task, harm/data/authorization, breadth and affected access needs, frequency, detectability, workaround burden, recovery and uncertainty. Count is not severity. Unknown impact may demand precaution rather than low rating.

Finding may become:

- confirmed defect after requirement/applicability review;
- risk when harm remains uncertain/future;
- recommendation/heuristic when no obligation is violated;
- false positive/not applicable with rationale;
- research question when evidence insufficient;
- exception request only after alternatives/remediation assessment.

## Remediation and regression prevention

Remediation candidate: root cause, affected boundaries/artifacts, chosen action/alternatives, owner/priority/target, dependency/release/change impact, validation method, regression prevention, migration/rollback and linked evidence. Closing requires scoped revalidation; code change alone is not closure.

Root-cause classes may include missing/ambiguous requirement, architecture boundary, Design System contract, implementation, content/localization, data/API, dependency/platform, process/evidence gap or production configuration. Avoid always fixing the symptom at UI layer.

## Exception model

```text
requirement and finding
affected users/tasks/data/releases
risk and uncertainty
reason and alternatives attempted
mitigation/compensating control
support/user communication when relevant
evidence and independent reviewer
owner and authority
start/expiration/revalidation trigger
residual risk and remediation/exit plan
```

Exception does not alter requirement, erase finding, certify safety or propagate to other versions. Expired/condition-changed exception blocks reliance until review.

## Evidence portfolio sufficiency

Sufficiency is claim-relative:

- syntax/static claim may use deterministic static evidence;
- component behavior needs runtime/interaction and consumer-context evidence;
- complete task needs integration/task/user-context evidence;
- accessibility conformance needs applicable standards methodology, not user report alone;
- usability claim needs representative context/user evidence, not standards check alone;
- security claim needs threat/verification portfolio and residual risk;
- performance claim distinguishes lab/field/task perception;
- production reliability needs observation across releases/time, not staging alone;
- AI behavior needs context/model/version/data and ongoing monitoring.

No rigid hierarchy: a production metric can be strong for frequency yet weak for cause or excluded users; expert review strong for pattern diagnosis yet weak for population prevalence.

## Freshness and invalidation

Evidence validity expression candidate: exact release/build/config; dependency/framework/browser/OS/device/AT/model/data/content/locale; environment; time window; method version; known assumptions. Triggers:

- relevant code, content, token/component, data contract or configuration change;
- dependency/browser/AT/platform/infrastructure/model update;
- feature flag/tenant/locale/support matrix change;
- new incident/finding/conflicting evidence;
- expired sample/window/exception or changed requirement;
- evaluator/tool/rule version change affecting outcome.

Revalidation may be focused through change-impact evidence, but must record what was not rerun. “Unchanged code” does not preserve evidence if environment/data changed.

## Approval and decision trace

Decision record candidate references scope/release, claims, evidence portfolio, blockers/findings, exceptions, limitations/unknowns, dissent, authority, date/expiry and rollback/reopen conditions. Approval authorizes specified action; it does not assert universal quality, audit independence or certification.

Hard gates remain outside aggregate trade-off. Noncritical dimensions may use narrative/sensitivity analysis if authorized; raw evidence remains accessible.

## Production revalidation loop

```text
release identity + pre-release evidence
 -> controlled exposure
 -> privacy-bounded task/error/performance/support/security signals
 -> compare claims and detect regressions/unknowns
 -> finding/incident/feedback
 -> remediate/rollback/except/learn
 -> update requirements, architecture, Design System and evaluation portfolio
```

Production cannot ethically observe all users/conditions; support/user research and accessibility reporting complement telemetry. Sampling, consent, missingness and survivorship bias are recorded.

## Integrity checks candidates

- no requirement without disposition/evaluation rationale;
- no test/method without claim/risk;
- no evidence without version/environment/date/provenance;
- no finding without evidence/confidence/owner;
- no closure without validation;
- no exception without independent authority/expiry/plan;
- no approval without scope/coverage/limitations;
- no release reuse after invalidation without revalidation;
- no metric/score hides critical failure;
- no production signal exceeds privacy purpose.

These are hypotheses for governance, not implemented gates.

## Open questions

Canonical identity/cardinality, artifact authority, minimum fields, confidence/severity vocabulary, evidence retention/access, correction policy, exception approver, change-impact mechanism, privacy constraints and relationship to Project Memory/Ontology remain Council decisions. No schema or type is proposed.
