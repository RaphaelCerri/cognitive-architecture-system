---
schema_version: 0.1.0-experimental
document_role: research_evidence_report
title: Accessibility and Inclusive Experience Research Report
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0009, ARP-0007]
language: pt-BR
---

# Accessibility and Inclusive Experience Research Report

## Objetivo, escopo e epistemologia

**[Decisão]** Investigar como accessibility e inclusion entram em discovery, requirements, Experience Architecture, Design Language, components, patterns, implementation contracts, evaluation, release e production evidence. Não houve audit, test execution, conformance claim, legal opinion, tool/library selection, schema ou implementação.

```text
Accessibility != Compliance != Usability != Inclusive Design
!= Assistive Technology Compatibility != Automated Result != Certification
```

- **Fato normativo:** requirement contido em standard aplicável ao seu próprio scope.
- **Requisito legal aplicável:** obrigação depende de jurisdiction, covered entity/product/service, dates, exceptions e transposition; exige verificação jurídica concreta.
- **Orientação institucional:** interpretação/practice oficial sem autoridade normativa universal.
- **Evidência empírica / relato de usuário:** finding com sample, method e limits.
- **Claim de fornecedor:** afirmação que requer scope, version e independent evidence.
- **Resultado de ferramenta:** observação reproduzível dentro das rules/environment; não certification.
- **Hipótese/recomendação/decisão:** candidate local, proposal e authorized choice permanecem separadas.

## Landscape normativo e regulatório

| Fonte | Status e escopo verificado em 2026-07-22 | Limite para esta pesquisa |
|---|---|---|
| WCAG 2.2 | W3C Recommendation, publicada em 2023 e atualizada em 2024; success criteria para web content/conformance | não cobre toda inclusão, usability, disability need ou product operation; applicability legal não é automática |
| WAI-ARIA 1.2 | W3C Recommendation de roles, states/properties e accessibility semantics | sem behavior/host-language/AT support correto, ARIA não torna UI acessível |
| ARIA APG | recurso informativo com patterns/examples | não é standard normativo nem certificação de implementation |
| WCAG2ICT 2.2 | W3C Group Note informativa para aplicar WCAG a non-web documents/software | não cria requirements nem determina quais provisions são legally applicable |
| EN 301 549 v3.2.1 | standard europeu publicado para ICT; inclui web, documents, software, hardware e support | versão 4.1.0 estava On Approval; harmonização e versão aplicável precisam ser confirmadas no caso |
| Section 508 Revised Standards | mandatory para covered U.S. federal agencies/ICT; incorpora WCAG 2.0 A/AA com scoping/substitutions | não é obrigação universal e não equivale a WCAG 2.2 |
| Directive (EU) 2019/882 (EAA) | cobre certos products/services; aplica-se a categorias/datas do Article 2, em geral desde 28 June 2025 | national transposition, entity, exemptions e disproportionate burden exigem análise jurídica atual |
| Platform guidance | Apple/Android documentam system accessibility, semantics, text scaling, inputs e AT | guidance é platform-specific e consumer implementation continua responsável |

**[Recomendação]** Cada projeto deve resolver jurisdiction → covered scope → applicable version/date → requirement → evidence, com legal review quando material. Este relatório não oferece aconselhamento jurídico.

## Definições candidatas

