---
schema_version: 0.1.0-experimental
id: ARP-0009-E63
kind: knowledge
knowledge_type: research_evidence
title: C-lite Minimal Study Participants, Ethics, Accessibility and Data Operations Plan
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E34
  - type: related_to
    target: ARP-0009-E62
  - type: related_to
    target: ARP-0009-E58
---

# C-lite Minimal Study — Participants, Ethics, Accessibility and Data Operations

Plano operacional **proposto e não autorizado** do estudo mínimo. Herda os
requisitos de E34 onde não reduzidos explicitamente; nenhuma pessoa foi
identificada, contatada, consentida ou compensada.

```text
Participant Observation != Universal Product Truth
Internal Reviewer != Independent Participant
```

## 1. Participant strategy

| Parâmetro | Proposta mínima | Rationale |
|---|---|---|
| Mínimo | **4** participantes (2A + 2B) | abaixo disso não há como observar recorrência entre cohorts |
| Máximo | **6** participantes (4A + 2B) | tetos de E34 (A≤5/B≤3) respeitados por baixo; suficiente para sinal qualitativo |
| Cohort A | technical builders (software/IA/produto/automação) | ator primário do C-lite |
| Cohort B | non-technical project creators | contraste de compreensão — onde ontology leakage aparece |
| Ordem | alternar A/B quando possível (A,B,A,B…) | evita que aprendizados de moderação favoreçam um cohort |
| Stopping rule | parar antes do teto se um blocker central recorrer em ambos os cohorts (evidência suficiente para decisão) OU se 2 sessões seguidas não produzirem observação nova | E33/E40: quota nunca se sobrepõe a evidência suficiente |

Inclusão/exclusão: herdadas de E34 (adulto; consentimento; sem participação na
criação de E21+; sem conflito material; nenhuma exclusão por deficiência —
barreira de meio é blocker do estudo, não do participante). Viés declarado:
amostra pequena por conveniência, pt-BR, cenário sintético único, presença de
moderador — nenhuma generalização estatística.

## 2. Accessibility integration

Separações mantidas:

```text
Accessibility technical verification (HV-01–07, operador qualificado, CM-0001)
!= Participant accessibility need (acomodação de sessão)
!= User experience observation (o que o estudo coleta)
!= Conformance evidence (não existe; nenhuma claim WCAG)
```

- Nenhum participante é **obrigado** a usar tecnologia assistiva; necessidades
  declaradas voluntariamente recebem acomodação (zoom, teclado, pausas, tempo
  extra, formato acessível de consentimento, pessoa de apoio, reagendamento);
- se o participante usa AT própria e o ambiente validado não a suporta,
  registrar `renderer/access barrier` — blocker do estudo, nunca falha da
  pessoa (regra de E34);
- o slice já possui base técnica estrutural (E49: landmarks, skip link, foco,
  live regions), mas os checks empíricos (teclado completo, zoom 200–400%,
  Narrator) seguem `not_executed` — o gate MG-3 (E64) exige ao menos a
  validação do caminho crítico por teclado no ambiente exato da sessão;
- reduced motion e comunicação sem dependência de cor: já verificados
  estruturalmente; observação de sessão registra qualquer barreira percebida.

## 3. Data minimization (o que será registrado — e só isso)

| Coletado | Forma |
|---|---|
| participant code + cohort | `P1-A`…`P6-B`; mapeamento identidade↔código fora do repositório |
| completion por tarefa | completed / completed_with_help (A3) / blocked / omitted |
| erros e sinais de mal-entendido | códigos estruturados do protocolo (E62 §2) |
| hesitação relevante | nota estruturada do note taker |
| interpretação verbal | **paráfrase**; citação curta somente se consentida e desidentificada |
| ajuda solicitada | nível A0–A3 por tarefa |
| recovery observado | opção escolhida + efeito previsto |
| notas do moderador | template de sessão (gate MG-11) |
| findings | modelo de E62 §7 |

**Não coletar:** gravação de áudio/vídeo/tela (baseline sem gravação de E34
mantido; exceção exigiria decisão explícita do Council e reabriria a revisão de
privacidade); dados pessoais além do necessário; histórico profissional
detalhado; dados sensíveis; conversa bruta no repositório; nomes em qualquer
evidence artifact.

## 4. Consent and privacy (mínimo operacional)

Herda integralmente os requisitos de E34 §Consent; o artifact final acessível
permanece **gate aberto** (MG-4). Mínimo para operar: participant information
+ consentimento informado (natureza simulada, atividades, 60 min, sem
gravação, categorias exatas de dados, citação opcional, armazenamento,
retenção, desistência sem perda de compensação, riscos previsíveis, contato);
armazenamento criptografado aprovado FORA do repositório versionado
(mapeamento/contato/pagamento separados das notas pseudonimizadas); retenção
proposta herdada de E34 (mapeamento ≤30 dias pós-reconciliação; notas brutas
≤90 dias pós-decisão, máx. 180; findings desidentificados seguem o ciclo do
ARP); deleção auditável; reconsentimento após mudança material de
protocolo/estímulo. Nada disto é aconselhamento jurídico.

## 5. Operational roles (com a política proporcional de SoD do CSA)

Papéis de E40/G-01 (14 nomeações) reduzidos ao mínimo do estudo:

| Papel | Necessário? | Acumulável? (risco baixo, exceção registrada) |
|---|---|---|
| Study owner | sim | acumulável com moderator |
| Moderator | sim | **não acumulável com note taker** na mesma sessão (registro independente é a única fonte de evidência sem gravação) |
| Note taker | sim | pode ser a segunda pessoa da operação |
| Participant coordinator (contato/agenda) | sim | acumulável com study owner |
| Consent owner / data custodian | sim | acumulável entre si; deve ser um dos dois operadores |
| Accessibility contact | sim | acumulável com coordinator |
| Reviewer (síntese de findings) | sim | **não pode ser somente o autor do protótipo** (E34); CSA cumpre |
| Decision authority | sim | **Council — nunca acumulável** com a operação |

**Mínimo viável: 2 pessoas operando** (ex.: Chief como
moderator/owner/coordinator + 1 note taker independente) **+ CSA como reviewer
+ Council como autoridade**. Acumulações registradas via
`solo_operator_exception`-like no log do estudo (risk_class: low — estudo
local, sintético, sem gravação, reversível), **nunca** apresentadas como
revisão independente. Compensação: decisão local pendente (gate MG-5) —
honorário fixo não condicionado a feedback positivo (E34).

## 6. O que este plano NÃO faz

Não recruta, não contata, não consente, não agenda, não compensa, não coleta;
não seleciona sistema de armazenamento (gate); não fecha G-01–G-17 do programa
completo; não emite claim de acessibilidade ou privacidade.
