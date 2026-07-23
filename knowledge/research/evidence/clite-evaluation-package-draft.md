---
schema_version: 0.1.0-experimental
id: ARP-0009-E32
kind: knowledge
knowledge_type: research_evidence
title: C-lite Evaluation Package Draft
status: experimental
version: "0.1-draft"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: evaluates
    target: ARP-0009-E30
  - type: refines
    target: ARP-0009-E27
---

# C-lite Evaluation Package Draft

## Status and prohibition

Draft documental para futura proposta de avaliação do protótipo C-lite `1.0`. **Nenhum participante foi recrutado, contatado, observado ou testado. Nenhuma sessão, gravação ou coleta foi executada.**

Este pacote não aprova protocolo, amostra, compensação, ferramenta, tratamento de dados ou claim. A execução futura depende de decisão separada do Conselho.

## Objective and prototype questions

Objetivo: avaliar futuramente se uma pessoa consegue compreender e navegar um ciclo governado de ideia a revisão, identificando autoridade, estado, recuperação, artifact/evidence e retorno sem atribuir capacidades reais ao protótipo.

PQ-01–20 de E25 permanecem as perguntas. HP-01–09 permanecem hipóteses. Uma sessão futura produziria observações contextuais por versão, tarefa, perfil e método; não um score universal.

## Scenario briefing

> Você administra uma pequena oficina fictícia. Solicitações, orçamentos e aprovações chegam por mensagens e o histórico se perde. Use o protótipo para transformar uma ideia incompleta em uma proposta de pesquisa e revisar o resultado. O protótipo apenas representa estados; nenhuma operação real será executada.

Antes de qualquer futura sessão, confirmar compreensão do caráter fictício, possibilidade de parar e proibição de inserir dados reais.

## Future task sequence and neutral prompts

| Task | Neutral prompt | PQ | Expected observation, not success claim |
|---|---|---|---|
| T-01 entry | “Mostre onde você começaria com essa ideia.” | 01–02 | entry chosen; participant describes purpose/limits |
| T-02 discovery | “Continue até conseguir explicar o entendimento atual.” | 03–05 | question rationale, unknown, assumption and contradiction located |
| T-03 context | “O que o projeto entende e o que ainda não sabe?” | 04–06 | scope/non-goals/unknowns distinguished |
| T-04 plan | “Revise o que está sendo proposto e peça uma mudança.” | 06–08 | output/risk/limit/authority and version consequence identified |
| T-05 authorization | “Decida o que fazer com a proposta e explique o que acontece.” | 07–09 | plan approval separated from start and acceptance |
| T-06 long-running | “Acompanhe a pesquisa sem presumir quanto falta.” | 09–13 | state/activity/unknown progress/partial output/actions found |
| T-07 input/recovery | “Responda à pendência; depois escolha uma recuperação segura para a falha.” | 12–14 | need/reason/impact/authority and preserved work understood |
| T-08 evidence/review | “Revise o resultado e diga em que você confiaria ou não.” | 15–16 | artifact/evidence/claim/freshness/limit distinguished |
| T-09 outcomes | “Compare aceitar, pedir revisão e rejeitar.” | 16 | consequences and lineage stated |
| T-10 return | “Imagine que voltou depois. Retome pela pendência principal.” | 17–18 | current state/change/pending/next action reconstructed |
| T-11 keyboard | “Percorra o caminho crítico usando apenas teclado, se a ferramenta permitir.” | 19 | ordered path and focus blockers recorded |
| T-12 non-visual cues | “Explique os estados e mudanças sem depender de cor ou movimento.” | 20 | textual/structural cues and missing cues identified |

Não orientar cliques, ensinar terminologia ou corrigir interpretação durante uma tarefa. Ajuda necessária é evidência e deve ser registrada.

## Comprehension probes

- “O que você acredita que aconteceria ao escolher esta ação?”
- “Quem pode tomar esta decisão e até onde ela vale?”
- “O que já aconteceu e o que é apenas proposto?”
- “Qual informação é artifact e qual é evidence?”
- “O que permanece desconhecido?”
- “O que seria preservado após falha, cancelamento ou rejeição?”
- “Que capacidade real você acredita que esta tela possui?”
- “Onde você retomaria o trabalho e por quê?”

Probes são feitas após a ação quando possível para reduzir direcionamento.

## Expected observations and evidence

Registrar evidência observável, inclusive:

- caminho e primeira ação;
- explicação espontânea de propósito/limite;
- distinções corretas e confusões;
- informação procurada e não encontrada;
- hesitação, retorno, erro e recuperação;
- interpretação de ator/autoridade/efeito;
- uso de estado, atividade e tempo sem inferir percentual;
- claim associada a cada evidence e limitação percebida;
- consequência esperada de accept/revise/reject;
- reconstrução de Memory;
- ajuda solicitada;
- barreira de acesso, ferramenta ou conteúdo;
- frase que atribui runtime, segurança ou funcionamento ao protótipo.

Tempo pode contextualizar uma observação, mas não é meta isolada.

## Failure criteria and blockers

