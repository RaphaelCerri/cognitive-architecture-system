---
schema_version: "0.1.0-experimental"
id: AD-003
source_designation: AD-002
kind: knowledge
knowledge_type: architecture_directive
title: "Encerramento da V1-M01 e Início da V1-M02"
status: operational
created_at: 2026-07-22
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
---

# AD-003 — Encerramento da V1-M01 e Início da V1-M02

## Identidade

A diretiva foi recebida com a designação `AD-002`, já ocupada pelo Implementation Handoff Protocol. O ID canônico foi avançado para `AD-003`; a designação recebida permanece registrada em `source_designation`.

## Decisões

1. V1-M01 está formalmente encerrada como `completed`.
2. V1-M02 está autorizada como milestone experimental.
3. O primeiro entregável de V1-M02 é a estrutura canônica do System Overview.
4. Nenhuma expansão do conteúdo deve ocorrer antes da revisão desse checkpoint.
5. AI Developer Experience começa como conceito experimental, sem arquitetura definitiva.
6. Skills devem ser relacionadas conceitualmente a Capabilities e Agents, sem migração ou integração.
7. Orchestrator deve ser registrado como AP e não implementado.

## Restrições

Toda evolução significativa continua sujeita ao ADF, ACP e AIP. O System Overview não substitui as fontes canônicas especializadas; ele orienta e referencia.

## Histórico

- 2026-07-22: V1-M01 encerrada; V1-M02 iniciada; estrutura do System Overview priorizada.