| Conceito | Hipótese operacional | Fronteira |
|---|---|---|
| Accessibility | possibilidade de pessoas com disabilities/access needs perceberem, compreenderem, operarem e participarem com autonomia | não é somente conformance |
| Digital Accessibility | accessibility de ICT, content, software, documents e supporting services | não limitada a website |
| Inclusive Design | processo contextual que inclui diversidade, participation e multiple ways | não uma interface universal |
| Universal Design | ambition de uso amplo sem excluir accommodations necessárias | não garantia universal |
| Usability | effectiveness, efficiency e satisfaction em context of use | produto pode ser usable para alguns e inacessível a outros |
| Assistive Technology | hardware/software que oferece presentation, input, navigation ou transformation além do mainstream | compatibility depende de environment/version |
| Disability | interação dinâmica entre impairment/condition, activities, participation e barriers | não diagnóstico/persona |
| Impairment | diferença/perda de body function/structure | não prediz individual need |
| Limitation | constraint permanente, temporária ou situacional que pode gerar mismatch | não define identity |
| Accommodation | ajuste individual para remover barreira específica | não substitui accessible baseline |
| Adaptation | mudança de presentation/interaction para context/need | pode ser automática ou escolhida |
| Personalization | preference/profile-driven adaptation | pode expor sensitive inferred data |
| Accessibility Requirement | obrigação traceable de prevenir/remover barrier em scope | não technique/test |
| Accessibility Profile | possível conjunto contextual de needs/requirements | não type canônico nem disclosure obrigatório |
| Accessibility Contract | responsabilidades e expected behaviors ligados a artifact/flow | não schema nesta slice |
| Test | procedimento em environment declarado | não evidence suficiente isoladamente |
| Evidence | record de result, scope, environment, version, reviewer e limits | não claim global |
| Exception | desvio autorizado, scoped, expiring e mitigated | não waiver silencioso |
| Conformance Claim | declaração formal sobre standard/version/level/scope | não produzida aqui |
| Debt / Regression | barrier/risk conhecido ou perda de behavior antes sustentado | precisa owner e remediation |

```text
Requirement != Technique != Test != Evidence != Conformance Claim
```

Nenhum conceito é promovido a Knowledge Type.

## Disability e limitation models

- **Medical model:** localiza impairment/condition no indivíduo; útil em health/accommodation context, perigoso quando reduz design a “fix the person”.
- **Social model:** barrier/environment produz exclusion; orienta remover barriers, mas pode não representar todo lived experience.
- **Interactional/ICF:** functioning resulta da interação dinâmica de health, personal e environmental factors; evita inferência one-to-one.
- **Mismatch model:** design/context e capability não se encaixam; útil para permanent/temporary/situational conditions, sem substituir disability rights.
- **Capability view:** avalia meios reais de completar tasks e participar; precisa evitar score universal.

UN CRPD e WHO ICF sustentam diversidade, interaction/barrier e participation. **[Heurística]** Research deve partir de access needs/barriers no contexto, sem estereótipos, diagnosis personas ou “accessibility mode” universal.

## Access needs por domínio

- **Vision:** nonvisual operation, screen-reader semantics, magnification, zoom/reflow, contrast sensitivity, color independence, glare e field-of-view.
- **Hearing:** captions/transcripts, visual/haptic alternatives, audio control e equivalent information.
- **Motor:** keyboard/switch/voice, target/spacing, simple gestures, timing, reach e tremor tolerance.
- **Cognitive/learning:** clarity, predictability, memory burden, language, processing time, progressive disclosure, error prevention/recovery e support.
- **Speech:** alternatives to voice/speech input, authentication/recovery without speech dependency.
- **Neurological/vestibular:** flash thresholds, reduced/controlled motion, sensory load, interruption e pause/stop.
- **Situational/temporary:** sunlight/noise, injury, one hand, stress/urgency, low literacy, unfamiliar language, weak connection e shared device.

Não existe user profile universal; needs podem coexistir ou conflitar e devem ser validated with people/context.

## Accessibility discovery

Perguntas adaptativas candidates: standards/laws/scope; audiences e excluded users; predictable barriers; devices/platforms/AT/input methods; audio/video/maps/charts/documents; time/authentication/irreversible actions; drag/drop; user/AI-generated content; languages/scripts; connectivity; privacy/safety/criticality; direct research needs; evidence and owner. A profundidade cresce com novelty, affected population, task criticality e uncertainty. Nenhum questionário foi implementado.

## Semantics e native-first

**[Fato normativo]** WCAG exige programmatic information/relationships, names/roles/values e status em applicable criteria. WAI-ARIA define semantics complementares; host/native elements podem oferecer built-in semantics e behavior.

**[Recomendação]** Native semantic appropriate before custom reconstruction:

- page title, document language, headings, landmarks/regions, lists e reading order;
- real links para navigation e buttons para actions;
- labels, instructions, groups e relationships em forms;
- tables somente para tabular relationships;
- accessible name/description coerentes com visible purpose;
- status messages exposed without arbitrary focus movement.

ARIA pode ser necessária para custom widgets/dynamic relationships, mas wrong role/state/keyboard/focus pode criar false semantics. APG é informative pattern guidance; user-agent/AT differences e context exigem implementation tests.

## Keyboard, non-pointer e focus

