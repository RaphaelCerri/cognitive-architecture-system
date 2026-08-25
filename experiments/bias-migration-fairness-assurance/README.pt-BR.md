---
title: "Experimento: Bias Migration & Fairness Assurance"
status: experimental
canonicality: experimental_prototype_not_canon
created_at: 2026-08-07
authority: "Pedido direto do CVO, desenho CSA-BMFA-001"
language: pt-BR
---

# Bias Migration & Fairness Assurance (BMFA)

> [English](README.md) · **Português**

Prova executável de um controle transversal para mudanças cognitivas. O
experimento compara superfícies de dano antes e depois de uma transformação e
classifica o resultado como `preserved`, `reduced`, `amplified`, `displaced`,
`introduced`, `obscured` ou `unknown`.

O objetivo não é declarar um sistema "sem viés". É impedir que uma melhora
local seja apresentada como fairness quando o dano apenas mudou de grupo,
dimensão ou etapa do pipeline.

## Controles demonstrados

- baseline e mudança precisam ter referências versionadas;
- proposer e approver precisam ser distintos;
- atributos sensíveis exigem autoridade explícita;
- alteração de Project Memory pode ser somente `proposal_only`;
- claim de fairness exige comparação segmentada sem regressão escondida;
- desaparecimento de uma métrica vira `obscured`, nunca melhoria presumida;
- dano reduzido numa superfície e piorado em outra vira `displaced`.

## Como executar

Sem dependências externas:

```powershell
npm test
npm run demo
```

O demo executa 11 cenários: compressão de memória, retrieval, troca de runtime,
política, papel duplo, promoção indevida de hipótese, nova capability, regressão
de subgrupo, fairness por recusa, atributo sensível sem autoridade e escrita
automática na memória.

## Contrato mínimo de observação

Cada observação possui `subject`, `dimension`, `harm_score` normalizado e
`evidence_refs`. O score é evidência específica do cenário, não definição
universal de justiça. Comparações sem evidência suficiente resultam em
`unknown`.

## Fronteiras

- não é Core Type, protocolo canônico, Skill ou Agent;
- não integra Runtime, Orchestrator ou memória real;
- não coleta dados pessoais;
- não escolhe métricas normativas sozinho;
- não aprova mudança arquitetural;
- não prova fairness no mundo real;
- os cenários são fixtures deliberadamente pequenas para provar a mecânica.

## Teste recursivo

O próprio BMFA foi avaliado conceitualmente: ele privilegia danos mensuráveis,
depende de quem escolhe sujeitos e dimensões, e pode obscurecer pessoas não
representadas. Por isso toda saída inclui limitações, superfícies não medidas
permanecem `unknown`, e a aprovação final continua humana.
