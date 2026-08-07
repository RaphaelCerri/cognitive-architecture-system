---
canonical: false
status: draft
document_role: temporary_architectural_review
title: "ARP, Knowledge Maturity and Governed Cognitive Loops Review"
created_at: 2026-07-22
author: "Chief Execution Architect"
review_authority: "Architecture Council"
language: pt-BR
restrictions:
  - "Não canoniza ARP, KMM ou Governed Cognitive Loop."
  - "Não autoriza implementação, pesquisa externa ou commit."
  - "Não altera os dez arquivos ARP preservados."
---

# Architectural Review Report — ARP, Knowledge Maturity and Governed Cognitive Loops

> Documento temporário, não canônico e não commitado. Registra análise para decisão do Conselho; não altera a arquitetura.

## 1. Método e classificação das afirmações

- **Fato:** estado ou contrato já verificável na Project Memory ou nas diretivas da sessão.
- **Interpretação:** leitura do CEA sobre implicações dos fatos.
- **Hipótese:** possibilidade ainda sem evidência ou aprovação suficiente.
- **Recomendação:** alternativa preferida pelo CEA, sujeita à decisão do Conselho.

## 2. Avaliação da necessidade do ARP

### Fatos

- AP representa intenção de evolução arquitetural e pode conduzir a implementação.
- O programa proposto precisa admitir conclusão sem mudança.
- Tecnologias externas precisam ser estudadas antes de qualquer decisão de adoção.
- Os materiais ARP atuais estão preservados, não canônicos e não commitados.

### Interpretação

Existe uma lacuna real entre identificar uma questão ou tecnologia e propor uma mudança. Usar AP para toda investigação transformaria curiosidade em intenção arquitetural e poluiria o backlog. Usar ADR seria inadequado porque ainda não existe decisão. Usar RFC anteciparia especificação de mudança.

### Recomendação

Reconhecer Architectural Research como identidade documental útil, mas não promovê-la a Core Type. Na V1, tratá-la como perfil ou especialização experimental de `Knowledge`, sujeito ao ADF antes de qualquer permanência ontológica.

## 3. Alternativas ontológicas para ARP

### Alternativa A — Core Type independente

**Benefício:** identidade e contratos fortes.

**Risco:** aumenta prematuramente a Ontologia e confunde importância operacional com fundamentação ontológica.

**Avaliação:** não recomendada agora.

### Alternativa B — Especialização de Knowledge

`Knowledge` com perfil semântico de pesquisa, lifecycle próprio e relações explícitas.

**Benefício:** preserva identidade sem alterar o Core.

**Risco:** especializações podem proliferar sem registry ou critérios.

**Avaliação:** recomendada para experimentação na V1.

### Alternativa C — Estado de AP

Adicionar `researching` ao lifecycle de AP.

**Benefício:** menos categorias documentais.

**Risco:** pesquisa sem intenção de mudança e pesquisa que gera múltiplas APs deixam de ser representáveis corretamente.

**Avaliação:** rejeitada.

### Alternativa D — Estágio de maturidade de uma ideia

Tratar Research como fase de um objeto contínuo.

**Benefício:** narrativa simples.

**Risco:** confunde artefatos independentes, proveniência e relações muitos-para-muitos.

**Avaliação:** útil como visão derivada, não como identidade canônica.

### Alternativa E — Processo sem objeto próprio

Registrar apenas evidências genéricas produzidas por um processo de pesquisa.

**Benefício:** Ontologia mínima.

**Risco:** perde owner, escopo, orçamento, perguntas, estado, encerramento e rastreabilidade do estudo.

**Avaliação:** insuficiente para pesquisas governadas de longa duração.

## 4. Programa, caso e hipótese

### Interpretação

Os seis materiais atuais misturam três formas:

- **program:** agenda ampla e contínua, como Context, Retrieval and Compression;
- **case:** estudo delimitado de um objeto, como Graphify;
- **hypothesis:** avaliação de uma possibilidade, como Context Retrieval Engine.

### Recomendação

Não criar três tipos. Usar uma especialização `architectural_research` com um atributo futuro como `research_form: program | case | hypothesis`. A escolha só deve ser canonizada após verificar que as diferenças exigem contratos distintos.

## 5. Lifecycle proposto

Lifecycle de pesquisa, separado de aprovação e completude documental:

`identified → scoped → authorized → active ↔ paused → concluded`

Saídas possíveis de `concluded`:

