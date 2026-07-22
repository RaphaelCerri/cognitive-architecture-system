---
schema_version: "0.1.0-experimental"
id: AP-0012
kind: knowledge
knowledge_type: architectural_proposal
title: "Orchestrator"
status: proposed
created_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
motivation: "Avaliar uma responsabilidade capaz de compreender contexto, selecionar capacidades, Skills e Agents e coordenar execução."
expected_benefits:
  - "Composição contextual de capacidades."
  - "Separação entre decisão e execução."
  - "Coordenação agnóstica de executores e runtimes."
architectural_impact:
  domains: [intelligence, governance, runtime]
  summary: "Pode introduzir uma responsabilidade central de coordenação; sua natureza como componente, capability ou artefato permanece indefinida."
estimated_complexity: very_high
dependencies: ["Formal Ontology", "Capability System", "Skill model", "Agent model", "Runtime Adapter Contract", "Governance contracts"]
ideal_implementation_time: "Após definição das fronteiras de Capability, Skill, Agent e Runtime; antes de execução multiagente real."
acceptance_criteria:
  - "Não duplica Intelligence, Governance ou Runtime."
  - "Permanece model e runtime agnostic."
  - "Explica seleção e coordenação com rastreabilidade."
  - "Passa pelo ADF antes de qualquer promoção permanente."
observations: "Não implementar durante o checkpoint estrutural do System Overview."
relations:
  - type: introduced_by
    target: AD-003
  - type: documented_in
    target: ARCH-001
  - type: depends_on
    target: AP-0006
  - type: depends_on
    target: AP-0007
---

# AP-0012 — Orchestrator

Proposta para amadurecer a responsabilidade de coordenação contextual. O nome e a forma arquitetural são provisórios.
