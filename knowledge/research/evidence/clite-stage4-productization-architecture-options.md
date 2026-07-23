---
schema_version: 0.1.0-experimental
id: ARP-0009-E52
kind: knowledge
knowledge_type: research_evidence
title: C-lite Stage 4 Productization Architecture Options
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
  - type: constrained_by
    target: PMM-001
  - type: related_to
    target: AP-0002
  - type: related_to
    target: AP-0007
  - type: related_to
    target: AP-0006
---

# C-lite Stage 4 Productization Architecture Options

## Pergunta principal

> Qual é o próximo boundary arquitetural correto depois de provar que o ciclo
> governado é executável localmente?

Esta pesquisa não escolhe uma arquitetura final. `architecture/system-overview.md`
(ARCH-001) está em `draft`, versão `0.2-structure` — um sumário revisado, sem
conteúdo definitivo em nenhuma das seções de boundary (§4 escopo, §5 arquitetura
geral, §20 runtime/adapters). Isso significa que esta é a primeira contribuição
substantiva a essas seções, não uma contradição de algo já decidido.

## Productization boundaries candidatas (não definitivas)

| Boundary | Estado hoje no slice | Questão em aberto |
|---|---|---|
| Domain | Existe, isolado (`src/domain/`) | Sobrevive fora de um processo síncrono único? |
| Application | Existe (`src/app/main.ts`) minimamente | Quem orquestra comandos reais (ver Execution engine gap)? |
| Interface | 6 views, sem framework | Qual tecnologia de UI para produto? (fora de escopo aqui — ver AP-0015/0016) |
| Persistence | `localStorage` descartável | Qual adaptador real? Arquivo versionado? Banco? API? |
| Identity | Inexistente | Ver §Identity and authority gap |
| Authorization | Simulada via `ActorRole` | Ver §Identity and authority gap |
| Execution engine | Simulado (dados, sem motor) | Ver §Execution engine gap |
| Artifact management | Modelo de dados existe | Sem storage real, sem versionamento de artifact |
| Evidence management | Modelo de dados existe | Sem ingestão de evidência real (arquivos, capturas, logs) |
| Project Memory | Derivação em memória | Ver E53 §Project Memory evolution |
| Observability | Inexistente | Nenhum log estruturado, nenhuma métrica |
| Integrations | Nenhuma (CSP bloqueia tudo) | Fora de escopo desta slice — AP-0007 (Runtime-Agnostic Core) ainda `proposed` |
| Security | Scan estático de boundary apenas | Nenhuma ameaça real testada (não há rede) |
| Accessibility | Verificação técnica parcial (E49) | Ver E53 §Accessibility boundary |
| Deployment | Inexistente (`file://` local) | Fora de escopo — nenhuma decisão de deploy aqui |

Nenhuma dessas linhas é uma decisão arquitetural; são candidatas a preencher
ARCH-001 §4/§5/§20 numa futura AP.

## Architecture evolution options

### Option A — Evolve the current local application

Continuar a partir do bundle IIFE atual, adicionando adaptadores reais
incrementalmente (persistência, depois identidade, depois execução).

- **Learning preservation:** alta — nada é reescrito.
- **Coupling:** o domínio já está desacoplado da UI; o risco é o inverso, a UI
  (667 linhas em `views.ts`) crescer acoplada a decisões de framework não tomadas.
- **Production risk:** alto — a base foi construída para ser descartável (zero
  dependência, um único bundle), não para produção real (sem build pipeline,
  sem framework, sem testes de integração de rede).
- **Migration cost:** baixo no curto prazo, alto se a decisão de UI/framework
  vier depois e exigir reescrita da camada de app mesmo assim.
- **Test reuse:** alto para os testes de domínio; baixo para os testes de bundle
  (specíficos do build atual).
- **Accessibility implications:** herda apenas verificação técnica parcial
  (E49) — não herda evidência empírica.
- **Security implications:** herda o boundary de "zero rede", que deixa de ser
  válido assim que integrações reais existirem.
- **Reversibility:** alta — é só um experimento, pode ser abandonado sem custo
  de migração de dados reais (não existe dado real).

### Option B — Preserve only the domain concepts and rebuild the application

Manter a state machine e os contratos como especificação, descartar a UI e o
adaptador de persistência atuais, reconstruir a aplicação sobre uma decisão de
stack ainda não tomada.

