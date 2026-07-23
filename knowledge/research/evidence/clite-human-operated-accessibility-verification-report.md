---
schema_version: 0.1.0-experimental
id: ARP-0009-E49
kind: knowledge
knowledge_type: research_evidence
title: C-lite Human-Operated Accessibility Verification Report
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E48
  - type: related_to
    target: ARP-0009-E47
---

# C-lite Human-Operated Accessibility Verification Report

## Natureza

Registro da verificação técnica de acessibilidade do vertical slice, operada pelo Chief (Raphael) e assistida pelo executor, autorizada pelo Conselho após `1837d44`.

```text
Human-Operated Technical Check != User Evidence != Accessibility Conformance != Product Validation
General visual review != Empirical accessibility verification
```

**Regra central desta slice, cumprida:** nenhum resultado empírico foi registrado sem relato do operador; a aprovação geral do operador **não** foi convertida em evidência de testes específicos não executados.

## Ambiente

| Campo | Valor |
|---|---|
| SO | Windows 11 Pro build 10.0.26200 |
| Navegador | Google Chrome 150.0.7871.181 (Chromium) |
| Abertura da aplicação | `file:///.../experiments/clite-stage3-vertical-slice/index.html`, janela aberta pelo executor via linha de comando; sem servidor, sem rede |
| Zoom inicial | 100% (padrão) |
| Screen reader disponível | Narrator (nativo; NVDA não instalado, nenhuma AT instalada) |
| Operador | Raphael — Chief e operador técnico (resultado interno, não independente) |

## Preflight técnico (executado pelo executor)

Branch `main` @ `1837d4492d122d16c263c3ab78bbb0cbb9df9ef3` confirmado; worktree limpo; não rastreados preservados. Node v24.16.0 / npm 11.13.0; dependências já instaladas (nenhuma adicionada). Build **passou**; typecheck **passou**; testes **43/43 passaram**; `dist/`+`node_modules/` confirmados fora do Git; varredura do bundle: **zero requests externos**.

## O que o operador realmente executou

O operador realizou uma **revisão visual e funcional geral** da aplicação, percorrendo o fluxo de forma livre (inclusive uma primeira passada exploratória sem atenção dirigida, descartada do registro por declaração do próprio operador). Relato final do operador:

> Na revisão visual e funcional geral que realizei, não identifiquei problema evidente nem melhoria necessária. Não executei o ciclo completo exclusivamente por teclado, não executei formalmente os testes de zoom 200–400%/320 px e não utilizei o Narrator.

## Resultados por bloco

| Bloco | Procedimento previsto | Resultado | Base |
|---|---|---|---|
| Keyboard (T1) | ciclo completo só com Tab/Shift+Tab/Enter/Space | **not_executed** | declaração do operador |
| Visible focus (T2) | observação dirigida do foco em cada transição | **limited** | apenas revisão geral; sem procedimento específico |
| Form errors (T3) | ideia vazia, ações inválidas, associação da mensagem | **limited** | apenas revisão geral |
| Status announcements (T4) | observação dirigida da região de status por estado | **limited** | apenas revisão geral (visual); anúncio por AT não observado |
| Zoom (T5) | 200% e 400% | **not_executed** | declaração do operador |
| Reflow (T6) | 320 CSS px nas seis views | **not_executed** | declaração do operador |
| Reduced motion (T7) | emulação de prefers-reduced-motion | **limited** | não há animações por design (evidência técnica de código); não emulado |
| Non-color (T9) | estados identificáveis por texto | **limited** | revisão geral + evidência estrutural de código/testes |
| Screen reader (T8) | verificação básica com Narrator | **not_executed** | declaração do operador |

**Consolidação:** passed 0 · failed 0 · limited 5 · not_executed 4.

### General review

```yaml
general_review:
  performed_by: operator
  result: no_obvious_issue_found
empirical_accessibility:
  keyboard_full_cycle: not_executed
  zoom_and_320px: not_executed
  screen_reader: not_executed
exit_criterion_10: partially_satisfied
```

## Findings

Nenhum finding empírico confirmado (nenhum blocker, material ou minor observado). Um finding de protocolo e sete hipóteses de verificação futura:

### FP-01 — verificação empírica não realizada nesta sessão

| Campo | Conteúdo |
|---|---|
| Category | protocol limitation |
| Observation | O operador realizou revisão geral; os três procedimentos empíricos específicos não foram executados. |
| Operator report | citado acima, literal |
| Affected | todos os blocos empíricos; todas as views/jornadas |
| Severity | observation |
| Confidence | alta |
| Reproducibility | n/a |
| Proposed action | nova sessão dirigida (keyboard/zoom-reflow/Narrator, ~15–20 min) quando o Conselho decidir |
| Revalidation | required para elevar o criterion 10 a `satisfied` |

### Hipóteses de verificação futura (não são bugs confirmados)

| ID | Hipótese | Category |
|---|---|---|
| HV-01 | As seis abas de navegação podem ficar densas em 320 px | reflow |
| HV-02 | Tabelas de evidências/histórico podem ser trabalhosas com zoom alto ou leitor de tela | zoom; screen-reader |
| HV-03 | Explicações de controles desabilitados ("fonte alternativa", "escalar") precisam de associação programática ao controle, não só proximidade visual | screen-reader; error |
| HV-04 | O estado "visão possivelmente desatualizada" precisa ser anunciado claramente quando bloquear uma ação | status |
| HV-05 | "Tempo sintético" e "pesquisa simulada" devem permanecer explícitos para não aparentar atividade real | non-color/content |
| HV-06 | A região aria-live existe no código, mas utilidade/ordem dos anúncios só se confirma com leitor de tela | status; screen-reader |
| HV-07 | Foco enviado ao conteúdo principal a cada transição pode gerar repetição excessiva para usuários de leitor de tela | focus; screen-reader |

Todas com severity `observation`, confidence baixa, revalidation empírica requerida. Nenhuma correção foi realizada sem evidência observada.

## Correções

Nenhuma. O ciclo material de correção (máx. 1) não foi consumido; o entregável condicional "Finding and Correction Record" não foi produzido.

## Exit criterion 10

**`partially_satisfied`** — a verificação técnica automatizada/estrutural está completa e uma revisão geral humana não encontrou problema evidente, mas keyboard/zoom/reflow/screen reader permanecem sem observação empírica dirigida. Mesmo quando futuramente `satisfied`, significará apenas *technical accessibility verification completed* — nunca *accessibility validated for users* nem conformidade WCAG.

## Limitações

Operador único e não independente; revisão geral sem protocolo por bloco; nenhuma tecnologia assistiva utilizada; navegador único (Chrome 150); nenhuma medição de contraste; nenhum usuário real. Este relatório não substitui a avaliação externa adiada (gates E40).
