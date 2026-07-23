---
schema_version: 0.1.0-experimental
id: ARP-0009-E50
kind: knowledge
knowledge_type: research_evidence
title: Cross-Executor Response and Portability Assessment
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: PMM-001
  - type: related_to
    target: GOV-001
---

# Cross-Executor Response and Portability Assessment

## Natureza

Avaliação qualitativa de (a) relatórios reais produzidos por dois executores
distintos neste repositório e (b) simulação documental de portabilidade da camada
de bootstrap recém-criada. Sem score universal; findings por dimensão.

## Parte 1 — Comparação entre executores

**Corpus:** IHR-0021 e artifacts E37–E40 (produzidos pelo executor Codex);
IHR-0022–0025 e E41–E49 (produzidos pelo executor Claude Code/Fable), todos em
slices comparáveis do mesmo programa (ARP-0009, milestone V1-M02). Limitação:
tarefas não idênticas; um avaliador (o próprio executor atual — viés declarado);
nenhuma re-execução cruzada.

### Findings por dimensão

| Dimensão | Observação qualitativa |
|---|---|
| Completeness | Equivalentes: ambos cobrem 12/12 seções do IHP-001 e os required returns integralmente. |
| Traceability | Equivalentes: IDs sequenciais, relations e paths corretos em ambos; Fable adiciona rastreio comando→resultado em verificação técnica. |
| Factual precision | Equivalentes nos artifacts; Fable inclui hashes/comandos literais com mais frequência. |
| Epistemic discipline | Ambos fortes. Caso demonstrativo do Fable: recusa em converter aprovação geral do operador em evidência empírica (IHR-0025). Padrão do Codex: fronteiras epistêmicas formuladas de modo mais didático nos próprios artifacts (ex. blocos `!=` de E40). |
| Boundary compliance | Equivalentes: nenhum dos dois iniciou etapa não autorizada nos registros examinados. Desvio menor do Fable: trailer de coautoria em commits, não previsto nas diretivas (aceito pelo CSA, registrado). |
| Decision usefulness | Codex organiza melhor as "Questões para o Conselho" em decisões acionáveis contextualizadas; Fable entrega snapshots/summaries que reduzem o custo de localizar o essencial. |
| Risk clarity | Codex: riscos mais narrativos e arquiteturais; Fable: riscos mais compactos e operacionais. Complementares. |
| Validation evidence | Fable mais forte quando há código (comandos reais, contagens, varreduras); em slices documentais, equivalentes. |
| Narrative quality | Codex superior em contextualização institucional e explicação de consequências; Fable mais seco, ocasionalmente comprimindo justificativas. |
| Machine readability | Fable superior (tabelas densas, JSON/YAML consistentes); Codex exige mais interpretação manual para extrair números. |
| Token efficiency | Fable superior; Codex investe tokens em narrativa que nem sempre muda a decisão. |
| Cross-model consistency | O conteúdo convergiu; o **formato** divergiu — exatamente o problema que RETURN_SCHEMA (BOOT-006) passa a resolver. |
| Manual interpretation burden | Menor no Fable para conferência rápida; menor no Codex para entender "por quê". A resposta institucional correta é o contrato de duas camadas, não a escolha de um estilo. |

### Elementos incorporados ao RETURN_SCHEMA

Do Fable: Layer 1 YAML, contagens explícitas, `not_executed` como categoria de
primeira classe, snapshot JSON. Do Codex: seções de decisões aplicadas com
rationale, riscos residuais narrativos, "future decisions" como decisões
acionáveis do Council. **Livres por design:** tom, ordem interna da narrativa,
uso de tabelas vs prosa na Layer 2.

### Riscos de cada estilo

- Estilo narrativo (Codex): custo de token e risco de a decisão-chave ficar
  enterrada em prosa.
- Estilo compacto (Fable): risco de justificativa comprimida demais para revisão
  arquitetural e de tabelas substituírem explicação.

## Parte 2 — Simulação documental de portabilidade

**Cenário:** executor novo, sem histórico de conversa, acesso somente ao
repositório, recebendo apenas o caminho `AGENT_START_HERE.md`. Simulação feita
pelo executor atual reconstituindo o caminho de leitura — **não** é validação com
outro modelo real e não é declarada como tal.

| Informação necessária | Encontrável? | Via |
|---|---|---|
| Propósito do sistema | sim | START_HERE → PROJECT_CHARTER |
| Papel e limites do executor | sim | START_HERE → EXECUTION_CONTRACT |
| Estado atual e checkpoint | sim | PROJECT_STATUS → IHR-0025 |
| HEAD esperado | sim, com ressalva correta | PROJECT_STATUS (`observed_head` = último aceito; instrução de conferir Git) |
| Bloqueios | sim | PROJECT_STATUS `blocked_work` |
| Tarefa piloto | sim | manifests/CM-0001 (registrada, não autorizada) |
| Arquivos obrigatórios/proibidos | sim | CM-0001 `required_reading`/`prohibited_paths` |
| Formato de retorno | sim | RETURN_SCHEMA |
| Stopping rules | sim | EXECUTION_CONTRACT + CM-0001 |

**Context budget estimado (leitura obrigatória de bootstrap):** 5 arquivos
(~1.100 linhas somadas de START_HERE+Charter+Status+Contract+manifest ≈ 6–8k
tokens), antes dos artifacts específicos da tarefa. Ordem de grandeza compatível
com lazy loading: um executor chega à tarefa com <10 arquivos lidos, contra ~15+
na reconstrução investigativa que esta troca de executor exigiu originalmente.

### Ambiguidades e lacunas encontradas

1. **GOV-001 vincula papéis a modelos específicos** ("Codex — Chief Execution
   Architect"): incompatível com executor agnóstico; requer futura atualização
   por decisão do Council (não alterada nesta slice).
2. **README.md não referencia AGENT_START_HERE** — edição futura de uma linha,
   não realizada para respeitar o orçamento de arquivos.
3. **Council Decisions recentes vivem na conversa** e são preservadas apenas por
   citação nos IHRs; `foundation/directives/` para em AD-004. O elo
   `authorized_work.directive_reference` do PROJECT_STATUS aponta para IHR — é
   rastreável, mas a persistência primária das decisões recentes é uma lacuna real.
4. **Precedência operacional** (EXECUTION_CONTRACT) é refinamento candidato de
   PMM-001 e precisa de confirmação do Council.
5. **ARCH-001 = `architecture/system-overview.md`** — o alias é usado nas
   diretivas sem mapeamento explícito; registrado agora no REPOSITORY_MAP (área
   architecture) e aqui.
6. Duplicação controlada: README "Comece aqui" (humano) × START_HERE (executor)
   — complementares, com risco de drift a monitorar.

### Limitações da simulação

Auto-simulação por executor que já conhece o repositório (viés de familiaridade);
nenhum modelo externo foi chamado; portabilidade real só será demonstrada quando
um executor novo usar a camada de bootstrap em tarefa real — candidato natural:
a próxima slice iniciar por `AGENT_START_HERE.md` como teste vivo.

## Conclusão

A camada de bootstrap cobre as nove necessidades de reconstrução do cenário; as
lacunas materiais são institucionais (persistência primária de decisões recentes;
GOV-001 model-bound), não estruturais. Recomendação: aceitar a fundação e tratar
as lacunas 1–3 como decisões futuras nomeadas.
