---
schema_version: 0.1.0-experimental
id: ARP-0009-E45
kind: knowledge
knowledge_type: research_evidence
title: C-lite State, Event and Data Contract Candidates
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E44
  - type: related_to
    target: ARP-0009-E29
  - type: related_to
    target: ARP-0009-E30
---

# C-lite State, Event and Data Contract Candidates

## Natureza

Candidatos de state machine, eventos, commands e modelo de dados para o vertical slice de Stage 3. **Nada aqui é schema estável, tipo canônico ou Ontologia** — são contratos de trabalho do slice, descartáveis e revisáveis. Derivados de E29/E30 (conteúdo e estados exibidos) e E42 (findings).

```text
User Intent != Command != Event != State
```

Intent é o que a pessoa quer; Command é a solicitação estruturada ao sistema; Event é o fato registrado após validação; State é a consequência acumulada dos eventos.

## State machine candidata por família

Dez famílias separadas; nenhum status universal. Formato: estados → eventos que transitam → guards → transições inválidas notáveis.

### 1. Project

- Estados: `draft` → `discovering` → `contextualized` → `planning` → `researching` → `reviewing` → `resolved`
- Eventos: IDEA_SUBMITTED; DISCOVERY_ANSWERED; UNDERSTANDING_CONFIRMED; PLAN_AUTHORIZED; EXECUTION_COMPLETED; RESULT_ACCEPTED/REJECTED
- Guards: não regride sem evento explícito de reabertura; mudança material de understanding reabre `discovering`
- Inválidas: `draft → researching` (pular discovery/plano/autorização)
- Persistência: sim (é o agregado raiz da Memory)
- Representação visível: faixa de contexto persistente (equivalente executável do banner E30)

### 2. Discovery

- Estados: `asking` ⇄ `inspecting` ⇄ `resolving_conflict` → `reviewed`
- Eventos: DISCOVERY_ANSWERED; ASSUMPTION_INSPECTED; ASSUMPTION_CORRECTED; CONTRADICTION_RESOLVED; UNDERSTANDING_CONFIRMED
- Guards: contradição aberta bloqueia `reviewed` somente se marcada blocking; "não sei" é resposta válida que preserva unknown
- Inválidas: `reviewed` sem pelo menos uma pergunta respondida ou confirmada
- Substates `inspecting`/`resolving_conflict` implementam F-05 sem nova superfície

### 3. Plan

- Estados: `proposed` → `revision_requested` → `proposed'` (nova versão) → `submitted`
- Eventos: PLAN_PROPOSED; PLAN_REVISION_REQUESTED; PLAN_REVISED; PLAN_SUBMITTED
- Guards: revisão preserva versão anterior no histórico (lineage)
- Inválidas: editar plano `submitted` sem criar nova versão

### 4. Authorization

- Estados: `pending` → `approved` | `denied`
- Eventos: AUTHORIZATION_REQUESTED; PLAN_AUTHORIZED; PLAN_DENIED
- Guards: ator com `required_authority` (role, não credencial); expiração vincula a autorização a uma execução
- Inválidas: **`approved → running` direto** — aprovação nunca inicia execução (separação central do C-lite)

### 5. Execution

- Estados: `authorized` → `queued` → `running` → (`awaiting_input` ⇄ `running`) | `paused` ⇄ `running` | `failed` → `retry_requested` → `queued` | `cancelled` | `completed`
- Eventos: EXECUTION_QUEUED; EXECUTION_STARTED; INPUT_REQUESTED; INPUT_PROVIDED; EXECUTION_PAUSED/RESUMED; EXECUTION_FAILED; RETRY_REQUESTED; SCOPE_REVISED; EXECUTION_CANCELLED; EXECUTION_COMPLETED; ADVANCE_SCENARIO (motor do roteiro)
- Guards: retry somente de `failed` e dentro da autorização vigente; cancel de qualquer não-terminal; resume revalida escopo/autoridade; progresso nunca é percentual
- Inválidas: `completed → running`; `cancelled → *`; retry de `completed`; F-03 resolvida — `failed → completed` direto é inválida
- Persistência: sim (checkpoint, notas, atividades)

### 6. Artifact

- Estados: `generated` → `under_review` → `accepted` | `revision_requested` | `rejected`
- Eventos: ARTIFACT_GENERATED; REVIEW_STARTED; RESULT_ACCEPTED; REVISION_REQUESTED; RESULT_REJECTED
- Guards: `generated ≠ accepted` (completion não autoaceita); revisão preserva versão
- Inválidas: `accepted → rejected` sem novo ciclo de decisão

