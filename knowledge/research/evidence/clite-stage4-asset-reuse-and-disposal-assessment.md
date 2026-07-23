---
schema_version: 0.1.0-experimental
id: ARP-0009-E51
kind: knowledge
knowledge_type: research_evidence
title: C-lite Stage 4 Asset Reuse and Disposal Assessment
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E48
  - type: related_to
    target: ARP-0009-E44
  - type: related_to
    target: ARP-0009-E45
  - type: related_to
    target: ARP-0009-E46
  - type: related_to
    target: ARP-0009-E49
---

# C-lite Stage 4 Asset Reuse and Disposal Assessment

## Natureza

Inventário do vertical slice em `experiments/clite-stage3-vertical-slice/` (2.691 linhas;
TypeScript estrito; zero dependência de runtime; 43/43 testes; typecheck e build
aprovados), classificando cada elemento antes de qualquer decisão de evolução de
produto. Nenhum código foi alterado, movido ou apagado por esta avaliação.

```text
Working Prototype != Product
Reusable Concept != Reusable Code
Technical Test Passing != Production-Ready
```

## Disposable (não deve atravessar para produto como está)

| Elemento | Razão | Reuse risk se promovido sem revisão |
|---|---|---|
| Cenário único "Oficina Horizonte" (`src/domain/fixture.ts`) | Fixture sintético de demonstração, com nome/domínio fictício e termos proibidos (F-01) já checados apenas para esse texto específico | Alto — qualquer nova instância de conteúdo real precisa repetir a checagem F-01/dados-pessoais, não herdá-la |
| Fixture como módulo TS versionado (em vez de YAML) | Decisão explícita da implementação para evitar escrever um parser de runtime nesta slice (E48) — desvio documentado, não arquitetura definitiva | Alto — nenhum motor de conteúdo dinâmico existe; conteúdo real exigiria ingestão/edição fora de código-fonte |
| Persistência via `localStorage` opcional e descartável | Documentado como não-Source-of-Truth (`README.md` do slice: "o snapshot nunca é Source of Truth"); serve só para não perder estado ao recarregar `file://` | Alto — não há adaptador de persistência real, não há multiusuário, não há servidor |
| UI mínima das 6 views (`src/app/views.ts`) | Construída para exercitar SF-01–SF-08 num único bundle IIFE de 75kb sem framework, CSP `connect-src 'none'` | Médio — layout/estilo são utilitários de prova, não um design system revisado (ver `ui-ux-pro-max` / futura AP de visualização) |
| Timestamps/roteiro de eventos sintéticos nos testes | Determinismo de teste, não modelo de tempo real | Baixo — comportamento de tempo real (fusos, concorrência) nunca foi exercitado |
| Simulação manual de execução (sem motor de execução real) | `ExecutionState`/`ExecutionActivity` são dados, não um orquestrador executando passos | Alto — nenhuma garantia de que o modelo de dados sobrevive a um motor de execução real (ver §Execution engine gap em E52) |

## Candidate reusable concepts (sobrevivem independente do código)

| Conceito | Classification | Rationale | Hidden assumption | Evidence | Reuse risk | Revalidação exigida |
|---|---|---|---|---|---|---|
| Separação por state families (Project/Discovery/Plan/Authorization/Execution/Artifact/Evidence/Review/Interface/ActorRole) | reusable concept | Espelha a governança real do repositório (Council/CSA/CEA, ADRs, ARPs, IHRs) — não é acidente de UI | Assume que todo domínio futuro terá uma cadeia de estados comparável; pode não valer para domínios simples | E44/E45, `machine.ts` (445 linhas), 43/43 testes | Baixo para este programa; médio se generalizado a domínios não-cognitivos | Revisão de arquitetura (ARCH-001 §5/§7) antes de virar taxonomia formal |
| `Command != Event != State != User Intent` | reusable concept | Já é princípio arquitetural do próprio Charter (`PROJECT_CHARTER.md`); o slice apenas o exercitou | Nenhuma nova — princípio pré-existente confirmado, não descoberto | 14 commands / 34 events distintos, testes de transições inválidas | Baixo | Nenhuma adicional — já é princípio canônico |
| `Artifact != Evidence` com estados próprios (`ArtifactState`, `EvidenceStatus`) | reusable concept | Reforça distinção já presente no Charter e no EXECUTION_CONTRACT | Assume que toda evidência futura terá um ciclo current/partial/unavailable/stale — pode ser insuficiente para evidência empírica com humanos (ver E53) | `types.ts`, `memory-review.test.ts` | Médio | Confrontar com o vocabulário real de evidência humana (E49/E40) antes de fixar como Knowledge Type |
| Representação de autoridade por papel (`ActorRole`: product_owner/decision_authority/research_executor/system) | reusable concept | Paralelo direto a CVO/CSA/CEA/Council do GOV-001 (já agnóstico de modelo desde AD-005) | Assume 1:1 entre papel de domínio fictício e papel institucional real — pode não ser verdade para um produto multiusuário | `types.ts`, F-01 label fix em E44 | Médio-alto | Modelo de identidade real (ver §Identity and authority gap, E52) antes de qualquer autenticação |
| Preservação de falha/retry sem perda de trabalho (`FailureInfo`, testes de accept/revise/reject) | reusable concept | Espelha o princípio de produto "falha preserva trabalho e oferece recuperação" (Charter) | Nenhuma nova | `machine.test.ts`, `invalid-transitions.test.ts` | Baixo | Nenhuma adicional além de portar para um motor de execução real |
| Derivação de Project Memory sem vazar paths/IDs internos (`memory.ts`) | reusable concept | Exercita ao vivo o princípio "Runtime não é Source of Truth; Memory é derivada" | Assume que a derivação atual (in-memory, síncrona) escala para Memory real em Markdown/YAML — não testado | `memory-review.test.ts` | Médio | Prova de conceito contra Memory real (ver candidata de slice "Canonical Project Memory Adapter", E54) |
| Reset determinístico (deep-equal ao estado inicial) | reusable concept | Prova que o ciclo é auditável e reversível — alinhado a "todo retorno segue rollback por `git revert`" do EXECUTION_CONTRACT | Nenhuma nova | `machine.test.ts` | Baixo | Nenhuma |
| Detecção de stale view (`InterfaceState.stale_view`) | reusable concept | Espelha a distinção `Derived Status != Canonical Decision` já usada no bootstrap (PROJECT_STATUS.yaml) | Assume que "stale" é sempre detectável client-side; num produto real pode exigir sincronização servidor | `views.ts`, testes de invalidação de snapshot | Médio | Necessário revisitar ao decidir adaptador de persistência real |
| Histórico de eventos determinístico como base de auditoria | reusable concept | Insumo direto para uma futura Project Memory real com proveniência | Assume volume baixo; sem paginação, sem compactação | `HistoryEntry`, `machine.ts` | Médio | Necessário para qualquer volume de produção |

