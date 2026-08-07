---
schema_version: 0.1.0-experimental
id: IHR-0009
kind: knowledge
knowledge_type: implementation_handoff_report
title: Information Architecture, Navigation and User Flow Research Slice — Handoff
status: reviewed
reviewed_at: 2026-08-07
review_outcome: approved
acceptance_scope: experimental_checkpoint
review_basis: ASSESS-0003
version: "1.0"
created_at: 2026-07-22
milestone: V1-M02
related_commits: []
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: documents
    target: ARP-0009
---

# IHR-0009 — Information Architecture, Navigation and User Flow Research Slice

## 1. Identificação

Pacote para revisão do CSA da slice **Information Architecture, Navigation and User Flow Engineering**, autorizada sobre ARP-0009 após o checkpoint `e5104dc47bbfeabf58be24046359f50d072f0932`.

## 2. Objetivo autorizado

Investigar como users, tasks, requirements, content, domain objects, roles, permissions, risks e context se transformam em information architecture, navigation, flows, states, recovery, orientation e findability. Escopo exclusivamente documental: sem UI, wireframe, prototype, visual reference, Design System, token, component, technology catalog/selection, framework, frontend, schema, engine, benchmark ou implementação.

## 3. Resultado e definições candidatas

**[Hipótese]** IA organiza informação, objects, content, functions e relations para compreensão/findability/action; Navigation Architecture define destinations, paths, mechanisms e orientation; Content Architecture governa types, metadata, ownership, lifecycle e searchability; taxonomy classifica; sitemap representa locations; flow representa caminhos/decisions; workflow representa execução operational; state model separa domain, execution e interface states.

```text
Journey != Flow != Workflow != Navigation != Sitemap != Screen Inventory
Domain state != Execution state != Interface state
```

**[Recomendação]** Partir de task/object/state/authority antes de pages; escolher navigation pelo contexto; exigir flow completeness proporcional; e selecionar o menor artifact que torna decision/risk verificável. Nenhuma definição, cardinalidade, artifact set, threshold ou selection engine foi canonizado.

## 4. Execution Loop Report

1. **Pergunta:** quais conceitos, fontes e obrigações delimitam IA/navigation? **Fontes:** WCAG/WAI, GOV.UK, USWDS e literature selecionada. **Classificação:** WCAG como fato normativo quando aplicável; institutional guidance; empirical studies. **Comparação:** architecture versus sitemap/menu. **Conclusão:** IA inclui content/objects/relations e não é page list. **Lacuna:** nenhum standard universal de IA. **Decisão:** continuar.
2. **Pergunta:** como comparar IA, object-centered UX, taxonomy e navigation models? **Fontes:** official patterns, empirical menu studies e domain analysis. **Classificação:** evidence contextual + heurísticas/hipóteses. **Comparação:** hierarchical, sequential, matrix, network, hub, object/task/audience/topic/lifecycle/search-first/hybrid e mechanisms. **Conclusão:** context-dependent matrix; nenhum universal. **Lacuna:** não aplicada a produto real. **Decisão:** continuar.
3. **Pergunta:** como tratar search, filters, findability e responsive transformation? **Fontes:** WCAG, GOV.UK/USWDS e synthesis. **Classificação:** normative constraints + institutional/heuristic guidance. **Comparação:** browse/search, global/local, filters/facets, pagination/infinite scroll, desktop/mobile. **Conclusão:** scope, permission safety, position e content priorities govern selection. **Lacuna:** thresholds empíricos. **Decisão:** continuar.
4. **Pergunta:** o que torna flow/state/recovery completo? **Fontes:** WCAG complete-process/error/status criteria, GOV.UK task guidance, ARP-0007 boundary e synthesis. **Classificação:** facts normativos limitados + heurísticas/hipóteses. **Comparação:** happy path versus alternate/failure/recovery/interruption/permission/async. **Conclusão:** anatomy e completeness review candidatas; domain/execution/interface separados. **Lacuna:** shared state vocabulary/authority. **Decisão:** continuar.
5. **Pergunta:** qual artifact mínimo responde a journey, task, navigation e operations? **Fontes:** findings 1–4 e GOV.UK journey/experience guidance. **Classificação:** institutional guidance + local hypothesis. **Comparação:** sitemap, IA, taxonomy, journey, task/user/screen flow, blueprint, workflow, state model, inventory. **Conclusão:** question → minimum view → evidence → decision → expiry. **Lacuna:** empirical package validation. **Decisão:** validar.
6. **Pergunta:** pacote respeita epistemologia, governança e escopo? **Fontes:** directive, IHP-001, repository, outputs e Git. **Classificação:** validation facts. **Comparação:** six-file authorized set versus actual diff/staging. **Conclusão:** pronto para CSA se checks passarem. **Lacuna:** Council decisions futuras. **Decisão:** commit e stop; nenhuma próxima slice.

Todas as seis iterações produziram progresso; `max_iterations: 6`, `max_files_changed: 6` e `max_no_progress_iterations: 2` foram respeitados. O limite temporal foi observado.

## 5. Fontes e classificação epistemológica

