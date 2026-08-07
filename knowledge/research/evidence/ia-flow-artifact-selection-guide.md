---
schema_version: 0.1.0-experimental
document_role: research_selection_guide
title: IA, Flow and Artifact Selection Guide
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

# IA, Flow and Artifact Selection Guide

## Regra central

**[Decisão]** Este guide orienta investigação proporcional; não cria minimum artifact set obrigatório, profile, tier, readiness gate, Knowledge Type ou schema.

**[Hipótese]** Selecionar o menor artefato ou combinação que torne uma decisão, risco ou lacuna verificável. Um artefato sem question, owner, consumer, evidence e expiry é candidato a ser omitido ou incorporado como seção de outro.

## Artifact value test

Antes de produzir, responder:

1. **[Heurística]** Qual pergunta/decisão/risk este artefato resolve?
2. **[Heurística]** Qual evidence alimenta e qual uncertainty permanece?
3. **[Heurística]** Quem usa, revisa e mantém?
4. **[Heurística]** O que ele detecta que outra view não detecta?
5. **[Heurística]** Pode ser uma tabela/seção menor?
6. **[Heurística]** Qual mudança o torna stale?
7. **[Heurística]** Qual avaliação demonstrará utilidade?

## Selection matrix

| Artefato candidato | Use quando | Não use como | Conteúdo mínimo candidato | Evidence/validation |
|---|---|---|---|---|
| Sitemap | locations e hierarchy precisam de visão compartilhada | IA completa, flow ou screen list | nodes, parent/relations, scope, labels, ownership | content inventory, tree test, link audit |
| IA model/map | objects/content/functions/relations e findability são materialmente complexos | organogram ou visual layout | axes, groups, relations, entry points, assumptions | research, inventory, card/tree/usability |
| Taxonomy | classification/metadata/browse/filter precisam de vocabulário controlado | universal ontology ou menu pronto | terms, definitions, synonyms, parent/relations, owner/lifecycle | domain/user language, card sort, search logs |
| Journey map | experiência longitudinal atravessa etapas/canais/atores | future screen sequence ou task flow | actor, stages, goals, touchpoints, evidence, pain points | field/user research; mark assumptions |
| Task flow | uma tarefa delimitada precisa de sequência essencial | multi-actor system workflow | goal, preconditions, steps, success/exceptions essenciais | walkthrough/usability |
| User flow | decisões/caminhos de um ator precisam de coverage | list of screens | actor, trigger, steps, states, branches, recovery, completion | scenario review/usability/tests |
| Screen flow | transições visuais são necessárias para implementation/evaluation | IA, journey ou domain workflow | views/states, transition triggers, back/cancel | prototype review/accessibility/usability |
| Service blueprint | frontstage/backstage/handoffs determinam a experiência | todo fluxo simples | stages, actors, channels, front/backstage, systems, evidence | cross-team mapping + operational/user evidence |
| Workflow | execução governada, queues/approvals/automation são centrais | user journey ou navigation | actors, states, transitions, authority, SLA/events, failures | operational/domain/policy validation |
| State model | state muda action, meaning, authority, content ou recovery | lista visual genérica | state nature, transitions, invariants, feedback/actions/tests | domain review, scenario/state coverage |
| Screen inventory | coverage/ownership de muitas surfaces precisa ser rastreado | requirement set ou sitemap | view purpose, source need/flow/state, owner/status | orphan/coverage checks |
| Navigation model | destinations/path/switching/orientation exigem decisão | menu component choice isolada | scope, primary axis, mechanisms, responsive transform, contraindications | tree/navigation/usability/accessibility |
| Permission view | roles/actions/data visibility afetam experience | authorization policy/enforcement | actors, object/action visibility, reason/approval implications | ARP-0007/policy review + scenario tests |

## Journey, flow, blueprint e workflow

```text
Longitudinal experience across channels? → Journey Map
Bounded task with mostly one route?       → Task Flow
Actor decisions and alternate paths?      → User Flow
Visual state-to-state transitions needed? → Screen Flow
Frontstage/backstage handoffs matter?      → Service Blueprint
Operational authority/queues/SLA matter?  → Workflow
```

**[Heurística]** A resposta pode ser “nenhum”: uma tabela de scenarios/states pode bastar. Se dois artefatos repetem os mesmos nodes, manter views ligadas ou combinar se isso preserva leitura.

## Proportional packages — examples, not tiers

### Simple public/content experience

**[Hipótese]** Content outline + small IA/sitemap + primary task path + essential states podem bastar. Add taxonomy/search somente com content volume/vocabulary; journey somente se descoberta/transação atravessa canais. Public não significa low-risk: accessibility, legal content ou sensitive submission podem elevar rigor.

### Repeated product with multiple tasks

**[Hipótese]** Object/task map + navigation model + primary/alternate user flows + state coverage + content/search/filter rules. Screen inventory somente quando coverage across many views ajuda; dashboard não é presumido.

### Multi-role or operational service

**[Hipótese]** Actor/permission implications + role/object-centered IA + approval/exception/recovery flows + state model; service blueprint/workflow apenas se handoffs/backstage/queues materially affect experience.

### Longitudinal or multi-channel service

**[Hipótese]** Evidence-based journey + service boundary + task/user flows para critical episodes; blueprint quando people/systems/offline steps causam outcomes.

### AI-native or asynchronous work

