---
schema_version: 0.1.0-experimental
id: IHR-0039
kind: knowledge
knowledge_type: implementation_handoff_report
title: AP-0006 Minimal Ontology Kernel Consumer
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_as_experimental_reference_remain_experimental
acceptance_scope: experimental_reference
review_basis: ASSESS-0003
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
    target: ARP-0010-E02
  - type: authorized_by
    target: AD-008
---

# IHR-0039: kernel ontológico mínimo

## Purpose

Implementar a próxima evidência solicitada por IHR-0038: um kernel mínimo
consumido por contrato real de Knowledge Object, com política de alias/migração
e nova avaliação ADF.

## Sources

AD-008, AP-0006, ARP-0010-E01, ASSESS-0001, ADR-0001/0002/0005/0007/0008,
PMM-001, Project Charter, AP-0003 e Roadmap V1-M03.

## Execution loop

1. Escolheu envelope de Knowledge Object como menor consumidor real.
2. Definiu seis dimensões e um alias de compatibilidade comprovado.
3. Criou famílias derivadas sem substituir predicates declarados.
4. Implementou consumer, evaluator e migration proposals.
5. Consumiu artifacts reais do repositório e mediu cobertura.
6. Executou 13 testes, incluindo integridade byte a byte de AD-006.
7. Repetiu ADF em ASSESS-0002.

## Decisions applied

- `architectural_directive` permanece declarado e normaliza apenas na view.
- Migração é `proposal_only` e nunca autoaplicada.
- Família de relação é classificação derivada, não predicate substituto.
- Authority ausente vira `unknown`.
- Compatibilidade estrutural não equivale a validade semântica.

## Work performed

AD-008, cinco módulos executáveis, testes, E02 e ASSESS-0002 foram criados.
AP-0006, AP-0003, README, matriz de experimentos, índices e feature log foram
sincronizados.

## Validations

- `npm test`: 13 passed, 0 failed.
- `npm run evaluate`: 225 Markdown, 186 válidos, cobertura 82,7%.
- 670 relações declaradas, 527 classificadas, cobertura 78,7%.
- AD-006 permaneceu byte a byte idêntico após proposal de migração.
- `git diff --check`: executado no fechamento.

## Findings

- blocker: none.
- material: 49 predicates ainda não têm família definida.
- minor: 39 Markdown não satisfazem o envelope, majoritariamente porque são
  documentação comum e não Knowledge Objects identificados.
- observation: 142 de 186 artifacts compatíveis declaram alguma authority claim,
  mas os campos não são semanticamente equivalentes.

## Limitations

O consumer valida envelope, não o corpo Markdown. Uma única migração de alias
não prova estratégia global. Não houve medição longitudinal de autoria,
manutenção ou uso por Compiler.

## Files

Dezessete arquivos foram criados ou modificados nesta unidade, incluindo
diretiva, experimento, evidência, assessment, propostas, índices e este handoff.

## Commits

Nenhum commit criado.

## Git state

Branch `main`, HEAD inicial/final `e014c51`. Mudanças e untracked anteriores
foram preservados.

## Residual risks

- famílias amplas mascararem semânticas diferentes;
- envelope mínimo virar schema público por uso acidental;
- coverage ser confundida com correctness;
- aliases se acumularem sem política de expiração;
- V1-M03 estabilizar contrato antes de exemplos de autoria.

## Future decisions

ASSESS-0002 recomenda usar o kernel apenas como referência para planejar V1-M03.
A próxima slice candidata especificaria envelope, exemplos válidos/inválidos e
critérios de autoria, sem ainda estabilizar schema público.

## Project status snapshot

V1-M02 continua em andamento. ARP-0010 permanece `active/evidence_gathering`;
AP-0006 continua `scheduled/remain_experimental`; AP-0003 continua `proposed`;
V1-M03 não foi iniciada.

## Pacote para revisão do CSA

Recomendação: aceitar o kernel como referência experimental e aceitar o resultado
`remain_experimental` de ASSESS-0002. Próxima decisão: autorizar ou não a
especificação candidata do envelope de V1-M03. Nada continua automaticamente.
