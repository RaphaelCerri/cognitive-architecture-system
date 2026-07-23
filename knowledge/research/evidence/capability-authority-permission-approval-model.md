---
schema_version: 0.1.0-experimental
id: ARP-0009-E57
kind: knowledge
knowledge_type: research_evidence
title: Capability, Authority, Permission and Approval Model (Candidate)
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
  - type: related_to
    target: ARP-0008
  - type: related_to
    target: ARP-0007
  - type: constrained_by
    target: PMM-001
---

# Capability, Authority, Permission and Approval Model (Candidate)

Modelo **candidato, não canônico e não implementado**. Preserva o princípio 5
do Charter (`Authority != visibility != capability != permission`) e as
distinções de ARP-0008/ARCH-001 (`Capability != Skill != Tool`).

## 1. Capability model

Capability = o que um ator **é tecnicamente capaz** de realizar. Nunca implica
direito. Consistente com ARCH-001 §10 (Capability descreve *o que* precisa ser
possível, separada de ferramenta, agente ou runtime).

Estados epistêmicos candidatos de uma capability — a distinção central é
**declarada ≠ verificada**:

| Estado | Significado | Exemplo real do programa |
|---|---|---|
| declared | o ator afirma ser capaz | um modelo declara operar Git |
| verified | demonstrada com evidência rastreável | 117/117 testes executados em IHR-0029 |
| required | exigida por um papel/diretiva | EXECUTION_CONTRACT exige ler bootstrap + retornar no schema |
| available | presente e utilizável agora | `node --test` disponível na máquina |
| temporarily unavailable | existe mas não agora | operador humano indisponível (E49) |
| limitation | fronteira declarada da capability | executor não opera navegador/AT (E48) |
| capability evidence | o artefato que prova a verificação | logs de comando, testes, declaração literal do operador |

**Demonstração sem concessão:** verificar uma capability autoriza no máximo a
*elegibilidade* para receber um papel/authority — nunca o papel em si. A
concessão é sempre um ato de governança separado (role assignment / authority
grant), tomado por quem tem authority para conceder.

## 2. Authority model

Authority = **direito governado** de tomar determinada decisão ou autorizar
determinada transição. Sempre tem fonte, escopo e validade — nunca é inferida.

Campos candidatos de um grant (não é schema):

```yaml
authority_grant:            # candidato — experimental_only
  authority_id: …
  source: …                 # GOV-001, Council Decision, delegação válida
  holder: …                 # IdentityRef (E56), nunca "o modelo X"
  action_class: …           # ver §5
  scope: …                  # projeto/slice/ato específico
  constraints: […]
  valid_from: … / valid_until: …
  delegable: bool           # default: false
  revocable: bool           # default: true
  required_evidence: […]    # o que precisa existir antes do exercício
  separation_of_duty: […]   # incompatibilidades (ver E58)
  status: granted | suspended | revoked | expired
```

Tipos candidatos, **não intercambiáveis**: inherent (da definição do papel em
GOV-001 — ex.: CVO sobre visão), delegated (recebida de um holder legítimo,
com cadeia registrada), temporary (validade curta declarada), emergency
(cancelamento/contenção — pré-definida, nunca improvisada), advisory
(direito de recomendar — **nunca** converte em decisão: `Recommendation !=
Authorization`), approval authority, execution authority e acceptance
authority — as três últimas separadas porque `Proposal != Approval !=
Execution != Acceptance` (Charter).

## 3. Permission model

Permission = capacidade **operacional** concedida por um sistema de
enforcement. Hoje **não existe enforcement** no sistema — portanto todo o
modelo atual é de *permission asserted*:

```text
Permission asserted  → afirmada por dados/UI (o que o slice C-lite faz)
Permission enforced  → garantida por um mecanismo real (não existe ainda)
Visible Permission  != Security Enforcement   (EXECUTION_CONTRACT)
```

Um botão habilitado, um guard de domínio ou um estado exibido **não são prova
de permission** — são representação. Nenhuma claim de segurança é feita.

Cadeia candidata, com cada seta sendo **condicional e auditável, nunca
automática ou universal**:

```text
Authority → pode justificar → Permission
Permission → pode permitir → Operation
Operation → pode produzir → Event
```

Não-derivações explícitas: authority sem permission (direito sem meio técnico
— ex.: approver sem acesso ao sistema); permission sem authority (meio técnico
sem direito — a combinação mais perigosa, típica de credencial exposta);
operation sem event (lacuna de auditoria a proibir).

## 4. Approval model

Distinções obrigatórias — cada uma é um objeto/estado distinto, nunca um
"status" único: proposal → authorization request → approval decision
(approved | denied) → expired → revoked, e separadamente execution start e
result acceptance.

Campos candidatos de uma approval:

```yaml
approval_decision:          # candidato — experimental_only
  subject: …                # o quê está sendo aprovado (plano vN, não "o projeto")
  proposed_action: …
  requester: …              # IdentityRef
  approver: …               # IdentityRef ≠ requester quando SoD exigir
  authority_basis: …        # authority_id exercida
  scope: … / conditions: […]
  validity: …               # aprovação expira; não é eterna
  decision: approved | denied
  reason: …                 # obrigatório (o C-lite já exige reason em Authorize/Deny)
  provenance: …
  revocation_state: active | revoked
```

```text
Approved != Executed != Completed != Accepted
```

O vertical slice C-lite já **executa** essa separação (aprovar não enfileira;
enfileirar não inicia; concluir não aceita) — este modelo a generaliza como
contrato conceitual, sem promover o código.

## 5. Action and decision classes

Classes candidatas com exigências **relativas** (sem matriz definitiva
universal — a calibração final é decisão futura com evidência de risco):

| Classe | Authority | SoD | Reversibilidade | Auditoria | Risco base |
|---|---|---|---|---|---|
| read | mínima (visibility ≠ authority) | não | n/a | opcional/agregada | baixo |
| propose | papel ativo no escopo | não | alta | sim | baixo |
| modify draft | autor/executor do draft | não | alta | sim | baixo |
| submit | autor com escopo | não | média | sim | baixo-médio |
| approve / deny | approval authority válida | **sim** (≠ proposer/executor) | média (revogável) | **sempre** | médio |
| execute | execution authority + approval válida | sim (≠ approver quando exigido) | depende da ação | **sempre** | médio |
| pause / retry | execution authority vigente | não | alta | sim | baixo-médio |
| cancel | authority do escopo ou emergency | não | preserva trabalho (Charter) | **sempre** | médio |
| publish | authority explícita; efeito externo | sim | **baixa** | **sempre** | alto |
| accept / reject | acceptance authority (≠ executor) | **sim** | média | **sempre** | médio-alto |
| delegate / revoke | holder com `delegable`/`revocable` | sim | média | **sempre** | médio-alto |
| archive | owner/Council | não | alta (reversível) | sim | baixo |
| delete | authority explícita máxima | sim | **nenhuma** | **sempre** + evidência prévia | **alto** |

Requisito transversal: classes de maior risco exigem evidência prévia
(`required_evidence`) e nunca aceitam guard exclusivamente baseado em LLM como
suficiente (ARP-0007, Guardrail Architecture).

## 6. O que este modelo NÃO faz

Não cria RBAC/ABAC/capability-security reais (linhas de ARP-0007); não
seleciona provedor; não promove nenhum campo a schema canônico; não altera a
Ontologia (AP-0006) nem ARCH-001; não converte os guards do C-lite em
enforcement.
