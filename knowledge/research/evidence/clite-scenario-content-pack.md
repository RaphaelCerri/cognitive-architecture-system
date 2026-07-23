---
schema_version: 0.1.0-experimental
id: ARP-0009-E29
kind: knowledge
knowledge_type: research_evidence
title: C-lite Scenario and Content Pack
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E21
  - type: refines
    target: ARP-0009-E26
---

# C-lite Scenario and Content Pack

## Natureza e limites

**[Decisão]** Este pacote versão `1.0` contém o conteúdo determinístico e inteiramente fictício do protótipo documental C-lite. Ele não descreve empresa, pessoa, pesquisa, fonte, agente, execução ou decisão real.

```text
Conteúdo mostrado != dado de produção
Fonte simulada != fonte consultada
Atividade simulada != operação executada
Evidência mostrada != evidência verificada
```

O cenário é propositalmente pequeno: ele serve para avaliar compreensão, autoridade, estados, recuperação, evidência e retorno, não para especificar ou construir um SaaS.

## Scenario

**Empresa fictícia:** Oficina Horizonte, pequena oficina mecânica independente.

**Contexto do usuário:** Marina, proprietária, recebe solicitações, fotos, diagnósticos preliminares, orçamentos e aprovações por mensagens. Duas pessoas da recepção organizam os atendimentos e três mecânicos precisam comunicar andamento. Informações se perdem, clientes não entendem o estado do serviço e não há histórico estruturado.

**Ideia inicial incompleta:**

> Quero criar um sistema para organizar o atendimento da minha oficina e parar de perder orçamento no WhatsApp.

**Objetivo de discovery:** entender o problema e preparar um plano de pesquisa limitado. Não definir produto, arquitetura, identidade visual ou implementação.

## Discovery questions and answers

| ID | Pergunta e motivo | Resposta fictícia | Classificação/impacto |
|---|---|---|---|
| DQ-01 | Quem acompanha o atendimento? Isso define atores e autoridade. | “Eu e as duas pessoas da recepção.” | answer; abre papéis |
| DQ-02 | Quem atualiza o estado do serviço? Isso testa a afirmação sobre uso exclusivo. | “Os mecânicos também precisam atualizar quando começam e terminam.” | contradiction input |
| DQ-03 | O cliente precisa entrar no sistema? Isso delimita acesso externo. | “Preferia continuar aprovando pelo WhatsApp, sem conta.” | answer; identidade desconhecida |
| DQ-04 | O que precisa ficar rastreável na aprovação? Isso afeta confiança e evidência. | “Quem aprovou, qual orçamento, data e mensagem.” | requirement candidate |
| DQ-05 | Quais estados mínimos do serviço importam? Isso evita inventar workflow. | “Solicitado, avaliando, aguardando aprovação, em serviço e pronto.” | answer; hipótese de fluxo |
| DQ-06 | Fotos e dados do veículo podem conter informação sensível? Isso delimita privacidade. | “Sim; placa, telefone e conversas podem aparecer.” | risk; minimização necessária |
| DQ-07 | Notificações fazem parte desta pesquisa? Isso controla escopo. | “Só precisamos saber quando avisar; não integrar envio agora.” | in scope: requirement; out: integration |
| DQ-08 | Estoque entra no primeiro escopo? Isso evita expansão lateral. | “Não.” | non-goal |
| DQ-09 | Pagamento entra no primeiro escopo? Isso evita expansão lateral. | “Não.” | non-goal |
| DQ-10 | Qual volume e urgência? Isso contextualiza sem criar escala fictícia. | “Cerca de 15 atendimentos por dia; orçamento parado é urgente.” | unverified contextual answer |

“Não sei” permanece uma resposta válida. Ausência de resposta não é preenchida pelo sistema.

## Material contradiction

**C-01 — usuário único versus atualização pela equipe**

