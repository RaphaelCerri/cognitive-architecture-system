---
schema_version: "0.1.0-experimental"
id: AD-005
kind: knowledge
knowledge_type: architecture_directive
title: "Live Bootstrap Portability and Continuity Maintenance"
status: operational
version: "1.0"
created_at: 2026-07-23
author: "Architecture Council"
language: pt-BR
relations:
  - type: follows
    target: AD-004
  - type: refines
    target: GOV-001
  - type: amends
    target: README
  - type: handed_off_by
    target: IHR-0027
  - type: related_to
    target: ARP-0009
  - type: related_to
    target: PMM-001
---

# AD-005 — Live Bootstrap Portability and Continuity Maintenance

## Contexto

O Council autorizou, em 2026-07-23, um teste vivo de portabilidade do bootstrap
agnóstico de executor (instituído pela slice registrada em IHR-0026): uma sessão
nova, sem contexto de conversas anteriores, deveria abrir `AGENT_START_HERE.md` e
reconstruir propósito, autoridade, estado, escopo e formato de retorno somente a
partir do repositório. A primeira tentativa parou antes de entrar no repositório
por não ter o path local — comportamento correto do executor (recusar autoridade
por texto de prompt sem confirmação, interromper diante de ambiguidade), não uma
falha do bootstrap. Reenviada a diretiva com o path confirmado, o executor validou
branch, HEAD e worktree e entrou pela sequência de bootstrap prevista.

Esta diretiva registra formalmente a decisão do Council e autoriza exclusivamente
a micro-slice de manutenção institucional nomeada em IHR-0026 §8 e §11 para
fechar três lacunas descobertas por esse teste.

## Decisão

1. **GOV-001 tornado agnóstico de fornecedor/modelo.** As definições normativas de
   CSA e CEA/executor deixam de citar `ChatGPT` e `Codex` e passam a ser definidas
   por responsabilidade, autoridade, capability requerida e restrições. A
   distribuição de autoridade entre CVO, CSA, CEA/executor e Council não muda.
   Referências históricas a modelos específicos podem permanecer somente como nota
   não normativa.
2. **README passa a apontar para `AGENT_START_HERE.md`.** Uma entrada curta
   distingue o README (porta de entrada humana) do `AGENT_START_HERE.md` (porta de
   entrada institucional para executores), sem duplicar o conteúdo do bootstrap.
3. **Persistência de Council Decisions confirmada como `foundation/directives/`
   (ADs/ACDs).** Esta própria diretiva é o exercício da lacuna nomeada em
   IHR-0026: decisões do Council recentes à camada de bootstrap deixam de existir
   somente como citação dentro de um IHR e passam a ter um artifact canônico
   próprio, append-only, no local institucional já convencionado (`REPOSITORY_MAP.yaml`
   → `governance.directives`). Nenhuma convenção nova foi inventada.

## Escopo e limites desta slice

Documental apenas: sem dependências, sem código de runtime, sem alteração ao
vertical slice, à Ontologia, a `ARCH-001`, a estados de ARPs, a Stage 4, a
avaliação externa ou a sessões de acessibilidade. Máximo 6 arquivos rastreados,
2 commits, 45 minutos, 5 iterações — conforme a diretiva recebida via CSA em
2026-07-23.

## Achado registrado (não resolvido nesta diretiva)

A diretiva curta do teste vivo assumiu que a nova sessão já abriria com o
repositório como working directory. Isso não invalida o bootstrap: mostra que a
**descoberta do repositório é uma responsabilidade externa ao bootstrap**, a
menos que exista um localizador estável ou uma convenção de lançamento (abrir a
ferramenta já na raiz do projeto, fornecer o path explicitamente, ou manter um
registry externo de projetos). Fica como observação futura para uma AP, não
decidida aqui.

## Restrições

Não altera a hierarquia de autoridade de PMM-001 §Authority Hierarchy. Não
substitui EXECUTION_CONTRACT nem RETURN_SCHEMA. Não autoriza automação de
descoberta de repositório, compiler de contexto ou integração LLM.

## Histórico

- 2026-07-23: diretiva registrada; GOV-001 e README atualizados; lacuna de
  descoberta de repositório nomeada para decisão futura do Council.
