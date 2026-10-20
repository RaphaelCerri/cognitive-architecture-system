---
schema_version: "0.1.0-experimental"
id: AP-0023
kind: knowledge
knowledge_type: architectural_proposal
title: "Model Selection Criteria for Multi-Agent Systems (Strong Planner, Cheaper Executor)"
status: proposed
created_at: 2026-10-19
author: "Raphael Caveagna, Founder & CVO, registrado pelo agente de documentação do Max"
language: pt-BR
motivation: "Usar cada modelo na hora certa: o modelo forte detalha, planeja e especifica; um modelo mais fraco ou mais barato executa com a mesma qualidade porque recebe o detalhamento pronto. Hoje a escolha do modelo é implícita e não há critério registrado por tipo de tarefa, custo, latência ou janela de contexto."
expected_benefits:
  - "Menor custo e menor latência sem perda de qualidade nas tarefas de execução."
  - "Critério explícito e auditável para escolher o modelo de cada papel e de cada tarefa."
  - "Verificação por modelo forte nos pontos de risco, em vez de usar o modelo forte em tudo."
  - "Base comum para o Arquiteto Cognitivo e para o Max (roteamento local × Claude Code)."
architectural_impact:
  domains: [intelligence, runtime, governance]
  summary: "Propõe uma política de seleção de modelo por papel (planejador, executor, verificador) e por tipo de tarefa, com detalhamento obrigatório do plano antes de delegar a um modelo mais barato e verificação por modelo forte quando o risco exigir."
estimated_complexity: medium
dependencies: ["AP-0012", "AP-0022", "Runtime Adapter Contract", "Intelligence and Governance Contracts (V1-M05)"]
ideal_implementation_time: "Junto com V1-M05 (contratos de inteligência) e antes de habilitar execução multiagente material."
acceptance_criteria:
  - "Existe uma tabela de critérios por tipo de tarefa: raciocínio, código, extração, classificação e sumarização, com modelo mínimo recomendado para planejar, executar e verificar."
  - "Cada critério declara custo relativo, latência esperada, janela de contexto necessária e quando a verificação por modelo forte é obrigatória."
  - "Toda delegação a modelo mais barato recebe um plano detalhado (passos, entradas, formato de saída, critério de aceite) escrito pelo modelo forte."
  - "O verificador nunca é o mesmo agente que executou (coerente com 'nenhum agente aprova o próprio trabalho')."
  - "Há um experimento que compara qualidade, custo e latência de 'forte faz tudo' × 'forte planeja, barato executa, forte verifica' em pelo menos 3 tipos de tarefa."
  - "A escolha do modelo e o motivo ficam registrados no log da execução."
observations: "Pedido do CVO em 2026-10-19 durante o trabalho no Max (MonitorToggle). Referência externa: o sistema multiagente de pesquisa da Anthropic (líder forte + subagentes mais baratos) e a prática de 'spec forte, execução barata'. Não autoriza runtime nem fornecedor específico."
relations:
  - type: complements
    target: AP-0012
  - type: complements
    target: AP-0022
---

# AP-0023 — Critérios para escolher o modelo certo em sistemas multiagentes

## Contexto

Em sistemas multiagentes, usar o modelo mais forte em todas as etapas é caro e
lento. Usar um modelo fraco em tudo derruba a qualidade. A prática que funciona
é dividir por papel: o modelo forte faz o detalhamento (plano, especificação,
critérios de aceite) e um modelo mais fraco ou mais barato executa. Com um
detalhamento bom, o executor entrega a mesma qualidade, porque a parte difícil
(decidir o quê e como) já foi feita.

O CVO pediu que isso vire critério explícito, para usar cada modelo na hora certa.

## Proposta

### 1. Papéis

| Papel | O que faz | Modelo |
|---|---|---|
| Planejador | entende o objetivo, detalha passos, entradas, formato de saída e critério de aceite | forte |
| Executor | segue o plano detalhado | o mais barato que cumpre o critério do tipo de tarefa |
| Verificador | confere o resultado contra o critério de aceite | forte quando o risco exigir; nunca o mesmo agente do executor |

### 2. Critérios por tipo de tarefa (ponto de partida para o experimento)

| Tipo de tarefa | Planejar | Executar | Verificar com modelo forte? |
|---|---|---|---|
| Raciocínio aberto, arquitetura, decisão | forte | forte (dividir não ajuda muito) | sim |
| Código | forte (spec, interfaces, testes) | médio ou barato, se houver testes | sim, ou pelos testes |
| Extração (campos, tabelas, fatos) | forte define o schema | barato, com saída estruturada | por amostragem |
| Classificação e roteamento | forte define as classes e exemplos | barato ou local | por amostragem e métricas |
| Sumarização | forte define o formato | barato | só se o resumo for usado para decidir |

### 3. Dimensões de decisão

- **Custo:** preço ou cota consumida por tarefa.
- **Latência:** tempo até a primeira resposta e até o fim (importa em voz e em interação).
- **Janela de contexto:** o executor precisa caber o plano mais as entradas; se não couber, quebrar a tarefa.
- **Risco:** efeito externo, irreversível ou que vira fonte canônica pede verificação forte.
- **Verificabilidade:** se existe teste automático ou critério objetivo, o executor pode ser mais barato.

### 4. Regras

1. Nenhuma delegação a modelo mais barato sem plano detalhado escrito pelo modelo forte.
2. O plano inclui o critério de aceite e o formato de saída esperado.
3. O verificador é independente do executor.
4. A escolha do modelo e o motivo ficam no log da execução, para revisão e aprendizado.

## Decisão

Preencher durante a avaliação arquitetural.