- afirmação inicial: “Só eu usaria o sistema”;
- informação posterior: recepção organiza atendimentos e mecânicos atualizam estados;
- por que importa: muda papéis, autoridade, informação visível e escopo da pesquisa;
- interpretação A: somente Marina edita; equipe informa fora do sistema;
- interpretação B: recepção e mecânicos possuem ações limitadas, ainda não definidas;
- decisão fictícia: pesquisar a interpretação B sem presumir permissões;
- atualização: a suposição “usuário único” é corrigida para “papéis múltiplos ainda precisam ser definidos”;
- impacto: plano recebe uma questão de papéis/autoridade; nenhuma regra de autorização é inventada.

**C-02 — aprovação externa versus rastreabilidade**

- afirmação: aprovação continuará por mensagem e sem conta;
- necessidade posterior: identificar autor, conteúdo e momento da aprovação;
- estado: unresolved;
- impacto: impede afirmar que um link anônimo satisfaz a necessidade;
- pendência solicitada: decidir se a pesquisa compara aprovação anônima com aprovação autenticada.

## Current project understanding

| Campo | Conteúdo versão 1.0 |
|---|---|
| Problem | solicitações, orçamentos, aprovações e estados dispersos em mensagens |
| Users | proprietária, recepção e mecânicos; cliente como ator externo possível |
| In scope | intake, histórico, estados, orçamento/aprovação, notificações como necessidade, papéis como questão |
| Non-goals | estoque, pagamento, envio real de mensagens, autenticação, implementação |
| Assumptions | volume informado é aproximado; cinco estados podem ser insuficientes; cliente pode não precisar de conta |
| Unknowns | modelo de identidade da aprovação; permissões por papel; retenção de fotos/mensagens |
| Sensitive boundary | não usar nomes, telefones, placas, fotos ou conversas reais |

Entendimento revisado não significa verdade completa. Mudança material reabre discovery.

## Proposed research plan

**Objective:** comparar padrões públicos para intake, acompanhamento e aprovação rastreável em serviços, produzindo requisitos iniciais para revisão.

**Steps:**

1. confirmar perguntas e non-goals;
2. consultar fontes públicas declaradas sobre workflow e aprovação;
3. comparar alternativas e limitações;
4. produzir relatório sintético com evidências;
5. submeter artifact e evidence à revisão.

**Expected artifacts:** um relatório fictício de escopo e requisitos iniciais; um pequeno conjunto de evidências simuladas.

**Risks:** confundir aprovação visível com identidade verificada; coletar dados sensíveis; extrapolar amostra pública; transformar hipótese em requisito.

**Limitations:** sem entrevistas, dados reais, teste de produto, validação jurídica, arquitetura ou implementação.

**Effort wording:** pesquisa limitada a uma execução; duração exata não é afirmada.

## Approval request

| Campo | Conteúdo fictício |
|---|---|
| Proposal | executar somente o plano de pesquisa versão 1.0 |
| Requesting actor | Marina, Product Owner fictícia |
| Executor | CEA simulado |
| Authority | Conselho fictício decide; executor não se autoautoriza |
| Scope | fontes públicas declaradas; nenhum dado de cliente |
| Risks | identidade, privacidade, fonte indisponível e inferência excessiva |
| Reversibility | cancelamento preserva histórico e outputs parciais |
| Expiry | válida apenas para esta execução simulada |
| Expected output | relatório e conjunto pequeno de evidências simuladas |

Autorizar o plano não inicia automaticamente a execução. Aceitar o resultado é decisão posterior e distinta.

## Execution content

**Stable identity:** `EXEC-SIM-01`.

**Activities:** preparar consulta; comparar workflows; registrar fontes; sintetizar achados. Percentual não é exibido porque o total verificável é desconhecido.

**Partial output:** padrões preliminares indicam separar solicitação, orçamento e aprovação; o achado permanece provisório.

**Requested input RI-01:**

- falta: preferência de escopo entre aprovação anônima e autenticada;
- motivo: a escolha muda perguntas, riscos e critérios de evidência;
- impacto da ausência: a comparação não pode concluir sobre identidade;
- opções: comparar ambas; limitar à autenticada; adiar essa questão;
- resposta autorizada no ramo principal: comparar ambas, sem recomendar implementação;
- depois: execução retoma do checkpoint, com escopo registrado.

