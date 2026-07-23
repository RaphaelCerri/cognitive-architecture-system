---
schema_version: 0.1.0-experimental
id: ARP-0009-E69
kind: knowledge
knowledge_type: research_evidence
title: C-lite Minimal Study — Gate Closure Matrix and G-17 Authorization Readiness
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E64
  - type: related_to
    target: ARP-0009-E65
  - type: related_to
    target: ARP-0009-E66
  - type: related_to
    target: ARP-0009-E67
  - type: related_to
    target: ARP-0009-E68
---

# C-lite Minimal Study — Matriz de Fechamento de Gates e Prontidão para G-17

```text
Operational Readiness != Study Authorization
G-17 Readiness != G-17 Approval
Assigned Candidate != Confirmed Operator
```

## 1. Gate closure matrix (G-01–G-17, pós E65–E68)

Estados: `open` · `conditionally_ready` (falta somente confirmação humana já
identificada) · `ready_for_council_closure` (evidência documental completa;
falta o ato de aceite) · `closed` · `not_applicable` (ao estudo mínimo).

| Gate | Antes (E64) | Agora | Evidência | Ação restante | Risco residual |
|---|---|---|---|---|---|
| G-01 roles | encolhido, aberto | **conditionally_ready** | matriz E67 §1 | confirmar Raphael (DH-3) + nomear note taker (DH-4) | acumulação de papéis (mitigada e divulgada) |
| G-02 conflicts | aberto | **conditionally_ready** | conflitos de Raphael registrados (E67 §1) | declaração do note taker quando nomeado | viés de criador |
| G-03 stimulus freeze | substituído | **ready_for_council_closure** | commit `4c80585` identificado + validação E68 §2 | Council fixa o commit na autorização | drift se o slice mudar antes das sessões |
| G-04 environment | reduzido | **conditionally_ready** | parte técnica executada (E68 §2); checklist empírico definido (§4) | executar checklist (~30 min, operador) e congelar browser/versão | checks de teclado/zoom pendentes |
| G-05 disclosure | quase fechado | **ready_for_council_closure** | boundary no estímulo + abertura E62 §6 + consent E65 §2 | aceite | nenhum material |
| G-06 recruitment | aberto | **conditionally_ready** | screener E65 §1 + convite neutro embutido | escolher canal (DH-6) + aprovar texto | autos-seleção de conhecidos |
| G-07 participants | fechável | **ready_for_council_closure** | E63 §1 aceito em IHR-0032 + screener E65 | aceite formal | amostra pequena (declarada) |
| G-08 consent/quotes | aberto | **conditionally_ready** | artifact candidato completo E65 §2 (paráfrase default) | aceite final + formatação acessível (DH-5) | não é parecer jurídico |
| G-09 recording | fechável | **ready_for_council_closure** | baseline sem gravação em E62/E63/E65 | constar na autorização | menos verbatim (aceito) |
| G-10 compensation | aberto | **conditionally_ready** | comparação + recomendação R$ 120 PIX (E66 §1) | decisão de valor/método (DH-1) | dado financeiro mínimo (chave PIX) |
| G-11 storage | aberto | **conditionally_ready** | desenho R1/R2/R3 + BitLocker local (E66 §2) | confirmação do local (DH-2) | operação manual de backup |
| G-12 retention | fechável | **ready_for_council_closure** | baseline E66 §3 (30/90/180; deleção auditável) | aprovação do privacy owner | obrigações fiscais a confirmar se escalar |
| G-13 accommodations | aberto | **ready_for_council_closure** | procedimento E67 §3 + contato candidato | aceite + confirmar contato | AT não verificada limita quem pode participar |
| G-14 protocol | fechável | **ready_for_council_closure** | E62 aceito em IHR-0032 + templates E67 §2 | aceite formal | — |
| G-15 specialists | waiver aprovado | **closed (por waiver)** | registro formal E67 §4, não reutilizável | — | menos perspectivas independentes (divulgado) |
| G-16 budget/calendar | aberto | **conditionally_ready** | esforço estimado (E64 §3) + teto = 6 × R$ 120 + tempo de 2 operadores | janela de datas (DH-6) + teto financeiro (DH-1) | agenda do Chief |
| G-17 authorization | absoluto | **open — absolute Council authorization required** | pacote §2 abaixo | decisão do Council após DH-1..6 | — |

**Resumo: 0 open estruturais · 7 conditionally_ready (todas dependendo apenas
das decisões humanas DH-1..6) · 8 ready_for_council_closure · 1 closed
(waiver) · G-17 aberto por definição.**

## 2. G-17 decision package (para futura decisão — NÃO é a autorização)

```yaml
g17_decision_package:                  # candidato — status: not_authorized
  study: C-lite Minimal Product Experience Study (E61–E64)
  stimulus: vertical slice executável @ commit 4c80585 (freeze na autorização)
  cohorts: { A_technical: 2–4, B_nontechnical: 2 }
  participants: 4–6 (stopping por suficiência)
  tasks: MT-1..MT-8 (E62), ≤60 min/sessão, Option D
  recording: none (paráfrase; citação curta só com autorização específica)
  compensation: R$ 120 fixo via PIX (candidato — DH-1)
  storage: R1/R2/R3 separados, volume cifrado local (candidato — DH-2)
  retention: 30/90/180 conforme E66 §3
  operators: moderator (Raphael, candidato) + note taker (PENDENTE — DH-4)
             + CSA reviewer + Council
  gates: ver matriz §1; G-15 waived (não reutilizável)
  risks: viés de criador-moderador (mitigado/divulgado); amostra pequena;
         checks empíricos de ambiente pendentes até o checklist E68 §4
  residual_gaps: note taker; valor/local finais; janela de datas;
                 checklist empírico; consentimento final acessível
  rollback_cancellation: cancelar a qualquer momento preserva dados conforme
    consentimento; sessão individual pode ser parada por moderador/participante;
    retirada = compensação integral + deleção conforme E66
  recommendation: authorize_with_conditions
  conditions:
    - DH-1..DH-6 respondidas (ver §3)
    - checklist empírico E68 §4 executado com resultado registrado
    - consentimento final aceito e acessível
    - commit do estímulo congelado na autorização
```

Recomendação do executor: **authorize_with_conditions** — nenhuma lacuna
restante é de pesquisa; todas são decisões ou ações operacionais de horas.

## 3. Human decisions outstanding (DH — nenhuma presumida)

| DH | Decisão | Dono | Candidato em cima da mesa |
|---|---|---|---|
| DH-1 | valor e método da compensação (+ teto do estudo) | Chief/Council | R$ 120 fixo via PIX; teto 6×R$ 120 = R$ 720 |
| DH-2 | local de armazenamento | Chief | volume BitLocker local + backup cifrado manual (OneDrive corporativo explicitamente rejeitado como default) |
| DH-3 | confirmação de Raphael nos 6 papéis candidatos | Raphael | aceite explícito com conflitos registrados |
| DH-4 | **note taker** (nome + aceite) | Raphael | `blocking_unassigned` — única lacuna de pessoas |
| DH-5 | aceite final do consentimento (+ formatação acessível) | Chief/Council | E65 §2 |
| DH-6 | canal de recrutamento + janela de datas | Chief | rede pessoal/profissional com convite neutro; janela a definir |
| DH-7 | **G-17** — autorizar, autorizar com condições, não autorizar | **Council** | pacote §2 |

## 4. O que este documento NÃO faz

Não fecha G-17; não confirma pessoas; não divulga screener; não contata
ninguém; não paga; não agenda; não coleta. `closed` só foi usado onde o
Council já decidiu (waiver G-15).
