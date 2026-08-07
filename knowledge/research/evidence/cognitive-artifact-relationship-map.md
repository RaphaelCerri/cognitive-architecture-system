---
schema_version: 0.1.0-experimental
document_role: research_relationship_map
title: Cognitive Artifact Relationship Map
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_as_experimental_evidence
acceptance_scope: experimental_evidence
knowledge_maturity: experimental
review_basis: ASSESS-0003
created_at: 2026-07-22
related_programs: [ARP-0008]
language: pt-BR
---

# Cognitive Artifact Relationship Map

## Mapa candidato, não pipeline

```text
Intent ──demanda──> Required Outcomes ──sugerem──> Required Capabilities
                                                  │
                           evidência demonstra <──┤── claims por Possible Executors
                                                  │
                        Applicable Skills <───────┘
                           │              │
                  informa/realiza     seleciona/combina
                           │              ▼
                           └──────> Strategies ──────> Workflow Definitions
                                                       │
                          participa <── Agent Blueprint│── compõe ──> Task Force Plan
                                                       │
Policy ──obriga/limita──> grants + risk context ──derivam──> Guardrail Profile
  │                                                    │
  └──────────── aplica-se transversalmente ────────────┘

Canonical candidates ──compile/adapt──> Runtime Configuration
Runtime Configuration + grants + context ──instantiate──> Execution Instance
Execution Instance ──produces──> logs/results/tests ──governance──> Evidence
Evidence ──supports/refutes──> Capability claims, evaluation and future evolution
```

Nenhuma seta obriga ordem global. Intent pode selecionar Workflow conhecido; Policy pode eliminar executor antes da composição; evidência pode invalidar claims; Runtime Configuration pode falhar por perda semântica.

## Relações e cardinalidades a testar

| Origem | Relação candidata | Destino | Cardinalidade provisória | Observação |
|---|---|---|---|---|
| Intent | demanda | Outcome/Capability | muitos-para-muitos | Inferência, não derivação automática |
| Capability | é suportada por | Skill | muitos-para-muitos | Skill não prova Capability |
| Capability | depende/compõe | Capability | grafo opcional | Ciclos e granularidade em aberto |
| Skill | usa/chama | Tool/Skill | muitos-para-muitos | Efeito exige executor autorizado |
| Strategy | seleciona/ordena | Skill/Workflow | muitos-para-muitos | Adaptação não é estado de run |
| Workflow | compõe | Step/Strategy/Skill/Tool | muitos-para-muitos | Representação pode ser grafo, pipeline ou loop |
| Agent Blueprint | declara claim/referencia | Capability/Skill/Strategy | muitos-para-muitos | Claim requer evidência independente |
| Agent | participa de | Workflow | muitos-para-muitos | Workflow não fica encapsulado obrigatoriamente no Agent |
| Task Force | compõe temporariamente | Agent/role/executor | um-para-muitos | Sem agregação automática de privilégios |
| Policy | governa | Artifact/grant/action | muitos-para-muitos | Owner e precedência externos |
| Guardrail Profile | aplica controles a | Artifact/Tool/Workflow/run | muitos-para-muitos | Derivado, rastreável e contextual |
| Runtime Configuration | deriva de | Blueprint/Policy/Profile | muitos-para-muitos | Pode haver vários targets e versões |
| Execution Instance | instancia/fixa | Configuração e versões | muitos-para-um por referência | Run guarda estado, budgets e grants |
| Evidence | suporta/refuta | Claim/evaluation/decision | muitos-para-muitos | Evidência não é Guardrail nem Policy |

## Três planos separados

### Plano de conhecimento e intenção

Intent, Outcomes, Capability, Skill e Strategy descrevem necessidade, potencial e conhecimento. Não concedem autoridade nem representam estado vivo.

### Plano de definição e governança

Blueprints, Workflow, Policy e Guardrail Profile descrevem composição, controle e restrições. Guardrail Profile é derivado; Policy é a fonte obrigatória candidata.

### Plano operacional e de evidência

Runtime Configuration e Execution Instance materializam a execução. Logs, resultados, avaliações e aprovações geram evidência; somente governança explícita promove conhecimento.

## Gates e caminhos de exceção

```text
missing authority/context ──> fail closed
semantic loss critical ─────> refuse compilation / escalate
irreversible effect ────────> human approval gate
budget or stopping condition> stop or escalate
revocation ─────────────────> block new runs + terminate/contain according to Policy
conflict/collusion signal ──> independent review
```

Human-in-the-Loop aparece como gate de decisão dentro do fluxo. Human-on-the-Loop exige observação e intervenção sobre a instância. Nenhum deles transfere ao Agent a autoridade do humano.

## Lifecycles não equivalentes

```text
Artifact: draft -> reviewed -> approved/limited -> deprecated -> revoked
Compilation: requested -> validated -> produced/rejected -> superseded
Execution: created -> authorized -> running -> paused -> resumed -> completed/failed/stopped
Evidence: captured -> verified -> accepted/rejected -> retained/expired
```

Os estados são ilustrações analíticas, não enums ou schemas propostos. Revogar blueprint, credencial, grant ou execução produz efeitos distintos e precisa de semântica futura.

## Riscos relacionais

- Relações implícitas virarem propriedade monolítica do Agent.
- Relação Skill–Tool carregar credenciais ou autoridade.
- Task Force somar privilégios e memória dos participantes.
- Guardrail Profile duplicar Policy e divergir da fonte.
- Compilação ocultar perda semântica ou target incompatível.
- Evidence retornar automaticamente à Project Memory sem revisão.

## Questões de decisão futura

O Conselho precisará decidir quais nós possuem identidade canônica, quais relações entram na Ontologia, quem possui cada lifecycle, como representar grants e revogação, quais cardinalidades são sustentadas por casos e como registrar compatibilidade/perda semântica. Este mapa não antecipa essas decisões.
