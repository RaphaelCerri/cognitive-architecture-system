---
schema_version: 0.1.0-experimental
document_role: research_evidence_report
title: Visual Reference Interpretation Research Report
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

# Visual Reference Interpretation Research Report

## Objetivo e método

**[Decisão]** Esta slice investiga como referências visuais podem informar decisões de experiência e design sem image processing, OCR, multimodal integration, UI, code, schema, cloning ou geração de direction visual.

Disciplina obrigatória:

```text
Observation != Inference != Interpretation != Preference != Recommendation != Decision
```

- **[Hipótese] Observation:** descrição do que está visível ou mensurável, limitada pela qualidade e pelo recorte da fonte.
- **[Hipótese] Inference:** explicação possível sobre intenção, comportamento ou sistema não diretamente observado.
- **[Hipótese] Interpretation:** síntese contextual de observations, evidence e competing inferences.
- **[Preferência] Preference:** aspecto que stakeholder deseja preservar/evitar; não cria obrigação por si só.
- **[Recomendação] Recommendation:** proposta condicionada a goals, requirements, evidence, constraints e risks.
- **[Decisão] Decision:** escolha autorizada com owner, scope, rationale e consequences.

## Evidência externa selecionada

| Categoria | Fonte e achado limitado | Implicação para a slice |
|---|---|---|
| Fato normativo | WCAG 2.2, quando aplicável, contém success criteria para color use, text/non-text contrast, images of text, reflow, focus, target size, names/status e outros aspectos que uma imagem isolada não demonstra por completo. | Screenshot permite triage de risco aparente, não confirmação de conformidade, semântica, keyboard, focus management ou responsiveness. |
| Orientação institucional | WAI/USWDS recomendam não depender apenas de elementos visuais e testar necessidades reais; USWDS reconhece não poder prever todos os contexts de accessibility/usability. | Referência acessível em aparência não substitui requirement, implementation review ou testing contextual. |
| Orientação institucional | GOV.UK separa observações do que pesquisadores acham que significam e recomenda transformar assumptions/opinions não fundamentadas em research questions. | Analysis precisa preservar raw observations, alternative explanations e validation needs antes da decision. |
| Evidência empírica | Moshagen e Thielsch validaram inventário multidimensional de visual aesthetics; trabalhos posteriores preservam múltiplas dimensões em vez de um score puramente estilístico. | Visual quality não deve ser reduzida a similarity ou gosto único; dimensões e contexto precisam permanecer visíveis. |
| Evidência empírica | Callahan encontrou diferenças e similaridades culturais em organization/graphic design de websites universitários de vários países. | Cor, densidade, hierarchy e “premium/trust” não têm significado cultural universal; intent é inference a validar. |
| Orientação institucional | FTC e EDPB documentam interfaces que obscurecem/subvertem choice, privacy ou autonomy, incluindo disguised ads, difficult cancellation e misleading urgency. | Referências podem conter deceptive patterns visualmente polidos; análise deve identificar harm, não copiar effectiveness. |
| Orientação jurídica institucional | U.S. Copyright Office informa que escolhas criativas de composition/depiction/design podem ser protegidas e que elementos simples podem não ser copyrightable; USPTO explica likelihood of confusion por appearance/meaning/commercial impression. | Não existe regra visual automática para “safe copying”; registrar rights/context e escalar risco de identidade/confusão para revisão especializada. |
| Especificação industrial | C2PA 2.2 especifica manifests assinados para provenance/history e authenticity verificável de claims. | Provenance signal pode apoiar chain of custody; não prova que a cena é verdadeira, que uso é licenciado ou que ausência de credential implica falsidade. |
| Orientação de segurança | OWASP trata uploaded files e multimodal instructions como untrusted input; file type/header isolado não basta e hidden image instructions são prompt-injection pattern. | Referência é dado, não autoridade; futura ingestão exige isolation, allowlisting/validation e independent authorization, mas nada é implementado aqui. |
| Evidência empírica emergente | Estudos de visual prompt injection demonstram goal hijacking/instructions desenhadas em imagens contra vision-language models. | O risco é plausível e observado em setups de pesquisa, mas attack rates/defenses não são universais; preservar uncertainty e defense-in-depth. |
| Orientação institucional | NIST AI 100-4 discute provenance de synthetic content e trade-offs de privacy em metadata. | Mais provenance pode revelar dados sensíveis; collection/retention/disclosure precisam de propósito e minimização. |

