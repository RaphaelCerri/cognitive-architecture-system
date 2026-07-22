---
schema_version: 0.1.0-experimental
id: ARP-0009-E07
kind: knowledge
knowledge_type: research_evidence
title: Technology Selection and Decision Framework
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
---

# Technology Selection and Decision Framework

## Princípio

Seleção é uma decisão contextual e revisável, não um ranking global. Este framework é candidato documental; não é Selection Engine executável, Policy, schema ou autorização. A sequência recomendada é `outcome -> constraints -> minimum capability -> candidate class -> evidence -> trade-off -> decision -> validation -> lifecycle`.

## Selection Profile candidato

O profile deve ser pequeno e proporcional, contendo apenas variáveis que mudam a decisão:

- product class e critical tasks: marketing/content, SaaS, enterprise/internal ops, commerce, public/regulated service, visualization, AI product etc.;
- users, access needs, languages/locales, devices/input modes, browsers/platforms e connectivity;
- content/data density, interaction/state complexity, realtime/offline/collaboration e editing;
- rendering/SEO/distribution/deployment boundaries;
- privacy/security/data classification e supply-chain tolerance;
- accessibility target/evidence matrix e legal/procurement triggers;
- brand/theming/multi-brand/white-label e Design Language maturity;
- team capability, ownership horizon, delivery deadline e migration tolerance;
- performance/reliability budgets e observability needs;
- existing architecture/integration constraints explicitamente justificadas.

Profile não deve inventar Personas, requirements ou stack. Informação ausente é `unknown`; pergunta é obrigatória somente se puder mudar gate, shortlist ou risk.

## Profiles ilustrativos, não presets

| Profile | Pressões prováveis | Não presumir |
|---|---|---|
| content/marketing | semantic HTML, crawlability, low JS, authoring, media | que SPA ou meta-framework específico seja necessário |
| SaaS/product | workflows, forms, state, auth, progressive complexity | que full component system seja sempre mais rápido |
| enterprise/internal ops | dense data, keyboard, grids, permissions, long lifecycle | que enterprise license resolva accessibility |
| public/accessibility-critical | broad device/AT support, resilience, evidence, procurement | que design system público seja transplantável sem contexto |
| visualization/graph | data semantics, scale, alternate views, interaction | que canvas/SVG choice seja estética |
| AI product | streaming, actions/approval, provenance, interruption, variable output | que agent/MCP integration seja requisito positivo |
| white-label/multi-brand | token/theme authority, isolation, upgrade compatibility | que maximum customization seja free of cost |

## Critérios e evidence questions

1. **Outcome fit:** resolve o capability mínimo e critical tasks, inclusive failure/recovery?
2. **Accessibility:** output e duties permitem requirements/AT matrix; limitations são explícitas?
3. **Architecture fit:** rendering, state/data, boundaries, languages e platforms cabem sem inverter Core authority?
4. **Experience fit:** content, density, interaction, theming, responsiveness, i18n e platform conventions?
5. **Security/privacy:** threat surface, third-party code/data, CSP, sanitization, credentials, provenance e response?
6. **Performance/resilience:** evidence em cenário representativo, budgets, degraded/offline behavior e observability?
7. **Maintainability:** API coherence, types, docs, testability, release/deprecation/migration, bus factor/stewardship?
8. **Interoperability/exit:** standards, data portability, adapter surface, replacement/migration and lock-in?
9. **Supply chain/license/cost:** identity, dependencies, install scripts, attestations, license/tier/asset obligations, TCO?
10. **Team/delivery:** learning/operating capacity, ownership, deadline e support without using familiarity as sole reason?
11. **AI suitability:** stable machine/human docs, constrained generation, diffability, provenance and deterministic checks?
12. **Evidence quality:** official vs independent vs local/user evidence, recency, conflicts, unknowns and confidence?

## Hard constraints versus preferences

Hard constraint deve ser rastreável a requirement, law/policy, platform contract, threat model, budget ou irreversible limitation. Exemplos candidatos: incompatible license; unsupported required platform; inability to complete critical task by keyboard; prohibited network/data transfer; no supported security response; exceeds validated performance budget; required locale/calendar unsupported; no viable exit for regulated data.

Preferências incluem syntax familiarity, visual taste, community popularity, prebuilt component count, convention preference e marginal ergonomics, salvo quando evidence as liga a prazo/risco mensurável. Preferência não pode masquerade como gate. Cada gate precisa source, test/evidence, owner e waiver authority.

## Processo de seleção

