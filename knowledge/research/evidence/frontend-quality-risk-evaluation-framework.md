---
schema_version: 0.1.0-experimental
id: ARP-0009-E12
kind: knowledge
knowledge_type: research_evidence
title: Frontend Quality, Risk and Evaluation Framework
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

# Frontend Quality, Risk and Evaluation Framework

## Natureza e unit of evidence

Framework documental candidato; não é audit, test plan executável, score, conformance claim, security architecture ou release gate. Avaliação deve usar **quality scenarios**, não adjetivos:

```text
requirement / risk
 -> stimulus + environment + critical task/data
 -> expected response / threshold
 -> architecture responsibility and boundary
 -> method + versioned evidence
 -> limitation / residual risk
 -> owner + expiry / revalidation trigger
```

Evidence record candidate: claim/question, epistemic class, scope/build/release, environment/browser/OS/device/AT/network/data, method/tool/version/config, observed result, expected threshold, coverage/limitations, source/provenance, reviewer/date, conflicts, residual risk and expiry. `passes: true` sem scope é insuficiente.

## Quality model

| Dimension | Architecture question | Evidence families |
|---|---|---|
| requirement coverage | critical tasks/states/failures are realizable? | trace review, scenarios, user/task evaluation |
| cohesion/coupling | change stays with accountable owner? | dependency/change analysis, architecture review |
| boundary clarity | authority/state/data/effects are explicit? | maps, contracts, failure injection |
| accessibility | output remains perceivable/operable/understandable/robust? | automated + manual + AT + users |
| security/privacy | trusted boundaries and minimum data/control hold? | threat review, tests/scans, config/runtime evidence |
| performance | critical experience meets contextual budgets? | lab + field + resource/user timing |
| resilience | failures/degradation/recovery preserve outcome and truth? | chaos/fault scenarios, offline/reconnect/concurrency tests |
| testability | contracts/states can be verified deterministically? | portfolio health, flake/diagnostic evidence |
| observability | failures/outcomes can be explained safely? | signal/correlation/release review |
| operability | deploy/rollback/migrate/respond are controlled? | rehearsal, release and incident evidence |
| maintainability | change/dependency/deprecation cost is sustainable? | change lead time, graph/debt/migration evidence |
| portability/exit | canonical decisions survive adapter/platform change? | mapping/semantic-loss/migration exercise |

Não somar dimensões para gerar “architecture score”. Hard failure permanece hard failure.

## Accessibility architecture evaluation

Coverage candidates: native/ARIA semantics; keyboard/pointer/touch/voice/switch; focus across route/modal/async update; title/landmarks; loading/status/error announcements; zoom/reflow/text spacing; contrast/forced colors; reduced motion/data/transparency; localization/bidi; timeout/auth; offline/degraded states; component composition and generated/dynamic/streamed content.

Layer evidence:

- primitive/Design System: reusable behavior contract and supported matrix;
- product/feature: content, composition, task and recovery;
- routing/runtime: focus/title/history/loading/error behavior;
- data/backend: accessible error/status/media/document alternatives;
- release: regression across supported browser/OS/AT/mode;
- users: task evidence from relevant access needs.

WCAG 2.2 provides normative success criteria in its scope, including programmatic status messages. Architecture evaluation cannot assert conformance from component/tool evidence. Exceptions remain scoped, owned, expiring and independently reviewed.

## Security architecture evaluation

Threat surfaces: DOM XSS/unsafe HTML and AI/user/CMS content; CSRF; clickjacking; open redirect/tabnabbing; auth/session/token storage; client/server trust; object/tenant authorization; uploads/downloads/clipboard; third-party scripts/analytics/replay; source maps/logs/config; service workers/caches/offline storage; package/build/registry provenance; cross-origin messaging; external links and embedded content.

Boundary questions:

- Is permission enforced at every authoritative operation/object/tenant?
- Can untrusted content reach executable/HTML/URL/CSS sinks?
- Do CSP/Trusted Types fit the rendering/styling/runtime model? They are defense-in-depth mechanisms, not proof.
- Are secrets/sensitive data absent from bundle, URL, client logs and public source maps?
- Are cache, prefetch, offline and telemetry partitioned by user/tenant/privacy?
- Are CSRF/session/replay/idempotency semantics defined for mutations?
- Are dependency identity, provenance, advisories, install/build privileges and response ownership explicit?

Evidence candidates: threat model, architecture/config review, SAST/DAST/dependency signals, authorization/tenant negative tests, content/sink tests, headers/policies, build/SBOM/provenance, incident/patch evidence. Tool clean result is not absence of vulnerability. ARP-0007 retains security authority.

## Privacy evaluation

