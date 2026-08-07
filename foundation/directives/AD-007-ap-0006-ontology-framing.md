---
schema_version: "0.1.0-experimental"
id: AD-007
kind: knowledge
knowledge_type: architecture_directive
title: "AP-0006 Experimental Ontology Framing"
status: operational
version: "1.0"
created_at: 2026-08-07
author: "Raphael Caveagna — Founder & CVO, translated by CSA"
language: pt-BR
relations:
  - type: authorizes
    target: AP-0006
  - type: establishes
    target: ARP-0010
  - type: reviews
    target: IHR-0002
  - type: constrained_by
    target: ASSESS-0001
  - type: follows
    target: AD-006
---

# AD-007: framing experimental da AP-0006

## Decisão do CVO

Em 2026-08-07, o CVO determinou prosseguir com AP-0006. Esta diretiva traduz a
decisão em uma slice compatível com ASSESS-0001, cujo resultado permanece
`remain_experimental`.

## Fechamento do gate estrutural antigo

O CSA revisou IHR-0002 contra o estado atual e aceita suas 30 seções como
**scaffold editorial**, não como descrição atual do sistema. Isso resolve a
dependência de revisão estrutural da AP-0006 sem contradizer o ponteiro de
ARCH-001, que reconhece que o conteúdo de 2026-07-22 está desatualizado.

Aceitar a estrutura não autoriza redação definitiva de ARCH-001, estabilização
de schemas nem promoção de tipos. O conteúdo continua sujeito ao gate separado
registrado em PROJECT_STATUS e ao finding CSA-34-4.

## Trabalho autorizado

Produzir uma investigação executável e limitada que:

1. separe constitutional metamodel, system ontology e representações;
2. derive axiomas candidatos somente de decisões existentes;
3. formule e responda competency questions;
4. inventarie o vocabulário real do repositório e exponha drift;
5. teste extensibilidade, agnosticismo e ausência de promoção silenciosa;
6. recomende alternativas e uma futura decisão ADF.

## Restrições

- nenhum Core Type novo;
- nenhum diretório `ontology/`;
- nenhuma mudança em schemas públicos, Compiler, Runtime ou Orchestrator;
- nenhum path físico tratado como domínio ontológico;
- nenhuma taxonomia experimental promovida a canon;
- nenhum cleanup automático do vocabulário existente;
- nenhuma continuidade automática após o handoff.

## Critério de encerramento

A slice termina com evidência, testes e recomendação `reject`,
`remain_experimental` ou `ready_for_new_adf_assessment`. Apenas o Council pode
autorizar a etapa seguinte.
