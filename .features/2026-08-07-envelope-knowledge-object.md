---
data: 2026-08-07
titulo: Envelope candidato de Knowledge Objects
tipo: feature
escopo: experiments/ontology-framing
ferramenta: codex
arquivos:
  - foundation/directives/AD-009-knowledge-object-envelope-candidate.md
  - experiments/ontology-framing/envelope.js
  - experiments/ontology-framing/authoring-criteria.js
  - experiments/ontology-framing/evaluate-envelope.js
  - experiments/ontology-framing/envelope.test.js
  - knowledge/research/evidence/knowledge-object-envelope-candidate.md
---

## O que mudou

O kernel ontológico agora produz um envelope candidato de autoria com campos
mínimos, regras condicionais de autoridade, exemplos válidos e inválidos e
erros que explicam como corrigir o artifact.

## Por que

O kernel precisava demonstrar não apenas leitura de artifacts existentes, mas
também uma experiência de autoria pequena e verificável antes de informar os
contratos da V1-M03.

## Como usar

Na pasta `experiments/ontology-framing`, executar `npm run examples` para ver os
casos explicados e `npm run evaluate:envelope` para medir compatibilidade com o
repositório.

## Notas

O envelope é input experimental de planejamento. Ele não inicia V1-M03, não
estabiliza schema público e não transforma todo Markdown em Knowledge Object.
