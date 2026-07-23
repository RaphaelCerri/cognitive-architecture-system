---
schema_version: 0.1.0-experimental
id: ARP-0009-E62
kind: knowledge
knowledge_type: research_evidence
title: C-lite Minimal User Study Protocol and Task Set
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E33
  - type: related_to
    target: ARP-0009-E61
---

# C-lite Minimal User Study Protocol and Task Set

Protocolo **mínimo, proposto e não autorizado**. Redução derivada de E33
(T-01–18) para o estímulo executável, cobrindo as 8 hipóteses de E61 em uma
sessão de até 60 minutos.

```text
Study Proposal != Study Authorization != Recruitment != Session Execution
Prototype Behavior != Production Capability
```

## 1. Comparação de desenhos

| Opção | Valor de aprendizado | Viés de moderador | Carga no participante | Acessibilidade | Força de evidência | Complexidade operacional | Comparabilidade A×B |
|---|---|---|---|---|---|---|---|
| A — Guided moderated walkthrough | baixo (moderador conduz; compreensão não é testada, é narrada) | alto | baixa | alta | fraca | baixa | alta mas vazia |
| B — Task-based moderated session | alto (ação revela compreensão) | médio | média | média | forte para ação, fraca para raciocínio | média | alta |
| C — Think-aloud task session | alto para raciocínio | médio (verbalizar altera comportamento) | **alta** — pesado para cohort B; conflita com AT | média-baixa | forte para interpretação | média | média (verbalização varia) |
| D — Hybrid: task-based + probes pós-ação + entrevista retrospectiva curta | **alto para ação E raciocínio** | médio-controlável (probes só após a ação, script neutro) | média | alta (verbalização convidada, nunca exigida) | **forte** — ação + interpretação + reflexão | média | alta |

**Recomendação: Option D** — já alinhada ao protocolo E33 (probes neutros após
ação; think-aloud convidado sem exigência) e adequada aos dois cohorts.

## 2. Task set mínimo (8 tarefas, ≤60 min)

Estímulo: vertical slice executável (`experiments/clite-stage3-vertical-slice/`),
commit congelado a definir no gate MG-2, aberto via `file://` em browser
validado. Enunciados lidos verbatim; assistência A0–A3 de E33; nenhuma tarefa
instrui a resposta correta.

| MT | Objetivo / estado inicial | Enunciado neutro | Evidência de sucesso | Sinal de mal-entendido | Probe pós-ação | Stop | Dados | Cobre |
|---|---|---|---|---|---|---|---|---|
| MT-1 | enviar ideia + iniciar discovery; view inicial, estado zero | "Comece o projeto usando a ideia fornecida e avance até responder a primeira pergunta." | ideia enviada; explica por que o sistema pergunta | acredita que precisa de ideia completa; acha que já há pesquisa rodando | "O que você acha que o sistema está fazendo agora?" | 6 min sem primeira ação → A2 | primeira ação, verbalização, assistência | base p/ SH-4; T-01/02 |
| MT-2 | corrigir assumption + resolver contradição; discovery com C-01 aberta | "O sistema identificou um conflito entre respostas. Trate-o como preferir." | resolve/mantém com justificativa; nota a correção da suposição | ignora o conflito; acha que o sistema decidiu sozinho | "O que mudou depois da sua escolha?" | A3 após 2 tentativas | escolha, justificativa | T-03/04 |
| MT-3 | revisar plano proposto | "Este plano pode ser executado agora? Explique." | afirma que **não** — está proposto, não aprovado (SH-1) | plano lido como já autorizado ou já rodando | "O que falta para a pesquisa acontecer?" | probe direto após resposta | interpretação literal | **SH-1**; T-06 |
| MT-4 | decidir autorização; plano submetido | "Decida sobre a proposta. Depois me diga: a pesquisa já começou? Quem pode executá-la?" | aprova/nega; afirma que aprovar **não** inicia (SH-2); nomeia decisor≠executor (SH-3) | approval=start; acha que quem aprova executa | "O que aconteceria se você não fizesse mais nada?" | — | decisão, atores nomeados | **SH-2/SH-3**; T-08 |
| MT-5 | acompanhar execução + requested input; execução enfileirada | "Inicie e acompanhe a pesquisa; responda ao que ela pedir." | distingue queued/running; responde RI-01 sem ampliar escopo; reconhece simulação (SH-4) | inventa percentual; acha pesquisa real na internet | "Isso que está acontecendo é real? Como você sabe?" | — | interpretação de progresso e simulação | **SH-4**; T-09/10 |
| MT-6 | reagir à falha; passo de falha atingido | "Algo deu errado. Explique o que aconteceu e escolha o que fazer." | nomeia fonte indisponível; afirma que trabalho **foi preservado** (SH-5); escolhe recovery com efeito previsto | assume perda total; retry lido como apagar e recomeçar | "O que você perdeu com essa falha?" | — | explicação de preservação, opção escolhida | **SH-5**; T-11/12 |
| MT-7 | revisar resultado + evidência + decidir; artifact gerado | "Revise o resultado. Mostre o que o sustenta e o que não pode sustentá-lo. Depois escolha entre as opções de decisão e explique cada uma." | liga evidence↔claim; identifica a indisponível como bloqueio (SH-6); prevê consequência de accept/revise/reject (SH-7) | evidence=artifact; confia na fonte indisponível; reject=deleção; completed=accepted | "Se você rejeitar, o que acontece com o que foi produzido?" | — | vínculos apontados, previsões | **SH-6/SH-7**; T-13/14/15 |
| MT-8 | retorno pela Memory; **snapshot restaurado** pelo moderador (recarga da página com estado salvo), participante "volta dias depois" | "Você voltou ao projeto depois de um tempo. Descubra em que pé ele está e o que falta decidir." | reconstrói intenção/plano/decisão/pendência pela view de Memory (SH-8); nota o aviso de contexto desatualizado | recorre ao moderador; não localiza pendência; ignora o stale | "O que você faria agora? Por quê?" | A3 após 5 min | rota, itens reconstruídos, itens não encontrados | **SH-8**; T-16/17/18 |

