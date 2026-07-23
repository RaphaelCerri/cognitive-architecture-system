---
schema_version: 0.1.0-experimental
id: IHR-0033
kind: knowledge
knowledge_type: implementation_handoff_report
title: Minimal Study Operational Gate Closure and G-17 Readiness — Handoff
status: pending_review
version: "1.0"
created_at: 2026-07-23
milestone: V1-M02
related_commits: []
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: documents
    target: ARP-0009
  - type: related_to
    target: ARP-0009-E65
  - type: related_to
    target: ARP-0009-E66
  - type: related_to
    target: ARP-0009-E67
  - type: related_to
    target: ARP-0009-E68
  - type: related_to
    target: ARP-0009-E69
  - type: related_to
    target: IHR-0032
---

# IHR-0033 — Minimal Study Operational Gate Closure and G-17 Readiness — Handoff

## 1. Contexto

O CSA aceitou IHR-0032; o Council aprovou E61–E64, o slice executável como
estímulo oficial, o desenho Option D e o waiver limitado de G-15, e autorizou
exclusivamente o fechamento das seis pendências operacionais + o pacote de
decisão G-17 — sem recrutamento, contato, consentimento, pagamento ou sessões.

```text
Operational Readiness != Study Authorization
G-17 Readiness != G-17 Approval
Assigned Candidate != Confirmed Operator
No Recording != No Privacy Obligations
```

## 2. O que foi executado

### Bootstrap Loading Report — com desvio declarado (previsto pela diretiva §2)

Execução na sessão corrente (decisão do Chief); **não conta como teste de
portabilidade** (precedente CSA-OBS-BOOT-02..05). Impacto material: nenhum —
estado re-verificado contra o Git; todas as fontes exigidas (E33/E34/E40/
E61–E64, IHR-0032) haviam sido lidas do repositório **nesta mesma sessão** ou
são artifacts desta linha de trabalho; nenhuma releitura foi necessária e isso
é declarado em vez de encenado. PROJECT_STATUS: staleness zero
(`observed_head` = HEAD real `ebc2d6b`). Manifest: ausente. Da diretiva:
aprovações (IHR-0032, estímulo, Option D, waiver G-15), autorização e
orçamentos (9 arquivos/2 commits). Conflitos: nenhum material.

### Execution Loop Report

1. Preflight: `main` @ `ebc2d6b`; worktree limpo; untracked preservados;
   seis blockers mapeados (screener, consentimento, compensação,
   armazenamento/retenção, validação de ambiente, papéis); progresso sim.
2. **Validação técnica do estímulo executada** (comandos reais): typecheck,
   build (76.770 bytes), 43/43 testes, CSP `connect-src 'none'`,
   `lang="pt-BR"`, bundle sem fetch/URLs; commit do estímulo identificado
   (`4c80585`); worktree sem mutação rastreada pós-validação; progresso sim.
3. `E65` criado — screener (8 perguntas, dois cohorts, minimização) +
   consentimento em linguagem clara (com todas as cláusulas da diretiva §6 e
   as quatro proibições respeitadas); progresso sim.
4. `E66` criado — compensação (4 opções, recomendação R$ 120 PIX com regras de
   retirada/cancelamento), armazenamento R1/R2/R3 separados (volume cifrado
   local; OneDrive corporativo rejeitado como default e registrado como
   alternativa humana), retenção 30/90/180 com deleção auditável, 10
   procedimentos de incidente; progresso sim.
5. `E67` criado — matriz de papéis (Raphael candidato em 6 papéis com
   conflitos registrados; note taker `blocking_unassigned`; ninguém
   confirmado), template de session log (nunca preenchido com fictício como
   real), procedimento de acomodação, registro formal do waiver G-15;
   progresso sim.
6. `E68` criado — relatório de validação do estímulo (executado × pendente
   separados; checklist empírico de ~30 min para operador humano; Narrator
   explicitamente fora, permanece HV/CM-0001); progresso sim.
7. `E69` criado — matriz G-01–17 (8 ready_for_council_closure; 7
   conditionally_ready dependendo somente de DH-1..6; G-15 closed por waiver;
   **G-17 open — absolute**), pacote de decisão G-17
   (`authorize_with_conditions`), decisões humanas DH-1..7; ARP-0009 +
   PROJECT_STATUS atualizados; este IHR; progresso sim.

Limites: 7/7 iterações; dentro de 75 min; **8/9 arquivos**; 2/2 commits;
0 iterações sem progresso.

## 3. Arquivos afetados

Created: `knowledge/research/evidence/clite-study-screener-and-consent.md`
(E65); `clite-study-compensation-storage-incident-ops.md` (E66);
`clite-study-roles-session-log-accessibility.md` (E67);
`clite-study-stimulus-validation-report.md` (E68);
`clite-study-gate-closure-g17-readiness.md` (E69); este IHR (6). Modified:
`knowledge/research/ARP-0009-…md`; `foundation/bootstrap/PROJECT_STATUS.yaml`
(2). Total **8 ≤ 9**. Consolidação dos 6 deliverables em 5 evidence artifacts
(1+2 juntos em E65) com rastreabilidade declarada. Intactos: estímulo
(nenhum byte), E33/E34/E40/E61–E64, Ontologia, ARCH-001, `.obsidian/`, DRAFT.

