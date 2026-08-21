# Cognitive Architecture System

Arquitetura cognitiva governada para transformar conversas, decisões e pesquisa em memória institucional versionada, rastreável e reutilizável por humanos e agentes de IA. O projeto investiga como sistemas assistidos por IA podem preservar contexto entre sessões, separar autoridade de execução e validar conhecimento antes que ele se torne parte do sistema.

O princípio central é simples: **nenhum agente aprova o próprio trabalho, e nenhuma conversa, pessoa, modelo ou runtime é fonte de verdade por si só**. O repositório é a memória institucional.

Este não é um framework pronto para produção. É um sistema de arquitetura e governança em evolução, acompanhado por provas executáveis que validam suas partes mais arriscadas antes da implementação definitiva.

> Para uma visão sem jargão, consulte [O que o sistema faz](O-QUE-O-SISTEMA-FAZ.md). Para assumir trabalho como executor humano ou de IA, comece por [Agent Start Here](AGENT_START_HERE.md).

## Estado verificável

| Indicador | Estado atual |
|---|---:|
| Documentos Markdown | 276 |
| Código | 42 arquivos TypeScript e 34 JavaScript |
| Experimentos | 7 executáveis e 1 blueprint documental |
| Testes executados localmente | **248 aprovados, 0 falhas** |
| Decisões arquiteturais | 13 ADRs e 13 diretivas AD |
| Propostas e programas de pesquisa | 22 APs e 10 ARPs |

Números verificados no branch local em 2026-08-21. Arquivos de dependências, `.git/` e saídas do Graphify não entram na contagem de código e documentação.

## Legenda de maturidade

O projeto distingue capacidade entregue de hipótese arquitetural:

- 🟢 **Executável:** existe código reproduzível e teste automatizado.
- 🟡 **Experimental ou especificado:** existe evidência útil, mas o contrato ainda não é canônico ou integrado.
- ⚪ **Planejado:** existe proposta ou direção, mas a capacidade não foi construída.

Se uma descrição divergir do código ou dos artefatos canônicos, o repositório vence.

## Capacidades demonstradas

### Ontologia formal e contratos de conhecimento

O experimento de [ontology framing](experiments/ontology-framing/) separa três camadas que costumam ser misturadas em sistemas de IA:

```text
Constitutional Metamodel
  identidade, autoridade, proveniência, mudança e extensão
                    ↓ governa
System Ontology
  conceitos, relações, restrições e dimensões de estado
                    ↓ representada como
Representations
  Markdown/YAML, JSON, grafos, índices e views de runtime
```

O código implementa um kernel ontológico mínimo, envelopes tipados de objetos de conhecimento, aliases de compatibilidade, relações declaradas e derivadas, validação de proveniência e propostas de migração não destrutivas.

O experimento também executa um parser YAML 1.2 read-only contra o corpus real do repositório. Ele rejeita chaves duplicadas, limita expansão de aliases, preserva campos desconhecidos e mede compatibilidade sem reescrever as fontes. Fixtures negativas comprovam que autoridade ausente, proveniência ausente e extensões que sombreiam conceitos governantes são recusadas. **35 testes aprovados.** 🟢

Artefatos principais: [AP-0006](knowledge/backlog/proposals/AP-0006-formal-system-ontology.md), [framing formal](knowledge/research/evidence/formal-system-ontology-framing.md), [kernel mínimo](knowledge/research/evidence/minimal-ontology-kernel-consumer.md) e [experimento de contratos V1-M03](knowledge/research/evidence/v1-m03-contract-parser-corpus-experiment.md).

### Fairness assurance e migração de viés

O experimento de [bias migration and fairness assurance](experiments/bias-migration-fairness-assurance/) avalia mudanças cognitivas comparando superfícies de dano antes e depois. O resultado é classificado como:

- `preserved`: o viés permaneceu;
- `reduced`: o dano foi reduzido;
- `amplified`: o dano aumentou;
- `displaced`: a métrica agregada melhorou, mas o dano migrou para outro grupo ou dimensão.

O caso `displaced` é central: ele captura regressões que desaparecem na média, mas continuam afetando uma população específica. Os cenários cobrem viés por omissão, segmentação sensível sem autoridade, autoaprovação, compressão de memória que desloca incerteza e melhoria restrita à fonte dominante. **14 testes aprovados.** 🟢

### Orquestração governada e separação de funções