Map data purpose/classification/source, consent/legal basis where applicable, collection, client/server/storage/cache/URL/log/analytics flow, access, retention/deletion, sharing and incident impact. Special attention: auth/session identifiers, form values, search/filter URLs, errors, replay, precise device/browser fingerprints, location, tenant, AI prompts/outputs and accessibility preferences.

Data minimization applies to telemetry as well as product storage. Validate shared-device behavior, logout/tenant switch, local draft/offline deletion, cache partition, export/deletion and consent changes. Privacy Framework sources are guidance; legal applicability requires separate authority.

## Performance evaluation

Performance budget candidate is per critical scenario, not global bundle slogan:

- route/task, release/build and rendering mode;
- representative content/data and cache state;
- device/CPU/memory, viewport/input, browser and network;
- LCP/INP/CLS where applicable plus task-specific latency/progress;
- server/edge/cache timings, resources, JS/CSS/font/image cost;
- hydration/interaction readiness, long tasks, memory/battery;
- success/error/offline/reconnect and accessibility-mode effects.

Use lab for controlled diagnosis, field for real distributions, user/task evidence for perceived usefulness. W3C Performance/Resource/User/Server Timing define instrumentation mechanisms and privacy considerations; metrics do not choose architecture. Track percentiles/segments and release correlation, avoiding PII or fingerprinting expansion.

## Resilience and offline evaluation

Failure matrix candidates: no/slow/intermittent network; API partial/timeout/rate limit; stale cache; duplicate/reordered response; auth expiry/permission change; concurrent edit; quota/eviction; service-worker/update mismatch; third-party failure; unsupported browser feature; corrupt/local migration; job disconnect; deploy/cache incompatibility.

For each: truth shown to user, essential capability, containment, retry/cancel/undo, idempotency, draft/output preservation, conflict resolution, accessible communication, telemetry/support and rollback. “Offline capable” needs read/write/sync tiers and data-security model, not presence of a service worker.

## State and data correctness

Evaluate single ownership, legal transitions, initialization/reset, stale/expiry, serialization/versioning, tenant/user isolation, synchronization, cancellation, optimistic confirmation/rollback, conflict and recovery. Detect impossible boolean combinations, duplicated caches, client domain authority and URL/store divergence.

Contract evaluation separates syntax/schema, runtime validation, semantic/domain invariants, compatibility and user-safe errors. Exercise missing/null/additional fields, locale/timezone/money/unit/identifier, partial data, old/new client-server combinations and RFC 9457 disclosure boundaries.

## Errors, loading and long-running work

Error evidence covers classification, containment, actionable/localized message, safe disclosure, focus/announcement, retry/alternative/support, correlation and owner. Generic boundary may catch unexpected failures but cannot erase domain recovery.

Loading evidence covers initial/navigation/local/background/stream/queue, truthful known/unknown progress, stale/partial distinction, abort and no-motion/nonvisual modes. Avoid announcement storms and false percentage.

Long-running/AI jobs evaluate durable identity/status, reconnect, ordered/partial output, provenance/citations, pause/cancel/resume/retry, idempotency, action preview/approval, audit/cost and failure recovery. Streaming text must remain readable and controllable for assistive technology.

## Internationalization, content and responsive evaluation

I18n matrix candidates: language/script/region, bidi/mixed direction, plural/select, expansion, locale routing/fallback, date/calendar/timezone/number/currency, server/client consistency, font coverage and translated dynamic/errors/metadata. Pseudo-localization is diagnostic, not user evidence.

Content evaluation: structured/generated/user/AI content provenance, sanitize/render boundary, preview/draft/publish/expiry, alt/caption/transcript, localization, link/download safety and stale content. Never treat generated markup as trusted.

Responsive/platform evaluation uses content/container, zoom/reflow, viewport/orientation, safe area, virtual keyboard, pointer/hover/coarse input, touch target, foldable/ultrawide/embedded, print and preference media. Test critical tasks, not screenshot equivalence.

## Testing architecture

| Layer | Primary question | Boundary/limitation |
|---|---|---|
| static/type/lint | detectable contract/code issue? | types erased; no runtime/task proof |
| unit | local rule/transform/state transition correct? | integration/platform absent |
| component | isolated states/interaction/accessibility contract? | product composition absent |
| contract | producer/consumer versions compatible? | domain/UX outcome may remain wrong |
| integration | boundaries/effects/data collaborate? | full browser/production absent |
| browser E2E | critical journey in real user agent? | scripted scope, flake and AT/user gap |
| accessibility | WCAG/interaction/access-needs evidence? | automation incomplete; environment specific |
| visual | unintended rendered difference? | pixels do not prove behavior/accessibility |
| performance | budget/scenario regression? | lab not field; field not causality alone |
| security/privacy | threats/controls/data flows behave? | tools incomplete, review required |
| production | real outcome/failure/release signals? | consent/bias/confounding and late detection |

