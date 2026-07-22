---
schema_version: "0.1.0-experimental"
id: AD-003
source_designation: AD-002
kind: knowledge
knowledge_type: architecture_directive
title: "Encerramento da V1-M01 e Início da V1-M02"
status: operational
version: "1.1"
created_at: 2026-07-22
updated_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
relations:
  - type: follows
    target: AD-002
  - type: closes
    target: V1-M01
  - type: authorizes
    target: V1-M02
  - type: prioritizes
    target: ARCH-001
  - type: schedules
    target: AP-0006
  - type: introduces
    target: AP-0011
  - type: introduces
    target: AP-0012
  - type: approves
    target: ADR-0013
  - type: approves
    target: AP-0013
  - type: introduces
    target: AP-0014
  - type: introduces
    target: AP-0015
  - type: introduces
    target: AP-0016
  - type: introduces
    target: AP-0017
---

# AD-003 — Encerramento da V1-M01 e Início da V1-M02

## Identidade

A diretiva foi recebida com a designação `AD-002`, já ocupada pelo Implementation Handoff Protocol. O ID canônico foi avançado para `AD-003`; a designação recebida permanece registrada em `source_designation`. O conteúdo complementar recebido posteriormente foi incorporado como versão 1.1 da mesma decisão, e não como uma nova diretiva.

## Decisões

1. V1-M01 está formalmente encerrada como `completed`.
2. V1-M02 está autorizada como milestone experimental.
3. O primeiro entregável de V1-M02 é a estrutura canônica do System Overview.
4. Nenhuma expansão definitiva do conteúdo deve ocorrer antes da revisão desse checkpoint.
5. AI Developer Experience começa como conceito experimental, sem arquitetura definitiva.
6. Skills pertencem ao sistema, não ao modelo ou runtime de origem, e devem ser relacionadas conceitualmente a Capabilities, Agents e Orchestrator sem migração ou integração neste checkpoint.
7. Orchestrator deve permanecer como AP e não ser implementado. Sua hipótese inclui coordenar o processo cognitivo, selecionar Capabilities, Skills e Agents, avaliar necessidade de RFCs, escolher processos cognitivos e decidir escalada e autonomia dentro da governança.
8. Cognitive Pipeline deve ser documentado como visão conceitual inicial, sem automação.
9. RFC é introduzido como Knowledge Object especializado e não constitui Source of Truth independente.
10. Architecture Interview é aprovada como candidata a Skill, inspirada no padrão “Grill Me”, sem implementação.
11. Visualização arquitetural, onboarding interativo e consumo documental pelo NotebookLM devem ser registrados como APs estratégicas, não implementados.

## Cognitive Pipeline inicial

`Idea → Knowledge Capture → Architecture Interview → RFC → Council Review → ADR → Planning → Orchestrator → Capability Selection → Skill Selection → Agent Selection → Execution → Validation → Documentation → Project Memory → Evolution`

Essa cadeia é uma hipótese de fluxo cognitivo e de governança. Ela não define ainda tipos ontológicos, contratos, automatizações ou obrigatoriedade universal de cada etapa.

## Restrições

Toda evolução significativa continua sujeita ao ADF, ACP e AIP. O System Overview não substitui as fontes canônicas especializadas; ele orienta e referencia. Nenhum schema de RFC, Skill, Agent, Orchestrator ou Cognitive Pipeline está autorizado neste checkpoint.

## Histórico

- 2026-07-22: V1-M01 encerrada; V1-M02 iniciada; estrutura do System Overview priorizada.
- 2026-07-22: versão 1.1 incorpora Cognitive Pipeline, RFC, Architecture Interview, propriedade sistêmica das Skills e APs estratégicas.