### 7. Evidence

- Estados por item: `current` | `partial` | `unavailable` | `stale`
- Eventos: EVIDENCE_RECORDED; EVIDENCE_INVALIDATED; SCOPE_REVISED (remove claim dependente)
- Guards: evidence `unavailable` bloqueia a claim dependente, nunca some silenciosamente
- Inválidas: promover `partial → current` sem novo evento de fonte

### 8. Review

- Estados: `not_started` → `in_review` → `decided`
- Eventos: REVIEW_STARTED; RESULT_ACCEPTED/REVISION_REQUESTED/RESULT_REJECTED
- Guards: revisor ≠ executor (representado por role, não enforcement)

### 9. Decision

- Estados: `pending` → `recorded`
- Eventos: qualquer outcome de review ou autorização
- Conteúdo: ator, autoridade, razão, escopo, consequência, expiração
- Inválidas: decisão sem ator/razão

### 10. Interface

- Estados: `idle` | `editing` | `busy(view)` | `stale_view` | `error`
- Eventos: NAVIGATED; VIEW_REFRESHED; PROJECT_RESUMED
- Guards: `stale_view` no retorno exige refresh do contexto antes de ação sensível (questão de runtime de E31 — o slice a torna observável)

## Event catalog candidato

IDEA_SUBMITTED; DISCOVERY_ANSWERED; ASSUMPTION_INSPECTED; ASSUMPTION_CORRECTED; CONTRADICTION_RESOLVED; UNDERSTANDING_CONFIRMED; PLAN_PROPOSED; PLAN_REVISION_REQUESTED; PLAN_REVISED; PLAN_SUBMITTED; AUTHORIZATION_REQUESTED; PLAN_AUTHORIZED; PLAN_DENIED; EXECUTION_QUEUED; EXECUTION_STARTED; ADVANCE_SCENARIO; INPUT_REQUESTED; INPUT_PROVIDED; EXECUTION_PAUSED; EXECUTION_RESUMED; EXECUTION_FAILED; RETRY_REQUESTED; SCOPE_REVISED; EXECUTION_CANCELLED; EXECUTION_COMPLETED; ARTIFACT_GENERATED; EVIDENCE_RECORDED; EVIDENCE_INVALIDATED; REVIEW_STARTED; RESULT_ACCEPTED; REVISION_REQUESTED; RESULT_REJECTED; MEMORY_UPDATED; PROJECT_RESUMED.

Payload mínimo comum: `event_id`, `sequence`, `actor_role`, `authority_context`, `payload`, `scenario_step` (quando roteirizado). Nomes são candidatos.

## Command model candidato

Commands são solicitações validáveis que, aceitas, emitem eventos:

| Command | Valida | Emite |
|---|---|---|
| SubmitIdea | não vazio | IDEA_SUBMITTED |
| AnswerQuestion / MarkUnknown | pergunta ativa | DISCOVERY_ANSWERED |
| CorrectAssumption | assumption existe | ASSUMPTION_CORRECTED |
| ResolveContradiction | interpretação ∈ opções | CONTRADICTION_RESOLVED |
| ConfirmUnderstanding | sem contradição blocking | UNDERSTANDING_CONFIRMED |
| RequestPlanRevision | plano `proposed` | PLAN_REVISION_REQUESTED |
| Authorize / Deny | actor tem required_authority | PLAN_AUTHORIZED / PLAN_DENIED |
| QueueExecution | authorization `approved` não expirada | EXECUTION_QUEUED |
| ProvideInput | input `requested`; opção ∈ permitidas | INPUT_PROVIDED |
| RequestRetry | execution `failed`; autorização vigente | RETRY_REQUESTED |
| ReviseScope | execution `failed`/`paused` | SCOPE_REVISED |
| Cancel | estado não-terminal | EXECUTION_CANCELLED |
| DecideReview(outcome) | artifact `under_review` | RESULT_ACCEPTED / REVISION_REQUESTED / RESULT_REJECTED |
| ResumeProject | Memory existe | PROJECT_RESUMED |

Command rejeitado **não** emite evento de domínio; produz erro explicável ("por que não foi possível") — material de teste de transições inválidas.

## Data model candidates

Somente os dados necessários ao slice. Campos = mínimo; Ident = identidade; Ciclo = lifecycle; Rel = relações; Own = ownership; Ver = versionamento; Pers = persistência; Fix = fixture sintética necessária.

