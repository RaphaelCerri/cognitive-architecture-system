---
title: "Experimento — Protocolo de Interação"
status: experimental
canonicality: experimental_prototype_not_canon
created_at: 2026-07-23
parent_directive: knowledge/DRAFT-DIRECTIVE-interaction-protocol-slice-1.md
parent_vision: knowledge/DRAFT-VISION-self-extending-capability-arms.md
language: pt-BR
---

# Protocolo de Interação — protótipo demonstrável

> [English](README.md) · **Português**

Experimento descartável (não canônico). Implementa, sem redesenhar, o Protocolo
de Interação desenhado na diretiva da Slice 1: a espinha de comunicação que os
futuros Braços de Capacidade (Processos, Marketing, ...) vão reutilizar.

`Especificar != Provar` — este diretório existe para **provar rodando**, não só descrever.

## Primeira decisão depois da intenção

Depois de o usuário dizer o que quer, o protocolo faz **uma única pergunta de
calibração**, antes de pedir definições:

> Em que ponto essa iniciativa está hoje?

1. **Só tenho a ideia (Semente):** discovery do problema, contexto e direção.
2. **Já organizei uma parte (Estruturada):** consolidar decisões e fechar lacunas.
3. **Já tenho algo concreto (Concreta):** inspecionar pasta, código, site,
   protótipo ou especificação e ir direto a refinamento e insights.
4. **Já está em uso (Em operação):** auditar evidência real, otimizar e evoluir.

Os nomes classificam o estado da iniciativa, não o conhecimento da pessoa. A
resposta escolhe a rota e impede que iniciativas concretas sejam obrigadas a
repetir definições básicas.

## Fases do loop

1. **Enquadrar** — 1-2 frases dizendo o que vamos fazer e quantas etapas.
2. **Calibrar maturidade** — a primeira pergunta após a intenção escolhe entre
   discovery, estruturação, refinamento ou evolução.
3. **Elicitar adaptativamente** — perguntar somente o que falta para a rota;
   artefatos e decisões já existentes substituem perguntas de definição.
4. **Aprofundar** — depois das respostas de superfície, sonda ativamente algo
   que **ainda não foi perguntado** (o que o usuário pode ter esquecido).
5. **Brainstorm/Insight** — devolve padrões vistos nos dados e os discute
   (provoca, não só coleta).
6. **Sintetizar** — resumo digerível + **uma** próxima ação clara.

(Otimizar é fase específica de cada braço de domínio — fica fora deste protocolo base.)

## Regras de comunicação (transversais a todas as fases)

- uma coisa de cada vez; máximo 3 perguntas por turno;
- a primeira pergunta após a intenção é sempre a maturidade da iniciativa;
- nunca pedir ao usuário para redefinir algo que um artefato já demonstra;
- sempre mostrar progresso (`Etapa N de 6`);
- linguagem simples, zero jargão sem explicação;
- todo turno termina com uma ação/decisão clara para o usuário;
- reconhecer o que já foi conquistado antes de pedir o próximo;
- resumo antes de mudar de fase.

## Estado rastreado

- `fase_atual`
- `maturity_level`
- `route`
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

```powershell
npm test
npm run demo
```

`demo.js` recebe uma intenção, pergunta a maturidade como primeiro follow-up e
seleciona a rota `tangible`. Como já existe uma pasta com CLI e README, ele pula
definições básicas, investiga o refinamento desejado e imprime o registro final.

## Limites deste experimento

- Não é o Motor de Descoberta genérico nem um Braço de domínio — é só a espinha.
- As respostas do "usuário" são roteirizadas (texto fixo), não input interativo real:
  o objetivo desta slice é provar a forma do protocolo, não construir um CLI interativo.
- Não inicia o Braço de Processos (próxima slice, não autorizada aqui).
- Nada aqui é canon: é descartável, substituível, e não referenciado por ARCH-001.

## Evolução

- **v0.2, 2026-08-07:** adiciona calibração de maturidade como primeira pergunta
  após a intenção e roteamento que reduz definições desnecessárias.
- **v0.1, 2026-07-23:** prova original do loop de interação em seis fases.
