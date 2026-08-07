---
schema_version: 0.1.0-experimental
document_role: research_options_report
title: Design Token Architecture Options
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

# Design Token Architecture Options

## Escopo e posição epistemológica

**[Decisão]** Este documento compara arquiteturas conceituais; não contém token real, value set, naming scheme aprovado, JSON, CSS, schema, transformation ou escolha de ferramenta.

**[Fato de especificação]** DTCG 2025.10 padroniza representação interoperável de tokens, types, groups, aliases/references, deprecation e resolution. **[Hipótese local]** Token é uma representação nomeada e transportável de uma decisão, não a própria totalidade da decisão nem a Source of Truth de tasks, behavior, content ou accessibility.

```text
Governed decision → semantic representation → token
→ platform transformation → runtime-specific value
```

## Critérios de comparação

- semantic clarity e traceability até decision/use;
- expressiveness para states, modes, brand e platform;
- portability sem esconder diferenças legítimas;
- accessibility coverage e capacidade de validation;
- maintenance, discoverability e migration cost;
- alias depth, cycle, collision e unused-token risk;
- change blast radius e version pinning;
- provenance, ownership, deprecation e fallback;
- combinatorial complexity e tool independence.

## Opções candidatas

| Opção | Estrutura conceitual | Adequada quando | Benefícios | Riscos / contraindicações |
|---|---|---|---|---|
| Flat set | uma camada de nomes e representações | escopo pequeno, estável e uma realization | baixa ceremony e fácil inspeção | meaning/value coupling, weak themes, rename/migration cost; evitar em multi-context |
| Primitive + semantic | raw scales referenciadas por roles de uso | multiple surfaces/states com values reaproveitados | separa palette de meaning; facilita theme mapping | primitives vazam para consumers; semantic set pode ser genérico demais |
| Primitive + semantic + component | acrescenta overrides/decisions de component | components compartilhados exigem tuning estável | localiza component change e variation | explosion, coupling ao component/API e aliases longos |
| Mode-driven | semantic roles resolvem por explicit modes | light/dark/contrast/density/reduced-motion são suportados | coverage e user/system preference explícitos | axes misturados, combinations não testadas, dark inversion |
| Multi-brand | decisions/roles resolvem por brand boundaries | white-label ou products com identities governadas | preserva shared semantics com expressão distinta | lowest-common-denominator e brand/accessibility conflict |
| Multi-platform | intent/semantics mapeiam para platform representations | web/mobile/desktop com conventions diferentes | portability de meaning, não pixels | false equivalence, transformations obscuras e owners difusos |
| Hybrid | camadas/eixos somente onde recurrence/risk justificam | ecosystem heterogêneo com maturity suficiente | proportionality e explicit local decisions | arquitetura irregular, discovery/tooling/documentation mais difíceis |

Nenhuma opção é recomendada universalmente ou aprovada.

## Camadas candidatas

### Primitive

Raw palettes/scales para color, spacing, type, radius, border, shadow, duration, easing e breakpoint-like thresholds. **[Heurística]** Primitive pode apoiar consistência, mas não deve ser usado diretamente fora de contexts permitidos sem rationale; seu nome não transforma value em meaning.

### Semantic

Roles contextuais como text, surface, action, feedback, focus e separation. **[Heurística]** Nome deve responder “para que serve?”, com scope/state quando material. Roles precisam sobreviver a value/theme change; aparência coincidente não justifica alias.

### Component

Overrides ou decisions estritamente ligados ao contract de component. Criar apenas se semantic roles globais não expressam uma necessidade recorrente e a customização tem owner/lifecycle. Component token não deve codificar DOM, framework prop ou page position.

### Alias/reference e groups

Aliases expressam relação e eliminam repetition, mas depth obscurece impact. DTCG exige resolução e trata circular reference como erro/unknown. Groups organizam; conforme a especificação, não devem inferir type/purpose. **[Recomendação]** futura validation deverá detectar cycles, broken references, incompatible type, dead alias e excessive depth.

## Naming: critérios, não convenção aprovada

**[Hipótese]** Um nome estável combina somente dimensions materialmente semânticas:

```text
domain / role / emphasis-or-context / state
```

Não é grammar ou exemplo executável. Avaliar:

- clareza de intended use e contraindication;
- independence de value, framework, file e current visual position;
- stability através de theme/brand/platform changes;
- collision avoidance e discoverability;
- state explicitness quando muda meaning;
- localization do significado sem traduzir identifiers arbitrariamente;
- migration impact e deprecation path.

Anti-patterns: nome pelo value; posição (“left” quando é logical start); framework/API; component name para role global; brand embutida em semantic role comum; níveis sem ganho; alias circular; token sem description, owner ou consumer; nome que promete accessibility não testada.

## Modes, themes, brands e platforms

Separar axes:

| Eixo | Trigger/authority | O que pode mudar | O que preservar |
|---|---|---|---|
| visual theme | product/user/system choice | palette, imagery, elevation expression | semantics, task e contrast requirements |
| accessibility mode | need/preference/system setting | contrast, motion, type/density behavior | information, operability e status |
| brand | governed identity | expression, assets, selected foundations | user need, accessibility e platform fit |
| platform | runtime conventions/capabilities | units, component form, inputs, navigation | intent, semantics e core task |
| density | user/task/context | spacing, visible information, control arrangement | target/legibility constraints |
| product override | explicit exception | narrowly scoped realization | rationale, owner, version e validation |

