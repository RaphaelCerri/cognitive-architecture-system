---
schema_version: 0.1.0-experimental
document_role: research_evidence_report
title: Design Language and Design System Research Report
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

# Design Language and Design System Research Report

## Objetivo, escopo e método

**[Decisão]** Esta slice investiga como requisitos, Experience Architecture, referências e Design Direction podem informar linguagem, foundations, tokens, components e patterns. Não cria Design System executável, token, componente, schema, catálogo, UI ou escolha tecnológica.

Foram comparadas especificações W3C/DTCG, orientações oficiais de plataforma e sistemas públicos. Os exemplos observados são casos, não modelos adotados. A síntese preserva:

```text
Fato normativo != orientação institucional != evidência de adoção
Heurística != preferência != hipótese != recomendação != decisão
```

## Evidência externa selecionada

| Classe | Fonte e achado limitado | Implicação |
|---|---|---|
| Fato normativo | WCAG 2.2 define success criteria e conformance para conteúdo web em seu escopo. | Cor, texto, foco, reflow, input, status e motion precisam entrar no contrato; documentação ou aparência não provam conformidade. |
| Orientação W3C | WAI-ARIA APG descreve semantics, roles, states, accessible names e keyboard interaction para widgets; são patterns com exemplos, não certificação de qualquer implementação. | Component specification precisa declarar comportamento acessível e ainda exigir teste da realização. |
| Especificação industrial | DTCG Format 2025.10 define formato interoperável de name/value, types, groups, aliases, references, deprecation e resolução; ciclos são erro/valor desconhecido. | Tokens podem representar e transportar decisões, mas o formato não define necessidades, components, patterns ou governança de produto. |
| Orientação institucional | GOV.UK chama component de parte reutilizável e pattern de solução para tarefa/page type; exige utilidade, unicidade, owner, teste em browsers, assistive technologies e devices para contribuição. | Reuse visual não basta; recorrência, contexto, evidência e manutenção delimitam entrada no sistema. |
| Orientação institucional | USWDS separa tokens, components e patterns e declara que não pode antecipar todo contexto de accessibility/usability. | Sistema compartilhado reduz trabalho, mas consumidor continua responsável por adequação e validação contextual. |
| Orientação de plataforma | Apple HIG associa princípios, foundations, components e patterns a convenções de cada plataforma, inputs e accessibility settings. | Uma linguagem canônica pode preservar intenção, sem impor forma ou interação idêntica. |
| Orientação institucional | W3C Internationalization mostra que language/script afetam fonts, line height e processamento. | Typography e content contracts precisam aceitar scripts, fallbacks e variação, não somente Latin/default locale. |
| Especificação W3C | CSS Containment 3 diferencia viewport/media context de container context. | Responsive contract deve declarar resposta ao espaço/contexto, não apenas lista global de breakpoints. |
| Orientação de segurança | NIST SSDF pede tracking de requisitos/riscos/decisões e provenance de components; OWASP descreve riscos de third-party JavaScript. | Design System operacional futuro exigirá supply-chain, version, provenance e exception governance; nada é implementado aqui. |

## Definições candidatas e fronteiras

As definições abaixo são **[Hipóteses]**, locais e revisáveis:

| Termo | Definição candidata | Não equivale a |
|---|---|---|
| Design Direction | orientação estratégica e perceptiva escolhida para um produto/experiência | linguagem reutilizável ou implementação |
| Design Language | princípios, vocabulário, regras e decisões reutilizáveis que expressam percepção, interação, conteúdo e composição | token set, library ou CSS |
| Visual Language | dimensão visual da Design Language: hierarchy, type, color, shape, imagery, motion e composition | linguagem completa |
| Interaction Language | convenções recorrentes de action, feedback, state, transition e recovery | widget isolado |
| Design System | realização governada que combina principles, foundations, tokens, components, patterns, content/accessibility guidance, documentation, tooling, tests, releases e contribution model | component library apenas |
| Foundation | decisão ou orientação transversal de color, type, spacing, shape, elevation, motion, imagery etc. | primitive token necessariamente |
| Primitive | unidade de baixo nível sem tarefa completa; seu significado depende do domínio | component/pattern |
| Component | unidade reutilizável de interface e comportamento com propósito e contrato | estilo ou page |
| Composite Component | component composto que ainda oferece um propósito/contrato delimitado | pattern por tamanho |
| Pattern | solução contextual recorrente para problema ou tarefa, incluindo forces e contraindications | mera composição grande |
| Layout | regras estruturais de disposição e adaptação | conteúdo concreto |
| Template | composição reutilizável para classe de pages/screens | instância final |
| Page / Screen | manifestação concreta com conteúdo, estado, autoridade e contexto | template |
| Feature | capacidade de produto que pode atravessar flows/pages/components | elemento visual |
| Flow | sequência/grafo de ações, decisões, estados e recovery | page set |
| Theme | conjunto coordenado de representações para uma expressão visual | accessibility mode, brand ou platform automaticamente |
| Mode | condição selecionada pelo usuário/sistema/contexto, como contrast, motion ou density | tema apenas |
| Brand | identidade e regras distintivas de uma organização/produto | theme |
| Platform | ambiente com conventions, capabilities, inputs e constraints próprios | viewport |
| Variant | configuração relativamente estável para um contexto | state transitório |
| State | condição transitória ou operacional | variant |
| Anatomy | regiões e relações estruturais de um component | DOM obrigatório |
| Slot | ponto de composição com constraints de conteúdo/semântica | escape hatch irrestrito |
| Recipe | orientação de composição repetível, potencialmente technology-specific | type canônico |
| Design Principle | proposição durável que ajuda a decidir sob trade-off | regra testável sempre |
| Design Guideline | orientação contextual com rationale e exceptions | requisito normativo |
| Design Rule | restrição explícita aplicável a um escopo | preferência |
| Design Decision | escolha autorizada, rastreável e revisável | inferência ou token |