Total estimado: 8 tarefas × ~5 min + abertura/consentimento (8 min) +
retrospectiva (7 min) + debrief (5 min) ≈ 60 min. Tarefa omitida por tempo =
evidência ausente, nunca falha (regra de E33).

## 3. Authority comprehension probes (usados em MT-3/4/8)

"O que aconteceria se você aprovasse agora?" · "A pesquisa já começou?" ·
"Quem pode aceitar este resultado?" · "O 'Responsável pela pesquisa' possui
permissão real neste computador?" · "O que esta tela demonstra e o que ela não
garante?" · "Quem responde pela decisão que você tomou?" · "Como você
cancelaria isso?" — probes verificam **compreensão de consequência**, nunca
memorização de terminologia; nenhuma resposta é confirmada como correta
durante a sessão.

## 4. Evidence comprehension probes (MT-7)

O caso do cenário já contém os quatro tipos exigidos: evidência **atual**
(EV-01), **parcial** (EV-02), **indisponível** (EV-03) e conclusão dependente
**bloqueada** (ACH-02). Probes: "O que sustenta este achado?" · "E este outro?"
· "O que o sistema fez quando a fonte ficou indisponível?" · "Isso é a
conclusão ou o que apoia a conclusão?".

## 5. Project Memory evaluation (MT-8)

Registrar, item a item, se o participante consegue responder pela Memory:
intenção original · o que foi entendido · qual assumption mudou · qual plano
foi aprovado · o que aconteceu na execução · qual decisão foi tomada · o que
permanece pendente · qual a próxima ação. Cada item marcado como: encontrado /
não encontrado / interpretado incorretamente / excessivo / insuficiente.

## 6. Session protocol

Duração máxima **60 min**. Abertura: propósito, voluntariedade,
"avaliamos a representação, não você", natureza simulada, proibição de dados
reais. Consentimento **antes** de qualquer tarefa (artifact do gate MG-4).
Moderação: enunciado verbatim; A0–A3; probes só após ação; pausas a pedido;
sem confirmar correção; nunca chamar capacidade simulada de real.
Encerramento: debrief reafirmando simulação + tratamento de dados + contato.
Withdrawal a qualquer momento sem perda de compensação. Incidentes: parar,
conter, registrar mínimo, notificar privacy owner e Council (rota de E34).

## 7. Findings model

```text
Observation != Interpretation != Finding != Recommendation != Decision
```

Cada finding: participant code · cohort · task · observation · interpretation
· severity (blocker/material/minor/observation) · confidence · frequency ·
hipótese afetada (SH-1..8) · view/estado afetado · evidence reference ·
recommendation · revalidation need. Sem score agregado; blockers não são
compensáveis (E33 §blockers permanece válido).

## 8. Decision criteria (outcomes candidatos)

- **Proceed** — nenhuma falha-blocker recorrente (≥2 participantes de cohorts
  distintos no mesmo boundary central: autoridade, evidência, recovery,
  Memory); as 8 SH com sinal positivo predominante e qualitativo.
- **Proceed with revisions** — mal-entendidos materiais localizáveis
  (terminologia, uma view, um probe) tratáveis sem redefinir produto.
- **Redesign required** — confusão recorrente em autoridade, evidência,
  recovery ou Memory em ambos os cohorts.
- **Insufficient evidence** — sessões < mínimo, protocolo violado, ou
  observações inconclusivas.

Nenhum limiar percentual arbitrário; "recorrente" = mesmo mal-entendido
central em ≥2 participantes de cohorts diferentes, avaliado qualitativamente
pelo reviewer e decidido pelo Council.

## 9. O que este protocolo NÃO é

Não é autorização, recrutamento ou sessão; não é avaliação externa completa
(E40 continua governando o programa completo); não produz claim WCAG; não
substitui HV-01–07; não modifica o vertical slice.
