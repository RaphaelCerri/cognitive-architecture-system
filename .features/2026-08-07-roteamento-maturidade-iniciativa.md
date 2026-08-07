---
data: 2026-08-07
titulo: Roteamento por maturidade da iniciativa
tipo: melhoria
escopo: experiments/interaction-protocol
ferramenta: codex
arquivos:
  - experiments/interaction-protocol/maturity.js
  - experiments/interaction-protocol/maturity.test.js
  - experiments/interaction-protocol/demo.js
  - experiments/interaction-protocol/README.md
  - experiments/EXPERIMENTS.md
---

## O que mudou

A primeira pergunta depois da intenção agora identifica se a iniciativa é uma
semente, está parcialmente estruturada, já é concreta ou já está em operação.
Cada resposta escolhe uma rota diferente e iniciativas concretas deixam de
receber perguntas de definição que seus artefatos já respondem.

## Por que

O protocolo anterior aplicava discovery semelhante a todos os casos. Isso
criava fricção para quem já possuía pasta, código, site, protótipo, especificação
detalhada ou resultados reais e precisava de refinamento ou insights.

## Como usar

Na pasta `experiments/interaction-protocol`, executar `npm test` para validar as
quatro rotas e `npm run demo` para ver o fluxo concreto pulando definições
básicas.

## Notas

Os níveis descrevem o estado da iniciativa, não a capacidade da pessoa. O nível
mais alto é `Já está em uso`, cuja rota prioriza auditoria, otimização e evolução
com evidência real.
