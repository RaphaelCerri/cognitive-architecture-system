# Cognitive Architecture System

Sistema cognitivo multiagente governado, com memória institucional versionada. Cada "braço" do sistema é um agente especializado que conduz uma entrevista estruturada sobre um domínio, extrai o que o usuário sabe (inclusive o que ele esqueceu de dizer) e devolve um artefato estruturado em vez de texto livre.

O princípio que organiza tudo: **nenhum agente aprova o próprio trabalho**, e nenhuma conversa, pessoa ou modelo é fonte de verdade por si só. O repositório é a memória.

Este README é a porta de entrada humana. Um executor (humano ou IA) assumindo trabalho aqui começa por [`AGENT_START_HERE.md`](AGENT_START_HERE.md), que é a porta de entrada institucional para reconstrução de contexto, autoridade e contrato de retorno.

**Escala:** 261 documentos de arquitetura, 67 arquivos de código, 21 suítes de teste, 8 experimentos executáveis.

---

## Legenda de honestidade

Este repositório marca explicitamente o que roda e o que não roda. A convenção é usada em todo o projeto e vale também neste README:

🟢 existe e roda &nbsp;·&nbsp; 🟡 existe como especificação ou experimento &nbsp;·&nbsp; ⚪ planejado, ainda não construído

Se algo aqui não bater com o repositório, o repositório vence.

---

## Visão técnica

### Governança de agentes: separação de papéis com autoridade declarada

O modelo de governança separa três papéis com autoridade distinta e não sobreponível: **CVO** define visão e aceita resultado, **CSA** projeta e revisa arquitetura, **CEA** executa implementação. A separação existe para eliminar o modo de falha mais comum em sistema multiagente, que é o agente validar a própria saída e propagar erro com confiança alta.

Formalizado em `AD-010-governed-role-orchestration` e `GOV-001`, com experimento executável em `experiments/governed-role-orchestration/`. 🟢

Complementado por **protocolo de desafio arquitetural** (`ACP-001-architectural-challenge-protocol`), que define como uma decisão pode ser contestada, e por **filtro de decisão arquitetural** (`ADF-001`), que estabelece o critério para uma decisão entrar ou não no registro canônico.

### Ontologia formal e validação de objeto de conhecimento

O sistema trata conhecimento como objeto tipado, não como texto. Cada artefato carrega envelope com `schema_version`, `kind`, `knowledge_type`, `status`, `authority` e proveniência declarada.

O experimento `experiments/ontology-framing/` implementa **validação de esquema com teste negativo**: as *fixtures* incluem casos construídos para **falhar** deliberadamente, como uma decisão arquitetural sem *claim* de autoridade, garantindo que o validador rejeita objeto malformado em vez de aceitar silenciosamente. 🟢

Especificado em `AP-0006-formal-system-ontology`, `AD-008-minimal-ontology-kernel`, `AD-009-knowledge-object-envelope-candidate` e nos ADRs `ADR-0001-canonical-knowledge-object-format` e `ADR-0002-declared-and-inferred-relations`.

A distinção entre **relação declarada e relação inferida** (`ADR-0002`) é central: o sistema nunca confunde o que foi afirmado explicitamente com o que ele deduziu, e a confiança de cada aresta é rastreável.

### Garantia de equidade e migração de viés (bias migration & fairness assurance)

Controle transversal aplicado a qualquer mudança cognitiva do sistema. Em vez de perguntar apenas "essa mudança melhorou a métrica?", o protocolo pergunta "para onde o viés foi?".

O experimento `experiments/bias-migration-fairness-assurance/` classifica o resultado de uma mudança em quatro estados: **`preserved`** (viés intacto), **`reduced`** (viés diminuído), **`amplified`** (viés aumentado) e **`displaced`** (viés deslocado para outro grupo ou dimensão).

A categoria `displaced` é a razão de ser do experimento: é o modo de falha em que uma métrica agregada melhora enquanto o prejuízo migra para uma população diferente, ficando invisível na média. Prova executável com teste. 🟢

### Protocolo de interação: entrevista estruturada como espinha do sistema

Todos os braços do sistema usam o mesmo protocolo de condução de conversa: poucas perguntas por vez, ramificação condicional conforme a resposta, sondagem ativa do não-dito (falha, plano B, gargalo), geração de insight e fechamento com próxima ação.

O experimento (`experiments/interaction-protocol/`) existe sob a premissa declarada de que **especificar não é provar**: o objetivo é provar a forma do protocolo rodando, não construir uma interface. 🟢

### Memória de projeto entre sessões

Adaptador que converte o estado de um projeto em memória estruturada, para que contexto, decisão e conhecimento sobrevivam ao fim de uma sessão. Inclui tratamento de **conflito de obsolescência** (*staleness conflict*), que é o caso em que a memória e o estado real do projeto divergem.

Experimento em `experiments/clite-memory-adapter-feasibility/` com 10 suítes de teste, cobrindo ingestão, normalização, leitura, proposta e independência de módulo. 🟡

### Extração de domínio testável