**[Hipótese]** Object map (project/task/agent/execution/artifact/source) + navigation/context model + asynchronous/approval/takeover flows + execution/domain/interface state distinctions + provenance/audit implications. Não desenhar frontend.

Esses exemplos são **[Hipótese]**, não classes automáticas nem risk certification.

## Escalation triggers

| Trigger observado | Artefato/coverage a considerar | Por quê |
|---|---|---|
| many content types/languages | taxonomy + content architecture | labels, metadata, lifecycle e locale |
| large/dynamic corpus | search/filter model + IA | ranking, scope, no-results e permission safety |
| many durable domain objects | object-centered map | identity, relations, states e actions |
| many destinations/depth | navigation model + sitemap/IA | orientation e growth |
| branching/material failures | user flow + state/recovery view | completeness e safe outcome |
| multiple roles/authority | permission implications + role flows | visibility, approval e audit |
| cross-channel/backstage | journey + possible blueprint | handoffs e wider problem |
| long-running/background work | execution state model | status, cancel/resume/reconciliation |
| destructive/irreversible effects | destructive/recovery flow | preview, authority, evidence, compensation |
| regulated/high-impact context | formal traceability/evidence plan under applicable authority | assurance; package não certifica |
| responsive transformation risk | navigation/content priority view | behavior changes, not resize only |

## De-escalation and merge rules

**[Heurística]** Omitir/combinar quando: question já é respondida por current authoritative evidence; flow é linear e exceptions low-impact; hierarchy é pequena; artifacts repetem mesmas decisions; ou manutenção custa mais que o risk detectado. Registrar rationale se uma omission afeta requirement/risk material.

Combinações leves candidatas:

- IA + taxonomy em uma tabela de groups/terms;
- task flow + state coverage em uma scenario table;
- sitemap + screen inventory quando locations/views coincidem e purpose/source continuam explícitos;
- journey + blueprint em lanes quando longitudinal e operational evidence compartilham stages;
- permission implications dentro do flow, sem copiar a policy.

## Evidence-driven selection

| Uncertainty principal | Método candidato | Output útil | Limitação |
|---|---|---|---|
| user grouping/language | card sorting/content test | candidate clusters/labels | não valida navigation completion |
| hierarchy/findability | tree testing | success/path/directness | representation/task/sample effects |
| first orientation | first-click/navigation test | cue/path evidence | não cobre completion/recovery |
| task completion | moderated usability | observed path/issues/reasons | scenario/prototype/sample bounds |
| learnability | cognitive walkthrough + users | expert predictions + observations | expert result não é user evidence |
| accessibility | WCAG review + keyboard/AT/users | conformance/barrier evidence | automation isolada incompleta |
| production findability | search logs/analytics/support | query/path/failure patterns | intent/causality/excluded users missing |
| cross-channel/service | contextual research + journey mapping | current experience/handoffs | map synthesis pode esconder variance |

## Artifact completeness checks

### IA/navigation

- **[Heurística]** Primary tasks/objects/content and entry points are identifiable.
- **[Heurística]** Labels reflect tested language or explicitly marked assumptions.
- **[Heurística]** Current location, available actions, return/recovery and pending change can be understood.
- **[Heurística]** Search/filter/ranking scopes and permissions are addressed when applicable.
- **[Heurística]** Responsive transformation and accessibility implications are recorded.
- **[Heurística]** No node/view exists only because an internal department/table/requirement exists.

### Flow/state

- **[Heurística]** Actor/goal/trigger/preconditions/completion are explicit.
- **[Heurística]** Material alternate/failure/recovery/interruption paths are evaluated.
- **[Heurística]** Domain/execution/interface states are separated.
- **[Heurística]** Permission and destructive effects point to authority.
- **[Heurística]** Success, partial, pending and failure are distinguishable.
- **[Heurística]** Tests/evidence relate to need/requirement and state.

Checks são prompts de revisão, não certification.

## Traceability view

```text
Need ──supports──> Task ──represented_by──> Flow
Requirement ──constrains──> State / Interaction
Content Object ──classified_by──> Taxonomy
Taxonomy ──supports──> Navigation / Search / Filter
Flow + State ──may_materialize_as──> Screen/View
Criterion ──verified_by──> Test ──produces──> Evidence
```

**[Hipótese]** Views podem omitir intermediate artifacts quando relation/rationale permanece recuperável. Cardinalities e relation names não estão aprovados.

## Stop and escalation conditions

Interromper modelagem e escalar quando:

- authority/policy de permission ou risk não existe;
- user/task/content evidence crítica falta e bounded assumption seria perigosa;
- conflict entre PRD, accessibility, security ou operational constraints não tem owner;
- artifact exige schema/runtime/UI para responder à pergunta;
- requested precision excede evidence;
- modeling não produz nova decision por duas iterações.

## Anti-bureaucracy review

**[Heurística]** Sinais de excesso: diagram count como progresso; artifact sem consumer; duplicação sem source owner; exhaustive screens/states sem risk; precision inventada; maintenance desconhecida; template completado apesar de “não aplicável”. Sinais de insuficiência: happy path apenas; permission/recovery invisíveis; labels de insiders; content sem owner; responsive/accessibility tardios; decisão sem evidence/rationale.

## Disposição preliminar

**[Recomendação]** Adotar “question → minimum view → evidence → decision → expiry” como orientação de pesquisa. Deferir package thresholds, artifact minimums, profiles, schema e automated selection até casos empíricos e decisão do Conselho.
