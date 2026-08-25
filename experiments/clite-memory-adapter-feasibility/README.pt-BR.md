# Canonical Project Memory Adapter — feasibility (experimental)

> [English](README.md) · **Português**

Experimento autorizado pela Council Decision "Canonical Project Memory Adapter
Feasibility" (2026-07-23). Responde empiricamente:

> Uma Project Memory humana e versionável em Markdown + YAML consegue
> inicializar, retomar e comparar o domínio experimental C-lite de forma
> determinística, sem transformar runtime, snapshot, event log ou derived view
> em Source of Truth?

```text
Canonical Project Memory != Runtime State != Event Log != Snapshot
Read Adapter             != Write Authority
Update Proposal          != Accepted Canonical Change
Feasibility Adapter      != Production Persistence
Candidate Format         != Ontology != Stable Schema
```

## Pipeline

```text
Markdown/YAML Project Memory
  → ValidatedMemoryDocument   (reader.ts — parse + versão + campos críticos)
  → NormalizedMemoryRecord    (normalize.ts — determinístico; conflitos classificados)
  → Domain Initialization     (initialize.ts — conteúdo vem do fixture; perdas declaradas)
  → AppState                  (domínio extraído, importado por referência, sem modificação)
```

- `src/proposal.ts` — gera `memory_update_proposal` (status sempre `proposed`);
  o adapter **nunca escreve** no artifact canônico nem aplica propostas.
- `memories/` — duas Memories experimentais (Oficina Horizonte em
  `awaiting_input`; Estufa Vertical em `under_review` com
  `solo_operator_exception` de baixo risco).

## Dependência

`yaml` (^2) — **única dependência de runtime nova**, justificada: nenhum parser
YAML seguro existe no repositório e parsing YAML manual é inseguro; o pacote
não possui dependências transitivas.

## Como rodar

```bash
npm install
npm run typecheck
npm test
```

## O que este experimento NÃO é

Não é o adapter definitivo do produto; não é banco/backend/API/sincronização;
não altera o domínio extraído nem o vertical slice; não escreve em artifacts
reais do projeto; não implementa autenticação/enforcement; não cria schema
canônico — o formato `memory-format-0.1-experimental` é candidato e
descartável. Promoção exige decisão do Council.
