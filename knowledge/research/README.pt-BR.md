---
schema_version: 0.1.0-experimental
document_role: category_index
title: Architectural Research Programs
status: experimental
language: pt-BR
---

# Architectural Research Programs

> [English](README.md) · **Português**

Esta categoria registra investigações arquiteturais antes que elas se tornem Architectural Proposals.

Um Architectural Research Program identifica um problema, formula perguntas, reúne evidências e compara princípios e alternativas. Ele não representa intenção de implementação, aprovação tecnológica ou inclusão no Core.

Na V1, cada programa é um perfil experimental de `Knowledge` por `knowledge_type: architectural_research_program`. Isso não promove Research Program a Core Type, domínio, estado de AP ou fonte de autoridade e não altera a Ontologia.

O atributo candidato `research_form` distingue:

- `program`: agenda ampla e coordenada;
- `case`: estudo delimitado de tecnologia, abordagem ou implementação;
- `hypothesis`: investigação de possibilidade arquitetural não comprovada.

O atributo ainda não constitui schema definitivo.

## Relação com APs e decisões

`Sinal externo ou questão → Research Program → evidências → nenhuma mudança | AP | ADR | RFC | candidato a domínio`

- Pesquisa pode terminar sem recomendar mudança ou como inconclusiva.
- Quando surgir intenção de alterar arquitetura ou implementar capacidade, uma AP continua obrigatória.
- ADR registra decisão aceita; pesquisa apenas informa, nunca possui autoridade para decidir.
- RFC pode especificar mudança autorizada; pesquisa não substitui RFC.
- Um candidato a domínio ainda precisa passar por AP, ADF e aprovação do Conselho.

## Regras

- Estudar o problema antes da tecnologia.
- Extrair princípios, não copiar implementações.
- Preservar proveniência, licenças e limitações das evidências.
- Comparar com capacidades já existentes no sistema.
- Avaliar custo, risco, manutenção, governança e Source of Truth.
- Não tratar popularidade como evidência.
- Separar achados, inferências e recomendações.

## Lifecycle experimental

`identified → scoped → authorized → active ↔ paused → concluded | terminated`

- `identified`: questão registrada;
- `scoped`: perguntas, limites, método e critérios definidos;
- `authorized`: início aprovado pela autoridade competente;
- `active`: pesquisa substantiva realmente em execução;
- `paused`: interrupção temporária com condição de retomada;
- `concluded`: encerramento com resultado explícito;
- `terminated`: encerramento por custo, irrelevância, conflito, inviabilidade ou governança.

## Dimensões experimentais de estado

`document_state`, `governance_state`, `research_state`, `knowledge_maturity`, `outcome`, `implementation_state` e `operational_state` não são sinônimos. Os campos documentam o modelo aprovado experimentalmente, mas seus enums não são globais e nenhum objeto fora desta categoria foi migrado.

## Critérios operacionais

### Início

Pergunta específica, problema relevante, owner, escopo, exclusões, método de evidência, orçamento ou timebox, riscos, critérios de encerramento e autorização proporcional.

### Divisão

Decisões independentes, métodos distintos, owners ou autoridades diferentes, caso dominando programa, escopo incompatível com timebox ou hipótese que exija avaliação própria.

### Pausa

Ausência de evidência primária, dependência indefinida, orçamento atingido, perda temporária de prioridade, conflito de autoridade, risco não tratado ou duas iterações sem evidência nova.

### Encerramento

Perguntas respondidas ou inconclusivas, alternativas comparadas, evidência e proveniência preservadas, custos e riscos explícitos, resultado definido, questões residuais encaminhadas e conclusão revisada.

## Relações seguras

Research pode `inform`, `recommend`, `investigate`, `evaluate` ou `supersede_research`. Não se transforma automaticamente em AP, ADR ou RFC e nunca autoriza implementação.

## Controle de portfólio

Toda pesquisa ativa deve possuir owner, orçamento ou timebox, checkpoint baseado em evidência e condição de encerramento. Ausência de progresso provoca pausa, não permanência artificial em `active`.

## Tecnologias e peças externas sob investigação

O inventário inclui Graphify, GraphRAG, knowledge graphs, deterministic graph compilation, context retrieval, context compression, token estimation, memory architectures, durable execution, stateful orchestration, prompt and cognitive compilation, evaluation engines, observability, MCP, A2A, policy engines, sandboxing, provenance e supply-chain security.

Nenhum claim será registrado sem evidência primária. Avaliações futuras poderão recomendar `Adopt`, `Adapt`, `Absorb`, `Integrate`, `Reject` ou `Defer`, considerando problema, aderência, qualidade, custo, tokens, segurança, determinismo, auditabilidade, interoperabilidade, manutenção, maturidade, licença, lock-in, TypeScript e risco de Source of Truth paralela.

## Portfólio

- `ARP-0001`: Context, Retrieval and Compression.
- `ARP-0002`: Compilation, Planning and Cognitive Systems.
- `ARP-0003`: Graph, Memory and Provenance Architectures.
- `ARP-0004`: Runtime Augmentation and Context Economics.
- `ARP-0005`: Graphify Research Case.
- `ARP-0006`: Context Retrieval Engine Hypothesis.
- `ARP-0007`: Security Architecture, Guardrails and Assurance.
- `ARP-0008`: Cognitive Artifact Engineering.
- `ARP-0009`: Experience Engineering and Interface Architecture.
- `ARP-0010`: Formal System Ontology and Constitutional Metamodel.

Os evidence artifacts vivem em [`evidence/`](evidence/) com IDs lógicos
`ARP-xxxx-Eyy` declarados no frontmatter (os nomes de arquivo são descritivos
em kebab-case; o ID autoritativo é o do frontmatter). Não há índice manual de
evidências — a listagem é derivável do frontmatter e um índice compilado é
trabalho futuro do Compiler. (Portfólio atualizado pela auditoria macro,
Tier A, 2026-07-23.)

Use o [template de pesquisa arquitetural](_templates/architectural-research-program.md) para novos programas.
