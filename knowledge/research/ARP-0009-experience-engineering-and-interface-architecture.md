---
schema_version: 0.1.0-experimental
id: ARP-0009
kind: knowledge
knowledge_type: architectural_research_program
title: Experience Engineering and Interface Architecture
status: experimental
research_form: program
document_state: complete
governance_state: authorized
research_state: active
knowledge_maturity: evidence_gathering
outcome: null
implementation_state: not_started
operational_state: not_applicable
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
problem_statement: >-
  Investigar como transformar intenção, necessidades, requisitos, marca, conteúdo,
  tarefas, restrições, risco e referências em experiências digitais coerentes,
  acessíveis, responsivas, seguras, testáveis e tecnicamente sustentáveis sem
  reduzir interface a prompt, template, biblioteca ou framework.
research_tracks:
  - Experience Foundations
  - Experience Discovery
  - Product Requirements and Experience Traceability
  - Experience Architecture
  - Information Architecture
  - User Flow Engineering
  - Interaction Design
  - Visual Design Engineering
  - Typography Engineering
  - Color, Theme and Design Token Engineering
  - Component and Pattern Engineering
  - Responsive, Adaptive and Platform-specific Experience
  - Accessibility and Inclusive Design
  - Content Design and UX Writing
  - Visual Reference Interpretation
  - Technology Selection and Governed UI Catalog
  - Frontend Architecture and Performance
  - Security and AI-specific Interface Patterns
  - Experience Evaluation and Review Loops
  - Production Evidence and Evolution
research_questions:
  - Qual é a natureza de Experience Engineering e quais responsabilidades lhe pertencem?
  - Como derivar experiência e interface de intenção, PRD, usuário, conteúdo, marca, plataforma, risco e evidência?
  - Quais artefatos são necessários proporcionalmente e como evitar duplicação ou tipos prematuros?
  - Como interpretar referências sem confundir observação, inferência, decisão ou reprodução?
  - Como selecionar tecnologias com evidência sem popularidade, lock-in ou framework definindo o Core?
  - Como validar acessibilidade, usabilidade, qualidade visual, performance, segurança e manutenção?
scope:
  - Experience vocabulary and boundaries
  - Discovery, architecture, information, content, flows and interaction
  - Visual language, references, accessibility and responsive behavior
  - Technology selection, frontend architecture and evaluation research
  - Runtime-neutral artifact, compilation and provenance questions
out_of_scope:
  - Exhaustive research across later Experience Engineering tracks
  - Frontend implementation
  - Pages, components, design systems or schemas
  - Framework or library selection
  - Repository downloads or design-tool integrations
  - Benchmarks
  - Core Type, Ontology, ARCH-001, PRD or Roadmap V1 changes
evidence_method:
  - Primary normative and official source comparison
  - Empirical literature synthesis
  - Adaptive discovery analysis
  - Responsibility and traceability mapping
  - Proportional package option analysis
budget_or_timebox: Experience Foundations slice; max 6 iterations, 45 minutes, 6 changed files, 2 no-progress iterations
start_criteria:
  - Council authorization for a bounded substantive slice
  - Prioritized research question
  - Primary-source evidence plan
  - Explicit timebox and artifact limit
  - Overlap boundary confirmed
split_criteria:
  - Independent experience concern with distinct evidence
  - Different owner or authority
  - Scope incompatible with timebox
  - Implementation question requiring AP
pause_criteria:
  - Ontological conflict
  - Missing primary evidence
  - Unresolved overlap or authority
  - Budget reached
  - Two iterations without progress
closure_criteria:
  - Nature and boundaries assessed
  - PRD and artifact relationships clarified
  - Technology and runtime independence tested
  - Accessibility, security and evaluation requirements assessed
  - Residual decisions recorded for Council review
