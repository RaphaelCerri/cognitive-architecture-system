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
  - Information architecture and navigation model comparison
  - Flow, state, recovery and artifact selection analysis
  - Visual reference decomposition and interpretation analysis
  - Originality, accessibility, provenance and reference-security assessment
  - Design-language, token-architecture and component-pattern responsibility comparison
  - Design-system governance, change-impact, drift and risk assessment
  - Accessibility normative, inclusive-experience and user-needs synthesis
  - Accessibility requirements, responsibility, evaluation and procurement-criteria analysis
budget_or_timebox: Accessibility and Inclusive Experience Engineering slice; max 6 iterations, 45 minutes, 6 changed files, 2 no-progress iterations
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
  - Design Language and Design System boundary hypotheses
  - Design token architecture options
  - Component and Pattern responsibility framework
  - Design System governance and risk findings
  - Accessibility and Inclusive Experience evidence synthesis
  - Accessibility responsibility and requirements framework
  - Accessibility evaluation and evidence model
  - Accessibility technology and procurement criteria
  - Technology selection and catalog model options
  - Frontend architecture and evaluation research findings
evidence:
  - knowledge/research/evidence/experience-foundations-research-report.md
  - knowledge/research/evidence/experience-discovery-question-framework.md
  - knowledge/research/evidence/prd-experience-responsibility-matrix.md
  - knowledge/research/evidence/experience-architecture-package-options.md
  - knowledge/research/evidence/information-architecture-navigation-research-report.md
  - knowledge/research/evidence/navigation-model-decision-matrix.md
  - knowledge/research/evidence/user-flow-state-modeling-framework.md
  - knowledge/research/evidence/ia-flow-artifact-selection-guide.md
  - knowledge/research/evidence/visual-reference-interpretation-research-report.md
  - knowledge/research/evidence/visual-decomposition-framework.md
  - knowledge/research/evidence/reference-translation-decision-framework.md
  - knowledge/research/evidence/reference-risk-guardrail-assessment.md
  - knowledge/research/evidence/design-language-design-system-research-report.md
  - knowledge/research/evidence/design-token-architecture-options.md
  - knowledge/research/evidence/component-pattern-responsibility-framework.md
  - knowledge/research/evidence/design-system-governance-risk-assessment.md
  - knowledge/research/evidence/accessibility-inclusive-experience-research-report.md
  - knowledge/research/evidence/accessibility-responsibility-requirements-framework.md
  - knowledge/research/evidence/accessibility-evaluation-evidence-model.md
  - knowledge/research/evidence/accessibility-technology-procurement-criteria.md
risks:
  - Design may be reduced to decoration, prompt style or subjective scoring.
  - Frameworks, libraries or generated outputs may define the Core or a parallel Source of Truth.
  - Accessibility, content, states, performance and security may be deferred until too late.
  - References may cause copying, phishing, provenance loss or false confidence.
  - A catalog may become popularity-driven, stale or unsafe for supply chains.
  - Candidate artifacts may proliferate into premature Knowledge Types.
  - Tokens may become a parallel Source of Truth or explode across components, modes, brands and platforms.
  - Shared components may amplify accessibility, security, supply-chain or deceptive-design defects.
  - Design-system governance may create either silent drift or disproportionate process overhead.
  - Accessibility may be reduced to checklist, automated score, vendor claim or late audit.
  - Legal and normative applicability may be misstated across jurisdictions, versions and product scopes.
  - Accessibility evidence may become stale across content, platform, browser, assistive-technology and dependency changes.
  - Security, privacy or supplier controls may create barriers or expose sensitive accessibility preferences.
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

## Slice ativa — Accessibility and Inclusive Experience Engineering

