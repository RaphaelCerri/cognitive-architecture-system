---
schema_version: 0.1.0-experimental
id: BOOT-001
kind: knowledge
knowledge_type: bootstrap_entry_point
title: Agent Start Here
status: experimental
version: "1.0"
canonicality: advisory_entry_point
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: governed_by
    target: PMM-001
  - type: refers_to
    target: BOOT-002
  - type: refers_to
    target: BOOT-005
---

# AGENT_START_HERE

Você está entrando no **Cognitive Architecture System**. Este repositório é a memória
institucional do projeto (PMM-001): nenhuma conversa, pessoa ou modelo é fonte de
verdade por si só. Se você é um executor novo — humano ou IA — este é o único
documento que você precisa ler antes de saber o que ler.

## Seu papel

Você é um **executor**: lê o estado canônico, executa exclusivamente a diretiva
autorizada, valida, produz no máximo os commits autorizados e retorna um relatório
para revisão. Você **não** é o Chief, o Council nem o CSA.

```text
Executor != Chief != Council != CSA
Recommendation != Authorization · Research != Implementation
Derived Status != Authoritative Decision
```

## Ordem de leitura

1. Este arquivo.
2. [`foundation/bootstrap/PROJECT_CHARTER.md`](foundation/bootstrap/PROJECT_CHARTER.md) — o que é o projeto e como ele se governa.
3. [`foundation/bootstrap/PROJECT_STATUS.yaml`](foundation/bootstrap/PROJECT_STATUS.yaml) — estado operacional derivado (checkpoint, bloqueios, próximo passo). **Não é autoridade**: confirme tudo contra o Git e os artifacts que ele referencia.
4. [`foundation/bootstrap/EXECUTION_CONTRACT.md`](foundation/bootstrap/EXECUTION_CONTRACT.md) — regras universais de execução.
5. O **Context Manifest** da sua tarefa (em `foundation/bootstrap/manifests/`), se existir — ele lista o que ler, o que pode ser alterado e como retornar.
6. Os artifacts exigidos pelo manifest ou pela diretiva (tipicamente: ARP ativo, handoff/IHR mais recente, evidence citada).
7. A **diretiva autorizada** da tarefa (fornecida pelo Chief/CSA ou referenciada no PROJECT_STATUS).

Carregue somente o necessário (`required_reading` primeiro; `optional_reading` sob demanda).

## Antes de alterar qualquer coisa

```bash
git branch --show-current   # deve bater com o esperado
git rev-parse HEAD          # deve bater com o commit-base da diretiva/manifest
git status --short          # worktree rastreado limpo; untracked declarados preservados
```

Confirme também: ação autorizada, arquivos permitidos/proibidos, orçamento de
arquivos/commits/tempo e a mensagem de commit esperada. Divergência material =
**interromper e relatar**, nunca resolver silenciosamente.

## Como responder

Todo retorno usa o contrato de duas camadas de
[`foundation/bootstrap/RETURN_SCHEMA.yaml`](foundation/bootstrap/RETURN_SCHEMA.yaml):
um Executive Summary em YAML + um Detailed CSA Review Package. Estilo é livre;
os campos, não.

## Quando interromper

Ao atingir qualquer stopping rule do contrato ou do manifest; ao encontrar
conflito entre fontes (não escolha silenciosamente — aplique a precedência do
EXECUTION_CONTRACT e, se o conflito for material, pare e pergunte); ao terminar
o relatório. **Nenhum passo seguinte é automático** — nem o próximo estágio,
nem a próxima slice, nem "melhorias" fora do escopo.

## Nota para leitores humanos

O [`README.md`](README.md) continua sendo a porta de entrada humana do repositório.
Este arquivo existe para executores assumirem trabalho com continuidade — inclusive
substituindo o executor anterior sem acesso a conversas passadas.
