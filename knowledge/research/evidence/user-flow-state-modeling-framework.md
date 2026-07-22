---
schema_version: 0.1.0-experimental
document_role: research_modeling_framework
title: User Flow and State Modeling Framework
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0009]
language: pt-BR
---

# User Flow and State Modeling Framework

## Status

**[Decisão]** Framework documental candidato para análise; não é schema, DSL, engine, workflow runtime, UI spec ou contrato estável.

## Flow definition e anatomy

**[Hipótese] User Flow:** representação dos caminhos, decisões, system responses e states pelos quais um ator busca um goal em determinado contexto. Task Flow pode omitir variações de ator; Screen Flow enfatiza transições visuais; Workflow governa execução operacional.

| Elemento candidato | Pergunta | Regra de qualidade candidata |
|---|---|---|
| Actor/role | quem inicia/participa? | distinguir user, approver, support, system e AI actor |
| Goal/success | qual outcome observável? | não confundir click/submit com conclusão |
| Trigger | o que inicia? | incluir event, schedule, message ou previous state |
| Preconditions | o que deve ser verdadeiro? | data, authn, authority, dependency, connectivity |
| Starting state | de onde começa? | domain/execution/interface states separados |
| Step/decision | o que ator/sistema faz/decide? | owner, input, output e branch compreensíveis |
| System response | qual feedback/effect ocorre? | status, latency, side effects e uncertainty visíveis |
| Data/content | o que é necessário/exposto? | source, sensitivity, validation e stale behavior |
| Permission | quem pode ver/agir/aprovar? | authority source; UI não substitui enforcement |
| Alternate/exception | que variação legítima/falha ocorre? | priorizar por likelihood × impact, sem falso exhaustive |
| Recovery/cancel | como interromper, desfazer ou retomar? | preservation, compensation, support e audit |
| Completion/postcondition | o que mudou e como provar? | success, partial success e pending work distintos |
| Evidence/test | como verificar? | criterion ligado a need/requirement/state |

## Flow types

- **[Hipótese] Happy path:** curso esperado sob condições válidas; nunca coverage total.
- **[Hipótese] Alternate path:** caminho válido alternativo para o mesmo goal.
- **[Hipótese] Exception/failure path:** dependency, validation, authority ou system failure impede curso normal.
- **[Hipótese] Recovery path:** restaura progresso, compensa efeito ou leva a safe state.
- **[Hipótese] Destructive path:** remove/alteração material; exige authority, impact e reversibility explícitos.
- **[Hipótese] Approval/escalation path:** transfere decision/authority, com pending/denied/expired states.
- **[Hipótese] Onboarding/repeat-use:** learning/setup versus efficiency/shortcut sem presumir o mesmo apoio.
- **[Hipótese] Authentication/authorization:** identity proof versus permission; failures não devem ser confundidos.
- **[Hipótese] Transaction/collaboration:** atomic/compensated effects versus concurrency, ownership e conflict.
- **[Hipótese] Background/asynchronous:** work continua fora da interação; requer status, notification, resume e reconciliation.
- **[Hipótese] AI-assisted/human-takeover:** proposta/execução com uncertainty, source, scope, approval, interrupt e takeover.

## State families

| Família | Exemplos candidatos | Perguntas obrigatórias quando aplicável |
|---|---|---|
| Domain | draft, active, approved, archived, deleted | quem transiciona, invariants, history, reversibility? |
| Execution | queued, running, paused, retrying, partial, succeeded, failed, cancelled | id, progress, idempotency, timeout, retry, compensation? |
| Interface | initial, loading, empty, populated, warning, error | o que mostrar/anunciar e qual ação disponível? |
| Data/content | partial, stale, syncing, conflicting, unavailable | source/time, merge, confidence, refresh? |
| Network/device | online, degraded, offline, reconnecting | local preservation, sync/conflict, safe operation? |
| Authority | anonymous, unauthorized, forbidden, pending approval, expired | identity, reason disclosure, access request, reauth? |
| Lifecycle | created, expiring, expired, archived, recoverable, irreversible | retention, owner, restore window, evidence? |

```text
Domain state != Execution state != Interface state
```

**[Heurística]** Modelar somente states que mudam action, meaning, risk, content, permission, test ou recovery. Um loading spinner não deve alterar domain state; uma execution failure não implica que o objeto voltou automaticamente ao estado anterior.

## Completeness review

**[Hipótese]** Um flow é suficientemente completo para a decisão atual quando:

1. actor, goal, trigger, preconditions e success estão claros;
2. primary e material alternate paths chegam a postconditions definidos;
3. validation, permission, dependency e concurrency failures relevantes possuem treatment;
4. cancel, interruption, back, timeout, retry e resume foram avaliados, não necessariamente incluídos;
5. domain, execution e interface states não estão confundidos;
6. destructive/irreversible effects têm authority, preview/confirmation ou rationale e recovery/compensation;
7. accessibility, content, responsive e multi-role implications estão registradas;
8. cada material state possui feedback, allowed action e test/evidence intent;
9. unknowns, assumptions e omitted paths têm rationale/owner;
10. traceability liga need/requirement → flow/state → criterion/test.

Isto é **[Hipótese]**, não gate automatizado.

## Error and recovery architecture

