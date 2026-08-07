---
schema_version: "0.1.0-experimental"
id: AD-008
kind: knowledge
knowledge_type: architecture_directive
title: "Minimal Ontology Kernel Consumer Slice"
status: operational
version: "1.0"
created_at: 2026-08-07
author: "Raphael Caveagna — Founder & CVO, translated by CSA"
language: pt-BR
relations:
  - type: authorizes
    target: ARP-0010
  - type: follows
    target: AD-007
  - type: evaluates
    target: AP-0006
  - type: related_to
    target: AP-0003
---

# AD-008: kernel ontológico mínimo

## Decisão

O CVO autorizou prosseguir com a recomendação de IHR-0038. A slice deve criar um
kernel ontológico mínimo experimental e fazê-lo ser consumido por um contrato
candidato de Knowledge Object, sem iniciar a V1-M03 completa.

## Escopo autorizado

- identidade, classificação, autoridade, proveniência, estado e representação;
- um mecanismo de alias explícito, versionado e não destrutivo;
- famílias derivadas de relações sem substituir predicates declarados;
- consumo de artifacts reais do repositório;
- proposta de migração, nunca aplicação automática;
- medição de cobertura e ambiguidade residual.

## Restrições

- não criar Type Registry canônico;
- não declarar `knowledge_object` ou especializações como Core Types definitivos;
- não reescrever frontmatter existente;
- não estabilizar schema público da V1-M03;
- não normalizar todas as 72 relações por conveniência;
- não iniciar Compiler, Runtime ou milestone seguinte;
- encerrar com nova avaliação de prontidão, sem continuação automática.