- **Learning preservation:** alta para os conceitos (ver E51 candidate reusable
  concepts); zero para a UI e persistência.
- **Coupling:** menor risco de herdar decisões acidentais de UI.
- **Production risk:** médio — evita herdar código descartável, mas ainda exige
  provar que o domínio sobrevive fora de teste síncrono único.
- **Migration cost:** médio — reescreve a aplicação, não o domínio.
- **Test reuse:** alto para os testes de domínio (`machine.test.ts`,
  `invalid-transitions.test.ts`, `fixture.test.ts`); baixo para `bundle.test.ts`.
- **Accessibility implications:** neutra — depende inteiramente da nova UI.
- **Security implications:** neutra a positiva — nova superfície pode ser
  desenhada com integrações reais desde o início, sem herdar o pressuposto
  "zero rede".
- **Reversibility:** alta.

### Option C — Extract a domain package, discard the UI and persistence

Como B, mas formalizando o domínio como um pacote/módulo isolado com contrato
próprio (potencialmente candidato a Capability futura, sem decidir isso agora).

- **Learning preservation:** alta para os conceitos e para a *forma* do código
  de domínio (não seu conteúdo específico de Oficina Horizonte).
- **Coupling:** o mais baixo das quatro opções — força a remoção de qualquer
  acoplamento residual a fixture/UI antes da extração.
- **Production risk:** médio-baixo — extrair primeiro, decidir aplicação depois,
  reduz o risco de tomar decisão de stack sob pressão de uma UI já existente.
- **Migration cost:** médio-alto agora (trabalho de extração), potencialmente
  menor depois (o domínio pode ser testado independentemente da aplicação final).
- **Test reuse:** alto.
- **Accessibility implications:** nenhuma — domínio não tem UI.
- **Security implications:** positiva — reduz superfície do domínio antes de
  qualquer integração.