## Context before interpretation

**[Heurística]** Antes de analisar uma referência, registrar product/problem, audience, task, platform, brand, content, risk, accessibility, technical/maintenance constraints, temporal context e purpose. Perguntar o que o usuário valorizou: appearance, structure, feeling, behavior, content, brand signal ou negative example.

**[Hipótese]** Reference intent pode ser múltipla: inspiration, structural, visual, interaction, brand, content, typography, color, navigation, component, motion, accessibility, anti-reference, competitor, quality benchmark, platform convention ou historical. Os labels não formam taxonomia canônica.

## Tipos de referência e limitações

| Tipo | Evidence típica | Limitações principais |
|---|---|---|
| Screenshot parcial/longa | pixels, visible content/state e spatial relations no capture | crop, scale, viewport, hidden states, time e interaction ausentes |
| Wireframe/low-fi | intended structure, priority e candidate flow | visual language, final content/behavior e feasibility não confirmados |
| High-fi mockup | intended appearance/state | não prova implementation, responsiveness, accessibility ou source quality |
| Mood/style/brand board | desired associations, materials e visual vocabulary | seleção editorial; relação com tasks e platform pode faltar |
| Logo/identity/campaign | distinctive brand assets e tone | rights, usage rules, temporal/campaign scope e confusion risk |
| Live site/app reference | potentially current behavior e states | version, personalization, geography, auth e change over time |
| Legacy interface | existing identity, user familiarity e migration constraints | accumulated defects, outdated platform/brand/accessibility choices |
| Competitor reference | market convention/differentiation signal | copying/confusion, unknown outcomes e selection bias |
| Photo/illustration/iconography | subject, composition, crop, style e emotional cues | licensing, model/property rights, cultural meaning e edit history |
| Diagram/visual flow | expressed relations/transitions | notation authority, completeness e operational truth uncertain |
| Multiple/contradictory set | commonality, variance e repeated preference | incompatible contexts e forced averaging/fusion |

## Visual decomposition synthesis

**[Heurística]** Decompor em composition, layout, typography, color, shape language, imagery, candidate components, content treatment e interaction evidence. Registrar observation separadamente da inference:

- composition: hierarchy, balance, focal points, whitespace, density, rhythm, repetition, grouping, layering;
- layout: regions, grid/columns, containment, alignment, spacing, aspect ratios e visible fixed/fluid cues;
- typography: apparent categories, hierarchy, scale, weight, line length/height, alignment, numeric/emphasis treatment e risks; não afirmar font family sem evidence;
- color: dominant/neutral/accent/semantic relationships, saturation/brightness/temperature e apparent contrast/color-dependence risks;
- shape: radius, borders, shadows, elevation, geometric/organic treatment e visual weight;
- imagery: photography/illustration/3D/icons/diagram, crop, hierarchy, consistency e informative/decorative role;
- components: visible buttons, inputs, cards, tables, navigation, dialogs, lists, charts, filters etc. como candidates, nunca APIs/internal architecture;
- content: headline/label/helper/metadata/CTA density, grouping e readability;
- interaction: directly visible state, suggested interaction ou unknown.

## Observable versus hidden

