---
schema_version: 0.1.0-experimental
id: ARP-0009-E59
kind: knowledge
knowledge_type: research_evidence
title: Identity and Authority Implementation Readiness
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E56
  - type: refines
    target: ARP-0009-E57
  - type: refines
    target: ARP-0009-E58
  - type: related_to
    target: ARP-0009-E55
---

# Identity and Authority Implementation Readiness

Consolida E56–E58 em: relação com o domínio extraído, contratos candidatos,
implicações de UX, questões abertas e slices candidatas. **Nada é autorizado
por este documento.**

## 1. Relação com o domínio extraído (E55) — sem modificá-lo

| Representação atual no domínio | Classificação |
|---|---|
| `ActorRole` (enum de 4 papéis) | sufficient for experiment; **requires redesign** para produto — funde stable/runtime/display identity num enum; não há IdentityRef |
| `actor` em todo Command/Event | conceptually reusable — o padrão "toda ação tem ator" sobrevive; o tipo do ator não |
| Guard de self-review (`DecideReview` ≠ `research_executor`) | conceptually reusable — instância correta de separation of duty; hardcoded por papel, deveria derivar de SoD declarada (E57/E58) |
| Guard de approval (`Authorize` exige `decision_authority`) | conceptually reusable — mesma observação |
| `AuthorizationState` + `AuthorizationRequest` | conceptually reusable — já separa request/decision; faltam authority_basis, validity, revocation (E57 §4) |
| `DecisionRecord` (actorRole, actorLabel, reason, scope, consequence) | conceptually reusable — embrião do audit trail; faltam authority basis, delegation chain, role-at-time |
| Stale context (`context.stale` + guard) | sufficient for experiment e conceptually reusable (aprovado em IHR-0029) |
| `commandOrigin` no `HistoryEntry` | conceptually reusable — proveniência de comando |
| Delegation, revocation, validade de approval, emergency authority | **missing** — não representados no domínio |
| `roleLabels` no fixture | presentation-only (F-01) — correto como está |

## 2. Candidate contracts (propostos, não canonicalizados)

Todos `experimental_only`; campos mínimos em E56–E58; nenhum é schema:

| Contrato | Propósito | Relações principais | Limitação de segurança |
|---|---|---|---|
| IdentityRef | referenciar um ator sem fundir stable/runtime/display | usado por todos os demais | não autentica ninguém |
| ActorRef | IdentityRef + papel no momento do ato | RoleAssignment | idem |
| RoleAssignment | (identity, role, scope, source, validity) | GOV-001 como fonte | não é enforcement |
| CapabilityClaim | capability declarada/verificada + evidência | Capability (ARCH-001 §10) | verificação ≠ concessão |
| AuthorityGrant | direito governado com fonte/escopo/validade (E57 §2) | RoleAssignment, DelegationRecord | direito ≠ meio técnico |
| PermissionAssertion | permission **asserted** (enforcement inexistente) | AuthorityGrant | explicitamente não enforced |
| ApprovalDecision | decisão de aprovação com basis/validade/revogação (E57 §4) | AuthorityGrant, ActionRequest | não inicia execução |
| DelegationRecord | cadeia de delegação limitada e revogável (E58 §1) | AuthorityGrant | não transfere accountability |
| AccountabilityLink | ator não humano → humano/instituição que responde (E58 §3) | IdentityRef | não é culpa automática |
| ActionRequest | pedido classificado (action class, risco, evidência exigida) | E57 §5 | não executa nada |
| DecisionRecord (evoluído) | registro auditável com authority basis e role-at-time | audit trail (E58 §5) | não é imutável ainda |

Lifecycle e proveniência: cada contrato segue o lifecycle da sua linha em E56
§5; todos preservam referência histórica após revogação.

## 3. UX implications (sem wireframes)

O usuário precisa compreender, em linguagem própria (sem IDs internos, sem
jargão institucional — E53 §ontology leakage): **quem** propõe, **quem**
executará, **quem** decide, **qual autoridade** está sendo usada e **até
quando**, **sobre qual escopo**, **o que muda** se aprovar (e o que
explicitamente **não** muda — o C-lite já exibe "aprovar não inicia"),
**como revogar**, **quem responde**, e **quando uma ação é simulada** (o
boundary textual permanente do protótipo é o padrão a preservar). O padrão de
exibição validado no C-lite — autoridade mostrada como consequência, não como
mecanismo — permanece o candidato (E53 §Authority comprehension).

## 4. Open questions (por tipo de decisão exigida)

- **Council decision:** adotar IdentityRef/AuthorityGrant como vocabulário de
  trabalho das próximas slices? separação rígida vs proporcional para o solo
  founder? qual instância (Stage 3 × extração) referencia experimentos futuros?
- **Security research (ARP-0007):** autenticação, credenciais, enforcement,
  imutabilidade do audit trail, identidade criptográfica de agentes.
- **Product evidence:** os conceitos de autoridade são compreensíveis para
  usuários reais? (bloqueado pelos gates E40)
- **Implementation experiment:** o domínio extraído aceita ActorRef/authority
  basis sem redesign material? (slice candidata 1 abaixo)
- **Legal/privacy:** retenção de identidade, anonimização de participantes,
  consentimento (toca E38/E39 — planos de participantes).
- **External user evidence:** compreensão de delegação/revogação por não
  técnicos.

## 5. Candidate implementation slices (nenhuma autorizada)

1. **Identity Representation Feasibility** — substituir `ActorRole` por
   ActorRef/IdentityRef no domínio extraído, preservando os 74 testes.
   Prereq: aceite deste modelo. Evidência: relatório + testes. Stopping rule:
   qualquer necessidade de autenticação real interrompe. Unlock: informa a
   viabilidade do modelo em código.
2. **Authority Guard Integration** — derivar guards de SoD/authority de
   declarações (AuthorityGrant) em vez de hardcode por papel. Prereq: slice 1.
   Stopping: enforcement real fora de escopo. Unlock: guards declarativos.
3. **Delegation and Revocation Experiment** — representar DelegationRecord e
   revogação no domínio experimental. Prereq: slice 2. Stopping: re-delegação
   automática ou credencial real interrompem. Unlock: cadeia de delegação
   auditável.
4. **Audit and Provenance Model** — desenho documental do audit trail
   (role-at-time, authority basis, imutabilidade candidata). Prereq: nenhum.
   Stopping: qualquer proposta de nova Source of Truth interrompe. Unlock:
   requisitos para persistência real.
5. **Human-Agent Accountability UX** — tradução dos conceitos para linguagem
   de usuário nas 6 views (documental). Prereq: modelo aceito. Stopping: novo
   frontend fora de escopo. Unlock: insumo para Product Experience Validation.
6. **Authentication and Enforcement Architecture** — AP formal sob ARP-0007.
   Prereq: slices 1–4 + decisão de arquitetura de produto. Stopping: seleção
   de fornecedor sem decisão do Council interrompe. Unlock: primeira
   arquitetura real de segurança.

## 6. Readiness recommendation

O modelo candidato está pronto para revisão do CSA/Council. Recomendação de
pesquisa (não autorização): aceitar E56–E59 como vocabulário de trabalho;
próxima slice da sequência já decidida pelo Council é **Canonical Project
Memory Adapter** (E54 §3), que não depende deste modelo; a slice candidata
"Identity Representation Feasibility" (§5.1) fica disponível para decisão
posterior sem urgência.
