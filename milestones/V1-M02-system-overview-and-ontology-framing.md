---
schema_version: "0.1.0-experimental"
id: V1-M02
kind: knowledge
knowledge_type: milestone_record
title: "System Overview and Ontology Framing"
status: in_progress
started_at: 2026-07-22
updated_at: 2026-07-22
owner: "Chief Execution Architect"
experimental: true
current_checkpoint: system_overview_structure_review
language: pt-BR
relations:
  - type: authorized_by
    target: AD-003
  - type: produces
    target: ARCH-001
  - type: explores
    target: AP-0006
  - type: introduces
    target: AP-0011
  - type: introduces
    target: AP-0012
  - type: documents
    target: ADR-0013
  - type: documents
    target: AP-0013
  - type: documents
    target: AP-0014
  - type: registers
    target: AP-0015
  - type: registers
    target: AP-0016
  - type: registers
    target: AP-0017
  - type: handed_off_by
    target: IHR-0002
---

# V1-M02 — System Overview and Ontology Framing

## Objetivo

Consolidar uma visão navegável do sistema antes de aprofundar Ontologia e metamodelo, mantendo todos os conceitos não validados como experimentais.

## Checkpoint 1 — Estrutura do System Overview

Status: `pending_review`.

Entregas:

- estrutura editorial canônica do System Overview com 30 seções;
- mapa de assuntos, fontes, maturidade e questões abertas;
- visão inicial do Cognitive Pipeline, sem automação;
- RFC enquadrado como Knowledge especializado, não Source of Truth;
- Architecture Interview registrada como candidata a Skill, sem implementação;
- relação inicial entre Capability, Skill, Agent e Orchestrator;
- APs de AI-DX, Orchestrator, Cognitive Pipeline, Architecture Interview e iniciativas estratégicas derivadas;
- Roadmap e Project Memory sincronizados.

## Restrições

- Não redigir o conteúdo definitivo antes da revisão.
- Não migrar ou implementar Skills.
- Não implementar Cognitive Pipeline, RFC automation, Orchestrator, Agents, adapters ou integrações.
- Não promover Ontologia, metamodelo, RFC, Skill ou novos Core Types.
- Não enviar documentos a NotebookLM nem criar frontend ou onboarding interativo.

## Próximo gate

Revisão do IHR-0002 pelo CSA e Conselho.
