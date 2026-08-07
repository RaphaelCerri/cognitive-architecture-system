---
title: "Visão — Sistema Auto-Extensível por Braços de Capacidade"
status: DRAFT
canonicality: vision_draft_not_authorized
authored_as: CSA (proposta) para aprovação do CVO
created_at: 2026-07-23
language: pt-BR
note: >
  Documento de VISÃO, leve e não-canônico. Não é diretiva autorizada, não é AP,
  não passou pelo ADF nem pelo Council. Proposal ≠ approval. Serve para o CVO
  (Raphael) aprovar a direção antes de virar uma diretiva formal para o CEA.
---

# Visão — Sistema Auto-Extensível por Braços de Capacidade

## 1. O que o Raphael quer (em uma frase)

Poder chegar e dizer *"agora quero que o sistema saiba fazer marketing completo"* — e o
**próprio sistema se usar** para construir esse novo talento e incorporá-lo, virando uma
capacidade permanente, ao lado das que já tem.

## 2. A sacada estrutural: não são 3 braços

O Raphael descreveu três coisas (Marketing, Processos, "estrutura de comunicação").
Estruturalmente são **2 braços de domínio + 1 espinha compartilhada + 1 fábrica**:

- **Marketing** e **Processos** são o **mesmo loop cognitivo** com conhecimento de domínio
  diferente plugado. O loop:
  `Elicitar → Aprofundar → Brainstorm → Gerar Insight → Discutir → Sintetizar → Otimizar`.
  Marketing pluga funil/persona/arquétipo/copy; Processos pluga gargalo/desperdício/fluxo.
- A **"estrutura de comunicação"** que o Raphael pediu **não é um braço** — é o **Protocolo
  de Interação** (a espinha): como o sistema conversa com o usuário (uma pergunta de cada
  vez, 3 que ramificam em 5, fase de brainstorm, resumo digerível, incentivo). Todos os
  braços usam ela.

## 3. As quatro camadas

| Camada | O que é | Estado hoje |
|---|---|---|
| **Protocolo de Interação** (espinha) | Como o sistema fala com o usuário: progressivo, ramificado, incentivador | Pesquisado à exaustão (ARP-0009, o maior nó do sistema — 114 conexões) e **nunca aplicado à própria conversa** |
| **Motor de Descoberta** | O loop reutilizável Elicitar→...→Otimizar, agnóstico de domínio | Semente existe (Experience Discovery Question Framework / Question Selection Engine) |
| **Braço** = pacote de domínio | Conhecimento + estratégias que plugam no Motor (Marketing, Processos, ...) | Contrato desenhado (ARP-0008: Capability, Skill, Strategy, Agent Blueprint) — **nunca instanciado com um braço real** |
| **Fábrica de Braços** (auto-utilização) | O sistema aponta o Motor de Descoberta para **si mesmo**: entrevista o usuário sobre o novo braço e gera o blueprint dele | Não existe — mas é só Motor + contrato ARP-0008 |

## 4. Por que isso resolve buracos reais que a auditoria já achou

- **G-A15 (dogfooding zero):** o primeiro "projeto real" do sistema passa a ser *ele mesmo
  ganhando um braço*. A Fábrica é dogfooding por construção.
- **G-A03 (intake de projeto real inexistente):** o Motor de Descoberta É o intake — entra
  a realidade do usuário, sai memória estruturada.
- **ARP-0009 aplicado:** toda a pesquisa de experiência (o maior investimento do sistema)
  finalmente é usada — no Protocolo de Interação.

## 5. O que falta (honesto, como CSA)

As **peças** existem (contrato de capability, motor de memória, extração de domínio, motor
de descoberta em semente). Falta o **encaixe** e, principalmente, falta **executar em vez
de documentar**. Risco nº 1 (a auditoria já apontou — G-A14, governança desproporcional):
transformar isto em mais dezenas de handoffs de governança sobre braços que não existem.

## 6. Sequência de construção (aprovada pelo CVO em 2026-07-23)

1. **Protocolo de Interação primeiro** — resolve a dor imediata do Raphael ("não entendo o
   CEA") e é o substrato dos dois braços. Pequeno, testável já na conversa.
2. **Braço de Processos** como o primeiro braço completo, ponta a ponta. Escolhido porque:
   (a) o Raphael confirmou que vai construir; (b) não depende de dados/integrações externas;
   (c) o output é um artefato de conhecimento — o que o sistema já faz bem.
3. **Generalizar → Fábrica de Braços**, só depois de 1 braço funcionar de verdade.
4. **Braço de Marketing** como segundo, já usando a Fábrica — provando que ela funciona.

**Princípio-guia:** provar com UM braço real antes de generalizar. Nada de Fábrica
especulativa antes de evidência.

## 7. Princípios de comunicação transversais — pendentes de dobrar no Protocolo

Aprendidos nesta conversa com o CVO (2026-07-23), ainda **não** incorporados formalmente ao
Protocolo de Interação (`experiments/interaction-protocol/`) — fica registrado aqui pra
entrar como amendment na próxima slice que tocar o Protocolo ou qualquer Braço:

1. **Filtro, não redução:** nunca cortar qualidade/quantidade de informação que ajuda o
   resultado. Cortar só enrolação, repetição da mesma ideia de formas diferentes, e
   contexto/dado que não ajuda a execução específica em questão.
2. **Estrutura sempre:** toda resposta (o que foi feito / próximos passos / resposta ou
   discussão) organizada com clareza, nunca texto corrido — independente do tipo de retorno.
3. **Antecipação — conteúdo, não referência:** se o usuário vai precisar agir sobre algo que
   está em outro lugar (um trecho de doc, um valor, uma seção), não apontar pra fonte — trazer
   o conteúdo real, pronto pra usar, direto na resposta. Antecipar o próximo passo do usuário
   em vez de devolver só o endereço de onde a informação mora.

Estes três já valem na prática nesta conversa (CSA) e globalmente (`~/.claude/CLAUDE.md`,
`~/.codex/AGENTS.md`). O que falta é o CEA os formalizar como regras do Protocolo base, para
que todo Braço construído em cima dele os herde automaticamente.

## 8. O que este documento NÃO faz

Não autoriza construção; não cria AP/ARP/IHR; não passou pelo ADF nem pelo Council; não
promove nenhum contrato experimental a canon. É a visão para o CVO aprovar. Depois do
aceite, vira uma diretiva formal enxuta para o CEA (respeitando o perfil personal-low-risk,
GOV-002).
