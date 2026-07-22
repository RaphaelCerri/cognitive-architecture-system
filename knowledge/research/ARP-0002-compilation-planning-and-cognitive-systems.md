---
schema_version: "0.1.0-experimental"
id: ARP-0002
kind: knowledge
knowledge_type: architectural_research_program
title: "Compilation, Planning and Cognitive Systems"
status: experimental
research_form: program
document_state: complete
governance_state: approved_experimental
research_state: scoped
knowledge_maturity: hypothesis
outcome: null
implementation_state: not_started
operational_state: not_applicable
created_at: 2026-07-22
owner: "Architecture Council"
language: pt-BR
research_tracks:
  - "Prompt Compilation"
  - "Knowledge Compilation"
  - "AI Operating Systems"
  - "Planning Engines"
  - "Workflow Engines"
  - "Multi-Agent Coordination"
research_questions:
  - "Quais problemas esses sistemas resolvem e quais já são tratados pela arquitetura atual?"
  - "Quais princípios são reutilizáveis sem copiar implementação ou acoplar runtimes?"
  - "Onde terminam planejamento, workflow, coordenação e compilação?"
scope: ["Architectural patterns", "Boundaries", "Determinism", "Coordination", "Governance"]
out_of_scope: ["Framework adoption", "Code", "Agent creation", "Workflow implementation"]
evaluation_criteria: ["Problem fit", "Complexity reduction", "Agnosticism", "Governance", "Maintainability", "No parallel Source of Truth"]
expected_outputs: ["Pattern taxonomy", "Boundary analysis", "Possible APs or no-change conclusions"]
evidence: []
risks: ["Terminologia de mercado pode mascarar responsabilidades duplicadas.", "Frameworks podem induzir arquitetura orientada à ferramenta."]
relations:
  - type: established_by
    target: AD-004
  - type: informs
    target: AP-0012
  - type: informs
    target: AP-0014
---

# ARP-0002 — Compilation, Planning and Cognitive Systems

## Problema investigado

Compreender como sistemas externos compilam conhecimento, planejam, coordenam workflows e organizam múltiplos agentes, separando princípios duráveis de implementações específicas.

## Restrições

Nenhum framework, engine, Agent ou workflow será adotado ou implementado por este programa.
