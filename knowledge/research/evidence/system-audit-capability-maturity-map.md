---
schema_version: 0.1.0-experimental
id: ARP-0009-E70
kind: knowledge
knowledge_type: research_evidence
title: System Audit — Capability and Maturity Map with Operating Mode Boundaries
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: constrained_by
    target: PMM-001
---

# System Audit — Capability and Maturity Map (com fronteiras de modo)

Estados: `absent` · `named_only` · `researched` · `conceptually_defined` ·
`experimentally_implemented` · `technically_verified` · `operationally_ready`
· `personally_validated` · `externally_validated` · `production_ready` ·
`intentionally_deferred` · `n/a`. **Maturidade nunca foi inferida só pela
existência de arquivo** — a coluna evidência aponta teste/decisão/uso real.

## 1. Vision and product intent

| Capacidade | Estado | Evidência / limitação |
|---|---|---|
| Problem definition / value proposition | conceptually_defined | Charter; ARCH-001 §1–4 sem redação |
| Target user | researched | perfil "technical founder" + viés declarado (ARP-0009); zero evidência externa |
| **Personal Mode como fronteira formal** | **named_only** | citado nesta diretiva pela 1ª vez; nenhum artifact o define — **gap estrutural** |
| Team Mode / Product Mode | named_only / intentionally_deferred | idem; corretamente adiados |
| Mode transitions | absent | nenhuma definição |
| Non-goals | conceptually_defined | Charter + nota de fronteira por slice (disciplina forte) |

## 2. Cognitive workflow (o núcleo)

| Capacidade | Estado | Evidência |
|---|---|---|
| Intent capture → discovery → assumptions → contradictions → planning → authorization → execution(simulada) → input → failure → recovery → artifact → evidence → review → acceptance | **technically_verified** | 43+74 testes; 2 fixtures; walkthrough E42 |
| Continuity / return journey | technically_verified (técnica) | stale context + Memory adapter (46 testes); **zero validação humana** |
| Execução REAL (motor) | **conceptually_defined** | E52 §Execution engine gap; AP-0012 proposed — maior lacuna executável do sistema |

## 3. Canonical memory

| Capacidade | Estado | Evidência |
|---|---|---|
| Project Memory institucional (o repo) | operationally_ready | 6 trocas de executor/sessão sobreviventes; 2 testes vivos de bootstrap |
| Project Memory de produto (formato) | experimentally_implemented | E60 Feasible; formato experimental aceito |
| Provenance / accepted decisions / unresolved | experimentally_implemented | campos canônicos testados |
| Update proposal | experimentally_implemented | no-auto-write provado byte a byte |
| **Aceite humano de proposal (processo)** | **absent** | quem aplica, como, com qual registro — indefinido (E71 §2) |
| Audit/event artifact separado | named_only | Opção D aprovada; artifact não existe (gap explícito) |
| Branching / merge | absent / intentionally_deferred | Team Mode |
| Versioning/migration de formato | experimentally_implemented (invalidação) / absent (migração) | rejeita versão incompatível; não migra |
| Stale detection | technically_verified | 13 casos classificados |

## 4. Agents and execution

| Capacidade | Estado | Evidência |
|---|---|---|
| Actor/identity/role/capability/authority/permission/delegation | conceptually_defined | E56–E59 (vocabulário aceito); enforcement ZERO |
| Session/accountability | conceptually_defined + operationally_praticado | IHRs registram sessão/desvios; sem artefato técnico |
| Planner/executor/tools/interruption/cancellation/retry reais | absent (produto) / operationally_ready (institucional) | EXECUTION_CONTRACT funciona para executores DO REPO; nada existe para agentes DO PRODUTO |
| Resource limits / budgets | operationally_ready (processo por slice) / absent (técnico) | budgets cumpridos em 33 IHRs; nenhuma medição de token/custo |
| Multi-agent coordination | intentionally_deferred | correto |

## 5. Architecture (camadas)

