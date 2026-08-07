---
schema_version: 0.1.0-experimental
id: GOV-003-E01
kind: knowledge
knowledge_type: research_evidence
title: Governed Role Orchestration Guard Experiment
status: experimental
version: "0.1"
created_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: GOV-003
  - type: authorized_by
    target: AD-010
  - type: informs
    target: AP-0022
---

# Guard experimental de orquestração governada

## Resultado

Um guard local agora valida envelope, cadeia de digests, identidade declarada da
sessão, ordem mínima de eventos, consistência do digest declarado e separação
requerida por modo. Um verifier obrigatório resolve authority, HEAD e artifacts
no ambiente da integração. Violações falham fechadas com blockers legíveis por
máquina.

## Casos demonstrados

- fluxo multiagente com CSA, CEA e reviewer em sessões distintas;
- transição lógica CSA para CEA na mesma sessão, marcada sem independência;
- adulteração e quebra de cadeia do envelope;
- autoaceite após simples troca do rótulo de papel;
- router tentando exercer authority;
- directive digest alterado depois da autorização;
- canonicalização de memória antes do aceite;
- falsa claim de revisão independente.

## Auditoria da governança anterior

A auditoria independente encontrou uma contradição material: GOV-001 e o
Execution Contract proibiam autoaprovação, enquanto GOV-002 podia ser lido como
autoaprovação de agente em Personal Mode. GOV-002 foi corrigido: a exceção é do
humano owner e nunca do agente/runtime.

AD-007, AD-008 e AD-009 possuíam autorização literal do CVO para execução
experimental. Porém, como CSA e CEA compartilharam contexto, seus IHRs continuam
`pending_review`; nenhum parecer daquela sessão constitui revisão independente.

## Limitações

O digest demonstra consistência, não autenticação. O verifier é uma fronteira de
integração confiável, não uma implementação de identity provider. O protótipo não
prova isolamento de processo, identidade criptográfica, persistência append-only
ou enforcement no runtime real. A auditoria separada compartilhou filesystem e
família de modelo, portanto reduz conflito contextual, mas não equivale a controle
organizacional ou criptográfico de produção.

## Recomendação

Manter GOV-003 e GRP-001 como guardrails candidatos experimentais e AP-0022 como proposta.
Não declarar runtime multiagente implementado até validar identidade, isolamento,
audit log e binding dos artifacts reais.
