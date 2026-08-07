---
schema_version: 0.1.0-experimental
id: IHR-0030
kind: knowledge
knowledge_type: implementation_handoff_report
title: Identity and Authority Model — Handoff
status: reviewed
reviewed_at: 2026-08-07
review_outcome: approved_historical_reconciliation
acceptance_scope: experimental_checkpoint
review_basis: ASSESS-0003
version: "1.0"
created_at: 2026-07-23
milestone: V1-M02
related_commits: []
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: documents
    target: ARP-0009
  - type: related_to
    target: ARP-0009-E56
  - type: related_to
    target: ARP-0009-E57
  - type: related_to
    target: ARP-0009-E58
  - type: related_to
    target: ARP-0009-E59
  - type: related_to
    target: IHR-0029
---

# IHR-0030 — Identity and Authority Model — Handoff

## 1. Contexto

O CSA aceitou IHR-0029 (Domain Extraction Feasibility, outcome **Feasible**;
decisão de Interface State aprovada como boundary experimental; segundo teste
vivo válido do bootstrap). O Council autorizou a segunda candidate slice da
sequência: pesquisa **documental** de um modelo candidato de identidade e
autoridade — sem código, sem autenticação, sem enforcement.

```text
Identity != Role != Capability != Authority != Permission != Approval
Candidate Model != Ontology != Security Architecture != Implementation
```

## 2. O que foi executado

### Bootstrap Loading Report — com desvio declarado

**Desvio processual declarado antecipadamente:** a diretiva pediu sessão nova;
a execução ocorreu **na mesma sessão** que produziu IHR-0029 (decisão do
Chief ao colar a diretiva na sessão corrente). Pelo precedente CSA-OBS-BOOT-02,
esta execução **não deve contar** como teste vivo de bootstrap. Impacto
material no conteúdo: nenhum esperado — slice documental; o estado foi
re-verificado contra o Git real e todas as fontes foram lidas do repositório
nesta sessão. Arquivos lidos para esta slice: PROJECT_STATUS (staleness zero —
`observed_head` coincidia com o HEAD real `e28f9af`), GOV-001, PMM-001,
ARP-0007, trechos de ARP-0008 e ARCH-001, AP-0007, AP-0012, listagem de APs;
manifest aplicável: **ausente** (somente CM-0001 existe). Fontes de autoridade:
Council Decision desta slice (nível 1) → PMM-001/GOV-001 → ARP-0009 →
E44–E55. Conflitos entre fontes: nenhum material. Do repositório: papéis,
hierarquia, distinções canônicas, estado do domínio extraído. Da diretiva:
autorização, escopo das 24 seções, orçamentos (7 arquivos/2 commits/75 min),
aceite de IHR-0029.

### Execution Loop Report

1. Preflight: `main` @ `e28f9af`, tracked worktree limpo, untracked
   preservados; progresso sim.
2. Leitura de fontes (GOV-001, PMM-001, ARP-0007, AP-0007/0012, ARCH-001 §10,
   ARP-0008); progresso sim.
3. `E56` criado — Identity, Actor and Role Model; progresso sim.
4. `E57` criado — Capability, Authority, Permission and Approval Model;
   progresso sim.
5. `E58` criado — Delegation, Accountability, Audit and Risk Boundaries;
   progresso sim.
6. `E59` criado — Implementation Readiness (relação com domínio extraído,
   11 contratos candidatos, UX, questões abertas, 6 slices candidatas);
   progresso sim.
7. ARP-0009 + PROJECT_STATUS atualizados; este IHR; progresso sim.

Limites: 7/7 iterações; dentro de 75 min; **7/7 arquivos**; 2/2 commits
planejados; 0 iterações sem progresso.

## 3. Arquivos afetados

Created: `knowledge/research/evidence/identity-actor-role-model.md` (E56);
`capability-authority-permission-approval-model.md` (E57);
`delegation-accountability-audit-risk-boundaries.md` (E58);
`identity-authority-implementation-readiness.md` (E59); este IHR (5).
Modified: `knowledge/research/ARP-0009-…md`;
`foundation/bootstrap/PROJECT_STATUS.yaml` (2). Total **7 ≤ 7**.
Intactos: domínio extraído, vertical slice, Ontologia, ARCH-001, ARP-0007,
ARP-0008, `.obsidian/`, DRAFT untracked. **Nenhum código.**

## 4. Validação realizada