**[Decisão]** Em 2026-07-22, após o checkpoint 3fa374a2b7f49c0cfc7722842b490dbc04d677c6, o Conselho autorizou exclusivamente esta slice documental. Foram investigados standards/regulation scope, disability/access-needs models, discovery, traceable requirements, responsibility, semantics/native-first, keyboard/focus, visual/content/forms/navigation/dynamic/motion/time/auth/data/document/mobile/cognitive/international accessibility, Design System/component/pattern/AI contracts, evaluation/evidence, governance, procurement, security e privacy. Nenhuma auditoria, conformance claim, tool/library selection, schema, component, frontend ou implementação foi realizada.

Pergunta principal: como transformar accessibility e inclusion needs em requirements rastreáveis, experience decisions, implementation contracts, validation methods e evidence, sem reduzir o tema a checklist ou automated conformance claim?

Entregáveis:

- Accessibility and Inclusive Experience Research Report;
- Accessibility Responsibility and Requirements Framework;
- Accessibility Evaluation and Evidence Model;
- Accessibility Technology and Procurement Criteria.

**[Fato normativo]** WCAG 2.2 e WAI-ARIA 1.2 possuem scopes normativos próprios; APG e WCAG2ICT são informative guidance. **[Requisito legal potencial]** EN 301 549, Section 508 e Directive (EU) 2019/882 dependem de jurisdiction, covered scope, version/date e exceptions, exigindo verificação concreta. **[Orientação institucional]** WAI, WHO/UN, platform guidance, Access Board/Section508.gov, NIST e OWASP informaram user needs, evaluation, procurement, security e privacy boundaries.

**[Hipótese]** O resultado favorece access need → barrier risk → requirement → experience/implementation responsibility → test → scoped evidence → residual risk, com native-first semantics, triangulated evaluation, explicit consumer duties e lifecycle revalidation. Accessibility, compliance, usability, inclusive design, AT compatibility, test result e certification permanecem distintos.

O programa permanece active e evidence_gathering. Technology Catalog, Frontend Architecture, integrated evaluation e benchmarks não são iniciados automaticamente.

## Slice concluída — Design Language, Design Tokens, Components and Patterns

**[Decisão]** Em 2026-07-22, após o checkpoint 42cd6ce338b09f12e1e1bd81f9c95445ab04de39, o Conselho autorizou exclusivamente esta slice documental. Foram investigados Design Direction/Language/System, maturity, foundations, token options/layers/naming/modes, component/pattern responsibilities, responsive/multi-platform adaptation, governance, change impact, debt/drift, accessibility, security e riscos de geração por IA. Nenhum token, component, UI, schema, catalog, framework, package ou implementação foi criado.

Pergunta principal: como definir uma linguagem de design suficientemente estruturada para preservar intenção, consistência, acessibilidade e portabilidade, sem transformar o sistema em coleção rígida de estilos ou components?

Entregáveis:

- Design Language and Design System Research Report;
- Design Token Architecture Options;
- Component and Pattern Responsibility Framework;
- Design System Governance and Risk Assessment.

**[Fato normativo]** WCAG 2.2 condiciona eventual realized web content no escopo; não escolhe linguagem, component ou architecture. **[Especificação industrial]** DTCG 2025.10 define interoperable token format e resolution, não toda a design authority. **[Orientação institucional]** WAI-ARIA APG, GOV.UK, USWDS, W3C I18N/CSS e Apple HIG informaram accessibility contracts, component-pattern boundaries, responsive context e platform adaptation. NIST/OWASP informaram supply-chain/provenance risks.

**[Hipótese]** O resultado favorece needs/tasks → governed decisions → Design Language → proportional semantic/token/component/pattern realizations → platform implementation → evaluation evidence. Tokens não são única Source of Truth; component não é style; pattern resolve problema recorrente; portability não é pixel equivalence. Definitions, canonicity, layers, naming, thresholds, roles, process, schemas e controls permanecem abertos ao Conselho.

O programa permanece active e evidence_gathering. Accessibility aprofundada, Technology Catalog, Frontend Architecture e benchmarks não são iniciados automaticamente.

## Slice concluída — Visual Reference Interpretation and Design Intent Extraction