Contract candidates: all functionality by supported non-pointer methods; logical sequential order; visible/not-obscured focus; no traps; skip mechanisms; shortcut conflict handling; escape/cancel; alternatives to drag/complex gestures; composite-widget navigation; external keyboards, switch e voice paths.

```text
DOM focus != visual focus != screen-reader reading cursor != application state
```

Focus management depende de intent: dialog entry/return, route/step change, errors, inserted/deleted content, async completion, authentication e interrupted flow. Moving focus universally on every update causes disorientation; silent context change also harms. Preserve trigger, expected task and restoration target.

## Visual accessibility

Contrast is one requirement, not complete accessibility. Review color independence, text/non-text contrast, resize, zoom/reflow, text spacing, target size/spacing, hierarchy, focus appearance, text over imagery, dense interfaces, charts/maps, icons/labels, placeholders, disabled explanations, forced colors/high contrast and user styles. Test combinations of content, states, themes and platform settings; never infer full conformance from a screenshot or palette.

## Content, forms e validation

Accessible content needs meaningful headings/labels/links/instructions, plain and context-appropriate language, defined terminology, alternative formats, captions/transcripts/audio description/text alternatives, localization and accessible generated documents. AI/user-generated content remains untrusted and needs moderation, provenance and alternative-content responsibility.

Forms require persistent labels, group/context, input purpose/autocomplete where applicable, requirements before input, errors linked and understandable, correction/data preservation, redundant-entry reduction, timeout warning/recovery, confirmation for consequential actions and accessible authentication. Security/privacy/fraud controls must be evaluated with usability/accessibility, not used as automatic override.

## Navigation, orientation e dynamic content

Navigation candidates: consistent location/identification, bypass, descriptive titles, breadcrumbs/current location, search/multiple ways where applicable, nested-context orientation and explicit SPA route/focus behavior.

Dynamic content must expose loading/progress/streaming/success/warning/error/background/queue/completion/stale/collaboration state without visual-only updates, announcement storms, duplicates, unnecessary interruption or silent failure. Choose status, live region or focus based on urgency and required action.

## Motion, sensory safety, time e sessions

Differentiate essential from decorative motion; honor reduced motion while retaining status/causality; support pause/stop/hide for applicable moving/auto-updating content; manage flash, parallax, autoplay, scrolling and vestibular risk.

Time limits need necessity, warning, extension, autosave/input preservation, reauthentication and recovery. Security expiration should minimize exposure without unnecessarily blocking task completion; background work needs completion/re-entry path.

## Authentication e identity

Evaluate password-manager and paste support, cognitive tests/CAPTCHA alternatives, one-time codes, biometrics, device change, recovery, session behavior, security questions and assisted access. WCAG 2.2 Accessible Authentication recognizes mechanisms such as password managers/copy-paste for applicable web scope. ARP-0007 retains authentication/security architecture; ARP-0009 records experience barriers and contract implications.

## Data visualization, documents e mobile

- **Data visualization:** purpose/summary, underlying data/table where useful, non-color distinctions, labels/descriptions, keyboard/focus, zoom/reflow, real-time updates and interaction alternatives. Simple alt text rarely conveys complex relationships.
- **Documents/downloads:** semantic structure, reading order, language/metadata, headings, lists, tables/forms, alternatives, generation pipeline and validation ownership across PDF/office/spreadsheet/presentation/report/export.
- **Mobile:** screen readers, touch targets/gestures, orientation, scaling/dynamic type, external keyboards, virtual keyboard, safe areas, platform settings, permissions/notifications and device variation. WCAG2ICT is informative; platform guidance supplies specific conventions.

## Cognitive e international accessibility

COGA guidance extends beyond WCAG requirements with clear content, familiar/predictable structure, adaptation, memory/error support and controlled interruption. It is informative, not a conformance extension. Avoid universal “neurodiversity” claims.

Language/script, expansion, bidirectionality, pronunciation, font coverage, dates/numbers/names/addresses, caption/translation quality and language switching affect semantics and AT output. Evidence from one language does not transfer automatically.

## Accessibility em Design Systems e patterns

Design System can preserve semantic guidance, keyboard/focus behavior, content rules, states, contrast/target/reflow/motion constraints, platform/AT notes, tests, known limitations and consumer duties. Accessible component can still be composed, configured or populated incompatibly.

Component contract candidate:

