---
schema_version: "0.1.0-experimental"
id: AP-0001
kind: knowledge
knowledge_type: architectural_proposal
title: "Architectural Evolution Backlog"
status: proposed
created_at: 2026-07-21
author: "Raphael Caveagna — Founder & Chief Vision Officer"
language: pt-BR
motivation: "Impedir que ideias arquiteturais permaneçam apenas em conversas, sejam implementadas sem avaliação ou se percam entre milestones."
expected_benefits:
  - "Preservar a rastreabilidade das evoluções arquiteturais."
  - "Separar propostas estruturais de tarefas operacionais."
  - "Permitir revisão sistemática de dependências, obsolescência e sobreposição."
  - "Criar uma entrada futura para análise e recomendações do domínio Evolution."
architectural_impact:
  domains:
    - foundation
    - knowledge
    - governance
    - evolution
  summary: "Introduz um registro canônico e vivo de propostas arquiteturais, com estado lógico independente da estrutura física do repositório."
estimated_complexity: low
dependencies:
  - "Definição futura do schema estável de Knowledge Objects."
  - "Definição futura do Architectural Decision Filter como contrato canônico."
ideal_implementation_time: "Bootstrap da V1, antes da implementação do DNA, da Ontologia e do Compiler."
acceptance_criteria:
  - "Existe uma coleção canônica única para Architectural Proposals."
  - "Cada proposta possui ID único e os campos mínimos definidos pelo processo."
  - "O status é armazenado como atributo e não determina o diretório do objeto."
  - "A revisão do backlog é obrigatória ao final de cada grande etapa ou milestone."
  - "Visões por status são tratadas como artefatos derivados futuros."
  - "Architectural Proposal permanece uma especialização experimental de Knowledge, não um Core Type."
observations: "A revisão por milestone será manual na V1. A automação futura deverá respeitar a regra: a IA propõe; o humano aprova."
relations: []
---

# AP-0001 — Architectural Evolution Backlog

## Contexto

Ideias arquiteturais surgem durante pesquisa, planejamento e implementação. Quando permanecem apenas no histórico de uma conversa, não possuem identidade estável, ciclo de vida, dependências explícitas nem critérios verificáveis de aceitação.

Uma lista comum de tarefas também não resolve o problema: tarefas representam trabalho a executar, enquanto uma proposta arquitetural representa uma possível mudança na forma como o sistema entende, decide, governa ou executa.

## Proposta

Manter um backlog arquitetural canônico composto por objetos de `Knowledge` especializados como `architectural_proposal`.

Todas as propostas permanecem na mesma coleção física. Seu ciclo de vida é representado pelo atributo `status`; visões agrupadas serão derivadas futuramente pelo Compiler.

Antes de qualquer implementação arquitetural, a ideia correspondente deve estar registrada como AP. Ao final de cada milestone, o backlog deve ser revisado antes que uma nova implementação estrutural seja iniciada.

## Protocolo inicial

Na V1, o processo de registro e revisão será manual. A ausência do Compiler não suspende a obrigação de registrar propostas nem autoriza mudanças arquiteturais não rastreadas.

## Decisão

Proposta registrada em estado `proposed`. Sua promoção depende da governança arquitetural definida pelo projeto.
