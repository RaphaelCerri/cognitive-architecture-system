---
schema_version: 0.1.0-experimental
document_role: research_evidence_report
title: Information Architecture and Navigation Research Report
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

# Information Architecture and Navigation Research Report

## Objetivo, método e disciplina epistemológica

**[Decisão]** Esta slice investiga como necessidades, tarefas, conteúdo, objetos, papéis, permissões e contexto podem orientar informação, navegação, fluxos e estados antes de qualquer UI, wireframe, schema ou implementação.

As afirmações materiais são marcadas como **Fato normativo**, **Evidência empírica**, **Orientação institucional**, **Heurística**, **Preferência**, **Hipótese** ou **Decisão**. Orientação de GOV.UK, USWDS e WAI não é norma universal; achados experimentais não provam uma solução para todo contexto.

## Evidência externa selecionada

| Categoria | Fonte e achado limitado | Implicação candidata |
|---|---|---|
| Fato normativo | WCAG 2.2 requer, quando aplicável ao conteúdo web e ao nível de conformidade, critérios como múltiplas formas de localizar páginas, headings/labels descritivos, focus order, navegação/identificação consistentes, identificação/sugestão de erro, status messages, reflow, target size e complete processes. | IA e flows precisam considerar orientação, completude do processo e recuperação desde a arquitetura; conformidade não escolhe menu nem prova usabilidade. |
| Orientação institucional | WAI recomenda cues de orientação, headings claros e breadcrumbs; APG descreve landmarks de navegação e o padrão acessível de breadcrumb. | A arquitetura deve identificar regiões e orientação; APG é pattern guidance, não obrigação de adotar ARIA quando HTML nativo basta. |
| Orientação institucional | GOV.UK orienta escopar serviços pelo problema do usuário, não pela organização ou tecnologia; navegação explícita é mais indicada em serviços repetidos/multitarefa e pode ser desnecessária em jornada linear. | Tasks before pages; navegação é contextual e uma estrutura organizacional não deve ser copiada automaticamente. |
| Orientação institucional | GOV.UK diferencia breadcrumbs para hierarquia, back links para retorno e tabs para conteúdo relacionado; desencoraja breadcrumbs em estrutura plana/progresso linear e tabs como page navigation. | Elementos semelhantes servem a modelos mentais distintos; seleção exige estrutura, tarefa e expectativa conhecidas. |
| Orientação institucional | GOV.UK experience mapping é indicado para experiências longitudinais, multicanal e com múltiplos atores; moderated usability testing observa participantes completando tarefas. | Journey map e user flow não são substitutos; artifact e método devem responder à pergunta de pesquisa. |
| Orientação institucional | USWDS trata patterns como guidance contextual e documenta componentes de navegação com considerações de acessibilidade. | Sistemas de design fornecem evidência e convenções, não uma IA universal nem autorização tecnológica. |
| Evidência empírica | Petrie, Power, Cairns e Seneler (2011) encontraram diferenças de tempo/modalidade e de modelos mentais culturais em card sorting; Faiks e Hyland (2000) mostram um caso de elicitação de agrupamentos por usuários. | Card sorting informa agrupamento/labels, mas não valida sozinho findability, permissions, conteúdo ou fluxo. |
| Evidência empírica | Kuric, Demcak e Krajcovic (2025) compararam variantes de tree testing e protótipo; o modo de apresentar níveis alterou comportamento e resultados. | Tree testing não é instrumento neutro: configuração, tarefa e representação devem constar na proveniência. |
| Evidência empírica | Estudos de menus em contextos distintos encontraram interação entre breadth, depth, estrutura, dispositivo, modalidade e tarefa; resultados de IVR e in-vehicle contestam regras universais simples. | “Poucos itens” ou “raso sempre vence” são heurísticas contextuais, não leis; testar no contexto de uso. |
| Evidência empírica | Khajouei et al. (2017) encontraram cobertura diferente entre heuristic evaluation e cognitive walkthrough em um sistema de saúde. | Expert review e task walkthrough revelam classes diferentes de problemas e não substituem testes com usuários. |

## Definições candidatas e fronteiras