evaluation_criteria:
  - User and problem fit
  - Traceability and proportionality
  - Accessibility and inclusivity
  - Usability and comprehensibility
  - Visual coherence and originality
  - Responsive and platform appropriateness
  - Performance, security and maintainability
  - Provenance, portability and cost
expected_outputs:
  - Experience foundations and vocabulary hypotheses
  - Experience Architecture Package options
  - Reference interpretation and originality boundaries
  - Technology selection and catalog model options
  - Frontend architecture and evaluation research findings
evidence:
  - knowledge/research/evidence/experience-foundations-research-report.md
  - knowledge/research/evidence/experience-discovery-question-framework.md
  - knowledge/research/evidence/prd-experience-responsibility-matrix.md
  - knowledge/research/evidence/experience-architecture-package-options.md
risks:
  - Design may be reduced to decoration, prompt style or subjective scoring.
  - Frameworks, libraries or generated outputs may define the Core or a parallel Source of Truth.
  - Accessibility, content, states, performance and security may be deferred until too late.
  - References may cause copying, phishing, provenance loss or false confidence.
  - A catalog may become popularity-driven, stale or unsafe for supply chains.
  - Candidate artifacts may proliferate into premature Knowledge Types.
relations:
  - type: established_by
    target: AD-004
  - type: related_to
    target: ARP-0002
  - type: related_to
    target: ARP-0004
  - type: related_to
    target: ARP-0007
  - type: related_to
    target: ARP-0008
  - type: related_to
    target: AP-0015
  - type: related_to
    target: AP-0016
---

# ARP-0009 — Experience Engineering and Interface Architecture

## Slice ativa — Experience Foundations

**[Decisão]** Em 2026-07-22, o Conselho autorizou **Experience Foundations — Discovery, PRD Boundaries and Experience Architecture**. Os requisitos de início foram satisfeitos por autorização explícita, questão priorizada, fontes primárias selecionadas, timebox/limite de seis arquivos e fronteiras preservadas com ARP-0002, ARP-0007 e ARP-0008.

Pergunta principal: qual processo mínimo, adaptativo e governado transforma intention em Experience Architecture confiável sem UI prematura ou bureaucracy uniforme?

Entregáveis:

- Experience Foundations Research Report;
- Discovery Question Framework;
- PRD and Experience Responsibility Matrix;
- Experience Architecture Package Options.

**[Fato normativo]** A slice consultou ISO 9241-210, ISO/IEC/IEEE 29148 e WCAG 2.2 dentro do escopo declarado por suas fontes. **[Heurística institucional]** GOV.UK, W3C WAI, USWDS e NIST informaram discovery, accessibility, success e privacy de forma contextual. **[Evidência empírica]** Estudos/revisões sobre user involvement indicaram contribuição potencial e condicionada, sem justificar cerimônia universal.

**[Hipótese]** O resultado favorece discovery adaptativo, readiness explícita, traceability bidirecional e package core+modules proporcional. Identidade canônica, thresholds, cardinalidades, Question Selection Engine e minimum artifact sets permanecem abertos.

O programa permanece `active` e `evidence_gathering` porque outras slices continuam necessárias. Nenhuma próxima slice, schema, engine, frontend ou technology selection é iniciada automaticamente.

## Natureza e hipótese estratégica

Experience Engineering é uma área experimental para investigar como intenção, produto, público, conteúdo, marca, tarefas, plataforma, tecnologia, risco e referências podem ser traduzidos em experiências úteis, coerentes, acessíveis, responsivas, compreensíveis, seguras, testáveis, sustentáveis e visualmente adequadas.

```text
Product, User and Context Decisions
        ↓
Experience and Interface Decisions
        ↓
Technology-neutral Specifications
        ↓
Platform and Runtime Realizations
        ↓
Evaluation, Production Evidence and Evolution
```

Essa sequência é hipótese de pesquisa, não pipeline obrigatório. Experience Engineering poderá ser domínio, disciplina transversal, Capability, composição de Skills/processos, arquitetura especializada, conjunto de artefatos ou combinação. Nenhuma posição ontológica é decidida.

