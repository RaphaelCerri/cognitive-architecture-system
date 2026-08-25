---
title: "Experiment: AP-0006 Ontology Framing"
status: experimental
canonicality: research_candidate_not_canon
created_at: 2026-08-07
authority: AD-007
language: en
---

# AP-0006 Executable Ontology Framing

> **English** · [Português](README.pt-BR.md)

An executable experiment that separates the constitutional metamodel, system ontology, and their
representations.

```text
Constitutional Metamodel
  identity, authority, provenance, change, extension
                    -> governs
System Ontology
  concepts, relations, constraints, state dimensions
                    -> represented as
Representations
  Markdown/YAML, JSON, graphs, indexes, runtime views
```

## Contents

- A minimal ontology kernel and typed knowledge-object envelopes.
- Declared and derived relations with explicit provenance.
- Compatibility aliases and non-destructive migration proposals.
- Rules preventing extensions from shadowing governing concepts.
- A read-only YAML 1.2 parser exercised against the repository corpus.
- Duplicate-key rejection, bounded alias expansion, and unknown-field preservation.
- Negative fixtures for missing authority, missing provenance, and invalid extensions.

## Run

```bash
npm install
npm test
```

## Boundaries

The experiment is a research candidate, not the canonical ontology, compiler, runtime schema, or
migration authority. It measures compatibility without rewriting source documents.
