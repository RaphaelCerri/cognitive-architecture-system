---
schema_version: 0.1.0-experimental
id: ARP-0009-E56
kind: knowledge
knowledge_type: research_evidence
title: Identity, Actor and Role Model (Candidate)
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: constrained_by
    target: PMM-001
  - type: refines
    target: GOV-001
  - type: related_to
    target: ARP-0009-E55
  - type: related_to
    target: ARP-0007
---

# Identity, Actor and Role Model (Candidate)

Modelo **candidato, não canônico e não implementado**. Nenhuma autenticação,
enforcement ou schema estável é criado. Em conflito, PMM-001 → GOV-001 →
princípios prevalecem.

```text
Identity != Role != Capability != Authority != Permission != Approval
Human != Agent != Runtime Process != Executor Session
Role Label != Runtime Identity != Vendor or Model
Candidate Model != Ontology != Security Architecture != Implementation
```

## 1. Taxonomia de atores (candidata)

Três classes, nenhuma redutível às outras:

### Human identity

| Tipo | O que identifica | Distinto de |
|---|---|---|
| Person | o ser humano real, portador final de accountability | conta, sessão, papel |
| Account | representação registrada de uma pessoa num sistema | a pessoa (uma pessoa pode ter várias contas; uma conta comprometida não é a pessoa) |
| Operator | pessoa executando fisicamente uma sessão/verificação (ex.: operador humano de E49) | reviewer/approver — operar não é decidir |
| Reviewer | pessoa exercendo revisão sobre um resultado | approver — revisar não é aprovar |
| Approver | pessoa exercendo authority de aprovação num ato específico | project owner — aprovar um ato não é possuir o projeto |
| Project owner | pessoa respondendo pela existência e direção de um projeto | operator/participant |
| Participant | pessoa fornecendo evidência (ex.: avaliação futura E40) — nunca ator de decisão | todos os anteriores; exige consentimento e proteção próprios |

### Agent identity

Cadeia de distinções que **não colapsam** (já implícita no Charter:
`Agent Blueprint != Runtime Agent != Execution`):

| Tipo | O que identifica |
|---|---|
| Agent blueprint | especificação versionada de um agente possível (documento, não ator) |
| Configured agent | blueprint + configuração concreta (ferramentas, contexto, limites) |
| Runtime agent instance | processo vivo executando uma configuração num dado momento |
| Executor session | uma sessão de trabalho concreta (ex.: a sessão que produziu IHR-0029) — unidade real de auditoria hoje |
| Model/provider reference | proveniência técnica (família/fornecedor do modelo) — **nunca** identidade institucional (GOV-001/AD-005) |
| Tool-bound process | processo com acesso a ferramentas específicas; o acesso descreve capability, nunca authority |

### System identity

Service, scheduler, compiler, orchestrator (AP-0012, `proposed`), automation e
background operation. Regra candidata: **processo de sistema nunca assume
authority humana** — pode executar consequências de decisões já tomadas, com a
decisão rastreável a um ator com authority.

## 2. Dimensões de identidade (por tipo de ator)

Para cada ator, cinco identidades **separadas**:

- **Stable identity** — referência durável que sobrevive a sessões
  (pessoa/conta; blueprint id; service id);
- **Runtime identity** — a instância/sessão concreta agindo agora;
- **Display identity** — o rótulo apresentado (F-01: IDs internos nunca são
  renderizados; labels traduzem);
- **Provenance identity** — o que fica no registro histórico (deve permitir
  reconstruir *quem/o quê/em qual sessão/sob qual configuração*);
- **Accountability owner** — o humano ou instituição que responde (ver E58).

Lifecycle e revogação: toda identidade não humana precisa ser revogável sem
reescrever história (revogar validade futura ≠ apagar proveniência passada).
Nenhum sistema de autenticação é selecionado por este documento.

## 3. Modelo de papéis (candidato)

Papéis são **atribuições governadas**, nunca propriedades intrínsecas do ator:

```text
Role Assignment = (identity, role, scope, source of authority, validity)
```

Categorias distintas: institutional role (CVO/CSA/Council — GOV-001), project
role (project owner, participant), execution role (executor/researcher —
exercível por pessoa ou modelo compatível), review role (reviewer/approver),
temporary role (operator de uma sessão dirigida), system role (compiler,
scheduler), e **interface label** (que não é papel — é display identity, F-01).

Avaliação por papel (responsabilidade · fonte de autoridade · decisões
permitidas · autodecisões proibidas · capability requerida · escopo · duração ·
delegação · separation of duties):

| Papel | Fonte de autoridade | Decide | Não pode decidir sobre si | Duração |
|---|---|---|---|---|
| Chief/CVO | GOV-001 (visão, prioridade) | direção, prioridade, mudança filosófica (com CSA) | não substitui revisão coletiva do Council | permanente até mudança de governança |
| Council | GOV-001/ACD | autorização de slices, aceitação de checkpoints, mudanças canônicas | não executa | permanente |
| CSA | GOV-001 | interpreta arquitetura; aceita/devolve IHRs | não aprova o próprio trabalho quando executa | permanente |
| Executor/CEA | GOV-001 + EXECUTION_CONTRACT + diretiva | decisões operacionais dentro do escopo | não aprova o próprio resultado; não inicia a próxima etapa | por diretiva/slice |
| Researcher | diretiva | condução da pesquisa autorizada | não converte recomendação em autorização | por slice |
| Reviewer | designação | parecer de revisão | não altera silenciosamente o artifact revisado | por revisão |
| Approver | authority grant específico | approve/deny do ato designado | não executa o que aprovou (quando separação exigida) | por validade do grant |
| Project owner | criação/atribuição do projeto | intenção, aceite de resultado (quando designado) | não certifica a própria evidência como independente | pelo projeto |
| Operator | designação da sessão | operação fática; declara o que observou | não converte observação em aceitação | por sessão |
| Participant | consentimento | fornece evidência; pode retirar-se | nenhuma decisão de sistema | por participação |

Nenhum papel é vinculado a fornecedor ou modelo (AD-005). Troca de executor
não redistribui autoridade.

## 4. Fronteiras específicas de agentes

Regras candidatas (consistentes com E52 §Identity gap e GOV-001):

1. **Capability técnica nunca gera authority** — um modelo não possui direito
   de decidir por ser capaz de decidir.
2. **Troca de modelo não altera papel institucional** — o papel pertence à
   atribuição, não ao runtime.
3. Acesso a ferramenta/credencial/contexto descreve **capability e superfície
   de risco**, nunca permissão institucional.
4. Toda runtime agent instance rastreia: blueprint → configuração → sessão →
   diretiva autorizadora → accountability owner humano.
5. `Executor != Chief != Council != CSA` vale para agentes exatamente como
   para humanos (AGENT_START_HERE).

## 5. Lifecycle de identidade (candidato)

Estados candidatos: `created → verified → active → suspended → revoked |
expired → deleted | anonymized`, com `historical reference retained` como
propriedade ortogonal (proveniência sobrevive à revogação).

Lifecycles **distintos e não fundíveis** (cada linha evolui separada):
pessoa (nunca "deletada" do registro histórico; pode ser anonimizada),
conta, agente (blueprint versionado ≠ instância efêmera), sessão (sempre
efêmera; nunca "verified" por si), role assignment (expira/revoga sem apagar
atos passados), delegation (ver E58), credential (fora de escopo — ARP-0007).

Nenhum banco de dados, schema físico ou provedor é desenhado.

## 6. O que este modelo NÃO define

Autenticação real, armazenamento de credenciais, sessão segura, identidade
criptográfica, verificação de pessoa, multi-tenancy — registrados como
fronteiras de segurança em E58 §Security boundaries, relacionados a ARP-0007
sem modificá-lo.
