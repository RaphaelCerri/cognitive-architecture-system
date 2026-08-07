---
schema_version: 0.1.0-experimental
id: ARP-0010-E01
kind: knowledge
knowledge_type: research_evidence
title: Formal System Ontology and Constitutional Metamodel Framing
status: experimental
version: "0.1"
created_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0010
  - type: related_to
    target: AP-0006
  - type: authorized_by
    target: AD-007
  - type: refines
    target: ASSESS-0001
---

# AP-0006: framing do metamodelo e da ontologia

## Resultado

AP-0006 deve permanecer experimental, mas a incerteza central de ASSESS-0001
foi reduzida: **constitutional metamodel e system ontology são responsabilidades
separadas**, conectadas a uma terceira camada de representações.

```text
Constitutional Metamodel
  critérios de identidade, autoridade, proveniência, mudança e extensão
                    ↓ governa
System Ontology
  vocabulário, relações, constraints e dimensões de estado versionadas
                    ↓ é codificada/derivada em
Representations
  Markdown/YAML, JSON, grafos, índices, banco e views de runtime
```

## Evidência do repositório

O inventário executado em 2026-08-07 encontrou:

- 225 arquivos Markdown/YAML nas áreas governadas;
- 217 artifacts com frontmatter;
- 182 identities declaradas e nenhuma duplicada;
- 18 rótulos distintos de `knowledge_type`;
- 72 tipos de relação;
- drift material entre `architecture_directive` e
  `architectural_directive`;
- proliferação de relações sem registry, incluindo muitos termos usados uma
  única vez.

O inventário é derivado e não altera fontes. Os números podem mudar conforme o
repositório evolui; sua função é provar o problema, não virar Source of Truth.

## Fronteiras

### Constitutional Metamodel

Decide quais condições qualquer ontologia precisa respeitar. Não enumera
Capabilities, Agents ou tipos documentais; não define paths ou sintaxe.

### System Ontology

Define termos do domínio e suas relações dentro das regras constitucionais. É
versionada e extensível. Não ganha autoridade por ser serializada ou compilada.

### Representations

Materializam ou derivam conhecimento. Markdown/YAML permanece canônico para
Knowledge Objects conforme ADR-0001; JSON, grafos, índices e bancos continuam
representações ou views conforme sua autoridade declarada.

## Axiomas candidatos

O experimento codifica 12 axiomas, todos ligados a fontes existentes:

1. identidade estável e artifact autoritativo declarado;
2. representação e localização física não são ontologia;
3. relações explícitas prevalecem;
4. derivações são atribuíveis, reconstruíveis e não mutam o canon;
5. propor, aprovar, executar e aceitar são atos distintos;
6. autoridade é explícita e delimitada;
7. proveniência e história superseded permanecem;
8. dimensões independentes de estado não colapsam em um `status` genérico;
9. extensões adicionam namespace sem redefinir semântica governante;
10. significado independe de modelo, runtime, fornecedor e linguagem;
11. proposta gerada não se autoaplica;
12. ausência de evidência permanece explícita.

São candidatos derivados, não novos princípios canônicos.

## Competency questions

As 12 perguntas executáveis cobrem identidade entre representações, conflito de
autoridade, relação declarada/inferida, separação de atos, supersession,
dimensões de estado, ontology leakage físico, limites do Compiler, extensões,
agnosticismo, ausência de evidência e update proposals. Todas possuem resposta
candidata e cobertura explícita por axioma.

## Alternativas

### A. Componente combinado e canônico

Rejeitada nesta fase. Repete o problema de simplicidade identificado por
ASSESS-0001 e mistura regras constitucionais com vocabulário evolutivo.

### B. Três camadas separadas

Recomendada experimentalmente. Mantém invariantes duráveis acima de vocabulário
versionado e impede que formatos adquiram semântica por acidente.

### C. Somente uma ontologia de tipos

Insuficiente. Não responde autoridade, proveniência, mudança nem diferença entre
canon e views derivadas.

### D. Nenhuma ontologia formal

Rejeitada. O drift observado continuaria crescendo e contratos futuros seriam
estabilizados sobre vocabulário implícito.

## Validação

`experiments/ontology-framing/` executou sete testes:

- fronteira das três camadas;
- proveniência de axiomas;
- resposta e cobertura das competency questions;
- extensão namespaced aceita;
- shadowing de conceito governante rejeitado;
- canonicality indevida e vendor leakage rejeitados;
- inventário real sem mutação das fontes.

## Recomendação

Resultado atual: `remain_experimental`.

Não repetir o ADF para promoção ainda. A próxima evidência necessária é um
**kernel ontológico mínimo experimental** aplicado a um consumidor real e
reversível, preferencialmente o futuro contrato de Knowledge Objects da V1-M03.
Esse teste deve demonstrar redução de ambiguidade, estratégia de migração dos
rótulos existentes e ausência de complexidade líquida antes de nova avaliação.
