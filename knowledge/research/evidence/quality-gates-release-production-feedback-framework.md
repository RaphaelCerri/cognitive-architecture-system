---
schema_version: 0.1.0-experimental
id: ARP-0009-E16
kind: knowledge
knowledge_type: research_evidence
title: Quality Gates, Release Evidence and Production Feedback Framework
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0007
  - type: related_to
    target: ARP-0008
---

# Quality Gates, Release Evidence and Production Feedback Framework

## Natureza

Governance framework candidato. Não implementa CI, monitoring, analytics, release process, score, audit ou approval. Gate é condition for decision at a scope/time; evidence package informs authority; production feedback reopens claims. Nenhum nome é tipo canônico.

```text
readiness -> design/architecture -> implementation/test -> release
 -> controlled production observation -> feedback/regression
 -> remediation/rollback/exception -> revalidation
```

## Gate integrity

Every gate candidate records purpose/scope/release, entry claims, required evidence types, non-compensable blockers, allowed unknowns, decision authority, separation/independence, exception rule, validity/expiry and outcomes (`proceed`, `proceed with conditions`, `hold`, `return`, `unknown`). Gate does not certify beyond scope.

Hard blockers candidates: credible severe security/authorization/data-integrity risk; critical task impossible; applicable accessibility failure causing exclusion; unrecoverable/irreversible harm; missing authoritative requirement/owner; invalid/expired critical evidence; unsafe rollback/migration; legal/normative prohibition confirmed by authority. Exact gates remain Council/domain decisions.

## Candidate lifecycle gates

| Gate | Core question | Evidence candidate | Typical blockers |
|---|---|---|---|
| Discovery readiness | problem/users/context/risks known enough? | needs, unknowns, research basis | solution/testing before problem |
| Design readiness | complete tasks/states/content/access needs represented? | flows, states, intent, reviews | critical missing/recovery absent |
| Architecture readiness | authority/boundaries/qualities/risks decidable? | decisions, scenarios, threat/data maps | client authority, unknown critical contract |
| Implementation readiness | contracts/acceptance/evaluation strategy usable? | criteria, mappings, profile | tests without requirements |
| Test readiness | build/environment/data/oracles/evidence integrity ready? | version, fixtures, methods | nonrepresentative/unstable environment |
| Release readiness | critical claims sufficiently supported? | release package, blockers/exceptions/rollback | blocker, stale evidence, unsafe rollout |
| Production review | real outcomes consistent and risks controlled? | signals, reports, incidents, drift | severe regression/harm/privacy breach |

Not every project needs every ceremony; gates may be combined while preserving questions/authority.

## Release Evidence Package candidate

- release/build/config/dependency/model identity and change summary;
- intended scope/users/environments/flags/tenants/locales;
- requirements/critical tasks/quality scenario coverage;
- functional/flow/state/recovery results;
- accessibility evidence and supported matrix/limitations;
- security/privacy findings, threat changes and residual risks;
- performance lab/field availability and budgets;
- content/visual/responsive/i18n review;
- architecture/dependency/contract/migration conformance;
- AI-generated/AI-native provenance, version and human-control evidence;
- unresolved findings, unknowns, exceptions/expiry;
- deployment/cache/data migration/rollback/recovery readiness;
- evaluator/reviewer/authority/date and evidence freshness;
- planned production signals, privacy controls and reopen triggers.

Package may reference existing artifacts rather than duplicate. Absence is explicit `unknown/not applicable/not yet available` with rationale.

## Release decision

Decision candidate states: scope and release; claims being accepted; evidence/limitations; blocker disposition; conditions/staged exposure; exceptions; monitoring/review window; rollback/stop criteria; authority/dissent; expiry/reopen triggers. Approval is not audit/certification and does not make pre-release evidence permanent.

Staged/canary/feature-flag release may reduce exposure but adds configuration/version/segment/evidence complexity. Flag must not bypass authorization/accessibility or hide known harm. Rollback must account for data/schema/cache/client compatibility and user communication—not only artifact redeploy.

## Exceptions

Exception request is evaluated outside score and includes requirement/finding, affected users/tasks/data, severity/confidence, alternatives, mitigation, owner, independent approval, exact releases/conditions, expiry/revalidation, residual risk and remediation/exit. No recursive exception to exception authority. Expired exception returns gate to unresolved.

Temporary limitation communicated to users may mitigate but rarely eliminates exclusion/harm. Repeated exception signals root cause/design-system/architecture/governance debt.

## Production evidence model

| Source | Potential claim | Limits/risks |
|---|---|---|
| client/server errors | failure frequency/release correlation | missing/suppressed/context/PII |
| task events | completion/path/drop-off | instrumentation definition, bot/duplicate/assistance |
| performance telemetry | field distribution/segments | privacy, support bias, cause unknown |
| support tickets | reported barriers/severity narrative | self-selection, categorization, underreporting |
| accessibility channel | specific access barriers | reach/discoverability/response process |
| security events | attacks/control failures | detection gaps/sensitive data |
| user feedback/research | experience/context/reasons | sample/representation and observer effects |
| analytics/experiments | association/change under design | consent, power, confounding/novelty/causality |
| incident/operations | failure/recovery/system interaction | rare-event learning and hindsight bias |
| dependency/browser signals | environment drift/regressions | incomplete ecosystem visibility |

Every signal records purpose, taxonomy/schema version, release/config/flag/segment, collection/sampling, data quality/missingness, retention/access/privacy, interpretation owner and claim limits. Production monitoring without privacy/governance is itself a risk.

