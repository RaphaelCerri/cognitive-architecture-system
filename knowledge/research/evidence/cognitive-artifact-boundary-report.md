---
schema_version: 0.1.0-experimental
document_role: research_evidence_report
title: Cognitive Artifact Boundary Report
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0008]
language: pt-BR
---

# Cognitive Artifact Boundary Report

## Escopo e método

Esta slice testa fronteiras; não define Ontologia, schema, contrato estável ou implementação. Foram comparadas fontes oficiais selecionadas de A2A, MCP, OpenAI Agents SDK, Google ADK, LangGraph, NIST e OWASP. As afirmações são marcadas como **Fato externo**, **Inferência**, **Hipótese** ou **Recomendação preliminar**.

## Definições candidatas

| Conceito | Definição candidata | O que não é |
|---|---|---|
| Capability | **Hipótese:** descrição runtime-neutral de um resultado ou potencial verificável, independente do executor. Pode ter identidade, composição, dependências, precondições, entradas, saídas e efeitos se uso e governança justificarem. | Ferramenta, permissão, procedimento ou prova de posse. |
| Skill | **Hipótese:** conhecimento procedural reutilizável, com critérios de uso/não uso, decisão, validação e versionamento; pode referenciar ferramentas ou outras Skills. | Autoridade, credencial, Tool ou Capability inteira. |
| Strategy | **Hipótese:** abordagem adaptável e reutilizável que orienta decisões, seleção e ordenação de Skills ou Workflows conforme contexto. | Estado de execução ou Workflow Instance. |
| Workflow | **Hipótese:** definição executável de controle de fluxo, com etapas/estados, transições, gates, retries, timeouts, compensações e parada. Pode ser pipeline, loop ou grafo, mas não precisa ser conceitualmente limitado a grafo. | Agent, autoridade ou instância de execução. |
| Agent | **Hipótese:** blueprint de um possível executor configurado, que referencia responsabilidades, claims de Capability, Skills, Strategies, Policies, ferramentas e limites. Blueprint, configuração compilada e execução são objetos distintos. | Modelo, runtime, prompt, lista arbitrária de ferramentas ou fonte de sua própria autoridade. |
| Task Force | **Hipótese:** composição temporária planejada ou executada de participantes para um objetivo, com papéis, autoridade distribuída, contexto, dissolução e consolidação de evidência. | Equipe permanente presumida ou soma irrestrita dos privilégios dos membros. |
| Policy | **Hipótese:** regra canônica obrigatória emitida por autoridade competente, com escopo, precedência, exceção e enforcement externos ao artefato governado. | Recomendação opcional, teste ou evidência. |
| Guardrail Profile | **Hipótese:** bundle derivado e rastreável de controles proporcionais ao risco, contexto, autoridade e reversibilidade. | Policy canônica, prova de eficácia ou licença para executar. |
| Runtime Configuration | **Hipótese:** representação derivada e versionada para um runtime, rastreável ao blueprint e às perdas semânticas da compilação. | Source of Truth canônica. |
| Execution Instance | **Hipótese:** ocorrência com estado, identidade de execução, versões fixadas, autoridade concedida, budgets, logs e evidência. | Definição do artefato ou lifecycle canônico. |

## Respostas consolidadas por conceito

### Capability

**Inferência:** descreve primariamente resultado/potencial, não comportamento interno. Pode existir antes da implementação e deve ser runtime-neutral; composição e dependências são candidatas muitos-para-muitos, não cardinalidades estabilizadas. Capability de negócio expressa efeito no domínio; técnica expressa mecanismo habilitador. Intent pode demandar Capability, mas não a deriva de forma infalível. Um Agent apenas declara claim; testes, observações e evidência independente demonstram posse. Autoridade não pertence à Capability.

### Skill

**Inferência:** Skill é Knowledge procedural, não simplesmente Capability implementada nem Procedure rígida. Pode suportar várias Capabilities e requerer outras Skills; pode conter pontos de decisão, usar Tools e produzir efeitos quando um executor autorizado a aplica. Critérios de quando usar/não usar, precondições, contraprovas, testes, versão, proveniência e compatibilidade são necessários. Skill externa deve manter origem/licença e passar por avaliação. Skill canônica e compilada para runtime devem ser distinguíveis. Credenciais e permissões ficam fora dela.

### Strategy

**Inferência:** Strategy é conhecimento prescritivo-adaptativo: contém princípios e critérios de decisão, pode selecionar Skills e alterar ordem, e existe sem executor. Workflow define controle executável; Strategy orienta como escolher/adaptar esse controle. Ralph Loop é melhor tratado provisoriamente como padrão de Strategy iterativa que pode ser realizado por um Workflow com loop e condições de parada; o nome sozinho não determina identidade.

### Workflow

**Inferência:** identidade própria é útil quando definição precisa ser versionada, retomada ou auditada. Executabilidade significa semântica operacional suficiente, não que cada documento já seja runnable. Pipeline e loop são formas de controle; grafo é representação útil, não requisito universal. Estados, gates, retry, timeout, compensação, idempotência e parada pertencem à definição; checkpoint, posição e resultados pertencem à instância. Human-in-the-Loop é gate de decisão; Human-on-the-Loop exige observação, intervenção e kill switch. Workflow respeita Policy e autoridade concedida à execução; não as cria.

### Agent