- **[Hipótese] Information Architecture (IA):** organização significativa de informação, objetos, conteúdo, funções e relações para apoiar compreensão, findability, orientação e ação.
- **[Hipótese] Content Architecture:** tipos, estrutura, metadados, ownership, lifecycle, relações, localização, permissões e publicação do conteúdo.
- **[Hipótese] Navigation Architecture:** destinos, caminhos, mecanismos e regras de orientação que permitem mover-se ou alternar contexto dentro da IA.
- **[Hipótese] Sitemap:** representação hierárquica ou relacional de locations; é uma view parcial, não a IA inteira.
- **[Hipótese] Taxonomy:** classificação controlada de conceitos/itens; pode sustentar browse, filters e metadata.
- **[Hipótese] Ontology for interface use:** representação de conceitos, relações e restrições do domínio consumida pela experiência; não altera a Ontologia canônica do projeto.
- **[Hipótese] Labeling system:** regras que ligam conceitos e ações a labels compreensíveis, consistentes, localizáveis e acessíveis.
- **[Hipótese] Search model / Filter model:** regras de indexação, query, ranking, scope, facets, sorting, permissions e feedback; filter restringe um conjunto conhecido, search procura por query.
- **[Hipótese] Journey:** representação longitudinal da experiência de um ator por etapas/canais; **flow** representa decisões/transições para um objetivo delimitado; **workflow** representa execução operacional governada.
- **[Hipótese] State model:** estados e transições relevantes do domínio, execução ou interface, mantendo essas três naturezas separadas.
- **[Hipótese] Screen inventory:** view de coverage das superfícies previstas; não é sitemap, flow nem autorização para desenhar telas.
- **[Hipótese] Permission model:** autoridade sobre ver, agir, delegar, aprovar e auditar; a experiência o consome, mas não define a política de autorização.

```text
Journey != Flow != Workflow != Navigation != Sitemap != Screen Inventory
Domain state != Execution state != Interface state
```

Nenhum conceito é promovido a Knowledge Type.

## Modelos candidatos de IA

| Modelo | Adequação provável | Riscos/limitações |
|---|---|---|
| Hierarchical | categorias relativamente estáveis, path e ancestry relevantes | profundidade, ambiguous parent, duplicação |
| Sequential | tarefa ordenada, onboarding ou transaction | retorno, branching e tarefas paralelas difíceis |
| Matrix | usuários precisam combinar dimensões/views | choice overload e inconsistência |
| Network | relações e exploração são centrais | lostness, pouca previsibilidade |
| Hub-and-spoke | módulos independentes com retorno a hub | switching repetitivo, hub bottleneck |
| Object-centered | objetos do domínio têm identidade, lifecycle e ações | linguagem interna, object sprawl, ações transversais |
| Task-centered | objetivos/ações dominam o modelo mental | duplicação entre tarefas e pouca visão do domínio |
| Audience/role-centered | necessidades divergem materialmente por público | silos, overlap e disclosure indevido |
| Topic-centered | conteúdo informativo e browse por assunto | topics ambíguos ou organização editorial |
| Lifecycle-centered | estados/etapas do objeto orientam trabalho | lifecycle não corresponde à tarefa do usuário |
| Search-first | coleção grande/dinâmica e query expressável | zero-query, vocabulário, ranking e recall |
| Hybrid | domínio exige mais de um eixo | regras pouco claras e caminhos inconsistentes |

**[Heurística]** A escolha deve considerar task frequency, structure stability, depth, object/action volume, expertise, device/input, urgency, density, risk, permissions e need for comparison. Combinar modelos somente com uma regra de orientação explicável.

## Domain objects e object-centered UX

**[Hipótese]** Um object map candidato registra identity, properties, relations, lifecycle, states, actions, history, ownership, permissions, views e bulk operations. A navegação por objeto tende a ajudar quando pessoas reconhecem entidades duráveis e precisam acompanhar seu estado; task-centered tende a ajudar quando o objetivo atravessa muitos objetos ou o domínio interno não é linguagem do usuário.