O modelo separa três papéis: **CVO** define visão e aceita resultados, **CSA** projeta e revisa arquitetura, **CEA** executa a implementação. A separação reduz um modo de falha recorrente em fluxos multiagente: o mesmo agente produzir, revisar e aprovar a própria saída.

O [guard de orquestração governada](experiments/governed-role-orchestration/) valida envelopes, matriz de autoridade, identidade de sessão, transições de papel e integridade da cadeia de eventos. Ele bloqueia autoaceite do executor, impersonação do CVO, revisão falsamente independente, alteração de diretiva após autorização e aplicação de memória antes do aceite. **23 testes aprovados.** 🟢

O limite é explícito: esta é uma prova local de separação de funções, **não** um runtime multiagente com autenticação ou isolamento de credenciais. A implementação de identidade e enforcement permanece no roadmap. 🟡

### Memória institucional entre sessões

O [adaptador de memória](experiments/clite-memory-adapter-feasibility/) converte Project Memory em estado de domínio reproduzível. Ele diferencia informação canônica, derivada e temporária, detecta conflitos de obsolescência, exige decisão humana diante de contradições e produz propostas de atualização sem autoescrever a memória.

Inclui intake de projeto, normalização determinística, retomada de diferentes pontos do ciclo, validação de versão, limite de tamanho, detecção de dados sensíveis em fixtures e garantia `NO AUTO-WRITE`. **54 testes aprovados.** 🟡

### Domínio orientado a comandos, eventos e máquina de estado

O experimento de [extração de domínio](experiments/clite-domain-extraction-feasibility/) isola regras em comandos, eventos, estados e adaptadores de persistência. A mesma mecânica executa dois cenários sintéticos distintos, sem dependência de DOM, rede ou vocabulário do caso original.

Os testes cobrem transições inválidas, autorização separada de execução, replay determinístico, revisão com consequências executáveis, cancelamento, falha e retry, preservação de linhagem e reconstrução de Project Memory. **74 testes aprovados.** 🟡

### Vertical slice com falha e recuperação como estados

A [vertical slice executável](experiments/clite-stage3-vertical-slice/) percorre ideia, descoberta, entendimento, plano, aprovação, fila, execução, pendência, falha, recuperação, conclusão, revisão e evidência.

Falha, retry, cancelamento e recuperação são estados de primeira classe, não exceções escondidas no caminho feliz. A fatia também valida CSP, ausência de recursos externos, estrutura semântica, acessibilidade básica e persistência determinística. **43 testes aprovados.** 🟡

### Protocolo de interação orientado à maturidade

O [interaction protocol](experiments/interaction-protocol/) transforma uma conversa aberta em elicitação estruturada. A primeira decisão é o estágio real da iniciativa, e o roteamento muda conforme exista apenas uma ideia, trabalho tangível ou operação em andamento.

O objetivo é evitar que o sistema prescreva solução antes de entender maturidade, evidência e restrições. **5 testes aprovados.** 🟢

### Memória em grafo e proveniência

O repositório mantém uma visão derivada em grafo para navegação, descoberta de relações e auditoria de proveniência. O desenho diferencia relações declaradas de relações inferidas, evitando promover dedução automática a fato canônico. A saída atual do Graphify é uma ferramenta operacional derivada, não parte do core nem um mecanismo de GraphRAG. 🟡

## Mapa técnico

| Área | Conceitos e técnicas | Evidência | Maturidade |
|---|---|---|---|
| AI governance | separation of duties, authority matrix, human-in-the-loop, no self-approval | [GOV-003](foundation/governance/GOV-003-governed-role-separation.md), [guard](experiments/governed-role-orchestration/) | 🟢 |
| Multi-agent safety | role isolation, session identity, event integrity, review independence | [GRP-001](foundation/protocols/GRP-001-governed-role-transition-protocol.md) | 🟡 |
| Knowledge representation | formal ontology, constitutional metamodel, typed knowledge objects | [ontology framing](experiments/ontology-framing/) | 🟢 |
| Contract validation | schema validation, negative fixtures, YAML 1.2, bounded parsing | [V1-M03 experiment](knowledge/research/evidence/v1-m03-contract-parser-corpus-experiment.md) | 🟢 |
| Responsible AI | bias migration, subgroup regression, fairness assurance | [fairness experiment](experiments/bias-migration-fairness-assurance/) | 🟢 |
| Agent reliability | explicit failure modes, retry, cancellation, recovery state | [vertical slice](experiments/clite-stage3-vertical-slice/) | 🟡 |
| Institutional memory | cross-session memory, staleness detection, provenance, update proposals | [memory adapter](experiments/clite-memory-adapter-feasibility/) | 🟡 |
| Domain engineering | command/event model, deterministic state machine, replay | [domain extraction](experiments/clite-domain-extraction-feasibility/) | 🟡 |
| Requirements elicitation | staged interview, maturity routing, bounded next action | [interaction protocol](experiments/interaction-protocol/) | 🟢 |
| Architecture governance | ADR, architectural proposals, decision filters, handoff protocol | [Foundation](foundation/README.md) | 🟢 |

