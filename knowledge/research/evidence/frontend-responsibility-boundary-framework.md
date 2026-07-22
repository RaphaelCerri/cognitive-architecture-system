---
schema_version: 0.1.0-experimental
id: ARP-0009-E10
kind: knowledge
knowledge_type: research_evidence
title: Frontend Responsibility and Boundary Framework
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0007
---

# Frontend Responsibility and Boundary Framework

## Natureza

Framework documental candidato para localizar responsibility, authority, dependency e evidence antes de mapear decisões a arquivos/framework. Não é schema, RACI canônico, gate ou implementation plan.

```text
Requirement / Quality Scenario
  -> responsible outcome
  -> authoritative owner
  -> boundary and contract
  -> permitted dependencies/effects
  -> failure and evidence
  -> runtime mapping
```

## Actors e responsabilidades

| Área | Possui primariamente | Não deve presumir |
|---|---|---|
| Product | outcomes, policy intent, criticality, acceptance | technical boundary ou telemetry universal |
| Experience/Content | tasks, IA/navigation, flows/states, content, recovery | route/component/file equivalence |
| Design System | governed language, tokens, reusable component/pattern contracts | product domain rules ou arbitrary overrides |
| Frontend | interface orchestration, presentation/interaction, runtime mapping, client resilience | server authority ou hidden security |
| Backend/API | authoritative rules/data/persistence/permission enforcement, integration semantics | consumer experience or sufficient error content by status alone |
| Security/Privacy | threat/data/control requirements, review and residual risk | CSS visibility as access control |
| Accessibility | requirements, cross-layer contracts and scoped evidence | library claim as product conformance |
| QA/Evaluation | evidence portfolio, environments, traceability and regressions | automation as complete proof |
| Platform/Operations | build/release/deploy/config/observability/incident capability | product correctness from uptime alone |
| Council/Architecture | decision authority, exceptions and lifecycle | catalog/framework convention as decision |

Um projeto pequeno pode acumular papéis; as responsabilidades continuam explícitas.

## Boundary record candidato

Para cada boundary registrar: purpose/outcome; scope e non-goals; owned concepts/state/data; authoritative source; inputs/outputs/events; allowed/forbidden dependencies; effects; server/client/runtime mapping; loading/error/recovery; accessibility/security/privacy/performance requirements; owner/reviewer; tests/evidence; version/compatibility; change/exit triggers; unknowns.

## Boundary taxonomy

| Boundary | Pergunta decisiva | Common leak |
|---|---|---|
| Domain | quem possui regra/linguagem/invariant? | business rule duplicada no component |
| Feature | qual capability muda coesamente? | route/file como feature artificial |
| Presentation | como state vira perceivable/operable output? | transport/domain rule em markup |
| Interaction | quem possui transitions/feedback/focus? | handler arbitrário disperso |
| Data | quem produz/valida/versiona representation? | DTO tratado como domain object |
| State | authority/lifecycle/persistence/sync? | global store como default |
| Rendering | quando/onde representation é produzida? | render location tratado como trust |
| Server/client | quais capabilities/trust/data cruzam? | secret/client validation como authority |
| Route/navigation | address/runtime versus findability? | IA igual a router |
| Integration | como external system falha/evolui? | vendor API dentro de components |
| Error/loading | qual failure/progress é contido e recuperado? | generic fallback global |
| Authorization | onde permission é enforced? | hidden control ou route guard isolado |
| Observation | qual signal mínimo explica outcome/failure? | PII/session replay indiscriminado |
| Deployment | o que versiona/rolls back junto? | team boundary derivada do artifact |

Rendering, security, data ownership e deployment boundaries podem coincidir, mas isso precisa evidence, não presunção.

## Dependency direction candidates

```text
Product policy / domain contracts
        <- adapters and orchestration
Experience + Design System contracts
        <- product/feature composition
Platform primitives and runtime adapters
```

