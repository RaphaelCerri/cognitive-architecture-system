---
schema_version: 0.1.0-experimental
id: ARP-0009-E72
kind: knowledge
knowledge_type: research_evidence
title: System Audit — Cybersecurity, Privacy and Agent Threat Model
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0007
  - type: related_to
    target: ARP-0009-E58
---

# System Audit — Cybersecurity, Privacy and Agent Threat Model

Parte da auditoria macro (Council Decision 2026-07-23). Pergunta correta por
ameaça: *existe um controle **verificável** para este risco no modo de
implantação correspondente?* — nunca "existe documentação?".

```text
Security Requirement != Security Control != Enforcement != Verification != Certification
```

## 1. Perfis de implantação e estado real

| Perfil | Existe hoje? | Estado de segurança |
|---|---|---|
| TM-1 Local personal application | **sim** (slice `file://`) | controles reais: CSP `connect-src 'none'`, zero deps de runtime, scans testados |
| TM-2 Local + agentes externos | **parcial** (executores IA operam o REPOSITÓRIO via contrato) | controles documentais (EXECUTION_CONTRACT); zero enforcement |
| TM-3 Hosted single-user | não existe | nenhum controle — corretamente bloqueado |
| TM-4 Team application | não existe | idem |
| TM-5 Multi-tenant SaaS | não existe | idem |
| TM-6 Agent com filesystem | **sim de fato** (o executor desta sessão tem filesystem) | mitigado por Git (diff/revert), staging por path, revisão CSA — controles de *processo*, não técnicos |
| TM-7 Agent com browser/rede | parcial (executor tem web; produto não tem rede) | regras de fonte primária; sem sandbox técnico |
| TM-8 Agent com credenciais/ferramentas | não autorizado | corretamente bloqueado (ARP-0007 scoped) |

**Achado macro central:** os perfis com risco real HOJE são TM-2/TM-6 — o
próprio processo de desenvolvimento por executores IA — e é exatamente onde os
controles são processuais (contrato + revisão humana), não técnicos. Isso é
adequado para Personal Mode com revisão do CSA em cada checkpoint, e
inadequado para qualquer autonomia maior.

## 2. Matriz de ameaças (as aplicáveis hoje, com evidência)

