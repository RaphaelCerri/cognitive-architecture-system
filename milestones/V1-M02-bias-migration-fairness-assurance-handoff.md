---
schema_version: 0.1.0-experimental
id: IHR-0036
kind: knowledge
knowledge_type: implementation_handoff_report
title: Bias Migration & Fairness Assurance Experimental Slice
status: pending_review
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
    target: ARP-0009-E78
  - type: related_to
    target: AP-0021
---

# IHR-0036: Bias Migration & Fairness Assurance

## Purpose

Executar a slice experimental CSA-BMFA-001 após autorização direta do CVO em
2026-08-07. A slice devia provar se uma mudança cognitiva pode ser comparada
antes/depois para detectar redução, amplificação ou deslocamento de viés, sem
delegar ao mecanismo a autoridade de definir fairness.

## Sources

Fontes internas: PMM-001, GOV-001, AD-006, AD-004, E75, ARP-0007, AP-0021 e
Governed Cognitive Loops. Fontes externas primárias e limitações estão
registradas em ARP-0009-E78.

## Execution loop

1. Auditou controles existentes e delimitou a lacuna.
2. Criou vocabulário e comparação before/after por superfície.
3. Implementou gates de autoridade, dados sensíveis, memória e claims.
4. Criou 11 cenários de migração cognitiva e fairness.
5. Executou demo; todos os cenários produziram o resultado esperado.
6. A primeira execução da suíte encontrou `spawn EPERM` no isolamento padrão do
   runner. O runner foi configurado com `--test-isolation=none`; 14/14 passaram.
7. Registrou evidência, matriz de experimentos e feature log.

## Decisions applied

- A capacidade permanece transversal e experimental, não vira Agent ou Core Type.
- `harm_score` é evidência específica do cenário, não métrica universal.
- Superfície ausente depois da mudança vira `obscured`, não melhoria presumida.
- Saídas derivadas nunca têm autoridade canônica.
- Project Memory aceita apenas efeito `proposal_only` neste experimento.

## Work performed

Criado protocolo CommonJS sem dependências externas, fixtures, demo, 14 testes,
README, evidência ARP-0009-E78 e registro obrigatório em `.features/`. A matriz
`experiments/EXPERIMENTS.md` agora inclui também os experimentos de interação,
processos e BMFA que existiam fora da tabela anterior.

## Validations

- `npm test`: 14 passed, 0 failed.
- `npm run demo`: 11 cenários executados, com outputs esperados.
- `git diff --check`: passou; somente aviso informativo de normalização LF/CRLF.
- Busca de colisão `ARP-0009-E78|IHR-0036`: nenhuma colisão anterior encontrada.

## Findings

- blocker: none.
- material: o protocolo não identifica sujeitos/dimensões que ninguém incluiu.
- minor: o runner padrão do Node tenta subprocesso bloqueado neste ambiente; a
  suíte usa isolamento no mesmo processo.
- observation: o termo original não é nomenclatura consolidada, mas o mecanismo
  converge com fairness sob updates, distribution shift e lifecycle monitoring.

## Limitations

Fixtures sintéticas não provam fairness no mundo real. Não houve pessoas, dados
sensíveis, integração, alteração de memória real nem avaliação normativa de
métricas. A classificação detecta migração apenas nas superfícies declaradas.

## Files

Criados: seis arquivos no experimento, ARP-0009-E78, esta IHR e dois arquivos em
`.features/`. Modificado: `experiments/EXPERIMENTS.md`. Total: 11 arquivos.

## Commits

Nenhum commit criado. A autorização foi para aplicar a slice, não para publicar
ou commitar o worktree compartilhado.

## Git state

Branch inicial/final: `main`. HEAD inicial/final: `e014c51`. Untracked anteriores
foram preservados e não alterados, incluindo `.obsidian/`, `graphify-out/` e os
drafts em `knowledge/`.

## Residual risks

- falsa precisão do score normalizado;
- escolha enviesada de quem e o que medir;
- conflito entre métricas normativas;
- uso indevido do evaluator como certificado de fairness;
- baixa independência se o mesmo runtime ocupar múltiplos papéis.

## Future decisions

O Council deve decidir se mantém o experimento isolado, autoriza casos reais ou
abre AP para um protocolo transversal. Integração ao Orchestrator, Runtime ou
Project Memory não foi iniciada e exigiria autorização separada.

## Project status snapshot

V1-M02 permanece `in_progress`. PROJECT_STATUS não foi modificado porque a slice
é evidência experimental pendente de revisão e não altera o checkpoint aceito,
o trabalho autorizado anterior ou o próximo estágio.

## Pacote para revisão do CSA

Recomendação: **aceitar como experimento, não promover**. Evidência: 14 testes,
11 cenários, gates negativos demonstrados e limitações explícitas. Decisão
requerida: autorizar ou não uma futura aplicação controlada a mudanças reais de
memória/retrieval. Nada continua automaticamente.
