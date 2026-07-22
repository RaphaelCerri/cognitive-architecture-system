---
schema_version: 0.1.0-experimental
id: ARP-0009-E05
kind: knowledge
knowledge_type: research_evidence
title: UI Technology Landscape Research Report
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
---

# UI Technology Landscape Research Report

## Escopo, método e disciplina epistêmica

Pesquisa documental temporal, acessada em `2026-07-22`, sobre uma amostra representativa do ecossistema UI. Não é catálogo exaustivo, benchmark, teste, auditoria, recomendação de stack ou aprovação arquitetural. Nenhum pacote, repositório ou exemplo foi instalado, baixado, clonado ou executado.

Rótulos usados:

- **[Fato oficial]**: descrição, versão, licença ou política publicada pelo mantenedor; ainda pode estar desatualizada ou incompleta.
- **[Fato normativo]**: requisito dentro do escopo da especificação citada.
- **[Claim do fornecedor]**: afirmação que exige verificação independente no contexto de uso.
- **[Heurística]**: orientação contextual, não regra universal.
- **[Hipótese]**: interpretação desta pesquisa, ainda não validada.
- **[Decisão]**: somente autorização e limites expressos pelo Conselho.
- **unknown**: não confirmado nas fontes revisadas; nunca inferido.

Cada registro futuro precisa separar `source_identity`, `official_docs`, `official_repository`, `package_identity`, `release/version`, `release_date`, `license_expression`, `license_source`, `maintenance_signal`, `security/provenance`, `reviewed_at`, `evidence` e `unknowns`. Wrapper, fork, template, registry item e pacote oficial não são equivalentes.

## Resultado executivo

**[Hipótese]** A seleção governada deve começar por capability/constraint e não por framework. A paisagem contém pelo menos quatro modelos de ownership incompatíveis: dependência versionada, primitives/headless com consumer duties, código absorvido por registry e sistema completo/opinionated. Compará-los numa única pontuação ocultaria custo de integração, responsabilidade por accessibility, atualização, licença e supply chain.

**[Recomendação]** Manter shortlist por classe, aplicar hard gates antes de trade-offs e exigir validação contextual antes de qualquer disposition `Adopt`, `Adapt`, `Absorb` ou `Integrate`. Os sinais abaixo são candidatos a `Assess`; não constituem escolha.

## Paisagem por categoria

### 1. Frameworks e meta-frameworks

