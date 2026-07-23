---
schema_version: 0.1.0-experimental
id: ARP-0009-E47
kind: knowledge
knowledge_type: research_evidence
title: C-lite Stage 3 Testing, Risk and Authorization Readiness
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E44
  - type: related_to
    target: ARP-0009-E45
  - type: related_to
    target: ARP-0009-E46
---

# C-lite Stage 3 Testing, Risk and Authorization Readiness

## Natureza

Proposta de testes, riscos e critérios de entrada/saída para o vertical slice de Stage 3. Nenhum teste é executado por este documento; nenhuma autorização é concedida.

## Testing proposal (candidatos, não executados)

| Categoria | Testes candidatos |
|---|---|
| State-transition unit tests | cada transição válida de E45 (10 famílias), testável sem UI |
| Invalid-transition tests | as 10 transições inválidas nomeadas em E45, cada uma rejeitada com explicação |
| Fixture validation | fixture íntegro, determinístico, derivado de E29, sem termos proibidos (F-01: `CEA`, `Codex`, `Agent Blueprint`, `ARP`, `IHR`, `Ontologia` ausentes de strings renderizáveis), sem dados pessoais |
| Artifact/evidence separation | claim sem evidence válida exibida como bloqueada; evidence unavailable nunca some; artifact aceito não altera evidence |
| Project Memory update | cada outcome (accept/revise/reject) produz a atualização esperada; Memory reconstrói o estado após PROJECT_RESUMED |
| Deterministic reset | reset → estado idêntico ao fixture; snapshot descartado; nenhuma sobra |
| Keyboard navigation | ciclo completo operável por teclado (roteiro manual técnico) |
| Focus | foco visível; foco pós-transição e pós-erro previsível |
| Semantic structure | headings/landmarks/labels programáticos (automated + manual) |
| Failure/recovery | falha preserva notas/evidence/histórico; retry executa Failed→Queued→Running; cancel preserva histórico; scope revision remove somente a claim dependente |
| Review consequences | efeitos de E44 §Review outcomes verificados |
| No external request | zero chamadas de rede durante todo o ciclo (verificável) |
| No sensitive data | varredura de fixtures e snapshot |

## Observability do slice (referência)

Somente local, conforme E44: estado visível por família, event history, log determinístico, erro, última transição, ator/autoridade correntes, pending action. Sem analytics/telemetry.

## Entry criteria — condições para autorizar implementação

1. Stage 3 proposal (E44–E47) aceita pelo Conselho;
2. decisão de conteúdo F-01 aprovada (label recomendado: "Responsável pela pesquisa");
3. architecture option aprovada (recomendada: D);
4. technology option aprovada via needs/hard gates (E46) — decisão humana, sem lock-in;
5. escopo congelado (jornada mínima E44, sem expansão de cenário);
6. state machine E45 revisada;
7. estratégia de fixtures aprovada (derivação de E29 + regra de termos proibidos);
8. persistence option aprovada (recomendada: D — hybrid);
9. métodos de acessibilidade aprovados, incluindo decisão explícita sobre AT check;
10. security boundaries E46 aprovadas;
11. test plan aprovado;
12. orçamento de arquivos/commits aprovado (candidato: ≤30 arquivos rastreados, ≤5 commits, 3 sessões);
13. rollback plan aprovado (slice inteiro é revertível por remoção; nenhum artifact canônico depende dele).

## Exit criteria — condições candidatas de conclusão

1. executável localmente sem rede;
2. deterministic reset comprovado;
3. jornadas requeridas representadas (E44);
4. transições requeridas funcionam;
5. transições inválidas rejeitadas com explicação;
6. artifact/evidence separados no modelo e na interface;
7. failure/recovery operantes com preservação;
8. Memory update e return funcionam;
9. zero chamadas externas comprovado;
10. technical checks executados e registrados;
11. limitações registradas no architecture and limitation report;
12. nenhuma claim de produção, segurança, acessibilidade ou validação;
13. recomendação de Stage 4 (ou de encerramento) emitida para decisão do Conselho.

## Risks

- **protótipo virar produção por acidente** — mitigação: boundary textual, exit criterion 12, relatório de limitações;
- **framework-driven design** — mitigação: needs-first (E46), decisão de tecnologia como entry criterion;
- **complexidade de estado oculta** — mitigação: event log observável e testes por família;
- **acoplamento a browser storage** — mitigação: persistence D com snapshot opcional/descartável;
- **fake authority** — mitigação: boundary declarada + testes de guards;
- **overfitting ao cenário único** — aceito e declarado: o slice aprende com um cenário; generalização é trabalho futuro;
- **schema canônico prematuro** — mitigação: contratos E45 marcados descartáveis, sem promoção ontológica;
- **interação inacessível** — mitigação: métodos E46 como parte dos exit criteria;
- **dependências excessivas** — mitigação: hard gate de dependência mínima e verificação de identidade/licença;
- **implementação expandindo antes do aprendizado** — mitigação: bounded loop próprio + orçamento congelado;
- **avaliação externa adiada indefinidamente** — risco de programa: o slice não substitui usuários; gates E40 permanecem o caminho para user evidence e devem ser retomados por decisão do Conselho.

## Readiness recommendation

**Ready for Council decision on Stage 3 authorization.**

A proposta define escopo, contratos candidatos, opções de arquitetura/persistência com recomendação, métodos de acessibilidade, boundaries de segurança, testes e critérios de entrada/saída — suficiente para o Conselho autorizar, revisar ou rejeitar sem improvisação. Nada é iniciado por este documento: a implementação exige decisão explícita sobre os 13 entry criteria. A avaliação externa com participantes permanece adiada (E40); Evaluation Authorization, Evaluation Execution e frontend de produto permanecem bloqueados.
