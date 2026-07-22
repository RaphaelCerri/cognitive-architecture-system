---
schema_version: 0.1.0-experimental
id: ARP-0009-E13
kind: knowledge
knowledge_type: research_evidence
title: Integrated Experience Evaluation Research Report
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0007
  - type: related_to
    target: ARP-0008
---

# Integrated Experience Evaluation Research Report

## Escopo e disciplina epistêmica

Pesquisa documental acessada em `2026-07-22`. Não executou testes, auditorias, scans, screenshots, benchmarks, user studies, analytics ou instrumentation. Não cria score, schema, gate executável, conformance report, approval ou certification.

Classes preservadas: **[Fato normativo]**, **[Orientação institucional]**, **[Evidência empírica]**, resultado automatizado/manual, observação de produção, relato de usuário, expert judgment, heuristic finding, benchmark, metric, claim, hipótese, recomendação, decisão, approval e `unknown`. A classe, source, scope e date acompanham toda claim material.

## Síntese

**[Hipótese]** Experience Evaluation é investigação governada de claims sobre outcomes, tasks e quality attributes usando portfólio proporcional de métodos. Test produz resultado; review produz judgment; audit aplica autoridade/scope próprios; evidence sustenta uma claim; metric quantifica sinal; score agrega segundo modelo; approval autoriza ação; certification exige regime competente. Nenhum é sinônimo.

```text
Intent / Need / Requirement / Risk
 -> quality or acceptance claim
 -> method portfolio
 -> scoped evidence
 -> finding / uncertainty
 -> remediate, except, reject or decide
 -> release evidence
 -> production revalidation
```

Falha crítica de task, authorization, accessibility, security, data integrity ou recovery é gate candidate e não pode ser “compensada” por médias. Complete task e failure/recovery importam mais que component count ou happy-path screenshots.

## Fontes e status

