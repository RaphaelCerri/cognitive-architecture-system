---
schema_version: 0.1.0-experimental
document_role: research_responsibility_matrix
title: PRD and Experience Responsibility Matrix
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0009]
language: pt-BR
---

# PRD and Experience Responsibility Matrix

## Status

**[Decisão]** Esta matriz compara ownership candidato; não altera PRD, cria schema ou aprova tipos. Todas as células de responsabilidade são **[Hipótese]**, salvo marcação diferente.

## Responsabilidade primária

| Camada | Propósito e conteúdo candidato | Authority/lifecycle | Não deve absorver |
|---|---|---|---|
| Intent | Expressar ideia, problem signal, desired change, sponsor constraints e initial preferences | Originator/sponsor; evolui até virar problem/outcomes ou ser rejeitada | requirements detalhados, UI ou technology solution presumida |
| PRD | Own problem/opportunity, target users/market, outcomes, scope/non-goals, business rules, product/functional/non-functional requirements, priorities, dependencies, constraints, risks e success | Product authority; versionado e aprovado conforme governance | journeys/flows/screens completos ou frontend design |
| Experience Architecture | Traduzir needs/tasks/context e product requirements em journeys, IA/navigation, flows/states, content/interaction/accessibility/responsive requirements, experience risks e acceptance intent | Experience owner com product/security/accessibility review; composição candidata | business authority do PRD, visual implementation ou runtime config |
| Visual Direction | Expressar hierarchy, composition, typography/color/imagery/motion intent, brand interpretation e originality/accessibility constraints | Design/brand authority; derivada de experience/product inputs | substituir task, content, accessibility ou Design System |
| Design System | Governar reusable design decisions, tokens, components, patterns, guidance e lifecycle quando existente | Design-system governance; relação com produto a decidir | definir toda Experience Architecture ou virar única Source of Truth |
| Frontend Architecture | Definir realization técnica: rendering, routing, data/state/forms, auth integration, boundaries, caching, error/loading, observability, testing e deployment | Technical authority; versionada com target/platform | decidir product outcome, user need ou aesthetic preference |
| Implementation | Materializar approved requirements/specifications no target e registrar deviations | Engineering/release controls | redefinir silently PRD/experience/Policy |
| Evaluation | Definir/realizar tests, reviews e measures para acceptance, usability, accessibility, security, performance e consistency | Independent ou segregated reviewer proporcional ao risk | criar requirement retroativamente ou autocertificar artifact |
| Production Evidence | Capturar analytics, outcomes, errors, support, incidents, research e conformance evidence | Operations/data governance; retained/protected per Policy | promover automaticamente observation a canonical knowledge |

## Dimensões comparadas

Legenda: `P` primary owner candidato; `R` referencia/deriva; `C` contribui; `V` valida/produz evidence; `—` não é owner. **[Hipótese]**

| Dimensão | Intent | PRD | Exp. Architecture | Visual Direction | Design System | Frontend Arch. | Implementation | Evaluation | Production Evidence |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Problem/outcome | C | P | R | R | — | R | — | V | V |
| Users/actors | C | P | P | R | R | R | — | V | V |
| Product requirements | C | P | R | R | R | R | R | V | V |
| Journeys/flows/states | — | R | P | R | R | R | R | V | V |
| Content | C | R | P | R | C | R | R | V | V |
| Visual/brand expression | C | R | R | P | P/R | R | R | V | V |
| Accessibility | R | P/R | P | P/R | P/R | P/R | R | V | V |
| Security/privacy | R | P | P/R | R | R | P/R | R | V | V |
| Performance | R | P/R | P/R | R | R | P | R | V | V |
| Technology | preference only | constraint | requirement | constraint | platform relation | P | R | V | V |
| Acceptance/tests | R | P | P | R | P/R | P | R | P/V | V |
| Evidence/provenance | C | R | R | R | R | R | C | P | P |
| Lifecycle/change | C | P | P | P | P | P | C | C | C |

## Shared concerns sem duplicação