**[Heurística]** Cada objeto exposto deve responder: o usuário o reconhece? Qual identificação é estável? Quais relações importam? O que pode fazer neste estado? Com qual autoridade? O que mudou? Como volta/recupera? Objects não justificam uma página por entidade nem expõem automaticamente tabelas internas.

## Taxonomy, labels e conteúdo

**[Heurística]** Separar nome interno, termo de domínio, label de interface, comando, descrição e ajuda contextual. Registrar synonym, acronym, locale, ambiguity e deprecated term. Preferir linguagem observada nos usuários quando não conflitar com precisão, segurança ou norma aplicável; testar comprehension e expectation.

**[Hipótese]** Content Architecture precisa registrar content type, fields/metadata, source, owner, status, version, audience, locale, sensitivity, permission, retention/expiry, relationships e searchability. Structured content favorece reuso e filtro; unstructured content preserva expressão, mas demanda indexação e governance diferentes. Conteúdo sem owner/lifecycle é risco arquitetural.

## Navegação, busca, filtros e orientação

- **[Heurística] Top navigation:** destinos globais poucos/estáveis; perde espaço e escala mal com profundidade.
- **[Heurística] Sidebar:** many persistent destinations, hierarchy e repeated work; custo de espaço e transformação mobile.
- **[Heurística] Bottom navigation:** destinos primários frequentes em small touch contexts; capacidade limitada e risco de ocultar secondary tasks.
- **[Heurística] Tabs:** alternância rápida entre seções relacionadas; não usar como global navigation ou quando comparar conteúdo exige memória.
- **[Heurística] Mega/nested menu:** coleção ampla e categorizável; exige labels/keyboard/mobile testing e pode aumentar scanning.
- **[Heurística] Contextual navigation:** ações/relations do contexto atual; discoverability depende de cues consistentes.
- **[Heurística] Breadcrumb:** ancestry e orientação em hierarquia; não representa progresso linear nem substitui back behavior.
- **[Heurística] Command palette:** usuários experientes, command recall/search e keyboard; não deve ser único caminho para tarefas críticas.
- **[Heurística] Search-first:** volume alto/dinâmico e intent por query; exige ranking, synonyms, no-results, scope e permission safety.
- **[Heurística] Dashboard:** monitoring/triage/comparison comprovados; não é home universal nem depósito de widgets.
- **[Heurística] Step navigation:** sequência e progresso; branching, save/resume e back semantics precisam ser explícitos.

**[Hipótese]** Search global/local deve mostrar scope; suggestions e recent items exigem privacy; filters/facets só têm valor se atributos discriminam um conjunto relevante; sorting deve explicar default; pagination preserva posição melhor que infinite scroll em tarefas de retorno/comparação. Resultados precisam aplicar authorization antes de revelar existência, snippets ou counts sensíveis.

## Flow, state, erro e recuperação

**[Hipótese]** Um flow completo registra actor, goal, trigger, preconditions, start state, steps, decisions, system responses, data, permissions, alternate/failure/recovery/cancel/interruption paths, completion, postconditions, success criteria e evidence. O happy path sozinho não demonstra completude.

**[Heurística]** Distinguir initial/loading/empty/populated/partial/stale/syncing/queued/processing/paused/success/warning/error/degraded/offline/unauthorized/forbidden/expired/archived/deleted/conflicting/recoverable/irreversible conforme aplicabilidade. Não criar uma enumeração universal.

**[Heurística]** Recovery ladder candidata: prevent → constrain/validate → preview → confirm → execute idempotently quando cabível → status/evidence → undo/retry/resume/rollback/compensate → support/escalate. Confirmation excessiva vira habit; irreversibilidade, authority, impact e detectability devem definir rigor. Mensagem de erro deve dizer o que ocorreu, impacto, o que permaneceu salvo e próxima ação segura.

## Multi-role, permissões e risco

**[Hipótese]** Role-aware IA pode adaptar priorities, mas não deve confundir role label com authorization. Hidden controls reduzem clutter e disclosure; disabled controls podem ensinar disponibilidade futura e explicar motivo. A decisão depende de security disclosure, expectativa, task continuity e possibilidade de obter acesso.