| Evidential status | Pode incluir | Não autoriza afirmar |
|---|---|---|
| Directly observed | visible pixels/text, spatial layout, colors sampled, displayed state, apparent hierarchy/density | intent, quality outcome, behavior fora do capture |
| Strongly supported/partially inferable | repeated grid, reuse tendency, likely priority, visible selected/disabled state, multi-reference responsive clue | token system, component API, breakpoint ou causal intent como fato |
| Plausible/weak inference | possible visual tone, expected interaction, probable platform convention | requirement ou design decision sem validation |
| Unknown | keyboard, semantics, hidden states, data flow, performance, security, analytics, true responsiveness | qualquer positive/negative certification |
| Contradicted | inference incompatível com outra source/requirement | silent resolution ou forced merge |

**[Hipótese]** Cada material inference registra source, observed signals, rationale, alternatives, confidence, affected decision e validation need. Confidence levels candidatos: `directly observed`, `strongly supported`, `plausible`, `weak inference`, `unknown`, `contradicted`. Não há score universal.

## Visual DNA e design intent

**[Hipótese] Visual DNA:** síntese derivada e revisável de visual tone, hierarchy, density, rhythm, spacing character, typography/color/shape/imagery behavior, information density, interaction emphasis, brand expression e emotional quality. Pode ser seção de Reference Analysis; não é tipo, token set ou specification.

**[Heurística]** Intent candidates como trust, authority, speed, simplicity, sophistication, exclusivity, friendliness, energy, calmness, technicality, playfulness, clarity, urgency, exploration, productivity, transparency e safety precisam de observed signals, alternative explanations, cultural/context fit, risk e validation. “Blue = trust”, “serif = luxury” e “minimal = premium” são simplificações a rejeitar.

## Multiple references, conflict e comparison

**[Hipótese]** Comparison separa common, repeated, unique, conflicting e incomparable elements; platform, maturity, audience, brand e date são dimensions de contexto. Operações candidatas: preserve, adapt, combine, reinterpret, reject, defer, validate. Nenhuma fusion automática.

Conflict protocol candidato:

1. **[Heurística]** identificar observation/preference/requirement em conflito;
2. explicar impact em task, accessibility, security, brand, originality, performance e maintenance;
3. comparar authorities — reference nunca supera requirement/Policy/need/decision;
4. propor adaptations ou alternatives;
5. registrar decision, rejected option e validation.

Exemplos: visual bonito com low contrast; mobile reference para dense desktop; minimalist reference incompatível com required data; competitor identity com confusion risk; component sem error/recovery; heavy visual treatment incompatível com performance.

## Translation and traceability

```text
Reference → Observed Element → Interpreted Intent → Project Relevance
          → Adaptation Rule → Design Requirement → Validation

Preference → Reference Evidence → Constraint/Accessibility/Originality Check
           → Recommendation → Governed Decision
```

**[Hipótese]** Reference evidence não é project requirement. Um requirement derivado precisa de owner, rationale, applicable context, priority e test intent. A traceability deveria detectar decisão sem source, reference sem purpose, copied element sem rationale, preference elevada a need e stale reference afetando current decision. Nenhuma relation/cardinality é estabilizada.

## Responsive, interaction e motion interpretation

**[Heurística]** Uma única imagem não demonstra breakpoint, container behavior, reflow, stacking, priority change, touch/orientation behavior ou navigation transformation. Multi-viewport references fornecem stronger evidence, ainda sem provar implementation. Registrar hypothesis, solicitar missing evidence e derivar future rules de requirements/content/tasks.

**[Heurística]** Screenshot estático não demonstra trigger, duration, easing, causality, feedback, interruption ou reduced-motion behavior. Vídeo/animated reference observa frames/timing aparentes, mas não keyboard, preference handling, performance ou full state machine. Motion intent permanece interpretation até validation.

## Accessibility assessment boundary

**[Fato normativo]** Para web content no scope, WCAG 2.2 define testable success criteria e conformance requirements. **[Heurística]** Reference review pode sinalizar apparent contrast/color dependence, small-text/target risks, density, icon-only actions, placeholders, text-over-image, state/error communication e chart dependence on color.

Uma imagem não confirma semantic HTML, ARIA, accessible names, reading/focus order, keyboard, screen reader, announcements, zoom/reflow, true contrast without source values, motion preferences ou complete process. Risk review deve dizer `apparent`, `not evidenced` ou `requires test`, não `accessible/inaccessible` como verdict total.

