---
schema_version: 0.1.0-experimental
id: ARP-0009-E58
kind: knowledge
knowledge_type: research_evidence
title: Delegation, Accountability, Audit and Risk Boundaries (Candidate)
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E57
  - type: related_to
    target: ARP-0007
  - type: constrained_by
    target: PMM-001
---

# Delegation, Accountability, Audit and Risk Boundaries (Candidate)

Continuação de E56/E57. Candidato, não canônico, sem implementação.

## 1. Delegation

Delegação = transferência **limitada, registrada e revogável** do exercício de
uma authority — nunca da titularidade da accountability.

Elementos candidatos: delegation source (o grant original com `delegable:
true`), delegator, delegate, delegated action (classe específica, nunca "tudo"),
scope, duration (obrigatória quando temporária), conditions, revocation
(sempre possível; efeito futuro, não retroativo), re-delegation (proibida por
default; exige permissão explícita no grant original), audit (cadeia completa
delegator→delegate registrada), emergency handling (revogação emergencial
pré-definida, exercível pela autoridade superior da cadeia).

**Proibições candidatas:**

- delegar authority que o ator não possui (inclusive "delegação" fabricada por
  um agente — variante do confused deputy de ARP-0007);
- delegação temporária sem prazo;
- autoaprovação por cadeia indireta (A delega a B que aprova o trabalho de A —
  a separation of duty segue a cadeia, não só o ato);
- delegação invisível (sem registro = inexistente);
- perda de provenance na cadeia;
- re-delegação não autorizada.

## 2. Separation of duties

Restrições candidatas — as três primeiras **já executáveis** no domínio C-lite,
as demais documentais hoje:

| Restrição | Estado atual |
|---|---|
| proposer não aprova a própria proposta | executável (guard `Authorize`/actor) |
| executor não aceita o próprio resultado | executável (guard `DecideReview`) |
| ações sensíveis bloqueadas sob contexto stale | executável (`context.stale`) |
| evidence producer não certifica a própria evidência como independente | documental (E49: operador interno declarado não independente) |
| reviewer não altera silenciosamente o artifact | documental (IHP: revisão gera decisão, não edição) |
| approver não simula execução | documental |
| system process não assume authority humana | documental (E56 §1) |

Proporcionalidade: separação **rígida** onde a consequência é institucional
(approve, accept, publish, delete); **proporcional ao risco** onde o custo da
separação excede o dano possível (ex.: um solo founder pode acumular papéis em
ações reversíveis de baixo risco, desde que o acúmulo seja **registrado** e as
ações de alto risco preservem a separação — hoje o próprio programa opera
assim: Raphael é CVO e operador, com o CSA como autoridade de revisão).

## 3. Human accountability

Todo ator não humano relevante mantém uma **AccountabilityLink** candidata:
human owner (pessoa que responde), institutional owner (papel/órgão),
project owner, authorizing decision (a diretiva/decisão que o pôs em operação)
e operating scope.

Registro candidato por consequência relevante: quem **autorizou** (Council/
CSA), quem **configurou** (blueprint/config), quem **operou** (sessão), quem
**revisou**, quem **aceitou**, quem **responde** (owner da accountability).
No programa atual essa cadeia já existe de fato: Council Decision → diretiva →
executor session → IHR → aceite do CSA.

Accountability ≠ culpa automática: o registro estabelece *quem responde e
explica*, não uma atribuição sumária de falha — a análise de causa continua
sendo um ato de revisão.

## 4. Risk proportionality

Perguntas candidatas (não política final) para calibrar o modelo por risco:

- **Low** (reversível, local, sintético, sem efeito externo — ex.: o
  experimento C-lite): basta authority da diretiva + auditoria padrão?
  autoaprovação operacional é aceitável se registrada?
- **Medium** (estado compartilhado de projeto, consumo de recursos, ferramenta
  externa, dados não sensíveis): quais ações passam a exigir approval
  explícita e evidência prévia? onde entra rate limit/budget (ARP-0007)?
- **High** (dados pessoais, efeito financeiro, publicação pública, ação
  irreversível, credenciais, impacto de segurança): dupla authority? evidência
  verificada obrigatória? proibição total de exercício por processo não
  humano? janela de revogação antes do efeito?

Princípio herdado: guardrails proporcionais ao risco; blockers não são
compensáveis por média (Charter, princípio 4).

## 5. Audit and provenance

Registro mínimo candidato por decisão/ação relevante: actor identity (stable +
runtime), role at time (papel **no momento**, não o atual), authority basis,
command, decision, event, timestamp, scope, evidence, result, delegation chain,
version (dos contratos/fixtures envolvidos), reason.

```text
Audit trail != Event log != Project Memory != Evidence
```

- **Event log** — fatos de domínio (o que aconteceu) — existe no C-lite
  (`HistoryEntry`), sem authority basis nem delegation chain;
- **Audit trail** — reconstrução de *quem podia e por quê* — candidato novo;
- **Project Memory** — visão derivada para reconstrução de contexto humano
  (E55) — nunca fonte de verdade de auditoria;
- **Evidence** — artefatos que sustentam claims específicas, com freshness e
  limitação.

Requisitos de produção nomeados e não resolvidos: imutabilidade, retenção,
proveniência criptográfica (E52 §Identity gap; ARP-0007 §Observabilidade).

## 6. Security boundaries — o que este modelo NÃO resolve

Explícito, para nunca ser lido como arquitetura de segurança: authentication;
credential storage; authorization **enforcement**; session security;
cryptographic identity; impersonation/spoofing; comprometimento de conta ou
agente; least privilege enforcement; tenant isolation; secrets management.
Todos pertencem às linhas de ARP-0007 (Identidade e autorização; Execução e
ferramentas; Dados e privacidade), que permanece `scoped` e **não é modificado**
por esta pesquisa.

## 7. Anti-patterns — conflações inválidas ou perigosas

Lista explícita de inferências **proibidas** no modelo candidato:

1. papel inferido do nome do modelo (viola GOV-001/AD-005);
2. permission inferida de botão visível (viola `Visible Permission !=
   Enforcement`);
3. authority inferida de capability ("consegue, logo pode");
4. approval inferida de execução ("rodou, logo foi aprovado");
5. identity inferida de sessão (sessão é efêmera; identidade não);
6. accountability inferida de autoria (quem escreveu ≠ quem responde);
7. delegação inferida de acesso a ferramenta;
8. acceptance inferida de completion (`Completed != Accepted`);
9. ator confiável inferido do fornecedor ("é do provedor X, logo é seguro");
10. identidade verificada inferida de display label (labels são F-01 —
    apresentação, nunca prova).

Cada anti-pattern corresponde a um risco real já catalogado em ARP-0007
(excessive agency, confused deputy, impersonation) ou a uma distinção do
Charter exercitada pelo C-lite.