## Failure and recovery content

**Failure F-01:** uma fonte primária simulada necessária à hipótese de aprovação está temporariamente indisponível após parte da pesquisa.

**Preservado:** `EXEC-SIM-01`, duas notas de evidência, output parcial, histórico e limitação.

| Opção | Impacto representado |
|---|---|
| Retry | tenta novamente a mesma fonte; não duplica o trabalho preservado |
| Use alternative source | exige fonte autorizada e registra mudança de proveniência |
| Revise scope | remove a claim dependente e reduz o artifact |
| Provide input | resolve somente a pendência declarada |
| Cancel | encerra a tentativa; preserva histórico e materiais parciais |
| Escalate | pede decisão; não concede autoridade ao executor |

Ramo determinístico principal: retry é disponibilizado e a execução pode chegar a completed. Ramos de cancelamento e alternativa permanecem representados separadamente.

## Artifact

**A-SIM-01 — Relatório inicial de workflow e aprovação, versão 1.0**

- output principal: escopo, atores, cinco estados candidatos, alternativas de aprovação e perguntas abertas;
- finding FND-01: separar solicitação, orçamento e aprovação melhora a rastreabilidade conceitual;
- finding FND-02: aprovação sem identidade verificada não sustenta, por si, o requisito de autoria;
- limitation: conteúdo sintético e fontes simuladas; não prova adequação ao domínio;
- status inicial: under review.

## Evidence

| ID | Claim apoiada | Proveniência simulada | Freshness/confidence | Limitação |
|---|---|---|---|---|
| EV-SIM-01 | estados distintos ajudam a localizar pendências | guia público fictício, v1, acessado na data do pacote | current / low | não observado com usuários |
| EV-SIM-02 | aprovação precisa registrar objeto e momento | especificação pública fictícia, v2 | partial / low | identidade ainda unresolved |
| EV-SIM-03 | uma fonte primária era necessária à hipótese de identidade | fonte fictícia indisponível | unavailable / none | claim bloqueada |

O artifact é o relatório. Evidence é o suporte limitado a claims. Disponibilidade não equivale a validade universal.

## Review outcomes

- **Accept:** registra aceitação do artifact para este benchmark, atualiza Memory e limita próximo passo a uma proposta futura de avaliação.
- **Request Revision:** registra comentário, seções afetadas e novo trabalho necessário; mantém versão e lineage.
- **Reject:** registra razão e consequência; o artifact não é aceito, mas evidence e histórico não são apagados.

## Project Memory update

```yaml
project: Oficina Horizonte — pesquisa de atendimento
initial_intent: organizar atendimento e reduzir orçamentos perdidos
current_state: artifact_under_review
recent_changes:
  - suposição de usuário único corrigida
  - escopo de estoque e pagamento excluído
decisions:
  - pesquisar papéis múltiplos sem inventar permissões
artifact: A-SIM-01@1.0
evidence:
  - EV-SIM-01
  - EV-SIM-02
  - EV-SIM-03 unavailable
unresolved:
  - identidade exigida para aprovação externa
pending_action: revisar artifact e escolher accept, revise ou reject
provenance: eventos e decisões simulados deste pacote v1.0
resume_entry: Resultado em revisão
```

## Content controls

- linguagem primária de interface: Projeto, Ideia, Entendimento atual, Suposição, Plano, Pesquisa, Resultado, Fonte e evidência, Decisão, Aprovação, Histórico do projeto e Pendência;
- termos internos (`ARP`, `IHR`, Ontologia, Runtime, Agent Blueprint) aparecem apenas em anotações de equipe;
- nenhum lorem ipsum, dado real, referência copiada ou claim de acessibilidade, segurança, execução ou produto;
- qualquer alteração material cria nova versão do pacote e invalida observações feitas sobre a versão anterior.
