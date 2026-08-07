---
schema_version: "0.1.0-experimental"
id: AP-0012
kind: knowledge
knowledge_type: architectural_proposal
title: "Orchestrator"
status: proposed
created_at: 2026-07-22
updated_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
motivation: "Avaliar uma responsabilidade capaz de compreender contexto e coordenar o processo cognitivo sem acoplar a arquitetura a um executor ou runtime."
expected_benefits:
  - "Composição contextual de capacidades e processos cognitivos."
  - "Separação entre decisão, coordenação e execução."
  - "Coordenação agnóstica de Skills, Agents, executores e runtimes."
  - "Escalada e autonomia rastreáveis dentro da governança."
architectural_impact:
  domains: [intelligence, governance, runtime]
  summary: "Pode introduzir uma responsabilidade central para decidir processos, necessidade de RFCs, seleção de recursos e escalada; sua natureza como componente, Capability ou artefato permanece indefinida."
estimated_complexity: very_high
dependencies: ["Formal Ontology", "Cognitive Pipeline", "Capability System", "Skill model", "Agent model", "Runtime Adapter Contract", "Governance contracts"]
ideal_implementation_time: "Após definição das fronteiras do Cognitive Pipeline, Capability, Skill, Agent, RFC e Runtime; antes de execução multiagente real."
acceptance_criteria:
  - "Não duplica Intelligence, Governance ou Runtime."
  - "Permanece model e runtime agnostic."
  - "Explica seleção de processos, Capabilities, Skills e Agents com rastreabilidade."
  - "Explica quando exigir RFC, escalar ao Conselho ou permitir autonomia."
  - "Passa pelo ADF antes de qualquer promoção permanente."
observations: "Não implementar durante o checkpoint estrutural do System Overview. As responsabilidades listadas são hipóteses, não contrato. AP-0022 delimita o Governance Gateway sem authority; coordenação cognitiva ampla não pode absorver autorização, review ou aceite."
relations:
  - type: introduced_by
    target: AD-003
  - type: documented_in
    target: ARCH-001
  - type: depends_on
    target: AP-0006
  - type: depends_on
    target: AP-0007
  - type: depends_on
    target: AP-0014
  - type: refined_by
    target: AP-0022
---

# AP-0012 — Orchestrator

Proposta para amadurecer a responsabilidade de coordenação contextual do processo cognitivo. O nome, a forma arquitetural, a autoridade e os limites são provisórios.

## Hipóteses sob avaliação

- compreender o contexto;
- selecionar processos cognitivos, Capabilities, Skills e Agents;
- avaliar quando um RFC é necessário;
- coordenar execução e validação;
- decidir autonomia ou escalada conforme contratos de governança.

Nenhuma dessas hipóteses autoriza implementação.

## Boundary de governança

AP-0022 separa do Orchestrator uma responsabilidade mínima de gateway. Mesmo que
as duas responsabilidades compartilhem infraestrutura futura, o coordenador não
recebe authority institucional: ele roteia e aplica gates, sem autorizar,
executar trabalho de domínio, revisar ou aceitar.
