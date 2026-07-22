---
schema_version: 0.1.0-experimental
id: ARP-0009-E23
kind: knowledge
knowledge_type: research_evidence
title: C-lite Content, Accessibility, Security and AI-native Requirements
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0007
  - type: related_to
    target: ARP-0008
---

# C-lite Content, Accessibility, Security and AI-native Requirements

## Natureza and source boundary

Requirement baseline, not final copy, glossary, Visual Direction, Design Language, technology selection, security control design or accessibility conformance report. Future evaluation methods are named conceptually; none were executed.

Normative/institutional provenance remains in prior ARP-0009 evidence. Accessibility requirements derive from WCAG 2.2/WAI research but applicability/conformance requires future defined product and evaluation. Security requirements are experience-facing candidates related to ARP-0007, not replacements for threat modeling or security architecture.

## Content principles and candidate messages

| Context | Principle | Candidate meaning, not final UI copy |
|---|---|---|
| proposition | value before ontology | “Transforme uma ideia em trabalho estruturado, revisável e governado.” |
| empty/first use | offer meaningful action and sample explanation | explain “Tenho uma ideia”, what happens, what will not happen without approval |
| discovery question | explain why/optional/unknown | show decision affected; allow “não sei” without fabrication |
| assumption | distinguish inference and source | “Assumimos X porque Y; confirme, corrija ou marque como incerto.” |
| contradiction | neutral, traceable conflict | show both claims/sources and downstream impact |
| plan summary | scope, outputs, excluded work, risk/unknown/authority | avoid “magic plan” or hidden artifacts |
| execution status | actual state/activity and uncertainty | never invent percentage or imply active when queued/awaiting input |
| error/failure | what happened, known effects and safe next actions | avoid blame, raw-only error or false reassurance |
| evidence | claim/scope/source/version/freshness/limits | distinguish source, observation and decision |
| approval | action, authority, effect, reversibility and alternative | reject vague “continue?” |
| review | artifact/evidence/limits + accept/revise/reject consequences | acceptance not certification |
| return | current state, changes, pending/blocked and next action | timestamps/context and refresh when stale |

Internal term != interface label != explanation != help text. Content must remain within journey context and support progressive disclosure.

## Terminology review

| Internal term | Necessity in C-lite | Plain-language/interface candidate | Leakage risk/handling |
|---|---|---|---|
| Project Memory | concept necessary | “Histórico e contexto do projeto” initially | explain canonical-memory role contextually; do not expose storage layout |
| Agent | only when executor identity matters | “Agente de pesquisa” + what it can do | avoid anthropomorphic authority |
| Skill | not required in primary journey | hide or explain as “procedimento/capacidade disponível” | do not equate with permission/tool |
| Capability | architecture detail | plain-language ability, if needed | avoid ontology taxonomy in navigation |
| Artifact | needed for governed output | “Documento/resultado” with type detail | do not force generic artifact jargon |
| Execution | needed to distinguish work instance | “Execução de pesquisa” | separate from plan/task/result |
| Evidence | needed | “Evidências e fontes” with scope/limits | avoid implying proof/certification |
| Decision | needed | “Decisão registrada” | distinguish proposal/recommendation/approval |
| Handoff | audit/detail only | “Resumo para continuidade/revisão” | not primary user mental model by default |
| Council | only at authority point | “Conselho responsável pela aprovação” | explain scope; avoid visual authoritarianism |
| CSA | not primary label | “Revisor de arquitetura” | acronym in audit/detail only |
| CEA/Codex | executor identity where relevant | “Agente/assistente responsável” with provenance | identity does not imply authority |

No complete glossary is stabilized. Comprehension remains a Stage 2 research question.

## Ontology leakage review

| Leakage candidate | Baseline finding | Required mitigation |
|---|---|---|
| repository folders/paths as IA | blocked for ordinary use | task/project navigation; path only in technical detail/audit |
| Knowledge Types as menu | unsupported | include only information needed by C-lite tasks |
| IDs like ARP/IHR as labels | technical leakage | human title first; ID secondary when audit relevant |
| document status as execution status | semantic collision | separate state families and sources of truth |
| research terms as user language | comprehension unknown | plain-language alternative/context help |
| Capability/Skill/Tool collapsed | conflicts with ARP-0008 | expose distinction only when task requires it |
| runtime Agent/Execution terms collapsed | authority/history risk | identify blueprint/configured executor/work instance separately |
| governance role names as product hierarchy | intimidation/confusion | explain decision responsibility and scope |
| graph mirroring ontology | forces internal model | task-relevant relation views plus accessible alternatives |

Review result: no ontology change required; Stage 2 must test terminology/mental model rather than encode internal taxonomy in layout.

## Accessibility baseline with future methods