**[Heurística]** Fluxos sensíveis registram acting identity, object owner, authority source, scope/duration, delegation, approval/separation of duties, audit evidence, revocation e takeover. A política permanece sob ARP-0007; esta slice somente representa implicações de experiência.

## Responsive IA e carga cognitiva

**[Fato normativo]** WCAG 2.2, quando aplicável, inclui requirements de reflow, orientation, keyboard, focus, target size e redundant entry com exceções próprias. **[Heurística]** Responsive IA pode repriorizar, regroup, collapse, transform navigation, preserve context e alterar modal/page behavior; não é apenas redimensionar desktop.

**[Evidência empírica]** Resultados de menu variam com modalidade, display, estrutura, task e população. **[Heurística]** Reduzir extraneous effort com recognition, informative labels, grouping, progressive disclosure, persistent context e recovery; não aplicar “7±2”, máximo universal de níveis ou hamburger universal como fato científico. Expertise pode inverter o valor de guidance e density.

## Accessibility em IA e flows

**[Fato normativo]** WCAG não prescreve a IA, mas critérios aplicáveis condicionam page titles, headings/labels, link purpose, focus order/visibility, multiple ways, consistent navigation/identification/help, error handling, status announcements, time, reauthentication, redundant entry e complete processes.

**[Orientação institucional]** WAI/APG apoia landmarks nomeados, breadcrumb semântico e cues de orientação. **[Heurística]** Testar estrutura com teclado, screen reader, zoom/reflow, voice e diverse cognitive/motor contexts. Automação verifica apenas parte; conformidade de components isolados não prova completude do flow.

## IA AI-native

**[Hipótese]** Interfaces com conversations, projects, agents, tasks, tools, memory, sources, approvals, executions, plans, artifacts, branches e logs precisam tornar visíveis scope, provenance, uncertainty, authority, current execution state e effects. Streaming, background work e multiple executions exigem identity/status, cancel/resume, notification e reconciliation.

**[Orientação institucional]** NIST AI RMF/GenAI Profile informa risk management e oversight, não um layout. **[Heurística]** A experiência deve distinguir proposed versus executed action, model content versus source, temporary context versus durable memory e human takeover versus automation. Não se projeta frontend nesta slice.

## Traceability candidata

```text
User Need → Task → Flow → State → Interaction Requirement
          → Screen/View → Implementation → Test → Evidence

Content Object → Taxonomy → Navigation → Search/Filter → Presentation
```

**[Hipótese]** As relações são many-to-many e etapas podem ser omitidas com rationale. Checks futuros procurariam need sem task, flow sem requirement, untreated state, action sem authority, screen sem need, test sem criterion, conteúdo sem owner e search result que viola permission. Nenhuma cardinalidade ou schema é adotado.

## Métodos de avaliação e evidência produzida

| Método | Pergunta que ajuda a responder | Evidência/limitação |
|---|---|---|
| Card sorting | como participantes agrupam/nomeiam itens? | grouping/label signals; sensível à amostra, cards e análise; não mede task success real |
| Tree testing | pessoas encontram destinos numa estrutura? | path, success, directness e hesitation; representação altera comportamento |
| First-click/navigation test | o primeiro cue/path aponta na direção esperada? | early orientation; não prova completion nem recovery |
| Moderated usability | pessoas completam tarefas e por quê falham? | observed behavior/thoughts no cenário; sample/prototype/context limitam generalização |
| Cognitive walkthrough | novo usuário consegue descobrir cada passo? | expert task-specific inspection; não é user evidence |
| Heuristic review | quais violações potenciais de heurísticas aparecem? | broad expert findings; depende de heurística/expertise e não prova incidence |
| Content/comprehension test | labels/instructions são entendidos? | interpretation evidence; não prova navigation ecosystem |
| Search logs/analytics | quais queries, paths e failures ocorrem em produção? | behavioral aggregate; intent, exclusion e causality podem faltar |
| Accessibility review | critérios/patterns e barriers são atendidos? | combinação automated/manual/AT/user; nenhum método isolado é completo |

## Anti-patterns