Nenhum termo é promovido a Knowledge Type, Ontologia ou schema.

## Design Direction versus Design Language

**[Hipótese]** Direction pode existir como escolha específica antes de haver reuse: intended perception, hierarchy, tone e constraints para um produto. Ela se torna Language somente quando decisões demonstram estabilidade, recorrência, vocabulário compartilhado e capacidade de orientar casos não copiados.

Múltiplas directions podem coexistir por product/brand/context dentro de princípios comuns. Mudança de direction deve produzir impact analysis sobre decisions, semantic representation, tokens, components, content e validation — não replacement visual cego.

```text
Needs + Requirements + Experience Architecture + Evidence
→ Candidate Direction → Governed Design Decisions
→ Reusable Design Language → Governed Realizations
```

## Design System: natureza e composição

**[Hipótese]** Design System é simultaneamente conjunto de artefatos, produto interno e capability operacional. Pode conter Knowledge e software criado, mas essas identidades e authorities não devem ser fundidas. O sistema só existe operacionalmente quando há consumers, ownership, release, support, evidence e evolution; documentação estática isolada é linguagem documentada, não prova de sistema saudável.

Composição candidata:

- purpose, principles e decision history;
- visual, interaction, content e accessibility foundations;
- semantic representation e design tokens quando necessários;
- component specifications e implementations por plataforma;
- task-oriented patterns e contraindications;
- documentation, examples e migration guidance;
- testing, compatibility, releases, contribution e support;
- adoption, exceptions, drift e product-outcome evidence.

## Maturidade sem certificação

| Estado candidato | Evidência mínima | Risco dominante |
|---|---|---|
| Informal language | decisões reconhecíveis em poucos products | inconsistência e tacit knowledge |
| Documented foundations | rationale, scope e examples revisáveis | documento sem adoção |
| Shared components | reuse real com contracts/tests | library sem patterns/governance |
| Governed system | owner, contribution, versioning, support, deprecation | process overhead |
| Multi-platform | intent mapeado a platform conventions | falsa pixel equivalence |
| Multi-brand | brand boundaries e transformations governadas | combinatorial explosion |
| Product ecosystem | adoption/outcome evidence e decentralized contribution | fragmentation e slow change |

**[Heurística]** Escolher somente a maturidade justificada por consumers, recurrence, risk e maintenance capacity. Não há score, sequência obrigatória ou maturity model aprovado.

## Foundations: decisões antes de valores

### Color

Definir semantic roles para text, surface, border, action, focus, feedback e data; avaliar contrast em cada mode/state; nunca depender de cor isolada. Palette generation, perceptual spaces e tonal scales são meios, não decisões. Brand, culture e data semantics podem conflitar e exigem priority/exception explícitas. Dark mode não é inversão: luminance, elevation, imagery, state, contrast e environment precisam ser reavaliados.

### Typography

Definir roles de display, body, label, caption, code e numeric antes de sizes. O contrato inclui family/fallback, weight, line height, tracking, measure, loading, licensing, optical/variable behavior, responsive scaling, scripts, localization e extreme content. Platform defaults e language-aware adjustments podem superar uniformidade visual.

### Spacing e layout

Scale é ferramenta de consistência, não lei universal. Relacionar rhythm, density, grid, container, gutter, intrinsic sizing, safe area, touch spacing e measure a task frequency, content e accessibility. Component response deve observar seu container/contexto e não somente viewport breakpoints.

### Shape, border e elevation

Radius, border, outline, shadow e layer precisam diferenciar containment, grouping, hierarchy, affordance e focus. Elevation decorativa sem significado aumenta ruído; focus indication não pode ser absorvida por brand styling.

### Motion

Motion pode comunicar continuity, causality, hierarchy, feedback, loading e interruption. Não substitui status e não deve ocultar mudança. Purpose, trigger, duration range, interruption, performance e reduced-motion alternative pertencem à decisão; duração universal não.

### Iconography e imagery

Icon contract considera metaphor, label, stroke/fill, optical sizing, localization, criticality e informative/decorative role. Critical action não deve depender de ícone não rotulado sem evidência. Imagery inclui purpose, crop, art direction, alt-text ownership, provenance, licensing, culture e responsive treatment; fotografia/ilustração/3D não são meros assets intercambiáveis.

