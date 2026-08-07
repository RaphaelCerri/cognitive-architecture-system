---
schema_version: 0.1.0-experimental
id: ARP-0010-E03
kind: knowledge
knowledge_type: research_evidence
title: Knowledge Object Envelope Candidate and Authorship Evaluation
status: experimental
version: "0.1"
created_at: 2026-08-07
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0010
  - type: authorized_by
    target: AD-009
  - type: informs
    target: AP-0003
---

# Envelope candidato de Knowledge Object

## Resultado

O kernel de ARP-0010-E02 foi transformado em um contrato candidato de autoria,
com validação explicável e sem iniciar formalmente V1-M03.

## Campos-base candidatos

```text
schema_version · id · kind · knowledge_type
title · status · language · created_at
```

Esses oito campos definem somente o envelope. Perfis governados, como ADR,
diretiva, princípio, protocolo e policy, também exigem claim explícita de
autoridade. Campos desconhecidos são preservados.

## Critérios de autoria

1. ID é semântico e estável, nunca derivado de path ou título.
2. Tipo usa vocabulário compatível ou extensão namespaced.
3. Authority claim corresponde ao perfil; acesso a ferramenta não é autoridade.
4. Proveniência de criação e relações intencionais são declaradas.
5. `status` é resumo compatível; dimensões independentes permanecem separadas.
6. Corpo humano não vazio compõe o objeto junto com o frontmatter.
7. Campos e predicates desconhecidos são preservados nas views.
8. Mudança gerada permanece proposta até revisão competente.

## Exemplos executáveis

Cinco fixtures demonstram extensão namespaced válida, pesquisa multidimensional
válida, decisão inválida sem autoridade, shadowing inválido e proposta inválida
sem `created_at`. Todo erro contém código, campo, mensagem e correção sugerida.

## Compatibilidade final

Depois de incluir os artifacts da própria slice:

- 228 Markdown avaliados;
- 182 válidos;
- 46 inválidos;
- cobertura de 79,8%;
- 12 válidos com warning de dimensões de estado;
- um warning de alias de compatibilidade.

Os principais erros não significam que todos os arquivos devam migrar:

- 35 documentos não possuem `id`, `kind` ou `knowledge_type`, em sua maioria
  documentação comum e índices que não precisam ser Knowledge Objects;
- seis artifacts identificados não possuem `created_at`;
- quatro não têm frontmatter;
- quatro não possuem `schema_version` ou `title`;
- um não declara `language` e um não declara `status`.

## Dogfooding

AD-009, esta evidência e IHR-0040 satisfazem o próprio envelope. A validação não
concede autoridade; apenas demonstra que a regra de autoria é aplicável ao
trabalho que a introduziu.

## Limitações

- validação estrutural não interpreta todas as claims do corpo;
- lista de tipos compatíveis é snapshot observado, não Type Registry;
- authority fields diferentes ainda não são equivalentes;
- não houve sessão humana cronometrada de autoria;
- compatibilidade não decide quais artifacts antigos devem migrar.

## Recomendação

Aceitar como input experimental para o planejamento da V1-M03. Antes de
estabilizar schema, executar uma slice de planejamento que delimite profiles,
estratégia de compatibilidade e critérios de aceite. Não migrar artifacts nem
iniciar Type Registry nesta etapa.
