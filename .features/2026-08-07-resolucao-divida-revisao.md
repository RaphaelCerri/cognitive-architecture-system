---
data: 2026-08-07
titulo: Resolução da dívida de revisão
tipo: melhoria
escopo: governance
ferramenta: codex
arquivos:
  - foundation/directives/AD-011-pending-review-debt-resolution.md
  - knowledge/assessments/ASSESS-0003-pending-review-debt-resolution.md
  - foundation/bootstrap/PROJECT_STATUS.yaml
  - milestones/V1-M02-personal-mode-foundation-handoff.md
  - foundation/governance/GOV-003-governed-role-separation.md
  - foundation/protocols/GRP-001-governed-role-transition-protocol.md
---

## O que mudou

Todos os 71 artifacts com estado pendente receberam uma disposição rastreável.
Quarenta IHRs, 29 evidências e dois candidatos de governança agora apontam para
uma avaliação única, com escopo, outcome e data de revisão.

## Por que

A fila misturava reviews atuais ausentes com checkpoints históricos já aceitos,
mas nunca reconciliados no frontmatter. Isso tornava a Project Memory ambígua e
escondia uma pendência real no IHR-0035.

## Como usar

Consultar `ASSESS-0003` para a decisão consolidada e o escopo de cada grupo. O
campo `review_basis: ASSESS-0003` nos artifacts permite rastrear a disposição.

## Notas

Aceite experimental não significa canonização nem prontidão de produção. O
commit omnibus `7fe78f8` foi preservado e permanece com finding material porque
não oferece rollback independente por slice.
