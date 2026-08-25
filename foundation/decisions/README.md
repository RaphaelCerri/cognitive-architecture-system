# Architectural Decision Records

> **English** · [Português](README.pt-BR.md)

ADRs preserve accepted architectural decisions, their context, consequences, and alternatives.
They do not replace proposals: an Architectural Proposal asks whether an evolution should exist;
an ADR records why a decision was made.

In V1, each ADR is represented as a specialized `Knowledge` object with
`knowledge_type: architectural_decision_record`. This does not promote ADR to a Core Type.

## States

- `proposed`: still under evaluation.
- `accepted`: currently governing.
- `deprecated`: retained for compatibility or history but no longer recommended.
- `superseded`: replaced by an explicitly related ADR.

The canonical index is the set of ADR files in this directory and their frontmatter. The Portuguese
version preserves the historical manually maintained index for local navigation.