- `no_change`;
- `inconclusive`;
- `recommend_ap`;
- `inform_adr`;
- `recommend_rfc`;
- `architectural_candidate`;
- `superseded_by_research`.

`terminated` pode encerrar pesquisa por perda de relevância, custo injustificável ou conflito, preservando justificativa.

## 6. Dimensões de estado

### Problema

Um único campo `status` mistura significados incompatíveis. Um documento pode estar completo, sua pesquisa pausada, sua hipótese ainda experimental e sua execução inexistente.

### Recomendação

Separar, quando a evidência justificar:

```yaml
document_state: draft | reviewable | complete | superseded
governance_state: proposed | authorized | rejected | revoked
research_state: identified | scoped | active | paused | concluded | terminated
knowledge_maturity: hypothesis | evidence_gathering | supported | refuted | inconclusive
outcome: null | no_change | recommend_ap | inform_adr | recommend_rfc | architectural_candidate
```

Não adicionar todos os campos imediatamente. Primeiro validar quais dimensões são consultadas por decisões reais.

`operational` deve significar vigência operacional de uma regra, não completude documental. `active` deve indicar atividade de pesquisa somente quando a pesquisa estiver autorizada e realmente em execução.

## 7. Critérios de início

Uma pesquisa pode iniciar quando possuir:

- pergunta falsificável ou decisão futura claramente informada;
- problema relevante para o sistema;
- owner;
- escopo e exclusões;
- fontes ou método de evidência;
- orçamento ou timebox;
- riscos e restrições;
- critérios de encerramento;
- autorização compatível com custo, acesso e risco.

Registro de uma linha não equivale ao início de pesquisa substantiva.

## 8. Critérios de divisão

Dividir quando existir ao menos uma destas condições:

- perguntas podem terminar com decisões independentes;
- métodos ou evidências são materialmente diferentes;
- owners ou autoridades diferentes são necessários;
- um caso concreto ameaça dominar um programa amplo;
- o escopo não cabe no timebox;
- uma hipótese exige avaliação própria pelo ADF.

Não dividir apenas para reduzir tamanho de arquivo.

## 9. Critérios de pausa e retomada

Pausar quando:

- faltar evidência primária;
- uma dependência arquitetural estiver indefinida;
- o orçamento for atingido;
- o problema perder prioridade;
- existir conflito de autoridade ou risco não autorizado;
- duas iterações não produzirem evidência nova.

Toda pausa precisa registrar razão, evidência já coletada, condição de retomada e data ou evento de revisão.

## 10. Critérios de encerramento

Encerrar quando:

- perguntas estiverem respondidas ou explicitamente inconclusivas;
- alternativas relevantes tiverem sido comparadas;
- evidências e proveniência estiverem preservadas;
- custos, riscos e limitações estiverem registrados;
- existir uma saída explícita, inclusive `no_change`;
- questões residuais tiverem destino;
- o responsável e a autoridade de revisão aceitarem a conclusão.

Pesquisa não precisa gerar AP para ser bem-sucedida.

## 11. Governança e prevenção de backlog infinito

### Recomendação

- WIP limitado para pesquisas ativas;
- owner e autoridade explícitos;
- timebox ou orçamento;
- checkpoint baseado em evidência nova;
- data ou evento de revisão;
- critério de encerramento obrigatório;
- pesquisas sem progresso são pausadas, nunca mantidas artificialmente como ativas;
- portfólio e casos separados por `research_form`;
- mudança de pesquisa para intenção de implementação exige AP;
- pesquisa não modifica fontes canônicas automaticamente.

## 12. Relação com AP, ADR e RFC

### AP

Research pode produzir zero, uma ou várias recomendações de AP. AP pode surgir sem pesquisa formal quando o problema e a evidência já forem claros. Research informa; AP propõe mudança.

### ADR

Research fornece evidência para uma decisão, mas não produz autoridade. Um ADR pode registrar decisão baseada em pesquisa, evidência operacional ou diretiva do Conselho. A relação recomendada é `informs`, não transformação automática.

### RFC

RFC especifica uma mudança antes da implementação e permanece consistente com fontes superiores. Research pode recomendar que um RFC seja produzido; não deve criar um RFC normativo sem autorização. RFC não é estágio obrigatório de toda pesquisa ou AP.

## 13. Knowledge Maturity Model

### Hipótese avaliada

`Knowledge → Architectural Research → Architectural Proposal → Architectural Decision → Execution → Operation → Evolution`

### Interpretação