```text
Purpose; Semantic Structure; Accessible Name; Keyboard; Focus;
States/Properties; Announcements; Content; Contrast/Target;
Zoom/Reflow; Motion/High Contrast; Localization; Limitations;
Required Tests; Consumer/Implementation Responsibilities; Evidence; Version
```

Pattern accessibility covers complete task: authentication, onboarding, checkout, filtering, approvals, destructive actions, notifications, uploads, collaboration and AI/agent approval—including alternatives, errors, time, authority and recovery. No schema was created.

## AI-native accessibility

Research candidates for future realization:

- streaming announcements must be chunked/controlled and not overload;
- tool calls/background agents need status, authority, progress, cancellation and human takeover;
- uncertainty/provenance/citations cannot depend only on color or hover;
- long responses need structure/navigation/summarization without information loss;
- plans/actions should be keyboard-reviewable and editable before approval;
- multimodal inputs/outputs and generated files need alternatives and accessible review;
- multiple agents/states need stable identity, ordering and error/recovery semantics.

No frontend or interaction design was produced.

## Accessibility, privacy e security

Do not require disability disclosure to obtain access. Accessibility preferences, AT telemetry, inferred needs, support requests and research data may be sensitive; apply purpose limitation, minimization, consent/authority, retention and user control.

Tensions with ARP-0007 include CAPTCHA, timeouts, paste/password managers, obfuscated errors, reauthentication, secure upload feedback and permission explainability. Treat as joint constraints: search for solutions preserving both, record trade-off/residual risk, and escalate rather than declaring incompatibility.

## Anti-patterns e recomendações

Reject: accessibility-at-end/checklist; WCAG as complete UX; ARIA repair-all; div+role over adequate native; removed outline; partial keyboard; contrast-only; accessible-component claim without context; automated score/certification; universal overlay; unexplained disabled; placeholder-as-label; unnamed icon; motion without alternative; timeout without recovery; inaccessible CAPTCHA; blocked password manager; unstructured export; desktop/English-only tests; one participant as population; exception without expiry; debt without owner.

Recommendations:

1. Derive requirements from access need/barrier and trace through evidence/residual risk.
2. Keep normative/legal/informative/vendor/test statements explicitly classified.
3. Use native semantics and platform capabilities before custom behavior.
4. Combine standards evaluation, expert/manual tests and user participation proportionally.
5. Make accessibility a shared contract with named owner at every handoff.
6. Treat inclusion as contextual and longitudinal, not a one-time release claim.

## Questões abertas

Applicable jurisdictions/product classes; canonical artifact identity; minimum discovery/requirements package; AT/browser/language coverage; severity/exception authority; evidence freshness; AI streaming patterns; document ownership; privacy model for preferences; production signals; division with ARP-0007/legal; proportional release gates.

## Fontes e proveniência

Acesso em 2026-07-22; applicability/version must be rechecked for concrete use:

- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WCAG overview/status: https://www.w3.org/WAI/standards-guidelines/wcag/
- WAI-ARIA 1.2: https://www.w3.org/TR/wai-aria/
- APG introduction/status: https://www.w3.org/WAI/ARIA/apg/about/introduction/
- WCAG2ICT 2.2: https://www.w3.org/TR/wcag2ict-22/
- EN 301 549 v3.2.1: https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf
- ETSI Human Factors/status: https://www.etsi.org/technical-groups/hf/
- U.S. Revised Section 508 Standards: https://www.access-board.gov/ict/
- Directive (EU) 2019/882: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32019L0882
- UN Convention on the Rights of Persons with Disabilities: https://treaties.un.org/doc/Publication/CTC/Ch_IV_15.pdf
- WHO ICF: https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health
- WAI Cognitive Accessibility: https://www.w3.org/WAI/cognitive/
- WAI Involving Users: https://www.w3.org/WAI/test-evaluate/involving-users/
- Apple HIG Accessibility: https://developer.apple.com/design/human-interface-guidelines/accessibility
- Android Accessibility Principles: https://developer.android.com/guide/topics/ui/accessibility/principles
- WAI Digital Accessibility User Requirements: https://www.w3.org/WAI/research/user-requirements/

Limits: no jurisdiction-specific legal analysis, disabled-user study, implementation inspection, AT/browser test, audit, document validation, library assessment or conformance claim.
