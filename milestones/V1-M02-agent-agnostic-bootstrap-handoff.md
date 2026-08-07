---
schema_version: 0.1.0-experimental
id: IHR-0026
kind: knowledge
knowledge_type: implementation_handoff_report
title: Agent-Agnostic Project Bootstrap and Context Portability — Foundation Slice — Handoff
status: reviewed
reviewed_at: 2026-08-07
review_outcome: approved_historical_reconciliation
acceptance_scope: experimental_checkpoint
review_basis: ASSESS-0003
version: "1.0"
created_at: 2026-07-23
milestone: V1-M02
related_commits: []
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: documents
    target: ARP-0009
  - type: related_to
    target: PMM-001
  - type: related_to
    target: GOV-001
---

# IHR-0026 — Agent-Agnostic Project Bootstrap and Context Portability (Foundation)

## 1. Contexto

O Conselho aceitou o fechamento técnico de acessibilidade (`4108d8b`) e autorizou a criação da camada institucional mínima que permite a qualquer executor compatível reconstruir contexto, autoridade, estado e formato de retorno **a partir do repositório**, sem depender de conversas anteriores — motivada pela troca real Codex → Claude Code.

```text
Repository Context != Conversation Memory
Context Snapshot != Canonical Source of Truth
Return Contract != Natural-Language Style
Portability != Permission to Ignore Governance
```

Esta diretiva registra a Council Decision correspondente (recebida via CSA em 2026-07-23); a persistência primária de decisões recentes é uma lacuna nomeada em E50.

## 2. O que foi executado

### Execution Loop Report

1. **Preflight de repositório:** estado confirmado sobre `4108d8b`; árvore mapeada; pontos de entrada existentes identificados (README "Comece aqui"); artifacts semelhantes verificados — **AP-0002 (Constitution Layer, `proposed`, "não implementar no bootstrap")** encontrado e respeitado; PMM-001 (hierarquia de autoridade), GOV-001 (papéis), IHP-001 e ADRs lidos como fontes; ARCH-001 resolvido para `architecture/system-overview.md`; progresso sim.
2. **Decisão de localização registrada antes da criação:** `AGENT_START_HERE.md` na raiz (descobribilidade é a função); demais em `foundation/bootstrap/` (+ `manifests/`), coerente com a estrutura `foundation/*` existente; README não alterado (orçamento); progresso sim.
3. **Sete artifacts de bootstrap criados** (BOOT-001..007): entry point, charter, status derivado, mapa, contrato de execução, return schema v1.0.0 e manifest piloto CM-0001 (`registered_not_authorized`); commit `docs: establish agent-agnostic project bootstrap`; progresso sim.
4. **E50:** comparação Codex×Fable por 13 dimensões (qualitativa, sem score, viés de auto-avaliação declarado) e simulação documental de portabilidade (9/9 necessidades atendidas; ~6–8k tokens de bootstrap; 6 ambiguidades/lacunas nomeadas); progresso sim.
5. **ARP-0009 e este IHR:** slice registrada com nota de fronteira para ARP-0002/0004 e AP-0002; validação; commit 2; progresso sim.

Limites: 5/8 iterações; ~55/90 min; **10/10 arquivos; 2/2 commits**; 0 iterações sem progresso.

## 3. Arquivos afetados

Created: `AGENT_START_HERE.md`; `foundation/bootstrap/PROJECT_CHARTER.md`, `PROJECT_STATUS.yaml`, `REPOSITORY_MAP.yaml`, `EXECUTION_CONTRACT.md`, `RETURN_SCHEMA.yaml`, `manifests/CM-0001-clite-directed-accessibility-session.yaml`; `knowledge/research/evidence/cross-executor-response-portability-assessment.md` (E50); este IHR. Modified: `knowledge/research/ARP-0009-…md`. Total **dez** (limite dez). C-lite (protótipo, slice executável, E29–E49 exceto referências), outros ARPs, Ontologia, ARCH-001, README, packages e `.obsidian` intactos.

## 4. Validação realizada

YAML dos quatro artifacts `.yaml` (sintaxe verificada por parser); frontmatter dos `.md`; IDs BOOT-001..007, E50 e IHR-0026 únicos; paths/links internos existentes; declarações de canonicidade presentes em todos os sete (nenhum reivindica autoridade de Council/ARP/IHR/Ontologia/ARCH-001); precedência operacional explicitamente subordinada a PMM-001; sequência de carregamento definida com required/optional e lazy loading; CM-0001 completo contra o template da diretiva e explicitamente não autorizativo; RETURN_SCHEMA extensível sem remoções; staleness e conflito tratados no EXECUTION_CONTRACT; update policy por artifact na matriz do REPOSITORY_MAP; nenhuma automação implementada; nenhum código/package; ARP seis estados preservados; IHP 12/12; UTF-8 sem mojibake; `git diff --check` limpo; staging por path; worktree final limpo; untracked preservados.

Build/lint/typecheck não se aplicam (slice documental). A simulação de portabilidade é documental e auto-executada — **não** valida portabilidade com outro modelo.

## 5. Plano versus execução

