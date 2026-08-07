---
data: 2026-08-07
titulo: Orquestração governada de papéis
tipo: feature
escopo: governance
ferramenta: codex
arquivos:
  - foundation/governance/GOV-003-governed-role-separation.md
  - foundation/protocols/GRP-001-governed-role-transition-protocol.md
  - foundation/directives/AD-010-governed-role-orchestration.md
  - experiments/governed-role-orchestration/guard.js
  - experiments/governed-role-orchestration/envelope.js
  - knowledge/backlog/proposals/AP-0022-governed-multi-agent-orchestration.md
---

## O que mudou

O sistema passou a distinguir troca lógica de papel, separação por chat e
multiagente independente. Um guard executável bloqueia autoaceite, authority do
router, alteração de diretiva, cadeia de handoff inválida e memória prematura.

## Por que

Alternar CSA e CEA no mesmo chat preservava o fluxo, mas não criava independência
real. Também havia ambiguidade em GOV-002 sobre quem poderia usar a exceção de
operador único.

## Como usar

Na pasta `experiments/governed-role-orchestration`, execute `npm test`. Integrações
devem criar um Role Handoff Envelope e enviar o log de eventos ao guard antes de
avançar o estado do trabalho.

## Notas

O modo preferido é uma entrada única para o CVO com CSA, CEA e reviewer em
sessões isoladas. A implementação atual valida regras, mas ainda não autentica
identidades nem executa agentes.
