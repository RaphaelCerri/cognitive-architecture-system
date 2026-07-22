---
schema_version: "0.1.0-experimental"
id: AP-0015
kind: knowledge
knowledge_type: architectural_proposal
title: "Architecture Visualization Frontend"
status: proposed
created_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
motivation: "Permitir exploração visual da arquitetura e de suas visões derivadas sem substituir os documentos canônicos."
expected_benefits:
  - "Melhorar compreensão de relações e estado do projeto."
  - "Facilitar revisão de milestones, APs, ADRs, RFCs e componentes cognitivos."
  - "Tornar grafos e dependências navegáveis para humanos e IAs."
architectural_impact:
  domains: [knowledge, runtime, evolution]
  summary: "Adicionaria um consumidor visual de Project Memory, Knowledge Graph, milestones, APs, ADRs, RFCs, Skills, Agents, Capabilities e Cognitive Pipeline."
estimated_complexity: high
dependencies: ["Deterministic Compiler", "Graph views", "Stable knowledge contracts", "Cognitive Pipeline framing"]
ideal_implementation_time: "Após compilação determinística e estabilização das visões derivadas necessárias."
acceptance_criteria:
  - "Toda visualização é derivada de fontes canônicas."
  - "A interface não permite divergência silenciosa da Project Memory."
  - "Relações, proveniência e maturidade são verificáveis."
observations: "Somente registro estratégico; frontend não autorizado na V1-M02."
relations:
  - type: introduced_by
    target: AD-003
  - type: depends_on
    target: AP-0003
  - type: depends_on
    target: AP-0014
---

# AP-0015 — Architecture Visualization Frontend

Proposta de interface derivada para explorar arquitetura, Project Memory e seus grafos sem criar uma nova fonte de verdade.
