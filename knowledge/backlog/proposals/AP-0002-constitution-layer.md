---
schema_version: "0.1.0-experimental"
id: AP-0002
kind: knowledge
knowledge_type: architectural_proposal
title: "Constitution Layer Above Foundation"
status: proposed
created_at: 2026-07-21
author: "Architecture Council"
language: pt-BR
motivation: "Avaliar uma camada responsável por autoridade, axiomas, critérios de validade e regras de mudança anteriores à Foundation."
expected_benefits: ["Separar regras constitucionais de conceitos arquiteturais evolutivos.", "Explicitar autoridade e limites de mudança."]
architectural_impact:
  domains: [foundation, governance]
  summary: "Pode introduzir uma camada conceitual acima da Taxonomia V1."
estimated_complexity: high
dependencies: ["Formal Ontology", "Architectural Decision Filter"]
ideal_implementation_time: "Após a Ontologia esclarecer se Constitution é uma camada, um conjunto de princípios ou parte da Foundation."
acceptance_criteria: ["Passa pelo ADF.", "Demonstra capacidade não atendida pela Foundation.", "Define fronteiras e autoridade sem duplicação."]
observations: "Não implementar durante o bootstrap da V1."
relations:
  - type: depends_on
    target: AP-0006
---

# AP-0002 — Constitution Layer Above Foundation

Investigar se regras constitucionais exigem uma camada própria ou se devem permanecer como parte da Foundation. A proposta só deve avançar se reduzir ambiguidade sem criar hierarquia ornamental.