Portfolio is risk-based. Track determinism, flake, runtime, maintenance, diagnostic value, critical requirement coverage and environment drift—not raw test count. Workbench cases can document component states and evidence but do not prove integrated production.

## Observability and analytics quality

Minimum viable signals link release, route/feature/task, outcome/failure class, latency and correlation without sensitive payload. Evaluate missing/duplicate/out-of-order events, sampling, clock/context, schema/taxonomy version, consent, retention/access, alert actionability and incident reconstruction.

Browser OpenTelemetry JS instrumentation was officially described as experimental/mostly unspecified at access time; any future use must preserve exact status/version. Analytics funnels/experiments require data-quality checks and cannot establish causal explanation alone.

## Dependency, build and supply-chain evaluation

Dependency risks: unnecessary capability, transitive breadth, multiple versions, peer/plugin conflicts, install scripts, compromised owner/release, unsupported/deprecated package, license/tier/assets, browser/runtime mismatch, generated code, registry payload and no exit.

Build risks: environment-dependent output, secret leakage, non-reproducibility, unpinned generators, source maps, code splitting/cache mismatch, stale artifacts and preview exposure. Evidence candidates: exact tool/package/lock identities, build provenance/attestation, SBOM, clean/reproducible build where feasible, artifact analysis, policy/advisories and rollback rehearsal. None was executed here.

## Deployment, release and feature flags

Evaluate environment/config/secret parity, immutable identity, migrations/backward compatibility, cache/CDN invalidation, server/client version skew, staged rollout, rollback time/data implications, monitoring and incident ownership. Static/server/edge/serverless/container claims need contextual evidence.

Flag record candidate: purpose/type, owner, default/failure behavior, targeting/data/privacy, accessibility/test matrix, dependencies, start/expiry/removal and migration. Permission flag never replaces authorization. Experiments require consent, guardrails and interpretable outcomes.

## AI-generated frontend risks

| Risk | Detection/evidence candidate | Guardrail candidate |
|---|---|---|
| hallucinated/deprecated API | exact official docs/version + compile/runtime tests | bounded context/version pin |
| wrong server/client trust | boundary/security review and negative tests | explicit authority map |
| duplicated/invalid state | ownership/transition analysis | state category/owner contract |
| inaccessible composition | semantic/keyboard/AT/task evidence | approved component contracts + review |
| dependency proliferation | manifest/diff/graph review | allowed list + need justification |
| insecure generated content | threat/sink/CSP/Trusted Types review | untrusted-data policy + sanitization boundary |
| over-abstraction | change/reuse evidence | abstraction after repeated stable need |
| missing failures/tests | scenario/coverage trace | generated package includes error/recovery/test intent |
| architecture drift | decision-to-code mapping review | conformance checks + human approval |
| provenance loss | prompt/source/model/tool/diff record where permitted | traceable generation and review |

AI familiarity, successful generation or green compile is not architecture conformance.

## Anti-pattern register

- framework or folder tree as architecture;
- route = feature = page = domain;
- entire app client-rendered/hydrated by default;
- server/client boundary selected by trend;
- client-side authorization or hidden control as security;
- global state/server response duplication for everything;
- component performs arbitrary fetching/business rules;
- generic spinner/error and status only visual;
- optimistic mutation without truth/recovery;
- sensitive URL/log/replay/offline cache;
- custom complex primitive without evidence;
- Design System silent fork/hardcoded tokens/circular dependency;
- dependency for trivial platform capability;
- synthetic benchmark/bundle size as user experience;
- analytics as causality or substitute for research;
- flags without owner/expiry; offline, monorepo or microfrontend as default;
- abstraction before repeated need;
- template architecture copied without requirements;
- generated frontend without exact-version sources, review and tests.

## Evaluation process candidate

1. Frame critical outcomes, environments, threats and change scenarios.
2. Trace requirements to boundaries/owners and hard constraints.
3. Select smallest evidence portfolio proportional to harm/reversibility.
4. Collect official/specification, independent, local and user/production evidence separately.
5. Record conflicts, unknowns, limitations and residual risk.
6. Review across Experience, Accessibility, Security/Privacy, Engineering and Operations as applicable.
7. Decide/except only through authorized artifact.
8. Revalidate on architecture/runtime/dependency/release/environment/requirement change.

Stop when implementation/benchmark/tool selection is required; seek a new directive.

## Residual questions

Thresholds, supported matrix, severity, evidence freshness, gates, roles, exception authority, production signal taxonomy and conformance mechanism remain undecided. No evaluation was performed and no architecture option passed or failed.