**[Heurística]** Evitar sitemap como única IA; menu antes de conteúdo/tarefa; organograma como navegação; tudo no menu principal; níveis excessivos; hamburger, dashboard ou search como defaults universais; tabs como global navigation; filtros sem volume; infinite scroll quando posição importa; página por requirement; flow apenas happy path; domain/interface state misturados; erro genérico; destructive action sem recovery; ação disabled sem razão; indisponibilidade escondida quando orientação é necessária; labels técnicas de permission; desktop reduzido para mobile; artifact sem decision; e método de avaliação tratado como prova total.

## Recomendações preliminares

1. **[Recomendação]** Modelar task, object, state, authority e exceptions antes de page/view.
2. **[Recomendação]** Selecionar modelo de IA/navegação por contexto e registrar contraindicações; nenhum modelo universal.
3. **[Recomendação]** Usar conjunto mínimo de artifacts que responda às perguntas atuais e preservar traceability.
4. **[Recomendação]** Tratar taxonomy/content/search como sistema conectado, com ownership e permission-safe results.
5. **[Recomendação]** Exigir flow completeness proporcional, incluindo recovery e interruption quando material.
6. **[Recomendação]** Combinar métodos de avaliação conforme o tipo de evidence necessário; validar com usuários no contexto quando a decisão for material.
7. **[Recomendação]** Manter accessibility e ARP-0007 como constraints transversais, sem duplicar authority.

## Questões abertas e riscos residuais

- Como medir artifact sufficiency sem transformar guidance em gate?
- Quando object-centered e task-centered navigation devem coexistir e qual eixo é primário?
- Como representar IA personalizada por role sem fragmentar orientação ou revelar informação?
- Quais relations mínimas sustentam change impact sem schema prematuro?
- Como calibrar search/filter thresholds e responsive transformations empiricamente?
- Como distinguir states de AI execution, conversation e durable artifacts de modo compreensível?
- Riscos: documentação stale, taxonomy de insiders, false precision, menu selection automatizada cedo, accessibility reduzida a checklist e expert review confundida com user evidence.

## Fontes e proveniência

Todas acessadas em 2026-07-22:

- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WAI Designing for Web Accessibility: https://www.w3.org/WAI/tips/designing/
- WAI-ARIA APG Navigation Landmark: https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html
- WAI-ARIA APG Breadcrumb Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/
- GOV.UK Scoping your service: https://www.gov.uk/service-manual/design/scoping-your-service
- GOV.UK Map a user's whole problem: https://www.gov.uk/service-manual/design/map-a-users-whole-problem
- GOV.UK Experience map: https://www.gov.uk/service-manual/user-research/creating-an-experience-map/
- GOV.UK Navigate a service: https://design-system.service.gov.uk/patterns/navigate-a-service/
- GOV.UK Breadcrumbs: https://design-system.service.gov.uk/components/breadcrumbs/
- GOV.UK Tabs: https://design-system.service.gov.uk/components/tabs/
- GOV.UK Pagination: https://design-system.service.gov.uk/components/pagination/
- GOV.UK Moderated usability testing: https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing
- USWDS Patterns: https://designsystem.digital.gov/patterns/
- USWDS Side Navigation: https://designsystem.digital.gov/components/side-navigation/
- Petrie, Power, Cairns and Seneler, Card Sorts (2011): https://doi.org/10.1007/978-3-642-23768-3_26
- Faiks and Hyland (2000): https://doi.org/10.5860/crl.61.4.349
- Kuric, Demcak and Krajcovic, IA validation (2025): https://doi.org/10.1016/j.infsof.2025.107740
- Jiang and Chen, small-display menus (2021): https://doi.org/10.1080/10447318.2021.1954781
- Burnett et al., in-vehicle menus (2013): https://doi.org/10.1016/j.displa.2013.07.001
- Commarford et al., auditory menus (2008): https://doi.org/10.1518/001872008X250665
- Khajouei et al., HE vs CW (2017): https://doi.org/10.1093/jamia/ocw100
- NIST AI RMF GenAI Profile: https://doi.org/10.6028/NIST.AI.600-1

Limitações: textos institucionais refletem seus contextos; abstracts foram usados em parte da literatura paga; nenhum user research ou benchmark local foi executado. A síntese não estabelece conformidade jurídica, norma setorial ou causalidade universal.