## Candidate reusable implementation (código, não só conceito — avaliação sem promover nada)

| Elemento | Coupling | Avaliação preliminar | Reuse risk | Revalidação exigida |
|---|---|---|---|---|
| Domain state machine (`machine.ts`, `types.ts`, `events.ts`, `commands.ts`) | Baixo acoplamento a UI/persistência (isolado em `src/domain/`, testável sem browser) | Candidato mais forte a extração — mas nunca rodou fora de um único processo síncrono de teste | Médio — nenhuma prova de concorrência, nenhuma prova de escala | Feasibility de extração de domínio isolado (ver candidata de slice "Domain Extraction Feasibility", E54) antes de qualquer promoção |
| Command validation | Acoplado ao shape específico dos 14 commands do cenário Oficina Horizonte | Padrão reutilizável (validação antes de gerar evento); conteúdo específico não | Médio | Generalização exigiria um segundo domínio real para provar que não é over-fit a um único fixture |
| Event contracts (34 eventos) | Baixo, mas nomeados para o domínio fictício | Estrutura (nome/payload/state family) é candidata; nomes específicos não | Médio | Nomenclatura precisa de revisão arquitetural antes de virar contrato canônico |
| Project Memory derivation (`memory.ts`) | Baixo acoplamento a UI; médio a shape do domínio | Prova que "derivar sem vazar detalhe interno" é possível em código; não prova que escala à Memory real (Markdown/YAML versionado) | Alto (é a lacuna mais citada nas evidências) | Obrigatória — ver Project Memory evolution em E53 |
| Persistence adapter boundary (`persistence.ts`, 74 linhas) | Baixo — já isolado como módulo próprio, já documentado como descartável | Boundary correto (isolar persistência), implementação (`localStorage`) descartável | Baixo para o boundary, alto para a implementação | Adaptador real (arquivo/DB/API) exigiria nova prova, boundary provavelmente sobrevive |
| Fixture boundary (`fixture.ts`) | Alto acoplamento ao conteúdo Oficina Horizonte | Boundary (separar fixture de máquina) é reusável; conteúdo não | Médio | Um segundo cenário real validaria se o boundary generaliza |
| Testes técnicos (9 suítes, 43 casos, incl. scan de segurança/estrutura) | Baixo — testam contrato e não implementação de UI | Metodologia (transições inválidas, scan de URLs externas/eval/innerHTML, checks estruturais de acessibilidade) é diretamente reaproveitável como *prática*, não como suíte fixa | Baixo | Nenhuma — já é evidência técnica válida, só não é evidência de usuário |

## O que esta avaliação NÃO prova

- Não prova que o domínio extraído funciona fora de um processo de teste único e síncrono (sem concorrência, sem múltiplos usuários, sem rede).
- Não prova que a Project Memory derivada em código escala para Project Memory canônica em Markdown/YAML real.
- Não resolve identidade, autoridade real ou permissão — o slice não tem nenhuma.
- Não substitui evidência de usuário (`Technical Evidence != User Evidence` — ver E49, E53).
- Não recomenda uma opção de arquitetura — isso é objeto de `ARP-0009-E52`.

## Referências

`experiments/clite-stage3-vertical-slice/` (código e `README.md`); `ARP-0009-E44`
(proposta), `E45` (contratos), `E46` (opções técnicas), `E47` (readiness),
`E48` (limitações), `E49` (verificação de acessibilidade); `foundation/bootstrap/PROJECT_CHARTER.md`
(princípios arquiteturais); `foundation/governance/GOV-001-architecture-council-roles.md`.
