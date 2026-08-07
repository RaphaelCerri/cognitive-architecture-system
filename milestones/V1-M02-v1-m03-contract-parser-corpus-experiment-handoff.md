---
schema_version: "0.1.0-experimental"
id: IHR-0043
kind: knowledge
knowledge_type: implementation_handoff_report
title: "V1-M03 Contract Parser and Corpus Experiment"
status: reviewed
version: "1.0"
created_at: 2026-08-07
reviewed_at: 2026-08-07
review_outcome: accepted_as_bounded_experimental_evidence_only
acceptance_scope: parser_corpus_profile_diagnostics_only
review_basis: ASSESS-0005
milestone: V1-M02
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: experiments_for
    target: V1-M03
  - type: documents
    target: ARP-0010-E05
  - type: authorized_by
    target: AD-013
  - type: governed_by
    target: IHP-001
  - type: reviewed_by
    target: ASSESS-0005
---

# IHR-0043: experimento de parser e corpus V1-M03

## 1. Contexto

Executar a primeira slice experimental autorizada após o readiness da V1-M03:
parser YAML real read-only, corpus classificado e profiles candidatos, sem schema.

## 2. O que foi executado

Implementados reader YAML 1.2 seguro, scanner com roots explícitos, quatro
categorias totais/disjuntas, classificador composicional de profiles, hashes de
preservação, evaluator, demo e oito testes novos.

## 3. Arquivos afetados

Vinte e dois arquivos nesta unidade: AD-013; package/lock; cinco módulos; um teste;
duas fixtures; README; E05; IHR; milestone; ARP; matriz/README de experimentos e
milestones; assessment; PROJECT_STATUS; feature log e índice.

## 4. Validação realizada

- `npm test`: 35 passed, 0 failed;
- `npm run experiment:v1m03-contract`: evidence ready, zero hash drift;
- `npm audit`: 0 vulnerabilidades;
- corpus: 248 arquivos, 205 KO candidates, 39 metadata docs, 4 Markdown comum;
- não executados: autoria humana, migration/round-trip, schema, ADF contratual,
  authority normalization, Compiler e Runtime.

## 5. Plano versus execução

O plano CSA foi cumprido dentro de 22/22 arquivos. O corpus não foi alterado.
Nenhum stopping rule foi acionado e não houve desvio substantivo.

## 6. Decisões tomadas pelo CEA

- usar `yaml@2.8.1` local e lockado;
- YAML 1.2 core, unique keys, sem custom tags, aliases limitados a 50;
- retornar objetos sem prototype compartilhado para mappings;
- ignorar symlinks e falhar em roots fora do repositório;
- classificar somente por claims declaradas, nunca path ou título;
- manter artifacts sem especialização como `unclassified`, sem forçá-los.

## 7. Estado da documentação

AD-013, E05, ARP-0010, V1-M03, README do experimento, matriz, índices,
PROJECT_STATUS e feature log refletem a slice. V1-M03 continua com contract
implementation `not_started`.

## 8. Backlog e propostas

Teste humano de criar/editar/corrigir artifacts; authority normalization;
migration dry-run/round-trip; ADF contratual. Nenhum item foi iniciado.

## 9. Riscos e pontos de atenção

O mapping de labels pode virar registry informal; counts mudam com o repositório;
parsing pode ser confundido com validade; quatro profiles podem ser incompletos;
os quatro artifacts legados sem `created_at` não foram corrigidos nesta slice.

## 10. Questões para o Conselho

Aceitar E05 como evidência experimental, pedir refinamento ou rejeitar. Em caso
de aceite, decidir separadamente se o próximo gate será autoria humana.

## 11. Próxima ação recomendada

Revisão CSA independente. Não iniciar automaticamente teste humano nem promover
G2, schema, profile ou AP-0006.

## 12. Evidências

AD-013, ARP-0010-E05, package lock, reader/classifier/evaluator, fixtures, 35/35
testes, demo determinística, audit limpo e hashes antes/depois sem drift. Branch
`main`, starting HEAD `23f1121`, nenhum commit da slice criado ainda.

## Pacote para revisão do CSA

Disposição CSA independente: `accepted_as_bounded_experimental_evidence_only`. O
aceite não confirma schema, profiles, authority, semântica ou readiness de M04.
