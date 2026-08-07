---
schema_version: 0.1.0-experimental
document_role: research_framework
title: Component and Pattern Responsibility Framework
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_as_experimental_evidence
acceptance_scope: experimental_evidence
knowledge_maturity: experimental
review_basis: ASSESS-0003
created_at: 2026-07-22
related_programs: [ARP-0009]
language: pt-BR
---

# Component and Pattern Responsibility Framework

## Propósito e restrição

**[Decisão]** Framework conceitual para comparar responsibilities e boundaries. Não define schema, component API, markup, code, page, catalog ou obrigatório minimum set.

**[Orientação institucional]** GOV.UK define components como partes reutilizáveis e patterns como soluções para tarefas/pages; WAI-ARIA APG mostra que widgets acessíveis combinam semantics, states/properties e keyboard interaction. **[Hipótese]** Tamanho visual ou número de subparts não determina a categoria: purpose, authority, recurrence e contract determinam.

## Responsibility map candidato

| Unidade | Purpose | Behavior/state | Content | Accessibility | Responsive/platform | Authority/realization | Test/lifecycle |
|---|---|---|---|---|---|---|---|
| Primitive | oferecer capacidade de baixo nível | mínimo, nativo quando possível | sem task content | não quebrar semantics nativas | adapta à platform | realization detail ou foundation | unit/compatibility; replaceable |
| Component | resolver interação/interface delimitada e recorrente | contrato explícito | constraints e examples | role/name/keyboard/focus/status | behavior e constraints | spec governada + implementations | contract, states, AT/device; versioned |
| Composite | compor units sob propósito único | coordination explícita | hierarchy/slots | relationships/focus | composition adaptation | component authority delimitada | integration + contract |
| Pattern | resolver user problem/task recorrente | flow, alternatives, recovery | task-oriented guidance | end-to-end | context/platform variants | guidance; pode usar vários components | task/usability/security; evolves with evidence |
| Layout | organizar regions/content | reflow/prioritization | capacity/measure | order, zoom/reflow | central responsibility | structural rule | viewport/container/content cases |
| Template | reutilizar composição para page class | state regions | content model constraints | landmarks/order/errors | role/permission/context adaptation | derived reusable composition | representative pages/states |
| Page/Screen | realizar contexto concreto | operational state | real data/content | full realized process | current platform | product-created instance | end-to-end and production evidence |
| Flow | conectar tasks, decisions e recovery | transitions/authority | messages/data needs | complete process | cross-channel/platform | Experience Architecture guidance | success, error, recovery, security |

Nenhuma linha decide identidade ontológica ou lugar na Project Memory.

## Component Engineering: contrato conceitual

Dimensões candidatas, proporcionais ao risco:

- identity, purpose, user need e contraindications;
- anatomy, required/optional regions, slots e composition rules;
- variants, states, transitions e impossible combinations;
- behavior, events, side effects e authority boundaries;
- content rules, localization e user/AI-generated content;
- semantic role, name, relationships, keyboard e focus;
- responsive behavior, input modes e platform conventions;
- token/decision dependencies sem values hardcoded nesta slice;
- loading, empty, error, permission, offline, sync e recovery;
- testing, compatibility, version, provenance, ownership e lifecycle.

### Quando criar, compor, especializar, duplicar ou remover

| Ação candidata | Evidência favorável | Sinal contrário |
|---|---|---|
| usar nativo | semantics/behavior satisfazem need e platform | custom need real não atendida |
| compor existentes | propósito surge de contracts compatíveis | composition cria invalid states/semantics |
| criar component | need recorrente, contract estável, owner e maintenance | uso único, apenas visual ou domain logic oculta |
| especializar | context recorrente diverge de forma delimitada | prop explosion e naming artificial |
| duplicar conscientemente | platforms/domains têm contracts incompatíveis | diferença apenas cosmética e sincronizável |
| manter fora do system | product-specific, experimental ou sem recurrence | multiple teams reinventam problema estável |
| deprecate/remove | usage/evidence caiu ou safer replacement existe | consumer inventory/migration desconhecidos |

