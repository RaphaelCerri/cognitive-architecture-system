---
schema_version: 0.1.0-experimental
id: ARP-0009-E73
kind: knowledge
knowledge_type: research_evidence
title: System Audit — UX, Accessibility, Reliability, Data, Testing and Governance Assessment
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0009-E70
---

# System Audit — UX, Acessibilidade, Confiabilidade, Dados, Testes e Governança

Consolida os assessments 5–8 da diretiva (rastreabilidade: §1 UX+ergonomia
cognitiva; §2 acessibilidade; §3 confiabilidade/observabilidade; §4 dados; §5
testes; §6 governança).

## 1. UX e ergonomia cognitiva

**A UI representa o modelo mental do usuário ou o repositório?** As 6 views
representam o *ciclo governado* — nem o repositório (bom: sem paths, testado)
nem ainda o *projeto do usuário* (o conteúdo é fixture). O gap dominante não é
de qualidade da UI existente, é de **entrada**: não existe caminho para uma
pessoa criar um projeto REAL — a ideia inicial, as perguntas e o plano vêm do
fixture; a Memory experimental é YAML escrito à mão. Consequências diretas:
onboarding `absent`; first successful outcome impossível fora do roteiro;
"projetos reais sem editar YAML" (pergunta explícita do Personal Mode) hoje =
**não**.

Onde o sistema exige aprendizado institucional excessivo: nos artifacts, não
na UI — a UI já traduz (F-01, labels, consequências exibidas). O risco de
ontology leakage está mapeado (E53) e será testado pelo estudo (SH-2/GAP-02).
Onde consequência > terminologia: já é o padrão adotado ("aprovar não
inicia") — preservar. Long-running/notifications/diff/rollback de UX:
`absent`, corretamente adiáveis até haver execução real. **Experiência ideal
ponta-a-ponta** (idea→…→return num projeto verdadeiro): descrita
conceitualmente em E44/E53; nunca percorrida com conteúdo real — é
exatamente o "daily dogfooding" que falta.

## 2. Acessibilidade (separações mantidas; sem claim WCAG)

Implementação técnica: forte no estímulo (landmarks, skip link, foco,
live regions, sem dependência de cor/movimento — E48/E49 estrutural).
Verificação estrutural: feita. Teste manual: parcial (revisão geral do
operador, E49). **AT/empírico: 0 passed** (HV-01–07 abertas; Narrator nunca
executado). Evidência de usuário: none. Conformance: none, nunca alegada.
Cognitive accessibility/timeouts/complex state: sem timeouts (bom); carga
cognitiva das 6 views é GAP-10 do estudo. Caminho correto já existe
(CM-0001 + checklist E68 §4) — o problema é só que nunca foi executado.

## 3. Confiabilidade e observabilidade

O que existe: determinismo/replay/reset (testados), invalidação por versão,
budgets processuais cumpridos em 33 IHRs. O que **não existe em nenhuma
forma**: logs estruturados, métricas, traces, **custo/tokens por slice**,
latência, classes de falha agregadas, status de backup, restore testado.
Necessário por modo: *Personal local* — mínimo honesto = (a) custo/duração
por slice registrados no IHR (hoje só duração às vezes), (b) **backup do
repositório definido e testado** (hoje: não verificável; se o disco morrer, a
memória institucional inteira pode morrer junto — candidato a maior risco
operacional real), (c) log de execução quando houver motor real. *Team/SaaS* —
adiado. Nenhuma plataforma de observabilidade deve ser construída agora
(Tier C); um checklist de backup é Tier A.

## 4. Arquitetura de dados (classes → owner/lifecycle)

| Classe | Source of truth | Lifecycle/retention | Gaps |
|---|---|---|---|
| Canonical artifacts (.md/.yaml) | ✅ o repo | append-only/supersede; ADR-0005 | **backup/restore indefinido**; migração de schema_version nunca exercitada |
| Project Memory experimental | arquivos em experiments/memories | descartável | ok |
| Runtime state / snapshots | nunca fonte | descartável, invalidável | ok |
| Event log / audit | HistoryEntry (runtime) | **sem owner nem artifact** | gap conhecido (Opção D lado audit) |
| Artifacts/evidence de produto | modelo de dados só | sem storage real | adiado corretamente |
| Attachments/binaries | — | proibidos na Memory (E60) | sem destino definido quando existirem |
| Secrets/credentials | **não existem** | n/a | política bloqueada até ARP-0007 — correto |
| Personal data | só no plano do estudo (R1/R2/R3) | 30/90/180 | uso REAL do Personal Mode sem política |
| Config (tsconfig etc.) | repo | por experimento | ok |
| Derived indexes | READMEs manuais | manutenção manual | **falhou 5× (inventário)** — Tier A corrige; automação = futuro Compiler |
| Embeddings/search | não existem | n/a | ok (derivados por definição, PMM preservado) |

## 5. Testes e avaliação (classificação exigida)

`exists`: unit/domain (2×), adapter, replay/determinism, contract-por-teste
(transições inválidas), security boundary scans, structural accessibility,
scenario independence, snapshot invalidation. `partial`: integration
(adapter→domínio real é integração de verdade; app→domínio só via bundle),
property-based (determinismo é caso especial; sem geradores), migration (só
rejeição). `missing` com risco que justifica: **cross-experiment behavior
parity** (risco real de divergência silenciosa — OBS-1), **YAML robustez de
tamanho/profundidade** (DoS local barato de cobrir), prompt-injection do
executor (processo, não teste — aceito), backup/restore (risco máximo, teste
manual basta). `not_yet_applicable`: load, chaos, e2e de produto, agent
behavior, cost limits, model fallback — sem motor real, testariam fixtures
(a diretiva manda não recomendar teste sem risco correspondente).

## 6. Governança — proporcionalidade

**Ela reduz risco ou aumenta cerimônia?** Nas slices auditadas: reduz risco de
verdade (cada IHR pegou pelo menos um desvio real; o processo de aceite
funcionou 33×). MAS o custo por slice é alto (~7 arquivos de overhead
documental por ciclo) e o mesmo rigor se aplica a mudar 1 índice e a extrair
um domínio. Para PESQUISA multi-executor isso é correto; para o uso pessoal
diário que vem a seguir, é desproporcional e vai gerar approval fatigue.

Controles que devem permanecer: aceite humano de checkpoint; budgets;
stopping rules; staging por path; IHR para trabalho material. Podem ser
proporcionais/combinados num **perfil personal-low-risk** (a definir por
decisão, não improvisar): IHR reduzido para slices Tier-A-like; autoaprovação
registrada (política já existe); PROJECT_STATUS como único doc de estado
por ciclo curto. Podem ser automáticos no futuro (Compiler): índices,
snapshot de status, verificação de links. Não fazem sentido no uso pessoal:
14 papéis nomeados, 5 revisores especialistas (já waived), granularidade de
retorno de 60 itens. **Latência de decisão** real hoje: baixa (CSA responde
rápido) — o gargalo não é o Council, é o overhead de escrita.

Bootstrap efficiency: ~6–8k tokens, 2 testes vivos ok; o custo real está nos
artifacts de evidência que crescem sem índice (corrigido em Tier A) e sem
compilador.
