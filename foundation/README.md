# Foundation

> **English** · [Português](README.pt-BR.md)

Foundation preserves the documents that govern architecture before implementation decisions are
made.

Project Memory is an architectural responsibility, not a directory. Permanent knowledge must be
stored in the semantically appropriate versioned artifact. A future physical memory layer must be
introduced through an Architectural Proposal rather than assumed by the current folder structure.

In V1, foundation documents are experimental specializations of `Knowledge`. A future ontology may
change their final classification.

## Current structure

- [`manifestos/`](manifestos/): accepted philosophical commitments.
- [`governance/`](governance/): authority, roles, and decision processes.
- [`principles/`](principles/): constraints that govern all architectural decisions.
- [`protocols/`](protocols/): mandatory behavior derived from principles.
- [`directives/`](directives/): authorized implementation direction.
- [`decisions/`](decisions/): accepted Architectural Decision Records.

When documents disagree, canonical status, authority, and explicit supersession determine which
artifact governs. Recency alone does not create authority.