| Entidade | Campos mínimos | Ident | Ciclo | Rel | Own | Ver | Pers | Fix |
|---|---|---|---|---|---|---|---|---|
| Project | id, name, state, created_step | id estável | draft→resolved | raiz de tudo | usuário | não | sim | sim |
| Idea | text, submitted_step | por projeto | imutável | → Project | usuário | não | sim | sim |
| Discovery Question | id, text, reason, status | DQ-xx | asked→answered/unknown | → Understanding | sistema | não | sim | sim (DQ-01..10) |
| Answer | question_id, value, is_unknown | por pergunta | imutável (nova resposta = novo registro) | → Question | usuário | não | sim | sim |
| Assumption | id, text, origin, confidence, impact, status | A-xx | active→corrected | → Understanding, → Contradiction | sistema | sim (before/after) | sim | sim |
| Contradiction | id, statements, interpretations, status, chosen | C-xx | open→resolved/unresolved | → Assumptions | usuário decide | não | sim | sim (C-01/C-02) |
| Project Context / Understanding | problem, users, in_scope, non_goals, assumptions, unknowns, version | por versão | versionado | → tudo acima | sistema propõe, usuário confirma | **sim** | sim | sim |
| Plan | objective, steps, artifacts, risks, limits, version, status | P-vN | proposed→submitted | → Understanding | proposer | **sim** | sim | sim |
| Authorization Request | action, actor_role, authority, scope, risks, reversibility, expiry, output, status | AR-xx | pending→approved/denied | → Plan, → Execution | autoridade | não | sim | sim |
| Execution | id, state, checkpoint, scenario_step, started/ended | EXEC-xx | queued→terminal | → Authorization, → Artifact | research_executor | não | **sim** | sim |
| Execution Activity | execution_id, text, step | sequencial | append-only | → Execution | sistema | não | sim | sim |
| Requested Input | id, missing, reason, impact, options, status, answer | RI-xx | requested→provided/deferred | → Execution | usuário responde | não | sim | sim (RI-01) |
| Artifact | id, title, version, status, findings, limitations, content_ref | A-SIM-xx@vN | generated→decided | → Execution, → Evidence | executor gera; autoridade decide | **sim** | sim | sim |
| Evidence Item | id, claim, provenance, freshness, confidence, limitation, status | EV-xx | recorded→invalidated | → Artifact (por claim) | sistema | não | sim | sim (EV-SIM-01..03) |
| Review | artifact_id, state, comments | por artifact | not_started→decided | → Artifact, → Decision | revisor | não | sim | — |
| Decision | id, type, actor_role, reason, scope, consequence, step | D-xx | recorded (imutável) | → alvo | autoridade | não | sim | — |
| Project Memory Entry | ver E44/§Memory | por projeto | derivada de eventos | → tudo | sistema | implícito (event log) | **sim** | derivável |

Nenhuma entidade é promovida a tipo ontológico; identidades usam prefixos do cenário E29 para rastreabilidade.

## Project Memory candidate (mínimo executável)

Campos: project summary; initial intent; current understanding (versão corrente); assumptions (com correções); plan (versão corrente + lineage); authorization decision; execution history (eventos terminais e checkpoints); artifact (id@versão + status); evidence (ids + status); review decision; unresolved items; pending action; recent changes.

Formatos comparados em E46 (persistence options). Regra preservada: **Markdown/YAML permanece a Source of Truth candidata do sistema maior**; qualquer formato de runtime do slice é representação derivada e descartável.

## Artifact and Evidence contracts (distintos)

**Artifact:** output principal; version; status; content (seções); limitations; review state. **Evidence:** claim (texto da afirmação que sustenta); source; provenance; status; freshness; limitation; confidence. Evidence referencia claims específicas do artifact — **nunca** lista genérica de links; uma claim sem evidence válida é exibida como bloqueada (comportamento de EV-SIM-03 preservado).

## Invalid transitions (conjunto de teste candidato)

1. autorizar sem understanding confirmado; 2. enfileirar sem autorização aprovada; 3. iniciar execução por aprovação (approve ≠ start); 4. retry de completed/cancelled; 5. failed → completed direto; 6. aceitar artifact que não está under_review; 7. executor decidir o próprio review; 8. editar plano submitted sem nova versão; 9. promover evidence unavailable; 10. ação sensível a partir de stale_view sem refresh. Cada uma deve ser rejeitada com explicação — matéria-prima dos invalid-transition tests (E47).