**[Heurística]** Abstraction cost precisa ser menor que duplication/change cost ao longo do lifecycle. Reuse count isolado não decide.

## Anatomy e slots

Anatomy descreve regions e relações sem congelar DOM/platform tree. Cada region pode declarar necessity, purpose, semantic relation, content constraints, ordering e responsive behavior.

Slot candidate precisa de:

- allowed content/role e multiplicity;
- required labeling/relationship;
- empty/overflow/localized behavior;
- action hierarchy e focus order implications;
- nesting depth e forbidden combinations;
- ownership de rendering/sanitization para untrusted content.

Anti-patterns: arbitrary children como escape hatch; slot que permite heading/action hierarchy inválida; optional regions que deixam component sem accessible name; content que muda behavior implicitamente; impossible combinations aceitas por API universal.

## Variants versus states

**[Hipótese]** Variant é configuração relativamente estável escolhida para context; State é condição transitória ou operacional. Size/emphasis/layout/tone tendem a variant; hover/focus/loading/error/selected tendem a state. Ambiguidades existem: readonly/disabled podem ser policy/state persistente; density pode ser mode ou variant; permission-restricted pode mudar a própria availability.

**[Recomendação]** Classificar pela causa, duração, authority, transitions e testing consequence — não pelo nome popular de uma library.

## State completeness proporcional

State inventory candidato:

```text
default, hover, focus, active, selected, disabled, readonly,
loading, empty, partial, error, success, warning,
hidden, permission-restricted, offline, syncing
```

Nem todo component precisa de todos. Derivar states de task, input, data lifecycle, permissions, failure modes e platform. Cada applicable state precisa de entry/exit, visible and non-visual indication, allowed actions, content, accessibility announcement/focus e recovery.

**[Heurística]** Disabled não deve explicar sozinho por que action indisponível; hidden não substitui authorization; loading não pode eliminar cancel/recovery necessário.

## Content contract

Testar realistic, minimum, empty e extreme content:

- label/title/helper/error hierarchy;
- short/long words, wrapping e truncation consequence;
- localization, scripts, direction, pluralization;
- dates, numbers, currency, units e time zones;
- dynamic/user-generated/AI-generated content;
- unsafe markup, links, files e sensitive data;
- content freshness, approval e owner.

Truncation não pode ocultar distinguishing information ou error resolution. Placeholder não substitui persistent label. Generated content continua untrusted e sujeito a content/security rules.

## Accessibility contract

Para cada component aplicável:

- native semantic first; role apenas quando necessário;
- accessible name/description e relationships;
- keyboard interaction, focus entry/order/return/visibility;
- exposed states/properties e announcements;
- non-color indication, contrast e high-contrast behavior;
- target size/spacing, zoom, reflow e text resizing;
- reduced motion e time/animation controls;
- errors, instructions, validation e disabled behavior;
- assistive-technology/platform testing matrix.

**[Fato normativo]** WCAG se aplica à realized web content no scope. **[Orientação W3C]** APG oferece patterns/examples; copiar ARIA attributes sem behavior correspondente pode piorar accessibility. Documentation/specification não substitui implementation testing.

## Pattern Engineering

**[Hipótese]** Pattern candidate registra:

```text
Problem + Context + Users + Forces + Preconditions
→ Solution/Flow + Components/Content/States
→ Accessibility/Security + Alternatives/Contraindications
→ Evidence/Evaluation
```

Pattern não é categoria por complexidade. Exemplos conceituais: input é component; multi-step registration é pattern. Button é component; destructive-action confirmation é pattern. Um pattern pode recomendar solução nativa ou nenhum component compartilhado.

### Categorias para pesquisa futura, não catálogo

Authentication, onboarding, checkout, search/filter, data entry/forms, approvals, settings, navigation, dashboards, notifications, collaboration, upload/import/export, file management, messaging, billing, permissions, destructive actions, error recovery, AI interaction, human approval, agent execution, source review e audit.

