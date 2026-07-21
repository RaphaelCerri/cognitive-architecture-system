---
schema_version: "0.1.0-experimental"
id: ADR-0006
kind: knowledge
knowledge_type: architectural_decision_record
title: "Independent Canonical Repository"
status: accepted
created_at: 2026-07-21
decision_authority: "Founder & CVO"
language: pt-BR
relations:
  - type: constrained_by
    target: PMM-001
---

# ADR-0006 — Independent Canonical Repository

## Contexto

O sistema não pode pertencer fisicamente a um projeto consumidor nem exigir cópias manuais em cada workspace.

## Decisão

`cognitive-architecture` é um repositório canônico independente. Projetos consumidores receberão somente artefatos necessários por caminhos configuráveis e contratos de distribuição. Nenhuma convenção exclusiva de Codex, Claude Code ou outro runtime entra no núcleo.

## Consequências

Adapters poderão gerar ou vincular artefatos sem se tornar fonte de verdade. O nome do repositório permanece provisório.

## Alternativas rejeitadas

Integração na raiz do workspace pessoal e duplicação manual foram rejeitadas por acoplamento e perda de autoridade.
