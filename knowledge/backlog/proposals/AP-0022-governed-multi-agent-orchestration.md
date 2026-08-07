---
schema_version: "0.1.0-experimental"
id: AP-0022
kind: knowledge
knowledge_type: architectural_proposal
title: "Governance Gateway and Role-Isolated Multi-Agent Runtime"
status: proposed
created_at: 2026-08-07
author: "Raphael Caveagna, Founder & CVO, translated by CSA"
language: pt-BR
motivation: "Dar ao CVO um único ponto de conversa sem misturar coordenação, autoridade, execução e revisão no mesmo contexto cognitivo."
expected_benefits:
  - "Experiência de entrada única para o CVO com separação real de papéis nos bastidores."
  - "Handoffs íntegros, reproduzíveis e vinculados ao snapshot revisado."
  - "Bloqueio técnico de autoaceite, authority drift e canonicalização prematura."
architectural_impact:
  domains: [governance, runtime, intelligence, knowledge]
  summary: "Propõe um gateway sem autoridade e sessões isoladas de CSA, CEA e reviewer, governadas por envelopes e máquina de estados."
estimated_complexity: very_high
dependencies: ["GOV-003", "GRP-001", "Identity and Authority Model", "Audit append-only", "Runtime Adapter Contract"]
ideal_implementation_time: "Após validar o guard experimental e antes de habilitar execução multiagente material ou efeitos externos."
acceptance_criteria:
  - "Um runtime mantém somente um papel ativo por RoleSession."
  - "CSA, CEA e reviewer recebem contextos próprios e trocam apenas artifacts e envelopes registrados."
  - "O gateway não consegue autorizar, executar domínio, revisar, aceitar ou canonicalizar."
  - "Toda decisão vincula base_head e hashes de artifacts; alteração invalida o parecer."
  - "O fluxo falha fechado quando identidade, authority, digest ou ordem não podem ser verificados."
  - "O modo manual air-gapped continua interoperável com o mesmo envelope."
observations: "AP-0012 continua tratando coordenação cognitiva ampla. Esta proposta delimita apenas o boundary de governança e não autoriza runtime multiagente de produção."
relations:
  - type: authorized_by
    target: AD-010
  - type: refines
    target: AP-0012
  - type: governed_by
    target: GOV-003
  - type: operationalized_by
    target: GRP-001
---

# AP-0022: orquestração multiagente governada

## Topologia proposta

```text
Raphael / CVO
      |
Governance Gateway (authority = zero)
      |-- CSA RoleSession
      |-- CEA RoleSession
      `-- Reviewer RoleSession
      |
decisão requerida volta ao CVO
```

O gateway classifica o ato solicitado, verifica o estado, seleciona o papel e
transporta somente o Role Handoff Envelope e os artifacts referenciados. Ele não
compartilha raciocínio privado entre sessões e não transforma coordenação em
authority.

## Máquina de estados

```text
proposed -> authorized -> executing -> submitted -> reviewed
                                                   |-> accepted
                                                   |-> revise
                                                   `-> rejected
```

`authorize_execution`, `review_result` e `accept_result` são atos diferentes.
Uma mensagem ambígua não pula estados; o gateway pede classificação ou aplica
somente o ato inequivocamente autorizado.

## Fases candidatas

1. Consolidar schema de `RoleSession`, `RoleTransitionRecord` e envelope.
2. Persistir log append-only e binding de `base_head`/artifact hashes.
3. Integrar adapters de agentes isolados sem dar authority ao gateway.
4. Executar conformance, ataques de bypass e recuperação de falha.
5. Repetir o ADF antes de qualquer promoção para runtime.

## Limites atuais

O experimento local valida regras e digests, mas não autentica identidades, não
isola processos, não possui armazenamento append-only e não executa agentes. A
proposta permanece `proposed` até essas dependências serem arquitetadas e
autorizadas em slices próprias.