Para AI/agent patterns, authority, provenance, uncertainty, preview, confirmation, cancellation, audit e recovery são forces; não se presume visual form.

## Layouts, templates e pages

- Layout: structure, order, regions, containment, measure, priority e reflow.
- Template: reusable composition com slots/content/state constraints para uma page class.
- Page/Screen: instance com real content, role, permissions, loading/error/empty state e navigation context.

**[Heurística]** Template não deve congelar page variants que precisam de distinct task architecture. Page-specific customization não deve ser elevada a shared template por conveniência.

## Responsive behavior

Breakpoints são apenas triggers possíveis. O contract precisa declarar:

- reflow/stack/collapse e reading/focus order;
- priority, disclosure e what must remain visible;
- overflow/scroll and data-table alternatives;
- navigation transformation e task continuity;
- touch, pointer, keyboard, voice e input-mode differences;
- content growth, localization e zoom;
- viewport, container, safe-area e orientation constraints;
- state preservation durante adaptation.

Container queries demonstram tecnicamente que component pode responder ao containing context, mas a specification CSS não decide product behavior. Responsive não significa esconder functionality crítica.

## Multi-platform adaptation

Preservar task, intent, semantics, authority, brand recognition e accessibility outcome. Permitir diferenças legítimas de component form, navigation, gestures, input, motion, spacing e platform conventions. Parity deve ser de capability/outcome quando requerido, não pixel equivalence.

Platform-specific implementation pode divergir; deviations precisam mapear para common decision/need, registrar consequences e ter platform owner. “Shared component” não exige single codebase.

## Testing e evaluation responsibilities

| Unidade | Evidence principal |
|---|---|
| primitive/foundation | validity, compatibility e no semantic regression |
| component | contract/state/content/keyboard/AT/responsive/API compatibility |
| pattern | task success, comprehension, errors, recovery, accessibility, security e context fit |
| layout/template | reflow, order, role/permission/content variation |
| page/flow | end-to-end requirements, complete process e production evidence |

Visual regression detecta appearance change, não correctness de semantics, behavior ou task. Automated accessibility checks são parciais. Human and assistive-technology testing continua necessário proporcionalmente.

## Anti-patterns

- component para cada elemento visual ou uso único;
- component universal com props que controlam tudo;
- business/authorization logic escondida em visual component;
- states, content extremes ou keyboard omitidos;
- pattern reduzido a composition snippet;
- page confundida com template e flow com page sequence feliz;
- slot abuse e invalid composition;
- CSS breakpoint list tratada como responsive contract;
- same component form for every platform;
- documentation e implementation divergentes;
- fork silencioso ou premature generalization;
- AI-generated API, variants e patterns aceitos sem evidence.

## Open decisions

Thresholds de recurrence/risk; primitive boundary; shared component authority; required contract fields; state vocabulary; slot constraints; platform parity; minimum testing matrix; pattern evidence threshold; fork/upstream policy; component/pattern identity and relations; deprecation semantics.

## Fontes e proveniência

Acesso em 2026-07-22:

- GOV.UK Components: https://design-system.service.gov.uk/components/
- GOV.UK Patterns: https://design-system.service.gov.uk/patterns/
- GOV.UK Contribution criteria: https://design-system.service.gov.uk/community/contribution-criteria/
- GOV.UK Extending/modifying components: https://design-system.service.gov.uk/get-started/extending-and-modifying-components/
- WAI-ARIA APG: https://www.w3.org/WAI/ARIA/apg/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- USWDS Accessibility: https://designsystem.digital.gov/documentation/accessibility/
- W3C CSS Containment Level 3: https://www.w3.org/TR/css-contain-3/
- Apple HIG Design principles: https://developer.apple.com/design/human-interface-guidelines/design-principles

Limites: nenhum contract foi instantiated, nenhuma implementação foi testada e nenhuma categoria foi promovida a schema ou catálogo.