## Objetivo e princípio intention-first

Investigar como runtimes de IA governados poderão futuramente arquitetar interfaces de alta qualidade para websites, portais, conteúdo, SaaS, dashboards, sistemas internos, comércio, mobile, desktop, PWA, B2B, B2C, serviços públicos, sistemas regulados, produtos com IA e experiências multimodais sem dependência de fornecedor ou framework.

O usuário deveria expressar ideia, problema, público, objetivos, negócio, referências, preferências, restrições, marca, conteúdo, plataformas, prazo, risco e sucesso. O sistema candidato identificaria lacunas, faria perguntas proporcionais, distinguiria preferência de requisito, apresentaria alternativas, justificaria decisões, preservaria rastreabilidade e validaria resultados. Ocultar complexidade operacional não significa ocultar escolhas relevantes.

## Experience Discovery

Pesquisar discovery proporcional para:

- produto: problema, ação principal, resultado, modelo de negócio, maturidade, funções e exclusões;
- usuários: perfis, domínio, limitações físicas/cognitivas/contextuais, dispositivos, ambiente, frequência, urgência, conectividade, papéis e permissões;
- marca: personalidade, posicionamento, valor, confiança, clareza, histórico, restrições, white-label e multi-brand;
- conteúdo: origem, aprovação, manutenção, idiomas, formatos, estados e requisitos legais;
- tecnologia/operação: plataformas, browsers, SEO, autenticação, autorização, dados, integrações, offline, performance, equipe e manutenção.

Não implementar entrevista, questionário ou Skill.

## Relação com PRD

Hipótese a testar:

```text
PRD = problema, usuários, objetivos, requisitos, restrições, prioridades e sucesso.
Experience Architecture Package = jornadas, informação, fluxos, conteúdo,
interação, estados, direção visual, acessibilidade e validação.
Frontend Architecture = realização técnica governada da experiência.
```

Pesquisar ownership, referências, documentos derivados, proporcionalidade, ausência de duplicação, rastreabilidade requisito-interface, feedback ao PRD, accessibility requirements, acceptance criteria e efeitos de risco/segurança. Nenhum PRD é alterado e nenhum pacote é promovido a tipo.

## Experience Architecture e Information Architecture

Investigar relações e necessidade proporcional de User Needs, Jobs to Be Done, segmentos, Personas, Journeys, Service Blueprints, Information/Content Architecture, Navigation Models, User/Task/Page Flows, Screen Inventory, Interaction/State Models, recovery, onboarding, activation, conversion, retention, support, trust, consent e permissions.

Information Architecture cobre hierarquia, taxonomia, rotulagem, agrupamento, busca, filtros, facetas, sitemap, discoverability, findability, profundidade, carga cognitiva e consistência. Modelos de navegação candidatos incluem top, sidebar, bottom, tabs, mega menu, command palette, contextual, hub-and-spoke, steps, dashboards, nested, hybrid, search-first, object-centered e role-based. Não criar catálogo definitivo.

## User Flow e Interaction Engineering

Pesquisar happy, alternate, exception, recovery, destructive, cancellation, interruption, return, first/repeat-use, authentication, registration, account recovery, authorization failure, loading, empty, partial, degraded, offline, timeout, expired session, permission, confirmation, undo, rollback, approval, escalation, payment/integration failure e conflict resolution. Modelar transições e estados, não somente páginas.

Interaction Design inclui affordances, signifiers, feedback, system status, prevention/recovery, consistency, progressive disclosure, input, search/filter/sort, pagination, bulk actions, drag-and-drop, keyboard/focus/shortcuts, notifications, optimistic interfaces, latency masking, motion, reduced motion, touch, gestures, pointer, voice e multimodalidade. Motion deverá demonstrar compreensão, continuidade, causalidade ou orientação sem sacrificar acessibilidade, custo e performance.

