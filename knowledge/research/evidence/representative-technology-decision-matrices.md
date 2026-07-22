---
schema_version: 0.1.0-experimental
id: ARP-0009-E08
kind: knowledge
knowledge_type: research_evidence
title: Representative Technology Decision Matrices
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
---

# Representative Technology Decision Matrices

## Como ler

Matrizes documentais ilustrativas, baseadas em fontes oficiais acessadas em `2026-07-22`. `Partial` significa coverage condicionada/deveres do consumidor; `unknown` significa não verificado. Não houve execução. Nenhuma célula é aprovação, conformance claim ou decisão de stack. A única disposition analítica permitida nesta slice é “candidate for Assess”, sem efeito governamental.

## Accessible primitives

| Candidato | Framework/model | Accessibility evidence | Styling/ownership | Freshness snapshot | Principais unknowns | Leitura |
|---|---|---|---|---|---|---|
| Base UI | React, unstyled components | official APG/WCAG behavior claim, test statement; consumer labels/contrast/focus duties | consumer owns CSS | 1.6.0, 2026-06-17 | independent AT matrix, composed-flow result | candidate for Assess em React custom-language profile |
| Radix Primitives | React, primitives/packages | official accessibility intent/changelogs | consumer owns style/composition | current aggregate version unknown; recent changelog reviewed | package-by-package versions/tests, long-term direction vs Base UI | candidate for Assess; identity/version precision required |
| React Aria | React, hooks/components + Stately | official Adobe accessibility guidance | flexible, behavior-heavy | version unknown | exact release/support matrix, integration burden | candidate for Assess where behavior evidence outweighs styling completeness |
| Ark UI | React/Vue/Solid/Svelte, Zag/FSM | official APG pattern claims by component | consumer styling; FSM dependency | version/license unknown | AT matrix, adapter parity, release/license snapshot | Insufficient Evidence until identity/license/freshness complete |

Key constraint: a primitive’s semantics can be invalidated by consumer markup, styling, content, virtualization e composition.

## Component systems

| Candidato | Breadth/opinion | Accessibility evidence | License/commercial | Snapshot | Fit tension | Leitura |
|---|---|---|---|---|---|---|
| Material UI | broad React system | component docs/claims; local validation absent | MIT core; X tiers separate | v9.0.0, 2026-04 | Material language/customization, React lock, runtime/style choices | candidate for Assess for React breadth profiles |
| Carbon | IBM language + React implementation | per-component status includes automated/manual signals | Apache-2.0 | `@carbon/react` ^1.112.0, 2026-07-08 | brand fit, IBM-specific patterns, consumer modifications | candidate for Assess for enterprise/public evidence-heavy profiles |
| Ant Design | broad React system | official component guidance; depth not reviewed | MIT | version unknown | design-language fit, locale/a11y verification | Insufficient Evidence for decision |
| Spectrum family | Adobe language + separate Aria/Stately/React Spectrum | strong official accessibility intent | package-specific; exact snapshot unknown | unknown | distinguish design system from implementations/packages | Insufficient Evidence until units are separated |

Primitive e full system are not substitutes at equal cost: the first shifts visual/integration responsibility to consumer; the second imports more language/API/migration constraints.

## Grids e tables

| Candidato | Model | Capability signal | Accessibility responsibility | License | Unknown/gate |
|---|---|---|---|---|---|
| Native HTML + local behavior | platform | baseline tables; custom complex features | consumer, but native semantics available | not applicable | complexity/scale may exceed sustainable build |
| TanStack Table v8 | headless engine, multi-framework | sorting/filtering/grouping/state APIs | markup, keyboard and virtualization integration owned by consumer | MIT | critical grid semantics/AT must be designed/tested |
| AG Grid | rendered grid; Community/Enterprise | broad enterprise feature set claim | vendor + consumer integration; verify component/version | dual tier; exact terms require review | license/TCO, bundle, AT matrix, version unknown |
| MUI X Data Grid | React/MUI, tiered | integrated grid/features | vendor + consumer; tied to MUI | community/commercial tiers | MUI fit, tier boundary, v9-specific evidence |

Decision hinge: data scale, editing/grouping, server operations, keyboard model, alternate views, localization, virtualization, export, support e TCO. “Most features” is not a universal winner.

## Charts

| Candidato | Abstraction | Strength signal | Accessibility burden | Snapshot | Leitura |
|---|---|---|---|---|---|
| Native SVG/Canvas/HTML | platform | maximum ownership/control | entirely consumer; Canvas needs alternative | n/a | baseline for bounded bespoke needs |
| D3 | low-level primitives | flexibility over SVG/Canvas/web standards | consumer authors semantics/alternatives | version unknown; ISC to verify | Assess for bespoke visualization expertise |
| Vega-Lite | declarative grammar | compact specification/composition | generated output still needs accessible narrative/fallback | 6.4.3 observed in official embed docs | Assess where declarative portability fits |
| Apache ECharts | higher-level chart system | broad chart types and ARIA option | ARIA option is not comprehension/conformance | version unknown; Apache-2.0 | Assess only after output/AT/performance evidence |