## Themes, modes, brands e platforms

**[Hipótese]** Modelar eixos separados antes de combinar:

- theme: expressão coordenada;
- accessibility mode: adaptação por need/preference, como contrast/reduced motion;
- density mode: espaço/information trade-off;
- brand: identidade e authority;
- platform: conventions/capabilities;
- user customization: escolha delimitada e persistência;
- product override: exception explícita.

O número de combinações cresce multiplicativamente. Coverage matrix, supported/unsupported combinations, fallback e ownership são mais importantes que afirmar suporte nominal.

## Canonical versus derived

**[Hipótese]** Separação de responsabilidade a testar:

```text
Principles → Governed Design Decisions → Design Language
→ Semantic Representations → Token / Component / Pattern Specifications
→ Platform Representations → Runtime Implementations → Evaluation Evidence
```

Principles e decisions podem ser candidatos canônicos; tokens/specifications podem ser derived ou governed realizations; runtime code é produto criado; screenshots/tests/analytics são evidence. Esta slice não decide identity, authority, cardinality nem compilation.

## Relações com PRD, Experience Architecture e referências

- PRD mantém problema, users, outcomes, requirements, constraints e success.
- Experience Architecture mantém tasks, information, flows, states, content, accessibility e behavior requirements.
- Design Direction escolhe perceptual/visual strategy.
- Design Language generaliza decisões reutilizáveis justificadas.
- Design System operacionaliza realizações governadas.
- Frontend Architecture realiza tecnicamente, sem redefinir requirements.

Referência informa candidates; não gera token, component ou rule diretamente:

```text
Reference Analysis → Direction Candidates → Governed Decision
→ Language → Realizations → Contextual Validation
```

## Avaliação

Avaliar foundations por semantics, consistency, contrast, scale, responsiveness e platform fit; system por adoption, exceptions, drift, maintenance, release reliability e product outcomes. Consistência visual é indicador parcial. A avaliação precisa testar tasks, content, accessibility, security e implementation correspondence.

## Anti-patterns obrigatórios

- tokens antes de decisões ou como única Source of Truth;
- visual preference apresentada como universal rule;
- design system sem owner/consumer/support;
- mesma forma e interaction em todas as platforms;
- dark mode por inversão e scale universal;
- motion decorativa obrigatória;
- brand sobre accessibility;
- documentation sem implementation correspondente, ou inverso;
- component como style, pattern como component grande, template como page;
- fork silencioso, abstraction prematura e variants ilimitadas;
- output de IA aceito por coerência aparente.

## Recomendações preliminares

1. **[Recomendação]** Preservar decisions-before-tokens e task-before-component.
2. **[Recomendação]** Tratar Design Language como conjunto maior que seus valores transportáveis.
3. **[Recomendação]** Exigir accessibility/content/responsive contracts nas specifications futuras.
4. **[Recomendação]** Manter brand, mode, theme e platform como eixos distintos até evidência justificar mappings.
5. **[Recomendação]** Exigir owner, evidence, version e migration antes de chamar um conjunto de Design System governado.
6. **[Recomendação]** Validar public systems como estudos de contexto, nunca como escolha implícita de technology ou visual identity.

## Questões abertas

- Quais decisions são canônicas e quais realizations são derived?
- Que recorrência/risco justifica component ou pattern compartilhado?
- Qual minimum package é proporcional a cada product class?
- Como representar axes combinatórios sem schema prematuro?
- Quando component token reduz coupling e quando cria explosion?
- Como medir adoption sem incentivar coverage artificial?
- Quem aprova exception que melhora product fit e reduz consistency?
- Que evidência permite estabilizar uma Direction como Language?

## Fontes e proveniência

Acesso em 2026-07-22. Fontes são externas e não criam decisão local:

- W3C, WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C WAI, ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg/
- Design Tokens Community Group, Format Module 2025.10: https://www.designtokens.org/tr/2025.10/format/
- GOV.UK Design System, Components: https://design-system.service.gov.uk/components/
- GOV.UK Design System, Patterns: https://design-system.service.gov.uk/patterns/
- GOV.UK Design System, Contribution criteria: https://design-system.service.gov.uk/community/contribution-criteria/
- USWDS, Accessibility: https://designsystem.digital.gov/documentation/accessibility/
- USWDS, Design tokens: https://designsystem.digital.gov/design-tokens/
- Apple Human Interface Guidelines, Design principles: https://developer.apple.com/design/human-interface-guidelines/design-principles
- Apple Human Interface Guidelines, Accessibility: https://developer.apple.com/design/human-interface-guidelines/accessibility
- W3C Internationalization, Language on the Web: https://www.w3.org/International/getting-started/language
- W3C, CSS Containment Module Level 3: https://www.w3.org/TR/css-contain-3/
- NIST, Secure Software Development Framework: https://csrc.nist.gov/projects/ssdf
- OWASP, Third Party JavaScript Management: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html

Limites: não houve implementação, user study, token compilation, cross-platform prototype, accessibility test, adoption measurement ou legal/security assessment de fornecedor. Public design systems refletem seus próprios contexts.
