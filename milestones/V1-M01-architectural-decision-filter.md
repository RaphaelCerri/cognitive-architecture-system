---
schema_version: "0.1.0-experimental"
id: V1-M01
kind: knowledge
knowledge_type: milestone_record
title: "Architectural Decision Filter"
status: completed
started_at: 2026-07-21
completed_at: 2026-07-21
owner: "Chief Execution Architect"
language: pt-BR
relations:
  - type: implements
    target: AP-0009
  - type: produces
    target: ADF-001
  - type: recorded_by
    target: ADR-0010
  - type: produces
    target: ASSESS-0001
---

# V1-M01 — Architectural Decision Filter

## Objetivo

Implementar um gate utilizável e agnóstico para avaliar a promoção de componentes permanentes antes da Ontologia e dos schemas estáveis.

## Escopo concluído

- AD-001 e Roadmap V1 persistidos.
- ADF-001 definido com entradas, critérios, resultados, processo e responsabilidades.
- Template manual de avaliação criado.
- ADR-0010 registra a adoção.
- AP-0009 concluída.
- ADF aplicado à AP-0006 em ASSESS-0001.

## Validação do próprio ADF

| Critério | Resultado | Evidência resumida |
|---|---|---|
| Simplicity | pass | Centraliza cinco gates e substitui decisões ad hoc. |
| Durability | pass | Avalia propriedades independentes do ecossistema tecnológico atual. |
| Fundamentality | pass | Governa promoção arquitetural, não uma implementação. |
| Generativity | pass | Pode validar Core Types, camadas, contratos e extensões. |
| Agnosticism | pass | Não depende de modelo, runtime, linguagem ou fornecedor. |

Resultado: `eligible_for_promotion`. A AD-001 fornece autorização e o ADR-0010 registra a decisão.

## Backlog review

- A dependência técnica do ADF para AP-0006 foi resolvida.
- ASSESS-0001 classificou AP-0006 como `remain_experimental` por evidência insuficiente de simplicidade.
- AP-0002 continua dependente do resultado da Ontologia e não deve avançar.
- AP-0003 a AP-0008 permanecem bloqueadas por dependências posteriores.
- Nenhuma proposta ficou obsoleta e nenhuma fusão é recomendada neste momento.

## Próximo passo recomendado

Solicitar ao Conselho autorização para executar V1-M02 como milestone experimental e limitada. Ela não poderá promover Ontologia ou metamodelo a componentes permanentes sem nova avaliação ADF.
