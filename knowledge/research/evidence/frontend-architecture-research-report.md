---
schema_version: 0.1.0-experimental
id: ARP-0009-E09
kind: knowledge
knowledge_type: research_evidence
title: Frontend Architecture Research Report
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

# Frontend Architecture Research Report

## Escopo e método

Pesquisa documental acessada em `2026-07-22`. Investiga decisões e boundaries que traduzem requirements de produto/experiência em arquitetura técnica de interface. Não cria frontend, schema, adapter, stack, folder structure, dependency, benchmark, ADR ou implementação.

Classificação: **[Fato normativo]** requisito dentro do scope da especificação; **[Especificação]** mecanismo/status publicado; **[Orientação oficial]** guidance institucional; **[Evidência empírica]** observação publicada; **[Claim]** afirmação de framework/fornecedor; **[Heurística]** prática contextual; **[Hipótese]** síntese ainda não validada; **[Recomendação]** orientação desta pesquisa; **[Decisão]** autorização do Conselho; `unknown` quando não verificado.

## Síntese

**[Hipótese]** Frontend Architecture é o conjunto rastreável de decisões sobre boundaries, authority, rendering, navigation, state, data, interaction, failure, quality e operation que realiza requirements de experiência num interface runtime. Interface Runtime é o ambiente concreto que executa e entrega essas decisões; não é a arquitetura canônica.

```text
Product / Experience / Risk Requirements
  -> responsibilities, authority and quality scenarios
  -> rendering / route / state / data / failure boundaries
  -> technology-neutral architecture decisions
  -> framework/runtime adaptation
  -> implementation and production evidence
```

Framework, pasta, route, page e component podem realizar boundaries, mas não os definem por si. Quality attributes entram como trade-offs verificáveis: o SEI relaciona arquitetura a performance, security, modifiability, reliability e usability, sem oferecer score universal.

