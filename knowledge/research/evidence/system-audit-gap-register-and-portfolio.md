---
schema_version: 0.1.0-experimental
id: ARP-0009-E74
kind: knowledge
knowledge_type: research_evidence
title: System Audit — Consolidated Gap Register, Improvement Portfolio, Tier-A Report and Macro Readiness
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E70
  - type: refines
    target: ARP-0009-E71
  - type: refines
    target: ARP-0009-E72
  - type: refines
    target: ARP-0009-E73
---

# System Audit — Gap Register, Portfolio, Tier-A e Veredito Macro

## 1. Consolidated Gap Register

Formato compacto; campos completos do schema da diretiva presentes nas
colunas + notas. Classificações: blocker/material/minor/observation/
opportunity/intentional_defer/not_applicable/false_positive. Nenhum score
agregado.

| ID | Título | Área | Modo | Classificação | Evidência | Risco se ignorado | Reversib. | Ação recomendada | Autoridade |
|---|---|---|---|---|---|---|---|---|---|
| G-A01 | ARCH-001 não representa o sistema (esqueleto de 07-22) | arquitetura | todos | **material** | E71 §1 | executores/pessoas aprendem visão obsoleta; drift permanente | alta | Tier B: slice de redação incremental de ARCH-001 §§1,4,5,17 com o que JÁ foi decidido | Council |
| G-A02 | Personal/Team/Product Mode sem definição formal | visão | todos | **material** | E70 §1/§10 — 1ª menção formal é esta diretiva | decisões futuras sem fronteira de modo; contaminação SaaS→pessoal | alta | Tier B: Mode Boundary decision (1 doc curto) | Council |
| G-A03 | **Criação de projeto real inexistente** (fixtures only; Memory à mão) | experiência | personal | **blocker para a próxima fase** (não para o estado atual) | E70 §6; E73 §1 | o sistema nunca vira ferramenta; pesquisa eterna | alta | Tier B: slice "Real Project Intake" (form/CLI mínimo → Memory válida via adapter existente) | Council |
| G-A04 | Motor de execução real inexistente | execução | personal | **material** | E52; E70 §2 | valor limitado a simulação | alta | já sequenciado (slice 5 Real Execution Boundary — espec primeiro) | Council |
| G-A05 | Processo de aceite/aplicação de update proposal indefinido | memória | personal | **material** | E71 §2 | propostas acumulam; ou pior: aplicação improvisada | alta | Tier B: definir processo humano mínimo (quem aplica, como registra) | Council |
| G-A06 | Audit/event artifact (lado audit da Opção D) ausente | dados | personal→team | material | E58/E60/E70 §3 | auditoria real impossível; já explícito | alta | Tier B: slice curta de desenho (já candidata em E59 §5.4) | Council |
| G-A07 | **Backup/restore/DR do repositório indefinido** | operações | personal | **material — candidato a maior risco operacional** | E73 §3: não verificável no repo se existe cópia | perda total da memória institucional num defeito de disco | n/a | Tier A: checklist de backup (doc) + **decisão humana**: remoto privado/cópia externa | Chief |
| G-A08 | Observabilidade zero (custo/tokens/duração) | operações | personal | material | E70 §8 | loops autônomos sem teto real; custo invisível | alta | Tier B leve: campo de custo/duração no IHR (IHP-001 é canônico — mudança exige decisão) | Council |
| G-A09 | Índices desatualizados (milestones 2/33; research sem ARP-0008/09; foundation sem bootstrap; REPO_MAP sem 2 experiments) | repo | todos | **minor (comprovado)** | inventário §§1,5,8,12 | bootstrap/humanos navegam errado | alta | **Tier A: corrigido nesta slice** | executor (Tier A) |
| G-A10 | "Codex Adapter" nomeado em milestone normativo (roadmap V1-M06) | governança | todos | minor | inventário §7/§13a; conflita com AD-005 | política vendor-agnostic contraditória | alta | **Tier A: corrigido** (referência residual a fornecedor em definição normativa — exemplo explícito da diretiva) | executor (Tier A) |
| G-A11 | Identity/authority sem enforcement | segurança | team+ | material (deferido correto p/ personal) | E56–E59; E72 | impersonation em multiagente | alta | manter sequência (Identity Representation Feasibility é candidata E59) | Council |
| G-A12 | Divergência entre os 2 domínios sem parity check | engenharia | personal | minor | E71 §4 | correção aplicada a um e não ao outro | alta | Tier A: matriz EXPERIMENTS derivada não autoritativa; parity test = Tier C (acoplaria experimentos) | executor/Council |
| G-A13 | Reader YAML sem limite de tamanho | segurança | personal | minor | E72 §2 (YAML attacks) | DoS local barato | alta | **Tier A: guard de 1 MB + teste** (validação de boundary, isolada) | executor (Tier A) |
| G-A14 | Governança desproporcional para uso pessoal diário | governança | personal | material | E73 §6 | approval fatigue; abandono do processo | alta | Tier B: perfil "personal-low-risk" (IHR reduzido, autoaprovação registrada) | Council |
| G-A15 | Dogfooding zero (nenhum projeto real do Raphael jamais percorreu o ciclo) | valor | personal | **material** | E70 §6 | todas as hipóteses de valor seguem não testadas na prática | n/a | depende de G-A03; vira a slice de maior valor após intake | Chief/Council |
| G-A16 | Diretivas sem verificação de origem (canal CSA→executor não autenticado) | segurança | personal | observation | E72 §2 (prompt injection) | diretiva forjada teria nível 1 de precedência | n/a | Tier B futuro (assinatura/canal); mitigação atual: revisão do CSA pós-fato | Council |
| G-A17 | Colisão de identificadores "F-01" (finding E42 × regra de fixture) | repo | todos | observation | E71 §5 | confusão de leitura | alta | nenhuma ação (renomear reescreveria histórico); registrar | — |
| G-A18 | Política de dados pessoais para uso REAL indefinida | privacidade | personal | material | E72 §3 | conteúdo real do Chief sem retenção/criptografia definidas | alta | Tier B: junto com G-A03 (intake define classes de dado) | Council |
| G-A19 | Cristalização de contratos experimentais por uso repetido | canonicidade | todos | observation | E71 §3 | canon de fato sem decisão | n/a | vigilância; decisão formal na Production Architecture | Council |
| G-A20 | Requisitos SaaS no Personal Mode | visão | personal | **false_positive** | nenhum artifact contaminado encontrado (E70 §10) | — | — | manter disciplina | — |
| G-A21 | Team/Product capabilities ausentes (tenancy, merge, billing…) | vários | team/product | **intentional_defer** (correto) | E70 | — | — | não construir | — |
| G-A22 | Falta CI | engenharia | personal | opportunity | E70 §9 | guards só rodam quando alguém lembra | alta | Tier C agora (local-first); reavaliar com execução real | — |

