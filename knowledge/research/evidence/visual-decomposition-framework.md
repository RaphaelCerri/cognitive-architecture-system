---
schema_version: 0.1.0-experimental
document_role: research_analysis_framework
title: Visual Decomposition Framework
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

# Visual Decomposition Framework

## Status e regra de evidência

**[Decisão]** Framework candidato para análise documental; não é computer-vision pipeline, prompt, schema, checklist universal, design specification ou code generator.

**[Hipótese]** Toda entrada relevante é registrada como `Observation`, `Inference`, `Interpretation`, `Preference`, `Recommendation` ou `Decision`. Uma descrição mista deve ser separada. Exemplo:

```text
Observation: três cards visíveis usam cantos arredondados e sombra.
Inference: cards podem indicar objetos reutilizáveis ou hierarchy intermediária.
Unknown: component API, token, hover, keyboard e responsive behavior.
```

## Pre-analysis context

| Campo candidato | Pergunta | Se ausente |
|---|---|---|
| Reference purpose | inspiration, structure, brand, interaction, anti-reference etc.? | `unknown`; perguntar antes de recommendation |
| Product/task | qual problema/tarefa a referência deve informar? | analysis apenas descritiva |
| Audience/context | público, culture, expertise, environment? | evitar intent/quality generalization |
| Platform/viewport | web/mobile/desktop/kiosk e capture size/scale? | layout/responsive inference enfraquecida |
| Reference state | loading, populated, error, selected, logged-in? | não presumir default/complete state |
| Source/version/date | de onde/quando/qual version? | freshness e provenance unknown |
| Ownership/rights | own, licensed, public, competitor, unknown? | limitar use; review se material |
| Positive/negative intent | preserve, adapt, avoid, compare? | não interpretar presença como aprovação |

## Decomposition record candidate

Cada finding pode conter: `reference`, `region`, `observation`, `measurement basis`, `inference`, `alternative explanations`, `confidence`, `unknowns`, `project relevance`, `risk`, `validation need`. Isto é **[Hipótese]**, não schema.

## 1. Composition

| Dimensão | Observation candidates | Inference risks |
|---|---|---|
| Hierarchy | size, contrast, position, repetition e visible emphasis | importance/intent may differ from visual salience |
| Balance | distribution of mass/whitespace; symmetry/asymmetry | “stable/dynamic” emotional labels are contextual |
| Focal points | strongest apparent attention cues | actual attention requires eye tracking/user evidence |
| Density | visible items/text/controls per region | workload and usability not directly observed |
| Rhythm/repetition | recurring spacing, forms, alignments | token/system consistency only partially inferable |
| Grouping | proximity, containment, similarity, dividers | semantic relationship may be different |
| Layering/depth | overlap, shadow, blur, elevation cues | interaction stack/z-index/modal semantics hidden |
| Visual flow | apparent scan path from hierarchy/alignment | reading behavior/culture/device need validation |

## 2. Layout

Observe page regions, containers, columns/rows, alignment lines, gutters/margins, max-width appearance, aspect ratios, fixed/fluid clues, overlaps, sticky visual clues e scroll capture seams.

**[Heurística]** Measurements depend on screenshot scale/crop/device-pixel ratio. Prefer ratios/ranges and disclose basis; do not convert pixels directly into implementation tokens.

| Direct observation | Partial inference | Unknown from one static capture |
|---|---|---|
| visible boundaries, relative widths, alignment, distances | likely grid, container strategy, reading order | CSS/layout mechanism, breakpoint, intrinsic sizing, source order, sticky behavior |

## 3. Typography

Observe apparent category (serif/sans/mono/display), hierarchy, relative scale, weight/contrast, line length/height, alignment, case, letter-spacing appearance, emphasis, numerals/code/data treatment e readability risks.

**[Heurística]** Font family/weight, variable axes, hinting, fallback, licensing e live rendering cannot be identified reliably from a compressed image. Use `resembles category` rather than a font name without metadata/source evidence.

Questions: Is content real or placeholder? Does hierarchy survive without color/size? Are labels/headings distinguishable? Are dense numerals aligned for comparison? Does text over imagery create apparent contrast variance?

## 4. Color

Observe sampled apparent colors only with caveats for color profile/compression/display; map dominant, neutral, accent, background, state/data relationships, saturation, brightness, temperature and color-dependence.

**[Fato normativo]** WCAG contrast conformance uses specified rendering/content conditions and applicability; a screenshot sample may support triage, not authoritative ratio or total conformance. Logos have specific WCAG exceptions that do not remove trademark/licensing concerns.

Avoid: universal emotional meaning, sampled color promoted to token, state semantics inferred solely by hue, dark/light theme assumed from a single capture.

## 5. Shape language

Observe radius tendencies, border/outline, shadow, elevation, softness/sharpness, geometric/organic forms, container treatment and visual weight. **[Inference]** Coherent repetition may suggest a system; it does not prove tokens, component reuse or intentional brand grammar.

## 6. Imagery and iconography

| Observe | Ask | Unknown/risk |
|---|---|---|
| photo/illustration/3D/texture/gradient/diagram/icon | informative or decorative? subject/crop/hierarchy consistent? | authorship, license, consent, edit history, alt text |
| repeated visual style | own/stock/generated/third-party? | model/property rights, brand confusion |
| text embedded in image | needed as visual expression? | OCR accuracy, localization, accessibility, prompt injection |