Isolamento da lógica de um domínio em **comandos, eventos e máquina de estado**, de forma que a regra de negócio seja testável sem dependência do contexto de aplicação. O experimento prova explicitamente que o domínio **não depende semanticamente** do caso de uso que o originou, usando *fixtures* de domínios diferentes para demonstrar independência.

`experiments/clite-domain-extraction-feasibility/`, com teste de transição inválida, independência e revisão de memória. 🟡

### Ciclo de vida completo em fatia vertical

`experiments/clite-stage3-vertical-slice/` implementa o ciclo inteiro como máquina de estado: ideia, descoberta, suposições, entendimento, plano, aprovação, fila, execução, pendência, **falha, recuperação**, conclusão, resultado e evidências.

Tratar falha e recuperação como estados de primeira classe, e não como exceção, é o que separa orquestração de agente que sobrevive em produção de demonstração que funciona apenas no caminho felizardo. 🟡

### Grafo de conhecimento como camada de navegação

Integração com Graphify: qualquer pasta é convertida em grafo de conhecimento navegável, com detecção de comunidade, identificação de nós centrais e trilha de auditoria de proveniência (extraído, inferido, ambíguo). Permite que o sistema absorva um projeto existente apenas apontando o caminho. Executado em dois projetos reais. 🟢

### Braços do sistema (capacidades)

| Braço | O que faz | Estado |
|---|---|---|
| Protocolo de Interação | A espinha: conduz conversa em etapas, ramifica, sonda o não-dito, gera insight | 🟢 roda |
| Braço de Processos | Entrevista sobre processo real, mapeia estado atual, levanta dores, propõe processo otimizado | 🟡 blueprint |
| Fábrica de Braços | O sistema se entrevista para criar um braço novo (auto-utilização) | ⚪ planejado |
| Braço de Marketing | Estudo de mercado, persona, funil, arquétipo de marca, copy, roteiro | ⚪ planejado |

---

## Registro arquitetural

Decisão de arquitetura é registrada, numerada e versionada. As famílias de artefato:

| Prefixo | O que é | Exemplos |
|---|---|---|
| **ADR** | Architectural Decision Record (13 registrados) | formato canônico de objeto de conhecimento, relação declarada versus inferida, fronteira de linguagem da plataforma, evolução governada por humano |
| **AD** | Architectural Directive (10 registradas) | execução V1, protocolo de handoff, programa de pesquisa arquitetural, ontology framing, orquestração governada de papéis |
| **AP** | Architectural Proposal (8+) | camada de constituição, registro de tipos, motor de ciclo de vida de ideia, ontologia formal, núcleo agnóstico de runtime |
| **ACP / ADF / AIP / ACD** | Protocolos e princípios transversais | protocolo de desafio arquitetural, filtro de decisão, princípio de integridade, transição para execução |

Protocolos centrais: **PMM-001** (Project Memory Manifesto), **IHP-001** (Implementation Handoff Protocol), **GOV-001** (papéis e responsabilidades do conselho de arquitetura).

---

## Stack e execução

TypeScript e JavaScript sobre Node. Cada experimento tem `package.json` e `tsconfig.json` próprios, o que mantém independência entre eles e evita acoplamento acidental por dependência compartilhada.

```bash
cd experiments/<nome-do-experimento>
npm install
npm test
```

Os experimentos `interaction-protocol` e `bias-migration-fairness-assurance` incluem `demo.js` executável.

---

## Conceitos técnicos demonstrados

Mapa direto entre conceito e evidência, para quem está avaliando cobertura técnica:

| Conceito | Termo técnico | Evidência | Estado |
|---|---|---|---|
| Separação de autoridade entre agentes | governed multi-agent orchestration, separation of duties | `AD-010`, `experiments/governed-role-orchestration/` | 🟢 |
| Ontologia formal de conhecimento | formal ontology, knowledge object schema, typed knowledge envelope | `AP-0006`, `experiments/ontology-framing/` | 🟢 |
| Validação por teste negativo | negative fixture testing, schema contract validation | `experiments/ontology-framing/fixtures/` | 🟢 |
| Auditoria de equidade em mudança | bias migration analysis, fairness assurance | `experiments/bias-migration-fairness-assurance/` | 🟢 |
| Entrevista estruturada com ramificação | staged interaction protocol, requirement elicitation | `experiments/interaction-protocol/` | 🟢 |
| Grafo de conhecimento com proveniência | knowledge graph, community detection, provenance audit trail | integração Graphify | 🟢 |
| Memória entre sessões | project memory, staleness conflict resolution | `experiments/clite-memory-adapter-feasibility/` | 🟡 |
| Domínio isolado e testável | domain extraction, command/event model, state machine | `experiments/clite-domain-extraction-feasibility/` | 🟡 |
| Falha e recuperação como estado | failure mode handling, recovery state | `experiments/clite-stage3-vertical-slice/` | 🟡 |
| Rastreabilidade de decisão | architectural decision records, versioned governance | 13 ADRs, 10 ADs | 🟢 |

---

## O que este projeto não é

Não é framework para instalar, não é biblioteca, e não tem release. É o registro canônico e agnóstico de runtime de uma arquitetura em construção, mais os experimentos que provam cada peça antes dela virar parte do sistema.

O nome do projeto é provisório.
