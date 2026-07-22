---
schema_version: 0.1.0-experimental
id: ARP-0009-E18
kind: knowledge
knowledge_type: research_evidence
title: Benchmark Experience and Flow Specification
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0008
---

# Benchmark Experience and Flow Specification

## Natureza

Specification conceitual candidata para C-lite. Não contém screen, wireframe, menu final, UI, schema, dataset ou implementation. Estruturas abaixo servem para testar coerência e coverage em futura autorização.

## IA candidates

| Modelo | Força | Risco no benchmark |
|---|---|---|
| project-centered | mantém context/memory/decisions juntos | global work e cross-project evidence podem sumir |
| object-centered | escala para artifacts/agents/executions | força usuário a aprender ontology |
| task-centered | orienta first use e action | history/lineage podem fragmentar |
| lifecycle-centered | mostra progression/authority | sugere linearidade falsa |
| search/command-first | eficiente para experts | baixa discoverability e recall burden |
| hybrid | project context + task entry + object/search access | maior navigation complexity |

**[Hipótese]** C-lite deve testar um hybrid mínimo: project-centered context, task-oriented “Tenho uma ideia”, contextual object links, global search e predictable non-language navigation. Não define menu.

Candidate inventory: Home, Projects, Idea Intake, Project Memory, Research, Plans, Executions, Artifacts, Decisions, Agents and Skills, Evidence, Reviews e Settings. Apenas itens exigidos pelas journeys C-lite entram em Stage 1.

## Navigation requirements

Comparar project sidebar, global top navigation, contextual navigation, lifecycle cues, activity feed, direct object links, search, command palette e graph. Avaliar orientation, location/current project, pending action, scale, beginner/expert access, keyboard, screen reader, mobile transformation e density. Natural language é alternativa, nunca único caminho previsível.

## Candidate journeys

| Journey | Start → completion | C-lite |
|---|---|---|
| A First use | proposition → idea → questions → assumptions → project | required |
| B Governed planning | plan/artifacts/risks → revise → approve/reject | required |
| C Long-running execution | authorized task → progress/input/failure → retry/resume → completion | required, one research execution |
| D Evidence and review | output → sources/evidence/findings → accept/revise/reject → memory | required |
| E Return | re-entry → changes/pending decisions → context → resume | required |

## Task-flow contract candidate

Cada flow documental deverá registrar actor, goal/trigger, preconditions, source requirements, candidate states, decision/authority points, happy/alternate/failure/recovery paths, completion claim e required evidence. Acceptance criterion, screen, test e evidence não são equivalentes.

### Submit idea and adaptive discovery

Free input → classify only enough to ask → show missing/contradictory information → adaptive questions → expose assumptions/unknowns → user corrects or accepts understanding → depth/risk explanation → consent to create project. Simple, critical, technical, non-technical, incomplete e contradictory inputs exigem branch candidates; attachments/references são future capability.

### Review plan and authorize execution

Open proposal → inspect objective/scope/affected artifacts/sources/risks/unknowns/cost and reversibility → request revision or reject, or approve with explicit authority → create authorized execution identity. Hidden consent, bundled permission e approval inferred from navigation são failures.

### Monitor and recover execution

Open execution → distinguish queue/running/awaiting input/approval/failure → inspect current activity, produced artifacts, evidence and blocker → pause/cancel when valid → supply input or authorize step → handle failure → retry/resume from known checkpoint or terminate → preserve partial output/provenance.

### Inspect, review and update memory

Open deliverable → follow source/evidence links → inspect limitations/findings/decision history → accept, request revision or reject → explain effect on artifact/execution/project separately → write review decision and memory entry → later return to changes and pending action.

## State inventory candidates

| Aggregate | Candidate states | Boundary warning |
|---|---|---|
| Project | draft, discovery, planning, awaiting approval, active, paused, blocked, under review, completed, archived | project completion != all artifacts accepted |
| Execution | proposed, authorized, queued, running, paused, awaiting input, awaiting approval, failed, cancelled, completed | execution complete != outcome accepted |
| Artifact | draft, generated, under review, revision requested, accepted, rejected, superseded | accepted != universally correct |
| Evidence | missing, partial, available, stale, disputed, accepted-for-decision | acceptance is claim/scope-bound |
| Decision | proposed, pending, approved, rejected, superseded | decision state != interface state |