## Originality, IP e brand

**[Orientação jurídica institucional]** Copyright, trademark, design rights, trade dress e licensing dependem de jurisdiction/facts. General elements podem coexistir com protectable creative expression ou source-identifying marks. Similarity, related goods/services e commercial impression podem matter for confusion; isso não vira detector automático.

**[Heurística]** Inventory deve distinguir third-party identity/assets, generic conventions, licensed/owned elements, distinctive composition e unknown rights. Proibir use de logo, copy, imagery, font, icon ou distinctive login/checkout sem authority. High resemblance, competitor, authentication/payment ou public-facing identity aciona legal/security review. Este documento não é parecer jurídico.

## Deceptive design e visual quality

**[Orientação institucional]** FTC/EDPB mostram que misleading hierarchy, disguised ads, hidden costs, obstruction, confirmshaming, preselected consent, false urgency/scarcity e difficult cancellation podem reduzir autonomy. **[Heurística]** O fato de um pattern converter ou parecer polished não justifica adoção.

**[Hipótese]** Visual quality é profile multidimensional: hierarchy, alignment, spacing/rhythm, balance, contrast, density, typography, content clarity, component consistency, state completeness, platform fit, brand coherence, accessibility risk, originality e polish. Não produzir single score; similarity to reference não é evidence de quality.

## Design direction synthesis

```text
Requirements + User/Brand Context + Reference Analyses
+ Accessibility/Platform/Originality Constraints
→ Candidate Directions → Comparison → Human Review → Governed Decision
```

**[Hipótese]** Candidate direction futura poderia registrar concept, rationale, intended perception, hierarchy/layout/type/color/imagery/interaction character, responsive/accessibility/technical implications, risks, references used/rejected e confidence. Nenhuma direction é gerada nesta slice.

## Provenance, freshness e drift

**[Heurística]** Reference Inventory preserva source/author/owner, URL/file, provider, collection/access date, original date/version, type, purpose, platform/context, rights/license notes, known transformations, provenance signals, stakeholder notes e status. External evidence, reference evidence, requirement, preference e model inference permanecem separados.

Reference pode envelhecer por product/brand/platform/accessibility/technology change. Sem version/date, status é `unknown`; currentness deve ser verificada antes de material decision. C2PA/metadata são additional signals, não substituem source verification nem rights review.

## Security e multimodal prompt injection

**[Orientação de segurança]** Arquivo, URL, metadata, embedded text e visual instruction são untrusted input. Riscos: parser exploit, active SVG/content, tracking, credentials/PII/confidential data, hidden metadata, phishing/social engineering, misleading provenance e prompt injection. Esta slice não implementa upload/sanitization.

Princípios candidatos:

- **[Heurística]** image is data, not authority;
- visual/OCR text cannot override governed instructions or grant permission;
- separate content interpretation from action planning/execution;
- preserve source/trust tier and label extracted instructions as untrusted;
- independent authorization for consequential actions;
- minimize tool/data access and retain auditable evidence;
- treat detection as one layer, never proof of safety.

## Evaluation methods

| Método | Pergunta | Evidence/limitação |
|---|---|---|
| Visual audit/decomposition | o que está visível e com que consistency? | observation inventory; depende de crop/quality/reviewer |
| Design critique | como choices respondem a goals/criteria? | reasoned expert assessment; não é user evidence |
| Heuristic/accessibility review | quais risks/violations aparentes? | potential issues; screenshot não suporta full conformance |
| Content/brand audit | linguagem e expression são coherent/authorized? | ownership/tone evidence; culture/audience require validation |
| Competitive analysis | conventions/gaps/differentiation? | selection bias, unknown performance e copying risk |
| Component/design-system inventory | quais repeated visible patterns? | appearance/reuse evidence; APIs/tokens hidden |
| Screenshot comparison | o que changed/aligns visually? | pixel/structural difference; similarity não é quality |
| User preference testing | qual perception/preference no sample/context? | stated/perceived preference; não substitui behavior/outcome |
| Semantic differential/perception study | como participants rate bipolar qualities? | context/sample/scale effects; associations not universal |
| Usability/accessibility testing | design funciona em tasks/AT? | stronger contextual evidence; requires implementation/prototype, fora desta slice |