## 4. Validação realizada

Executado: branch/HEAD/worktree; validação técnica do estímulo (§2.2 —
comandos reais, resultados não inventados); screener conferido contra a lista
da diretiva §5 (12 itens, sem dados excessivos/sensíveis); consentimento
conferido contra §6 (20 cláusulas presentes; 5 proibições respeitadas);
minimização de dados de pagamento (nome + chave PIX, separados); separação
R1/R2/R3; retenção sem obrigação legal inventada (pontos jurídicos
registrados); 10 incidentes com stop/containment/notification/deletion/
escalation; fronteira técnica × user-evidence explícita em E68; matriz de
papéis com moderador ≠ note taker inegociável; waiver G-15 registrado nos
termos exatos do Council; session log com campos da diretiva §14; G-01–17 um
a um com estados permitidos (nenhum `closed` sem decisão humana já dada);
pacote G-17 sem emitir autorização; DH-1..7 sem presumir respostas; **nenhum
contato/recrutamento/sessão**; UTF-8; `git diff --check` limpo; staging por
path; worktree final limpo.

Não executado / n/a: checklist empírico de ambiente (exige operador humano —
E68 §4, pendente e declarado); lint (não configurado); nenhuma sessão,
consentimento ou pagamento real.

## 5. Plano versus execução

Um desvio processual declarado (sessão reutilizada; previsto pela diretiva).
Nenhum outro: 8/9 arquivos, 2/2 commits, sem código, artifacts históricos
intactos, nada executado do estudo.

## 6. Decisões tomadas pelo CEA (dentro do escopo)

- **Consolidar screener + consentimento em E65** (mesma população, mesmo gate
  de aprovação) — mantendo os 6 deliverables rastreáveis;
- **Recomendar PIX fixo (Option B)** sobre vale-presente: menor carga
  administrativa no contexto brasileiro e compensação igual entre cohorts;
  retirada = valor integral, para eliminar pressão de permanência;
- **Rejeitar OneDrive corporativo como default de armazenamento** (conta
  invent-corp para estudo do projeto pessoal) — registrado como alternativa
  que só o Chief pode escolher;
- **Executar a parte técnica da validação de ambiente agora** (a diretiva
  permite "quando possível tecnicamente") e entregar o restante como
  checklist de 30 min — em vez de marcar tudo como pendente;
- **Manter Narrator/AT fora do checklist de sessão**, preservando o caminho
  HV-01–07/CM-0001 e a regra de E67 §3.4 (sem sessão para necessidade não
  verificada).

## 7. Estado da documentação

`ARP-0009` mantém `governance_state: authorized`, `research_state: active`,
`knowledge_maturity: evidence_gathering`, `outcome: null`,
`implementation_state: not_started`; `concluded` não usado. E33/E34/E40/
E61–E64 intactos. PROJECT_STATUS reflete IHR-0032 aceito, este checkpoint
`pending_review` e as DH-1..7 pendentes.

## 8. Backlog e propostas

Nenhuma AP criada/alterada. Pendências humanas DH-1..7 registradas em E69 §3 e
no PROJECT_STATUS. Pós-G-17 (se autorizado): executar checklist E68 §4,
divulgar screener no canal decidido, coletar consentimentos e conduzir
sessões — nada disso autorizado por esta slice.

## 9. Riscos e pontos de atenção

- **DH-4 (note taker) é a única lacuna de pessoas e bloqueia tudo** — sem uma
  segunda pessoa, o desenho sem gravação não tem fonte independente de
  evidência;
- concentração de 6 papéis em Raphael: mitigada estruturalmente e divulgada,
  mas continua sendo o maior viés declarado do estudo;
- o checklist empírico (E68 §4) pode revelar barreira de teclado/zoom — se
  falhar, G-04 reabre e as sessões não acontecem até correção autorizada;
- valores/locais candidatos (R$ 120, BitLocker) podem ancorar a decisão — são
  candidatos, não defaults silenciosos.

## 10. Questões para o Conselho

- Aceitar IHR-0033 e E65–E69 como fechamento documental das seis pendências?
- Confirmar os gates `ready_for_council_closure` (G-03/05/07/09/12/13/14)?
- Encaminhar DH-1..6 ao Chief para resposta direta?
- Após DH-1..6 + checklist empírico: decidir G-17 com o pacote de E69 §2?

## 11. Próxima ação recomendada

CSA/Council review e `accept`. Em seguida, as respostas às DH-1..6 são do
Chief (nenhuma pesquisa adicional substitui essas escolhas — em especial o
note taker), e a decisão G-17 é do Council. Não iniciar recrutamento, sessões,
Real Execution Boundary ou Production Architecture automaticamente —
interrompido após este relatório.

## 12. Evidências

Fontes internas: Council Decision "Minimal Product Experience Study
Operational Closure" (via CSA, 2026-07-23, incl. aprovações de IHR-0032/
estímulo/Option D/waiver G-15); E33/E34/E40/E61–E64; IHR-0032; validação
técnica executada nesta slice (comandos e resultados em E68 §2; estímulo
commit `4c80585`); política proporcional de SoD (IHR-0030). Nenhuma fonte
externa; nenhuma pessoa contatada; nenhum dado pessoal coletado.
