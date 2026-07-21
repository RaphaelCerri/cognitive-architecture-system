---
schema_version: "0.1.0-experimental"
id: AP-0003
kind: knowledge
knowledge_type: architectural_proposal
title: "Type Registry"
status: proposed
created_at: 2026-07-21
author: "Architecture Council"
language: pt-BR
motivation: "Governar descoberta, identidade, schema, versão e extensibilidade dos tipos sem inflar o Core."
expected_benefits: ["Core Types pequenos e explícitos.", "Extensões validadas e descobríveis.", "Migrações rastreáveis."]
architectural_impact:
  domains: [foundation, knowledge, runtime]
  summary: "Cria um contrato para registrar tipos canônicos e extensões."
estimated_complexity: high
dependencies: ["Formal Ontology", "Stable Knowledge Object schema"]
ideal_implementation_time: "Depois da Ontologia V1 e antes de permitir extensões executáveis."
acceptance_criteria: ["Distingue Core Types de extensões.", "Suporta versionamento e migração.", "Não depende de runtime ou linguagem."]
observations: "Não promover Tool, MCP, Agent ou outros tipos antes desta avaliação."
relations:
  - type: depends_on
    target: AP-0006
---

# AP-0003 — Type Registry

Projetar um registro agnóstico que governe tipos e extensões sem transformar toda nova ideia em parte permanente do Core.