Dependência aponta para stable contracts, não necessariamente “para baixo” numa pasta. Domain rule não importa UI runtime. Reusable component não busca arbitrary product API. Runtime adapter pode conhecer framework; canonical decision não depende da API do adapter. Cross-feature reuse deve passar por explicit shared capability ou composition, não deep imports.

Allowed-dependency rules são contextuais. Introduzir interface/adapter somente quando ownership, replacement, testing ou semantic translation justificarem; indirection sem pressão concreta é debt.

## State ownership map

| State | Owner candidate | Source of truth | Persistence/sync | Failure concern |
|---|---|---|---|---|
| focus/disclosure/selection | component/feature | current interaction | ephemeral | focus loss/inaccessible state |
| shell/navigation UI | application shell | interface session | usually memory/URL | cross-route stale state |
| preferences | user/product policy | explicit setting/system preference | client/server per privacy | shared-device leakage |
| fetched representation | data orchestration | server/API | cache with freshness | stale/partial/offline |
| business condition | domain service | authoritative domain | server persistence | duplicated invariant |
| workflow/job | process owner | workflow authority | durable status/events | retry/idempotency/reconnect |
| filter/sort/page/tab | route/feature | URL when shareable | session history | sensitive/oversized URL |
| local draft/offline queue | feature/user | local pending copy | bounded storage + sync | conflict/loss/quota |

Todo state precisa owner, authority, initialization, transition, expiry/reset, serialization/privacy, concurrency e observable evidence. “Single store” não resolve esses contratos.

## Data and mutation boundary

```text
User intent
 -> client constraints and accessible feedback
 -> request contract + correlation/idempotency when needed
 -> authoritative permission/validation/business operation
 -> versioned result/problem
 -> cache/state reconciliation
 -> perceivable success/failure/recovery
```

Responsibilities:

- API/backend: authoritative validation, permission, atomicity, durable semantics and safe problem details;
- frontend orchestration: cancellation, duplicate intent prevention, optimistic/confirmed distinction, error mapping, reconciliation and user control;
- Experience/Content: actionable messages, progress and recovery;
- Security/Privacy: disclosure, CSRF/XSS/token/data constraints;
- QA/Operations: contract/concurrency/failure evidence and correlation.

Compile-time generated client melhora alignment, mas runtime data continua untrusted until validated at its authority boundary. Cache ownership inclui key, variation, freshness, invalidation, tenant/user isolation e offline behavior.

## Server/client allocation matrix

| Responsibility | Trusted server candidate | Client candidate | Boundary rule |
|---|---|---|---|
| permission | enforce every operation/object | explain/hide only for UX | client never authoritative |
| validation | domain/security/persistence constraints | immediate guidance/native constraints | server result maps safely to fields/summary |
| secret/signed operation | server only | initiate with intent | no secret in bundle/storage/log |
| aggregation | protected/co-located/expensive | public/local composition | account for latency/cache/privacy |
| interaction feedback | confirm durable outcome | immediate/pending/optimistic | distinguish pending from committed |
| device capability | receive result if needed | browser/device | permission/fallback/privacy |
| offline draft | sync/merge authority | local durable queue/draft | conflicts, encryption, deletion, quota |

## Routes and application shell

Experience owns navigation intent/labels/orientation; frontend owns router/runtime realization; backend/security owns protected resource/action enforcement. Route record candidate: stable identity/URL, audience/access, parent/layout, data/state, canonicalization/redirect, load/error/recovery, focus/title/announcement, cache/prefetch, analytics/privacy and fallback.

Application Shell should contain only responsibilities stable across its scope: navigation context, session awareness, global status/recovery, themes/preferences and observation boundary. It must not become dumping ground for feature data, modals, caches or domain rules.

## Component responsibility layers

