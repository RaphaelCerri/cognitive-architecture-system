---
schema_version: "0.1.0-experimental"
id: GOV-002
kind: knowledge
knowledge_type: governance_policy
title: "Operating Modes and Personal Low-Risk Governance Profile"
status: operational
created_at: 2026-07-23
owner: "Architecture Council"
language: pt-BR
relations:
  - type: refines
    target: GOV-001
  - type: authorized_by
    target: AD-006
  - type: informed_by
    target: ARP-0009-E70
  - type: informed_by
    target: ARP-0009-E74
---

# GOV-002 — Modos de Operação e Perfil de Governança Pessoal

Fecha os gaps G-A02 (modos sem definição formal) e G-A14 (governança
desproporcional para uso pessoal) do registro de auditoria E74.

## 1. Os três modos

| Modo | Definição | Estado |
|---|---|---|
| **Personal Mode** | um owner principal (o CVO) usa o sistema para os próprios projetos, localmente; agentes atuam sob revisão humana do próprio owner | **modo atual e único ativo** |
| **Team Mode** | múltiplas pessoas e agentes colaboram em projetos compartilhados | intentionally_deferred |
| **Product Mode** | o sistema é oferecido a terceiros | intentionally_deferred |

**Regra de contaminação:** requisito de um modo superior nunca entra num modo
inferior sem justificativa registrada (a auditoria confirmou zero contaminação
até aqui — G-A20 false_positive; manter).

**Transição de modo é decisão do Council**, nunca consequência implícita de
uma feature. Pré-requisitos mínimos já mapeados: Team exige identity
enforcement + merge de Memory + concorrência (E70 §10); Product exige Team +
tenancy/billing/abuse/conformance.

## 2. Perfil `personal-low-risk` (aplicável somente em Personal Mode)

Elegibilidade — TODAS as condições:

- ação local e reversível (`git revert` limpo);
- sem efeito externo (rede/publicação/pagamento/pessoa);
- sem dado pessoal de terceiros; sem credencial;
- sem mudança de artefato canônico de nível ≥ Governança (PMM/GOV/ADR/
  Ontologia) — esses continuam no processo integral;
- sem início de capability bloqueada (execução real, autenticação etc.).

O que o perfil MUDA (proporcionalidade, E73 §6):

| Controle | Processo integral | personal-low-risk |
|---|---|---|
| Autorização prévia | diretiva formal do Council | intenção registrada em 1 linha no PROJECT_STATUS ou no IHR reduzido |
| Handoff | IHR 12/12 | **IHR-lite**: contexto (2–3 linhas) + arquivos + validação executada + desvio/risco + rollback |
| Revisão | CSA por checkpoint | o **humano owner** pode aceitar ação local própria com `solo_operator_exception`; agente/runtime nunca autoaprova; CSA revisa **em lote** no próximo checkpoint integral |
| Retorno | RETURN_SCHEMA 2 camadas | Layer 1 apenas |
| Budgets | por diretiva | default: ≤5 arquivos, ≤2 commits por unidade; acima disso, sobe para o processo integral |

O que o perfil NÃO muda: disciplina de Git (sem `add .`, sem push sem decisão,
sem rewrite); preservação de untracked; proibição de dados reais em evidence;
stopping rules; blockers não compensáveis; PMM-001 (decisão permanente
continua indo para o repositório).

## 3. Auditabilidade do perfil

Cada uso do perfil registra no commit ou IHR-lite: `profile:
personal-low-risk` + a exceção de operador único. O CSA pode, em revisão de
lote, reclassificar um uso como indevido — o que reabre o item no processo
integral. Abuso recorrente do perfil suspende-o (decisão do Council).

`solo_operator_exception` descreve acumulação humana no Personal Mode. Não
concede a um agente ou à mesma sessão de runtime authority para aceitar o
próprio desenho ou execução. Transições CSA/CEA seguem GOV-003 e GRP-001.

## 4. Limitação

Este perfil reduz cerimônia, não risco inerente — por isso a elegibilidade é
estreita. Ele existe para que o custo do processo seja proporcional ao risco
real (auditoria E73 §6: "o gargalo não é o Council, é o overhead de escrita"),
não para contornar governança.