## Visual, Typography, Color and Theme Engineering

Pesquisar hierarquia, composição, equilíbrio, ritmo, contraste, proximidade, alinhamento, repetição, whitespace, densidade, escala, tipografia, cor, imagery, iconografia, ilustração, visualização, motion, elevation, borders, shape language, marca, storytelling e responsive composition. Regras não serão universais: cultura, função, ambiente, plataforma, público, conteúdo, acessibilidade, tema e criticidade importam.

Typography cobre legibilidade, leitura, display/body, variable fonts, loading/fallback, multilingual coverage, line length/height, scale, hierarchy, optical sizing, weights, spacing, responsive/numeric/code typography, rendering, licença e acessibilidade.

Color/Theme cobre primitive, semantic e component colors/tokens; light, dark, high-contrast, brand, product, state e data palettes; color blindness, contraste, perceptual spaces, transformation, runtime theming, preference, white-label e multi-brand. Cor nunca será o único canal.

## Design Tokens

Pesquisar primitive/semantic/component tokens, aliases, references, modes, themes, inheritance, resolution, validation, transformations, outputs, provenance, versioning, deprecation, compatibility, naming, governance, distribution, synchronization e drift.

```text
Canonical Design Decisions
        ↓
Design Tokens
        ↓
Platform Transformations
        ↓
Web / Mobile / Desktop Representations
```

Tokens não substituem decisões de experiência nem são automaticamente Source of Truth. A especificação do Design Tokens Community Group é fonte futura, não formato adotado.

## Component and Pattern Engineering

Investigar fronteiras entre element, primitive, component, composite, pattern, block, template, page, screen, layout, feature e flow. Um componente candidato poderá descrever purpose, anatomy, variants, states, behavior, content rules, accessibility, keyboard, responsiveness, tokens, slots, composition, APIs/events, error/loading/empty/permission states, tests, provenance, compatibility, lifecycle e deprecation. Não criar schema.

Patterns são soluções orientadas a tarefas como account creation, authentication, onboarding, checkout, search, filtering, comparison, data entry, multi-step forms, settings, dashboards, approvals, file management, messaging, AI interaction, permissions, recovery, destructive actions, imports/exports, billing, invitations e collaboration.

```text
Component != Pattern != Page != Flow
```

## Responsive, Adaptive and Platform-specific Experience

Pesquisar mobile/content-first, intrinsic/responsive/adaptive design, container queries, fluid layouts, breakpoints, density/navigation transformations, tables/charts/type, touch targets, one-handed use, orientation, foldables, ultrawide, embedded contexts, bandwidth/processing constraints, safe areas, virtual keyboards e input modality. Breakpoints deveriam emergir de conteúdo e comportamento, não apenas de dispositivos populares.

Pesquisar web, PWA, iOS, Android, desktop, tablet, TV, wearable, kiosk, embedded, mixed reality, voice e conversational UI; avaliar convenções de plataforma versus consistência do produto. Apple HIG, Material Design, Fluent, padrões web e systems setoriais são fontes futuras, não linguagens adotadas.

## Accessibility, Inclusive Design and Content

Acessibilidade é transversal. Pesquisar WCAG, WAI-ARIA APG, semantic HTML, teclado, foco, screen readers, landmarks, labels, announcements, contraste, zoom, reflow, target size, reduced motion, cognitive accessibility, color independence, captions, transcripts, accessible authentication, error identification, redundant entry, localization, situational disability e assistive technology.

Automação nunca será presumida como prova completa. A estratégia futura deverá combinar static/automated checks, component/end-to-end tests, teclado manual, screen reader, zoom/reflow e testes inclusivos com usuários.

Content Design e UX Writing cobrem voice, tone, terminologia, labels, headings, instructions, calls to action, errors, empty states, confirmations, help, onboarding, readability, localization, inclusive/legal/trust content, consent, privacy, AI disclosures, uncertainty, ações destrutivas e domínios sensíveis. Conteúdo é parte da interface.