Blocker material futuro se qualquer caminho crítico:

- fundir plano aprovado, execução iniciada ou resultado aceito;
- permitir interpretação de autoridade incorreta sem correção visível;
- ocultar falha, evidence indisponível ou trabalho parcial;
- tornar cancel/retry/revise/reject indistinguíveis;
- induzir confiança em enforcement, agente, fonte ou operação real;
- depender somente de cor, movimento, graph ou mouse;
- impedir a conclusão por conteúdo, navegação ou ferramenta;
- solicitar ou expor dado real/sensível;
- impossibilitar reconstruir estado, mudança, pendência e próximo passo.

Um blocker não pode ser compensado por preferência visual ou score agregado.

## Evidence capture model

| Field | Rule |
|---|---|
| session_id | pseudônimo futuro; nunca nome no artifact de síntese |
| prototype_version | obrigatório: `1.0` nesta proposta |
| task/PQ/HP | IDs aplicáveis |
| profile/context | mínimo necessário; evitar inferência demográfica |
| access_needs/tool | autodeclarado e opcional; separar barreira da ferramenta |
| observation | comportamento ou fala resumida; distinguir quote |
| interpretation | análise marcada, nunca fato bruto |
| outcome | completed / completed_with_help / blocked / stopped |
| severity | blocker / material / minor, com rationale |
| authority_confusion | yes/no/unclear + evidence |
| runtime_misattribution | yes/no/unclear + evidence |
| artifact_evidence_confusion | yes/no/unclear + evidence |
| recovery_choice | ação, razão e efeito esperado |
| follow_up | pergunta ou alteração candidata |
| consent/retention | referência à decisão futura, não conteúdo sensível |

Separar em toda síntese: fato normativo, evidência empírica, heurística, preferência, hipótese e decisão.

## Future review methods

- cognitive walkthrough de PQ-01–18 antes de sessões;
- content review para terminologia, claims, erros e decisões;
- accessibility expert review para PQ-19/20 e caminhos críticos;
- security/authority review para PQ-07–09 e PQ-12–16;
- moderated task/comprehension/first-click somente após autorização;
- nenhuma automação, screenshot comparison ou browser test é aplicável a este artifact Markdown como prova de produto.

Especialistas não substituem pessoas usuárias; participantes não validam enforcement ou arquitetura.

## Privacy, ethics and accessibility planning

Antes de qualquer execução futura, o Conselho deverá decidir:

- owner, evaluator e observers;
- perfis, quantidade e critérios de inclusão/exclusão;
- recruitment e compensation;
- consent, gravação, transcrição e uso de quotes;
- armazenamento, acesso, retenção e descarte;
- acomodação, pausas, formato alternativo e suporte;
- procedimento para dados reais inseridos por engano;
- conflito de interesse e observação pela equipe criadora;
- como distinguir limitação do protótipo, da ferramenta e da experiência.

Usar somente o cenário sintético. Não coletar placa, telefone, foto, conversa, credencial ou dado de saúde/acesso além do mínimo voluntariamente necessário ao estudo aprovado.

## Stopping conditions

Em uma futura sessão, parar imediatamente se houver retirada de consentimento, desconforto, dado real/sensível, barreira não acomodável, falha da ferramenta que invalide a tarefa ou interpretação de risco que não possa ser corrigida sem ensinar a resposta.

No programa, pausar a avaliação se houver blocker de autoridade/segurança/acessibilidade, versão divergente, protocolo não aprovado, tratamento de dados indefinido, duas iterações sem progresso ou necessidade de mudar Stage 1.

## Debrief candidate

1. O que o sistema parece fazer e não fazer?
2. Em que momento você sentiu que uma decisão era sua?
3. Qual estado, pendência ou limitação foi menos claro?
4. Como você diferenciou resultado e fonte/evidência?
5. O que esperaria encontrar ao retornar?
6. Algum termo, estrutura ou ação criou barreira?
7. Você acreditou que algo real estava sendo executado ou protegido?

Reafirmar ao final que tudo foi simulado e explicar tratamento futuro dos dados conforme consentimento aprovado.

## Limitations

- documento navegável não reproduz comportamento de ferramenta de prototipação ou produto;
- link navigation pode afetar first-click, foco, contexto e retorno;
- conteúdo único cria aprendizagem e viés de ordem;
- cenário de oficina não generaliza para domínios regulados, equipes grandes ou outros idiomas;
- estrutura neutra não testa direção visual;
- amostra, perfis e protocolo não estão autorizados;
- observação futura não provará acessibilidade runtime, segurança, performance, arquitetura ou adequação de produto.

## Readiness for evaluation proposal

**Ready with conditions for a separate evaluation proposal.** O protótipo, conteúdo, anotações, tasks, probes, blockers, capture fields, privacy questions e stopping conditions existem. Continuam pendentes decisão sobre owners, método final, participantes, ferramenta de sessão, consentimento, compensação, gravação, armazenamento, retenção, acomodações e critérios de síntese.

Esta conclusão não autoriza recrutamento, avaliação ou Stage 3.
