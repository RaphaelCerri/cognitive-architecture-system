# Cognitive Architecture System

> **English** · [Português](README.pt-BR.md)

A governed cognitive architecture for turning conversations, decisions, and research into
versioned institutional memory that humans and AI agents can inspect and reuse.

Its central rule is simple: **no agent approves its own work, and no conversation, person, model,
or runtime is a source of truth by itself**. The repository is the institutional record.

This is not a production framework. It is an evolving architecture and governance system with
executable experiments that test risky assumptions before they become canonical design.

## Verifiable state

| Indicator | Current state |
|---|---:|
| Markdown documents | 276 |
| Code | 42 TypeScript and 34 JavaScript files |
| Experiments | 7 executable and 1 documented blueprint |
| Local test result | **248 passed, 0 failed** |
| Architecture decisions | 13 ADRs and 13 authority directives |
| Proposals and research programs | 22 APs and 10 ARPs |

Counts were verified on 2026-08-21 and exclude dependencies, `.git/`, and Graphify output.

## What is demonstrated

| Capability | Executable evidence | Result |
|---|---|---:|
| Formal ontology and knowledge contracts | [Ontology framing](experiments/ontology-framing/) | 35 tests |
| Bias migration and fairness assurance | [Fairness experiment](experiments/bias-migration-fairness-assurance/) | 14 tests |
| Governed role separation | [Orchestration guard](experiments/governed-role-orchestration/) | 23 tests |
| Cross-session institutional memory | [Memory adapter](experiments/clite-memory-adapter-feasibility/) | 54 tests |
| Commands, events, replay, and state transitions | [Domain extraction](experiments/clite-domain-extraction-feasibility/) | 74 tests |
| Failure, retry, cancellation, and recovery states | [Stage 3 vertical slice](experiments/clite-stage3-vertical-slice/) | 43 tests |
| Maturity-aware requirements elicitation | [Interaction protocol](experiments/interaction-protocol/) | 5 tests |

### Formal ontology and contracts

The ontology experiment separates three layers that AI systems frequently conflate:

```text
Constitutional Metamodel
  identity, authority, provenance, change, extension
                    ↓ governs
System Ontology
  concepts, relations, constraints, state dimensions
                    ↓ represented as
Representations
  Markdown/YAML, JSON, graphs, indexes, runtime views
```

The executable kernel validates typed knowledge envelopes, provenance, declared and derived
relations, compatibility aliases, and non-destructive migration proposals. A read-only YAML 1.2
parser runs against the real repository corpus with bounded aliases, duplicate-key rejection,
unknown-field preservation, and negative fixtures.

### Fairness assurance beyond aggregate averages

The fairness experiment compares harm surfaces before and after a cognitive change. It classifies
outcomes as `preserved`, `reduced`, `amplified`, or `displaced`. `Displaced` captures a critical
failure mode: the aggregate metric improves while harm moves to another subgroup or dimension.

Scenarios cover omission bias, sensitive segmentation without authority, self-approval, memory
compression that moves uncertainty, and improvements limited to the dominant source.

### Governed roles and authority

The model separates three responsibilities: **CVO** defines vision and accepts outcomes, **CSA**
designs and reviews architecture, and **CEA** executes implementation. The orchestration guard
validates authority envelopes, session identity, role transitions, and event-chain integrity. It
blocks executor self-acceptance, CVO impersonation, false review independence, post-authorization
directive changes, and memory application before acceptance.

This is a local separation-of-duties proof, not authenticated multi-agent infrastructure.

### Institutional memory and deterministic domain state

The memory adapter distinguishes canonical, derived, and temporary information; detects staleness
conflicts; requires human decisions for contradictions; and emits update proposals without writing
canonical memory automatically. The extracted domain uses commands, events, guards, deterministic
replay, persistence adapters, lineage, cancellation, failure, and retry across two synthetic domains.

## Repository structure

```text
foundation/      principles, governance, protocols, directives, ADRs
architecture/    evolving architecture views
knowledge/       proposals, assessments, research, evidence
milestones/      implementation handoffs and execution trail
experiments/     executable proofs and synthetic fixtures
roadmap/         ordered V1 validation plan
scripts/         backup and operational continuity
.features/       delivered-capability registry
```

The bootstrap is runtime-agnostic. Codex, Claude Code, or another executor must reconstruct
authority, state, and return contracts from the same versioned artifacts.

## Run an experiment

Requirements: Node.js with native test-runner support and npm.

```powershell
cd experiments/ontology-framing
npm install
npm test
```

Each experiment owns its dependencies and scripts. See the complete
[experiment matrix](experiments/EXPERIMENTS.md).

## Explicit boundaries

The repository demonstrates cognitive-artifact engineering, agent governance, knowledge modeling,
Responsible AI, and experimental validation. It does **not** currently provide:

- an installable package or public API;
- an autonomous agent runtime;
- real authentication or credential isolation between roles;
- vector RAG, embeddings, or hybrid retrieval;
- production cost, token, and latency observability;
- a production-readiness guarantee.

The boundary is part of the design. Specifications are never presented as delivered software.

## Recommended entry points

1. [What the system does](O-QUE-O-SISTEMA-FAZ.md)
2. [Agent Start Here](AGENT_START_HERE.md)
3. [Foundation](foundation/README.md)
4. [Experiment matrix](experiments/EXPERIMENTS.md)
5. [Ontology framing](experiments/ontology-framing/README.md)
6. [System audit and gap register](knowledge/research/evidence/system-audit-gap-register-and-portfolio.md)
7. [V1 roadmap](roadmap/V1.md)

## AI assistance

Raphael Caveagna directs the architecture, governance model, acceptance criteria, and experiment
boundaries with AI-assisted implementation and review. Claims in this README are limited to
versioned artifacts and executable tests.