## Monitoring and alerting candidates

Monitor actionable quality scenarios, not everything: critical task failure, authorization/security event, client fatal/error boundary, performance degradation, async job stuck/failure, inaccessible/report channel, dependency/browser regression, exception expiry and release correlation. Alerts need owner, threshold rationale, false +/- handling, response/playbook, severity and de-duplication.

OpenTelemetry defines traces/metrics/logs signals; instrumentation is only mechanism. Signal presence does not ensure observability, correctness or user outcome. Google SRE guidance on monitoring/SLO/error budgets is institutional example, not mandated local policy.

## Production review cadence and freshness

Triggers: new release/config/flag/tenant/locale/model; critical dependency/browser/AT/infrastructure update; incident/support/accessibility/security report; performance/task distribution shift; expired evidence/exception; changed requirement/design/architecture. Cadence proportional to risk and signal latency.

Pre-release evidence may remain valid for unchanged deterministic claims while production adds context; production evidence may invalidate earlier assumptions. Record focused versus full revalidation and omitted scope.

## Feedback integration

```text
signal/report/research/incident
 -> triage identity, release and safety
 -> finding + confidence/affected scope
 -> immediate containment/support if needed
 -> root cause across requirement/design/system/architecture/implementation/operation
 -> remediate/rollback/except/research
 -> update artifacts/tests/risks
 -> revalidate and communicate
```

Feedback sources include users, support, accessibility, security, operations, analytics, research, product and incidents. Deduplicate related reports without losing individual impact. Close loop with reporter where consent/process allow.

## Regression architecture

Regression types: functional/task, visual, accessibility, performance, security/privacy, content/i18n, architecture/drift, dependency/platform, data/contract and operational/recovery. Register baseline/claim, first/affected release, detection source, escape path, scope/impact, root cause, containment, fix/validation and prevention.

Regression prevention may update requirement, Design System primitive, architecture boundary, test portfolio, release check, dependency policy or production signal. Adding one narrow test is not always sufficient.

## Governance roles candidate

| Role | Candidate authority/responsibility |
|---|---|
| Product/Requirement owner | claim priority, outcome and acceptance intent |
| Experience/Content/Design | task/intent/content/visual findings |
| Engineering/Architecture | implementation/boundary/technical evidence |
| Test/Evaluation | method integrity, coverage and evidence provenance |
| Accessibility | applicable requirements/manual/AT/user evidence and blockers |
| Security/Privacy | threat/data/control findings and exceptions |
| User Research | ethical method/sample/interpretation limits |
| Operations/Reliability | deploy/rollback/monitor/incident evidence |
| Release authority | scoped proceed/hold/conditions decision |
| Independent reviewer/auditor | conflict-sensitive assurance when required |
| Council | candidate governance/artifact/exception authority decisions |

Creator/implementer may evaluate low-risk work, but higher criticality may require separation of duties. Independence is proportional, not universal ceremony.

## Findings and remediation workflow

Triage avoids first sorting only by tool/severity label. Confirm evidence/applicability, immediate harm/containment, affected tasks/users/data/releases, confidence/conflicts, owner/root-cause candidate and gate relation. Remediation validates expected claim and side effects, links regression prevention and reopens production observation.

Unresolved findings remain visible in release package. “Accepted risk” without authority/scope/expiry is invalid language.

## Metrics

Candidate metrics with denominators/segments: critical task outcome/error/recovery, blockers by affected task/user and age, traced requirements, evidence freshness, finding recurrence/reopen, remediation lead time, exception age/expiry, accessibility reports, performance distributions, release regressions, Design System/dependency drift and production escape rate.

Metrics are signals, vulnerable to gaming, missingness, survivorship and changing definitions. Never rank teams/users or average critical failures. Raw evidence and uncertainty remain accessible.

## Scorecard guardrails

No scorecard created. If Council later authorizes: purpose/claim/weights/thresholds/data quality and sensitivity transparent; incomparable dimensions separate; unknown not zero; blockers outside score; trend not cross-product ranking; evidence links and expiry; anti-gaming review. A high score cannot approve release.

## AI-native production evaluation

Track exact model/system prompt/tool/policy/config where permitted; task outcome and uncertainty; citations/provenance; generated artifact validity; action approvals/denials; interruption/cancel/retry/recovery; tool-call authorization; unsafe output/prompt injection; cost/latency; memory/context/tenant leakage; human takeover; incident and model drift.

NIST AI RMF/TEVV emphasizes context and portfolios of measures. Nondeterminism/test-oracle limits require distributions, adversarial/edge cases, human judgment and post-deployment monitoring; no single benchmark certifies the experience.

## Benchmark preparation only

Future internal benchmark candidate: “Tenho uma ideia”, onboarding, Project Memory/navigation/graph/research/proposals/decisions/Agents/Skills/executions/approvals/observability/evidence/references/accessibility/multi-agent/recovery. Future external benchmark candidate follows discovery -> PRD -> IA/flows/references/design/language/technology/frontend architecture -> implementation -> evaluation/evidence/remediation.

No case, data, protocol, prototype or run was created. Future benchmark requires separate authorization, privacy/ethics, exact version/environment, success/failure scenarios and no use as universal score.

## Open decisions

Gate names/count, release authority, blocking severity, assurance profile selection, evidence package identity, independence, exception authority, production metrics/retention, privacy/legal review, monitoring ownership, feedback artifact, benchmark protocol and relations to ARP-0007/ARP-0008 remain open.
