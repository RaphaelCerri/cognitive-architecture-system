---
title: "Experimento — Protocolo de Interação (Slice 1)"
status: experimental
canonicality: experimental_prototype_not_canon
created_at: 2026-07-23
parent_directive: knowledge/DRAFT-DIRECTIVE-interaction-protocol-slice-1.md
parent_vision: knowledge/DRAFT-VISION-self-extending-capability-arms.md
language: pt-BR
---

# Protocolo de Interação — protótipo demonstrável

Experimento descartável (não canônico). Implementa, sem redesenhar, o Protocolo
de Interação desenhado na diretiva da Slice 1: a espinha de comunicação que os
futuros Braços de Capacidade (Processos, Marketing, ...) vão reutilizar.

`Especificar != Provar` — este diretório existe para **provar rodando**, não só descrever.

## Fases do loop

1. **Enquadrar** — 1-2 frases dizendo o que vamos fazer e quantas etapas.
2. **Elicitar** — 1 a 3 perguntas amplas por turno. Nunca despejar lista.
3. **Ramificar** — a resposta anterior escolhe o próximo conjunto de perguntas
   (árvore, não lista fixa).
4. **Aprofundar** — depois das respostas de superfície, sonda ativamente algo
   que **ainda não foi perguntado** (o que o usuário pode ter esquecido).
5. **Brainstorm/Insight** — devolve padrões vistos nos dados e os discute
   (provoca, não só coleta).
6. **Sintetizar** — resumo digerível + **uma** próxima ação clara.

(Otimizar é fase específica de cada braço de domínio — fica fora deste protocolo base.)

## Regras de comunicação (transversais a todas as fases)

- uma coisa de cada vez; máximo 3 perguntas por turno;
- sempre mostrar progresso (`Etapa N de 6`);
- linguagem simples, zero jargão sem explicação;
- todo turno termina com uma ação/decisão clara para o usuário;
- reconhecer o que já foi conquistado antes de pedir o próximo;
- resumo antes de mudar de fase.

## Estado rastreado

- `fase_atual`
- `respostas_coletadas` (estruturado)
- `threads_abertas` (o que ainda falta perguntar — pode terminar não-vazio;
  isso é honesto, não é bug)
- `insights_gerados`
- `lacunas_detectadas` (o que o usuário pode ter esquecido)

## Contrato de saída

Um registro estruturado (JSON aqui; equivalente a YAML) da sessão, reaproveitando
a mesma taxonomia de campos usada nos artifacts YAML/frontmatter deste
repositório (`schema_version`, `kind`, `canonicality`, ...) — sem promover este
contrato a canon. Serve de ponte para um formato de Memory futuro, não é Memory.

## Como rodar

Sem dependências, sem rede, sem instalação:

```bash
node demo.js
```

`demo.js` conduz uma elicitação de exemplo (mapear um mini-processo neutro —
"preparar café de manhã") com respostas de exemplo roteirizadas, e imprime:
a sequência de perguntas ramificadas, as transições de fase com recap, a
sondagem de aprofundamento, os insights gerados, as lacunas detectadas e o
registro estruturado final.

## Limites deste experimento

- Não é o Motor de Descoberta genérico nem um Braço de domínio — é só a espinha.
- As respostas do "usuário" são roteirizadas (texto fixo), não input interativo real:
  o objetivo desta slice é provar a forma do protocolo, não construir um CLI interativo.
- Não inicia o Braço de Processos (próxima slice, não autorizada aqui).
- Nada aqui é canon: é descartável, substituível, e não referenciado por ARCH-001.