- **Fato normativo:** WCAG 2.2, restrito a seu scope, applicability e nível de conformidade; não prescreve modelo de IA/menu.
- **Orientação institucional:** W3C WAI/APG, GOV.UK Service Manual/Design System, USWDS e NIST AI RMF GenAI Profile, sempre dentro de contexto e sem universalização.
- **Evidência empírica:** Petrie/Power/Cairns/Seneler; Faiks/Hyland; Kuric/Demcak/Krajcovic; Jiang/Chen; Burnett et al.; Commarford et al.; Khajouei et al. sobre card/tree methods, menu context e evaluation coverage.
- **Heurística:** tasks before pages, contextual navigation, proportional state/recovery modeling e minimum sufficient artifact.
- **Preferência:** escolha de navigation/label/layout sem evidence funcional; não foi promovida a requirement.
- **Hipótese:** candidate definitions, matrices, flow anatomy, traceability, selection logic e artifact packages.
- **Decisão:** scope, file limit, program states e proibição de implementação conforme Conselho.

URLs, access date, applicability e limitações constam no research report.

## 6. Síntese técnica solicitada

### IA, objects, taxonomy e labels

Modelos avaliados: hierarchical, sequential, matrix, network, hub-and-spoke, object/task/audience/topic/lifecycle/search-first e hybrid. **[Hipótese]** Object-centered UX organiza identity, properties, relations, lifecycle, states, actions, history, ownership e permissions quando objetos duráveis correspondem ao modelo mental; task-centered permanece melhor quando o goal atravessa objetos.

**[Heurística]** Nome interno, domain term, interface label, command, description e contextual help devem ser distintos. Taxonomy/search/filter dependem de metadata, synonyms, locale, ownership e lifecycle; content sem owner é risco.

### Navigation Decision Matrix, search e responsive IA

Foram comparados top, sidebar, bottom, tabs, mega/nested/contextual navigation, breadcrumbs, command palette, search-first, dashboard, object/role-based, step, hub e hybrid por scale, depth, frequency, device, discoverability, orientation, accessibility, expertise, growth, density, use cases e contraindications.

**[Hipótese]** Busca global/local exige scope; suggestions/history exigem privacy; filters/facets exigem discriminating attributes; permissions devem ser aplicadas antes de existence/snippet/count disclosure. Responsive IA reprioriza, reagrupa e transforma mechanisms/context; não apenas redimensiona.

### Flow types, completeness, state, error/recovery e permissions

Tipos: happy, alternate, exception, recovery, destructive, approval/escalation, onboarding/repeat, authn/authz, transaction/collaboration, background/async e AI-assisted/takeover. Anatomy: actor, goal, trigger, preconditions, starting state, steps/decisions/system responses, data, permissions, alternate/failure/recovery/cancel/interruption, completion/postconditions, criteria/evidence.

State families: domain, execution, interface, data/content, network/device, authority e lifecycle. Recovery ladder candidata: prevent → detect/validate → preview/confirm → execute/status → undo/retry/resume/rollback/compensate → support/escalate. Role-aware experience consome Policy/ARP-0007; hidden/disabled depende de disclosure, relevance, expectation e access path, nunca enforcement visual.

### Journey/flow/blueprint selection e content architecture

- Journey: longitudinal, multichannel experience.
- Task Flow: bounded task.
- User Flow: actor decisions/paths.
- Screen Flow: visual transitions quando necessário.
- Service Blueprint: frontstage/backstage/people/systems/handoffs.
- Workflow: operational states/transitions/authority.

Content Architecture inclui types, model/metadata, owner, lifecycle/version/publishing/expiry/localization/reuse/relations/permissions/searchability. Structured/unstructured são choices contextuais.

### Cognitive load, accessibility e AI-native

Empirical menu findings variam por task, modality, device, structure e population; “7±2”, maximum depth ou hamburger universal não são facts. Recognition, grouping, informative labels, progressive disclosure e persistent context são heurísticas contextuais.

WCAG condiciona headings/labels, multiple ways, focus, consistent navigation/identification, errors, status, reflow, target size, redundant entry e complete processes quando aplicável. Automation não prova full flow. AI-native considerations incluem conversations/projects/agents/tasks/tools/memory/sources/approvals/executions/plans/artifacts/branches/logs, com provenance, uncertainty, authority, async identity, cancel/resume, human takeover e durable-memory distinctions.

## 7. Traceability, avaliação e anti-patterns

Traceability candidata:

```text
Need → Task → Flow → State → Interaction Requirement
     → Screen/View → Implementation → Test → Evidence
Content Object → Taxonomy → Navigation → Search/Filter → Presentation
```

Checks: orphan needs/flows/screens/tests/content, untreated states, actions sem authority e permission-unsafe results. Relações são hipótese many-to-many; nada foi modelado como schema.

Evaluation methods: card sorting (grouping/labels), tree testing (structure/findability), first-click (early orientation), usability testing (observed completion/recovery), cognitive walkthrough (expert learnability), heuristic review (potential broad issues), content testing, search logs/analytics e accessibility review. Cada um produz evidence distinta e possui limitation.