**Inferência:** Agent Blueprint é candidato canônico; Agent executável é configuração derivada; execução concreta é instância. O blueprint referencia Skills e declara claims de Capability, mas demonstração vem de avaliação externa. Memória é uma relação/política e um estado de execução, não parte indivisível da identidade. Um Agent pode não ter Tools ou autonomia; nesse caso ainda pode representar papel configurado, embora um executor determinístico simples possa ser suficiente. Autonomia, seleção de Strategy e participação em Workflow são capacidades de configuração, não essência obrigatória.

Para evitar objeto Deus: separar conhecimento, controle de fluxo, ferramentas, Policy, autoridade, memória, runtime e evidência; impor referências explícitas e ownership externo. Autoalteração não pode promover versão canônica; autoaprovação e autocertificação são proibidas. Revogação deve atuar sobre identidade/versão, credenciais, grants e configurações implantadas. Cada ação deve registrar blueprint/configuração/runtime/modelo/Policy/Tool e identidade da execução fixados.

### Task Force

**Inferência:** por padrão é plano derivado e instância temporária, não novo tipo canônico permanente. Persistência só se justifica para retomada, auditoria ou padrão reutilizável distinto. Seleção deve partir de capacidades necessárias e conflitos de função. Autoridade é concedida por participante/ação, nunca união automática. Contexto é mínimo e compartimentado; conflitos usam precedência e escalonamento externos. Segregação de funções, revisão independente e logs reduzem privilege aggregation e collusion. Memória temporária é descartada segundo Policy; somente evidência revisada pode ingressar na Project Memory.

### Policy, Guardrail Profile e Runtime Configuration

**Inferência:** Policy é canônica; Guardrail Profile é derivado e pode se aplicar a artefato, Tool, Workflow e execução sem duplicar a Policy de origem. Controles obrigatórios derivam de Policy; recomendados derivam de risco/evidência e não fingem enforcement. Exceções exigem autoridade externa, prazo, escopo, justificativa e auditabilidade. Guardrails ligam risco, autoridade e reversibilidade, mas teste e evidência medem sua eficácia.

Runtime Configuration é derivada, deve possuir identidade/versionamento operacional quando implantável, apontar para blueprint e inputs de compilação, registrar incompatibilidades e perdas e falhar quando semântica crítica não puder ser representada. Compatibilidade deve ser matriz de features e testes, não equivalência nominal. Framework externo não define o Core.

## Separações obrigatórias

```text
Canonical Blueprint != Runtime Configuration != Execution Instance
Skill != Permission
Capability != Skill != Tool
Strategy != Workflow Instance
Agent Blueprint != Model != Runtime
Guardrail != Test != Evidence
Artifact lifecycle != Execution lifecycle
```

**Fato externo:** A2A separa Agent Card, mensagens e Tasks com lifecycle; MCP separa tools executáveis, resources passivos e prompts; OpenAI separa agents, runner, handoffs e guardrails; ADK e LangGraph oferecem formas distintas de workflow e execução. **Inferência:** nenhum desses vocabulários, isoladamente, resolve a modelagem canônica do projeto.

## Anti-patterns candidatos

- Agent definido apenas por prompt ou como agrupamento arbitrário de Tools.
- Capability tratada como Tool; Skill tratada como permissão ou ligada ao fornecedor.
- Workflow embutido no Agent sem identidade, estado, gates ou parada.
- Agent contendo governança própria, concedendo autoridade, alterando ou certificando a si mesmo.
- Skill com credenciais; Runtime Configuration como Source of Truth.
- Guardrail genérico, somente baseado em LLM, duplicado ou sem vínculo com risco.
- Task Force permanente sem necessidade, com privilégios agregados ou contexto irrestrito.
- Memória temporária promovida automaticamente a conhecimento canônico.
- Framework externo determinando Ontologia; avaliação realizada pelo próprio artefato.

## Ambiguidades e questões abertas

- Quais conceitos justificam identidade canônica após casos reais e governança?
- Capability terá contrato de entradas/saídas/efeitos ou apenas taxonomia de resultados?
- Onde termina Skill adaptativa e começa Strategy?
- Workflow é Knowledge, Execution ou duas representações relacionadas?
- Agent Blueprint é tipo próprio ou visão composta de objetos existentes?
- Task Force merece blueprint reutilizável além de plano/execução?
- Qual autoridade publica Policy, concede exceção e certifica evidência?
- Como medir perda semântica e equivalência entre runtimes?
- Quais thresholds demonstram Capability e revogam claims?

## Recomendações preliminares

1. **Adaptar** as separações observadas, sem adotar schemas externos.
2. Preservar relações muitos-para-muitos como hipóteses; não estabilizar cardinalidades.
3. Exigir separação knowledge/authority e grants por execução com fail-closed.
4. Tratar Blueprint como candidato canônico, Runtime Configuration como derivado e Execution Instance como estado operacional.
5. Deferir identidade ontológica e schemas até casos, lifecycle e ownership serem demonstrados.
6. Submeter esta slice ao CSA/Conselho antes de escolher nova pesquisa.

## Proveniência e limitações

Fontes e datas constam na comparação externa. A amostra é proporcional, não exaustiva; não foram consultados profundamente Semantic Kernel, AutoGen, CrewAI, Letta, BeeAI, Claude Skills, policy engines nem especificações gerais de workflow. NIST 2026 é Initial Public Draft e registra perguntas, não requisitos normativos. Não houve benchmark, implementação ou teste de runtime.