| Ameaça | Perfis | Controle existente | Tipo | Evidência | Risco residual | Controle faltante |
|---|---|---|---|---|---|---|
| Prompt injection direto no executor | TM-2/6/7 | precedência de fontes (EXECUTION_CONTRACT §precedência); diretiva assinada pelo CSA como nível 1 | processo | contrato + IHRs revisados | **médio** — nenhuma verificação técnica de que a diretiva veio do CSA | canal/assinatura de diretivas (Tier B) |
| Indirect injection via arquivos do repo (Memory/artifact malicioso) | TM-2/6 | Memory adapter valida/classifica e **recusa** conflito; issues explicáveis; testes | técnico (experimento) | 46 testes E60; `require_human_decision` recusa init | médio-baixo no experimento; **alto** se generalizado sem revisão | validação de proveniência de artifacts (Tier B) |
| Poisoned evidence/artifact | TM-2 | refs validadas contra fixture; evidência indisponível bloqueia claim | técnico (experimento) | guards testados | médio — só cobre o domínio experimental | idem |
| Approval forgery / replay de autorização velha | TM-2 | stale-context guard bloqueia ações sensíveis; validade/expiry no modelo E57 | técnico (parcial) + conceitual | testes de stale; approval com validity **não enforced** | médio | enforcement de validade (Tier B, pós-identity) |
| Self-approval | TM-2/6 | guard executável (executor ≠ decisor) + SoD documental + revisão CSA real de cada IHR | técnico (experimento) + processo | testes; IHRs 0028–0033 | baixo no processo atual | — |
| Audit/snapshot tampering | TM-1/2 | snapshot invalidado por versão; **audit trail imutável não existe** (gap declarado em E58/E60) | técnico parcial | testes de invalidação | médio | audit artifact separado (já gap explícito) |
| Dependency compromise / supply chain | TM-1/2 | superfície mínima: 3 devDeps + 1 runtime dep (`yaml`, zero transitivas); lockfiles versionados | técnico | package-lock nos 3 experimentos | baixo-médio | **sem verificação de integridade/scanning** — checklist Tier A viável |
| Package-lock drift | TM-2 | lockfiles commitados | técnico | git | baixo | CI inexistente (deliberado) |
| YAML attacks (billion laughs, tags) | TM-1/2 | pacote `yaml` moderno; parsing com validação de shape e rejeição de campos | técnico | reader + testes | baixo | limite de tamanho de documento não testado (observation) |
| Path injection no adapter | TM-1 | adapter lê path fornecido pelo chamador; estado não depende do path (testado); **nenhuma sanitização de path** | técnico parcial | teste de independência de path | baixo (uso local, chamador confiável) | sanitização se exposto (Tier C agora) |
| Unauthorized network request | TM-1 | CSP `connect-src 'none'` + scans de fonte E bundle testados + incidente definido (E66) | técnico | testes; DevTools check no checklist E68 | **baixo — melhor controle do sistema** | — |
| Data exfiltration via executor | TM-6/7 | proibições contratuais; sem telemetria; dados sintéticos | processo | contrato; scans de dados pessoais | médio (inerente a executor com web) | sandbox/egress control (Tier B/C) |
| Secret exposure | TM-1/2 | **zero segredos no sistema hoje**; estudo separa R1/R2/R3 fora do Git; scan de secret-patterns nas memories | técnico parcial | testes E69-adjacentes | baixo hoje; alto quando credenciais existirem | secrets management (bloqueado até ARP-0007 ativar) |
| Infinite loop / token-cost exhaustion | TM-2/6 | budgets por slice (iterações/arquivos/commits/tempo) + stopping rules | processo | EXECUTION_CONTRACT; IHRs | médio — **nenhuma observabilidade de custo/token** | métrica de custo por slice (gap GAP-obs) |
| Role spoofing / agent impersonation | TM-2 | modelo conceitual E56 (stable≠runtime≠display); **zero enforcement** | conceitual | E56–E58 | alto se multiagente real; aceitável hoje (1 executor por vez + revisão) | identity enforcement (Tier B) |
| Cross-project leakage | TM-1 | fixture registry isola cenários; snapshot cross-invalidation testada | técnico (experimento) | teste E60 | baixo | — |
| Unsafe deletion | TM-1/2 | reversibilidade por `git revert` obrigatória; preservação de untracked declarados | processo+técnico | contrato; histórico | baixo | backup do repositório **não definido** (gap) |
| Insider misuse (o próprio operador) | todos | transparência total do Git + revisão CSA | processo | histórico | aceito em Personal Mode | — |
| DoS/resource exhaustion do produto | TM-1 | app local estática; N/A rede | n/a | — | n/a | — |

Ameaças de TM-3/4/5 (tenancy, session security, abuse, billing fraud):
**intentionally_deferred** — não devem contaminar o Personal Mode (regra da
diretiva §6).

## 3. Privacidade e dados

Estado: nenhum dado pessoal real no sistema (testado por scan); estudo mínimo
tem plano completo de minimização/retenção/deleção (E63/E66) — o melhor
subsistema de privacidade do projeto, **porém ainda não operado**. Gaps:
política de dados pessoais para uso REAL do Personal Mode (quando Raphael usar
projetos verdadeiros, o conteúdo vira dado pessoal dele — retenção/backup/
criptografia local indefinidos); classificação de dados por classe (E14-audit
da diretiva) inexistente fora do estudo.

## 4. Fontes externas

Nenhuma consulta externa nova foi necessária nesta auditoria: ARP-0007 já
incorpora OWASP GenAI e NIST AI 600-1 (consultados 2026-07-22, registrados no
próprio ARP) e o catálogo de ameaças acima é instanciação dessas fontes ao
sistema real. Nenhuma claim de conformidade é feita.

## 5. Veredito da camada

```yaml
security_design: partial_to_strong      # ARP-0007 + E58 + guards: boa cobertura de desenho
security_enforcement: early             # técnico real só no experimento local; resto é processo
privacy: strong_foundation_for_study / early_for_personal_use
evidence: este documento §2; ARP-0007; E56–E60; testes dos 3 experimentos
limitation: nenhum controle foi testado adversarialmente (sem red team); processo depende de revisão humana contínua
```