| Concern | Fonte responsável candidata | Representação nas demais camadas |
|---|---|---|
| Accessibility | **[Hipótese]** applicable Policy/standard + product/experience requirements | reference + derived acceptance/tests; platform details em Frontend Architecture |
| Security/privacy | **[Hipótese]** Policy/ARP-0007 + PRD risks/rules | experience flows/visibility/consent; frontend controls; evaluation evidence |
| Performance | **[Hipótese]** product outcome/constraint + technical budgets | experience latency expectation; frontend realization; production metrics |
| Content | **[Hipótese]** content/product ownership | experience model/rules; visual presentation; implementation source |
| Analytics/success | **[Hipótese]** PRD outcome/measurement intent | experience events/ethical constraints; frontend instrumentation; production evidence |
| Localization | **[Hipótese]** product markets/policy | content/flows/layout requirements; frontend runtime realization |
| Brand | **[Preferência/requirement]** brand authority | PRD constraint; Visual Direction interpretation; Design System realization |

**[Heurística]** Registrar uma fonte authoritative por concern, com references e impact links. Duplicação literal só quando exigida para uso local e com synchronization/ownership explícitos.

## Boundary rules candidatas

1. **[Heurística]** PRD diz por que/o quê/sucesso; Experience Architecture diz para quem/em qual contexto/como a experiência se comporta; Frontend Architecture diz como o target técnico realiza.
2. **[Heurística]** Experience requirement não deve prescrever component/framework sem constraint/evidence.
3. **[Hipótese]** Visual Direction é derivada de brand, content, users, tasks e accessibility; não é preference solta nem Design System completo.
4. **[Hipótese]** Design System fornece reusable decisions; product-specific flows/content permanecem fora.
5. **[Heurística]** Implementation deviation relevante volta para owner; não altera requirement silenciosamente.
6. **[Heurística]** Evaluation authority deve ser proporcionalmente separada de creator em sistemas critical/high-impact.
7. **[Heurística]** Production evidence informa revisão; não muda artifact canônico sem governance.

## Traceability model candidato

| Relação | Cardinalidade provisória | Check de integridade candidato |
|---|---|---|
| Intent → Problem/Outcome | many-to-many | intent sem outcome ou problem sem source |
| User/Actor → Need/Task | many-to-many | actor crítico sem task/permission |
| Need → Product Requirement | many-to-many | need relevante sem treatment/rationale |
| Product → Experience Requirement | many-to-many | requirement com UI impact não avaliado |
| Experience Requirement → Journey/Flow/State/Content | many-to-many/opcional | artifact sem reason; requirement órfão |
| Experience/Technical Requirement → Implementation | many-to-many | implementation element sem approved source |
| Requirement → Acceptance/Test | one-to-many quando testável | requirement sem criterion/test rationale |
| Test/Operation → Evidence | one-to-many | decision claim sem evidence/provenance |
| Change → Affected relations | graph | stale artifact/test após change |

Todas são **[Hipótese]**; etapas podem ser combinadas/omitidas com rationale. Nenhuma cardinalidade está estabilizada.

## Change impact e authority

**[Hipótese]** Requirement, actor, platform, content, brand, Policy, risk, accessibility ou integration change deve gerar impact set sobre journeys, flows, screens, content, tests, frontend architecture, analytics e docs. O owner do source aprova a mudança; owners derivados aceitam/contestam impacto; unresolved conflict escala.

**[Heurística]** Experience Decision Record leve pode registrar decision, context, alternatives, rationale, evidence, affected users, accessibility/security/performance impact, owner/date/status e consequences dentro do package/PRD/ADR conforme magnitude. Não criar tipo.

## Lacunas

- **[Hipótese aberta]** Qual camada é canônica versus view derivada no modelo futuro.
- **[Hipótese aberta]** Se Experience Architecture Package terá identidade própria.
- **[Hipótese aberta]** Critérios para elevar experience decision a ADR ou artifact próprio.
- **[Lacuna de evidência]** Matriz não foi testada em projetos; ownership e cardinalidades exigem casos.
