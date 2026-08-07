---
schema_version: 0.1.0-experimental
id: ARP-0009-E78
kind: knowledge
knowledge_type: research_evidence
title: Bias Migration & Fairness Assurance Feasibility
status: experimental
version: "0.1"
created_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0007
  - type: related_to
    target: AP-0021
---

# Bias Migration & Fairness Assurance, evidência de viabilidade

## Pergunta

É possível controlar quando uma mudança cognitiva reduz um viés numa superfície,
mas o preserva, amplifica, introduz, obscurece ou desloca para outra, sem delegar
ao sistema a autoridade normativa de definir fairness?

## Resultado

**Viável como capacidade transversal experimental.** Não há evidência para
promovê-la a Core Type, domínio, protocolo canônico ou agente autônomo.

A expressão `bias migration fairness control` não apareceu como nomenclatura
técnica consolidada nas fontes verificadas. O mecanismo, porém, é sustentado por
quatro problemas reconhecidos:

1. fairness deve ser medida e acompanhada ao longo do lifecycle, inclusive após
   mudanças e em operação;
2. pequenas mudanças de distribuição podem quebrar fairness obtida no baseline;
3. atualizações adaptativas alteram o objeto auditado;
4. mitigação pode redistribuir decisões e prejuízos entre subpopulações.

Fontes primárias consultadas:

- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/),
  especialmente Measure 2.11, Measure 3 e Manage 4;
- [How Robust is Your Fairness?](https://arxiv.org/abs/2207.01168), sobre
  degradação de fairness sob distribution shift;
- [Auditing Fairness under Model Updates](https://arxiv.org/abs/2601.05909),
  sobre auditoria quando modelos sofrem atualizações;
- [When mitigating bias is unfair](https://arxiv.org/abs/2302.07185), sobre
  multiplicidade e efeitos da mitigação em subpopulações.

## Encaixe arquitetural

Controles existentes já fornecem parte da fundação:

- PMM-001 preserva proveniência e impede que conversa seja fonte exclusiva;
- GOV-001 separa visão, decisão arquitetural e execução;
- AD-006 torna explícita a perda de independência em papel duplo;
- E75 impede autoaplicação de update proposal na Project Memory;
- Governed Cognitive Loops exigem autoridade, validação, parada e registro;
- ARP-0007 cobre poisoning, contexto, monitoramento e assurance;
- AP-0021 já questiona autoavaliação e colapso de intenção.

A lacuna é comparar explicitamente o estado antes/depois de uma transformação e
procurar regressões em outras superfícies. Project Memory preserva a evidência,
mas não executa essa comparação por si só.

## Prova executável

`experiments/bias-migration-fairness-assurance/` implementa:

- vocabulário `preserved | reduced | amplified | displaced | introduced |
  obscured | unknown`;
- comparação por sujeito e dimensão com referência de evidência;
- bloqueio de autoaprovação;
- bloqueio de atributos sensíveis sem autoridade;
- bloqueio de escrita automática na Project Memory;
- bloqueio de claim de fairness sem evidência segmentada e sem regressão;
- 11 cenários e 14 testes automatizados.

## Teste recursivo

O próprio controle possui vieses potenciais:

- privilegia dano mensurável;
- depende da seleção humana de sujeitos, dimensões e escalas;
- pode transformar `não medido` em falsa ausência de dano;
- um score comum pode sugerir comparabilidade normativa inexistente.

As mitigações aplicadas são: `unknown` obrigatório para falta de evidência,
`obscured` quando uma superfície desaparece da medição, limitações em toda saída
e aprovação final humana. Isso reduz o risco, mas não prova neutralidade.

## Recomendação

Manter experimental e usar como gate de evidência em mudanças de memória,
retrieval, compressão, modelo/runtime, prompts, políticas, roles e capabilities.
Antes de qualquer integração ao Orchestrator ou promoção arquitetural, executar
casos com dados reais autorizados, definir quem escolhe métricas e passar pelo
ADF e pelo Council.