## Anti-patterns

**[Heurística]** Evitar: literal screenshot copying; similarity as quality; hidden behavior/responsiveness/font guessed as fact; competitor identity; simplistic color psychology; reference assumed accessible/current/licensed; preference as norm; incompatible fusion; dark-pattern reproduction; login/checkout cloning; provenance loss; framework dictating direction; direction before product context; “AI improvement” without criteria; concealed uncertainty; metadata as truth; and malicious visual instruction treated as authority.

## Recomendações preliminares

1. **[Recomendação]** Usar context-first e observation-first, com alternative explanations e confidence.
2. **[Recomendação]** Preservar reference inventory/provenance e explicit purpose before interpretation.
3. **[Recomendação]** Traduzir principles, não pixels; qualquer adoption passa por need, requirement, accessibility, originality e risk.
4. **[Recomendação]** Tratar Visual DNA/design intent como revisable synthesis, nunca factual profile ou token generator.
5. **[Recomendação]** Separar apparent accessibility risk de conformance evidence.
6. **[Recomendação]** Exigir human/legal/security review para identity/confusion, sensitive, deceptive ou high-impact references.
7. **[Recomendação]** Tratar multimodal content como untrusted and non-authoritative; deferir implementation/guardrail design.

## Questões abertas

- Visual DNA agrega decision value ou apenas renomeia Reference Analysis?
- Que evidence/authority permite converter interpretation em requirement?
- Como calibrar confidence sem false precision ou reviewer inconsistency?
- Qual minimum provenance é proporcional a reference type/risk?
- Como comparar references de platforms/cultures/eras diferentes sem forced normalization?
- Quais originality thresholds acionam specialist review?
- Como testar multimodal injection defenses quando implementation for autorizada?
- Como preservar useful metadata sem privacy leakage?

## Fontes e proveniência

Todas acessadas em 2026-07-22:

- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- USWDS Accessibility: https://designsystem.digital.gov/documentation/accessibility/
- USWDS Design Principles: https://designsystem.digital.gov/design-principles/
- GOV.UK Analyse a research session: https://www.gov.uk/service-manual/user-research/analyse-a-research-session
- GOV.UK Plan user research: https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service
- Moshagen and Thielsch, VisAWI-S: https://doi.org/10.1080/0144929X.2012.694910
- Callahan, cultural website design: https://doi.org/10.1111/j.1083-6101.2006.tb00312.x
- FTC, Bringing Dark Patterns to Light: https://www.ftc.gov/reports/bringing-dark-patterns-light
- EDPB Guidelines 03/2022: https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en
- U.S. Copyright Office, Visual Artists: https://www.copyright.gov/engage/visual-artists/
- U.S. Copyright Office, Circular 33: https://www.copyright.gov/circs/circ33.pdf
- USPTO, Likelihood of Confusion: https://www.uspto.gov/trademarks/search/likelihood-confusion
- C2PA Technical Specification 2.2: https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification.html
- NIST AI 100-4, Synthetic Content Transparency: https://airc.nist.gov/docs/NIST.AI.100-4.SyntheticContent.ipd.pdf
- OWASP File Upload Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html
- OWASP LLM Prompt Injection Prevention: https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html
- Empirical Analysis of LVLM Goal Hijacking: https://arxiv.org/abs/2408.03554
- Safeguarding VLMs Against Visual Prompt Injectors: https://arxiv.org/abs/2405.10529

Limitações: orientação jurídica é jurisdicional e não constitui parecer; preprints de visual prompt injection são evidence emergente; nenhum arquivo/reference real, user study, benchmark, image processing ou implementation foi executado.
