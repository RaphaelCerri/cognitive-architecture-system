---
schema_version: 0.1.0-experimental
id: ARP-0009-E64
kind: knowledge
knowledge_type: research_evidence
title: C-lite Minimal Study Launch Gates and Authorization Readiness
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E40
  - type: related_to
    target: ARP-0009-E61
  - type: related_to
    target: ARP-0009-E62
  - type: related_to
    target: ARP-0009-E63
---

# C-lite Minimal Study — Launch Gates and Authorization Readiness

Reavaliação de G-01–G-17 (E40) **para o estudo mínimo com estímulo
executável**, com o pacote mínimo de lançamento e a recomendação concreta.
E40 permanece intacto e continua governando a avaliação completa.

## 1. Reavaliação dos gates G-01–G-17

| Gate | Estado p/ o estudo MÍNIMO | O que mudou desde E40 | Waivable? (autoridade) | Ação necessária |
|---|---|---|---|---|
| G-01 roles | **encolhe**: 14 nomeações → 2 operadores + reviewer + Council (E63 §5) | política proporcional de SoD (IHR-0030) permite acumulação registrada em baixo risco | parcial (Council) | nomear 2 pessoas + confirmar CSA reviewer |
| G-02 conflicts | aberto, simplificado | menos pessoas = menos declarações | não | declaração simples dos 2 operadores |
| G-03 prototype freeze | **substituído**: congelar commit do slice executável (não os hashes Markdown) | estímulo mudou para o slice (E61 §1); F-01 já corrigido nele | não | Council fixa o commit na autorização |
| G-04 renderer | **reduzido**: browser exato + validação do caminho crítico por teclado no ambiente da sessão | slice roda em browser comum via `file://`; E49 já fez verificação estrutural; checks empíricos pendentes | não | 1 sessão técnica de validação (~30 min, operador interno) |
| G-05 disclosure | quase fechado | boundary textual permanente já existe NO estímulo, testado | n/a | aprovar texto de abertura (E62 §6) |
| G-06 recruitment | aberto | inalterado; canal/convite/screener a definir | não | definir canal + convite neutro + screener (1 página) |
| G-07 participants | **fechável por documento** | E63 §1 define 4–6, 2 cohorts, inclusão/exclusão | n/a | aceite do CSA/Council deste plano |
| G-08 consent/quotes | aberto | requisitos herdados de E34; falta o artifact final acessível | não | redigir + aprovar consentimento (paráfrase default) |
| G-09 recording | **fechável**: baseline sem gravação reafirmado | inalterado | n/a | constar na autorização |
| G-10 compensation | aberto | inalterado; valor local pendente | parcial (Council pode aprovar R$ fixo simples) | decisão de valor/forma |
| G-11 storage | aberto | inalterado; nenhum sistema selecionado | não | escolher local criptografado + acessos (E63 §4) |
| G-12 retention | **fechável por documento** | proposta herdada de E34 (30/90/180) | n/a | aprovação do privacy owner |
| G-13 accommodations | aberto, simplificado | contato + intake simples bastam para 4–6 pessoas | não | nomear contato + procedimento de 1 página |
| G-14 protocol | **fechável por documento** | E62 substitui E33 para o mínimo (8 tarefas, mesma disciplina) | n/a | aceite do CSA/Council de E62 |
| G-15 specialists | **adiado para o mínimo** | 5 revisões especialistas pertencem à avaliação completa; o mínimo usa 1 reviewer (CSA) — redução declarada, com custo: menos perspectivas independentes | sim (Council, com risco registrado) | registrar o waiver na autorização |
| G-16 budget/calendar | aberto, pequeno | 4–6 sessões × 60 min + honorários + 2 operadores | não | janela de calendário + teto financeiro |
| G-17 authorization | **absoluto — nunca waivable** | artifact de autorização explícito continua obrigatório | **não** | decisão formal do Council |

## 2. Minimum launch package (13 itens da diretiva)

| # | Item | Fonte | Estado |
|---|---|---|---|
| 1 | accepted study protocol | E62 | proposto — aguarda aceite |
| 2 | accepted task script | E62 §2 (verbatim) | proposto |
| 3 | participant screener | derivar de E63 §1 (1 página) | **a produzir** |
| 4 | consent artifact | requisitos em E63 §4/E34 | **a produzir** |
| 5 | compensation decision | E63 §5 | **decisão pendente** |
| 6 | storage location | E63 §4 | **decisão pendente** |
| 7 | retention decision | E63 §4 (herdada) | aprovação pendente |
| 8 | renderer/browser validation | gate G-04 reduzido | **sessão técnica pendente** |
| 9 | accessibility accommodation procedure | E63 §2 | 1 página a produzir |
| 10 | assigned operational roles | E63 §5 | **nomeações pendentes** |
| 11 | session log template | campos já definidos (E62 §7 + E63 §3) | formatar (trivial) |
| 12 | incident procedure | herdado de E34 (parar/conter/notificar) | aprovar |
| 13 | authorization decision | G-17 | **Council — última etapa** |

## 3. Smallest realistic study (recomendação concreta)

```yaml
minimal_study_recommendation:            # proposta — não autorizada
  participants: 4 a 6 (mín. 2A + 2B; máx. 4A + 2B)
  format: moderated hybrid task session + retrospective (Option D, E62)
  duration_per_session: até 60 min
  tasks: MT-1..MT-8 (E62), estímulo = vertical slice executável em commit congelado
  recording: none (paráfrase; citação curta só com consentimento específico)
  compensation: honorário fixo local (valor a decidir; nunca condicionado)
  environment: presencial ou remoto com o participante controlando o browser
    validado; file:// local; nenhum dado real
  operators: 2 pessoas (moderator + note taker) + CSA reviewer + Council
  evidence_produced: findings E62 §7 por hipótese SH-1..8; relatório de sessão
    no padrão honesto de E49 (nada inflado; omissão = evidência ausente)
  stopping_rules: blocker central recorrente em ambos cohorts (suficiência) |
    2 sessões sem observação nova | qualquer stop de E33 §stopping
  estimated_effort: ~2 dias de preparação (screener, consentimento, validação
    técnica, template) + 4-6 h de sessões + 1-2 dias de síntese
  decisions_unlocked: primeiro sinal real de usuário para SH-1..8; entrada
    Proceed/Revisions/Redesign (E62 §8); decisão informada sobre retomar E40
    completo, priorizar HV-01..07, ou redesenhar terminologia/views
```

## 4. Readiness recommendation

**Not Ready para sessões — Ready para fechamento de gates.** Diferença
material vs. E40: lá havia 11 blockers estruturais; aqui restam **6 pendências
operacionais pequenas** (screener, consentimento, valor de compensação, local
de armazenamento, validação técnica do browser, nomeações) + a autorização
G-17. Nenhuma exige pesquisa adicional — todas são decisões e produção
operacional de ~2 dias. O gate G-15 (especialistas) é o único waiver
recomendado, com risco registrado.

Próximos passos possíveis (decisão do Council, nada automático): aceitar
E61–E64 e encomendar o fechamento das 6 pendências; ou revisar o desenho; ou
adiar novamente — registrando que o custo do adiamento segue sendo o maior
risco nomeado do programa (E53: todo aprendizado até aqui é técnico ou
auto-avaliação).

## 5. O que este documento NÃO faz

Não autoriza estudo, recrutamento, contato, screener, consentimento, sessão,
compensação, gravação ou coleta; não fecha nenhum gate (aponta o que fecharia
cada um); não altera E40; não modifica protótipo, slice ou adapters.