- [ISO 9241-11:2018](https://www.iso.org/standard/63500.html): usability concepts e context of use; International Standard, edition 2018.
- [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html): product quality model com nove characteristics; International Standard, edition 2, 2023-11.
- [ISO/IEC/IEEE 29119-1:2022](https://www.iso.org/standard/81291.html) e [29119 series](https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/isoiecieee-29119-series.html): testing concepts/process/documentation/techniques; não impõem este framework local.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/) Recommendation de 2026-02-05, [WCAG-EM overview](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/) e [Involving Users](https://www.w3.org/WAI/test-evaluate/involving-users/): conformance, transparent rules, methodology e user involvement em scopes distintos.
- GOV.UK guidance sobre [moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing), [research analysis](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) e [measuring service success](https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service): institutional heuristics, não universal law.
- [HHS informed consent](https://www.hhs.gov/ohrp/regulations-and-policy/guidance/faq/informed-consent/index.html): legal/guidance scope depende de human-subject research/jurisdiction; não se presume aplicabilidade universal.
- [NIST SSDF 1.1](https://www.nist.gov/publications/secure-software-development-framework-ssdf-version-11-recommendations-mitigating-risk), [OWASP ASVS 5.0.0](https://owasp.org/www-project-application-security-verification-standard/) e [NIST Privacy Framework](https://www.nist.gov/privacy-framework): security/privacy verification and governance inputs.
- [Web performance lab/field guidance](https://web.dev/articles/lab-and-field-data-differences), [Resource Timing](https://www.w3.org/TR/resource-timing/) CRD observado em 2026-04-20 e [OpenTelemetry observability](https://opentelemetry.io/docs/concepts/observability-primer/): measurement/production signals com limitations/privacy.
- [NIST AI RMF Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence), publicado 2024-07-26, [NIST AI TEVV](https://www.nist.gov/ai-test-evaluation-validation-and-verification-tevv) e [ISO/IEC TR 29119-11:2020](https://www.iso.org/standard/79016.html): contextual AI evaluation e test-oracle challenge.
- [OWASP Improper Output Handling](https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/) e [Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/): AI security guidance, não product certification.
- [Playwright visual comparison docs](https://playwright.dev/docs/test-snapshots) apenas exemplificam environment-sensitive baselines; nenhuma ferramenta foi selecionada/executada.

## Concepts e fronteiras candidatas

| Conceito | Definição candidata | Não equivale a |
|---|---|---|
| Experience Evaluation | investigação de claims de outcome/task/quality | single test |
| Quality Assurance | sistema de prevenção, evidence e governance ao longo do lifecycle | final QA phase |
| Design QA | preservação contextual de intent/spec/states/content/behavior | pixel equality |
| Acceptance Evaluation | evidence contra authorized acceptance claims | stakeholder taste |
| Production Evidence | observation versionada do comportamento real | permanent proof |
| Quality Scenario | context/stimulus/response/measure/failure/recovery claim | test case |
| Evaluation Profile | portfolio proporcional de methods/authority | certification tier |
| Evidence Item | resultado/observation com method/environment/version/limitations | approval |
| Finding | interpretação rastreável de evidence | defect automaticamente |
| Defect | non-fulfillment confirmado de requirement/expected behavior | risk estimate |
| Risk | uncertainty + potential harm/impact | observed defect |
| Exception | temporary authorized deviation with residual risk | remediation |
| Gate | non-averaged decision condition | score threshold universal |
| Coverage | bounded relation entre claims/scenarios/methods | percent quality |
| Confidence | warranted belief given evidence/limitations | certainty |

`Acceptance criterion != test case != evidence`; `finding != defect != risk != exception`.

## Inputs e readiness

Inputs proporcionais: Intent/Need; PRD/requirements; Experience Architecture/IA/journeys/flows/states; Design Direction/Language/component/pattern contracts; accessibility/security/privacy/performance requirements; Frontend Architecture/technology decisions; implementation/release identity; known risks/exceptions; supported environments; available production/support/user evidence.

Readiness candidate: claim/requirement e owner identificados; critical tasks/states/failures conhecidos; environment/version/scope disponível; expected response/measure explicitável; applicable authority e privacy/participant constraints identificadas. Missing implementation ou production evidence pode ser `not applicable/not yet available`, não fabricated.

## Evaluation dimensions e quality scenarios

Dimensions: requirement coverage, task success, comprehension, learnability, efficiency, prevention/recovery, accessibility, visual/content quality, responsiveness/platform, performance, security/privacy, resilience, observability, maintainability, architecture conformance, dependency risk, localization e production behavior.

Quality scenario candidate: context, actor, system state, stimulus, expected response, quality attribute, measure/threshold, failure condition, recovery expectation e evidence method. Measures devem preservar distributions, uncertainty e affected population; não produzir aggregate quality score.

## Functional, task, flow e state evaluation

Avaliar outcome through complete tasks: happy, alternate, exception, recovery, cancellation, interruption/return, destructive/irreversible, permission/approval, async completion e multi-device continuity. Flow-state coverage inclui loading/empty/degraded/offline/stale/conflict/partial/cancelled/expired/retry. Coverage é traceable set, não percent universal.

Uma tela/componente pode passar isoladamente e o task falhar por navigation, content, state transition, authorization, integration, latency ou recovery. Task evidence registra starting context, data, environment, user/actor, expected outcome, deviations, assistance/workaround e downstream effect.

## Usability e user participation

Methods candidate: moderated/unmoderated task testing, cognitive walkthrough, heuristic/expert review, first-click, contextual inquiry, longitudinal/diary e remote evaluation. Cada método responde claims diferentes e registra sample/recruitment, context, moderator/instrument, bias, representation, environment, limitations e confidence.

User participation inclui segments/access needs, accommodations, compensation, consent/privacy, safe withdrawal, stakeholder influence, research fatigue e data handling. Um participante não representa population; ausência de representatividade declarada restringe claim. WAI recomenda user involvement combinado com standards evaluation, não em substituição.

## Visual, Design QA, reference e content

Visual quality considera hierarchy, alignment, spacing/rhythm, contrast, typography, density/balance, consistency, content/state completeness, responsive/platform fit, brand, accessibility, originality e polish. `Visual similarity != visual quality`.

Design QA separa design intent/spec review, implementation comparison, interaction/state/content/responsive/accessibility review e visual regression. Pixel difference pode ser intentional/irrelevant; ausência de pixel difference não prova behavior. Baseline exige owner, environment, version, dynamic/mask policy, intentional-change rationale e review—nunca auto-approved update.

Reference conformity pergunta quais principles foram preserved/adapted/rejected, com traceability, originality/IP/deceptive-design/accessibility corrections. Reference não vira requirement por presença.

Content é avaliado dentro do task: clarity, terminology, headings/labels/actions, instructions/errors/empty states, trust/consent/legal, readability/tone/consistency, localization e generated content. Comprehension e actionability são claims a testar, não style preferences.

## Accessibility, security, privacy e performance

Accessibility portfolio: source/static/automated checks, semantics/keyboard/focus, screen reader/AT, zoom/reflow, forced colors/high contrast, reduced motion, mobile, content, implementation inspection e users. ACT rules tornam procedure/result transparent; failed/passed rule mantém applicability/assumptions/limitations. `No detected violation != accessible experience`.

Security evaluation integra threat model, authentication/authorization, input/output/unsafe content, third parties/dependencies, upload/download/external links, session/privacy, AI output e abuse cases. ASVS/SSDF podem estruturar claims/evidence; clean scanner não prova absence. ARP-0007 mantém authority.

Privacy avalia minimization, consent, storage/cookies/session, analytics/replay/logs, sensitive fields/shared devices, retention/deletion, accessibility preferences e inferred traits. Production evaluation não autoriza intrusive monitoring.

Performance separa lab controlled evidence, field distributions e perceived/task experience. Avaliar route/task budgets, low-end/poor network, rendering/interactivity, memory/battery/stability, long/background work. Field não revela causalidade sozinho; lab não representa population sozinho.

## Responsive, i18n, component, pattern e systems

Responsive/platform matrix deriva de tasks across mobile/tablet/desktop/ultrawide/orientation/foldables/safe areas, touch/keyboard/pointer/AT, embedded/webviews/browser tiers; não apenas breakpoints.

I18n/localization cobre language/script/bidi, expansion/truncation/pronunciation, date/time/number/currency/name/address/plural, fallback, translation quality e accessible switching. Pseudo-localization é diagnostic result, não user evidence.

Component evaluation cobre purpose/semantics/states/input/focus/content resilience/responsive/preferences/i18n/API/consumer duties/tests/version. Pattern evaluation adiciona complete task, alternatives, error/recovery, permission/time/security. Design System evaluation cobre adoption/coverage/drift/forks/variants/tokens/accessibility/docs/version fragmentation/contribution/exceptions/product outcomes.

Frontend Architecture evaluation cobre boundaries/authority/state/data/cohesion/coupling, failure/loading/resilience, qualities, tests/dependencies/deploy/exit. Nenhum score universal; quality scenario e hard gates preservam context.

## AI-generated implementation e AI-native experience

Generated-code claims verificam provenance/context/version/official sources/diff, compile/runtime behavior, architecture conformance, states/errors/tests, accessibility/security/human review. Visual plausibility não valida API, semantics, trust boundary ou dependency identity.

AI-native complete tasks incluem streaming/citations/provenance/tool calls/actions/approvals/interruption/cancel/retry/long work/uncertainty/memory/context/artifacts/multi-agent/human takeover/audit. Avaliar improper output handling e prompt injection across downstream sinks/privileges; model change é evidence invalidation trigger.

## Automation, expert review e evidence limits

Automated methods—lint/type/static/unit/component/integration/E2E/a11y/visual/performance/security/dependency/contract—possuem false positives/negatives, environment/maintenance gaps e test-oracle assumptions. Passing suite é evidence only for encoded claims and observed build.

Expert review registra reviewer competence/role/conflict, scope, method, evidence, limitations e dissent. Expert judgment não é universal user evidence. Independent audit tem authority/scope próprios e não foi executado.

## Production evidence e feedback

Production signals: errors, task outcome/failure/abandonment, performance, support/accessibility/security reports, feedback, analytics/experiments/incidents/regressions/environment differences. GOV.UK recomenda combinar metrics com user research e outras sources. Observation needs release/config/environment/segment context, sampling/data quality/privacy e causal limits.

Feedback de users/support/research/operations/security/accessibility/product atualiza requirement, Experience/Design System/frontend architecture, tests, risks e roadmap through governed decision. Monitoring detects signals; it does not silently rewrite requirements or approve release.

## Anti-patterns

Score as quality; passing automation as approval; pixel-perfect as Design QA; happy path only; component evidence without flow; accessibility automation without task/AT; lab as production truth; analytics as causality; one user as population; stakeholder approval as validation; finding without owner; exception without expiry; baseline update hiding regression; blocker averaged out; privacy-blind monitoring; evidence without version; orphan test/requirement; screenshot as behavior; plausible AI output accepted; release without recovery; evaluation only at end; unauthorized certification language; stale evidence reused after material change.

## Recomendações e open questions

**[Recomendação]** Organizar assurance por claim e risk; trace requirements bidirectionally; use complementary methods; isolate blockers from trade-offs; preserve raw evidence/uncertainty; require owner/expiry/revalidation; connect pre-release and production without treating either as permanent truth.

Open: artifact/authority; minimum readiness; severity vocabulary; hard gates; assurance profile selection; evidence freshness; user-research ethics/applicability; release/exception authority; production privacy; how ARP-0008 evaluation and ARP-0007 assurance relate; quando benchmarks serão autorizados.