**[Heurística]** Declarar support matrix, fallback e forbidden combinations. “Tem dark/high contrast” não prova coverage de states, charts, imagery ou third-party content.

## Foundation-specific implications

### Color

- semantic roles e states antes de palette aliases;
- contrast validation por combination/mode/state, não por token isolado;
- color independence para status/data;
- perceptual space pode apoiar transformation, não garantir visual/accessibility outcome;
- chart series precisam de distinguishability além de hue;
- brand exception não reduz normative applicability.

### Typography

- roles semânticos antes de scale values;
- composite representation precisa acomodar family/fallback/size/weight/line height/tracking;
- script/language, optical sizing, variable axes, loading e platform scaling podem exigir derived representations;
- fixed scale não garante readable measure nem localized fit.

### Spacing, layout e responsive

- scale não determina anatomy/layout;
- logical dimensions e safe areas importam em multilingual/platform contexts;
- responsive values devem expressar behavior/constraint, não somente breakpoint name;
- container e content response podem exigir decisão fora de token.

### Shape, elevation e motion

- shape/elevation representam hierarchy, containment, interaction ou brand somente quando rationale existe;
- focus ring é accessibility behavior, não decoração substituível;
- motion representation precisa de purpose e reduced alternative; duration/easing token isolado não descreve causality/interruption.

## Resolution, fallback e inheritance

Pipeline candidato, não schema:

1. selecionar governed decision e semantic role;
2. resolver axes suportados de brand/mode/platform/context;
3. validar references/types e detectar cycle;
4. aplicar explicit override de menor scope;
5. usar fallback declarado, jamais silent guess;
6. produzir platform representation com provenance/version;
7. testar realized combination.

**[Recomendação]** Missing mapping deve falhar de forma diagnóstica em authoring/build futuro; runtime fallback precisa ser deliberate e observável. Inheritance implícita entre brands ou modes pode mascarar gaps.

## Versioning, deprecation, distribution e migration

Cada token futuro precisaria de owner, source decision, introduced/deprecated version, consumers e replacement rationale. Classificar change por semantic impact, não apenas string/value diff:

- compatible: representation muda sem quebrar intended contract validado;
- conditionally compatible: consumer assumptions podem mudar;
- breaking: meaning/name/type/removal ou output contract muda;
- emergency: security/accessibility correction com accelerated migration.

Distribution e transformation são responsabilidades de implementação futura. Pinning, changelog, compatibility matrix, codemod/tooling e migration window são candidates, não processos aprovados.

## Provenance, drift e change impact

Trace candidate:

```text
Decision → semantic role → token/version → transformation
→ product/version → component/state → test/evidence
```

Detectar futuramente unused tokens, hardcoded bypass, local aliases, unresolved/deprecated references, divergent values, unsupported mode combinations e documentation/output mismatch. Visual snapshot sozinho não explica semantic drift.

## Accessibility boundary

Token architecture pode facilitar contrast, scaling, focus e reduced motion, mas não garante semantics, accessible name, keyboard, reading order, status announcement, target layout ou complete process. WCAG conformance pertence à realized content/process. APG example não certifica component derivado.

## Decision matrix resumida

| Contexto | Menor opção plausível | Evidência adicional antes de evoluir |
|---|---|---|
| single product, one platform, few recurrent decisions | flat ou primitive+semantic | repeated change e theme need |
| multiple themes/accessibility modes | primitive+semantic, mode-aware | complete combination/state coverage |
| shared component ecosystem | optional component layer | stable component contracts e proven overrides |
| multiple brands | semantic core + explicit brand mappings | identity ownership e accessibility conflict process |
| multiple platforms | semantic decisions + platform representations | convention mapping, platform owners e parity criteria |
| mixed maturity | hybrid with declared boundaries | documentation/discovery capacity e drift controls |

## Anti-patterns e riscos residuais

- token-first design e hardcoded ungoverned values;
- “single Source of Truth” que apaga rationale, behavior e content;
- primitive exposed as public semantic API;
- component-token explosion;
- modes/themes/brands collapsed into one axis;
- automatic palette generation accepted without contextual tests;
- identical values interpreted as identical meanings;
- platform transformation used to erase native conventions;
- deprecation without consumer inventory/migration;
- tooling format treated as ontology;
- generated token relations accepted without cycle/use review.

Open decisions: canonical authority, layer thresholds, maximum alias depth, naming grammar, axes and precedence, fallback policy, version semantics, compilation owner, distribution format, conformance profile e drift thresholds.

## Fontes e proveniência

Acesso em 2026-07-22:

- DTCG Format Module 2025.10: https://www.designtokens.org/tr/2025.10/format/
- DTCG FAQ/status: https://www.designtokens.org/faq/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C Media Queries Level 5: https://www.w3.org/TR/mediaqueries-5/
- W3C CSS Containment Level 3: https://www.w3.org/TR/css-contain-3/
- USWDS Design tokens: https://designsystem.digital.gov/design-tokens/
- USWDS Theme color tokens: https://designsystem.digital.gov/design-tokens/color/theme-tokens/
- Atlassian Design Tokens (caso institucional, não adotado): https://atlassian.design/foundations/design-tokens

Limites: nenhuma opção foi instantiated, transformed, benchmarked ou tested; exemplos institucionais não provam adequação ao projeto.
