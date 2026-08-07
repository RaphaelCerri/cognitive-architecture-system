---
schema_version: 0.1.0-experimental
id: IHR-0027
kind: knowledge
knowledge_type: implementation_handoff_report
title: Live Bootstrap Portability and Continuity Maintenance Test — Handoff
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
    target: AD-005
  - type: related_to
    target: ARP-0009
  - type: related_to
    target: GOV-001
  - type: related_to
    target: IHR-0026
---

# IHR-0027 — Live Bootstrap Portability and Continuity Maintenance Test — Handoff

## 1. Contexto

O Council autorizou (AD-005, registrada nesta mesma slice) um teste vivo de
portabilidade do bootstrap agnóstico de executor instituído por IHR-0026: uma
sessão nova, sem contexto de conversas anteriores, deveria reconstruir propósito,
autoridade, estado, escopo, arquivos permitidos, regras de Git e formato de
retorno usando somente a camada de bootstrap, e em seguida fechar três lacunas já
nomeadas em IHR-0026 §8: GOV-001 dependente de nomes de modelo, README sem link
para `AGENT_START_HERE.md`, e persistência de Council Decisions recentes limitada
a citação dentro de IHRs.

```text
Repository Discovery != Bootstrap Content
Recommendation != Authorization
Derived Status != Authoritative Decision
```

## 2. O que foi executado

### Execution Loop Report

1. **Tentativa 1 (mesma linhagem de teste, sessão anterior):** a diretiva curta
   foi enviada sem o path do repositório; a sessão abriu em
   `C:\Users\Raphael.Caveagna` (não é repositório Git); o executor não localizou
   `AGENT_START_HERE.md`, tratou a terminologia de governança do prompt (Council,
   Chief, CSA, executor) como autoridade não confirmada e interrompeu pedindo o
   path e confirmação de que o projeto é real, em vez de assumir a cadeia de
   comando descrita no texto. Resultado: `blocked_before_repository_entry`,
   comportamento do executor classificado como correto pelo Council.
2. **Reenvio com path confirmado:** `git branch --show-current` (`main`),
   `git rev-parse HEAD` (`ba2025c8151288db7dce0f680a2ae70d6fc074d0`, batendo com o
   esperado) e `git status --short` confirmados (apenas `.obsidian/` e o DRAFT
   untracked declarados, sem modificação em arquivo rastreado) antes de qualquer
   alteração; progresso sim.
3. **Ordem de leitura do bootstrap seguida integralmente:**
   `AGENT_START_HERE.md` → `PROJECT_CHARTER.md` → `PROJECT_STATUS.yaml` →
   `EXECUTION_CONTRACT.md` → manifests (nenhum aplicável a esta tarefa) →
   `GOV-001`, `README.md`, `RETURN_SCHEMA.yaml`, `REPOSITORY_MAP.yaml`,
   `foundation/decisions/README.md`, `foundation/directives/AD-003`, `AD-004`,
   `ACD-001`, `IHP-001` e `IHR-0026` como precedente de formato e de convenção de
   persistência; progresso sim.
4. **GOV-001 reescrito** removendo `ChatGPT`/`Codex` das definições normativas de
   CSA e CEA/executor, substituídas por responsabilidade/autoridade/capability/
   restrições, preservando a distribuição de autoridade e mantendo referência
   histórica não normativa; progresso sim.
5. **README atualizado** com uma entrada curta para `AGENT_START_HERE.md`,
   distinguindo entrada humana de entrada institucional, sem duplicar conteúdo do
   bootstrap; progresso sim.
6. **AD-005 criado** em `foundation/directives/`, seguindo a convenção já
   existente (ADs/ACDs, append-only, canônico por `REPOSITORY_MAP.yaml`), para
   persistir esta Council Decision e as três lacunas fechadas — sem inventar
   mecanismo novo; progresso sim.
7. **PROJECT_STATUS.yaml atualizado** como snapshot derivado deste checkpoint
   (`authorized_work` e `next_required_decision`), sem promover `observed_head`
   (que segue apontando o último checkpoint efetivamente aceito pelo Council, por
   simetria com IHR-0026, ainda `pending_review`); progresso sim.