1. **Frame:** confirmar decision owner, scope, profile, deadline, reversibility e non-goals.
2. **Derive:** extrair hard constraints, preferences, minimum capabilities e evidence threshold.
3. **Choose class:** decidir native/build/buy/integrate e modelo (primitive/open-code/system) antes de nomes.
4. **Discover:** amostra diversa; resolver identities e conflicts of interest.
5. **Gate:** eliminar apenas por constraint demonstrada; registrar `Reject` scoped ou `Insufficient Evidence`.
6. **Compare:** matrizes qualitativas por classe, com evidence/unknowns; não somar score arbitrário.
7. **Compose:** avaliar combinações e duplicated responsibilities/dependencies.
8. **Validate:** somente numa futura autorização, testar critical slice, accessibility, performance, security, migration e operations.
9. **Recommend:** produzir artifact explícito com alternatives e conditions.
10. **Decide:** autoridade humana aprova disposition/scope/version/expiry; catalog nunca auto-approves.
11. **Monitor:** evidence de produção, advisories, releases, regressions e triggers; reabrir decisão quando necessário.

Stop conditions: identidade/licença incerta material; missing critical requirement; candidates de classes incomparáveis; ausência de owner/authority; evidence budget exhausted; ou necessidade de executable trial não autorizada.

## Matrizes qualitativas

Usar `strong evidence`, `partial`, `conflict`, `unknown`, `fails gate` e `not applicable`, sempre com link/observation. Evitar 1–5 sem anchors: a soma permite que muitas preferências compensem um hard failure. Quando pesos forem necessários futuramente, registrar rationale e sensitivity analysis, e manter gates fora da soma.

Comparações devem ser feitas em duas camadas:

- **within-class:** alternativas com responsibility model comparável;
- **whole-solution:** combinação resultante, duplicated capabilities, integration seams, total dependency/ownership cost.

## Combinações e composição

Uma solução é graph, não lista. Mapear quem possui semantics, behavior, style, state, validation, data, tokens, localization, testing e update. Detectar overlapping focus managers, portals, styling runtimes, date libraries, state stores, virtualization, icon sets e validators. Compatibility claim precisa versão e tested matrix. “Works with” não demonstra coherent experience.

## Minimal dependency strategy

**[Heurística]** Preferir menor conjunto que cobre requirements com evidence e ownership sustentável, não zero dependency nem menor byte universal. Para cada dependency perguntar: capability distintivo? custo de implementar/manter nativamente? transitive/runtime surface? update cadence? failure/exit? Pode ser dev-only? Pode ser platform native? Remoção reduz risco sem transferir risco oculto para código local?

Dependency budget candidato separa direct/transitive, runtime/build/dev, privileged install scripts, networked services e duplicated capability. Micro-package count e monolith size precisam análise contextual.

## Build, buy, native, adapt, absorb e integrate

| Opção | Favorecer quando | Riscos a demonstrar |
|---|---|---|
| Native platform | capability padrão, broad support e customization limitada | inconsistent browsers/platform gaps, local expertise |
| Build | differentiating/critical behavior e ownership longo justificam | accessibility/security defects, maintenance, opportunity cost |
| Buy/full system | breadth/support/time-to-capability e fit forte | lock-in, license/TCO, theming friction, supplier claims |
| Adapt primitive | custom language com behavior foundation | consumer accessibility duties, composition/test burden |
| Absorb open-code | local control e reviewable code justificam | fork drift, provenance, updates, local liability |
| Integrate service | capability externo e boundary/data terms aceitáveis | privacy, availability, exit, commercial change |

Nenhuma linha é default. Opportunity cost e reversibility entram na decisão.

## Recommendation artifact candidato

Um future Technology Recommendation deve conter: decision statement; profile/scope/version; status e authority; requirements/gates; candidates/classes; source snapshot; matrix; selected disposition; rationale; dissent/conflicts; unknowns; license/security/accessibility review; integration/ownership plan; validation evidence; alternatives; conditions; rollout/rollback/exit; monitoring; expiry/review triggers; relations para PRD/Experience/architecture/ARP-0007. Não é criado nesta slice.

## Accessibility, performance e security evaluation

Accessibility: component/system evidence nunca substitui composed critical-flow tests. Exigir semantic DOM, keyboard/focus, screen readers/AT, zoom/reflow, forced colors, reduced motion, content/i18n e user evidence conforme risco.

Performance: usar scenario/version/build/device/network/data size; separar lab, field e vendor claim; medir integration result, não package homepage.

Security: threat-model features como editor, markdown/HTML, registry, maps/tiles, telemetry, plugins/addons, server components, upload/download e AI-generated content. Supply-chain score é triage; review inclui provenance, policies/advisories, transitive graph, install/build behavior e response capacity.

## Lifecycle e reversibilidade

Toda decisão positiva deve definir supported range/pinning policy, owner, upgrade cadence, deprecation handling, data/source portability, migration budget, observability e kill/rollback path. `Adopt` sem scope/version/expiry é inválido conceitualmente. Replacement deve revalidar critical requirements, não somente compile.

## Open questions

- Qual artifact e authority formalizam Recommendation/Disposition/Exception?
- Quais criteria são organization-wide versus profile-specific?
- Quais gates e evidence levels por criticality?
- Quando uma trial executável pode ser autorizada e isolada?
- Como medir AI suitability sem premiar marketing ou tool coupling?
- Como conectar catalog snapshot a SBOM, advisories e production evidence sem criar Source of Truth paralelo?
- Qual cadence/expiry e quem financia migrations?