Anti-patterns principais: sitemap como IA inteira; organogram/menu before tasks; universal hamburger/dashboard/search/tabs; filters sem value; happy path only; generic error; destructive action sem recovery; permission via hidden UI; domain/interface state mixed; desktop merely shrunk; artifact sem decision; e expert/automated review tratado como user/conformance proof.

## 8. Entregáveis, arquivos e validação

Alterado:

- `knowledge/research/ARP-0009-experience-engineering-and-interface-architecture.md`.

Criados:

- `knowledge/research/evidence/information-architecture-navigation-research-report.md`;
- `knowledge/research/evidence/navigation-model-decision-matrix.md`;
- `knowledge/research/evidence/user-flow-state-modeling-framework.md`;
- `knowledge/research/evidence/ia-flow-artifact-selection-guide.md`;
- `milestones/V1-M02-information-architecture-user-flow-research-handoff.md`.

Total: seis arquivos autorizados. Outros ARPs, APs, PRDs, Ontologia, ARCH-001, code, schemas, dependencies, `.obsidian` e draft não foram alterados/stageados.

Validação documental proporcional antes do commit: YAML; JSON; IDs/relações; links/URLs; sources/dates/provenance; epistemic labels; absence of implementation/UI/wireframes/technology selection; state do ARP-0009; six-file scope; IHP 12/12; UTF-8 sem mojibake; e `git diff --check`. Build/lint/typecheck não se aplicam.

## 9. Desvios, limitações e riscos residuais

Nenhum user research, product benchmark ou executable test foi realizado. Parte da evidence empírica foi avaliada por abstracts/páginas de publisher. Institutional patterns refletem government/web contexts. WCAG applicability precisa ser determinada por produto/jurisdição. Matrices não foram aplicadas a casos locais e não autorizam automation.

Riscos: false precision; artifact staleness; insider taxonomy; navigation engine prematura; accessibility como checklist; permission model duplicado; excessive states; documentation theater; e contextual evidence universalizada.

## 10. Questões abertas, recomendações e próximas decisões

Recomendações preliminares: aceitar outputs como research evidence; preservar task/object/state/authority before pages; usar contextual Navigation Matrix; exigir proportional flow/recovery coverage; ligar taxonomy/content/search; combinar evaluation methods; e deferir schemas/engines.

Questões/decisões do Conselho:

- aceitar, revisar ou rejeitar candidate definitions e distinctions;
- determinar cases para validar artifact sufficiency e matrix;
- decidir authority futura para flow completeness e navigation selection;
- avaliar shared state vocabulary sem promover tipo prematuro;
- definir como role personalization e permission-safe findability serão testadas;
- escolher explicitamente próxima slice ou pausar.

Visual Reference Interpretation, Design System, technology catalog, frontend e benchmark permanecem bloqueados sem nova autorização.

## 11. Pacote para revisão do CSA

O CSA deve revisar: disciplina epistemológica; boundary com ARP-0007; IA além de sitemap; contextuality/contraindications da matrix; object/task balance; flow/state/recovery completeness; responsive/accessibility coverage; artifact proportionality; empirical limitations; traceability sem schema; e risco de bureaucracy/automation precoce.

Disposition solicitada: `accept as evidence`, `request revision`, `request targeted evidence` ou `reject`; não `canonize by silence`. O ARP continua aberto.

## 12. Project Status Snapshot

```json
{
  "current_milestone": {
    "id": "V1-M02",
    "status": "in_progress",
    "current_checkpoint": "information_architecture_user_flow_review",
    "closure_recommended": false
  },
  "completed": [
    "Information Architecture and Navigation Research Report",
    "Navigation Model Decision Matrix",
    "User Flow and State Modeling Framework",
    "IA, Flow and Artifact Selection Guide"
  ],
  "pending": [
    "CSA review",
    "Council decision on candidate definitions, matrices and selection guidance",
    "Empirical application to representative cases"
  ],
  "blocked": [
    "Navigation selection engine and schemas",
    "Canonical IA, flow, state or artifact types",
    "Visual Reference Interpretation",
    "Design System and Technology Catalog",
    "Frontend and executable benchmarks"
  ],
  "decisions_required": [
    "Accept, revise or reject candidate IA and flow definitions",
    "Select cases and evidence needed for empirical validation",
    "Determine authority for future navigation and flow completeness decisions",
    "Choose and authorize a future bounded slice or pause"
  ],
  "research_program": {
    "id": "ARP-0009",
    "governance_state": "authorized",
    "research_state": "active",
    "knowledge_maturity": "evidence_gathering",
    "outcome": null,
    "implementation_state": "not_started",
    "operational_state": "not_applicable"
  },
  "documentation_status": {
    "synchronized": true,
    "files_changed": 6,
    "missing_updates": []
  },
  "validation": {
    "documentary_checks_passed": true,
    "build_passed": null,
    "lint_passed": null,
    "typecheck_passed": null
  },
  "recommended_next_action": "CSA and Council review this slice; do not start Visual Reference Interpretation, Design System, catalog, frontend or benchmark automatically."
}
```
