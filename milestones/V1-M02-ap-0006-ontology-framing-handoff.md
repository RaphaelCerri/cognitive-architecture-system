---
schema_version: 0.1.0-experimental
id: IHR-0038
kind: knowledge
knowledge_type: implementation_handoff_report
title: AP-0006 Formal System Ontology Framing
status: pending_review
version: "1.0"
created_at: 2026-08-07
milestone: V1-M02
related_commits: []
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: documents
    target: ARP-0010-E01
  - type: authorized_by
    target: AD-007
---

# IHR-0038: AP-0006 Ontology Framing

## Purpose

Prosseguir com AP-0006 sem promover uma ontologia prematura. A slice devia
resolver a fronteira entre constitutional metamodel, system ontology e
representações, formular axiomas e competency questions, inventariar o estado
real e determinar a próxima evidência necessária.

## Sources

AP-0006, ASSESS-0001, AD-003, IHR-0002, ADR-0001, ADR-0002, ADR-0009, PMM-001,
AIP-001, GOV-001, AD-004, Charter, E75 e E77.

## Execution loop

1. Reconstruiu a dependência antiga da AP-0006.
2. AD-007 aceitou IHR-0002 apenas como scaffold editorial e autorizou o framing.
3. Inventariou tipos e relações do repositório sem mutar fontes.
4. Criou ARP-0010 e o modelo candidato em três camadas.
5. Codificou 12 axiomas e 12 competency questions respondidas.
6. Testou extensão segura, shadowing, canonicality e vendor leakage.
7. Registrou evidência ARP-0010-E01 e resultado `remain_experimental`.

## Decisions applied

- Metamodelo constitucional governa admissibilidade e não vocabulário de domínio.
- Ontologia define vocabulário versionado e obedece ao metamodelo.
- Representações não criam autoridade semântica.
- Extensões precisam de namespace e não podem redefinir conceitos governantes.
- Não há evidência para promoção ou nova avaliação ADF nesta slice.

## Work performed

Criados AD-007, ARP-0010, E01 e experimento executável. AP-0006, portfólio de
pesquisa, matriz de experimentos, índices e feature log foram sincronizados.

## Validations

- `npm test`: 7 passed, 0 failed.
- `npm run inventory`: 225 arquivos, 217 frontmatters, 182 IDs, nenhuma
  duplicidade, 18 tipos e 72 relações.
- `git diff --check`: executado no fechamento.

## Findings

- blocker: none.
- material: coexistem `architecture_directive` e `architectural_directive`.
- minor: none.
- observation: 72 rótulos de relação sem registry indicam proliferação, mas não
  provam quais devem ser fundidos.

## Limitations

O experimento prova coerência interna e encontra drift. Não prova completude,
usabilidade por Compiler, custo de migração nem redução líquida de complexidade
em um consumidor real.

## Files

Quinze arquivos foram criados ou modificados nesta unidade, incluindo
documentação, experimento, índices, feature log e este handoff.

## Commits

Nenhum commit criado.

## Git state

Branch `main`, HEAD inicial/final `e014c51`. Mudanças e untracked anteriores
foram preservados.

## Residual risks

- transformar axiomas candidatos em dogma sem evidência de consumo;
- criar registry burocrático que não reduz ambiguidade;
- migração destrutiva de aliases históricos;
- confundir enum de schema com identidade ontológica;
- tentar modelar todo o sistema antes do primeiro consumidor.

## Future decisions

Autorizar ou rejeitar um kernel ontológico mínimo experimental consumido pela
V1-M03. Antes de promoção, definir estratégia de aliases/migração e repetir o
ADF com evidência de simplicidade líquida.

## Project status snapshot

V1-M02 permanece em andamento. AP-0006 permanece `scheduled` e experimental;
ARP-0010 está `active/evidence_gathering`; nenhum trabalho de V1-M03 iniciou.

## Pacote para revisão do CSA

Recomendação: aceitar o framing e manter AP-0006 experimental. Próxima decisão:
autorizar ou não um kernel mínimo ligado a um consumidor real da V1-M03. Nada
continua automaticamente.
