---
title: "Experimento: AP-0006 Ontology Framing"
status: experimental
canonicality: research_candidate_not_canon
created_at: 2026-08-07
authority: AD-007
language: pt-BR
---

# AP-0006: framing executável

Este experimento testa a separação recomendada por ASSESS-0001:

```text
Constitutional Metamodel
  regras de identidade, autoridade, proveniência, mudança e extensão
                 ↓ governa
System Ontology
  vocabulário versionado, relações, constraints e dimensões de estado
                 ↓ pode ser representada como
Representations
  Markdown/YAML, JSON, grafos, índices e views de runtime
```

Nenhuma dessas estruturas é promovida a canon por existir neste diretório.

## Conteúdo

- `model.js`: três camadas, 13 conceitos candidatos, 12 axiomas provenientes de
  decisões existentes e 12 competency questions respondidas;
- `kernel.js`: kernel mínimo com seis dimensões, alias não destrutivo e famílias
  derivadas de relações;
- `knowledge-object-contract.js`: consumidor candidato da V1-M03 que normaliza
  uma view sem substituir o artifact fonte;
- `migration.js`: gera somente proposals de migração;
- `evaluate.js`: mede cobertura e ambiguidade residual sobre artifacts reais;
- `envelope.js`: especificação candidata de autoria com campos mínimos, regras
  condicionais e erros corrigíveis;
- `authoring-criteria.js`: oito critérios humanos de autoria;
- `fixtures/`: exemplos Markdown/YAML válidos e inválidos;
- `evaluate-envelope.js`: mede compatibilidade do candidato no repositório.
- `inventory.js`: inventário derivado do vocabulário que já existe no repo;
- `yaml-frontmatter-reader.js`: parser YAML 1.2 real, limitado e read-only;
- `corpus-classifier.js`: classifica o corpus em quatro categorias disjuntas;
- `contract-profile-candidates.js`: avalia profiles composicionais sem registry;
- `evaluate-contract-experiment.js`: prova invariantes e ausência de mutação;
- `model.test.js`: valida fronteiras, proveniência, respostas, extensibilidade,
  agnosticismo e ausência de promoção silenciosa.

## Execução

```powershell
npm test
npm run inventory
npm run evaluate
npm run examples
npm run evaluate:envelope
npm run experiment:v1m03-contract
```

## Limites

- não cria Core Types;
- não estabiliza enums ou schemas;
- não corrige automaticamente drift encontrado;
- não declara que os conceitos candidatos são completos;
- não transforma paths físicos em semântica;
- não inicia Compiler, Type Registry, Orchestrator ou Runtime Adapter.
- o experimento E05 não transforma parsing bem-sucedido em schema, authority ou
  validade semântica.
