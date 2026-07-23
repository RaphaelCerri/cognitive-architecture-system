---
schema_version: 0.1.0-experimental
id: ARP-0009-E66
kind: knowledge
knowledge_type: research_evidence
title: C-lite Minimal Study — Compensation, Storage, Retention and Incident Operations (Candidate)
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E63
  - type: related_to
    target: ARP-0009-E34
---

# C-lite Minimal Study — Compensação, Armazenamento, Retenção e Incidentes

Decisões operacionais **candidatas**; as finais pertencem ao Chief/Council.
Nenhum pagamento realizado; nenhum serviço contratado; nenhuma integração.

## 1. Compensação — comparação e recomendação

| Opção | Equidade | Carga administrativa | Risco | Avaliação |
|---|---|---|---|---|
| A — sem compensação | baixa (privilegia quem tem tempo livre; enviesa a amostra para conhecidos dispostos) | nenhuma | percepção de favor pessoal → feedback complacente | rejeitada |
| B — valor fixo (PIX) | alta; independe de desempenho | **baixa no Brasil** (PIX é imediato, sem intermediário) | exige chave PIX (dado pessoal financeiro mínimo) | **recomendada** |
| C — vale-presente equivalente | média (nem todo participante usa a loja) | média (compra/envio/comprovação) | menos rastro financeiro, mais fricção | alternativa aceitável |
| D — proporcional ao tempo | parece justa, mas pressiona a "durar" a sessão e complica retirada | alta | incentivo perverso contra a retirada livre | rejeitada |

**Recomendação: Option B — R$ 120,00 fixos por sessão via PIX** (candidato;
faixa de referência local para sessão qualitativa de 60 min; valor final =
decisão do Chief). Igual para os dois cohorts.

Regras candidatas: devida pela **participação iniciada**, nunca condicionada a
completude ou opinião; **retirada no meio da sessão → valor integral**
(remove qualquer pressão para continuar); cancelamento pelo estudo com <24 h →
valor integral; cancelamento pelo participante antes da sessão → sem
compensação, reagendamento oferecido. Dados de pagamento necessários: nome +
chave PIX, **somente** no repositório de contato/pagamento (nunca com notas);
comprovante retido apenas pelo período operacional/fiscal necessário —
**ponto que exigiria orientação contábil/jurídica se o estudo escalar**
(registrado, não inventado).

## 2. Armazenamento — decisão candidata (ferramentas já disponíveis)

Três repositórios **fisicamente separados**, nenhum dentro do Git:

| Repositório | Conteúdo | Local candidato | Acesso |
|---|---|---|---|
| R1 — Contato/agenda/pagamento | nome, contato, disponibilidade, chave PIX, comprovantes | pasta local em disco com criptografia de volume (BitLocker, já disponível no Windows 11 Pro) na máquina do participant coordinator; sem sincronização em nuvem por padrão | somente coordinator (= consent owner) |
| R2 — Consent records | código, versão do consentimento, data, estado, autorização de citação | mesma pasta cifrada, subpasta própria | coordinator + data custodian |
| R3 — Research notes | código, cohort, tarefas, observações/interpretações separadas, paráfrases, findings candidatos | pasta cifrada distinta, acessível a moderator + note taker durante a sessão; pós-sessão, custodiada pelo data custodian | moderator, note taker, data custodian; CSA recebe somente síntese desidentificada |

Convenção de nomes: `P{n}-{A|B}` para participantes; arquivos
`R3/P1-A-session-01.md` etc.; o mapeamento código↔identidade vive **somente**
em R1. Backup: cópia cifrada manual (7-Zip com senha forte ou segundo volume
BitLocker) após cada sessão; a rotina de exclusão cobre também o backup
(nenhum reaparecimento silencioso — regra de E34). **Proibições:** raw notes
no Git; nome de participante em qualquer evidence artifact; upload para
serviço novo sem decisão; nenhum dado real de terceiros (clientes, veículos,
mensagens) mesmo se oferecido pelo participante.

Alternativa registrada (decisão humana): OneDrive já disponível — rejeitada
como default por ser conta corporativa (invent-corp) para estudo do projeto
pessoal; usar somente se o Chief decidir explicitamente.

## 3. Retenção (baseline candidato — herdado de E34, sem inventar obrigação legal)

| Dado | Prazo candidato |
|---|---|
| R1 contato/agenda | apagar ≤30 dias após conclusão ou cancelamento do estudo |
| R1 comprovantes de pagamento | somente o período operacional/fiscal necessário, com justificativa registrada (orientação profissional se escalar) |
| R2 consent records | duração do estudo + janela de retirada; proposta: 180 dias, então apagar |
| R3 notas pseudonimizadas | ≤90 dias após a decisão do Council sobre a síntese; máximo absoluto 180 dias da coleta |
| Dados de candidatos excluídos/desistentes | apagar assim que obrigações operacionais terminarem |
| Gravações | **não existem** (não autorizadas) |
| Findings desidentificados aprovados | seguem o ciclo de evidência do ARP com proveniência |

Exclusão auditável: registrar data/executor/escopo da deleção em R2.

## 4. Incident procedure (mínimo)

Padrão geral: **stop → contain → document → notify → decide**. Notificação:
privacy/consent owner + CSA; Council quando afetar autorização ou pessoa.

| Incidente | Resposta imediata |
|---|---|
| participante quer parar | parar na hora; debrief; compensação integral; registrar retirada e disposição dos dados |
| desconforto perceptível | pausar; oferecer parada sem pergunta insistente; registrar sem detalhe sensível |
| dado pessoal anotado por acidente | riscar/remover na fonte; registrar o evento (não o dado); confirmar ausência no backup |
| nota associada ao participante errado | congelar R3; corrigir com trilha; conferir mapeamento em R1 |
| aplicação falha na sessão | usar reset determinístico do slice; se persistir, encerrar tarefa como `blocked` (evidência ausente, nunca falha do participante); reagendar se necessário |
| ambiente perde dados | reconstruir do backup cifrado; declarar perda no log; nunca reescrever de memória |
| conexão externa inesperada | interromper sessão; investigar (CSP deveria bloquear); sessão inválida até explicação; registrar como incidente de segurança |
| compensação não recebida | coordinator resolve em ≤48 h; registrar |
| pedido de exclusão | localizar via R1; deletar R1/R2/R3 conforme consentimento; registrar deleção auditável |
| conflito de interesse revelado na sessão | completar a sessão se o participante quiser; marcar os dados como `conflicted` para a síntese decidir uso |

## 5. O que este documento NÃO faz

Não paga, não contrata, não integra, não fecha os gates (valores e local
final = decisão do Chief/Council), não constitui aconselhamento jurídico,
contábil ou fiscal.
