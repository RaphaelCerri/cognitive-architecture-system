---
schema_version: "0.1.0-experimental"
id: AP-0006
kind: knowledge
knowledge_type: architectural_proposal
title: "Formal System Ontology and Constitutional Metamodel"
status: scheduled
updated_at: 2026-08-07
created_at: 2026-07-21
author: "Raphael Caveagna — Founder & Chief Vision Officer"
language: pt-BR
motivation: "Definir a linguagem fundamental do sistema antes de canonizar Capabilities, Agents, MCPs, Workflows ou novos tipos."
expected_benefits: ["Tipos e relações coerentes.", "Schemas derivados de semântica explícita.", "Base estável para Compiler, grafos e geração de artefatos."]
architectural_impact:
  domains: [foundation, knowledge, intelligence, governance, runtime, evolution]
  summary: "Define metamodelo, tipos, relações, restrições, identidade, proveniência e extensibilidade."
estimated_complexity: very_high
dependencies:
  - "Council review of the System Overview structure checkpoint"
scheduled_milestone: V1-M02
ideal_implementation_time: "Após a revisão estrutural do System Overview e antes de estabilizar schemas, Core Types, Type Registry ou contratos públicos."
acceptance_criteria: ["Responde às perguntas de competência do sistema.", "Separa metamodelo, ontologia e representação.", "Permite extensões sem alterar o Core.", "É runtime e model agnostic."]
observations: "ASSESS-0001 e ASSESS-0002: remain_experimental. AD-007/E01 separaram as três camadas; AD-008/E02 provaram um kernel consumido por 186 artifacts. Nenhuma promoção permanente ocorreu."
relations:
  - type: assessed_by
    target: ASSESS-0001
  - type: governed_by
    target: ADF-001
  - type: scheduled_by
    target: AD-003
  - type: contextualized_by
    target: ARCH-001
  - type: informed_by
    target: ARP-0010-E01
  - type: informed_by
    target: ARP-0010-E02
  - type: informed_by
    target: ARP-0010-E04
  - type: assessed_by
    target: ASSESS-0002
---

# AP-0006 — Formal System Ontology and Constitutional Metamodel

Projetar critérios de existência, identidade, autoridade, proveniência e mudança; depois definir tipos e relações permitidos. Markdown, YAML, JSON e grafos serão representações, não a Ontologia.

## Estado

Agendada experimentalmente para V1-M02. O primeiro checkpoint é a estrutura do System Overview. Ontologia e metamodelo não serão promovidos sem nova avaliação ADF.
