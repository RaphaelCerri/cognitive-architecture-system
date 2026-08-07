---
schema_version: "0.1.0-experimental"
id: AD-009
kind: knowledge
knowledge_type: architecture_directive
title: "Knowledge Object Envelope Candidate Slice"
status: operational
version: "1.0"
created_at: 2026-08-07
author: "Raphael Caveagna — Founder & CVO, translated by CSA"
language: pt-BR
relations:
  - type: authorizes
    target: ARP-0010
  - type: follows
    target: AD-008
  - type: related_to
    target: AP-0003
---

# AD-009: envelope candidato de Knowledge Object

## Decisão

O CVO autorizou prosseguir com a recomendação de IHR-0039. A slice deve
especificar e provar um envelope candidato de autoria para Knowledge Objects,
sem iniciar formalmente V1-M03 nem estabilizar schema público.

## Entregas autorizadas

- campos mínimos e regras condicionais por perfil;
- critérios de autoria em linguagem humana;
- exemplos Markdown/YAML válidos e inválidos;
- erros com motivo e correção sugerida;
- compatibilidade medida contra artifacts atuais;
- dogfooding sobre os artifacts produzidos pela própria slice.

## Restrições

- preservar campos desconhecidos;
- aliases permanecem views de compatibilidade;
- não exigir migração em massa para provar o candidato;
- não transformar lista observada de tipos em Type Registry canônico;
- não validar o significado completo do corpo Markdown;
- não alterar Roadmap ou estado de milestone;
- terminar com decisão explícita sobre a evidência seguinte.
