---
schema_version: 0.1.0-experimental
id: ARP-0009-E11
kind: knowledge
knowledge_type: research_evidence
title: Frontend Architecture Options and Decision Matrix
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
---

# Frontend Architecture Options and Decision Matrix

## Uso e limites

Comparação qualitativa, framework-neutral e não executada. Nenhuma option é recomendação universal ou stack approval. `Strong`, `conditional`, `weak`, `unknown` e `not applicable` só podem ser usados futuramente com scenario/evidence; não há soma nem score.

## Decision drivers

Antes da option: critical tasks/content; data freshness/personalization; interaction/state complexity; crawl/share/deep-link needs; accessibility/browser/AT; security/privacy/tenancy; offline/resilience; performance budgets; team/operation/deployment; change rate e exit. Hard constraint não pode ser compensado por convenience.

## Rendering model matrix

| Modelo | Favorece quando | Strengths candidates | Limits/risks | Evidence required |
|---|---|---|---|---|
| Static/pre-rendered | content changes on controlled publish; few personalized interactions | simple delivery/cache, low runtime surface, early HTML | build freshness, preview/purge, dynamic feature seams | publish latency, cache invalidation, interactive budget, content/SEO/a11y |
| Request server-rendered | personalized/fresh first representation and server proximity matter | HTML per request, secrets/data server-side, straightforward request model | server latency/cost, cache variation, stateful interaction hydration | TTFB/field UX, cache/privacy, failure/scale, client enhancement |
| Client-heavy SPA | long-lived high interaction and client transitions dominate | rich local interaction, client orchestration/offline candidates | initial JS/data waterfall, state complexity, navigation/a11y, secret limits | low-end/poor-network, deep links, failure/reload, AT, security |
| Hybrid per route/boundary | product has materially different route/capability needs | contextual trade-offs, gradual enhancement | mental/build/cache boundary complexity, duplicated patterns | boundary clarity, version/runtime compatibility, observation |
| Streaming server output | partial content can become useful before full completion | progressive delivery and priority | status/focus/order, partial failure, reconnect/cache complexity | critical sequence, AT announcements, abort/retry, server pressure |
| Islands/partial hydration | mostly static content with bounded interactive regions | lower client activation candidate | cross-island state/events, tooling/debugging, delayed interaction | island contracts, JS/interaction timing, fallback and composition |
| Resumability | serialized execution/state model offers measured benefit | reduced eager execution claim | framework/runtime coupling, serialization/security/debugging | independent scenario evidence, migration/exit, sensitive state |
| Edge rendering | location-sensitive latency/logic and platform constraints fit | proximity candidate | runtime limits, data consistency, observability/vendor lock | regional data/compliance, cold start, cache, cost, fallback |
| Native/embedded | platform capability/distribution is requirement | platform integration | multi-platform divergence, webview/host contracts | lifecycle/store/OS accessibility, update and shared-domain boundaries |

**Decision rule candidate:** choose rendering per responsibility/route where benefits exceed operational and cognitive cost; rendering location does not grant authority by itself.

## Representative product options

### A. Simple server-rendered application

Context: forms/content/workflows with modest client interaction. Candidate composition: semantic documents/forms, request/response, bounded enhancement, server authority. Strengths: small client state, robust navigation, straightforward permission/validation. Risks: interaction latency, server dependency, preserving drafts/progress. Not “legacy” by definition.

### B. Static content platform

Context: publishing/marketing/docs with controlled freshness. Candidate: pre-render, CDN/cache, structured content, isolated interaction. Risks: preview, personalization, rebuild/purge, third-party scripts, stale content. SEO and performance still require evidence.

### C. Client-heavy operational application

Context: dense repeated tasks, local interaction and long sessions. Candidate: application shell, explicit server-state/domain/workflow split, route/deep links. Risks: initial/runtime cost, global-state growth, inaccessible transitions, client-only permissions, stale caches. Validate real data/device/task scale.

### D. Hybrid product application

Context: content/public surfaces plus authenticated interactive features. Candidate: render/cache per route/boundary, shared contracts and Design System. Risks: duplicated fetching, server/client semantic drift, complex build/deploy/cache, developer confusion. Strong boundary documentation required.

### E. Data-heavy operational app

Context: grids/search/bulk/editing/permissions. Candidate: server query/mutation authority, URL/shareable filters, virtualization only with evidence, recovery/undo. Risks: keyboard/AT, dataset/client memory, concurrency, export/privacy, paid dependencies. Native table versus grid is a requirements decision.

### F. Offline-capable application

Context: critical work under unreliable connectivity. Candidate: explicit local durable state, queue/idempotency/sync/conflict, stale communication. Risks: data loss/leakage, quota/eviction, migrations, multi-device conflicts, service-worker update. Offline read/write tiers should be separate.

### G. AI-native asynchronous application

Context: streaming/long jobs/tools/human approval. Candidate: durable job authority, partial output provenance, pause/cancel/retry, action preview/approval/audit. Risks: variable output, reconnect/order, unsafe rendered content, excessive announcements, hidden actions/cost. Chat UI alone is insufficient architecture.

### H. Multi-tenant platform

Context: tenant-specific data/config/brand/domain. Candidate: server-enforced tenant boundary, isolated cache/analytics/config, traceable theme/content. Risks: cross-tenant leakage, stale switching, custom-domain routing, permission/config complexity. UI tenant indicator is not isolation.

### I. Multi-platform product

Context: shared domain/outcomes across web/native/embedded. Candidate: canonical contracts and platform-specific adapters/presentation. Risks: lowest-common-denominator UX, duplicated business rules, inconsistent release/support and token/component assumptions.

## Organization structure options