- **Reversibility:** alta, mas exige uma slice própria (ver candidata "Domain
  Extraction Feasibility" em `ARP-0009-E54`) para não ser feita às pressas.

### Option D — Use the slice only as executable specification

Não promover nenhum código; tratar o slice inteiro como especificação executável
(documentação viva) que informa uma futura implementação a ser escrita do zero,
sem herdar arquivos.

- **Learning preservation:** alta para conceitos e testes-como-especificação;
  zero para código.
- **Coupling:** nenhum — não há herança de código.
- **Production risk:** o mais baixo — nenhuma decisão precoce de stack é herdada.
- **Migration cost:** o mais alto em esforço de reescrita, mas com o contrato já
  provado e testável.
- **Test reuse:** os testes viram *especificação de comportamento esperado* a
  reimplementar, não código a herdar.
- **Accessibility implications:** nenhuma direta.
- **Security implications:** neutra.
- **Reversibility:** total — o experimento pode ser arquivado sem afetar nada.

## Recomendação (research recommendation, não autorização)

Recomenda-se uma combinação **C + D**: tratar o domínio (state machine,
contratos, testes de transição) como candidato real a extração — mas só depois
de uma slice dedicada e limitada de *feasibility* (não implementação definitiva)
que teste se ele sobrevive fora de um processo síncrono único; e tratar a
UI/persistência/aplicação atuais inteiramente como Option D — especificação
executável a redesenhar quando a decisão de stack de interface for tomada
(fora do escopo desta pesquisa, ver AP-0015/AP-0016).

Manter: contratos de domínio, testes de transição, princípio
`Command != Event != State`, separação artifact/evidence.
Reescrever: aplicação e UI, quando a stack de interface for decidida.
Congelar: o fixture Oficina Horizonte como exemplo de referência, não como
conteúdo de produto.
Arquivar: `localStorage` e o bundle IIFE, uma vez que um adaptador real exista.
Provar antes de prosseguir: domínio fora de processo síncrono único; Project
Memory real (ver E53); identidade e autoridade reais (abaixo).
Não reutilizar: nomes/rótulos específicos do fixture fictício em qualquer
conteúdo real, sem repetir a checagem F-01.

Esta recomendação não autoriza nenhuma das opções — apenas orienta a
priorização das candidate slices em `ARP-0009-E54`.

## Source of Truth relationship

Preservando a Hierarquia de Autoridade de PMM-001 (Constitution — futura →
Manifestos → Governança → Princípios → ADRs → Documentação de Arquitetura →
Knowledge Objects → Roadmap → Milestones → Implementação) e o princípio já
canônico do Charter ("Project Memory canônica é Markdown/YAML no repositório...
Runtime não é Source of Truth; o Compiler deriva representações operacionais"):

```text
Runtime != Source of Truth
Snapshot != Source of Truth
Event Log != Source of Truth
Derived View != Canonical Artifact
```

Uma futura aplicação de produto deve se relacionar com essas camadas assim:
Markdown/YAML canônico continua sendo a única fonte de verdade institucional
(ADRs, ADs, GOV-001, PMM-001, ARPs, IHRs). O estado de runtime de uma instância
de produto (ex.: o estado corrente de um projeto de um usuário) é análogo ao
`ProjectState`/`ExecutionState` do slice — é execução, não memória
institucional, e não deve ser confundido com ela. Um event log de produto
(auditoria de ações de usuário) é candidato a evidência, não a Source of Truth.
Snapshots/caches (o que o slice já trata como descartável) seguem descartáveis.
Qualquer futura Project Memory de produto (distinta da Project Memory
institucional deste repositório) precisaria de sua própria decisão de
canonicidade — não pressuposta aqui. Nenhuma alteração a ARCH-001, à Ontologia
ou ao Compiler foi feita ou proposta por esta seção.

## Identity and authority gap

O slice não possui autenticação real; `ActorRole` é um enum de simulação.
Questões e boundaries a resolver antes de qualquer implementação real (nenhuma
decidida aqui):

- **Human identity:** como uma pessoa real se autentica? (fora de escopo desta
  pesquisa: nenhum fornecedor escolhido, nenhuma claim de segurança feita)
- **Agent identity:** como um executor de IA se identifica de forma distinta de
  uma pessoa, preservando `Executor != Chief != Council != CSA` (AGENT_START_HERE.md)?
- **Role → Capability → Authority → Permission:** o slice já preserva
  `Authority != visibility != capability != permission` (Charter, princípio 5)
  como dado, mas não como enforcement — precisa de um modelo real de
  autorização, não simulação.
- **Approval e delegation:** como um `AuthorizationRequest` simulado vira uma
  aprovação real, rastreável e não repudiável?
- **Audit:** o `HistoryEntry` do slice é um esqueleto de auditoria; produção
  exigiria proveniência, imutabilidade e retenção reais.
- **Emergency cancellation:** o slice não modela interrupção/cancelamento por
  autoridade superior em tempo real — gap identificado, não resolvido.

Nenhum fornecedor de autenticação foi escolhido; nenhuma claim de segurança é
feita por esta seção.

## Execution engine gap

O slice modela `ExecutionState`/`ExecutionActivity` como dados estáticos — não
existe um motor executando passos reais. Para substituir execução roteirizada
por execução real, faltam (nenhum decidido aqui):

`execution request → planner → bounded executor → tools → permissions →
progress model → interruption → requested input → retry → cancellation →
evidence capture → provenance → resource budget → failure classification`

Relação com o existente, sem alterá-lo: `AP-0012` (Orchestrator) permanece uma
AP não implementada, exatamente no papel de decidir isso; `foundation/bootstrap/EXECUTION_CONTRACT.md`
já define budgets/stopping rules/precedência para *executores humanos ou IA
operando este repositório* — um motor de execução de produto precisaria de um
contrato análogo, mas não é o mesmo contrato, e não deve ser confundido com ele.

## O que esta pesquisa NÃO decide

Não escolhe Option A/B/C/D definitivamente (recomendação, não autorização). Não
altera ARCH-001, a Ontologia ou o Compiler. Não escolhe fornecedor de
autenticação. Não autoriza nenhuma extração de domínio, adaptador de
persistência real ou motor de execução. Não cria Capability, Skill ou Agent
novo.

## Referências

`architecture/system-overview.md` (ARCH-001, `draft` 0.2-structure);
`foundation/manifestos/PMM-001-project-memory-manifesto.md` (§Authority
Hierarchy); `foundation/bootstrap/PROJECT_CHARTER.md`; `knowledge/backlog/proposals/AP-0002`,
`AP-0006`, `AP-0007`, `AP-0012`, `AP-0015`, `AP-0016`; `ARP-0009-E44..E48`,
`ARP-0009-E51`.