| Camada | Estratégia candidata | Aplicabilidade/risco |
|---|---|---|
| Prevent | constrain, defaults, clear prerequisites, permission precheck | default enviesado ou constraint excessiva |
| Detect | validation, conflict/stale/dependency checks | detecção tardia e false positives |
| Explain | cause in user language, affected scope, saved work, next action | disclosure de security/internal details |
| Confirm | review/preview/reason/second factor | confirmation fatigue; usar por impact/authority |
| Preserve | draft/autosave/checkpoint/local queue | privacy, stale data, false saved signal |
| Retry | retry with status/backoff/idempotency | duplicate effects e indefinite loops |
| Undo/rollback | reverse same effect | nem todo external/financial effect é reversible |
| Compensate | new action neutralizes prior effect | não equivale a rollback; audit remains |
| Resume | continue from safe checkpoint | invalidated preconditions e expired authority |
| Escalate/support | handoff with context/evidence | loss of context, sensitive disclosure |

**[Heurística]** Error content candidata responde: o que aconteceu; qual item/step; o que foi ou não realizado; se data/progresso está seguro; o que fazer agora; como obter ajuda; e correlation/evidence quando apropriado. Evitar “algo deu errado” isolado.

## Destructive and high-impact actions

**[Heurística]** Avaliar preview, confirmation, reason, approval, cooldown, reauthentication/second factor, audit e undo por: severity, irreversibility, scope, frequency, detectability, authority e recoverability. Frequent low-impact actions podem favorecer undo; rare high-impact/bulk actions podem exigir preview + explicit scope + approval. Não transformar todo submit em confirmação.

## Interruption, async e partial success

**[Hipótese]** Para interruption/async registrar execution identity, current/last confirmed step, ownership, expected duration, background behavior, notification, cancel semantics, retry/resume, expiry, dependency changes e result location. Streaming é presentation de progresso, não proof de completion.

**[Heurística]** Partial success deve enumerar succeeded/failed/pending items, effects já aplicados, safe next action e retry scope. “Success” não pode esconder pending approval, eventual consistency ou failed subset.

## Multi-role and permission-aware flows

| Concern | Candidate treatment |
|---|---|
| Visibility | **[Hipótese]** object/field/action scope derivado da política; considerar existence disclosure |
| Hidden vs disabled | **[Heurística]** hide por irrelevance/disclosure; disable quando discoverability/availability explanation ajuda e é segura |
| Delegation | **[Hipótese]** grantor, grantee, scope, duration, revocation e evidence |
| Approval chain | **[Hipótese]** order/parallelism, quorum, pending, rejected, changes requested, expired |
| Separation of duties | **[Hipótese]** initiator não aprova quando Policy exigir; UI evidencia actor/current authority |
| Impersonation | **[Heurística]** explicit mode, banner, limits, reason, audit, safe exit; depender de ARP-0007 |
| Ownership transfer | **[Hipótese]** source/target authority, affected permissions/content, confirmation e audit |

Não se define autorização; representa-se sua consequência para flow e state.

## AI-assisted flows

**[Hipótese]** Distinguir states `proposed`, `awaiting_approval`, `executing`, `streaming`, `paused`, `needs_input`, `completed`, `partially_completed`, `failed`, `cancelled` e `taken_over` somente quando material. Registrar agent/model identity quando relevante, tools/sources, action scope, granted authority, uncertainty, memory effect, artifacts produced e audit.

**[Heurística]** Human approval precisa explicar objeto, ação, scope, expected effects, sensitive data e reversibility. Takeover deve preservar context/progress e deixar claro quem controla. Generated content não deve parecer source evidence; tool call intent não deve parecer executed effect.

## Traceability and test view

| Relation | Integrity question candidate |
|---|---|
| Need → Task | existe task observável para a need? |
| Task → Flow | flow cobre actor/context e outcome? |
| Requirement → Step/state | qual comportamento materializa o requirement? |
| State → Action/feedback | o ator sabe o que ocorre e o que pode fazer? |
| Action → Authority | qual Policy/permission permite? |
| Exception → Recovery | existe safe next state ou explicit terminal state? |
| Flow → Screen/view | cada surface tem reason; nenhuma é inferred como requirement |
| Criterion → Test → Evidence | qual observation prova success/failure? |

**[Hipótese]** As relações são muitos-para-muitos; nada aqui fixa cardinalidade.

## Evaluation selection

- **[Heurística] Cognitive walkthrough:** discoverability/learnability step by step; expert evidence.
- **[Heurística] Moderated usability:** observed completion, comprehension, hesitation e recovery with users.
- **[Heurística] Accessibility review:** keyboard/focus/AT/status/error/complete-process coverage.
- **[Heurística] Failure injection/scenario review:** dependency, timeout, partial, retry e recovery; futuro e não executado.
- **[Heurística] Analytics/support logs:** abandonment, loops, retries, errors e production contexts; causal explanation limitada.
- **[Heurística] Security/privacy review:** authority, disclosure, destructive effects e audit; authority permanece ARP-0007.

## Anti-patterns

- happy path apresentado como flow completo;
- page sequence sem goal/state/decision;
- error como terminal genérico;
- validation error confundido com system failure;
- domain e visual state compartilhando um único label;
- “cancel” que não cancela background effect;
- retry que duplica operação;
- success antes de confirmação do effect;
- permission failure sem distinguir unauthenticated/unauthorized/forbidden;
- hidden action como enforcement;
- confirmation universal;
- autosave sem status ou recovery;
- async work sem identity/result location;
- AI proposal parecendo execution;
- screen inventory usado como flow;
- exhaustive state list sem applicability ou tests.

Todos são **[Heurística]** e exigem contexto.

## Open questions

- Qual nível de detalhe reduz erro sem tornar model stale?
- Como definir material exception por likelihood/impact sem thresholds universais?
- Quais state families merecem future shared vocabulary?
- Como representar nested/concurrent flows e long-running AI work sem schema prematuro?
- Quem aprova flow completeness em contextos Critical?
- Quando recovery precisa de formal compensation workflow sob outra autoridade?