**[Decisão]** Em 2026-07-22, após o checkpoint 0cb6b4fd9aa1cd99d459cbe42ad47aee65e19919, o Conselho autorizou exclusivamente esta slice documental. Foram investigados context-first reference intake, visual decomposition, observation/inference separation, confidence, Visual DNA, design intent, comparison/conflict, translation/traceability, accessibility, originality/IP, deceptive design, provenance, reference security e multimodal prompt injection. Nenhuma referência real foi processada e nenhuma UI, direction visual, schema, vision/OCR pipeline, integration ou implementação foi criada.

Pergunta principal: como transformar referências visuais em evidence estruturada e orientação de design, preservando intenção, contexto, originalidade, acessibilidade, rastreabilidade e incerteza?

Entregáveis:

- Visual Reference Interpretation Research Report;
- Visual Decomposition Framework;
- Reference Translation and Decision Framework;
- Reference Risk and Guardrail Assessment.

**[Fato normativo]** WCAG 2.2 condiciona eventual implementação web aplicável, mas pixels isolados não comprovam conformance. **[Orientação institucional]** WAI/USWDS/GOV.UK informaram evidence/context discipline; FTC/EDPB, deceptive design; Copyright Office/USPTO, IP boundaries; C2PA/NIST/OWASP, provenance/privacy/untrusted-content risks. **[Evidência empírica]** visual-aesthetics/cultural studies and emerging visual-prompt-injection research support multidimensional/contextual assessment and explicit security uncertainty.

**[Hipótese]** O resultado favorece context → observation → inference/alternatives/confidence → relevance → adaptation → governed decision, tradução de principles em vez de pixels e referência como untrusted data without authority. Visual DNA, confidence vocabulary, inventory fields, artifact identity, guardrails, relations, thresholds e automated interpretation permanecem abertos.

O programa permanece active e evidence_gathering. Design Language, Design System, tokens, components, catalog, frontend e benchmarks não são iniciados automaticamente.

## Slice concluída — Information Architecture, Navigation and User Flow Engineering

**[Decisão]** Em 2026-07-22, após o checkpoint e5104dc47bbfeabf58be24046359f50d072f0932, o Conselho autorizou exclusivamente esta slice. Foram investigados IA, objects, taxonomy, labels, navigation, search/filter, flows, states, recovery, permissions, proportional artifact selection, responsive/accessibility e AI-native implications. Nenhuma UI, wireframe, schema, engine, tecnologia ou implementação foi produzida.

Pergunta principal: como organizar informação e comportamento para permitir que usuários encontrem, compreendam e concluam tarefas com ambiguidade, carga e risco apropriados ao contexto?

Entregáveis:

- Information Architecture and Navigation Research Report;
- Navigation Model Decision Matrix;
- User Flow and State Modeling Framework;
- IA, Flow and Artifact Selection Guide.

**[Fato normativo]** WCAG 2.2 condiciona a realização web quando aplicável, inclusive orientation, navigation consistency, complete processes, errors, status e reflow; não escolhe uma IA ou menu. **[Orientação institucional]** WAI, GOV.UK e USWDS informaram patterns e proportional selection dentro de seus contextos. **[Evidência empírica]** estudos selecionados mostraram que card/tree testing e menu/evaluation methods dependem de configuração, contexto e pergunta.

**[Hipótese]** O resultado favorece task/object/state/authority before pages, escolha contextual de navigation, flow completeness proporcional e question → minimum artifact → evidence → decision → expiry. Definições, minimum sets, thresholds, cardinalidades, states compartilhados e engine de seleção permanecem abertos.

O programa permanece active e evidence_gathering. Visual Reference Interpretation, Design System, catalog, frontend e benchmark não são iniciados automaticamente.

## Slice concluída — Experience Foundations

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

Esta slice não executa audit, test automation, conformance claim, certification, library/tool selection, catalog, frontend, benchmark, schema ou implementação. O programa permanece active e evidence_gathering; o próximo passo é revisão do CSA/Conselho. Qualquer nova slice exige autorização explícita e nenhuma ação começa automaticamente.
