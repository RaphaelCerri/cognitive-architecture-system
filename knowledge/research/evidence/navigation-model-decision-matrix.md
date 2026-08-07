---
schema_version: 0.1.0-experimental
document_role: research_decision_matrix
title: Navigation Model Decision Matrix
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

# Navigation Model Decision Matrix

## Status e modo de uso

**[Decisão]** Esta matriz compara opções; não aprova modelo universal, threshold, engine, component ou tecnologia.

**[Hipótese]** A decisão mínima registra primary tasks, destinations/objects, hierarchy, frequency, device/input, expertise, density, permissions, urgency, growth e evidence. Modelos podem ser combinados quando cada um possui função e scope distinguíveis.

Legenda qualitativa: `Alta`, `Média`, `Baixa` descreve tendência **[Heurística]**, não score normativo.

## Matriz comparativa

| Modelo | Escala/profundidade | Frequência/expertise | Device/density | Discoverability/orientation | Accessibility | Growth | Casos adequados | Contraindicações |
|---|---|---|---|---|---|---|---|---|
| Top navigation | pequena–média; rasa | mixed | desktop forte; baixa densidade | alta visibilidade; orientation média | ordem/focus claros; overflow é risco | baixa–média | destinos globais estáveis | many destinations, deep hierarchy, narrow viewport |
| Sidebar | média–alta; 2–3 níveis visíveis | repeat/novice-expert | desktop/data-heavy; ocupa largura | alta persistência e ancestry local | keyboard, headings e collapse state necessários | alta | apps, docs, admin, object collections | linear journey, sparse content, mobile sem transformação |
| Bottom navigation | pequena; rasa | alta frequência | mobile/touch; baixa capacidade | alta para destinos primários | labels e target size; safe areas | baixa | 3–5 áreas frequentes e estáveis | hierarchy, many roles/destinations, desktop primary |
| Tabs | pequena; uma relação local | repeat use | qualquer; limitada por largura | alta local, baixa global | semantics/keyboard/focus e selected state | baixa | alternate views relacionadas | page/global navigation, sequential reading, comparison entre panes |
| Mega menu | alta breadth; rasa–média | mixed | desktop; dense | high scan se labels/grupos bons | focus/keyboard/zoom complexos | média–alta | large categorized content | small/mobile-first, categories instáveis, weak taxonomy |
| Nested menu | média–alta; profunda | repeat/expert | desktop; mobile exige redesign | orientation cai com profundidade | disclosure/focus/path precisam ser claros | alta | stable hierarchy, technical tools | ambiguous parents, frequent cross-branch switching |
| Contextual navigation | variável; local | repeat | qualquer | alta relevância, discoverability variável | consistent placement/name e landmarks | alta | related objects/actions, next-best task | critical action only contextual/hidden |
| Breadcrumbs | hierarchy support | qualquer | responsive com truncation | alta ancestry/orientation | nav label e current page semantics | alta | multi-level hierarchy | flat site, progress indicator, history/back replacement |
| Command palette | grande command set | expert/repeat | keyboard/desktop forte | baixa para unknown commands; alta recall | keyboard/name/results/status rigorosos | alta | creation/navigation/actions em power tools | only path, novice/critical tasks, touch-only |
| Search-first | very large/dynamic | mixed | qualquer; query input | high se intent expressável; orientation baixa pós-query sem context | labels, suggestions, status, result structure | alta | catalogs, docs, object repositories | small corpus, unknown vocabulary, ranking/permission weakness |
| Dashboard | summary scope | repeat/monitoring | desktop/data-heavy | alta status, navigation variável | headings/tables/charts/refresh status | média | triage, monitoring, role work queue | generic home, infrequent user, unrelated widget dump |
| Object-centered | large object graph | domain-aware | data-heavy/multiplatform | alta quando objects são reconhecidos | relationship/action semantics | alta | CRM, projects, orders, documents, agents | internal data model alien to user; cross-object task dominant |
| Role-based | variable subset | role-specialized | qualquer | baixa clutter; cross-role orientation risk | personalization must remain predictable | alta | materially different duties/authority | role as security control; users with multiple/transient roles |
| Step navigation | bounded sequence | novice/occasional | mobile–desktop | alta progress/local orientation | titles, current/completed state, back/focus | baixa–média | transactions, onboarding, application | parallel tasks, frequent switching, unknown long process |
| Hub-and-spoke | medium modules | mixed | mobile–desktop | stable return point; repeated backtracking | hub headings/status and return behavior | média | independent modules/tasks | cross-spoke comparison, deep continuous work |
| Hybrid | variable | mixed | variable | depende de explicit scopes | cumulative complexity | alta | complex products with global/local/object/task layers | overlap, duplicate paths, inconsistent labels |

## Selection questions

1. **[Heurística] Task:** o usuário vem para destination, object, command, monitoring ou sequence?
2. **[Heurística] Set:** quantos destinos existem, quão estáveis e como se agrupam segundo evidence?
3. **[Heurística] Context:** precisa preservar object, role, workspace, filter ou execution context ao navegar?
4. **[Heurística] Switching:** compara áreas rapidamente ou conclui uma jornada linear?
5. **[Heurística] Recall:** reconhece labels/objects ou sabe formular query/command?
6. **[Heurística] Device/input:** touch, keyboard, screen reader, voice, viewport e interruption alteram o custo?
7. **[Heurística] Authority:** destinos/actions/results variam por permission? A ausência pode ser explicada sem disclosure?
8. **[Heurística] Growth:** novas categorias e roles preservam o modelo ou exigirão redesign?
9. **[Heurística] Evidence:** qual teste reduzirá a maior uncertainty antes da decisão?

## Candidate reasoning record

