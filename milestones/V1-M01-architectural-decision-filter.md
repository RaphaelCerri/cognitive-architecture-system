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

## Validação

O ADF foi aplicado retrospectivamente à própria proposta AP-0009:

| Critério | Resultado | Evidência resumida |
|---|---|---|
| Simplicity | pass | Centraliza cinco gates e substitui decisões ad hoc. |
| Durability | pass | Avalia propriedades independentes do ecossistema tecnológico atual. |
| Fundamentality | pass | Governa promoção arquitetural, não uma implementação. |
| Generativity | pass | Pode validar Core Types, camadas, contratos e extensões. |
| Agnosticism | pass | Não depende de modelo, runtime, linguagem ou fornecedor. |

Resultado: `eligible_for_promotion`. A AD-001 fornece a autorização do Conselho e o ADR-0010 registra a decisão.

## Backlog review

- AP-0006 agora teve sua dependência do ADF resolvida e chegou ao momento ideal para avaliação e possível agendamento.
- AP-0002 continua dependente da Ontologia e não deve avançar.
- AP-0003 a AP-0008 permanecem bloqueadas por dependências posteriores.
- Nenhuma proposta ficou obsoleta.
- Nenhuma fusão é recomendada neste momento.

## Próximo passo recomendado

Apresentar AP-0006 ao Conselho usando ADF-001. Não iniciar a Ontologia sem a decisão correspondente.
