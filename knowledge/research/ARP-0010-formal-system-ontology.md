---
schema_version: 0.1.0-experimental
id: ARP-0010
kind: knowledge
knowledge_type: architectural_research_program
title: Formal System Ontology and Constitutional Metamodel Research Case
status: experimental
document_state: complete
governance_state: authorized
research_state: active
knowledge_maturity: evidence_gathering
outcome: null
implementation_state: experimental
operational_state: not_applicable
research_form: case
version: "0.1"
created_at: 2026-08-07
updated_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: established_by
    target: AD-007
  - type: researches
    target: AP-0006
  - type: constrained_by
    target: ASSESS-0001
---

# ARP-0010: Formal System Ontology and Constitutional Metamodel

## Pergunta

Como separar regras constitucionais, vocabulário ontológico e representações de
forma simples, extensível e agnóstica antes de estabilizar contratos públicos?

## Escopo

- critérios de identidade, autoridade, proveniência, mudança e extensão;
- fronteira entre metamodelo, ontologia e representação;
- axiomas candidatos derivados de decisões existentes;
- competency questions;
- inventário e drift do vocabulário atual;
- evidência necessária para repetir o ADF.

## Fora de escopo

- promover Core Types;
- criar schemas definitivos;
- implementar Compiler, Type Registry ou Runtime;
- migrar rótulos existentes;
- transformar estrutura física em domínio ontológico.

## Método

Inventário reprodutível do repositório, modelo candidato executável, testes de
fronteira e extensão, comparação de alternativas e revisão humana antes de
qualquer promoção.

## Critério de encerramento

O caso conclui quando existir evidência de consumo real do kernel candidato,
estratégia de migração e nova avaliação ADF, inclusive se o resultado for
`remain_experimental` ou `reject`.

## Estado atual

O framing foi executado em E01, o kernel/consumer em E02 e o envelope de autoria
em E03. A pesquisa permanece ativa porque schema público, profiles e custo de
autoria humana ainda não foram validados.