## Base de fontes e snapshots

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/), consultado em 2026-07-22, atualização observada em julho de 2026: navigation, history, forms e semantics. Living Standard é temporal.
- [HTTP Semantics RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html) e [HTTP Caching RFC 9111](https://www.rfc-editor.org/rfc/rfc9111.html), Standards Track, junho de 2022.
- [Service Workers](https://www.w3.org/TR/service-workers/), Candidate Recommendation Draft observado em 2026-06-08; [Storage Standard](https://storage.spec.whatwg.org/), Living Standard; [IndexedDB 3.0](https://www.w3.org/TR/IndexedDB/).
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/), W3C Recommendation; [Media Queries 5](https://www.w3.org/TR/mediaqueries-5/) e [CSS Containment 3](https://www.w3.org/TR/css-contain-3/), drafts com status próprio.
- [CSP Level 3](https://www.w3.org/TR/CSP3/) e [Trusted Types](https://www.w3.org/TR/trusted-types/), Working Drafts observados em 2026; [OWASP Authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) e [HTML5 Security](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html), guidance.
- [Performance Timeline](https://www.w3.org/TR/performance-timeline/), [Resource Timing](https://www.w3.org/TR/resource-timing/) CRD observado em 2026-04-20, [WebDriver](https://www.w3.org/TR/webdriver2/) WD observado em 2026-05-28 e [Reporting API](https://www.w3.org/TR/reporting-1/).
- [OpenAPI 3.1.1](https://spec.openapis.org/oas/v3.1.1.html), [JSON Schema 2020-12](https://json-schema.org/specification), [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html) e TypeScript [erased types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html).
- [OAuth 2.0 Security BCP RFC 9700](https://www.rfc-editor.org/rfc/rfc9700.html), [NIST Privacy Framework](https://www.nist.gov/privacy-framework) e [SEI Quality Attributes](https://insights.sei.cmu.edu/library/quality-attributes/) informam security, privacy e architecture trade-offs em scopes distintos.
- [W3C Internationalization](https://www.w3.org/International/getting-started/language), [Web App Manifest](https://www.w3.org/TR/appmanifest/) WD observado em 2026-05-07, [OpenTelemetry signals](https://opentelemetry.io/docs/concepts/signals/) e [OpenTelemetry JavaScript](https://opentelemetry.io/docs/languages/js/), [OpenFeature evaluation](https://openfeature.dev/specification/sections/flag-evaluation/) e [Core Web Vitals](https://web.dev/articles/vitals).
- React [Server Components](https://react.dev/reference/rsc/server-components) e Next.js [server/client components](https://nextjs.org/docs/app/getting-started/server-and-client-components) são claims/examples contextuais, não arquitetura universal; React alerta que APIs de bundler RSC não seguem semver em minors 19.x.

## Definições e fronteiras candidatas

| Conceito | Definição candidata | Não equivale a |
|---|---|---|
| Rendering Architecture | quando/onde/com que progressive delivery uma representação é produzida | framework ou SEO |
| Application Shell | responsabilidades persistentes de navigation, session, layout e global feedback | global state indiscriminado |
| Feature | capability/cohesive change boundary orientada a outcome | route, page ou pasta |
| Module | unidade de encapsulation/dependency | package obrigatório |
| Domain Boundary | ownership de linguagem, regras e authoritative state | visual section |
| Component Boundary | contract de presentation/interaction/composition | domain boundary |
| Server/Client Boundary | local de execução e trust/capability split | security boundary automaticamente |
| Data Boundary | producer/consumer contract, authority e lifecycle | fetch call |
| State Boundary | ownership, authority, persistence e synchronization | store |
| Integration Boundary | contract com sistema/runtime externo | import arbitrário |
| Route | addressable navigation/runtime entry | IA node ou domain |
| Page/View/Screen | composição apresentada num contexto | universal synonyms |
| Island/Hydration Boundary | região interativa/activation unit | accessibility ou security boundary |
| Loading/Error Boundary | containment e recovery scope | generic spinner/message |
| Authorization Boundary | ponto onde permission é enforced por authority confiável | hidden control |
| Observation Boundary | contexto mínimo de telemetry com privacy | capture everything |
| Deployment Unit | artifact que pode ser released/rolled back | team/domain automaticamente |

## Architectural inputs e readiness

Inputs proporcionais: PRD e critical outcomes; Experience/IA/flows/states/content; Design Direction/Language e component contracts; accessibility/security/privacy requirements; performance/reliability budgets; users/locales/platform/browser/AT support; data/API/integration contracts; analytics/observability needs; deployment/operations constraints; technology constraints com provenance.

Readiness candidate: critical tasks/states/failures identificados; authoritative data/rules/permissions localizados; applicable quality requirements testáveis; external contracts/unknowns registrados; decision owner e scope claros. Não exige todos os artefatos nem é gate executável.

## Rendering architecture

Modelos representativos: static/pre-rendered, request SSR, client rendering, hybrid per route/component, incremental regeneration, streaming, islands/partial hydration, resumability, edge, native e embedded. Avaliar por freshness/personalization, secret/data proximity, interactive latency, HTML/semantic availability, cacheability, SEO/discovery, failure/degraded mode, deployment/runtime cost, observability, attack surface e maintenance.

**[Fato normativo]** HTTP caching define freshness, validation, private/shared cache e cache keys; “rendered on server” não determina política de cache. **[Heurística]** SSR pode ajudar first representation, mas não garante SEO, performance, accessibility ou low complexity. SPA não é sinônimo de interatividade; static não é sinônimo de conteúdo imutável.

## Server/client e authority

Server candidates: secrets, authoritative validation/business rules, persistence, protected aggregation, permission enforcement, signed operations e sensitive transformations. Client candidates: immediate interaction, transient presentation, device APIs, visual feedback, local drafts e bounded optimistic state.

**[Orientação oficial]** OWASP exige permission validation em cada request. Portanto `client visibility != authorization enforcement` e `client validation != authoritative validation`. Server/client placement considera latency, privacy, offline, accessibility e cost, mas rendering boundary não cria trust boundary automaticamente.

## Routing, navigation e URL state

Routing cobre address resolution, layouts, public/private/dynamic/locale/object/task routes, redirects, canonical URLs, deep links, load/error scopes e enforcement. Navigation Architecture continua ownership de findability/orientation; não é o router.

HTML distingue navigation algorithm de same-document/history updates usadas por SPAs. URL state é adequada quando shareability, reload, history e deep link são outcomes: object, filters, sort, pagination, search, tab/view/date range podem ser candidatos. Excluir secrets, tokens, sensitive queries e unstable oversized state; definir canonicalization, encoding, privacy, stale recovery e back/forward behavior.

## Feature, domain e component architecture

Comparar layer-, feature-, domain-, capability-, route-, journey-, package- e vertical-slice organization por cohesion, coupling, ownership, change frequency, testability e release needs. Folder structure é projection, não evidence de boundary. Microfrontends/independent deployment somente quando organizational autonomy e integration costs justificarem.

Camadas component candidates: platform primitives -> accessible primitives -> foundations/design-system components -> product components -> feature components -> domain views -> page composition. Cada boundary registra allowed dependencies, data/business ownership, styling/accessibility contracts, tests e owner. Reuse sem stable repeated need pode aumentar coupling; God component mistura demasiadas razões para mudar.

Presentation/interaction/data/domain separation deve reduzir duplicated rules e inconsistent transforms. Não impor pure layers quando adapters/indirection custarem mais que a mudança prevista. Smells: business rule em render handler; arbitrary API fetch em reusable component; transport DTO vazando em content; server/client duplicated validation tratada como authority duplicada.

## State architecture

| Categoria | Authority/lifecycle candidato |
|---|---|
| Local UI | ephemeral interaction/focus/disclosure/draft; component/feature scope |
| Shared UI | shell/navigation/notification/preferences; explicit consumers e expiry |
| Server state | remote representations/cache/sync; servidor continua authoritative |
| Domain state | business condition/invariants; owner de domínio |
| Workflow state | transitions, approvals, retries, timeouts/recovery; process owner |
| URL state | navigable/shareable state; history/canonical contract |
| Persistent client | offline/draft/preference; quota, privacy, encryption, migration e deletion |

State machine/statechart é candidate quando transitions, parallelism, guards, timeouts e recovery precisam ser explicitados; é overhead quando estado é simples, local e linear. Nunca implica library.

## Data, contracts, forms e concurrency

Fetching/mutation decisions incluem server/client/route fetch, prefetch, streaming, pagination, cancellation, deduplication, revalidation, optimistic update, invalidation e background refresh. Registrar authoritative source, freshness, cache key/scope, concurrency/conflict, recovery e accessible status.

**[Fato oficial]** TypeScript annotations são apagadas; compile-time type não valida input runtime. OpenAPI/JSON Schema podem expressar contracts, mas não garantem domain invariants. RFC 9457 oferece problem details padronizados e alerta contra disclosure de internals. Dates, money, units, IDs, nullability, locale e version compatibility precisam semantics explícitas.

Forms separam rendering, client interaction, native constraint assistance, authoritative validation, business rules, submit/idempotency, error mapping, drafts/autosave, upload, privacy e security. Progressive enhancement pode preservar critical submission quando apropriado; não é obrigação universal.

## Errors, loading e asynchronous work

Taxonomia candidata: validation, domain, authentication, authorization, network, timeout, dependency, partial, conflict/stale, unexpected e fatal. Para cada: safe user message, recovery/retry, focus/status announcement, severity, owner, correlation/support, telemetry e disclosure boundary.

Loading distingue initial/navigation/component/background/streaming/queued/known-progress/unknown-progress/partial/stale/optimistic. Skeleton/spinner são presentations, não architecture. Long-running jobs exigem lifecycle candidate: accepted -> queued/running -> partial -> approval/pause/cancel/resume/retry -> complete/failed, com idempotency, reconnect, audit e recoverable outputs.

## Auth, tenancy, content e cross-cutting integration

Authentication/session/reauthentication e permission changes precisam visible explanation sem revelar policy sensível. Enforcement de route/object/action/tenant fica em trusted authority. Multi-tenancy investiga tenant identity, data/cache isolation, route/domain, branding/config, permission, analytics e switching; não define backend.

I18n inclui locale negotiation/routing, message ownership/loading/version, server/client formatting, timezone/calendar/number/currency, bidi, expansion e fallback. Tradução não é string replacement. Content integration separa structured/CMS/user/AI-generated content, preview/draft/publish/expiry, sanitization, localization e provenance.

Design System integration define distribution/version/override/deprecation e product-specific ownership, evitando silent fork, hardcoded tokens e circular dependency. Styling architecture avalia global/component/utility/scoped/runtime styles, cascade layers, critical CSS, themes/preferences/print sem selecionar abordagem. Responsive behavior deriva de content/container/input/orientation/density; container queries e preference media features demonstram que não se limita a viewport breakpoints.

## Offline, resilience, performance e operation

Offline é requirement-driven: read/write, queued mutation, sync/conflict, stale indication, storage quota/eviction, encryption, service-worker lifecycle e recovery. Service Workers/Storage/IndexedDB oferecem mechanisms, não consistency model. Nunca prometer offline sem data/conflict/upgrade evidence.

Performance architecture define budgets/scenarios para rendering, hydration, JS/CSS/fonts/images/network/cache/splitting/prefetch/streaming/long tasks/memory/battery/low-end. `lab != field != perceived`; Core Web Vitals são sinais, não experiência inteira. Evidence precisa version/build/route/device/network/data scope.

Observability relaciona error, log, trace, metric, performance, journey e release, com correlation e privacy minimization. OpenTelemetry classifica traces/metrics/logs/baggage, mas browser instrumentation JS permanecia experimental na fonte consultada. Analytics mede events/funnels/task completion/abandonment com consent, taxonomy/version/provenance; não prova causalidade nem substitui research.

## Testing, platform, build e delivery

Testing portfolio candidate: unit, component, contract, integration, browser E2E, accessibility/manual/AT, visual, performance, security, localization/compatibility e production signals. W3C WebDriver padroniza browser control, não test quality. Workbench fornece isolated states/docs/evidence inputs, não produção ou Design System completo.

Browser/platform support deve partir de audience, requirements, analytics confiável, legal/accessibility obligations e graceful degradation, incluindo webviews, AT, OS/input/device tiers. Nenhuma matrix universal.

Build/development, dependencies, deployment e release são decisões relacionadas porém separadas: package/workspace/bundle/transpile/check/codegen/env/preview; direct/transitive/peer/plugin/registry/range/provenance/exit; static/server/edge/container/serverless/CDN/config/secrets/rollback; version/flags/staged/canary/migration/cache/client refresh/incident evidence. Nenhuma ferramenta ou plataforma foi escolhida.

Feature flags separam temporary release control, experiment, permission e tenant configuration; precisam owner, scope, privacy/accessibility tests e expiry/cleanup. Hidden feature não é authorization.

## Framework adaptation e AI-assisted engineering

```text
Canonical decisions + traceability
  -> framework adapter/mapping
  -> framework-specific structure
  -> runtime implementation
  -> conformance and production evidence
```

Registrar semantic loss, unsupported decision, version constraint e escape hatch. React/Next server-client docs ilustram um mapping particular, não o modelo canônico.

AI risks: hallucinated/deprecated APIs; wrong server/client boundary; missing states; duplicated authority; insecure defaults; inaccessible composition; dependency proliferation; version mismatch; invented abstraction e generated code without tests. Controls candidatos: bounded context, exact versions/official docs, allowed dependencies, architecture constraints, provenance, reviewable diff, tests e human/security/accessibility review.

## Recomendações e questões

**[Recomendação]** Produzir architecture decisions por quality scenario e ownership map antes de mapping para framework. Usar smallest sufficient boundary, native/web semantics where fit, explicit authority, failure/recovery first, and production feedback. Não criar universal score.

Questões abertas: artifact/authority para Frontend Architecture; minimum readiness/package; decision versus specification; integration com ARP-0007; supported environments; performance/evidence thresholds; exception/migration lifecycle; quando framework adapter, executable evaluation e benchmark poderão ser autorizados.
