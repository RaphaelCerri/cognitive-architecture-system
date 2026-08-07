---
schema_version: "0.1.0-experimental"
id: V1-M03
kind: knowledge
knowledge_type: milestone_record
title: "Knowledge Object Contracts"
status: planning
governance_state: planning_authorized
implementation_state: not_started
created_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: authorized_by
    target: AD-012
  - type: informed_by
    target: ARP-0010-E04
  - type: follows
    target: V1-M02
---

# V1-M03: Knowledge Object Contracts

## Objetivo

Produzir contratos versionados e validáveis para Knowledge Objects somente após
confirmar as fronteiras ontológicas e os profiles elegíveis. O milestone começa
em planejamento; implementação e estabilização permanecem `not_started`.

## Boundary de contrato

```text
fonte Markdown+YAML
  -> envelope estrutural comum candidato
  -> constraints de profiles candidatos
  -> validação semântica/governança externa
  -> views e normalizações derivadas
```

Validade estrutural não implica validade semântica nem authority.

## Profiles candidatos

1. Base Knowledge Object.
2. Governed decision artifact.
3. Proposal and research artifact.
4. Evidence and handoff artifact.

São conjuntos de exemplos para experimentação, não Core Types ou schemas.

## Estratégia de compatibilidade

- artifacts novos: validação strict quando um profile for explicitamente usado;
- legado: leitura tolerante com `valid_current`, `valid_legacy_with_warning` ou
  `invalid`, sem reescrita automática;
- aliases: views que preservam o valor declarado;
- campos e predicates desconhecidos: preservados;
- Markdown comum: fora da migração por padrão;
- cobertura bruta do repositório: métrica diagnóstica, não gate de qualidade.

## Gates

| Gate | Evidência necessária | Resultado permitido |
|---|---|---|
| G0 authority e scope | profiles selecionados, owner e autorização | pass/remain/reject |
| G1 contrato conceitual | fronteiras fonte/envelope/profile/semântica/view | pass/remain/reject |
| G2 parsing | parser YAML real e corpus classificado | pass/remain/reject |
| G3 conformance | erros acionáveis e separação estrutural/semântica | pass/remain/reject |
| G4 autoria humana | criar, editar e corrigir artifacts com carga observada | pass/remain/reject |
| G5 compatibilidade | dry-run não destrutivo e round-trip preservado | pass/remain/reject |
| G6 governance | authority verificada fora do schema | pass/remain/reject |
| G7 ADF | avaliação e revisão independente | promote/remain/reject |
| G8 compiler readiness | input suficiente para planejar M04 | ready/not_ready |

## Condição de início da estabilização

Todos os gates G0–G7 precisam de evidência aceita. O boundary ontológico
experimental orienta o plano, mas não substitui o ADF contratual de G7. O estado
atual é `blocked` para estabilização porque não há profiles confirmados, teste
humano de autoria, parser YAML robusto, equivalência de authority fields ou
migration dry-run.

## Exit criterion do planejamento

Plano, gaps e stopping rules executáveis, com recomendação independente para a
próxima slice. Isso não encerra a V1-M03.