| Layer | May own | Must receive/avoid |
|---|---|---|
| platform primitive | native semantics/behavior | avoid reimplementation without need |
| accessible primitive | complex interaction contract | styling/content/composition duties explicit |
| DS component | visual/behavior/token contract | no product API/domain rule |
| product component | recurring product-specific composition | bounded data/intent contract |
| feature component | feature orchestration/state | no arbitrary cross-feature deep dependency |
| domain view | projection of domain concepts | mutation through explicit intents |
| page composition | route/layout/critical task assembly | avoid becoming business monolith |

Container/presentational separation is optional. The actual requirement is explicit authority/effects and testable contract.

## Cross-cutting responsibility maps

### Accessibility

- Experience: task, content, focus/recovery intent;
- Design System/primitives: reusable semantics/keyboard/state contracts;
- frontend: routing focus/title, dynamic status, composition, responsive/forced-color/reduced-motion realization;
- backend/content: accessible data/media/error content;
- QA/accessibility: automated + manual + AT + user evidence;
- operations: regression/incident signals without inferring conformance.

### Security and privacy

- backend/security: permissions, session policy, secrets, authoritative sanitization/validation where applicable;
- frontend: safe sinks/rendering, CSP/Trusted Types compatibility, CSRF/session handling, safe external links/uploads/downloads, client log minimization;
- platform/ops: headers, dependency/build provenance, source maps/config, incident response;
- product/privacy: purpose, consent, retention/deletion and analytics scope.

### Performance and resilience

- Product/Experience: critical tasks and perceived thresholds;
- architecture: rendering/cache/splitting/failure strategy;
- frontend/Design System/content: runtime, CSS/font/image/component costs;
- backend/CDN: latency/cache/streaming contracts;
- QA/operations: lab + field + release-correlated evidence.

### Internationalization and content

Content owns meaning/source/version; localization owns translation/process/locale evidence; backend/frontend share negotiated locale and formatting boundaries; Design System supports expansion/bidi; routing decides locale addressability; security owns untrusted/generated content handling.

## Build, dependency, deployment and release boundaries

Source/module graph, package graph, build graph e deployment graph são diferentes. A package pode conter vários domains; um deployment pode servir várias routes; a workspace não define ownership.

Dependency record candidate: need, direct/transitive role, runtime/build/dev privilege, identity/version/source/license/provenance, allowed consumers, upgrade owner, security/support, alternatives e exit. Minimum governed dependency minimizes total owned risk, not count.

Deployment responsibilities: artifact/config/secret separation, environment parity, cache/CDN behavior, preview privacy, rollback and observable release identity. Release responsibilities: compatibility/migration, staged exposure, cache invalidation, client refresh, flags, rollback and incident evidence.

## Observability and analytics boundary

Signal contract: question/outcome, event/metric/trace/error, fields and classification, correlation, sampling, retention/access, consent/legal basis, release/version, failure mode and owner. Avoid raw form values, secrets, sensitive URLs, accessibility preferences or full replay by default. Analytics taxonomy is versioned product evidence; it does not become domain authority.

## Architecture documentation candidates

Frontend Architecture Overview, Responsibility/Boundary Map, State Ownership Map, Data Flow/Contract Map, Rendering/Route Model, Error/Progress Model, Accessibility/Security/Privacy Architecture, Performance Budget, Testing/Observation Strategy, Dependency/Deployment/Release Model e decision records são possible views. Nenhum é Knowledge Type nesta slice; usar somente o mínimo que resolve uma question.

## Change and exception governance

Boundary change triggers: new authoritative owner, cross-boundary dependency, state persistence/sync, sensitive data, new runtime/deployment unit, quality regression, unsupported adapter or migration. Exception candidate exige scope, violated rule, rationale/evidence, risk/control, owner, expiry e exit. Council authority permanece aberta.

## Open questions

- Quem aprova canonical frontend decisions e mappings de runtime?
- Qual minimum boundary map por product risk?
- Como relacionar security artifacts do ARP-0007 sem duplicação?
- Quando shared component vira Design System/product platform?
- Qual authority para performance budget, browser/AT support e exceptions?
- Como manter framework adaptation traceável sem schema prematuro?