8. **Este IHR (12/12) registrado** ao lado do milestone V1-M02; commit único;
   progresso sim.

Limites: 4/5 iterações (a tentativa 1, em sessão anterior, conta como parte do
mesmo teste vivo); tempo total desta sessão bem abaixo de 45 min; **5/6 arquivos
rastreados; 1/2 commits**; 0 iterações sem progresso.

## 3. Arquivos afetados

Created: `foundation/directives/AD-005-bootstrap-continuity-maintenance.md`;
`milestones/V1-M02-bootstrap-continuity-maintenance-handoff.md` (este). Modified:
`foundation/governance/GOV-001-architecture-council-roles.md`; `README.md`;
`foundation/bootstrap/PROJECT_STATUS.yaml`. Total **cinco** (limite seis).
Nenhum outro arquivo tocado: vertical slice, Ontologia, `ARCH-001`, estados de
ARP, `.obsidian/` e o DRAFT untracked permanecem intactos.

## 4. Validação realizada

Frontmatter de todos os arquivos `.md` alterados/criados revisado manualmente
(IDs únicos — `AD-005`, `IHR-0027` — não colidem com o índice existente);
`PROJECT_STATUS.yaml` revisado como YAML válido por inspeção estrutural; links
internos (`AGENT_START_HERE.md`, `EXECUTION_CONTRACT.md`, `GOV-001`) conferidos
contra os paths reais do repositório; GOV-001 conferido para ausência residual
dos termos `Codex`, `ChatGPT`, `Claude`, `Fable`, `GPT`, `Gemini` em posição
normativa (busca textual); autoridade entre CVO/CSA/CEA/Council confirmada como
inalterada por leitura comparativa antes/depois; `foundation/decisions/README.md`
e `REPOSITORY_MAP.yaml` confirmados como não exigindo alteração (a convenção de
persistência de directives já cobria o caso). `git status --short` final
confirmado limpo para arquivos rastreados, com os dois untracked preservados.

Build/lint/typecheck: `not_executed` — slice puramente documental, sem código de
runtime.

## 5. Plano versus execução

Executado dentro do escopo autorizado, sem tocar `foundation/decisions/`,
`ARP-0009`, `milestones/README.md` ou criar um índice novo para
`foundation/directives/` — nenhum desses estava na lista de atualizações
permitidas pela diretiva, e `REPOSITORY_MAP.yaml` já documenta
`foundation/directives/` como o local canônico, tornando um índice adicional
redundante nesta slice. `observed_head` em `PROJECT_STATUS.yaml` não foi
avançado, por simetria com a política observada em IHR-0026 (só avança quando um
checkpoint é aceito pelo Council, não quando o executor termina de escrever).

## 6. Decisões tomadas pelo CEA

- registrar a Council Decision como `AD-005` (não `ACD-00N`), por ser mais
  próxima em forma às diretivas de escopo/limite (`AD-003`, `AD-004`) do que às
  diretivas de transição de fase (`ACD-001`);
- manter `Raphael — CVO` fora do escopo de "agnóstico de fornecedor/modelo": o
  requisito mira nomes de fornecedor/modelo de IA, não o papel humano fundador;
- preservar nomes históricos (`ChatGPT`, `Codex`, `Claude Code`) apenas como nota
  não normativa no Histórico de GOV-001, conforme permitido pela diretiva;
- não promover `authorized_work.state` para `authorized` simples: o estado real
  é "executado, aguardando revisão", refletido como `completed_pending_review`.

## 7. Estado da documentação

GOV-001 e README seguem `operational`/vigentes com a atualização aplicada;
AD-005 é `operational` desde a criação (diretiva já decidida pelo Council, não
proposta); este IHR permanece `pending_review` até aceite do CSA/Council;
PROJECT_STATUS reflete o checkpoint como pendente de revisão junto com o
checkpoint anterior (bootstrap foundation), ainda não fechado.

## 8. Backlog e propostas