## Visual Reference Interpretation

Investigar entrada de screenshots, wireframes, moodboards, concorrentes, interfaces antigas, marcas, campanhas, ilustrações, fotos, sketches, protótipos e referências múltiplas, contraditórias ou parciais.

- **Observação:** elementos visíveis, estrutura, layout, grid, spacing, tipografia aparente, cores, contraste, components, densidade, composição, imagens, iconografia e estados visíveis.
- **Inferência:** intenção, prioridade, comportamento, estados ausentes, responsividade, tokens, marca e relações prováveis, sempre com incerteza.
- **Decisão:** preservar, adaptar, rejeitar, combinar, validar, verificar direitos, corrigir acessibilidade/requisitos e reinterpretar.

```text
Reference Inputs
        ↓
Visual Decomposition and Pattern Recognition
        ↓
Intent, Constraint and Accessibility Analysis
        ↓
Reference Synthesis
        ↓
Experience Direction and Design Decisions
        ↓
Implementation Guidance
```

Saídas candidatas incluem Reference Analysis, Visual DNA, Layout/Typography/Color Profiles, Component Inventory, Interaction/Responsive Hypotheses, Accessibility Risks, Adaptation Rules, Originality Constraints e Confidence Levels. Nenhum nome é tipo canônico e nenhuma visão computacional é implementada.

Originalidade exige distinguir inspiração, adaptação e reprodução; preservar provenance/licenças de marcas, icons, fonts, images e components; impedir phishing, imitação enganosa e clonagem superficial; e derivar decisões de princípios e requisitos.

## Technology Selection Engine e Governed UI Technology Catalog

Hipótese futura: um mecanismo explicável poderá selecionar tecnologias com base em plataforma, equipe, linguagem, rendering, SEO, accessibility, performance, complexidade, customização, design system, componentes, manutenção, maturidade, licença, bundle/tree shaking, TypeScript, theming, tests, security, lock-in, AI suitability, prazo, talentos, longevidade e runtime.

Um catálogo governado futuro registraria fonte/repositório oficial, status de manutenção, releases, licença, framework/plataforma, strengths/limitations, accessibility/customization/opinion models, TypeScript/SSR/testing, bundle, security/supply-chain, update strategy, AI suitability, use/contraindications, disposition, evidence level e last review. Não é lista de popularidade.

Categorias candidatas:

- foundations: native CSS, modules, utilities, CSS-in-JS, scoped styling, tokens e transformers;
- accessible primitives e behavior-first/headless components;
- open-code systems, registries e componentes distribuídos como fonte;
- full component systems para produto, enterprise e plataformas;
- data-heavy UI: grids, tables, virtualization, charts, diagrams, editors, calendars e schedulers;
- forms: state, validation, masks, conditional/multi-step e accessible errors;
- interaction/motion: animation, gestures, drag-and-drop, transitions e reduced motion;
- visualization: charts, maps, graphs, canvas, WebGL e spatial interfaces;
- testing: unit, component, interaction, visual, accessibility, end-to-end e performance.

Cada tecnologia deverá ser analisada em documentação e repositório oficiais, distinguindo fork, wrapper, registry, template, example, terceiro, abandonado e experimental; pesquisar maintenance, activity, releases, issues, security, license, dependencies, provenance, SBOM, compatibility e maturity. Nada será instalado, clonado ou aprovado nesta sessão.

Selection Profiles candidatos — marketing, landing, SaaS, enterprise, mobile, commerce, marketplace, content, data visualization, AI product, internal operations, accessibility-critical, high-security, white-label, multi-brand, public service e regulated product — poderão orientar discovery, flow, navigation, density, technology, components, responsiveness, content, tests, accessibility, performance, security e telemetry. Permanecem experimentais.

## Frontend Architecture, Performance and Security