| Campo | Conteúdo esperado |
|---|---|
| Decision scope | **[Hipótese]** product/role/task/view em que o modelo vale |
| Inputs | **[Hipótese]** tasks, objects, destinations, hierarchy, frequency, devices, roles, risk |
| Options | **[Hipótese]** modelos considerados e combinações |
| Evidence | **[Hipótese]** user research, content inventory, analytics/logs, card sort/tree/usability results |
| Rationale | **[Hipótese]** trade-offs de findability, orientation, switching e growth |
| Accessibility | **[Hipótese]** keyboard/focus/landmarks/labels/reflow/target impacts aplicáveis |
| Permission safety | **[Hipótese]** visibility, disabled/hidden rationale e result disclosure |
| Responsive transformation | **[Hipótese]** o que persiste, colapsa, muda de mecanismo ou deixa de existir |
| Contraindications | **[Hipótese]** condições que invalidam a escolha |
| Validation/expiry | **[Hipótese]** método, criterion e mudança que exige revisão |

Nenhum campo constitui schema executável.

## Combination patterns candidatas

- **[Heurística] Global + local:** top navigation para áreas estáveis e sidebar para hierarchy contextual.
- **[Heurística] Object + contextual:** object-centered primary com related objects/actions no contexto.
- **[Heurística] Browse + search:** taxonomy para reconhecimento e search para known-item/large corpus.
- **[Heurística] Role + task:** entry points priorizados por role, mantendo IA comum quando a mesma entidade é compartilhada.
- **[Heurística] Hub + step:** hub para escolher uma tarefa e sequence para concluí-la.
- **[Heurística] Dashboard + object:** triage/status aponta para objetos, sem transformar todo destino em widget.

**[Hipótese]** Uma combinação é coerente quando o usuário consegue prever qual mecanismo responde a qual pergunta. Caminhos duplicados são aceitáveis apenas se atendem intents distintos e preservam labels/authority consistentes.

## Search, filter e result matrix

| Mecanismo | Trigger candidato | Requisitos candidatos | Riscos/contraindicações |
|---|---|---|---|
| Global search | corpus/objects atravessam áreas | scope, ranking, type, permissions, recent/history privacy | vazamento de existência; relevance opaca |
| Local search | lista/contexto grande | scope visível, clear/reset, result count/status | parecer global; perder context |
| Autocomplete/suggestions | vocabulary conhecido e value in acceleration | source, keyboard, active descendant/status, sensitive-history policy | steering, disclosure, noisy ranking |
| Filters | conjunto grande com atributos discriminantes | counts/state, apply/clear, URL/share/back, no-results | controles sem efeito; state perdido |
| Facets | múltiplas dimensões úteis | taxonomy/metadata quality, counts, multi-select semantics | high cognitive load, inconsistent counts |
| Sorting | ordem muda decisão | default/rationale, direction, stable semantics | default bias escondido |
| Grouping/views | tarefas exigem perspectivas recorrentes | labels, persistence, permissions | duplicated IA e hidden items |
| Pagination | posição/retorno/comparação importam | total/context, prev/next, filter resets | page cost e stale position |
| Infinite scroll | open-ended consumption, low position need | loading/status, end, recovery, accessible alternative | footer unreachable, position loss, task completion ambiguity |

## Responsive transformation matrix

| Desktop pattern | Transformação candidata | Preservar | Não presumir |
|---|---|---|---|
| persistent sidebar | drawer, hierarchical index ou scoped landing | current location, hierarchy, direct access | esconder tudo em hamburger sem teste |
| top + local navigation | prioritized primary + secondary entry | global/local distinction | mesmos labels cabem ou têm mesma salience |
| mega menu | categorized landing/search/hierarchical disclosure | grouping e high-value paths | hover ou wide scan em touch |
| dashboard grid | priority stream, sections ou task queue | status, urgent work, comparison need | empilhar todos widgets |
| wide table/object list | priority columns, alternate view ou two-dimensional region | identity, actions, sorting/filter state | eliminar fields/actions silenciosamente |
| modal multi-step | dedicated page/flow | context, save/cancel/recovery | modal permanece adequado em small viewport |

## Accessibility and evidence checks

**[Fato normativo]** Quando WCAG 2.2 é aplicável, a realização precisa satisfazer success criteria pertinentes; esta matriz não certifica conformidade. **[Heurística]** Antes de recomendar um modelo, avaliar keyboard path, focus order/visibility, landmarks/names, current location, headings/labels, zoom/reflow, target size, consistent navigation e status/error communication.

**[Heurística]** Evidence mínimo depende da uncertainty: content inventory e stakeholder map não são user validation; card sorting explora grouping; tree testing testa estrutura; prototype/usability revela interaction e recovery; analytics/logs mostram production behavior sem explicar intenção; accessibility review combina automated, manual e assistive technology/user evidence.

## Anti-pattern checks

- **[Heurística]** “Tem cinco itens, então use bottom navigation.”
- **[Heurística]** “É enterprise, então use sidebar.”
- **[Heurística]** “Mobile exige hamburger.”
- **[Heurística]** “Usuário avançado dispensa discoverability.”
- **[Heurística]** “Search compensa taxonomy ruim.”
- **[Heurística]** “Role-based menu implementa authorization.”
- **[Heurística]** “Breadcrumb é back/progress.”
- **[Heurística]** “Tabs reduzem complexidade” quando apenas escondem informação.
- **[Heurística]** “Dashboard é home” sem monitoring/triage task.
- **[Heurística]** Score agregado escolhe modelo sem contraindications e evidence.

## Disposição preliminar

**[Recomendação]** Manter seleção explicável e contextual: identificar primary IA axis, escolher o menor conjunto de mecanismos, registrar trade-offs/contraindications e validar a maior uncertainty. Deferir engine, thresholds e universal defaults até aplicação empírica em casos distintos.
