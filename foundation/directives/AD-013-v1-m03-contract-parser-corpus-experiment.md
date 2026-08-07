---
schema_version: "0.1.0-experimental"
id: AD-013
kind: knowledge
knowledge_type: architecture_directive
title: "V1-M03 Contract Parser and Corpus Experiment"
status: operational
created_at: 2026-08-07
owner: "Raphael Caveagna, Founder & CVO"
language: pt-BR
relations:
  - type: authorizes
    target: ARP-0010-E05
  - type: authorizes_experiment
    target: V1-M03
  - type: follows
    target: ASSESS-0004
  - type: constrained_by
    target: AD-012
---

# AD-013: experimento de parser e corpus da V1-M03

## Decisão do CVO

O CVO autorizou consolidar o checkpoint anterior e executar o experimento de
contrato da V1-M03, limitado a parser YAML read-only, corpus classificado e
avaliação dos profiles candidatos.

## Escopo autorizado

- parser YAML 1.2 real, seguro e somente leitura;
- corpus limitado a roots explícitos e classificação total/disjunta;
- avaliação composicional dos quatro profiles candidatos;
- prova de preservação por hashes e testes adversariais;
- evidência E05, handoff IHP-001 e revisão CSA independente.

## Fora de escopo

Schema canônico, Core Types, migração, Type Registry, Compiler, Runtime,
normalização de authority, validação semântica integral e alteração dos
artifacts avaliados.

## Stopping rules

Parar diante de mutação da fonte, escape dos roots, YAML inseguro, inferência
de profile por path/título, necessidade de forçar classificação ou promoção de
qualquer contrato. Limite de 22 arquivos e nenhum início automático do próximo gate.