Chart requirement must include question communicated, data/uncertainty, text/table alternative, color independence, keyboard/AT, responsiveness e data volume—not “render chart”.

## Graphs e diagrams

| Candidato | Primary use | Accessibility signal | Risks | Snapshot |
|---|---|---|---|---|
| React Flow | interactive node editor | official keyboard/focus/live text features | React coupling, large graph/semantic model, alternative representation | 12.7.1 known 2025-06; current unknown |
| Cytoscape.js | graph visualization/analysis | evidence not reviewed | complex canvas interaction, scale, nonvisual alternative | version unknown |
| Mermaid | text-to-diagram | source text auditable | generated SVG semantics/security of untrusted diagrams | version unknown |

These solve different authoring/interaction jobs. A graph editor, analytical network e documentation diagram must not share a shortlist solely because all draw nodes/edges.

## Testing e workbench

| Candidato | Layer | Evidence value | Boundary | Snapshot |
|---|---|---|---|---|
| Vitest | unit/component runner | fast code/component feedback claim | not browser/AT/user evidence by itself | version unknown |
| Testing Library | query/testing approach | encourages user-facing semantics | depends on environment and test design | version unknown |
| Playwright | browser E2E | real browser engines, interaction, traces | scripted coverage is not user/AT evidence | 1.61 |
| axe-core | automated a11y rules | repeatable detectable-rule evidence | incomplete WCAG coverage; result scoped to DOM/state | 4.11.4, 2026-04-28; MPL-2.0 |
| Storybook | component workbench/docs | isolated states, interaction/a11y integrations | not production integration or Design System authority | 10.4, 2026-05 |

**Combination hypothesis:** component workbench + semantic queries + browser flows + automated a11y + manual keyboard/AT + inclusive user research are complementary layers, not one tool choice. Exact combination depends on profile and must be authorized/tested later.

## Token tooling

| Candidato | Role | Standard relation | Runtime/ownership | Snapshot | Unknowns |
|---|---|---|---|---|---|
| DTCG format/resolver | specification, not tool | 2025.10 stable Community Group report, not W3C Standard | no runtime prescribed | 2025.10 | project extensions/authority still undecided |
| Style Dictionary | transform/build tooling | v5 supports token workflows; exact DTCG coverage requires test | generated outputs; team owns config/transforms | major 5 | exact version, round-trip/loss, custom transform cost |
| Terrazzo | DTCG-oriented tooling candidate | official claim needs versioned verification | build/tool surface | unknown | version, license, maturity, plugin/supply-chain model |
| local minimal transform | owned build code | can target subset | maximum local responsibility | n/a | maintenance/interoperability opportunity cost |

Tool support for DTCG syntax does not decide canonical token authority, naming, modes, platform transforms or Design System governance.

## Cross-class combination sketches

| Need profile | Minimum-first combination to assess | Competing combination | Evidence needed before decision |
|---|---|---|---|
| branded workflow app | native HTML/CSS + selected primitives | full component system | critical flows, theming cost, AT/browser, team throughput, migration |
| dense internal operations | system + grid tier | primitives + headless table | editing/keyboard/AT, dataset, license/TCO, server ops, performance |
| content site with few interactions | platform/native + content framework | client-heavy meta-framework/system | field performance, authoring, SEO, interactive islands, operations |
| graph-centric product | graph engine + accessible alternate representation | bespoke SVG/D3 | scale, editing semantics, nonvisual completion, persistence/security |
| multi-brand platform | token pipeline + primitives/system adapter | separate systems per brand | authority, theme isolation, output determinism, upgrade/drift |

Estas combinações são perguntas de avaliação, não recomendações.

## Minimal dependency comparison

| Strategy | Potential benefit | Hidden cost/risk |
|---|---|---|
| platform-first | low supply-chain/runtime surface | local behavior/a11y expertise and cross-browser work |
| cohesive full system | fewer integration seams | imported opinion, breadth unused, lock/license/migration |
| composable headless stack | precise design and replaceable layers | many seams, duplicated behavior, consumer duties |
| open-code absorption | direct control, reviewable source | permanent local ownership, drift and provenance |
| many best-of-breed packages | specialized capability | dependency graph, focus/style/state conflicts, agent confusion |

“Minimal” deve minimizar total risk/ownership for required capability, não apenas package count.

## Snapshot de fontes e confiança

High confidence nesta passagem: React 19.2; Angular 22 support state; Base UI 1.6.0; Material UI 9.0.0; Carbon React ^1.112.0; Vega-Lite example 6.4.3; Storybook 10.4; Playwright 1.61; axe-core 4.11.4; DTCG 2025.10. Medium: major/model/licença quando official repository/docs foram observados mas patch não. Low/unknown: toda versão/licença explicitamente marcada.

Antes de recommendation real, refazer snapshot na data, confirmar exact package/version/license/repository e reunir local/contextual evidence. Esta matriz expira para decisão quando qualquer candidate material muda ou no máximo em `2027-01-22`; a data é guardrail documental candidato, não policy aprovada.