Hipóteses do Chief confirmadas: 20 de 25 (as centrais todas); rejeitadas/
reclassificadas: contaminação SaaS (G-A20 false_positive), "três
implementações divergindo" (parcial — divergência é por design e gerenciada,
E71 §4), extensibilidade (real mas prematura — Tier C), fallback de
fornecedor (já resolvido no nível institucional), threat model (existia em
ARP-0007; o que faltava era a instanciação — feita em E72).

## 2. Improvement Portfolio

### Now — Personal Mode critical
1. **Real Project Intake** (G-A03): menor caminho para ideia real → Memory
   válida → domínio, usando o adapter existente. Proof: 1 projeto real do
   Chief criado sem editar YAML. Stopping: nenhum motor real; nenhuma UI nova
   além do mínimo. Unlock: dogfooding (G-A15).
2. **Backup do repositório** (G-A07): decisão do Chief (remoto privado) +
   checklist Tier A. Proof: restore testado 1×.
3. **Estudo G-17** (já pronto — DH-1..6): primeira evidência humana.
4. **Perfil personal-low-risk de governança** (G-A14): decisão curta do
   Council.

### Next — Architecture prerequisites
5. Processo de aceite de update proposal (G-A05). 6. Audit artifact design
(G-A06). 7. Real Execution Boundary spec (G-A04, slice 5 já sequenciada).
8. ARCH-001 redação incremental (G-A01). 9. Mode Boundary doc (G-A02).
10. Custo/duração no IHR (G-A08).

### Later — Team Mode
Identity enforcement (G-A11), merge/branch de Memory, concorrência, canal
autenticado de diretivas (G-A16).

### Later — Product Mode
Tenancy, billing, abuse, conformance — nada antes de Production Architecture.

### Do not build yet
Plataforma de observabilidade; CI/CD; parity test acoplando experimentos;
embeddings/search; migração automática de schema; qualquer framework de
extensibilidade além do fixture contract.

## 3. Tier-A Hardening Report (aplicado nesta slice)

