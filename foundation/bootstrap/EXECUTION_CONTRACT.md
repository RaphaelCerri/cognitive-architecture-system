---
schema_version: 0.1.0-experimental
id: BOOT-005
kind: knowledge
knowledge_type: bootstrap_execution_protocol
title: Execution Contract
status: experimental
version: "1.0"
canonicality: governing_execution_protocol
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: governed_by
    target: PMM-001
  - type: refines
    target: GOV-001
  - type: related_to
    target: IHP-001
---

# EXECUTION_CONTRACT — regras universais para qualquer executor

Estas regras valem para **todo** executor (Codex, Claude Code, outro modelo,
pessoa) em **toda** slice, sem precisar ser repetidas nas diretivas. A diretiva
da tarefa pode restringir mais; nunca afrouxar. Este contrato não substitui
GOV-001 (papéis) nem IHP-001 (handoff) — ele os operacionaliza.

## Separações invioláveis

- o executor **não aprova o próprio trabalho** — accept/reject é de autoridade designada;
- recommendation ≠ authorization; proposal ≠ approval; approval ≠ execution; execution ≠ acceptance;
- artifact ≠ evidence; prototype ≠ runtime; derived state ≠ canonical decision;
- visible permission ≠ security enforcement; internal review ≠ user evidence;
- **não iniciar a etapa seguinte** (estágio, slice, sessão) por iniciativa própria.

## Preflight obrigatório

1. `git branch --show-current`, `git rev-parse HEAD`, `git status --short`;
2. comparar com o commit-base da diretiva/manifest — divergência material → interromper e relatar;
3. identificar untracked declarados a preservar (ver PROJECT_STATUS `preserved_local_paths`);
4. confirmar ação autorizada, arquivos permitidos/proibidos, orçamentos e mensagens de commit;
5. nenhum arquivo é modificado durante o preflight.

## Disciplina de Git

- staging **explícito por path** — nunca `git add .` nem `git add -A`;
- revisar `git diff --check` e o diff staged antes de cada commit;
- respeitar exatamente o número e as mensagens de commit autorizados;
- **não fazer push**; não reescrever histórico; não amend de commits anteriores à slice;
- ao final: reportar branch, HEAD, worktree limpo e untracked preservados.

## Disciplina de evidência

- **não inventar** resultado de teste, build, typecheck, lint ou observação humana;
- executar somente comandos que existem; registrar explicitamente o que **não** foi executado (`not_executed`/`limited`);
- observação empírica (navegador, teclado, AT, usuário) exige operador humano — a ausência de resposta **nunca** vira sucesso;
- toda claim no relatório rastreia a uma fonte (comando executado, artifact, declaração literal do operador).

## Orçamentos e stopping rules

Toda slice declara: max iterações, duração, arquivos, commits, ciclos materiais de
correção e iterações sem progresso. Atingiu qualquer limite → **interromper,
preservar estado, relatar, pedir decisão**. Stopping rules adicionais universais:
conflito de fontes material; necessidade de alterar Ontologia/ARCH-001/outros
programas; dependência não autorizada; escopo exigindo redesign; operador humano
indisponível quando exigido.

## Precedência em conflito (refinamento operacional de PMM-001)

1. Council/Chief Decision explícita e vigente para a tarefa;
2. protocolos e políticas canônicas de governança (manifestos, GOV, princípios, ADRs — na ordem de PMM-001);
3. ARP/programa ativo autorizado;
4. handoff (IHR) aceito mais recente;
5. evidence artifacts autoritativos;
6. Context Manifest da tarefa;
7. PROJECT_STATUS (view derivada);
8. resumo do próprio agente;
9. memória de conversa.

Conflito entre níveis 1–5 → interromper, nomear os artifacts em conflito e pedir
decisão. Esta ordem é candidata e subordinada a PMM-001; divergências detectadas
devem ser relatadas, não resolvidas pelo executor.

## Snapshot e staleness

PROJECT_STATUS e qualquer snapshot são views derivadas: confirme `observed_head`
contra o Git real. Snapshot divergente do repositório = stale → tratar o
repositório como verdade, relatar o drift, não "consertar" o snapshot fora do
checkpoint. Artifact obrigatório ausente → interromper e relatar (nunca supor o conteúdo).

## Retorno e rollback

- todo retorno segue `RETURN_SCHEMA.yaml` (duas camadas); checkpoints relevantes exigem IHR 12/12 (IHP-001);
- toda slice deve ser reversível por `git revert` dos seus commits — nenhuma migração irreversível;
- terminar sempre **interrompendo**: relatório entregue, nada iniciado automaticamente.

## Executores não suportados

Um executor que não consiga cumprir este contrato (sem acesso a Git, sem como
validar, sem como retornar no schema) deve declarar isso **antes** de alterar
qualquer arquivo e devolver a tarefa.
