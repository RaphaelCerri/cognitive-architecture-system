---
title: "O Que o Sistema Faz — Visão Geral em Linguagem Simples"
status: living_document
canonicality: plain_language_capability_map_not_canon
maintained_by: CSA — atualizado a cada slice aceito
created_at: 2026-07-23
language: pt-BR
note: >
  Resposta honesta e em português claro para "o que esse sistema realmente faz?".
  Distinto do ARCH-001 (spec de arquitetura). Legenda de honestidade:
  🟢 EXISTE E RODA · 🟡 EXISTE COMO SPEC/EXPERIMENTO · ⚪ PLANEJADO (ainda não construído).
---

# O Que o Sistema Faz

**Em uma frase:** um sistema cognitivo que ganha "braços" (talentos) e usa a si mesmo para
criar novos braços — cada braço entrevista você, entende um domínio a fundo e produz um
resultado estruturado.

_Atualizado em: 2026-07-23 · última slice aceita: Slice 1 (Protocolo de Interação)_

---

## Braços (talentos do sistema)

| Braço | O que faz | Estado |
|---|---|---|
| **Protocolo de Interação** | A "espinha": conduz uma conversa em etapas — poucas perguntas por vez, ramifica conforme a resposta, cava o que você esqueceu, gera insight, resume com uma próxima ação. Todos os outros braços usam ele. | 🟢 roda (`experiments/interaction-protocol/demo.js`) |
| **Braço de Processos** | Entrevista você sobre um processo real, mapeia como é hoje, levanta TODAS as dores, sonda o que você não disse (falhas, plano B, gargalo), e propõe um processo otimizado. | 🟡 em construção (Slice 2) |
| **Fábrica de Braços** | O sistema se entrevista para criar um braço novo (a "auto-utilização"). | ⚪ planejado |
| **Braço de Marketing** | Marketing completo: estudo de mercado, persona, funil, arquétipo de marca, copy, roteiros, ponto de venda. _(detalhamento quando existir)_ | ⚪ planejado |

---

## Máquina por baixo (o que sustenta os braços)

| Peça | O que faz | Estado |
|---|---|---|
| **Memória de Projeto** | Guarda decisões, contexto e conhecimento entre sessões, para nenhum modelo/conversa ser fonte de verdade sozinho. | 🟢 governança ativa (o repositório inteiro é a memória) |
| **Governança CVO→CSA→CEA** | Papéis separados: você define a visão, o CSA desenha/revisa, o CEA executa. Ninguém aprova o próprio trabalho. | 🟢 em uso nesta própria conversa |
| **Graphify** | Lê qualquer pasta e vira um grafo de conhecimento navegável (o sistema entende um projeto existente só apontando o caminho). | 🟢 rodou em 2 projetos (este + Site Pessoal) |
| **Adaptador de Memória** | Converte o estado de um projeto num formato de memória estruturada. | 🟡 experimento que roda (`experiments/clite-memory-adapter-feasibility`) |
| **Extração de Domínio** | Isola a lógica de um domínio (comandos, eventos, estados) de forma testável. | 🟡 experimento que roda (`experiments/clite-domain-extraction-feasibility`) |

---

## Quando um braço roda num projeto real, o que sai?

Cada braço produz um **artefato estruturado** ao final. Exemplos:
- **Processos** → mapa do processo atual + inventário de dores + lacunas + processo otimizado proposto + próxima ação.
- **Marketing** (planejado) → persona + funil + copies + arquétipo + roteiros.

Esses artefatos ficam no experimento do braço e podem virar Memory depois.

---

## Honestidade (o que este documento NÃO faz)
Não infla o que existe. 🟢 significa que dá pra rodar/ver agora; 🟡 é semente/experimento;
⚪ ainda não foi construído. Se algo aqui não bater com o repositório, o repositório vence.
