---
schema_version: 0.1.0-experimental
id: ARP-0009-E54
kind: knowledge
knowledge_type: research_evidence
title: C-lite Stage 4 Candidate Slices and Authorization Readiness
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E51
  - type: related_to
    target: ARP-0009-E52
  - type: related_to
    target: ARP-0009-E53
---

# C-lite Stage 4 Candidate Slices and Authorization Readiness

## Pergunta principal, respondida

> Qual é o próximo boundary arquitetural correto depois de provar que o ciclo
> governado é executável localmente?

Resposta desta pesquisa: **nenhum boundary único**. A evidência (E51–E53) mostra
três frentes independentes e nenhuma pronta para produção: (1) o domínio precisa
de prova de sobrevivência fora de um processo síncrono único antes de qualquer
extração; (2) identidade/autoridade real e um motor de execução real são gaps
inteiros, não refinamentos incrementais do slice atual; (3) nenhuma evidência de
usuário existe — toda validação até aqui é técnica ou de auto-avaliação do
executor. Promover o experimento diretamente a produto descartaria (1) e (3);
descartar o experimento inteiro desperdiçaria os conceitos reutilizáveis
identificados em E51. Por isso a recomendação (E52) foi C+D, não uma opção
única, e a sequência abaixo é desenhada para não pular essas provas.

## Candidate Stage 4 slices (nenhuma autorizada por este documento)

### 1. Domain Extraction Feasibility

- **Purpose:** provar (ou refutar) que a state machine de domínio sobrevive
  fora de um processo de teste síncrono único — sem extrair para produção.
- **Dependency:** nenhuma além do slice existente.
- **Evidence produced:** relatório de feasibility com casos de concorrência
  simulada, limites encontrados, e recomendação sim/não para prosseguir com
  extração real.
- **Files/commits estimate:** ≤8 arquivos, ≤2 commits (protótipo isolado em
  `experiments/`, descartável).
- **Stopping rule:** qualquer necessidade de infraestrutura real (banco, rede)
  interrompe — feasibility é só sobre o domínio.
- **Decision unlocked:** se viável, autoriza avaliar Option C (extração real)
  em uma slice futura; se não, redireciona para Option B/D.

### 2. Identity and Authority Model

- **Purpose:** desenhar (sem implementar) um modelo real de
  human/agent identity → role → capability → authority → permission →
  approval → delegation → audit → emergency cancellation, coerente com GOV-001
  (já agnóstico de modelo) e com `Authority != visibility != capability !=
  permission`.
- **Dependency:** nenhuma escolha de fornecedor; é desenho, não integração.
- **Evidence produced:** documento de modelo conceitual + gaps identificados
  contra o `ActorRole` simulado do slice.
- **Files/commits estimate:** ≤3 arquivos (um documento de pesquisa), 1 commit.
- **Stopping rule:** qualquer necessidade de escolher/integrar um provedor de
  autenticação real interrompe — permanece desenho.
- **Decision unlocked:** autoriza (ou não) uma futura AP de autenticação real.

### 3. Canonical Project Memory Adapter (proof of concept)

- **Purpose:** testar se a derivação de Memory (`memory.ts`) escala para
  Project Memory real em Markdown/YAML versionado, sem virar a Memory
  institucional deste repositório.
- **Dependency:** Domain Extraction Feasibility (não faz sentido provar Memory
  sobre um domínio que talvez não sobreviva à extração).
- **Evidence produced:** protótipo isolado + relatório de limitações de escala,
  versionamento e proveniência.
- **Files/commits estimate:** ≤10 arquivos, ≤2 commits.
- **Stopping rule:** qualquer proposta de nova Source of Truth interrompe —
  Memory de produto não pode competir com PMM-001.
- **Decision unlocked:** informa se a Opção C (extração de domínio) é viável de
  ponta a ponta ou só parcialmente.

### 4. Real Execution Simulation Boundary

- **Purpose:** especificar (sem construir) o contrato mínimo de um motor de
  execução real — request/planner/bounded executor/tools/permissions/progress/
  interruption/retry/cancellation/evidence capture/provenance/budget/failure
  classification — relacionando-o a `AP-0012` (Orchestrator) sem implementá-la.