| Option | Coherence potential | Primary risk | Choose only with |
|---|---|---|---|
| technical layers | shared technical consistency | feature changes cross many layers/owners | stable small system or clear layer ownership |
| feature folders | outcome-local changes | duplicated foundations/domain leakage | explicit shared/domain contracts |
| domain modules | language/rule ownership | UI journeys cross domains | domain maturity and integration model |
| vertical slices | end-to-end change isolation | duplication/inconsistent cross-cutting quality | autonomy need and governance |
| packages/monorepo | explicit distribution/versioning candidate | package ceremony/circular graph | independent consumers/ownership/release evidence |
| microfrontends | organizational/deployment autonomy | runtime duplication, UX/a11y/integration failures | independently governed teams and measured need |
| hybrid | contextual boundaries | inconsistency/decision overhead | documented rule and review trigger |

Folder layout follows the selected projection; it is not the decision.

## State strategy matrix

| State need | Simplest candidate | Escalate when | Avoid |
|---|---|---|---|
| local interaction | component/platform state | shared lifecycle or complex transition emerges | global store by habit |
| shareable navigation | URL/history | privacy/size/unstable serialization conflicts | duplicate URL + store authorities |
| server representations | request/cache layer | offline/conflict/realtime requirements | copying every response into global state |
| domain invariants | server/domain model | bounded client simulation is required | treating client copy as authoritative |
| workflow | explicit transition model | parallel/time/retry/recovery complexity | booleans with impossible combinations |
| preferences/drafts | bounded persistence | multi-device/sync/security matters | unversioned permanent local storage |

Statechart evaluation candidate: number/criticality of states, illegal transitions, concurrency, recovery, audit/explanation and team comprehension—not popularity.

## Data and mutation options

| Option | Good fit | Boundary risk |
|---|---|---|
| server fetch/render | data needed for initial representation, protected/co-located | request latency, caching, server coupling |
| route loader | route owns data/readiness/error | route/domain conflation, overfetch |
| client fetch | user-triggered/live/device-context data | waterfalls, duplicate cache, loading/a11y |
| prefetch | high-likelihood next need with safe data/cost | privacy, wasted network, stale/authorization |
| stream/push | progressive/realtime/long work | ordering, reconnect, backpressure, announcements |
| optimistic mutation | reversible/predictable operation | conflict/rollback, false confirmation, duplicate intent |
| background revalidation | stale-tolerant representation | surprise changes, focus/content movement |

Each requires authority, freshness, cancellation, deduplication, retry, error and observation semantics.

## Routing and URL options

Resource/object routes favor stable addressability; task routes favor process entry; nested layouts favor shared context; modal/parallel route representations require reload/deep-link/focus semantics. Locale routes improve explicit address/share/cache but add canonical/redirect complexity. Sensitive/private state stays out of URLs. Navigation hierarchy remains separate.

## Progressive enhancement options

| Tier | Candidate guarantee | Appropriate when |
|---|---|---|
| semantic base | content/navigation/form meaning available | broadly applicable where HTML platform fits |
| resilient submission | critical form works or fails clearly without full JS | task criticality/connectivity justify |
| enhanced interaction | client feedback, autosave, optimistic/streaming | base/recovery remains coherent |
| offline capability | durable local operations/sync | explicit offline requirement and conflict model |

Progressive enhancement is contextual robustness, not an absolute prohibition on client applications.

## Deployment and release options

| Model | Strength candidate | Risk/decision evidence |
|---|---|---|
| static/CDN | simple immutable delivery/cache | invalidation, preview/privacy, dynamic boundaries |
| server runtime | dynamic/control/observability | scaling, availability, patching, latency |
| serverless/edge | elastic/proximity claims | cold starts, limits, cost, lock, data locality |
| container | runtime control/portability candidate | operations/security/image lifecycle |
| single artifact | coordinated consistency | larger blast radius |
| independent units | team/release autonomy | compatibility, duplicated runtime, cross-unit UX |

Release patterns—immediate, staged, canary, flags—depend on reversibility, user/session consistency, migrations/cache and observation. Feature flags do not replace deployments or permissions and require expiry.

## Framework adaptation matrix

| Canonical concern | Mapping evidence needed | Failure signal |
|---|---|---|
| server/client authority | exact runtime/bundler boundary and serialized data | secret/import leak; client enforcement |
| rendering/cache | route/component behavior and invalidation | stale/private content cached |
| navigation/URL | history/deep-link/focus/title/error | inaccessible or unreloadable state |
| state/data | owner/cache/lifecycle integration | duplicated authority/store sprawl |
| error/loading | containment, recovery and announcements | generic fallback/silent partial failure |
| accessibility | produced DOM/interaction across composition | component claim without flow evidence |
| deployment | artifact/runtime/config/version | implicit platform lock or no rollback |

Framework docs are evidence of their mapping only. Adapter may report `unsupported` or semantic loss; it must not silently redefine canonical decisions.

## Evaluation without universal score

For each option, create quality scenarios: stimulus/context, affected task/data, expected response/threshold, environment and evidence. Evaluate requirement coverage, cohesion/coupling, boundary/authority clarity, accessibility/security/privacy, performance/resilience, testability/observability, operability/maintainability, portability/migration/dependency risk and recovery.

Use gates for non-negotiable constraints; qualitative trade-off narrative for the rest; record conflicting evidence and unknowns. A synthetic benchmark or vendor claim cannot outweigh contextual field/task evidence.

## Current conclusions

- no universal rendering model;
- hybrid is not automatically superior—its coordination cost is real;
- server/client placement follows responsibility and trust, not trend;
- state categories require different owners/lifecycles;
- routes, features, domains, pages and components are non-equivalent;
- microfrontends/monorepos/offline/state machines need demonstrated pressure;
- architecture option must include failure, operations and exit, not happy-path structure.

Nenhuma option recebeu disposition ou approval.
