---
schema_version: "0.1.0-experimental"
id: AD-004
kind: knowledge
knowledge_type: architecture_directive
title: "Architectural Research Program"
status: experimental
document_state: complete
governance_state: approved_experimental
knowledge_maturity: experimental
operational_state: in_force
version: "2.0"
created_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
relations:
  - type: follows
    target: AD-003
  - type: governed_by
    target: PMM-001
  - type: constrained_by
    target: AIP-001
  - type: subject_to
    target: ADF-001
  - type: establishes
    target: ARP-0001
  - type: establishes
    target: ARP-0002
  - type: establishes
    target: ARP-0003
  - type: establishes
    target: ARP-0004
  - type: establishes
    target: ARP-0005
  - type: establishes
    target: ARP-0006
  - type: establishes
    target: ARP-0007
  - type: handed_off_by
    target: IHR-0003
---

# AD-004 — Architectural Research Program

## Objetivo

Instituir um processo permanente para identificar, estudar e decompor ideias externas antes que elas se tornem propostas de mudança arquitetural.

O programa pesquisa problemas, princípios, custos, riscos e evidências. Ele não copia implementações e não autoriza adoção tecnológica.

## Princípio obrigatório

Antes de qualquer incorporação ao Core, a pesquisa deve responder:

1. qual problema a tecnologia resolve;
2. se esse problema existe no sistema;
3. se a arquitetura já o resolve;
4. se a alternativa é superior;
5. custos e riscos;
6. se cria nova Source of Truth;
7. se preserva governança;
8. se reduz complexidade líquida;
9. se o benefício justifica manutenção.

Popularidade não constitui evidência arquitetural.

## Decisões

- Architectural Research Program é perfil experimental de `Knowledge`, anterior às APs e não um Core Type, domínio, estado de AP ou fonte de autoridade.
- Pesquisa não representa intenção de implementação.
- Um resultado pode produzir nenhuma mudança, AP, ADR, RFC ou candidato a domínio.
- Qualquer intenção de implementação continua exigindo AP e governança apropriada.
- Context Engineering é linha estratégica experimental, não domínio oficial.
- Graphify é o primeiro caso registrado, sem adoção, integração ou dependência.
- Context Retrieval Engine e estimativa prévia de custo permanecem hipóteses de pesquisa.
- Grafos, índices, resumos, cache, embeddings e estratégias híbridas são alternativas; nenhuma é Source of Truth.
- Security Architecture, Guardrails and Assurance é preocupação transversal de pesquisa, sem promoção de domínio ou implementação.

## Identidade e formas experimentais

O prefixo provisório é `ARP-NNNN` e o perfil usa `knowledge_type: architectural_research_program`. Essa classificação não representa promoção ontológica.

Um atributo candidato distingue `research_form: program | case | hypothesis` sem criar três Knowledge Types. Nenhum schema global foi estabilizado.

## Lifecycle experimental

`identified → scoped → authorized → active ↔ paused → concluded | terminated`

Registro documental não significa pesquisa ativa. Pesquisa substantiva requer pergunta, owner, escopo, exclusões, método, orçamento ou timebox, riscos, critérios de encerramento e autorização proporcional.

Divisão, pausa e encerramento seguem critérios documentados em `knowledge/research/README.md`. Conclusão pode resultar em nenhuma mudança, evidência insuficiente, recomendação de AP ou RFC, informação para ADR ou candidato arquitetural.

## Dimensões de estado

`document_state`, `governance_state`, `research_state`, `knowledge_maturity`, `outcome`, `implementation_state` e `operational_state` representam dimensões diferentes. Os campos permanecem experimentais; enums globais e migração de objetos existentes exigem proposta futura.

## Relações com AP, ADR e RFC

Research informa ou recomenda. Não aprova arquitetura, não cria autoridade normativa, não se transforma automaticamente em outro artefato e não autoriza implementação. Relações seguras incluem `informs`, `recommends`, `investigates`, `evaluates` e `supersedes_research`.

## Architectural Knowledge Evolution Map

`Observation / Existing Knowledge → optional Research → optional AP → Decision → optional RFC / Plan → Execution → Validation / Operation → Evidence → Evolution`

O mapa é visão relacional experimental, não workflow, domínio ou Core Type. As etapas são opcionais e preservam identidades muitos-para-muitos.

## Governed Cognitive Loops

Governed Cognitive Loop é padrão contratual experimental delimitado por objetivo, contexto planejado, autoridade, orçamento, unidade útil, validação, progresso, parada, escalada, observabilidade e registro proporcional na Project Memory. Não é Knowledge Type, Skill, Agent ou Workflow obrigatório.

Bounded Execution Loop é política operacional que aplica esse padrão. Seus limites atuais são configurações, não invariantes ontológicos.

## Supervisão humana adaptativa

Human-on-the-Loop aplica-se a execução reversível, delimitada, observável e coberta por autoridade. Human-in-the-Loop é obrigatório para arquitetura, alterações canônicas relevantes, irreversibilidade, alto risco, ambiguidade material, conflito de autoridade, exceções de segurança, acesso privilegiado e impactos jurídicos, financeiros, operacionais ou de privacidade relevantes.

## Security and Guardrails by Design

Segurança é preocupação transversal obrigatória da visão futura. ARP-0007 investiga perfis de segurança, guardrails, identidade, dados, execução, IA, supply chain, infraestrutura, observabilidade, resposta e assurance sem adotar tecnologia ou criar Core Types.

## Critérios mínimos para adoção futura

Uma solução pesquisada somente poderá entrar no Core após demonstrar redução mensurável de custo ou tokens, preservação ou melhoria de qualidade, ausência de nova Source of Truth, governança preservada, manutenção aceitável e benefício superior ao custo.

## Restrições desta sessão

Não alterar ARCH-001, Ontologia, Compiler, Runtime ou Cognitive Pipeline. Não implementar, integrar, adicionar dependências ou iniciar código.

## Histórico

- 2026-07-22: versão 1.0 registrou a proposta inicial, ainda não canônica.
- 2026-07-22: canonização experimental aprovou lifecycle, dimensões de estado, mapa relacional, loops governados, supervisão adaptativa e fundação de pesquisa em segurança.