- **Dependency:** Identity and Authority Model (execução real precisa saber
  quem autoriza o quê).
- **Evidence produced:** especificação de contrato + comparação com
  `EXECUTION_CONTRACT.md` (deixando claro que são contratos análogos, não o
  mesmo).
- **Files/commits estimate:** ≤3 arquivos, 1 commit.
- **Stopping rule:** qualquer implementação de motor real interrompe —
  permanece especificação.
- **Decision unlocked:** desbloqueia decisão do Council sobre reativar AP-0012.

### 5. Product Experience Validation

- **Purpose:** fechar ao menos uma das HV-01–07 de acessibilidade (E49) com
  operador humano qualificado, e obter a primeira evidência real de usuário
  (não técnica) sobre compreensão de terminologia/autoridade/recuperação,
  usando as 6 views existentes como estímulo — sem caracterizar como avaliação
  externa completa.
- **Dependency:** nenhuma das anteriores estritamente, mas se beneficia de
  Identity/Authority Model já desenhado para não testar rótulos que vão mudar.
- **Evidence produced:** relatório de sessão dirigida, seguindo o mesmo padrão
  honesto de E49 (passed/failed/limited/not_executed, sem inflar).
- **Files/commits estimate:** ≤3 arquivos, 1 commit.
- **Stopping rule:** qualquer expansão para recrutamento externo real ou
  múltiplos participantes interrompe — continua sendo sessão dirigida
  interna, não avaliação externa (gates E40 seguem intocados).
- **Decision unlocked:** primeira evidência de usuário real do programa;
  informa se os gates E40 devem ser retomados em seguida.

### 6. Production Architecture Proposal

- **Purpose:** consolidar o que as cinco slices anteriores provaram (ou
  refutaram) numa AP formal de arquitetura de produto, incluindo boundaries de
  ARCH-001 §4/§5/§20, para decisão do Council.
- **Dependency:** todas as anteriores — esta é a síntese, não uma investigação
  nova.
- **Evidence produced:** uma AP completa (`knowledge/backlog/proposals/`), com
  as opções A–D revisitadas à luz de evidência real em vez de projeção.
- **Files/commits estimate:** ≤5 arquivos, 1–2 commits.
- **Stopping rule:** qualquer tentativa de pular direto para implementação
  sem aprovação do Council interrompe.
- **Decision unlocked:** autorização (ou não) de Stage 4 implementation e
  primeira decisão real de stack de produto.

## Sequência recomendada (não autorizada)

```text
1. Domain Extraction Feasibility
2. Identity and Authority Model            (pode rodar em paralelo a 1)
3. Canonical Project Memory Adapter        (depende de 1)
4. Real Execution Simulation Boundary      (depende de 2)
5. Product Experience Validation           (pode rodar em paralelo a 1–4)
6. Production Architecture Proposal        (depende de 1–5)
```

## Readiness summary

Nenhuma das seis slices está autorizada por este documento ou por AD-005/pela
diretiva desta pesquisa. Nenhuma delas requer alterar ARCH-001, a Ontologia, o
Compiler, outros ARPs, ou o próprio vertical slice existente (todas propõem
protótipos novos e isolados, quando exigem código). A decisão de autorizar
qualquer uma delas — individualmente, em paralelo, ou nenhuma — pertence ao
Council.

## O que este documento NÃO faz

Não autoriza Stage 4 implementation. Não recruta usuários. Não altera E40. Não
cria AP formal (isso é o próprio objeto da slice 6, ainda não autorizada). Não
decide entre Option A/B/C/D de forma definitiva — apenas ordena a investigação
necessária para decidir com evidência.

## Referências

`ARP-0009-E44–E50`, `E51`, `E52`, `E53`; `knowledge/backlog/proposals/AP-0012`
(Orchestrator); `foundation/bootstrap/EXECUTION_CONTRACT.md`;
`architecture/system-overview.md` (ARCH-001).