## Arquitetura do repositório

```text
foundation/      princípios, governança, protocolos, diretivas e ADRs
architecture/    visão arquitetural em evolução
knowledge/       propostas, avaliações, pesquisa e evidências
milestones/      handoffs e trilha de execução
experiments/     provas executáveis e fixtures sintéticas
roadmap/         sequência de validação da V1
scripts/         backup e continuidade operacional
.features/       registro de capacidades entregues
```

O bootstrap é agnóstico de runtime: Codex, Claude Code ou outro executor devem reconstruir autoridade, estado e contrato de retorno a partir dos mesmos artefatos versionados.

## Executando as provas

Requisitos: Node.js com suporte ao test runner nativo e npm.

```powershell
cd experiments/ontology-framing
npm install
npm test
```

Cada experimento tem dependências e scripts próprios. A matriz completa está em [experiments/EXPERIMENTS.md](experiments/EXPERIMENTS.md). O total de 248 testes foi obtido executando `npm test` nos sete experimentos com código.

## O que está construído e o que ainda não está

| Capacidade | Estado |
|---|---|
| Governança e memória institucional versionadas | 🟢 Em uso no próprio projeto |
| Ontology framing, kernel e validação de envelope | 🟢 Prova executável |
| Fairness assurance e detecção de bias displacement | 🟢 Prova executável |
| Guard de separação de papéis | 🟢 Prova executável local |
| Intake e adaptador de Project Memory | 🟡 Experimental |
| Máquina de estado e vertical slice | 🟡 Experimental, conteúdo sintético |
| Braço de Processos | 🟡 Blueprint documental |
| Knowledge Object Contracts canônicos | ⚪ Planejados para V1-M03 |
| Compiler determinístico | ⚪ Planejado para V1-M04 |
| Runtime adapter de referência | ⚪ Planejado para V1-M06 |
| Motor real de execução de agentes | ⚪ Não construído |
| Autenticação, identity enforcement, observabilidade e CI | ⚪ Não construídos |
| Team Mode, Product Mode e produção | ⚪ Deliberadamente adiados |

O [roadmap V1](roadmap/V1.md) define a ordem de validação. A auditoria interna registra como risco principal o projeto permanecer pesquisa sem virar ferramenta de uso real. Essa autocrítica orienta a próxima fase para intake, dogfooding e execução supervisionada, não para acumular documentação.

## Limites e posicionamento

Este projeto demonstra engenharia de artefatos cognitivos, governança de agentes, modelagem de conhecimento, Responsible AI e validação experimental. Ele **não** oferece hoje:

- pacote instalável ou API pública;
- runtime autônomo de agentes;
- autenticação ou isolamento real de credenciais entre papéis;
- RAG vetorial, embeddings ou busca híbrida;
- observabilidade de custo, tokens e latência;
- garantia de produção.

Essa fronteira é proposital e verificável. O valor do repositório está tanto nas provas que executa quanto na disciplina de não apresentar especificação como software entregue.

## Entradas recomendadas

1. [O que o sistema faz](O-QUE-O-SISTEMA-FAZ.md), visão em linguagem simples
2. [Agent Start Here](AGENT_START_HERE.md), bootstrap para humanos e agentes
3. [Foundation](foundation/README.md), princípios e governança
4. [Experiments](experiments/EXPERIMENTS.md), matriz das provas executáveis
5. [Ontology framing](experiments/ontology-framing/README.md), ontologia e contratos
6. [System audit](knowledge/research/evidence/system-audit-gap-register-and-portfolio.md), gaps e prontidão
7. [Roadmap V1](roadmap/V1.md), sequência de evolução

