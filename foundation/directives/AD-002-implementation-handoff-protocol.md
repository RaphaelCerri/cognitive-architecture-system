---
schema_version: "0.1.0-experimental"
id: AD-002
kind: knowledge
knowledge_type: architecture_directive
title: "Implementation Handoff Protocol"
status: operational
created_at: 2026-07-21
author: "Architecture Council"
language: pt-BR
relations:
  - type: follows
    target: AD-001
  - type: authorizes
    target: AP-0010
  - type: establishes
    target: IHP-001
  - type: constrained_by
    target: PMM-001
---

# AD-002 — Implementation Handoff Protocol

## Problema

Resumos genéricos não permitem ao CSA reconstruir o estado real da execução sem acesso à conversa, à memória do CEA ou ao ambiente de desenvolvimento.

## Decisão

Instituir o IHP-001. Todo ponto de controle significativo deve produzir um Implementation Handoff Report autocontido na resposta ao CVO e persistido no repositório.

Um milestone somente pode ser formalmente encerrado quando estiver implementado, validado, documentado, registrado no backlog, acompanhado de handoff revisável e aprovado quando houver impacto arquitetural.

## Efeito imediato

V1-M01 retorna de `completed` para `pending_review` até que o CSA revise seu handoff e o Conselho aprove seu encerramento.

## Histórico

- 2026-07-21: IHP instituído e aplicado retroativamente ao primeiro milestone antes do início de V1-M02.