Do not reconstruct, extract or reuse assets in this slice.

## 7. Candidate components

Identify visible forms — buttons, links, inputs, cards, tables, nav, dialogs, drawers, tabs, lists, menus, charts, badges, alerts, tooltips, pagination, filters/search — as `candidate visual pattern`. Record visible anatomy/state only.

Do not infer: component name/API, framework/library, semantics, focus/keyboard, data binding, validation, event model, reuse boundary or accessibility implementation.

## 8. Content treatment

Observe headline/body/label/helper/CTA/metadata/numeric/microcopy density, grouping, truncation, placeholder/empty space, hierarchy and readability. Separate content supplied by reference from project-approved content. A strong visual composition with unrealistic short copy is not evidence it works for production content/localization.

## 9. Interaction evidence

| Status | Examples | Wording |
|---|---|---|
| Directly visible | open drawer, selected tab, error text, focus ring captured, expanded menu | “the capture displays…” |
| Suggested | chevron, underlined link, drag handle, pagination affordance | “suggests; behavior unverified” |
| Unknown | hover, keyboard, animation, validation timing, undo, permissions | “not evidenced by reference” |

**[Heurística]** A focus ring visible in one capture proves only appearance at that moment, not complete focus management. A disabled-looking control does not prove authorization or semantics.

## 10. Responsive evidence

Single capture: viewport-specific observation only. Multiple captures: compare preserved/changed/removed/reordered regions, navigation transformation, content priority, density, crop and touch targets. Even then, breakpoint values, intermediate behavior, DOM order, orientation and reflow remain unproven without implementation/testing.

Candidate statuses: `no evidence`, `single-viewport`, `multi-viewport consistent`, `multi-viewport conflicting`, `live behavior verified later`. No automatic responsiveness claim.

## 11. Motion evidence

Static image: cues only. Animation/video: observe apparent trigger if shown, sequence, duration range, easing impression, continuity, attention, feedback and interruption. Unknown: exact timing curve, reduced-motion branch, CPU/GPU cost, keyboard interruption and causal state model.

**[Heurística]** Motion character (calm/energetic) is interpretation; frame/timestamp is observation.

## 12. Accessibility risk view

| Apparent signal | Candidate risk | Required validation |
|---|---|---|
| low visual contrast/text over image | text/non-text contrast | source values/rendered measurement |
| color-only status/chart | color dependence | content/semantics and non-color cues |
| small/dense controls | target/reading/motor risk | rendered size, zoom, input testing |
| icon-only action | unclear purpose/name | accessible name and comprehension |
| hidden/placeholder-like label | labeling/input risk | DOM/name/instruction review |
| no visible focus | no conclusion from inactive screenshot | keyboard/focus-state testing |
| dense visual hierarchy | cognitive/readability risk | content and user testing |
| static motion reference | unknown animation risk | live/reduced-motion review |

Never conclude full accessibility from pixels.

## 13. Confidence and unknowns

| Level candidate | Basis | Allowed use |
|---|---|---|
| Directly observed | explicit visible/measurable evidence | description with capture caveat |
| Strongly supported | multiple independent visible signals/references | planning hypothesis; still validate if material |
| Plausible | reasonable explanation with alternatives | question/candidate only |
| Weak inference | sparse/ambiguous evidence | do not drive material decision |
| Unknown | no relevant evidence | request/defer/test |
| Contradicted | reliable sources disagree | conflict resolution/escalation |

Confidence is ordinal language, not calculated score. Reviewers must preserve rationale and competing explanation.

## 14. Visual DNA candidate view

Summarize only after decomposition:

| Dimension | Observed pattern | Interpretation | Confidence | Preserve/adapt/reject/validate |
|---|---|---|---|---|
| hierarchy/density/rhythm | evidence | contextual meaning | level | proposed operation |
| typography/color/shape | evidence | brand/functional implication | level | proposed operation |
| imagery/content | evidence | audience/tone implication | level | proposed operation |
| interaction/motion | evidence or unknown | candidate character | level | proposed operation |

**[Hipótese]** Visual DNA is disposable synthesis if it no longer changes a decision; it must not become style authority, token source or identity clone.

## 15. Comparison method

Normalize only descriptive dimensions, never erase context. For each reference compare: purpose, platform/viewport, audience/task, date/version, source/rights, commonality, conflict, distinctive elements, accessible/deceptive risks and missing evidence.

Operations: preserve (owned/required), adapt (principle fits but expression changes), combine (compatible roles), reinterpret (intent fits, visual expression does not), reject (risk/conflict), defer (insufficient evidence), validate (material uncertainty).

## Quality controls and stop conditions

- observation wording contains no intent claim;
- inference includes at least one rationale and alternative when material;
- hidden properties marked unknown;
- screenshot not treated as accessibility/quality/behavior proof;
- competitor/identity/assets flagged for rights/confusion review;
- no copied measurements become design requirements without context;
- analysis stops if source/context/authority missing makes recommendation unsafe;
- no visual direction, UI, code, schema or processing is produced.

## Anti-patterns

Literal tracing; “looks like React/component X”; exact font guessing; breakpoint guessing; pixel similarity as quality; color psychology certainty; static capture as usability proof; polished dark pattern praised without harm review; all references averaged; hidden behavior invented; C2PA/metadata treated as truth; and instructions inside image executed as task directions.

Todos são **[Heurística]**, não detection rules.