| # | Mudança | Gap | Critérios Tier A |
|---|---|---|---|
| TA-1 | `milestones/README.md`: índice completo IHR-0001..0034 | G-A09 | correção documental comprovada; reversível |
| TA-2 | `knowledge/research/README.md`: portfólio inclui ARP-0008/0009 + nota sobre evidências | G-A09 | idem |
| TA-3 | `foundation/README.md`: linha para `bootstrap/` | G-A09 | idem |
| TA-4 | `REPOSITORY_MAP.yaml`: enumera os 3 experimentos; corrige descrição da convenção de evidência | G-A09 | drift relatado AQUI e corrigido (não silencioso) |
| TA-5 | `roadmap/V1.md`: "Codex Adapter" → "Reference Runtime Adapter" com nota histórica | G-A10 | exemplo literal da lista Tier A da diretiva |
| TA-6 | `experiments/EXPERIMENTS.md`: matriz derivada não autoritativa (papel/estado/dependência/frozen de cada experimento) | G-A12 | "criar relatório ou matriz derivada não autoritativa" |
| TA-7 | memory-adapter `reader.ts`: guard de tamanho (1 MB) + teste | G-A13 | validação de boundary isolada em experimento; sem mudança de arquitetura |

Rejeitados como Tier A (registrados): parity test (acoplaria experimentos —
Tier C); tocar ARCH-001 §12/§20 (alteração material proibida); mudar IHP-001
para custo (protocolo canônico — Tier B); qualquer mudança nos artifacts
históricos de avaliação.

## 4. Macro readiness verdict

```yaml
macro_readiness:
  conceptual_architecture: strong_foundation      # E71; limitação: ARCH-001 vazio
  personal_mode: early                            # definido só agora; sem intake nem dogfooding
  domain: strong_foundation                       # 2× testado; duplicação gerenciada
  canonical_memory: ready_for_next_boundary       # Feasible + formato aceito; falta processo de aceite
  execution: insufficient                         # simulada; motor inexistente (maior lacuna executável)
  identity_authority: partial                     # vocabulário aceito; enforcement zero (ok p/ personal)
  security_design: strong_foundation              # ARP-0007 + E72 instanciado
  security_enforcement: early                     # técnico só no experimento local
  privacy: partial                                # estudo strong; uso real absent
  reliability: partial                            # determinismo forte; backup/DR ausentes
  observability: insufficient                     # nada em nenhuma camada
  ux: early                                       # protótipo forte; entrada real ausente; zero validação humana
  accessibility: partial                          # estrutural forte; empírico zero (caminho pronto)
  testing: strong_foundation                      # 209 testes; lacunas conscientes (E73 §5)
  operations: early                               # processo forte; backup/custo ausentes
  team_mode: intentionally_deferred
  product_mode: intentionally_deferred
  production: intentionally_deferred
```

Cada estado tem evidência nos E70–E73 e limitação declarada em linha.

## 5. Adversarial second pass (mudanças entre 1ª e 2ª leitura)

- *Gap óbvio não citado na 1ª passada:* **backup do repositório** — a
  auditoria olhava para o produto e quase esqueceu que a memória
  institucional inteira vive num disco; promovido a G-A07/candidato a maior
  risco operacional.
- *Área com atenção demais:* segurança de produto SaaS (as diretivas insistem
  nela; o sistema real é local e sintético) — o threat model foi
  deliberadamente re-centrado nos perfis TM-2/TM-6 (o processo de
  desenvolvimento), onde o risco REAL está.
- *Área com atenção de menos (historicamente):* valor de uso pessoal — 33
  IHRs e nenhum projeto real; o registro G-A15 existe por isso.
- *Documentação mascarando ausência de software?* Parcialmente sim — e agora
  está quantificado: named_only/conceptual em execução, compiler, intake,
  observabilidade (E70). A resposta correta não é mais documentação.
- *Testes validam comportamento útil ou fixtures?* Comportamento (transições,
  guards, adapter) — mas TODO o comportamento é sobre conteúdo sintético;
  só G-A03/G-A15 resolvem isso.
- *Governança protege ou atrasa?* Protege (evidência: 33 ciclos com desvios
  pegos) — mas o custo é desproporcional para o próximo modo de uso (G-A14).
- *Experimentos cristalizando?* Sim, lentamente e às claras (G-A19) — aceito
  com vigilância.
- *Maior risco existencial:* **o sistema nunca virar ferramenta de uso real**
  — pesquisa perfeita, valor zero (G-A03+G-A15); segundo lugar: perda do
  repositório (G-A07).
- *Melhoria de maior alavancagem:* **Real Project Intake** — destrava
  dogfooding, política de dados reais, e dá ao estudo G-17 um sucessor
  natural com conteúdo verdadeiro.
- *Melhoria que parece inteligente mas deve ser rejeitada:* construir o motor
  de execução real JÁ, sem a spec (slice 5) e sem identidade — criaria
  exatamente a autonomia sem enforcement que o threat model proíbe; e
  qualquer investimento em observabilidade/CI/plataforma antes de existir
  uso real.
