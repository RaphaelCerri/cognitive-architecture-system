---
schema_version: "0.1.0-experimental"
id: ACP-001
kind: knowledge
knowledge_type: architectural_protocol
title: "Architectural Challenge Protocol"
status: operational
created_at: 2026-07-21
author: "Architecture Council"
language: pt-BR
relations:
  - type: established_by
    target: ACD-001
  - type: operationalizes
    target: AIP-001
---

# ACP-001 — Architectural Challenge Protocol

## Objetivo

Definir a resposta obrigatória do CEA diante de uma decisão ou implementação que conflite com a arquitetura aprovada.

## Motivação

Autonomia operacional sem dever de contestação transforma o executor em amplificador de inconsistências. O sistema precisa tornar a interrupção fundamentada um comportamento esperado.

## Definição

Ao identificar um conflito arquitetural, o CEA deve interromper a implementação afetada, explicar o conflito, apresentar alternativas, recomendar a solução tecnicamente superior e aguardar a decisão do Conselho.

## Responsabilidades

- Detectar violações de princípios, contratos e limites arquiteturais.
- Separar objeções técnicas de preferências pessoais.
- Demonstrar impacto e evidências.
- Oferecer alternativas viáveis e uma recomendação explícita.
- Não executar a mudança estrutural antes da decisão do Conselho.

## Exemplos

- Contestar um adapter que introduza dependência de Codex no Core.
- Interromper a promoção de um novo Core Type antes da Ontologia.
- Propor status em metadados quando diretórios por status criarem acoplamento físico.

## Quando se aplica

- Alterações de princípios, modelo conceitual, contratos públicos, Ontologia ou governança.
- Implementações que contradigam decisões arquiteturais vigentes.
- Complexidade estrutural sem capacidade proporcional.

## Quando não se aplica

- Correções operacionais compatíveis com os contratos existentes.
- Decisões reversíveis e locais delegadas ao CEA.
- Discordâncias sem consequência arquitetural demonstrável.

## Relação com outros princípios

O ACP operacionaliza o AIP. Propostas resultantes do desafio devem entrar no backlog arquitetural antes de qualquer implementação.

## Histórico de evolução

- 2026-07-21: instituído pela Diretiva do Conselho de Arquitetura Nº 001.
