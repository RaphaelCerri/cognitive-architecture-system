---
schema_version: "0.1.0-experimental"
id: AP-0006
kind: knowledge
knowledge_type: architectural_proposal
title: "Formal System Ontology and Constitutional Metamodel"
status: proposed
created_at: 2026-07-21
author: "Raphael Caveagna — Founder & Chief Vision Officer"
language: pt-BR
motivation: "Definir a linguagem fundamental do sistema antes de canonizar Capabilities, Agents, MCPs, Workflows ou novos tipos."
expected_benefits: ["Tipos e relações coerentes.", "Schemas derivados de semântica explícita.", "Base estável para Compiler, grafos e geração de artefatos."]
architectural_impact:
  domains: [foundation, knowledge, intelligence, governance, runtime, evolution]
  summary: "Define metamodelo, tipos, relações, restrições, identidade, proveniência e extensibilidade."
estimated_complexity: very_high
dependencies: ["Architecture Council review", "Architectural Decision Filter"]
ideal_implementation_time: "Antes de estabilizar schemas, Core Types, Type Registry ou contratos públicos."
acceptance_criteria: ["Responde às perguntas de competência do sistema.", "Separa metamodelo, ontologia e representação.", "Permite extensões sem alterar o Core.", "É runtime e model agnostic."]
observations: "Os sete Core Types atuais são hipóteses até a avaliação desta proposta."
relations: []
---

# AP-0006 — Formal System Ontology and Constitutional Metamodel

Projetar primeiro os critérios de existência, identidade, autoridade, proveniência e mudança; depois definir os tipos e relações permitidos. Markdown, YAML, JSON e grafos serão representações, não a Ontologia.
