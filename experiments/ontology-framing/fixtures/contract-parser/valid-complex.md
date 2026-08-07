---
schema_version: "0.1.0-experimental"
id: TEST-COMPLEX
kind: knowledge
knowledge_type: research_evidence
title: "Quoted: title"
status: experimental
language: pt-BR
created_at: 2026-08-07
owner: Test
unknown_nested:
  flags: [true, false]
  note: |
    linha um
    linha dois
relations:
  - type: evidence_for
    target: TEST-ROOT
---

# Body

---

O delimitador no body não pertence ao frontmatter.
