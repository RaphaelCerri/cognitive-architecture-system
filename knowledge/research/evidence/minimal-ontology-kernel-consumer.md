---
schema_version: 0.1.0-experimental
id: ARP-0010-E02
kind: knowledge
knowledge_type: research_evidence
title: Minimal Ontology Kernel and Knowledge Object Consumer
status: experimental
version: "0.1"
created_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0010
  - type: authorized_by
    target: AD-008
  - type: informs
    target: AP-0003
  - type: evaluates
    target: AP-0006
---

# Kernel ontológico mínimo e consumidor de Knowledge Object

## Objetivo

Testar se o framing de ARP-0010-E01 reduz ambiguidade quando consumido por um
contrato candidato real da V1-M03, sem migrar ou canonizar o vocabulário atual.

## Kernel mínimo

O candidato cobre seis dimensões:

1. identidade;
2. classificação;
3. autoridade;
4. proveniência;
5. estado;
6. representação.

O kernel não enumera todos os tipos existentes. Ele fornece apenas o envelope,
um alias de compatibilidade comprovado e seis famílias derivadas de relações.

## Consumo real

O contrato candidato leu todos os arquivos Markdown das áreas governadas:

- 225 arquivos avaliados;
- 186 compatíveis com o envelope mínimo;
- 39 incompatíveis, dos quais 35 são documentos sem identidade/classificação de
  Knowledge Object e quatro não possuem frontmatter ou schema completo;
- cobertura de 82,7%;
- 142 dos 186 artifacts compatíveis possuem alguma claim explícita de autoridade;
- 670 instâncias de relação declarada;
- 527 classificadas em famílias sem substituir o predicate original;
- cobertura de famílias de relação de 78,7%;
- 49 predicates distintos continuam `unclassified`.

## Alias e migração

O único alias comprovado nesta slice é:

```text
architectural_directive → architecture_directive
```

Ele ocorre em `AD-006`. O consumidor preserva simultaneamente:

- valor declarado: `architectural_directive`;
- valor normalizado na view: `architecture_directive`;
- disposition: `compatibility_alias`;
- fonte original intacta.

O mecanismo gerou uma `ontology_alias_migration_proposal` com
`apply_automatically: false`. Nenhum frontmatter foi reescrito.

## Ambiguidade reduzida

- uma divergência de tipo passa a ser explicável sem apagar o valor histórico;
- relações frequentes podem ser consultadas por seis famílias sem perder o
  predicate declarado;
- path deixa de ser confundido com identidade semântica;
- authority claim ausente resulta em `unknown`, não em autoridade inferida;
- estados dimensionais permanecem separados de `status`.

## Ambiguidade residual

- 49 predicates ainda não possuem família;
- claims de `author`, `owner` e `decision_authority` ainda exigem interpretação
  da governança, não equivalência automática;
- compatibilidade estrutural não prova validade semântica do corpo Markdown;
- a cobertura não mede custo cognitivo de autores nem manutenção futura;
- um alias validado não constitui estratégia completa de migração.

## Validação

Treze testes passaram. Seis são específicos do kernel e provam: permanência
experimental, alias não destrutivo, famílias derivadas, consumo de ADR real,
proposal-only sem alteração de fonte e avaliação integral do repositório.

## Resultado

O kernel é útil como **referência experimental** para desenhar V1-M03, mas não
está pronto para promoção canônica. Ele fornece evidência generativa real e uma
base mensurável para reduzir o escopo do futuro Type Registry.
