---
schema_version: "0.1.0-experimental"
id: ADF-001
kind: knowledge
knowledge_type: architectural_protocol
title: "Architectural Decision Filter"
status: operational
version: "1.0"
created_at: 2026-07-21
owner: "Architecture Council"
language: pt-BR
relations:
  - type: authorized_by
    target: AD-001
  - type: implements
    target: AP-0009
  - type: constrained_by
    target: AIP-001
  - type: recorded_by
    target: ADR-0010
---

# ADF-001 — Architectural Decision Filter

## Objetivo

Impedir que implementações, tecnologias ou abstrações transitórias sejam promovidas a componentes permanentes sem evidência de valor arquitetural duradouro.

O ADF avalia elegibilidade. Ele não substitui a aprovação do Conselho.

## Quando aplicar

Aplicar antes de:

- criar ou promover Core Types;
- criar camadas ou domínios permanentes;
- estabilizar contratos públicos;
- incorporar princípios, protocolos ou abstrações fundamentais;
- transformar uma extensão experimental em parte obrigatória do sistema.

Não aplicar a decisões técnicas locais, reversíveis e internas a contratos já aprovados.

## Entrada obrigatória

Uma avaliação precisa informar:

- ID e versão do candidato;
- permanência solicitada;
- motivação e capacidade acrescentada;
- impacto e complexidade introduzida;
- dependências e alternativas consideradas;
- evidências para cada critério;
- riscos de promover e de não promover.

Ausência de evidência nunca equivale a aprovação.

## Critérios

Cada critério recebe exatamente `pass`, `fail` ou `insufficient_evidence`.

### ADF-C01 — Simplicity

O candidato reduz complexidade líquida ou introduz somente a complexidade mínima indispensável para uma capacidade demonstrada?

### ADF-C02 — Durability

O conceito provavelmente continuará válido em um horizonte de cinco anos, mesmo que tecnologias específicas mudem?

### ADF-C03 — Fundamentality

O candidato representa um princípio, contrato ou capacidade fundamental, e não uma implementação, produto ou tecnologia específica?

### ADF-C04 — Generativity

O candidato serve de base coerente para derivar, validar ou gerar outros componentes sem duplicar responsabilidades?

### ADF-C05 — Agnosticism

O candidato permanece válido independentemente de modelo, runtime, fornecedor, linguagem ou ferramenta, salvo quando estiver explicitamente limitado a um adapter ou extensão?

## Resultados

- `eligible_for_promotion`: todos os cinco critérios receberam `pass`. O Conselho ainda precisa aprovar a promoção.
- `remain_experimental`: nenhum critério falhou, mas existe ao menos um `insufficient_evidence`.
- `reject_promotion`: um ou mais critérios receberam `fail`. O candidato pode continuar como implementação local ou extensão quando isso não violar outros contratos.

Não existe pontuação compensatória: um critério não pode esconder a falha de outro.

## Processo

1. Confirmar que a avaliação é necessária e identificar a permanência solicitada.
2. Reunir evidências e alternativas antes de emitir julgamentos.
3. Avaliar os cinco critérios separadamente.
4. Derivar o resultado sem votação ou média.
5. Registrar justificativas, riscos, divergências e evidências ausentes.
6. Encaminhar ao Conselho quando houver promoção ou mudança arquitetural.
7. Relacionar a avaliação à AP, ao ADR e aos artefatos resultantes.

## Contrato de saída

Uma avaliação deve registrar:

```yaml
candidate_id: AP-NNNN
requested_permanence: ""
evaluated_at: YYYY-MM-DD
evaluator: ""
criteria:
  simplicity: { result: pass, evidence: [] }
  durability: { result: pass, evidence: [] }
  fundamentality: { result: pass, evidence: [] }
  generativity: { result: pass, evidence: [] }
  agnosticism: { result: pass, evidence: [] }
outcome: eligible_for_promotion
risks: []
recommendation: ""
```

## Responsabilidades

- O autor fornece evidências e alternativas honestas.
- O avaliador separa preferência de critério arquitetural.
- O CEA interrompe promoções sem avaliação suficiente.
- O CSA revisa implicações estruturais.
- O Conselho decide a promoção.

## Evolução

- 2026-07-21: versão 1.0 implementada no milestone V1-M01.
