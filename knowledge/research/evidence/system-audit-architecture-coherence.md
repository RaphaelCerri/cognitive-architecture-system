---
schema_version: 0.1.0-experimental
id: ARP-0009-E71
kind: knowledge
knowledge_type: research_evidence
title: System Audit — Cross-Layer Architecture Coherence Assessment
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARCH-001
  - type: constrained_by
    target: PMM-001
---

# System Audit — Cross-Layer Architecture Coherence Assessment

## 1. ARCH-001 representa o sistema atual? **Não.**

Verificado diretamente: ARCH-001 está em `draft 0.2-structure` — é um sumário
editorial de 29 seções com "Finalidade/Maturidade" e **nenhuma redação**. Ele
não menciona: a camada de bootstrap (BOOT-001..006), o benchmark C-lite, os
três experimentos, o modelo de identidade/autoridade (E56–E59), o formato de
Memory experimental, nem qualquer decisão tomada desde 2026-07-22. O sistema
real evoluiu por ARPs/IHRs/experiments **ao lado** do documento de
arquitetura, não através dele. E52 registrou isso como "primeira contribuição,
não contradição" — correto então; hoje o descompasso é a **maior dívida de
coerência do repositório**: um executor novo que confie em ARCH-001 aprende a
visão de 2026-07-22, não o sistema de 2026-07-23. (Mitigação real existente: o
bootstrap manda ler PROJECT_STATUS/ARPs, não ARCH-001 — por isso a
portabilidade funcionou mesmo assim.)

## 2. Fluxo canônico — o mapa pedido, com transições reais vs simuladas

```text
canonical source (Markdown/YAML)          EXISTE (repo institucional + memories experimentais)
  → compiler/input                        NÃO EXISTE (Compiler: ARCH-001 §18 "planejado"; o
                                           memory-adapter é o único proto-compiler real)
  → normalized representation             EXISTE só no experimento (NormalizedMemoryRecord)
  → domain                                EXISTE (2× — ver §4)
  → runtime                               PARCIAL (bundle IIFE local; nenhum motor de execução)
  → artifacts/evidence                    EXISTE como modelo de dados; sem storage real
  → update proposal                       EXISTE (experimento; nunca auto-aplicada)
  → accepted canonical change             NÃO EXISTE como processo (aceite é manual/implícito
                                           via CSA review de IHR; nenhum mecanismo aplica
                                           uma proposal aceita à Memory)
```

Transições inexistentes ou simuladas: compiler/input (inexistente),
runtime→execução real (simulada por roteiro), proposal→accepted change
(processo humano indefinido — quem aplica, como, com qual registro).

## 3. Separações críticas — estado

| Separação | Estado | Evidência |
|---|---|---|
| PMM-001 preservado (Markdown/YAML como verdade) | ✅ íntegro | toda a linha E55–E60 reforça; nenhum runtime virou fonte |
| Memory ≠ audit ≠ event log | ✅ definida e testada; **audit artifact não construído** | E58 §5; E60 Opção D aprovada |
| Derived views sem autoridade | ✅ | PROJECT_STATUS declara não-autoridade e o staleness é tratado corretamente há 5 slices |
| Apresentação sem regra de domínio | ✅ no extraído | decisão de Interface State (IHR-0029) |
| Domínio sem texto de UI | ⚠️ parcial | mensagens pt-BR de guard na máquina — registrado (OBS-2 IHR-0029), correção futura via reason codes aprovada em conceito |
| Fixture ≠ configuração permanente | ⚠️ risco crescente | `ScenarioFixture` marcado experimental em 3 docs, mas **3 slices consecutivas o importaram**; o registry do adapter é acoplamento residual admitido (OBS-C IHR-0031) |
| Experiment ≠ canon | ⚠️ cristalização por uso | vocabulário E56–E59 e formato de Memory aceitos "como trabalho experimental" — a diferença prática entre "vocabulário de trabalho" e "canon de fato" está diminuindo a cada diretiva que os usa |

## 4. As três implementações — divergência e referência

| Implementação | Papel de fato | Estado |
|---|---|---|
| `clite-stage3-vertical-slice` | especificação executável + **estímulo oficial do estudo** (Council, IHR-0032) | congelado por função; 43 testes |
| `clite-domain-extraction-feasibility` | domínio de referência de fato (o adapter importa DELE, não do Stage 3) | 74 testes |
| `clite-memory-adapter-feasibility` | prova da tese Memory→domínio | 46 testes; importa a extração |

**Achado:** a decisão formal "qual é a referência" foi adiada para a slice 6
(Production Architecture), mas a prática já decidiu — a cadeia de dependência
real é `memory-adapter → extraction`, enquanto o Stage 3 tem papel distinto
(estímulo de estudo). Divergência JÁ existe e é permanente por design
(`ui`/`context.stale`, `RefreshView`/`RefreshContext`): os dois domínios nunca
mais serão behaviorally idênticos. Risco: correções futuras aplicadas a um e
não ao outro. Mitigação Tier A viável: matriz derivada não autoritativa
declarando papel/estado/frozen-status de cada experimento.

## 5. Conceitos duplicados / nomes conflitantes

- **"F-01" tem dois significados**: finding de walkthrough (E42) e regra de
  conteúdo/label do fixture (Stage 3). Contexto desambigua, mas é colisão real
  de identificadores em documentos vivos — observation.
- **"Executor"**: papel institucional (GOV-001), ator de domínio
  (`research_executor`) e sessão de executor (E56) — a distinção existe e está
  documentada (E56), mas o mesmo termo circula nos três níveis; mitigado, não
  resolvido.
- **Dois EXECUTION_CONTRACTs conceituais**: o institucional (BOOT-005) e o
  contrato análogo futuro do motor de execução do produto — E52 já declarou
  que "não são o mesmo"; manter vigilância.
- **Duplicação real de código**: ~1.100 linhas de domínio ×2 (aceita,
  gerenciada, com decisão pendente — OBS-1 IHR-0029).

## 6. Dependências e ciclos

Nenhuma dependência circular conceitual detectada: bootstrap → governança →
programas → evidências → experimentos formam DAG; experimentos dependem uns
dos outros em cadeia linear (adapter→extraction). O Compiler (inexistente) é o
único nó cuja ausência força o humano a ser o "compilador" (PROJECT_STATUS
manual, índices manuais) — coerente com a visão, mas é trabalho manual
crescente e fonte de staleness recorrente (o padrão "observed_head atrasado" é
esperado pela política, porém já causou 1 nota por slice).

## 7. Veredito da camada

```yaml
conceptual_architecture: strong_foundation
  evidence: PMM-001/GOV-001/bootstrap íntegros; separações centrais testadas
  limitation: ARCH-001 vazio não reflete nada disso
architecture_document_arch001: insufficient   # esqueleto de 2026-07-22
canonical_flow: partial                       # 3 transições inexistentes/simuladas (§2)
experiment_reference: partial                 # referência de fato ≠ decisão formal (§4)
```
