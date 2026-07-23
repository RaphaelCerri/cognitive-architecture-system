---
schema_version: 0.1.0-experimental
id: ARP-0009-E30
kind: knowledge
knowledge_type: research_evidence
title: C-lite Structured Interactive Prototype
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E22
  - type: related_to
    target: ARP-0009-E29
---

# C-lite Structured Interactive Prototype

## Prototype reset

**Protótipo documental não funcional — versão 1.0.** Todos os estados, pessoas, fontes, tempos, agentes, decisões e ações são fictícios e determinísticos. Os links apenas navegam neste documento.

```text
Visible control != enforced permission
Displayed state != runtime state
Prototype transition != executed operation
Shown evidence != verified evidence
Simulated agent != runtime agent
```

**Ferramenta/representação selecionada:** Markdown versionado no repositório, com headings e links internos. A alternativa documental foi escolhida porque preserva versionamento, revisão, exportação, reset e anotações sem ferramenta externa, instalação, código de terceiros, manifest ou frontend.

**Limitações da ferramenta:** links não mantêm estado, não executam lógica, não provam foco/teclado/reflow/tecnologia assistiva, não aplicam permissões e não registram eventos. O “reset” é o retorno a esta seção.

[Começar com uma ideia](#sv-02-idea-incompleta) · [Retornar a um projeto](#sv-24-retorno-com-decisao-pendente) · [Inventário](#inventario-de-variantes)

## Contexto persistente do projeto

> **Oficina Horizonte — pesquisa de atendimento**
> Estado do projeto: pesquisa ativa · Pendência: identidade da aprovação externa
> Conteúdo fictício. Nenhum dado de cliente ou operação real.

Esta faixa conceitual acompanha SF-02–SF-08. Ela orienta; não é um status universal nem uma arquitetura de navegação completa.

## SF-01 — Entry and First Use

### SV-01-entry

**Transforme uma ideia incompleta em um projeto compreensível e governado.**

Descreva o que você quer melhorar. O sistema fará perguntas, mostrará suposições e preparará um plano antes de qualquer pesquisa. Você decide quando autorizar. Resultados e fontes são revisados separadamente.

- [Começar com uma ideia](#sv-02-idea-incompleta)
- [Abrir projeto recente](#sv-24-retorno-com-decisao-pendente)

Estado: interface idle. Nenhuma execução existe.

### SV-02-idea-incompleta

**Sua ideia**

> Quero criar um sistema para organizar o atendimento da minha oficina e parar de perder orçamento no WhatsApp.

Isso é suficiente para começar discovery; detalhes desconhecidos não serão inventados.

- [Enviar ideia e ver a primeira pergunta](#sv-03-discovery-em-andamento)
- [Voltar](#sv-01-entry)

Erro representado: entrada vazia manteria o texto editável e explicaria o que falta, sem criar projeto.

## SF-02 — Idea Intake and Discovery

### SV-03-discovery-em-andamento

**Pergunta 2 de um conjunto adaptativo**

Quem atualiza o estado do serviço?

> Perguntamos isso porque a resposta muda os papéis e as ações que precisam ser pesquisados. Não sabemos ainda quantas perguntas serão necessárias.

Entendido até agora: Marina e recepção acompanham solicitações. Unknown: quem altera cada estado.

- [Responder “os mecânicos também atualizam”](#sv-04-contradicao)
- [Marcar “não sei” e manter unknown](#sv-06-entendimento-revisado)
- [Inspecionar a suposição atual](#sv-04-contradicao)

Progresso: **discovery em andamento**; sem percentual.

### SV-04-contradicao

**Precisamos resolver uma contradição**

Você disse antes que apenas a proprietária usaria o sistema, mas agora informou que mecânicos atualizam os serviços.

Por que importa: papéis, ações permitidas e informação visível mudam. Interpretações:

1. somente Marina edita e a equipe informa fora do sistema;
2. recepção e mecânicos possuem ações limitadas, ainda a definir;
3. manter unresolved e bloquear claims dependentes.

Suposição inspecionável: “haverá um único usuário”, origem DQ-01, confiança baixa, impacto em papéis.

- [Corrigir a suposição para papéis múltiplos](#sv-05-suposicao-corrigida)
- [Manter unresolved](#sv-06-entendimento-revisado)
- [Voltar à pergunta](#sv-03-discovery-em-andamento)

### SV-05-suposicao-corrigida

**Suposição corrigida**

Antes: usuário único.
Agora: proprietária, recepção e mecânicos podem ter papéis distintos; permissões permanecem desconhecidas.

Impacto registrado: o plano deverá pesquisar responsabilidades e não poderá presumir autorização.

- [Revisar entendimento atual](#sv-06-entendimento-revisado)
- [Reabrir discovery](#sv-03-discovery-em-andamento)

## SF-03 — Assumptions and Project Context

### SV-06-entendimento-revisado

**Entendimento atual — versão 1.0**

- problema: informações e aprovações dispersas;
- usuários: proprietária, recepção e mecânicos; cliente externo possível;
- scope: intake, histórico, estados, orçamento/aprovação e notificações como necessidade;
- non-goals: estoque, pagamento, integração real e implementação;
- suposição: cliente talvez não precise de conta;
- contradição unresolved: aprovação sem conta versus autoria rastreável;
- unknowns: permissões, retenção e modelo de identidade.

“Revisado” não significa completo ou verdadeiro. Mudança material reabre esta etapa.

- [Confirmar entendimento para preparar plano](#sv-07-plano-proposto)
- [Corrigir outra suposição](#sv-04-contradicao)

## SF-04 — Plan Review

### SV-07-plano-proposto

**Plano proposto — ainda não autorizado**

Objetivo: comparar padrões públicos de intake, acompanhamento e aprovação rastreável.

1. confirmar perguntas e exclusões;
2. consultar fontes públicas declaradas;
3. comparar alternativas e limitações;
4. produzir relatório e pequeno conjunto de evidências simuladas;
5. submeter resultado à revisão.

Artifacts: relatório inicial e evidence set.
Risks: identidade, privacidade, fonte indisponível e inferência excessiva.
Limits: sem usuários, dados reais, validação jurídica, arquitetura ou implementação.
Affected context: papéis e identidade de aprovação permanecem questões, não decisões.

- [Solicitar revisão do plano](#sv-08-revisao-do-plano-solicitada)
- [Enviar para aprovação](#sv-09-autorizacao-pendente)
- [Voltar ao entendimento](#sv-06-entendimento-revisado)

### SV-08-revisao-do-plano-solicitada

**Revisão solicitada**

Comentário: “Deixe explícito que estoque e pagamento estão fora e que nenhuma conta de cliente será definida.”

Plano versão 1.0 preservado no histórico; versão seguinte precisa responder apenas a esse escopo.

- [Ver plano revisado](#sv-07-plano-proposto)
- [Voltar ao projeto](#sv-06-entendimento-revisado)

## SF-05 — Authorization

### SV-09-autorizacao-pendente

**Aprovação pendente**

| Campo | Valor |
|---|---|
| Ação | executar somente a pesquisa proposta |
| Solicitante | Marina, Product Owner fictícia |
| Executor | CEA simulado |
| Autoridade | Conselho fictício |
| Escopo | fontes públicas; nenhum dado de cliente |
| Riscos | identidade, privacidade e evidência incompleta |
| Reversibilidade | cancelamento preserva histórico |
| Expiração | esta execução simulada |
| Output | relatório e evidence set simulados |

Esta superfície representa intenção e compreensão. Não implementa enforcement de segurança.

- [Autorizar o escopo](#sv-11-execucao-autorizada)
- [Negar autorização](#sv-10-autorizacao-negada)
- [Solicitar revisão do plano](#sv-08-revisao-do-plano-solicitada)

### SV-10-autorizacao-negada

**Autorização negada**

Razão fictícia: escopo de identidade ainda está amplo. Nenhuma execução foi criada. Plano e decisão permanecem no histórico.

- [Revisar o plano](#sv-08-revisao-do-plano-solicitada)
- [Voltar à aprovação](#sv-09-autorizacao-pendente)

### SV-11-execucao-autorizada

**Execução autorizada — ainda não iniciada**

Decisão registrada para `EXEC-SIM-01`, no escopo e expiração exibidos. O executor pode enfileirar a pesquisa; não pode aceitar o próprio resultado.

- [Enfileirar execução simulada](#sv-12-na-fila)
- [Inspecionar decisão](#sv-09-autorizacao-pendente)

## SF-06 — Execution and Recovery

### SV-12-na-fila

**Pesquisa `EXEC-SIM-01` — queued**

Atividade: aguardando início simulado. Tempo decorrido: 00:00. Progresso: desconhecido. Output parcial: nenhum.

- [Representar início](#sv-13-em-execucao)
- [Cancelar antes do início](#sv-18-cancelada)

### SV-13-em-execucao

**Pesquisa `EXEC-SIM-01` — running**

Atividade atual: comparar workflows públicos declarados.
Tempo decorrido simulado: 00:18. Progresso: **desconhecido**.
Outputs parciais: duas notas provisórias. Evidence: partial.
Última atualização simulada: checkpoint 2.

- [Responder a uma pendência](#sv-14-aguardando-input)
- [Representar pausa](#sv-15-pausada)
- [Representar falha de fonte](#sv-16-falha)
- [Cancelar com efeitos](#sv-18-cancelada)

Nenhum percentual, polling, agente ou operação real existe.

### SV-14-aguardando-input

**Aguardando sua decisão**

Falta: escolher se a pesquisa compara aprovação anônima e autenticada.
Motivo: isso muda riscos e critérios de evidência.
Sem resposta: a conclusão sobre identidade permanece bloqueada.
Opções: comparar ambas; limitar à autenticada; adiar.
Depois: a execução simulada retoma do checkpoint. Expiração: esta proposta.

- [Comparar ambas e retomar](#sv-13-em-execucao)
- [Adiar e revisar escopo](#sv-15-pausada)
- [Cancelar](#sv-18-cancelada)

### SV-15-pausada

**Pesquisa `EXEC-SIM-01` — paused**

Checkpoint, notas e pendência foram preservados. Retomada exige autoridade válida e confirmação do escopo.

- [Retomar do checkpoint](#sv-13-em-execucao)
- [Revisar escopo pelo plano](#sv-08-revisao-do-plano-solicitada)
- [Cancelar](#sv-18-cancelada)

### SV-16-falha

**Fonte primária indisponível — failed**

Uma fonte simulada necessária à hipótese de identidade ficou indisponível. Duas notas e o output parcial continuam preservados. A limitação será mostrada no artifact.

Impactos:

- retry: mesma fonte, sem duplicar trabalho;
- fonte alternativa: muda proveniência e exige escopo autorizado;
- revisar escopo: remove a claim dependente;
- fornecer input: resolve apenas RI-01;
- cancelar: encerra e preserva histórico;
- escalar: pede decisão, sem autoautorização.

- [Ver retry disponível](#sv-17-retry-disponivel)
- [Pausar para decisão](#sv-15-pausada)
- [Cancelar](#sv-18-cancelada)

### SV-17-retry-disponivel

**Retry disponível**

Checkpoint: após duas notas. Efeito: nova tentativa da mesma consulta simulada; nenhum output preservado será apagado. Autoridade: limitada à execução `EXEC-SIM-01`.

- [Tentar novamente e concluir](#sv-19-concluida)
- [Voltar à falha](#sv-16-falha)
- [Cancelar](#sv-18-cancelada)

### SV-18-cancelada

**Pesquisa `EXEC-SIM-01` — cancelled**

A tentativa foi encerrada. Notas, evidence parcial, razão e decisão de cancelamento permanecem no histórico. Cancelamento não apaga o projeto.

- [Retornar ao projeto com pendência](#sv-24-retorno-com-decisao-pendente)
- [Revisar plano para nova proposta](#sv-08-revisao-do-plano-solicitada)

### SV-19-concluida

**Pesquisa `EXEC-SIM-01` — completed**

Atividade encerrada. Progresso final é comunicado pelo estado terminal, não por percentual. O artifact foi produzido, mas ainda não foi aceito.

- [Inspecionar resultado](#sv-20-resultado-em-revisao)
- [Ver contexto do projeto](#sv-24-retorno-com-decisao-pendente)

## SF-07 — Artifact, Evidence and Review

### SV-20-resultado-em-revisao

**Resultado A-SIM-01 v1.0 — under review**

Artifact: relatório inicial de workflow e aprovação.
Finding: solicitação, orçamento e aprovação devem ser conceitos distintos.
Limitation: cenário e fontes são simulados.

**Fonte e evidência**

- EV-SIM-01: current, confidence low, sustenta apenas a separação de estados;
- EV-SIM-02: partial, sustenta objeto/momento da aprovação;
- EV-SIM-03: unavailable, não sustenta identidade.

Artifact é o output; evidence sustenta claims limitadas. Fonte indisponível e freshness não ficam ocultas.

- [Aceitar para este benchmark](#sv-21-resultado-aceito)
- [Solicitar revisão](#sv-22-revisao-do-resultado)
- [Rejeitar](#sv-23-resultado-rejeitado)
- [Ver histórico e relações](#sv-24-retorno-com-decisao-pendente)

### SV-21-resultado-aceito

**Resultado aceito**

Autoridade fictícia aceitou A-SIM-01 somente para o benchmark. Razão e limitações foram registradas. Memory aponta o artifact e evidence; nenhum produto, Stage 3 ou implementação foi aprovado.

- [Ver Memory atualizada](#sv-24-retorno-com-decisao-pendente)
- [Reiniciar protótipo](#prototype-reset)

### SV-22-revisao-do-resultado

**Revisão do resultado solicitada**

Comentário: “Separe a claim sobre autoria da claim sobre registro do momento.”
Affected section: aprovação externa. Nova edição/pesquisa precisará de proposta; a versão 1.0 e a decisão permanecem.

- [Voltar ao resultado](#sv-20-resultado-em-revisao)
- [Ver Memory com pendência](#sv-24-retorno-com-decisao-pendente)

### SV-23-resultado-rejeitado

**Resultado rejeitado**

Razão: evidence insuficiente para a claim de identidade. A-SIM-01 não foi aceito. Evidence, limitações e histórico foram preservados.

- [Ver próximos passos limitados](#sv-24-retorno-com-decisao-pendente)
- [Reiniciar protótipo](#prototype-reset)

## SF-08 — Project Memory and Return

### SV-24-retorno-com-decisao-pendente

**Bem-vinda de volta ao projeto Oficina Horizonte**

Estado atual: resultado em revisão.
Mudanças recentes: suposição de usuário único corrigida; estoque e pagamento excluídos.
Artifact: A-SIM-01 v1.0. Evidence: duas parciais e uma indisponível.
Decisão mais recente: execução concluída; resultado ainda não aceito.
Unresolved: identidade da aprovação externa.
Pendência: escolher accept, revise ou reject.
Proveniência: eventos e decisões simulados do pacote v1.0.

Relações acessíveis: Ideia → Entendimento v1.0 → Plano v1.0 → `EXEC-SIM-01` → A-SIM-01 → EV-SIM-01/02/03 → decisão pendente.

- [Retomar pela decisão pendente](#sv-20-resultado-em-revisao)
- [Inspecionar entendimento](#sv-06-entendimento-revisado)
- [Inspecionar execução](#sv-19-concluida)
- [Reiniciar protótipo](#prototype-reset)

Não há graph nem busca. A relação é uma lista textual; IDs são detalhes de suporte, não rótulos primários da experiência.

## Inventario de variantes

| Surface | Variantes materiais |
|---|---|
| SF-01 | SV-01 entry; SV-02 incomplete input |
| SF-02 | SV-03 asking; SV-04 contradiction; SV-05 assumption corrected |
| SF-03 | SV-06 understanding reviewed/incomplete |
| SF-04 | SV-07 proposed plan; SV-08 plan revision requested |
| SF-05 | SV-09 authorization pending; SV-10 denied; SV-11 authorized |
| SF-06 | SV-12 queued; SV-13 running; SV-14 awaiting input; SV-15 paused; SV-16 failed; SV-17 retry available; SV-18 cancelled; SV-19 completed |
| SF-07 | SV-20 artifact under review/evidence partial-unavailable; SV-21 accepted; SV-22 revision requested; SV-23 rejected |
| SF-08 | SV-24 return with pending decision |

Total: **8 surface families e 24 variantes materiais**. Famílias mantêm seus próprios estados; não existe status universal.

## Journey and flow coverage

| Journey | Caminho principal/alternativas |
|---|---|
| J1 First use and idea intake | SV-01 → SV-02 |
| J2 Discovery and assumption review | SV-03 → SV-04 → SV-05 → SV-06 |
| J3 Governed plan review | SV-07 → SV-08 ou SV-09 → SV-10/11 |
| J4 Authorized research execution | SV-11 → SV-12 → SV-13 → SV-14/15/16/17/18 → SV-19 |
| J5 Artifact and evidence review | SV-20 → SV-21/22/23 |
| J6 Return and resume | SV-24 → decisão/entendimento/execução |

Os 18 task flows do baseline E22 estão cobertos. A lista do Conselho separa `inspect assumption` e `correct assumption` em dois resultados interativos, embora E22 os trate como um fluxo; por isso há 19 resultados navegáveis sem alegar um 19º task flow. `approve project understanding` permanece transição integrada SV-06 → SV-07.

## Navigation and exclusions

Navegação: contexto persistente conceitual, links contextuais, back/next quando aplicável, mudança recente, pendência, links diretos para artifact/evidence e overview de retorno.

Excluídos: busca, command palette, graph, explorer global, navegação ontológica e sidebar completa. A lista de relações de SV-24 é a alternativa acessível ao graph.

## Accessibility, security and visual boundary

O documento usa hierarquia de headings, ordem lógica, labels explícitos, ações com destino, erros associados, texto além de cor, status textual e significado de aprovação. A ordem dos links representa um caminho de teclado pretendido; foco visível, reflow, reduced motion e compatibilidade com tecnologia assistiva dependem de ferramenta/implementação e não são provados.

Controles sensíveis mostram ator, autoridade, ação, escopo, risco e efeito. Negação, fonte não confiável, interrupção, histórico e limite de informação sensível são visíveis. **Esta representação não implementa enforcement de segurança.**

Tratamento visual: somente estrutura Markdown neutra, legível, profissional e de baixa ornamentação. Não há branding, moodboard, direção visual, tokens, componentes, Design System ou comparação estética.