Pesquisar rendering, routing, data fetching/mutations/caching, server/client/local state, forms, authn/authz, error/loading boundaries, streaming, component/feature boundaries, splitting, design-system integration, internationalization, observability, security, testing, deployment, progressive enhancement, offline/sync/conflicts e frontend-backend contracts. Biblioteca visual não define sozinha arquitetura.

Performance é experiência: pesquisar Core Web Vitals, rendering, JavaScript/CSS budgets, images, fonts, lazy loading, streaming, skeletons, optimistic feedback, prefetch/cache, interaction latency, layout stability, low-end devices, poor networks, memory, battery, long tasks e hydration.

Riscos específicos de interface devem ser relacionados ao ARP-0007: clickjacking, redirects, XSS/unsafe HTML, rendered AI injection, misleading/deceptive/dark patterns, consent, credentials, sensitive data, autocomplete/clipboard, uploads/downloads, provenance, authentication/authorization visibility, sessions, privacy/analytics, third-party scripts, registries, dependency confusion, packages e previews.

Interfaces de IA acrescentam multimodal input, streaming output, tool/action visibility, citations/provenance, uncertainty, approvals, editable plans, agent status, pause/cancel/retry/branch, feedback, memory/context/permission controls, cost, audit, action previews, reversibility, human takeover e failure explanation. O frontend futuro do próprio sistema poderá ser benchmark, não implementação autorizada.

## Evaluation and Experience Review Loops

Pesquisar um Experience Evaluation Profile sem promovê-lo a tipo: coverage, usability, task success/time/error, learnability, accessibility, responsiveness, visual consistency, content, performance, security, browser/device/localization, visual/interaction/token/component/state/flow regression, trust e comprehension.

Estratégias futuras: component documentation/testing, interaction/end-to-end, accessibility automation e manual review, visual regression/screenshot comparison, performance audits, heuristic review, cognitive walkthrough, user testing e expert design review. Nenhuma ferramenta é aprovada.

Qualidade visual deverá combinar hierarchy, alignment, spacing, contrast, density, typography, balance, rhythm, brand, component/state consistency, responsiveness, clarity, accessibility, originality, polish, platform fit, noise e cognitive load sem virar gosto ou score universal. Julgamento humano permanece necessário.

```text
Intent → Discovery → Experience Architecture → Visual Direction → Prototype
       → Automated, Visual, Accessibility and User Review → Correction
       → Approval → Implementation → Production Evidence → Evolution
```

O loop é proporcional a risco, custo, complexidade, reversibilidade, público, criticidade, maturidade e prazo; não é processo obrigatório.

## Artefatos candidatos

Questões futuras incluem Experience Brief, UX Research Plan, User Needs, Jobs to Be Done, Journey Map, Service Blueprint, Information Architecture, Sitemap, Navigation Model, User/Task Flow, Screen Inventory, Content Model, Interaction Specification, State Model, Visual Direction, Reference Analysis, Design System Profile, Token Set, Component/Pattern Inventory, Responsive Specification, Accessibility Profile, Frontend Architecture, Experience Test Plan, Design QA Report e Experience Decision Record.

Nenhum nome é promovido a Knowledge Type.

## Macro-to-Micro Roadmap

1. **Experience Foundations:** vocabulário, fronteiras, PRD, necessidades e qualidade.
2. **Discovery and Architecture:** usuários, journeys, informação, conteúdo, flows, states e plataforma.
3. **Design Language:** direção, tokens, typography, color, iconography, motion, components e patterns.
4. **Technology Selection:** frontend architecture, libraries, repositories, catalog, profiles, security e licenses.
5. **Generation:** artifacts, prototypes, pages, components, flows e runtime outputs.
6. **Evaluation:** accessibility, usability, visual testing, performance, security, regression e human review.
7. **Production and Evolution:** analytics, feedback, experiments, observability, incidents, maintenance e design-system evolution.

O Roadmap V1 não é alterado.

