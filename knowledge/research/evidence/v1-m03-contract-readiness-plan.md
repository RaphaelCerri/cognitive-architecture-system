---
schema_version: "0.1.0-experimental"
id: ARP-0010-E04
kind: knowledge
knowledge_type: research_evidence
title: "V1-M03 Contract Readiness Plan"
status: experimental
created_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0010
  - type: plans
    target: V1-M03
  - type: authorized_by
    target: AD-012
---

# Plano de readiness dos contratos V1-M03

## Achado principal

O repositório confirma o arquivo Markdown com frontmatter YAML como formato
canônico de Knowledge Object. Ele não confirma uma lista de Core Types. Labels
como ADR, AP, ARP, RFC e IHR continuam profiles/especializações experimentais.

Assim, V1-M03 pode estabilizar seu plano e gates agora, mas não schemas.

## Superfícies ainda não resolvidas

| Superfície | Evidência atual | Estado |
|---|---|---|
| formato da fonte | ADR-0001 | confirmado |
| artifact gerado versus fonte | ADR-0005 | confirmado |
| status lógico | ADR-0007 | princípio confirmado; enums não |
| envelope de oito campos | ARP-0010-E03 | candidato |
| profiles | labels observados | não confirmados |
| authority fields | múltiplas formas no repositório | não normalizado |
| parsing | parser experimental simplificado | insuficiente para contrato público |
| autoria humana | exemplos dogfood | sessão humana não executada |
| migração | proposals não destrutivas | dry-run de contrato não executado |
| Type Registry | AP-0003 | proposed, fora de escopo |

## Ordem recomendada

1. Experimento de contrato com parser YAML real e quatro profiles candidatos.
2. Teste humano de criar, editar e corrigir artifacts.
3. Dry-run de compatibilidade/round-trip sem mutação.
4. Normalização de authority como decisão separada.
5. ADF e revisão independente.
6. Somente então decidir schema experimental ou `remain_experimental`.

## Readiness executável atual

O evaluator reporta `planning_status: ready` e
`stabilization_status: blocked`. `ontology_boundary_confirmed` significa apenas
que o boundary experimental de três camadas pode orientar o contrato. Depois de
todas as demais evidências, o resultado é `eligible_for_adf`; o G7 é um novo ADF
contratual que decide promoção e nunca é satisfeito pelo evaluator.

## Limitações

Sem parser YAML robusto, teste humano, schema, registry, migração, Compiler ou
runtime. O plano não prova que quatro profiles sejam a decomposição final.
