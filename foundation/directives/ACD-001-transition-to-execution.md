---
schema_version: "0.1.0-experimental"
id: ACD-001
kind: knowledge
knowledge_type: architecture_council_directive
title: "Transição para Execução e Protocolos Fundamentais"
status: operational
created_at: 2026-07-21
author: "Architecture Council"
language: pt-BR
relations:
  - type: establishes
    target: ACP-001
  - type: establishes
    target: AIP-001
  - type: ratifies
    target: AP-0001
---

# Diretiva do Conselho de Arquitetura Nº 001

## Decisão

A fase inicial de definição arquitetural está encerrada. O Chief Execution Architect entra em modo de execução incremental, trabalhando por milestones e preservando os princípios já aprovados.

Status pertence ao objeto, nunca à estrutura física. `ArchitecturalProposal` permanece uma especialização de `Knowledge` até que a Ontologia e o Type Registry determinem outra classificação.

## Ciclo obrigatório de milestone

1. Planejar.
2. Implementar.
3. Validar.
4. Documentar.
5. Atualizar o backlog.
6. Revisar as propostas existentes.
7. Apresentar ao Conselho qualquer proposta cujo momento ideal tenha chegado antes de implementá-la.

## Limites da autonomia operacional

O CEA resolve decisões operacionais. Deve escalar mudanças que alterem princípios arquiteturais, modelo conceitual, contratos públicos, Ontologia, governança ou visão de longo prazo.

## Backlog arquitetural

Toda ideia arquitetural deve ser registrada antes da implementação:

`Insight → Architectural Proposal → revisão do Conselho → aprovação → milestone adequada → implementação → ADR quando aplicável → artefato permanente`

Na V1, a revisão do backlog ao final de cada milestone é manual e obrigatória.

## Evolução

- 2026-07-21: diretiva instituída; ACP e AIP passam a integrar a fonte de verdade.
