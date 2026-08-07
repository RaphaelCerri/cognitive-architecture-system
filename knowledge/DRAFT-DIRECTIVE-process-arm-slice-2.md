---
title: "Diretiva Enxuta — Slice 2: Braço de Processos (primeiro braço real, com sessão viva)"
status: DRAFT
canonicality: directive_draft
issued_by: CSA (tradução da visão), sob autorização do CVO (Raphael) em 2026-07-23
governs_executor: CEA
profile: personal-low-risk (GOV-002)
parent_vision: knowledge/DRAFT-VISION-self-extending-capability-arms.md
depends_on: Slice 1 aceito (experiments/interaction-protocol/, commit 63a6827)
created_at: 2026-07-23
language: pt-BR
---

# Diretiva — Slice 2: Braço de Processos (primeiro braço real)

## Contexto (uma frase)
Slice 1 provou a FORMA da conversa (storyboard). Slice 2 constrói o **primeiro braço real**
— Processos — plugando conhecimento de domínio no Protocolo e, principalmente, **rodando de
verdade num processo real do Raphael** (primeiro dogfooding do sistema — fecha G-A15).

```text
Storyboard != Motor   ·   Blueprint != Sessão real   ·   Experimento != Canon
Input humano real NÃO pode ser inventado nem roteirizado como se fosse real
```

## Ação autorizada
Criar `experiments/process-arm/` com dois entregáveis:
1. **BLUEPRINT do Braço de Processos** — a capacidade reutilizável (instancia, pela primeira
   vez, o vocabulário do ARP-0008: Agent Blueprint / Skill / Strategy).
2. **Uma sessão real conduzida com o Raphael** — o braço rodado num processo real que ele
   escolher, com as respostas REAIS dele, gerando o artefato estruturado de saída.

## Entregável 1 — BLUEPRINT (o braço, desenhado pelo CSA; implemente, não redesenhe)

O Braço de Processos = o Protocolo de Interação (Slice 1) + estas especializações de domínio:

**Fases especializadas para processo:**
1. **Enquadrar** — igual ao protocolo base.
2. **Mapear estado atual** — capturar o processo como É hoje (etapas, quem faz, ferramentas).
3. **Inventário de dores** — perguntar TODAS as dores/atritos do processo, uma leva por vez.
4. **Aprofundar (o diferencial)** — sondar ativamente o que o usuário NÃO disse: modos de
   falha, plano B, esperas/filas, retrabalho, handoffs entre pessoas, exceções, gargalo,
   ponto único de falha. Perguntar o que costuma ser esquecido.
5. **Brainstorm/Insight** — devolver padrões (ex.: "a dor X é diária E é a única sem plano B").
6. **Propor processo otimizado** — aplicar heurísticas de otimização e propor o processo
   melhorado, discutindo cada mudança com o usuário.

**Heurísticas de otimização (a estratégia do braço):** eliminar (a etapa é necessária?),
automatizar (dá pra máquina fazer?), simplificar, reordenar, agrupar/batch, criar plano B
pro ponto único de falha. Cada proposta com rationale e ligada a uma dor concreta.

**Checklist de aprofundamento** (o que sempre sondar antes de fechar): modos de falha ·
plano B · esperas · retrabalho · handoffs · exceções · gargalo · ponto único de falha ·
frequência × esforço de cada etapa.

**Contrato de saída (estruturado, YAML ou JSON — reaproveitar formato de memória existente,
sem promover a canon):** `processo`, `estado_atual` (etapas), `inventario_dores`,
`lacunas_detectadas`, `insights`, `processo_otimizado_proposto` (mudanças + rationale),
`proxima_acao`.

## Entregável 2 — Sessão real (o que prova valor e faz dogfooding)
Depois de escrever o BLUEPRINT, **conduza uma sessão real com o Raphael no chat**: peça pra
ele escolher um processo real dele, e conduza a entrevista turno a turno seguindo o
BLUEPRINT — poucas perguntas por vez, ramificando conforme as respostas REAIS dele,
aprofundando com o checklist. Ao final, escreva o artefato estruturado a partir das
respostas reais e marque-o como **input humano real** (`source: real_human_session`).

- A ramificação aqui é **de verdade** (dirigida pela resposta real), não roteirizada.
- Se o Raphael não estiver disponível para responder na sessão, **pare e relate** — NÃO
  invente respostas nem faça um storyboard fingindo ser real. Entregue o BLUEPRINT e declare
  a sessão real como pendente.

## Escopo — permitido / proibido
- **Permitido:** criar somente dentro de `experiments/process-arm/`; ler ARP-0008 e o Slice 1.
- **Proibido:** tocar em `foundation/`, `knowledge/` (exceto ler), ontologia, ARCH-001,
  outros experimentos, `.obsidian/`; promover contrato a canon; construir o Braço de
  Marketing ou a Fábrica de Braços (slices futuros); rede/integração/autenticação real;
  inventar respostas humanas.

## Orçamentos (personal-low-risk, enxuto)
- Iterações: até 6. Arquivos: até 12. Commits: até 2
  (`feat: process arm blueprint`; e, se a sessão real acontecer, `docs: record first real process session`).
- Sem push. Reversível por `git revert`. Parar e relatar ao atingir qualquer limite ou se o
  humano ficar indisponível quando exigido.

## Como retornar
`RETURN_SCHEMA.yaml` (duas camadas). Se a sessão real aconteceu, colar o artefato real no
relatório e marcar `real_human_session`. Terminar interrompendo — não iniciar Marketing nem
a Fábrica.

## Critério de sucesso (verificável)
(1) Existe um BLUEPRINT que qualquer executor consegue seguir pra conduzir uma entrevista de
processo. (2) Uma sessão real foi conduzida com o Raphael sobre um processo real dele, e o
artefato de saída contém: estado atual, inventário de dores, ao menos uma lacuna sondada que
ele não tinha dito, ao menos um insight, e um processo otimizado proposto com rationale —
tudo a partir de respostas reais.
