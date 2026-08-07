---
schema_version: 0.1.0-experimental
id: IHR-0037
kind: knowledge
knowledge_type: implementation_handoff_report
title: Interaction Protocol Maturity Routing
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_experimental
acceptance_scope: experimental_checkpoint
review_basis: ASSESS-0003
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
    target: interaction-protocol-v0.2-experimental
---

# IHR-0037: roteamento por maturidade da iniciativa

## Purpose

Aplicar a decisão direta do CVO de reduzir perguntas de definição e tornar a
maturidade da iniciativa a primeira pergunta depois de o usuário dizer o que
quer.

## Sources

Pedido do CVO em 2026-08-07, Protocolo de Interação v0.1, visão de braços
autoextensíveis e regras globais de interação progressiva.

## Execution loop

1. Inspecionou o demo e a especificação existentes.
2. Separou maturidade da iniciativa de nível pessoal.
3. Definiu quatro rotas e a primeira pergunta única.
4. Atualizou demo, documentação e matriz de experimentos.
5. Executou cinco testes e a demonstração completa.

## Decisions applied

- `Semente`: discovery.
- `Estruturada`: consolidar e fechar lacunas.
- `Concreta`: inspecionar artefatos, refinar e gerar insights.
- `Em operação`: auditar, otimizar e evoluir com evidência real.
- A rota concreta não repete definições demonstradas pelos artefatos.

## Work performed

Criados `maturity.js`, testes e package local. O demo agora usa uma iniciativa
com CLI e README e prova que o fluxo pula definições básicas. README e feature
log foram atualizados.

## Validations

- `npm test`: 5 passed, 0 failed.
- `npm run demo`: seis etapas concluídas, rota `tangible` observada.
- Nenhuma dependência externa ou acesso de rede.

## Findings

- blocker: none.
- material: none.
- minor: nomes numéricos como básico/médio/alto/extremo julgariam a pessoa e
  seriam menos explicativos; foram substituídos por estados da iniciativa.
- observation: o quarto nível só é materialmente distinto quando já existem
  uso, comportamento, feedback, dados, resultados ou problemas reais.

## Limitations

As respostas continuam roteirizadas. O protocolo ainda não é um motor
interativo persistente nem está integrado a um runtime.

## Files

Nove arquivos desta melhoria foram criados ou modificados, incluindo feature
log e este handoff.

## Commits

Nenhum commit criado.

## Git state

Branch `main`, HEAD `e014c51`. Alterações e untracked anteriores foram
preservados.

## Residual risks

Autodeclaração de maturidade pode divergir dos artefatos. A rota deve adaptar-se
à evidência sem repreender ou rebaixar o usuário.

## Future decisions

Decidir futuramente se o roteamento entra no Motor de Descoberta e como detectar
maturidade automaticamente a partir de artefatos autorizados.

## Project status snapshot

V1-M02 permanece em andamento. A melhoria é experimental e não altera
PROJECT_STATUS nem inicia a próxima slice.

## Pacote para revisão do CSA

Recomendação: aceitar como melhoria experimental. Evidência: cinco testes e
demo executada. Promoção ou integração permanece pendente de decisão separada.
