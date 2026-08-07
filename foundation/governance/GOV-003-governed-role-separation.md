---
schema_version: "0.1.0-experimental"
id: GOV-003
kind: knowledge
knowledge_type: governance_policy
title: "Governed Role Separation and Agent Orchestration"
status: experimental
governance_state: pending_review
version: "0.1"
created_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: established_by
    target: AD-010
  - type: refines
    target: GOV-001
  - type: refines
    target: GOV-002
  - type: operationalized_by
    target: GRP-001
---

# GOV-003: separação de papéis e orquestração

> Candidato autorizado para experimentação por AD-010. Permanece não canônico e
> `pending_review` até ratificação competente independente.

## Invariante

> Nenhum ator ou runtime pode converter o próprio desenho ou execução em aceite
> independente, mesmo que declare uma troca de papel.

Papel, identidade estável e sessão/runtime são dimensões diferentes. Trocar o
papel declarado não troca automaticamente o ator nem cria independência.

## Modos de separação

### Independent multi-agent, preferido

CSA, CEA e reviewer operam com `session_ref` distintos. Um Governance Router
entrega envelopes, registra eventos e aplica gates. O reviewer reconstrói a
evidência a partir da diretiva, Project Memory, diff, testes e handoff; não
depende da memória privada do executor.

### Manual air gap

O CVO transporta manualmente um Role Handoff Envelope entre chats separados. O
destinatário verifica digest, authority basis, artifact refs, limitações e
evidência. Ausência ou divergência do digest bloqueia a continuidade.

### Single-session logical separation, fallback

Uma sessão pode exercer CSA e depois CEA somente quando:

- a transição é explícita e apenas um papel fica ativo;
- a diretiva é congelada por digest antes da execução;
- a acumulação e a ausência de independência são declaradas;
- a saída recebe no máximo `provisional_review` ou `recommend_accept`;
- aceite material é realizado pelo CVO/Council ou por reviewer em outra sessão;
- mudança de visão, governança, Ontologia, segurança ou efeito externo nunca é
  autoaceita pela mesma sessão.

## Governance Router

O router pode selecionar destinatário, transportar envelope, verificar gates,
registrar eventos, pausar e escalar. Ele não pode:

- definir visão;
- desenhar arquitetura como autoridade final;
- autorizar o próprio plano;
- executar trabalho de domínio;
- produzir review independente;
- aceitar resultado;
- gravar mudança canônica sem decisão competente.

Coordenação não implica authority.

## Matriz mínima

| Ato | Papel permitido | Separação obrigatória |
|---|---|---|
| intenção/prioridade | CVO | humano |
| desenho arquitetural | CSA | distinto do CEA para review independente |
| autorização | CVO/Council ou authority delegada válida | nunca inferida |
| execução | CEA | não aceita o resultado |
| review | CSA/reviewer | sessão distinta para claim independente |
| aceite material | CSA independente, Council ou CVO conforme authority | diferente do executor |
| canonicalização | executor autorizado após aceite | decisão referenciada |

## Status de revisões históricas em papel duplo

Review produzido pela mesma sessão que executou é `provisional_review`, nunca
`independent_review`. Pode encontrar gaps e recomendar, mas não satisfaz sozinho
um gate que exija independência.

## Falha fechada

Identidade/session desconhecida, authority basis ausente, digest divergente,
ordem inválida, router decidindo ou self-accept resultam em `blocked`. O sistema
preserva o estado e pede decisão; não degrada silenciosamente a governança.