| ID | Requirement candidate | Future evaluation method |
|---|---|---|
| CL-AX-01 | semantic headings/landmarks/regions and object/status relationships | structure inspection + screen-reader review |
| CL-AX-02 | all C-lite tasks keyboard-complete with visible focus | full journey keyboard task |
| CL-AX-03 | focus moves/restores logically across route, dialog, async update and error | manual focus-state review |
| CL-AX-04 | forms expose label, purpose, instructions, optional/unknown and errors | semantic/manual + user task |
| CL-AX-05 | errors/contradictions summarized, linked and recoverable without data loss | failure-path task review |
| CL-AX-06 | queue/run/input/failure/completion/approval changes announced proportionally | screen-reader live-status review |
| CL-AX-07 | streaming can be paused/navigated and committed content distinguished | AT/manual interaction review |
| CL-AX-08 | timeout and long work preserve input, warn and allow extension where applicable | timeout/recovery scenario |
| CL-AX-09 | 400% zoom/reflow/text spacing do not block required tasks | viewport/manual review |
| CL-AX-10 | contrast/forced colors preserve status, focus and actions | visual/system-color inspection |
| CL-AX-11 | reduced motion disables non-essential movement without hiding change | preference/manual review |
| CL-AX-12 | language and terminology remain clear; changes in language identified | content/semantics review |
| CL-AX-13 | graph-required information/action has equivalent non-visual route | equivalent-task keyboard/AT review |

No detected violation != accessible experience. Supported browser/AT matrix, applicable WCAG scope and participant plan remain future decisions; no conformance claim.

## Security baseline

- trusted authority validates every protected action; hidden/disabled UI and client routing are not authorization;
- approval is bound to actor, action, inputs, scope/version, expiry and intended effects;
- execution/tool/agent identity and delegated authority are inspectable;
- reference, prompt and generated content are untrusted and cannot redefine higher-authority instructions;
- rendering/output handling, external links, file references/downloads and tool previews require safe boundaries later;
- sensitive project/evidence/context data follows least privilege and avoids leakage in search, graph, history and errors;
- session/shared-device behavior, timeout, reauthentication and stale permissions are included in scenarios;
- pause/cancel/retry/resume prevent duplicate/unsafe effects and retain audit history;
- audit distinguishes request, approval, execution, result, review and later mutation;
- abuse cases include authority spoofing, forged evidence, prompt injection, exfiltration, malicious reference and unsafe retry.

No control, scanner, authorization model or audit was implemented. ARP-0007 owns security architecture/guardrail assurance.

## Privacy baseline

- collect only data required for the declared project/research purpose;
- explain future data use/visibility before sensitive idea/reference submission;
- separate operational/audit logs from user-facing Project Memory and define access/retention later;
- permission-filter search, graph, recent items, notifications and direct links;
- support deletion/retention/legal-hold decisions without promising unsupported erasure;
- avoid exposing accessibility preferences or inferred traits beyond need;
- protect shared-device/session residue and cached sensitive content;
- analytics/monitoring remain absent and require purpose, minimization, consent/legal basis, retention and access review;
- future user research requires consent, accommodation, secure recordings/notes and disposal plan.

## AI-native baseline

- show plan and material assumptions before effects;
- expose agent/model identity/version when decision-relevant, without implying personhood or authority;
- connect claims to sources/provenance and mark unsupported/unknown content;
- preview tool/sensitive actions with inputs, scope, expected effects and approval need;
- distinguish streamed draft from committed artifact and partial output from completion;
- provide cancel/retry/resume/human takeover with consequences and nondeterminism warning;
- expose memory/context included, user controls and material limits;
- preserve failure explanation, checkpoints, evidence and prior attempts;
- generated artifacts require human review and cannot be accepted for visual plausibility alone;
- comparison/retry does not promise identical results; version/context are retained.

## Visual Direction input brief

Candidate qualities: trustworthy, technically capable, calm, transparent, structured, professionally experimental, dense only when task requires, progressively disclosed, not visually authoritarian and not playful without purpose. Preferences remain hypotheses. Constraints: clarity/authority/status must not rely on aesthetic intensity; evidence and warnings require hierarchy without alarm fatigue. No moodboard, palette, token or UI generated.

## Design Language requirements

Future language must support hierarchy and density ranges; readable typography/spacing; semantic color plus redundant cues; distinct proposal/approval/execution/evidence states; focus/error/warning/success; restrained elevation/motion; streaming/status; documents/evidence/lineage; approval risk; graph/data alternatives; themes/forced colors/reduced motion; responsive task continuity. No token system or component contract created.

## Technology-needs baseline

Capabilities only: structured/adaptive forms; accessible dialog/overlay patterns; Markdown/document and source rendering; evidence/lineage navigation; long-running/streaming status; search/filter/recent/activity/history; relationship/graph view with alternative; state visualization; keyboard/focus/status support; future automated/manual testing and observability hooks. No technology, library or catalog item mapped.

## Frontend Architecture readiness inputs

Future decision must address rendering by content/task need; route/deep-link/project context; server/client/domain authority; separate state owners; versioned data/command/event contracts; durable long-running job identity; permission-filtered search/Memory access; untrusted content rendering; accessibility announcements/focus; privacy-bounded observability; performance for dense documents/streams; complete-process tests; deployment/resilience/rollback. No rendering model, architecture option, framework or folder structure selected.
