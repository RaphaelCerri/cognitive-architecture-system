---
schema_version: "0.1.0-experimental"
id: AIP-001
kind: knowledge
knowledge_type: architectural_principle
title: "Architectural Integrity Principle"
status: operational
created_at: 2026-07-21
author: "Architecture Council"
language: pt-BR
relations:
  - type: established_by
    target: ACD-001
  - type: operationalized_by
    target: ACP-001
---

# AIP-001 — Architectural Integrity Principle

## Objetivo

Garantir que nenhuma autoridade, decisão anterior ou conveniência operacional se sobreponha à integridade da arquitetura aprovada.

## Motivação

Sistemas de longa duração perdem coerência quando decisões são preservadas por hierarquia, hábito ou ego, mesmo depois do surgimento de evidências melhores.

## Definição

> Nenhuma decisão está acima da arquitetura.

Toda decisão do CVO, CSA, CEA ou de qualquer componente futuro pode ser revisada quando evidências técnicas demonstrarem uma solução arquitetural superior.

## Responsabilidades

- Fundamentar decisões em princípios e evidências.
- Tornar conflitos arquiteturais explícitos.
- Permitir revisão sem tratar decisões anteriores como irrevogáveis.
- Preservar rastreabilidade ao substituir uma decisão.
- Evitar que autoridade pessoal seja confundida com autoridade arquitetural.

## Exemplos

- Interromper uma implementação aprovada ao descobrir que ela viola runtime agnosticism.
- Substituir uma estrutura física por status por atributos lógicos e visões derivadas.
- Reavaliar um Core Type quando a Ontologia demonstrar que ele é apenas uma extensão.

## Quando se aplica

- Decisões arquiteturais, conceituais ou de governança.
- Conflitos entre implementação e princípios aprovados.
- Novas evidências que invalidem premissas anteriores.
- Revisões de contratos públicos ou limites entre domínios.

## Quando não se aplica

- Preferências locais sem impacto arquitetural.
- Escolhas operacionais equivalentes dentro de contratos aprovados.
- Tentativas de bloquear execução sem apresentar conflito ou evidência verificável.

## Relação com outros princípios

O AIP fundamenta o ACP, que define o comportamento obrigatório quando um conflito é identificado. Também orienta o ADF e a futura Constituição.

## Histórico de evolução

- 2026-07-21: instituído pela Diretiva do Conselho de Arquitetura Nº 001.
