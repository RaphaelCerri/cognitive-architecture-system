---
schema_version: "0.1.0-experimental"
id: AD-010
kind: knowledge
knowledge_type: architecture_directive
title: "Governed Role Separation and Agent Orchestration"
status: operational
version: "1.0"
created_at: 2026-08-07
author: "Raphael Caveagna — Founder & CVO, translated by CSA"
language: pt-BR
relations:
  - type: establishes
    target: GOV-003
  - type: establishes
    target: GRP-001
  - type: authorizes
    target: AP-0022
  - type: refines
    target: GOV-002
---

# AD-010: separação governada de papéis

## Decisão do CVO

Governança é condição de operação do sistema, não comportamento opcional. O
sistema pode coordenar papéis no mesmo chat ou entre agentes/sessões separados,
mas nenhuma topologia pode converter execução em aprovação própria.

## Direção

1. **Multiagente independente** é o modo preferido para trabalho material: um
   router coordena CSA, CEA e reviewer em sessões identificáveis e separadas.
2. **Air gap manual** é alternativa forte: o CVO transporta envelopes
   verificáveis entre chats que não compartilham contexto.
3. **Sessão única com transição lógica** é fallback para Personal Mode: um papel
   fica ativo por vez, cada transição é registrada e a mesma sessão não aceita
   seu próprio resultado.
4. O Governance Router coordena mensagens e gates; não recebe autoridade de
   arquitetura, execução, review ou aceite.
5. A exceção de operador único de GOV-002 pertence ao humano owner. Nunca
   autoriza um agente/runtime a autoaprovar trabalho.

## Aplicação ao histórico recente

AD-007, AD-008 e AD-009 foram emitidas após decisões literais do CVO e executadas
no mesmo chat por transição CSA→CEA. Seus IHRs permaneceram `pending_review` até
a revisão independente ASSESS-0003. O aceite experimental não promove seus
resultados nem autoriza V1-M03.

## Implementação autorizada

Formalizar GOV-003, GRP-001, corrigir a ambiguidade de GOV-002 e implementar um
guard experimental executável com envelopes, identidade de sessão, digests,
separation mode e bloqueio de bypass.

## Limites da slice

- até 24 arquivos e nenhum commit automático;
- até quatro ciclos materiais de correção;
- sem runtime multiagente, autenticação, efeito externo ou promoção ontológica;
- parar diante de conflito normativo não resolvido, bypass central remanescente
  ou necessidade de authority adicional;
- GOV-003 e GRP-001 permanecem experimentais até ratificação competente.
