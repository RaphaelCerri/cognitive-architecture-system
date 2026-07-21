---
schema_version: "0.1.0-experimental"
id: AP-0010
kind: knowledge
knowledge_type: architectural_proposal
title: "Implementation Handoff Protocol"
status: completed
created_at: 2026-07-21
author: "Architecture Council"
language: pt-BR
motivation: "Permitir revisão arquitetural completa sem dependência da conversa, memória do executor ou acesso ao ambiente de desenvolvimento."
expected_benefits:
  - "Handoffs autocontidos e auditáveis."
  - "Visibilidade de trabalho incompleto, desvios, testes e riscos."
  - "Encerramento de milestones baseado em evidências."
  - "Continuidade entre diferentes arquitetos e IAs."
architectural_impact:
  domains: [foundation, governance, knowledge, evolution]
  summary: "Adiciona um protocolo obrigatório de transição entre execução, revisão e aprovação."
estimated_complexity: low
dependencies: []
ideal_implementation_time: "Antes da revisão do primeiro milestone e antes de iniciar V1-M02."
acceptance_criteria:
  - "Define gatilhos e doze seções obrigatórias."
  - "Persiste relatórios relevantes na Project Memory."
  - "Impede encerramento sem implementação, validação, documentação, backlog e revisão."
  - "V1-M01 possui o primeiro relatório autocontido."
observations: "Proposta originada e aprovada diretamente pela AD-002; registrada para preservar o fluxo AP → decisão → implementação."
decision:
  outcome: approved
  authority: AD-002
  decided_at: 2026-07-21
implementation:
  status: completed
  artifact: IHP-001
relations:
  - type: implemented_by
    target: IHP-001
  - type: recorded_by
    target: ADR-0011
  - type: authorized_by
    target: AD-002
---

# AP-0010 — Implementation Handoff Protocol

## Contexto

O estado real de uma implementação não pode depender da capacidade do CEA de resumir uma sessão posteriormente.

## Implementação

IHP-001 define gatilhos, conteúdo obrigatório, persistência e critérios de encerramento. O primeiro relatório foi produzido para V1-M01.

## Decisão

Aprovada pela AD-002 e implementada antes da solicitação de avanço a V1-M02.