Project State != Execution State != Artifact State != Review State != Interface State. Stage 1 must resolve naming, transitions, owners, invalid transitions and source-of-truth without promoting this list.

## Long-running work requirements

- stable execution/job identity, ordered activity and timestamps;
- queue versus running versus awaiting-human state;
- determinate progress only when denominator/measure exists; otherwise current activity and uncertainty;
- streaming content distinct from committed artifact;
- artifacts/evidence/blockers available incrementally with provenance;
- effect and availability of pause, cancel, retry, resume and terminate;
- idempotency/duplicate-action risk and late result handling;
- partial completion, failure reason, recovery options and preserved history;
- status announcements that do not overwhelm assistive-technology users.

## Approval surface requirements

Plan, scope, tool/sensitive action, exception, artifact acceptance, release and termination approvals are distinct. Each future surface must disclose requested action, reason, inputs, affected artifacts/data, risk, authority, reversibility, expected output, duration/expiry and alternatives. Approval actor and executor must be traceable; technical access is not sufficient authority.

## Agents, Skills and execution representation

Represent candidate Agent Blueprint, Runtime Agent, Skill, Capability, Tool, Workflow, Policy, Guardrail Profile, Runtime Configuration e Execution Instance with identity/version/provenance/authority links. Show what is proposed, configured, currently running and historically executed. Capability != Skill != Tool; Agent Blueprint != Runtime Agent != Execution; Skill != Permission. No editor, card model or schema is selected.

## Project Memory experience

Required future capabilities: human-readable document/object navigation; search; relations; status/owner/version; provenance/history/supersession; incoming/outgoing links; recent changes; unresolved items; decisions/evidence; stable return anchors. Physical repo paths may be disclosed for audit but cannot be prerequisite for ordinary use.

Graph is an optional relationship/impact view, never the only representation. Benchmark must compare graph with list/table/tree/text alternatives, keyboard navigation, screen-reader equivalent, filters, large-graph limits and deterministic direct links. No graph library is selected.

## Search and command experience

Candidate layers: global and project search, object filters, recent items, saved views, structured query, command palette, natural-language commands and direct navigation. Every action-like result needs preview, scope, authority and confirmation proportional to risk. Search result explains type, project, status, owner and match; language commands cannot bypass permissions.

## Terminology and onboarding

Test plain-language labels before internal terms. “Agent”, “Skill”, “Capability”, “Execution”, “Artifact”, “Evidence”, “Decision”, “Approval”, “Handoff”, “Council” and “Project Memory” require contextual help/progressive disclosure until user evidence supports familiarity. Do not stabilize vocabulary here.

Onboarding starts with value and first task, not ontology. Candidate sequence: proposition → “Tenho uma ideia” or sample context → guided discovery → explain concepts when first encountered → recoverable empty/error states. Avoid long tours and empty dashboard.

## Visual reference intake

Future intake may request references only when useful; classify observation/inference/preference/constraint; disclose IP/privacy/security risks; show how interpretation affects Design Direction; allow correction/rejection. No upload, screenshot analysis or direction generation occurs now.

## Inputs for later disciplines

- **Visual Direction:** trust, technical depth, clarity, authority, transparency, calm, density, progressive disclosure, professional/experimental balance.
- **Design Language:** hierarchy, density, typography, semantic color roles, states, shape, elevation, motion, iconography, data/graph visualization, themes, accessibility and responsive behavior; no tokens.
- **Technology needs:** complex accessible forms/dialogs, document rendering, search/command, data relationships/graph alternative, long-running status, streaming/updates, future testing; no product mapping.
- **Frontend Architecture:** rendering/routing needs, server-client authority, state/data contracts, job lifecycle, accessibility, observability, performance, testing, deployment/resilience; no option selected.

## Open gaps

Final primary user, IA subset, terminology, object ownership, state transitions, approval authorities, research-task example, content baseline, graph necessity, mobile scope and source-of-truth mappings require Stage 1 authorization and evidence.
