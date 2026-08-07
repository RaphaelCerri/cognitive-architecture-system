---
schema_version: "0.1.0-experimental"
id: GRP-001
kind: knowledge
knowledge_type: architectural_protocol
title: "Governed Role Transition and Handoff Protocol"
status: experimental
governance_state: reviewed
reviewed_at: 2026-08-07
review_outcome: ratified_as_experimental_candidate_not_operational
review_basis: ASSESS-0003
version: "0.1"
created_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: established_by
    target: AD-010
  - type: implements
    target: GOV-003
  - type: constrained_by
    target: GOV-001
---

# GRP-001: transição e handoff governados

> Protocolo candidato ratificado para experimentação por AD-011 após revisão
> independente. Não constitui contrato operacional ou enforcement de produção.

## Fluxo obrigatório

```text
CVO intent
→ CSA architecture package
→ authority decision
→ frozen directive digest
→ CEA execution
→ CEA handoff
→ independent review ou provisional review identificado
→ acceptance decision
→ canonical memory effect autorizado
```

Nenhuma etapa posterior implica a anterior. Completion não implica acceptance.

## Role Handoff Envelope

```yaml
work_id: stable-id
envelope_id: stable-id
from: {actor_ref: ..., runtime_identity: ..., role: ..., session_ref: ...}
to_role: csa | cea | reviewer | cvo
separation_mode: independent_multi_agent | manual_air_gap | single_session_logical
authority_basis: artifact-ref
directive_ref: artifact-ref
directive_digest: sha256
artifact_refs: []
evidence_refs: []
limitations: []
previous_envelope_digest: sha256 | null
envelope_digest: sha256
```

O digest prova consistência do envelope recebido. O verifier da integração deve
resolver authority, HEAD e digests dos artifacts reais; o experimento não fornece
identidade criptográfica, isolamento nem armazenamento confiável.

## Transição na mesma sessão

Antes de trocar CSA→CEA ou CEA→CSA:

1. emitir `ROLE_EXITED` para o papel atual;
2. congelar outputs e referências do papel anterior;
3. emitir `ROLE_ENTERED` para o novo papel;
4. declarar `independence: none` quando a mesma sessão voltar como reviewer;
5. impedir `RESULT_ACCEPTED` pela sessão que desenhou ou executou.

## Sessões separadas

- CSA e CEA usam `session_ref` distintos;
- reviewer independente usa terceiro `session_ref` ou é o CVO humano;
- cada destinatário valida o envelope antes de agir;
- comunicação lateral ocorre somente por envelopes/eventos registrados;
- raciocínio privado não é autoridade nem requisito de continuidade.

## Air gap manual

O CVO copia o envelope completo entre chats. O destinatário recalcula o digest;
divergência, campos ausentes ou cadeia quebrada bloqueiam. Correções geram novo
envelope ligado ao anterior; nunca edição silenciosa do envelope recebido.

## Eventos mínimos

`INTENT_REGISTERED`, `ARCHITECTURE_PROPOSED`, `WORK_AUTHORIZED`,
`ROLE_EXITED`, `ROLE_ENTERED`, `EXECUTION_STARTED`, `HANDOFF_SUBMITTED`,
`REVIEW_RECOMMENDED`, `RESULT_ACCEPTED`, `MEMORY_UPDATE_PROPOSED` e
`MEMORY_UPDATE_APPLIED`.

## Stopping rules

Parar em: execução antes de autorização; mudança de directive digest;
self-acceptance; router emitindo decisão; sessão não identificada; envelope
air-gapped sem digest; canonicalização antes de aceite; transição de papel não
registrada.