| Tecnologia/fonte oficial | Identidade observada | Snapshot | Evidência e limites |
|---|---|---:|---|
| [React](https://react.dev/versions) / [release](https://react.dev/blog/2025/10/01/react-19-2) | UI library; pacote oficial `react` | 19.2, 2025-10-01 | [Fato oficial] versão declarada. Não inclui routing, data layer ou aplicação completa. O blog também registra advisories de RSC; framework consumidor importa. |
| [Angular](https://angular.dev/reference/releases) | application framework e tooling oficiais | 22.x, 2026-06-03 | [Fato oficial] v22 active; v21/v20 LTS na data. Maior integração implica maior migration surface. |
| [Vue](https://vuejs.org/) | progressive framework; pacote `vue` | versão: unknown | Fonte e identidade confirmadas; versão corrente não foi confirmada com confiança nesta passagem. |
| [Svelte](https://svelte.dev/) | compiler-based UI framework; pacote `svelte` | major 5; patch/date: unknown | Fonte oficial confirma natureza; release exata permanece unknown. |
| [Astro](https://docs.astro.build/) | web framework orientado a conteúdo/islands | versão: unknown | Candidato distinto para content/marketing; não pressupor adequação a produto altamente interativo. |
| [Next.js](https://nextjs.org/docs) / [Nuxt](https://nuxt.com/docs) | meta-frameworks ligados a React/Vue | versões: unknown | Rendering, routing, server/runtime e hosting constraints devem ser avaliados separadamente da UI library. |

### 2. Styling e CSS

Native CSS, CSS Modules, utility CSS e CSS-in-JS têm authority, runtime cost e portability diferentes. [Tailwind CSS](https://tailwindcss.com/docs) é amostra utility-first; [CSS Modules](https://github.com/css-modules/css-modules) é convenção/ecossistema; [Emotion](https://emotion.sh/docs/introduction) é CSS-in-JS. Versões exatas: `unknown`. **[Hipótese]** native CSS deve permanecer baseline comparativa, não fallback inferior; styling deve ser avaliado por browsers-alvo, theming/tokens, CSP, SSR/hydration, runtime injection, dead-code behavior, ergonomia e lock-in.

### 3. Accessible/headless primitives

| Candidato | Modelo | Snapshot/licença | Observação governada |
|---|---|---|---|
| [Base UI](https://base-ui.com/react/overview/about) / [releases](https://base-ui.com/react/overview/releases) | unstyled React components | 1.6.0, 2026-06-17; MIT declarada | [Claim do fornecedor] APG/WCAG behavior e testes amplos; documentação explicita deveres do consumidor para labels, contraste e foco. Exige validação. |
| [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction) / [releases](https://www.radix-ui.com/primitives/docs/overview/releases) | unstyled React primitives | versão agregada: unknown; MIT | Changelog por packages e previews torna a unidade de versão importante. Não transportar claim de primitive para composição final. |
| [React Aria](https://react-spectrum.adobe.com/react-aria/) | behavior/hooks/components acessíveis para React | versão: unknown; Apache-2.0 | Forte separação de behavior/style; deveres de integração e matriz AT/browser permanecem. |
| [Ark UI](https://ark-ui.com/docs/overview/about) | headless, multi-framework, sobre Zag.js/FSM | versão: unknown; licença: unknown nesta revisão | Mais de 40 components é claim oficial; dependência arquitetural em state machines deve ser explícita. |

### 4. Open-code e registries

[shadcn/ui](https://ui.shadcn.com/docs) e seu [registry](https://ui.shadcn.com/docs/registry) distribuem código/arquivos para o projeto, não apenas uma dependência opaca. [Fato oficial] registries podem incluir components, config, templates, workflows e dependencies; a própria documentação recomenda revisar payload, targets, dependencies, refs e usar commit SHA. Snapshot do CLI: major 4 no changelog de 2026; patch `unknown`; licença do repositório principal: MIT.

**[Hipótese]** O modelo muda ownership: a organização absorve código e merge/update burden. Registry item, upstream component, fork local e generated variant precisam de provenance separados. Um registry remoto é superfície de supply chain e prompt/code injection, não uma fonte de autoridade arquitetural.

### 5. Full component systems

| Candidato | Snapshot | Modelo/limite |
|---|---:|---|
| [Material UI](https://mui.com/material-ui/getting-started/versions/) | v9.0.0, 2026-04; MIT core | System React opinionated; MUI X possui tiers/licenças próprios. Não projetar licença do core sobre módulos premium. |
| [Carbon](https://carbondesignsystem.com/components/overview/components/) | `@carbon/react` ^1.112.0, 2026-07-08; Apache-2.0 | Design language IBM com accessibility status por component; fit de marca e consumer changes exigem revisão. |
| [Ant Design](https://ant.design/docs/react/introduce) | versão: unknown; MIT | Sistema React amplo e opinionated; claims de acessibilidade, tokens e locale requerem componente-a-componente. |
| [Spectrum](https://spectrum.adobe.com/) | versão: not applicable/unknown | Design system e implementações Adobe não devem ser confundidos; React Spectrum/Aria/Stately têm packages e licenses distintos. |

### 6. Forms e validação

[React Hook Form](https://react-hook-form.com/), [TanStack Form](https://tanstack.com/form/latest), [Zod](https://zod.dev/) e [Ajv](https://ajv.js.org/) representam, respectivamente, form state ligado a React, form state multi-framework, schema/validation TypeScript-first e JSON Schema validation. Versões: `unknown`; licenças declaradas nos repositórios oficiais são MIT para a amostra, sujeitas a verificação jurídica. Form library não fornece por si só labels, instructions, error recovery, accessible summary, server validation ou domain rules.

### 7. Grids e tabelas

[TanStack Table v8](https://tanstack.com/table/v8) é engine headless multi-framework: entrega row models/state, não DOM/style/accessibility final. [AG Grid](https://www.ag-grid.com/javascript-data-grid/) separa Community e Enterprise e exige revisão de licença/feature boundaries; versão: `unknown`. [MUI X Data Grid](https://mui.com/x/react-data-grid/) combina integração MUI e tiers comerciais; snapshot major 9. A escolha depende de scale real, editing, grouping, server operations, keyboard/AT semantics, virtualization, export, localization, theming e custo total.

### 8. Charts e visualização

[D3](https://d3js.org/what-is-d3) é toolbox low-level sobre web standards; versão/licença no snapshot: `unknown`/ISC no repositório, a confirmar. [Vega-Lite](https://vega.github.io/vega-lite/) usa specification declarativa; a documentação de embedding mostra 6.4.3 com Vega 6.2.0 e Vega-Embed 7.1.0. [Apache ECharts](https://echarts.apache.org/handbook/en/best-practices/aria/) é charting system com orientação ARIA; versão `unknown`, Apache-2.0. Nenhuma gera automaticamente chart compreensível: data semantics, text alternative, table fallback, color/contrast, interaction e sonification permanecem produto.

### 9. Graphs e diagramas

[React Flow](https://reactflow.dev/learn/advanced-use/accessibility) oferece canvas/node graph React com keyboard/screen-reader features; release confirmada 12.7.1 em 2025-06-23, versão atual `unknown`, core MIT. [Cytoscape.js](https://js.cytoscape.org/) é graph analysis/visualization, versão `unknown`, MIT. [Mermaid](https://mermaid.js.org/) gera diagrams from text, versão `unknown`, MIT. Complex graphs exigem alternative representation, scale testing, focus order e distinction authoring/rendering.

### 10. Editors

[ProseMirror](https://prosemirror.net/), [Lexical](https://lexical.dev/) e [CodeMirror](https://codemirror.net/) representam toolkit rich-text, editor framework e code editor. Versões `unknown`; licenças MIT. Editor é high-risk surface: document model, paste/sanitization, collaboration, IME/i18n, undo, serialization, XSS, accessibility e long-term data portability devem ser gates.

### 11. Maps

[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) (BSD-3-Clause) e [Leaflet](https://leafletjs.com/) (BSD-2-Clause) são amostras; versões `unknown`. Map rendering library não resolve tiles/data licensing, geocoding provider, privacy/location consent, offline usage, keyboard alternatives ou non-visual task completion.

### 12. Calendars e scheduling

[FullCalendar](https://fullcalendar.io/docs) separa core open source e Premium; versão `unknown`. React Aria date/calendar primitives constituem opção composition-first, não scheduler equivalente. Timezone, locale/calendar system, recurrence, drag/drop alternatives, dense keyboard navigation e licensing são hard questions.

### 13. Motion

[Motion](https://motion.dev/docs) e [GSAP](https://gsap.com/docs/v3/) são amostras, versões `unknown`; licença do Motion declarada MIT, GSAP requer verificação da licença vigente. Native CSS/Web Animations permanece baseline. `prefers-reduced-motion`, interruption, main-thread cost e semantic purpose são critérios; motion não é requisito estético universal.

### 14. Drag and drop

[dnd kit](https://docs.dndkit.com/) e [Pragmatic drag and drop](https://atlassian.design/components/pragmatic-drag-and-drop/) são amostras, versões `unknown`. Pointer success não demonstra keyboard/AT equivalence. Toda ação precisa alternativa operável, announcements, focus recovery, constraints e undo quando proporcional.

### 15. Virtualization

[TanStack Virtual](https://tanstack.com/virtual/latest) e [React Virtuoso](https://virtuoso.dev/) representam engine multi-framework e React-focused; versões `unknown`, MIT declarada. Virtualization pode alterar DOM availability, find-in-page, focus, announcements, printing e test determinism; só deve entrar por evidence de volume/performance.

### 16. State e server data

[Redux Toolkit](https://redux-toolkit.js.org/), [Zustand](https://zustand.docs.pmnd.rs/), [XState](https://stately.ai/docs/xstate) e [TanStack Query](https://tanstack.com/query/latest) cobrem modelos diferentes: client state, minimal store, explicit statecharts/actors e server-state cache. Versões `unknown`; licenças MIT. Não são substitutos diretos. Authority, persistence, optimistic conflict, cancellation, offline, error/retry e devtools/data exposure devem orientar seleção.

### 17. Internationalization

[FormatJS](https://formatjs.github.io/) usa ICU Message/ECMA-402 e opera client/server; [i18next](https://www.i18next.com/) oferece framework extensível com plugins/backends. Versões `unknown`; licenças BSD-3-Clause e MIT declaradas. Avaliar extraction, translator context, rich text safety, plural/select, locale negotiation, bidi, fallback, message provenance, TMS lock-in e bundle splitting.

### 18. Token tooling

[DTCG 2025.10](https://www.designtokens.org/tr/2025.10/) é Final Community Group Report, não W3C Standard. [Style Dictionary](https://styledictionary.com/) v5 é transformer candidate; licença Apache-2.0. [Terrazzo](https://terrazzo.app/) é candidato DTCG-oriented; versão/licença `unknown`. Tooling não recebe authority sobre design decisions; resolution semantics, extensions, deterministic output, round-trip loss e migration devem ser testados futuramente.

### 19. Component docs/workbenches

[Storybook](https://storybook.js.org/docs) 10.4 (2026-05) documenta components e interaction/a11y workflows; MIT. [Fato oficial] somente major corrente é ativamente mantida e apenas latest minor recebe patches. Não é Design System, conformance proof ou production runtime por definição; addons, published previews e MCP ampliam supply-chain/data exposure.

### 20. Testing e accessibility automation

[Playwright](https://playwright.dev/docs/release-notes) 1.61, [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/docs/guiding-principles/) e [axe-core](https://github.com/dequelabs/axe-core) 4.11.4 (2026-04-28, MPL-2.0) representam browser E2E, unit/component runner, user-oriented queries e automated accessibility engine. Demais versões `unknown`; licenças Apache-2.0/MIT/MIT. **[Fato normativo]** nenhuma ferramenta automatizada prova WCAG completa; manual, AT e user evidence continuam necessárias conforme o framework de acessibilidade já registrado.

### 21. Performance

[Core Web Vitals](https://web.dev/articles/vitals) mantém LCP, INP e CLS como field metrics; thresholds oficiais observados são 2.5 s, 200 ms e 0.1 no percentil 75. São sinais, não quality score universal. Seleção precisa budgets por route/device/network, field e lab evidence, JS/CSS/runtime cost, hydration, memory, battery, long tasks e failure behavior. Bundle-size claims sem scenario/build/version são insuficientes.

### 22. Security e supply chain

[NIST SSDF 1.1](https://csrc.nist.gov/projects/ssdf) organiza práticas outcome-based e inclui provenance; [npm provenance](https://docs.npmjs.com/generating-provenance-statements/) liga package a source/build quando disponível; [SLSA](https://slsa.dev/spec/) e [OpenSSF Scorecard](https://scorecard.dev/) são sinais complementares, não garantias. Verificar identity, typosquat/dependency confusion, maintainers, release signing/attestation, security policy/advisories, transitive graph, install scripts, lock/pin, SBOM, vulnerability response e registry/code payload.

### 23. Licensing

License string não basta: confirmar arquivo/licença por pacote e versão, copyright notices, dependencies, fonts/icons/assets/data, commercial tiers, SaaS/hosting terms, trademark e redistribution/modification duties. `MIT`, `Apache-2.0`, `BSD-*`, `ISC` e `MPL-2.0` têm obrigações diferentes; qualquer conclusão jurídica permanece fora desta pesquisa. Informação ausente é `unknown` e aciona Legal/Procurement quando aplicável.

## Accessibility e AI suitability

Accessibility suitability deve avaliar output semântico real, keyboard/focus, announcements, high contrast/forced colors, zoom/reflow, reduced motion, localization/bidi, consumer duties, documented test matrix, known limitations e evidence freshness. Claim do mantenedor nunca se converte em conformance do produto.

AI suitability não significa “há MCP” ou “LLM conhece a biblioteca”. Critérios candidatos: documentação estável e versionada; APIs/composition previsíveis; types; examples com provenance; machine-readable metadata; bounded generation surface; deterministic validation; migration/deprecation signals; accessibility contracts; licença; ability to constrain packages/registries; reviewable diffs; resistance to hallucinated APIs; e separation entre generated proposal e approved artifact. Registries e agent integrations também aumentam prompt/content/supply-chain risks.

## Antipadrões observados

- escolher framework antes do product/experience profile;
- comparar stars/downloads como qualidade ou longevidade;
- misturar primitive, open-code e full system numa scorecard única;
- assumir “accessible by default” como conformance;
- registrar versão sem data, package/source identity ou release channel;
- inferir licença do site, monorepo ou core para todos os assets/tier;
- aceitar wrapper/fork porque o nome parece oficial;
- copiar registry item sem payload/dependency/provenance review;
- maximizar capabilities e dependencies sem necessidade demonstrada;
- usar AI familiarity como aprovação; ou congelar `Adopt` sem expiry/review trigger.

## Lacunas e próximas perguntas

Não houve execution evidence, package metadata/API verification, dependency graph, vulnerability scan, bundle measurement, browser/AT matrix, migration exercise, legal review, maintainer interview, user study ou product profile concreto. Versões marcadas `unknown` precisam ser resolvidas no momento de uma decisão real. O Conselho ainda deve decidir authority, ownership, disposition vocabulary, review cadence, hard gates, exception flow e quais profiles merecem avaliações aprofundadas.
