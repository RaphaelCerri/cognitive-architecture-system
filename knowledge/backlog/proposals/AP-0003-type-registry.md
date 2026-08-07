---
schema_version: "0.1.0-experimental"
id: AP-0003
kind: knowledge
knowledge_type: architectural_proposal
title: "Type Registry"
status: proposed
updated_at: 2026-08-07
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
observations: "Não promover Tool, MCP, Agent ou outros tipos antes desta avaliação. ARP-0010-E02 informa o futuro registry com alias não destrutivo e famílias derivadas, mas não autoriza implementação."
relations:
  - type: depends_on
    target: AP-0006
  - type: informed_by
    target: ARP-0010-E02
  - type: informed_by
    target: ARP-0010-E03
  - type: informed_by
    target: ARP-0010-E04
---

# AP-0003 — Type Registry

Projetar um registro agnóstico que governe tipos e extensões sem transformar toda nova ideia em parte permanente do Core.
