---
schema_version: 0.1.0-experimental
id: ARP-0009-E67
kind: knowledge
knowledge_type: research_evidence
title: C-lite Minimal Study — Operational Roles, Session Log and Accessibility Procedure (Candidate)
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
    target: ARP-0009-E58
---

# C-lite Minimal Study — Papéis, Log de Sessão e Procedimento de Acomodação

## 1. Role matrix (candidatos — ninguém confirmado sem aceite explícito)

| Papel | Candidato | Estado | Acumulação (SoD proporcional, IHR-0030) |
|---|---|---|---|
| Study owner | Raphael (Chief) | named_candidate | acumulável com moderator/coordinator/consent owner |
| Moderator | Raphael | named_candidate | **nunca acumulável com note taker** |
| Note taker | — | **blocking_unassigned** | pessoa distinta do moderator; registro independente é a única evidência (sem gravação) |
| Participant coordinator | Raphael | named_candidate | acumulável com owner |
| Consent owner | Raphael | named_candidate | acumulável com coordinator |
| Data custodian | Raphael | named_candidate | acumulável, com acesso/retenção explícitos (E66 §2) |
| Accessibility contact | Raphael | named_candidate | acumulável com coordinator |
| CSA reviewer | CSA | named_candidate | **separado da coleta**; revisa síntese pós-sessões (condição do waiver G-15) |
| Council decision authority | Council | standing | **nunca operador de sessão** |

**Conflitos e limitações registrados (condição da diretiva §11):** Raphael é
criador do projeto e acumularia 6 papéis — viés de expectativa real e
declarado. Mitigações estruturais: note taker independente com notas próprias
separando `observation` de `interpretation`; probes lidos verbatim do script
(E62); CSA revisa a síntese contra as notas cruas pseudonimizadas; o waiver
G-15 e as acumulações são **divulgados nos findings**. Registro em log no
formato `solo_operator_exception` (risk_class: low; nunca apresentado como
revisão independente).

**O note taker é a única lacuna bloqueante de pessoas.** Perfil mínimo: não
envolvido na criação do projeto; capaz de anotar estruturadamente em pt-BR;
disponível nas janelas das sessões; sem subordinação ao participante. Nenhum
nome é inventado — decisão humana pendente (DH-4 em E69).

## 2. Session log template (nunca preenchido com participante fictício)

```yaml
session_log:
  session_id: SS-0x
  participant_code: P{n}-{A|B}
  cohort: A | B
  date: ____
  environment:
    stimulus_commit: "4c80585"
    browser_and_version: ____          # exato, conforme E68
    os: ____
    launch: file:// local, snapshot resetado antes da sessão
    zoom_inicial: 100%
  consent:
    confirmed_before_tasks: false      # marcar true somente com artifact assinado
    version: 1.0-proposal
    quote_authorization: none | granted
  compensation_status: pending | paid | declined
  accommodation: none | descrição mínima acordada
  operators:
    moderator: ____
    note_taker: ____                   # pessoa distinta, obrigatória
    role_accumulations_disclosed: []   # solo_operator_exception refs
  timing: { start: ____, end: ____, pauses: [] }
  tasks:
    - id: MT-1..MT-8
      state: completed | completed_with_help(A1|A2|A3) | blocked | omitted
      observation: ____                # o que aconteceu (fatos)
      interpretation: ____             # separada, nunca no mesmo campo
  incidents: []                        # por E66 §4
  withdrawal: none | { at: ____, data_disposition: ____ }
  data_disposition: R3 path + backup confirmado
  completion_state: completed | partial | stopped
```

## 3. Accessibility accommodation procedure (1 página operacional)

1. **Oferta**: o convite e o screener (S-07) informam o contato de
   acomodações; a declaração é voluntária e sem pedido de diagnóstico.
2. **Intake**: registrar somente o necessário à sessão (ex.: "zoom 200%",
   "somente teclado", "pausas a cada 15 min", "tempo extra", "formato
   acessível do consentimento").
3. **Preparo**: validar a acomodação no ambiente exato **antes** da sessão
   (ex.: caminho crítico por teclado, zoom 200–400% — checklist E68); tempo de
   acomodação não reduz compensação nem conta como desempenho.
4. **Limite honesto**: se o ambiente validado não suporta a necessidade (ex.:
   AT específica não verificada — HV-01–07 seguem abertas), **não realizar a
   sessão com essa pessoa** e registrar `renderer/access barrier` como blocker
   do estudo, nunca como falha ou exclusão da pessoa; oferecer participação
   futura quando a verificação existir.
5. **Sessão**: pausas a pedido sempre; pessoa de apoio permitida (registrada,
   sem coleta de dados dela).
6. **Registro**: acomodações entram no session log em granularidade mínima.

Separações preservadas: verificação técnica ≠ necessidade do participante ≠
observação de UX ≠ conformance (nenhuma claim WCAG).

## 4. G-15 waiver — registro formal

```yaml
g15_waiver:
  state: approved_for_minimal_first_study
  reusable: false
  reason: low_risk_small_qualitative_study
  independent_specialist_review: waived
  moderator_note_taker_separation: required
  csa_synthesis_review: required
  disclosure_in_findings: required
```

O waiver não fecha nenhum outro gate e não permite que uma única pessoa
modere, anote, interprete e aprove os resultados sem separação.
