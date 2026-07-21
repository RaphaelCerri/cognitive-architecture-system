---
schema_version: "0.1.0-experimental"
id: IHP-001
kind: knowledge
knowledge_type: architectural_protocol
title: "Implementation Handoff Protocol"
status: operational
version: "1.0"
created_at: 2026-07-21
owner: "Architecture Council"
language: pt-BR
relations:
  - type: established_by
    target: AD-002
  - type: implements
    target: AP-0010
  - type: recorded_by
    target: ADR-0011
  - type: constrained_by
    target: PMM-001
---

# IHP-001 — Implementation Handoff Protocol

## Objetivo

Permitir que CSA, CVO ou futuro CEA reconstruam, auditem e revisem um ponto de controle sem conversa anterior e sem acesso direto ao ambiente de desenvolvimento.

## Gatilhos obrigatórios

Produzir um handoff na conclusão de milestone ou entrega relevante, bloqueio, alteração significativa do plano, conflito arquitetural, acionamento do ACP, criação de AP, necessidade de decisão do Conselho e antes de solicitar avanço ao milestone seguinte.

Alterações triviais não exigem relatório completo.

## Conteúdo obrigatório

Todo relatório deve conter exatamente estas seções:

1. Contexto.
2. O que foi executado.
3. Arquivos afetados.
4. Validação realizada.
5. Plano versus execução.
6. Decisões tomadas pelo CEA.
7. Estado da documentação.
8. Backlog e propostas.
9. Riscos e pontos de atenção.
10. Questões para o Conselho.
11. Próxima ação recomendada.
12. Evidências.

O conteúdo deve declarar itens incompletos, desvios, arquivos removidos ou movidos, testes não executados e riscos ausentes ou existentes. Frases genéricas não satisfazem o protocolo.

## Persistência

O mesmo conteúdo entregue na conversa deve ser persistido em Markdown no local semanticamente associado ao ponto de controle. Relatórios de milestone ficam ao lado do respectivo milestone.

Cada relatório registra data, milestone, status, versão e commits relacionados. Handoffs são especializações experimentais de `Knowledge`, não Core Types.

## Estado de milestone

Implementação terminada não encerra um milestone. Antes da revisão, o estado é `pending_review`. O estado `completed` somente é permitido quando os sete requisitos da AD-002 forem satisfeitos.

## Responsabilidades

- O CEA produz evidências completas e não oculta desvios.
- O CVO transporta o pacote integralmente quando a revisão ocorrer fora do repositório.
- O CSA reconstrói e revisa o estado usando o pacote e a Project Memory.
- O Conselho aprova encerramentos com impacto arquitetural e decisões pendentes.

## Evolução

- 2026-07-21: versão 1.0 instituída pela AD-002.
