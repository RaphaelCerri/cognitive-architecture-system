---
schema_version: 0.1.0-experimental
id: ARP-0009-E75
kind: knowledge
knowledge_type: research_evidence
title: Project Memory Update Proposal — Human Acceptance Process (Candidate)
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E60
  - type: related_to
    target: ARP-0009-E57
---

# Processo de Aceite de Update Proposal (candidato)

Fecha G-A05: o adapter gera propostas (`status: proposed`, nunca
auto-aplicadas — provado byte a byte em E60), mas ninguém havia definido **como
uma proposta vira mudança canônica aceita**. Processo candidato, alinhado ao
vocabulário E56–E59 e ao perfil GOV-002.

## 1. O ciclo

```text
1. GENERATE   adapter/executor gera memory_update_proposal (base_version fixada)
2. VERIFY     validateProposalAgainstBase(proposal, memory_atual)
              → base divergente = para aqui (require human decision; nunca aplicar)
3. REVIEW     humano com authority (project owner OU decision_authority do projeto)
              lê changes[] (before/after por campo) + reason + provenance
4. DECIDE     accept | accept_with_edits | reject | defer
              — sempre com reason registrada (como toda decisão do domínio)
5. APPLY      SOMENTE após accept: o humano (ou ferramenta operada pelo humano)
              regrava o arquivo de Memory com content_version incrementada
              e um bloco de proveniência da aplicação
6. RECORD     a decisão (quem/quando/qual proposta/reason) fica no próprio
              frontmatter da Memory (applied_proposals: [...]) — audit-lite
              até existir o audit artifact (E76)
```

## 2. Regras não negociáveis

- **Aplicação é ato humano** em Personal Mode — nenhum agente aplica a própria
  proposta (SoD: proposer ≠ applier quando o proposer é um agente);
- proposta sobre `base_version` antiga **nunca** é aplicada nem "rebaseada"
  silenciosamente — gera-se nova proposta sobre a base atual;
- `accept_with_edits` registra os edits como parte da decisão (a proposta
  original permanece imutável no registro);
- rejeição preserva a proposta rejeitada (rejected work permanece rastreável —
  PMM-001);
- em `personal-low-risk` (GOV-002): o próprio owner propõe e aplica, com
  `solo_operator_exception` registrada — permitido porque a Memory é dele e a
  ação é local/reversível (o arquivo anterior sobrevive no Git).

## 3. Campos candidatos adicionados à Memory na aplicação

```yaml
applied_proposals:
  - proposal_ref: <id/hash da proposta>
    decided_by: <IdentityRef-lite: label + papel>
    decision: accept | accept_with_edits
    reason: "…"
    previous_version: N
    new_version: N+1
```

## 4. O que fica para o futuro

Ferramenta de apply assistido (mostrar diff, aplicar mudanças aceitas) —
candidata a slice quando o intake gerar Memories reais; assinatura/integridade
do registro de aplicação — pertence ao audit artifact (E76); merge de
propostas concorrentes — Team Mode.
