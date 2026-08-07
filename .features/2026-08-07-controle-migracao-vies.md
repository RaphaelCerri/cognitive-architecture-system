---
data: 2026-08-07
titulo: Controle experimental de migração de viés
tipo: feature
escopo: experiments/bias-migration-fairness-assurance
ferramenta: codex
arquivos:
  - experiments/bias-migration-fairness-assurance/protocol.js
  - experiments/bias-migration-fairness-assurance/scenarios.js
  - experiments/bias-migration-fairness-assurance/protocol.test.js
  - knowledge/research/evidence/bias-migration-fairness-assurance-feasibility.md
  - experiments/EXPERIMENTS.md
---

## O que mudou

Passou a existir uma prova executável que compara superfícies de dano antes e
depois de mudanças cognitivas. Ela identifica viés preservado, reduzido,
amplificado, deslocado, introduzido, obscurecido ou desconhecido e aplica gates
de autoridade e evidência.

## Por que

Os controles anteriores preservavam memória, proveniência e separação de papéis,
mas não detectavam explicitamente quando uma melhoria local deslocava prejuízo
para outro grupo, dimensão ou etapa do pipeline.

## Como usar

Na pasta `experiments/bias-migration-fairness-assurance`, executar `npm test`
para validar os controles e `npm run demo` para ver o relatório dos 11 cenários.

## Notas

O experimento não define fairness, não usa dados pessoais, não escreve na
Project Memory real e não está integrado ao Runtime ou Orchestrator. Promoção
futura exige evidência real, ADF e decisão do Council.