## Benchmarks e fontes futuras

Benchmark interno futuro: o frontend do Cognitive Architecture System, incluindo Project Memory, busca/grafo, research, proposals/decisions/governance, artifacts, execution/observability/approvals/security, onboarding, fluxo “Tenho uma ideia”, referências, geração, estado e revisão humana.

Benchmark externo futuro: uma aplicação fictícia atravessando discovery, PRD, Experience Architecture, referências, direção, tecnologia, design system, protótipo, implementação, avaliação, correções e entrega. Nenhum benchmark é iniciado.

Fontes futuras: W3C/WCAG/WAI-ARIA, Design Tokens Community Group, platform guidelines, design systems, accessible/headless/open-code components, frontend/CSS ecosystems, documentation/testing/accessibility/visual tools, design-to-code, multimodal understanding, HCI, service/content/interaction design, behavioral science e usability research. A slice Experience Foundations coletou somente a amostra registrada em seus entregáveis; outras tracks permanecem sem pesquisa substantiva.

## Guardrails

Não escolher tecnologia por popularidade ou antes do problema; tratar design/UX como decoração ou etapa final; presumir mobile-first universal; aplicar uma linguagem a todos; copiar referências ou confundir screenshot com comportamento; ignorar conteúdo/estados/testes; considerar automação prova completa de acessibilidade; confundir component/pattern/page/flow ou PRD/especificação; usar cor isoladamente ou motion sem propósito; permitir framework/runtime como Ontologia/Source of Truth; instalar sem licença/origem/segurança; pontuar estética universalmente; ou produzir clonagem enganosa.

## Fronteiras

- **ARP-0002:** mantém planejamento, compilação, coordenação e execução cognitiva geral; ARP-0009 pesquisa requisitos de experiência/interface que futuramente poderão ser compilados.
- **ARP-0004:** mantém runtime augmentation, economia e operação do runtime cognitivo; ARP-0009 pesquisa experiência e arquitetura frontend.
- **ARP-0007:** mantém segurança, assurance e guardrails transversais; ARP-0009 identifica riscos específicos de interface como input futuro.
- **ARP-0008:** mantém contratos e avaliação de artifacts cognitivos; ARP-0009 pesquisa experiência, design, interface e frontend.
- **AP-0015:** proposta especializada de frontend derivado para visualizar arquitetura; poderá ser benchmark/caso, não substitui o programa.
- **AP-0016:** proposta especializada de onboarding; poderá ser caso de experiência, não define discovery ou arquitetura geral.

Nenhum documento vizinho é alterado. Caso pesquisa futura revele sobreposição irredutível, aplicar ACP.

## Questões ontológicas abertas

- Experience Engineering é domínio, Capability, disciplina transversal ou composição?
- Experience Architecture é documento, processo ou conjunto de artefatos?
- Design System é Knowledge, sistema criado ou ambos? Tokens são canônicos ou derivados?
- Components pertencem à Project Memory ou ao sistema criado?
- Reference Analysis é evidence, specification ou derived knowledge?
- Frontend Architecture é especialização de arquitetura técnica?
- Accessibility Profile é Policy, Specification ou Guardrail Profile?
- Experience Evaluation Profile pertence a ARP-0009 ou ARP-0008?
- Technology Catalog é Knowledge, derived index ou Capability? Selection Profile é template, Policy ou heurística?
- Visual Direction é decision, specification ou evidence? Experience Decision Record precisa de tipo?
- O que é compilado por runtime e o que permanece technology-neutral?

## Restrições e próximo checkpoint

Esta slice não inicia Information Architecture/User Flows, Visual Reference Interpretation, Design System, UI Technology Catalog, Frontend Architecture, benchmark ou implementação. O programa permanece `active` e `evidence_gathering`; o próximo passo é revisão do CSA/Conselho. Qualquer nova slice exige autorização explícita e nenhuma ação começa automaticamente.
