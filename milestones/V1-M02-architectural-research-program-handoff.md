---
schema_version: "0.1.0-experimental"
id: IHR-0003
kind: knowledge
knowledge_type: implementation_handoff_report
title: "Architectural Research Program — Documentation Handoff"
status: pending_review
version: "2.0"
created_at: 2026-07-22
milestone: V1-M02
related_commits: []
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: implements_documentation_of
    target: AD-004
  - type: reviews
    target: ARP-0007
---

# Pacote para revisão do CSA

## Contexto

O Conselho autorizou a canonização experimental de Architectural Research como perfil de `Knowledge`, sua fundação de segurança e um único commit, sem pesquisa substantiva, implementação, adoção tecnológica ou alteração de ARCH-001.

## O que foi executado

- AD-004 preservou a decisão do Conselho.
- `knowledge/research/` foi criado como categoria documental de `Knowledge` especializado anterior às APs.
- Quatro programas agrupam as 19 linhas iniciais.
- ARP-0005 registra Graphify como caso de pesquisa sem evidência coletada nesta sessão.
- ARP-0006 registra Context Retrieval Engine e estimativa de custo como hipóteses.
- ARP-0001 a ARP-0006 foram corrigidos de `active` para `scoped`.
- ARP-0007 registra Security Architecture, Guardrails and Assurance como programa `scoped`.
- Lifecycle, dimensões de estado, mapa relacional, Governed Cognitive Loop, Bounded Execution Loop e supervisão adaptativa foram documentados.

## Arquivos afetados

O commit inclui AD-004, README, template, ARP-0001 a ARP-0007 e este IHR: onze arquivos. O relatório temporário permanece preservado, não canônico e fora do commit por falta de tipo de assessment compatível. ARCH-001, código e schemas permaneceram inalterados.

## Validação realizada

Validação documental proporcional: YAML, JSON, IDs, campos, relações, links, cobertura, estados, ausência de claims, separação semântica, escopo, `git diff --check`, IHP 12/12 e conjunto esperado antes do commit.

## Plano versus execução

O escopo autorizado foi atendido sem pesquisa externa substantiva. A canonização permanece experimental. O relatório não foi regularizado porque isso exigiria inventar `knowledge_type` ou aplicar falsamente o ADF; a exceção prevista na diretiva foi usada.

## Decisões tomadas pelo CEA

- Research Program é `Knowledge` especializado, não Core Type.
- Pesquisa precede AP, mas não substitui AP quando houver intenção de mudança ou implementação.
- Linhas relacionadas foram agrupadas por problema arquitetural, reduzindo fragmentação documental.
- Graphify foi registrado sem claims, fontes ou recomendação até pesquisa futura verificável.
- `program`, `case` e `hypothesis` são formas de uma única especialização experimental.
- Governed Cognitive Loop é padrão contratual; Bounded Execution Loop é política operacional.
- Supervisão humana é adaptativa conforme risco, reversibilidade e autoridade.

## Estado da documentação

AD-004, programas, template e handoff estão sincronizados para canonização experimental. O relatório temporário mantém pendência ontológica explícita. ARCH-001, milestone, Ontologia, Compiler, Runtime e Cognitive Pipeline não foram alterados.

## Backlog e propostas

Nenhuma AP foi criada. Research informa ou recomenda AP, ADR e RFC sem autoridade ou transformação automática. ARP-0001 a ARP-0007 permanecem `scoped`; pesquisa substantiva não começou.

## Riscos e pontos de atenção

- A categoria pode virar backlog paralelo se pesquisa e intenção de implementação não forem separadas.
- Programas amplos podem precisar ser divididos quando existirem evidências concretas.
- Graphify ainda precisa ter identidade, fontes primárias, versão e licença verificadas.
- Métricas de tokens não podem substituir qualidade, autoridade ou governança.
- O relatório temporário impede worktree totalmente limpo após o commit; isso segue a exceção explícita da diretiva.
- Segurança pode virar checklist genérico ou bloqueio absoluto se proporcionalidade não for preservada.

## Questões para o Conselho

1. Qual Knowledge Type existente poderá preservar futuramente o relatório sem falsificar o ADF?
2. Qual primeira onda de pesquisa substantiva deve ser autorizada e timeboxed?
3. Quando as dimensões de estado deverão gerar proposta de schema e migração?
4. Quais entregáveis de segurança merecerão APs próprias após pesquisa?

## Próxima ação recomendada

Revisar a canonização experimental e interromper. Não iniciar Deep Research, alterar ARCH-001, implementar controles ou produzir AP antes de nova autorização.

## Evidências

- Sete programas de pesquisa registrados e classificados por `research_form`.
- Dezenove linhas exigidas representadas explicitamente.
- Nenhuma dependência, integração ou código adicionado.
- Onze arquivos preparados para commit atômico; relatório temporário preservado separadamente.
- Snapshot derivado incluído abaixo.

## Project Status Snapshot

```json
{
  "current_milestone": {"id": "V1-M02", "status": "in_progress", "current_checkpoint": "arp_experimental_canonization_review", "completion_percentage": 30, "closure_recommended": false},
  "completed": ["Architectural Research experimentally canonized", "Research lifecycle and state dimensions documented", "Seven research programs scoped", "Security Architecture, Guardrails and Assurance foundation registered"],
  "pending": ["Council review of experimental canonization", "Authorization for first substantive research wave", "Future ADF assessment", "ARCH-001 structural approval"],
  "blocked": ["External substantive research", "Technology adoption", "Implementation", "Changes to ARCH-001, Ontology, Compiler, Runtime or Cognitive Pipeline"],
  "decisions_required": ["Select first authorized and timeboxed research wave", "Resolve the temporary review assessment type", "Determine when state dimensions require schema proposal"],
  "scoped_research_programs": ["ARP-0001", "ARP-0002", "ARP-0003", "ARP-0004", "ARP-0005", "ARP-0006", "ARP-0007"],
  "documentation_status": {"synchronized": true, "temporary_review_pending": true, "missing_updates": []},
  "validation": {"tests_passed": true, "build_passed": null, "lint_passed": null, "typecheck_passed": null},
  "recommended_next_action": "Review the experimental canonization before authorizing substantive research."
}
```
