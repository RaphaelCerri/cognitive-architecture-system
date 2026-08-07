---
data: 2026-08-07
titulo: Kernel ontológico mínimo para Knowledge Objects
tipo: feature
escopo: experiments/ontology-framing
ferramenta: codex
arquivos:
  - foundation/directives/AD-008-minimal-ontology-kernel.md
  - experiments/ontology-framing/kernel.js
  - experiments/ontology-framing/knowledge-object-contract.js
  - experiments/ontology-framing/migration.js
  - experiments/ontology-framing/evaluate.js
  - knowledge/research/evidence/minimal-ontology-kernel-consumer.md
---

## O que mudou

O framing da AP-0006 ganhou um kernel mínimo consumido por um contrato candidato
de Knowledge Object. Ele normaliza views de identidade, classificação,
autoridade, proveniência, estado e representação sem alterar artifacts fonte.

## Por que

O framing conceitual precisava provar valor num consumidor real antes de nova
avaliação ADF. O kernel mede cobertura, preserva predicates declarados, expõe
ambiguidades e gera apenas propostas humanas de migração.

## Como usar

Na pasta `experiments/ontology-framing`, executar `npm test` e depois
`npm run evaluate`. O relatório mostra cobertura contratual, authority claims,
relações classificadas, aliases e ambiguidades residuais.

## Notas

O kernel permanece experimental. ASSESS-0002 manteve AP-0006 como
`remain_experimental`; nenhum schema público ou Type Registry foi promovido.