| Capacidade | Estado | Evidência |
|---|---|---|
| Domain | technically_verified | 2 implementações testadas (duplicação gerenciada) |
| Application/Interface | experimentally_implemented | slice IIFE; descartável por design |
| Compiler | **named_only** | ARCH-001 §18 "planejado"; adapter é proto-evidência |
| Adapters/persistence | experimentally_implemented | StorageAdapter + memory adapter |
| Integration / deployment | absent / intentionally_deferred | correto |
| Event model / audit | conceptually_defined | E58; artifact ausente |
| Observability | **absent** | nenhuma métrica/log estruturado/custo em lugar algum |
| Extensibility (tipos de projeto) | named_only | ScenarioFixture prova 2 cenários; nada além |

## 6. Experience

| Capacidade | Estado | Evidência |
|---|---|---|
| **Criação de projeto REAL (sem editar YAML)** | **absent** | só fixtures; a Memory experimental é escrita à mão — gap de maior alavancagem (ver E74) |
| Status/authority comprehension (design) | experimentally_implemented | 6 views; padrões E53 |
| Comprehension (humanos reais) | **researched, not validated** | estudo desenhado (E61–E69); G-17 aberto |
| Return journey UX | experimentally_implemented | técnica ok; humana pendente |
| Accessibility | experimentally_implemented (estrutural) | E49: empírico 0 passed; HV-01–07 abertas |
| Onboarding / personal workflow / advanced controls | absent | nada além do protótipo |

## 7. Security/privacy — ver E72 (threat model). Síntese: design partial_to_strong; enforcement early; privacidade do estudo strong (não operada); dados pessoais do uso real: absent.

## 8. Reliability and operations

| Capacidade | Estado | Evidência |
|---|---|---|
| Determinism/idempotency/replay | technically_verified | replay deep-equal; retry idempotente testado |
| Consistency/version compat | experimentally_implemented | invalidação por versão |
| **Backup/restore/DR do repositório** | **absent** | nenhum artifact define; Git local é cópia única a menos que o Chief tenha remoto privado — **não verificável pelo repo** |
| Health/logs/metrics/traces/custo | absent | — |
| Model fallback / provider failure | operationally_ready (institucional) / absent (produto) | troca real de executor provada; produto não tem modelo |
| Offline/local-first | technically_verified | todo o sistema é local-first por construção |

## 9. Engineering quality

| Capacidade | Estado | Evidência |
|---|---|---|
| Unit/domain/adapter/replay tests | technically_verified | 163 testes + 46 = 209 |
| Security scans (boundary) | technically_verified | fonte+bundle+memories |
| Integration/contract/property/mutation/perf tests | absent | ver E73 §testing |
| CI / release / environments | absent / intentionally_deferred | local-first deliberado; sem CI nenhum guard roda automaticamente |
| Documentation drift | **parcialmente falho** | 5 índices desatualizados comprovados (inventário) — corrigidos como Tier A nesta slice |
| Repo hygiene | strong | sem TODOs, sem mojibake, worktree disciplinado |

## 10. Operating modes — fronteiras

**Personal Mode (o modo real de hoje):** mínimo necessário = criação de
projeto real + execução real limitada + Memory sem edição manual + backup.
Autoaprovação: já resolvida em política (solo_operator_exception, baixo
risco). Burocracia: a governança atual foi desenhada para PESQUISA
multi-ator; para uso pessoal diário ela é desproporcional (ver E73
§governance) — precisa de um perfil "personal-low-risk" derivado, não de
exceções caso a caso. Credenciais locais: sem política (bloqueado até
ARP-0007 ativar — correto, mas limita execução real a ferramentas sem
credencial).

**Team Mode:** tudo `intentionally_deferred` corretamente; pré-requisitos
mapeados (identity enforcement, merge de Memory, concorrência). **Product
Mode:** idem + tenancy/billing/abuse — nenhuma contaminação do Personal Mode
detectada nos artifacts (disciplina boa; manter).

## 11. Duplicações e capacidades construídas 2+ vezes

Domínio ×2 (gerenciado); persistência snapshot ×2 (Stage3 + adapter — formas
distintas, ok); driver de teste de jornada ×2 (helpers do Stage3 e da
extração — aceitável); **nenhuma triplicação não gerenciada encontrada**.
