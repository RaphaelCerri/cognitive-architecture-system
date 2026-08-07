---
schema_version: "0.1.0-experimental"
id: ARP-0010-E05
kind: knowledge
knowledge_type: research_evidence
title: "V1-M03 Contract Parser and Corpus Experiment"
status: reviewed
created_at: 2026-08-07
reviewed_at: 2026-08-07
review_outcome: accepted_as_bounded_experimental_evidence_only
acceptance_scope: parser_corpus_profile_diagnostics_only
review_basis: ASSESS-0005
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0010
  - type: tests
    target: V1-M03
  - type: authorized_by
    target: AD-013
  - type: follows
    target: ARP-0010-E04
  - type: reviewed_by
    target: ASSESS-0005
---

# E05: experimento de parser e corpus

## Resultado

O experimento consumiu arquivos Markdown com frontmatter usando `yaml@2.8.1`
em YAML 1.2 core, rejeitou chaves duplicadas e custom tags, limitou expansão de
aliases a 50 e nunca serializou ou reescreveu uma fonte.

O snapshot executado possui 248 arquivos nos roots `foundation`, `knowledge`,
`architecture`, `milestones` e `roadmap`:

| Categoria | Quantidade |
|---|---:|
| Knowledge Object candidate | 205 |
| document with metadata, não KO | 39 |
| Markdown comum | 4 |
| frontmatter não parseável | 0 |

As categorias são totais e disjuntas. `.git`, `projects`, `.obsidian` e
`graphify-out` não entram no corpus. Symlinks são ignorados e realpaths precisam
permanecer dentro do repositório.

## Profiles candidatos

| Profile | Candidates | Observação |
|---|---:|---|
| base Knowledge Object | 205 | 4 artifacts legados sem `created_at` |
| governed decision | 36 | nenhum gap de authority declarada |
| proposal and research | 34 | snapshot de labels declarados |
| evidence and handoff | 128 | snapshot de labels declarados |

Sete candidates permaneceram `unclassified_candidate_profile` e nenhum recebeu
duas especializações. Isso é resultado diagnóstico, não coverage gate, registry
ou confirmação de que os quatro profiles sejam corretos ou completos.

## Preservação e segurança

- hashes SHA-256 antes/depois: zero drift;
- nested maps/lists, multiline scalars, valores quoted e campos desconhecidos
  sobrevivem na view lida;
- BOM, LF/CRLF e `---` no body possuem testes;
- duplicate keys, custom tags, alias exhaustion, frontmatter malformado e
  prototype-shaped keys possuem testes adversariais;
- `npm audit`: zero vulnerabilidades após lock de `yaml@2.8.1`.

## Limitações

Não valida authority real, semântica do corpo, integridade referencial ou schema.
Não executa round-trip, migração, autoria humana, Type Registry, Compiler ou
Runtime. G2/G3/G5/G6/G7 não recebem `pass` automaticamente por esta evidência.

A criação posterior de ASSESS-0005 adiciona um artifact ao corpus vivo; por
isso, a demo pós-revisão reporta 249 arquivos e 206 KO candidates. As contagens
são snapshots diagnósticos, não invariantes ou gates.
