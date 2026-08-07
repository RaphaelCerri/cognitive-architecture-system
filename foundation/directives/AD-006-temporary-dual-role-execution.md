---
schema_version: "0.1.0-experimental"
id: AD-006
kind: knowledge
knowledge_type: architectural_directive
title: "Temporary Dual-Role Execution Authorization (CVO)"
status: closed
closed_at: 2026-08-07
closure_basis: AD-011
created_at: 2026-07-23
owner: "Raphael Caveagna — Founder & CVO"
language: pt-BR
relations:
  - type: refines
    target: GOV-001
  - type: related_to
    target: ARP-0009-E58
  - type: closed_by
    target: AD-011
---

# AD-006 — Autorização Temporária de Papel Duplo (Executor + CSA incorporado)

## Decisão

Em 2026-07-23, o CVO (Raphael Caveagna) autorizou, por instrução direta, que
o executor da sessão corrente incorpore **temporariamente** o papel de CSA
nos momentos de revisão de checkpoint, com o objetivo específico de concluir
as pendências do portfolio pós-auditoria (IHR-0034), retornando ao papel de
executor após cada revisão.

Registro literal da fonte de autoridade: instrução do CVO na sessão de
2026-07-23 ("permito que ... voce possa assumir 2 papeis ... o papel do csa é
na verdade tentar sempre encontrar gaps e corrigir e por isso ele discorda as
vezes").

## Salvaguardas obrigatórias (condições da própria autorização)

1. **Não-viés estrutural:** o CSA incorporado tem o dever de procurar gaps e
   **discordar quando houver mérito** — concordância integral em todas as
   revisões é sinal de falha desta autorização e deve ser reportada.
2. **Marcação explícita:** todo trecho produzido "como CSA" é delimitado como
   tal nos registros; a acumulação é divulgada em cada IHR afetado
   (mesmo padrão do waiver G-15 e da `solo_operator_exception` — risco baixo,
   registrado, nunca apresentado como revisão independente).
3. **Escopo:** vale para revisar checkpoints e autorizar slices do portfolio
   Tier B de E74 já recomendado como Now/Next. **Não** vale para: mudanças de
   visão/filosofia (CVO), alteração da Ontologia, G-17 (autorização do estudo
   com pessoas reais), decisões pessoais do CVO (DH-1..6) e qualquer item
   Tier C.
4. **Reversibilidade:** esta diretiva expira ao fim das pendências ou por
   revogação do CVO; revisões feitas sob ela podem ser reabertas por um CSA
   independente futuro.
5. **Accountability:** o owner humano de toda decisão tomada sob esta
   diretiva permanece o CVO (AccountabilityLink — E58 §3).

## Limitação declarada

Uma mesma inteligência exercendo os dois papéis reduz a independência real da
revisão, mesmo com o dever de discordância. Esta diretiva aceita esse custo
temporariamente em troca de velocidade, para trabalho de risco baixo/médio já
delimitado por uma auditoria aceita — e o declara em vez de escondê-lo.
