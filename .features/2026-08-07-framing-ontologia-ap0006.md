---
data: 2026-08-07
titulo: Framing executável da ontologia formal
tipo: feature
escopo: experiments/ontology-framing
ferramenta: codex
arquivos:
  - foundation/directives/AD-007-ap-0006-ontology-framing.md
  - knowledge/research/ARP-0010-formal-system-ontology.md
  - knowledge/research/evidence/formal-system-ontology-framing.md
  - experiments/ontology-framing/model.js
  - experiments/ontology-framing/inventory.js
  - experiments/ontology-framing/model.test.js
---

## O que mudou

A AP-0006 passou a possuir um framing executável que separa metamodelo
constitucional, ontologia do sistema e representações. O experimento inventaria
o vocabulário real, responde perguntas de competência e testa extensões sem
promover tipos canônicos.

## Por que

O repositório já possui dezenas de tipos e relações experimentais sem registry.
Antes de estabilizar schemas, Compiler ou contratos públicos, era necessário
definir limites e provar onde já existe drift sem reescrever a história.

## Como usar

Na pasta `experiments/ontology-framing`, executar `npm test` para validar o
modelo candidato e `npm run inventory` para gerar o inventário derivado do
estado atual do repositório.

## Notas

O resultado permanece `remain_experimental`. Nenhum Core Type, schema público,
diretório de ontologia ou migração de vocabulário foi criado.