A cadeia mistura artefatos de conhecimento, atividades e estados do sistema. Research, AP, ADR e RFC possuem identidades independentes e relações muitos-para-muitos. Execution e Operation não são maturidade documental. Evolution fecha ciclos ao gerar nova evidência.

### Recomendação

Não canonizar KMM como workflow nem tipo. Investigar primeiro uma visão chamada provisoriamente **Architectural Knowledge Evolution Map**:

`Observation/Knowledge → optional Research → optional AP → Decision → optional RFC/Plan → Execution → Validation/Operation → Evidence → Evolution`

Setas representam relações permitidas, não obrigatoriedade. Etapas podem ser puladas conforme risco, novidade e evidência. Uma pesquisa pode terminar sem mudança; uma decisão pode nascer de evidência operacional.

## 14. Governed Cognitive Loop

### Definição analisada

Ciclo delimitado por objetivo, contexto, autoridade, orçamento, unidade de trabalho, critérios de validação, progresso, condições de parada, escalada e registro na Project Memory.

### Recomendação

Tratar inicialmente como padrão contratual ou envelope de governança sobre ciclos, não como Core Type. O padrão só deve virar objeto se houver necessidade de identidade persistente, composição, inspeção ou execução derivada.

Invariantes candidatos:

- objetivo e autoridade explícitos;
- menor unidade útil por iteração;
- orçamento de tempo, iterações, custo e efeitos;
- validação proporcional;
- progresso mensurável;
- critérios de parada antes do início;
- escalada por risco, ambiguidade ou autoridade;
- memória sem criação de Source of Truth paralela.

## 15. Relação com Bounded Execution Loop

### Fato

Bounded Execution Loop possui limites concretos e condições obrigatórias de parada.

### Recomendação

Classificá-lo atualmente como **política operacional** e exemplo concreto do padrão Governed Cognitive Loop. Ele não é Skill. Pode ser aplicado dentro de Strategy ou Workflow, mas não se reduz a nenhuma delas.

Os limites atuais permanecem configuração operacional e não devem ser elevados a invariantes ontológicos.

## 16. Agent Loop, Loop Engineering e supervisão humana

### Agent Loop

Descreve a mecânica de objetivo, ação, observação e correção. Governed Cognitive Loop adiciona autoridade, orçamento, risco, parada, escalada e Project Memory.

### Loop Engineering

É a disciplina de projetar memória, contexto, validação, orçamento, recuperação, escalada e observabilidade. Governed Cognitive Loop pode ser um produto dessa disciplina.

### Human-in-the-Loop

Humano participa diretamente de aprovação ou decisão. Adequado para irreversibilidade, arquitetura, alto risco, ambiguidade e conflito de autoridade.

### Human-on-the-Loop

IA opera dentro de limites; humano supervisiona por checkpoints e gates. Adequado para execução reversível, observável e delimitada.

### Recomendação

O modelo CVO–CSA–CEA é uma **combinação adaptativa**:

- human-on-the-loop para autonomia operacional limitada;
- human-in-the-loop para decisões arquiteturais, canônicas, irreversíveis ou de alto risco.

Não criar um nome ou tipo próprio antes de testar essa classificação.

## 17. Seleção da estrutura cognitiva

Nem toda tarefa deve ser loop. Critérios iniciais:

- **operação única:** determinística, curta, baixo risco e sem feedback relevante;
- **pipeline:** etapas ordenadas com transformação progressiva;
- **workflow:** ramificações e responsabilidades explícitas;
- **loop:** incerteza que exige feedback e correção;
- **evento:** resposta a mudança observável;
- **processo recorrente:** obrigação temporal ou periódica;
- **processo orientado a estado:** lifecycle longo e retomável;
- **aprovação humana:** autoridade, irreversibilidade ou risco exigem gate.

A seleção deve considerar objetivo, reversibilidade, risco, duração, incerteza, feedback, custo e autoridade.

## 18. Intenção e transparência

### Hipótese

O usuário expressa intenção; o sistema seleciona estruturas, processos e recursos internos.

### Recomendação

Manter a hipótese alinhada à AP-0018 e AP-0019 sem canonizá-la. Ocultar complexidade operacional significa não exigir escolha manual de Agent, Skill ou Workflow. Não significa ocultar decisões, riscos, custos, autoridade, proveniência ou resultados.

## 19. Relação com Context Engineering

Um Governed Cognitive Loop pode solicitar um plano de contexto por iteração:

`Intenção → Cognitive Discovery → Context Planning → seleção da estrutura → execução delimitada → validação → atualização contextual → continuar ou encerrar → Project Memory`

Riscos que precisam de pesquisa:

- releitura desnecessária;
- crescimento cumulativo de contexto;
- perda de regras por compressão;
- resumo sem autoridade;
- custo sem limite;
- contexto obsoleto;
- memória derivada confundida com fonte canônica.

Não existe recomendação de implementar Context Retrieval Engine, Graphify ou compressão.

## 20. Riscos de autonomia excessiva

- expansão silenciosa de escopo;
- ação além da autoridade;
- custo ou tempo não controlado;
- autoaprovação de decisões;
- contexto degradado acumulado;
- otimização de métricas substitutas;
- alterações irreversíveis;
- memória derivada tratada como verdade;
- loops que continuam apesar de ausência de evidência.

Mitigações candidatas: budgets, gates, reversibilidade, observabilidade, evidência, validação independente e escalada obrigatória.

## 21. Riscos de supervisão humana excessiva

- gargalo decisório;
- perda dos benefícios de automação;
- interrupções e troca de contexto;
- aprovações superficiais por fadiga;
- inconsistência entre decisões humanas;
- centralização desnecessária;
- loops tão curtos que não produzem unidade útil.

Mitigação recomendada: supervisão proporcional a risco e reversibilidade, com checkpoints derivados de autoridade e não de ansiedade operacional.

## 22. Conflitos identificados

1. Os materiais atuais usam `operational` e `active`, embora não estejam aprovados ou em pesquisa substantiva. Isso confirma a ambiguidade de estados; não deve ser corrigido nesta sessão.
2. A diretiva inicial diz que Research pode gerar ADR ou RFC. A interpretação segura é que Research pode **informar ou recomendar** esses artefatos; não pode criar autoridade automaticamente.
3. PMM exige persistência de conhecimento importante, enquanto esta revisão proíbe commit. O presente arquivo temporário preserva a análise sem canonizá-la; sua permanência dependerá do Conselho.
4. `Program`, `Case` e `Hypothesis` estão sob o mesmo prefixo ARP, mas podem possuir lifecycles diferentes. Ainda não há evidência para tipos distintos.

## 23. Questões abertas

1. O nome oficial deve ser Architectural Research, Architectural Research Program ou Research Case?
2. Um programa contínuo e um caso delimitado compartilham o mesmo lifecycle?
3. Quais campos de estado são realmente necessários na V1?
4. Quem autoriza início, pausa, retomada e encerramento?
5. Qual WIP máximo de pesquisas ativas?
6. Quando evidência é suficiente para recomendar AP?
7. ADR pode encerrar pesquisa sem AP intermediária?
8. Onde RFC se posiciona quando existe antes versus depois de uma decisão?
9. Governed Cognitive Loop precisa de identidade persistente ou basta como contrato?
10. Como calcular budgets sem acoplar o Core a fornecedores?
11. Como selecionar supervisão in-loop ou on-loop de maneira rastreável?

## 24. Decisões exigidas do Conselho

1. Autorizar ou rejeitar ARP como especialização experimental de Knowledge.
2. Escolher entre uma especialização única com `research_form` ou formas documentais distintas.
3. Aprovar as dimensões conceituais de estado antes de editar arquivos.
4. Aprovar lifecycle e critérios de início, pausa, divisão e encerramento.
5. Definir que Research informa, mas não autoriza AP, ADR ou RFC.
6. Decidir se o Knowledge Maturity Model deve continuar como mapa relacional experimental.
7. Aceitar Governed Cognitive Loop como padrão de análise, sem tipo canônico.
8. Classificar Bounded Execution Loop como política operacional desse padrão.
9. Confirmar supervisão humana adaptativa conforme risco e reversibilidade.
10. Autorizar, em sessão futura, alterações nos dez arquivos, validação e commit — ou determinar seu descarte/supersession preservando histórico.

## 25. Recomendação consolidada do CEA

- Manter ARP, provisoriamente, como especialização experimental de Knowledge.
- Não promover ARP a Core Type nem estado de AP.
- Tratar `program`, `case` e `hypothesis` como formas candidatas dentro da mesma especialização.
- Separar estado documental, governança, pesquisa e maturidade da hipótese.
- Modelar evolução do conhecimento como grafo relacional, não pipeline obrigatório.
- Tratar Governed Cognitive Loop como padrão contratual.
- Tratar Bounded Execution Loop como política operacional concreta.
- Usar human-on-the-loop em execução delimitada e human-in-the-loop nos gates de risco e autoridade.
- Não editar, validar, commitar ou canonizar os materiais ARP até decisão formal.