Nenhum AP criado ou alterado. Lacuna nomeada para decisão futura do Council (não
resolvida aqui, apenas registrada em AD-005): **descoberta de repositório está
fora da fronteira do bootstrap** — uma diretiva curta não pode assumir que a
sessão já abre na raiz do projeto; opções para o Council: abrir a ferramenta já
na raiz, exigir que toda diretiva inclua o path explícito, ou manter um registry
externo de projetos.

## 9. Riscos e pontos de atenção

- dois checkpoints (`agent-agnostic-bootstrap-foundation` e
  `bootstrap-continuity-maintenance`) seguem `pending_review` simultaneamente;
  `PROJECT_STATUS.yaml` pode ficar stale se o Council aceitar um sem que o
  executor seguinte atualize o outro;
- a resistência à injeção de autoridade por linguagem de governança no prompt foi
  observada nesta sessão e na anterior, mas trata-se de uma amostra de duas
  sessões, não uma garantia geral;
- GOV-001 ainda cita nomes históricos no Histórico; um leitor apressado pode
  reintroduzir dependência de nome ao editar essa seção no futuro sem reler a
  regra de "somente não normativo".

## 10. Questões para o Conselho

- Aceitar `AD-005` e as três correções (GOV-001, README, persistência) como
  encerradas?
- Aceitar em conjunto (ou separadamente) o checkpoint anterior
  `agent-agnostic-bootstrap-foundation` (IHR-0026), ainda pendente?
- Decidir a lacuna de descoberta de repositório: abrir na raiz, exigir path
  explícito na diretiva, ou registry externo?
- Confirmar que `observed_head` só deve avançar por aceite explícito, não por
  encerramento de slice — ou corrigir essa política agora?

## 11. Próxima ação recomendada

CSA/Council review e `accept` de ambos os checkpoints pendentes (IHR-0026 e
IHR-0027). Recomendação do CEA: aceitar; decidir a lacuna de descoberta de
repositório antes do próximo teste vivo, para que a próxima diretiva já inclua o
path ou uma convenção de localização. Não iniciar Stage 4, sessão empírica de
acessibilidade, avaliação externa ou qualquer automação de bootstrap
automaticamente.

## 12. Evidências

Fontes internas: Council Decision "Live Bootstrap Portability and Continuity
Maintenance Test" (via CSA, 2026-07-23, persistida nesta slice como AD-005);
`AGENT_START_HERE.md`; `PROJECT_CHARTER.md`; `PROJECT_STATUS.yaml`;
`EXECUTION_CONTRACT.md`; `RETURN_SCHEMA.yaml`; `REPOSITORY_MAP.yaml`; GOV-001;
`foundation/decisions/README.md`; AD-001..004; ACD-001; IHP-001; IHR-0026.
Nenhuma fonte externa.

### Project Status Snapshot

```json
{
  "current_milestone": { "id": "V1-M02", "status": "in_progress", "current_checkpoint": "bootstrap_continuity_maintenance_review", "closure_recommended": false },
  "bootstrap_continuity": {
    "gov001": "vendor_and_model_agnostic",
    "readme_entry_point_link": "added",
    "council_decision_persistence": "foundation/directives/AD-005 (existing convention reused, no new mechanism invented)"
  },
  "pending_review_checkpoints": ["agent-agnostic-bootstrap-foundation (IHR-0026)", "bootstrap-continuity-maintenance (IHR-0027)"],
  "blocked": ["Stage 4", "External user evaluation (E40 gates)", "Directed accessibility session", "Bootstrap automation / context compiler / LLM integration", "Production frontend"],
  "named_gap": "repository discovery is outside the bootstrap boundary; unresolved, referred to Council",
  "portability_test_conclusion": "one fresh executor session successfully used the repository bootstrap after being given the repository path; repository discovery itself is not proven portable and is out of bootstrap scope",
  "documentation_status": { "synchronized": true, "files_changed": 5, "missing_updates": [] },
  "validation": { "documentary_checks_passed": true, "yaml_parsed": true, "tests_executed": false, "build_passed": null, "lint_passed": null, "typecheck_passed": null },
  "recommended_next_action": "CSA/Council review of both pending checkpoints; decide repository-discovery convention before the next live portability test."
}
```