Executado: verificação de branch/HEAD/worktree; frontmatter e IDs únicos
(E56–E59, IHR-0030, sem colisão com E05–E55/IHR-0023–0029); relations
apontando para alvos reais (ARP-0009, PMM-001, GOV-001, ARP-0007/0008,
E55–E58); rastreabilidade das distinções a PMM-001/GOV-001/Charter/
EXECUTION_CONTRACT/E44–E55 (cada seção cita a fonte); separações
identity/role, capability/authority, authority/permission,
approval/execution/acceptance presentes e consistentes entre os quatro
documentos; restrições de delegação e SoD cobertas; fronteiras de agente e
accountability cobertas; lifecycle coberto; distinção audit/event/Memory/
evidence coberta; implicações de UX sem wireframe; limitações de segurança
explícitas; 10 anti-patterns; slices candidatas todas marcadas não
autorizadas; UTF-8 sem mojibake; `git diff --check` limpo; staging por path;
worktree final limpo.

Não executado / n/a: testes, build, typecheck, lint — **nenhum código foi
escrito ou alterado** (pesquisa documental pura; declarado, não inventado).

## 5. Plano versus execução

Um desvio processual declarado (sessão reutilizada — ver §2; conteúdo não
afetado; execução não conta como teste de bootstrap). Nenhum outro desvio:
7 arquivos, 2 commits, sem código, sem alteração de artefatos proibidos.

## 6. Decisões tomadas pelo CEA (dentro do escopo)

- Consolidar as 24 seções da diretiva em 4 evidence artifacts temáticos
  (formato já aceito pelo Council em IHR-0028 §Questões, item confirmado);
  mapa: E56 (§4, 5, 12, 17), E57 (§6–9, 14), E58 (§10, 11, 13, 15, 18, 20,
  22), E59 (§16, 19, 21, 23, 24).
- Marcar **todos** os contratos candidatos como `experimental_only`, seguindo
  a decisão do CSA sobre `ScenarioFixture` (não promover por inércia).
- Ancorar cada conceito em algo já existente no repositório (GOV-001, Charter,
  EXECUTION_CONTRACT, guards do C-lite, E49/E52) em vez de importar um modelo
  externo de RBAC/ABAC — a seleção de paradigma de autorização fica para
  ARP-0007.
- Registrar a proporcionalidade de SoD para o contexto solo-founder como
  pergunta calibrável por risco, não como regra fixa.

## 7. Estado da documentação

`ARP-0009` mantém `governance_state: authorized`, `research_state: active`,
`knowledge_maturity: evidence_gathering`, `outcome: null`,
`implementation_state: not_started` — nenhum estado alterado; `concluded` não
usado. ARP-0007 permanece `scoped`, não modificado. PROJECT_STATUS reflete o
checkpoint aceito (IHR-0029) e lista este como `pending_review`.

## 8. Backlog e propostas

Nenhuma AP criada ou alterada (AP-0012 e AP-0007 apenas referenciados). Seis
slices candidatas nomeadas em E59 §5, nenhuma autorizada. Próxima slice da
sequência do Council: Canonical Project Memory Adapter — não autorizada.

## 9. Riscos e pontos de atenção

- O modelo é **vocabulário candidato**: usá-lo em diretivas futuras sem aceite
  formal criaria canonicidade de fato;
- `permission asserted` pode ser lida como segurança por leitores apressados —
  E57/E58 repetem a negação, mas o risco de comunicação existe;
- a proporcionalidade de SoD para solo founder precisa de decisão explícita
  antes de qualquer enforcement, ou virará exceção permanente não decidida;
- a execução na mesma sessão (desvio declarado) não deve virar padrão — o
  custo de uma sessão nova é baixo e o valor do teste de bootstrap é real.

## 10. Questões para o Conselho

- Aceitar IHR-0030 e E56–E59 como modelo candidato de trabalho?
- Adotar os nomes dos 11 contratos candidatos como vocabulário das próximas
  diretivas (mantendo `experimental_only`)?
- Decidir a política de SoD proporcional para o contexto solo-founder?
- Autorizar a próxima slice da sequência (Canonical Project Memory Adapter)?

## 11. Próxima ação recomendada

CSA/Council review e `accept`. Recomendação do CEA: aceitar; autorizar
Canonical Project Memory Adapter (sequência já decidida; depende da extração
aceita em IHR-0029, não deste modelo); manter Identity Representation
Feasibility (E59 §5.1) como opção posterior. Não iniciar nada automaticamente
— interrompido após este relatório.

## 12. Evidências

Fontes internas: Council Decision "Identity and Authority Model" (via CSA,
2026-07-23); PMM-001; GOV-001 (+AD-005); Charter/EXECUTION_CONTRACT/
RETURN_SCHEMA; ARP-0007 (linhas de identidade/autorização); ARP-0008 e
ARCH-001 §10 (Capability≠Skill≠Tool); AP-0007, AP-0012; ARP-0009-E44–E55;
IHR-0028, IHR-0029; domínio extraído (leitura, sem modificação). Nenhuma
fonte externa; nenhum dado pessoal.
