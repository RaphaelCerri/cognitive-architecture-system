---
schema_version: "0.1.0-experimental"
id: AD-012
kind: knowledge
knowledge_type: architecture_directive
title: "V1-M03 Knowledge Object Contract Readiness Planning"
status: operational
created_at: 2026-08-07
owner: "Raphael Caveagna, Founder & CVO"
language: pt-BR
relations:
  - type: authorizes
    target: ARP-0010-E04
  - type: authorizes_planning
    target: V1-M03
  - type: follows
    target: IHR-0040
  - type: constrained_by
    target: ASSESS-0002
---

# AD-012: planejamento de readiness dos contratos V1-M03

## Decisão do CVO

Após receber a fila ordenada, o CVO determinou “então continua”. A continuação
adota a primeira opção apresentada: planejar a V1-M03 usando IHR-0040 como input
experimental, sem iniciar estabilização de schema.

## Escopo autorizado

- delimitar fonte, envelope, profiles, semântica e views derivadas;
- identificar profiles candidatos por composição, sem criar Core Types;
- definir compatibilidade para legado e artifacts novos;
- definir gates de parser, autoria humana, authority, migração e ADF;
- criar readiness evaluator experimental e handoff revisável.

## Fora de escopo

- schema público/final, enums canônicos ou Type Registry;
- promoção de AP-0006, kernel, profiles ou relações;
- migração real, Compiler, CLI, Runtime ou integração;
- estabilização do lifecycle de RFC;
- encerramento de V1-M02 ou V1-M03.

## Budgets e stopping rules

- até 20 arquivos, nenhum commit automático e três ciclos materiais;
- parar se o plano exigir Core Type, registry ou migração como pré-condição;
- parar se validação estrutural for usada como authority ou validade semântica;
- parar diante de conflito com ADR-0001/0005/0007/0013;
- toda promoção futura exige novo ADF e revisão independente.