Executado no limite exato de arquivos. Ajustes deliberados: o Charter foi rebaixado de "constituição" para **orientação canônica consolidada** ao descobrir AP-0002 (evita usurpar uma proposta pendente); a precedência de conflito foi formulada como refinamento de PMM-001 em vez da ordem literal da diretiva (que não citava PMM-001); README não foi editado (1 arquivo economizado; lacuna nomeada).

## 6. Decisões tomadas pelo CEA

- raiz somente para o entry point; camada em `foundation/bootstrap/`;
- IDs BOOT-001..007 com frontmatter/headers de canonicidade por arquivo;
- PROJECT_STATUS sem timestamps voláteis: referência temporal é o checkpoint aceito; update manual pelo executor no commit de docs (nenhuma automação fingida);
- CM-0001 aponta a sessão dirigida de acessibilidade como piloto realista, com `authority.state: registered_not_authorized`;
- comparação de executores baseada em corpus real (IHR-0021/E37–E40 × IHR-0022–0025/E41–E49), com viés de auto-avaliação declarado;
- registro da slice em ARP-0009 com nota de fronteira para ARP-0002/0004, sem tocar seus estados.

## 7. Estado da documentação

ARP-0009 preserva os seis estados (`concluded` não usado). A camada bootstrap declara-se derivada/advisory/protocolo conforme a matriz; PROJECT_STATUS reflete este checkpoint como `authorized_work` em fechamento e aponta o próximo passo para revisão do CSA.

## 8. Backlog e propostas

Nenhum AP alterado. Decisões futuras nomeadas (sem criar AP nesta slice): atualizar GOV-001 para papéis agnósticos de modelo; adicionar link do README para AGENT_START_HERE (1 linha); decidir persistência primária de Council Decisions recentes (retomar `foundation/directives/`?); confirmar precedência operacional; teste vivo de portabilidade (próxima slice inicia por AGENT_START_HERE); relação da linha bootstrap com ARP-0002/0004.

## 9. Riscos e pontos de atenção

- PROJECT_STATUS pode ficar stale se o update policy não for cumprido a cada checkpoint — drift é finding, não correção silenciosa;
- o Charter pode ser confundido com a Constitution Layer (AP-0002) apesar da declaração explícita;
- a comparação de executores foi feita por uma das partes comparadas;
- a portabilidade permanece hipótese até um executor novo usar a camada em tarefa real;
- duplicação controlada README×START_HERE pode divergir com o tempo.

## 10. Questões para o Conselho

- Aceitar canonicidade/precedência como definidas (subordinadas a PMM-001)?
- Aprovar as três correções de lacuna (GOV-001 agnóstico; link no README; persistência de decisões) como micro-slice futura?
- Adotar o teste vivo: exigir que a próxima slice comece por `AGENT_START_HERE.md`?
- Próxima slice: sessão empírica (CM-0001), Stage 4 proposal, ou gates E40?

## 11. Próxima ação recomendada

CSA/Council review e `accept`. Recomendação do CEA: aceitar; adotar o teste vivo de portabilidade já na próxima diretiva (custo zero: basta a diretiva referenciar o entry point em vez de repetir o contexto); e agrupar as lacunas 1–3 numa micro-slice de manutenção institucional. Não iniciar automação, compiler de contexto, integração LLM, Stage 4, sessão empírica ou avaliação externa.

## 12. Evidências

Fontes internas: Council Decision (via CSA, 2026-07-23); PMM-001; GOV-001; AIP-001; IHP-001; ADR-0001..0013; AP-0002; ARP-0009 E21–E49; IHR-0021–0025. Corpus da comparação citado em E50. Nenhuma fonte externa.

### Project Status Snapshot

```json
{
  "current_milestone": { "id": "V1-M02", "status": "in_progress", "current_checkpoint": "agent_agnostic_bootstrap_review", "closure_recommended": false },
  "bootstrap_layer": {
    "entry_point": "AGENT_START_HERE.md",
    "location": "foundation/bootstrap/",
    "artifacts": ["PROJECT_CHARTER.md", "PROJECT_STATUS.yaml", "REPOSITORY_MAP.yaml", "EXECUTION_CONTRACT.md", "RETURN_SCHEMA.yaml", "manifests/CM-0001"],
    "return_schema_version": "1.0.0",
    "pilot_manifest": "CM-0001 (registered_not_authorized)",
    "portability": "documentary_simulation_only",
    "named_gaps": ["GOV-001 model-bound roles", "README missing entry-point link", "recent Council Decisions persisted via IHR citations only"]
  },
  "blocked": ["Stage 4", "External user evaluation (E40 gates)", "Directed accessibility session (registered, not authorized)", "Bootstrap automation / context compiler / LLM integration", "Production frontend"],
  "research_program": { "id": "ARP-0009", "governance_state": "authorized", "research_state": "active", "knowledge_maturity": "evidence_gathering", "outcome": null, "implementation_state": "not_started", "operational_state": "not_applicable" },
  "documentation_status": { "synchronized": true, "files_changed": 10, "missing_updates": [] },
  "validation": { "documentary_checks_passed": true, "yaml_parsed": true, "tests_executed": false, "build_passed": null, "lint_passed": null, "typecheck_passed": null },
  "recommended_next_action": "CSA/Council review; adopt live portability test on next directive; group gap fixes into a maintenance micro-slice; start nothing automatically."
}
```
