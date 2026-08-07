---
data: 2026-08-07
titulo: Planejamento de contratos da V1-M03
tipo: feature
escopo: ontology-framing
ferramenta: codex
arquivos:
  - foundation/directives/AD-012-v1-m03-contract-readiness-planning.md
  - milestones/V1-M03-knowledge-object-contracts.md
  - knowledge/research/evidence/v1-m03-contract-readiness-plan.md
  - experiments/ontology-framing/v1m03-plan.js
  - experiments/ontology-framing/v1m03-plan.test.js
  - milestones/V1-M02-v1-m03-contract-readiness-planning-handoff.md
  - knowledge/assessments/ASSESS-0004-v1-m03-contract-readiness-plan.md
---

## O que mudou

A V1-M03 agora possui um plano de readiness executável que separa planejamento
de estabilização. Quatro profiles candidatos, oito gates e regras de
compatibilidade mostram exatamente quais evidências faltam antes de um schema.

## Por que

O roadmap mencionava schemas de Core Types confirmados, mas o sistema ainda
confirma apenas o formato Markdown com YAML. Prosseguir diretamente criaria uma
taxonomia permanente a partir de labels experimentais.

## Como usar

Na pasta `experiments/ontology-framing`, executar `npm run plan:v1m03` para ver
o estado atual e `npm test` para validar os gates e stopping rules.

## Notas

O planejamento está pronto, mas a estabilização permanece bloqueada. Não foram
criados schema público, Type Registry, migração, Compiler ou Runtime. A revisão
CSA aceitou somente o readiness de planejamento, registrado em ASSESS-0004.
