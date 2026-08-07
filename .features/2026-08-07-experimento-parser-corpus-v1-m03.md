---
data: 2026-08-07
titulo: Experimento read-only de parser e corpus V1-M03
tipo: feature
escopo: experiments/ontology-framing
ferramenta: codex
arquivos:
  - experiments/ontology-framing/yaml-frontmatter-reader.js
  - experiments/ontology-framing/corpus-classifier.js
  - experiments/ontology-framing/contract-profile-candidates.js
  - experiments/ontology-framing/evaluate-contract-experiment.js
  - knowledge/research/evidence/v1-m03-contract-parser-corpus-experiment.md
  - milestones/V1-M02-v1-m03-contract-parser-corpus-experiment-handoff.md
---

## O que mudou

O experimento da V1-M03 agora lê frontmatter com parser YAML 1.2 real, classifica
todo o corpus permitido em categorias disjuntas, avalia profiles candidatos e
prova por hashes que as fontes não foram alteradas.

## Por que

O parser anterior usava expressões regulares e não sustentava nested values,
multiline scalars nem controles contra duplicate keys, custom tags e alias bombs.

## Como usar

Em `experiments/ontology-framing`, executar `npm test` e depois
`npm run experiment:v1m03-contract` para obter a fotografia diagnóstica atual.

## Notas

O resultado não é schema, registry nem validação de authority/semântica. O
mapping dos profiles é experimental e a estabilização permanece bloqueada. A
revisão CSA aceitou E05 somente como evidência experimental em ASSESS-0005.
