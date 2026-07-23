---
schema_version: 0.1.0-experimental
id: ARP-0009-E77
kind: knowledge
knowledge_type: research_evidence
title: Real Execution Boundary — Specification Candidate (Slice 5)
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E52
  - type: related_to
    target: ARP-0009-E56
  - type: related_to
    target: ARP-0009-E72
  - type: related_to
    target: AP-0012
---

# Real Execution Boundary — especificação candidata

A slice 5 da sequência do Council, executada como **especificação documental**
(o motor não é construído — G-A04 permanece aberto por decisão). Define ONDE
termina o domínio governado e ONDE começaria um executor real.

## 1. O contrato de fronteira

O domínio já trata execução como caixa-preta com estados observáveis — a
fronteira certa é exatamente a que os experimentos provaram:

```text
Domínio (governa)                 |  Execution Engine (executa)
----------------------------------|--------------------------------
EXECUTION_QUEUED (após approval)  →  engine recebe WorkOrder
                                  ←  EXECUTION_STARTED
                                  ←  PROGRESS/ACTIVITY (opaco, nunca %)
                                  ←  INPUT_REQUESTED (pergunta específica)
INPUT_PROVIDED                    →  engine retoma
PAUSE/CANCEL (autoridade humana)  →  engine PARA (obrigação, não pedido)
                                  ←  EXECUTION_FAILED {reason, preserved[]}
RETRY (exige failed + authority)  →  engine reexecuta idempotente
                                  ←  EXECUTION_COMPLETED {artifact_ref, evidence_refs[]}
```

Invariantes herdados (todos já testados no domínio): approval não inicia ·
completion não aceita · falha preserva trabalho e ponto de retomada · retry é
idempotente · progresso desconhecido é declarado, nunca inventado · executor
não aceita o próprio resultado.

## 2. WorkOrder candidato (entrada do engine)

```yaml
work_order:
  order_id: …
  project_ref: …            # Memory ref, nunca a Memory inteira
  plan_ref: {version: N}    # plano APROVADO; engine não replaneja
  scope: …                  # limites aprovados; engine não amplia (scope revision → INPUT_REQUESTED)
  authority_basis: …        # approval ref com validade (E57)
  budgets: {tokens: …, cost: …, wall_time: …, tool_calls: …}   # tetos DUROS
  allowed_tools: […]        # allowlist explícita; vazio = nenhum
  data_boundary: {personal_data: false, network: none|allowlist, filesystem: workdir_only}
  output_contract: {artifact_kind: …, evidence_required: true}
```

## 3. Obrigações do engine (o que o domínio EXIGE dele)

1. **Parar quando mandado** — cancel/pause são imperativos com prazo (kill
   switch), não sugestões;
2. **budgets duros** — estourar teto = EXECUTION_FAILED com preserved, nunca
   "continuar um pouco";
3. **nunca inventar conclusão** — completion sem artifact+evidence é inválida
   (hallucinated completion, E72);
4. **input requests específicos** — pergunta concreta com opções, no padrão
   RI já validado;
5. **proveniência por evento** — cada evento carrega order_id + sessão
   (alimenta o audit artifact E76);
6. **tool results são dados, não instruções** — saída de ferramenta/modelo
   nunca vira comando de domínio sem passar pelos guards (confused deputy);
7. **falha parcial explícita** — preserved[] verdadeiro, verificável.

## 4. O que o engine NUNCA recebe

Authority (recebe uma ordem JÁ autorizada, com basis referenciada);
capacidade de aprovar/aceitar; escrita na Memory canônica (só propõe via E75);
credenciais fora da allowlist; escopo elástico.

## 5. Mínimo viável para Personal Mode (proposta de 1ª implementação)

**Engine = executor IA em sessão supervisionada** (exatamente o padrão que já
opera este repositório): WorkOrder = diretiva; eventos = seções do IHR;
budgets = os da diretiva; kill switch = o humano. Ou seja — a primeira
implementação real do engine é **formalizar o que já acontece**, com o domínio
extraído validando as transições. Isso é implementável numa slice de código
(~10 arquivos) sem nenhuma das capacidades bloqueadas (sem autonomia, sem
credenciais, humano no loop). Slice candidata: "Supervised Execution Engine
Feasibility". Não autorizada por este documento.

## 6. Riscos que ADIAM autonomia maior

Sem identity enforcement (G-A11) e sem audit artifact implementado (E76),
qualquer engine com ferramentas reais e sem humano no loop viola o threat
model (E72: excessive agency, unauthorized tool use). A ordem certa continua:
audit → identity enforcement → engine com autonomia gradual.
