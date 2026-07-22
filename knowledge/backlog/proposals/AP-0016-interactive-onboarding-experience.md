---
schema_version: "0.1.0-experimental"
id: AP-0016
kind: knowledge
knowledge_type: architectural_proposal
title: "Interactive Onboarding Experience"
status: proposed
created_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
motivation: "Reduzir o esforço para que novos humanos e IAs compreendam o sistema e contribuam com coerência."
expected_benefits:
  - "Onboarding guiado e adaptável ao perfil do participante."
  - "Verificação de compreensão antes de contribuições sensíveis."
  - "Navegação contextual pelas fontes canônicas."
architectural_impact:
  domains: [knowledge, intelligence, governance, runtime]
  summary: "Pode materializar parte da AI-DX como experiência derivada, sem substituir System Overview ou Project Memory."
estimated_complexity: high
dependencies: ["System Overview approved", "AI Developer Experience", "Stable navigation metadata"]
ideal_implementation_time: "Após validar recorrência e necessidades de AI-DX com o System Overview em uso."
acceptance_criteria:
  - "Conteúdo é derivado das fontes canônicas."
  - "Funciona para humanos e diferentes runtimes de IA."
  - "Não duplica nem redefine autoridade arquitetural."
observations: "Somente proposta estratégica; experiência interativa não autorizada na V1-M02."
relations:
  - type: introduced_by
    target: AD-003
  - type: specializes
    target: AP-0011
  - type: depends_on
    target: ARCH-001
---

# AP-0016 — Interactive Onboarding Experience

Proposta para investigar uma experiência guiada de onboarding como possível materialização da AI Developer Experience.
