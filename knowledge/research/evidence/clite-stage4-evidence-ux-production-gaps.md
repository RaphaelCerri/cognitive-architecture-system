---
schema_version: 0.1.0-experimental
id: ARP-0009-E53
kind: knowledge
knowledge_type: research_evidence
title: C-lite Stage 4 Evidence, UX and Production Gaps
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E49
  - type: related_to
    target: ARP-0009-E40
  - type: related_to
    target: ARP-0009-E52
---

# C-lite Stage 4 Evidence, UX and Production Gaps

## Project Memory evolution

O slice deriva Memory em memória síncrona (`memory.ts`, 92 linhas), provando
apenas que "derivar sem vazar path/ID interno" é possível em código. Avaliação
honesta contra as dimensões pedidas:

| Dimensão | Estado no slice | Suficiente para produto? |
|---|---|---|
| Canonical memory | Não existe — o slice não tem Markdown/YAML canônico próprio | Não |
| Derived memory view | Existe (`memory.ts`) | Parcialmente — prova o princípio, não a escala |
| Event history | Existe, in-memory, sem persistência real | Não — sem paginação/compactação |
| Resumability | Não testada além do processo de teste único | Não |
| Versioning | Não implementado | Não |
| Stale context | Detectado (`InterfaceState.stale_view`) | Parcialmente — só client-side |
| Unresolved items | Modelado via `RequestedInput`/`Contradiction` | Parcialmente |
| Branching | Não modelado | Não |
| Accepted/rejected decisions | Modelado via `DecisionRecord`/`ArtifactState` | Parcialmente |
| Provenance | Não implementado (sem hash, sem assinatura, sem autor real) | Não |
| Human-readable reconstruction | É o próprio objetivo do bootstrap institucional (`AGENT_START_HERE.md`) — mas para o repositório, não para uma instância de produto | Não testado para produto |

**Conclusão:** útil como prova de princípio; insuficiente como Project Memory de
produto. Nenhuma Memory real de produto foi desenhada aqui — decisão para uma
futura slice ("Canonical Project Memory Adapter", ver `ARP-0009-E54`).

## Product UX implications (a partir das 6 views)

- **Responsibilities que permanecem:** distinguir claramente estado interno de
  estado que o usuário precisa ver (o slice já separa `InterfaceState` de
  `ProjectState`/`ExecutionState` — esse limite deve sobreviver a qualquer UI
  futura).
- **Views que podem mudar:** toda a apresentação visual (layout, framework,
  estilo) — nada nisso é canônico, é só prova de conceito, CSP-restrita e sem
  design system revisado.
- **Estados internos vs. visíveis:** `HistoryEntry` bruto e `DecisionRecord` são
  candidatos a *progressive disclosure* (resumo primeiro, detalhe sob demanda) —
  o slice já não expõe paths de repositório nem IDs internos na Memory
  derivada, o que deve continuar sendo um requisito, não uma opção de design.
- **Onde ontology leakage pode ocorrer:** rótulos de estado (`draft`,
  `pending_review`, `stale_view`) são vocabulário institucional; um produto
  real precisa de tradução para linguagem do usuário final, sem vazar jargão de
  governança (`Council`, `CSA`, `ARP`, `IHR`) — o próprio `PROJECT_CHARTER.md`
  já declara este princípio ("o usuário final não precisa entender... Ontologia
  ou arquitetura interna").
- **Repository-shaped UX a evitar:** a UX não deve parecer "navegar pastas de
  Markdown" — o slice evita isso ao expor só as 6 views, não o modelo de dados
  bruto; esse limite deve ser preservado.
- **Authority comprehension:** o slice prova que é possível mostrar
  `ActorRole` e estado de autorização sem expor mecanismo de enforcement —
  reaproveitável como padrão de exibição, não como enforcement real.
- **Uncertainty e evidence:** `EvidenceStatus` (current/partial/unavailable/stale)
  e a disciplina de "not_executed nunca vira sucesso" (EXECUTION_CONTRACT) são
  padrões de exibição fortes e devem sobreviver a qualquer redesign de UI.

Nenhum Design System, wireframe ou decisão de biblioteca de UI é proposto aqui
— fora de escopo (ver AP-0015/AP-0016).

## Accessibility boundary

Estado real, sem inflar nem esconder (fonte: `ARP-0009-E49`):

- **Já implementado tecnicamente:** `lang`, CSP, landmarks, skip link, live
  regions, foco gerenciado (`main.ts`) — verificado por scan estrutural
  automatizado, não por usuário humano.
- **Verificado apenas estruturalmente (não empiricamente):** navegação por
  teclado completa, zoom 200–400%/reflow a 320px, leitor de tela (Narrator) —
  todos marcados `not_executed` ou `limited` em E49 (passed 0 · failed 0 ·
  limited 5 · not_executed 4).
- **Permanece sem teste empírico:** qualquer uso real por pessoa com
  necessidade de acessibilidade, com tecnologia assistiva real, em dispositivo
  controlado — 7 hipóteses de verificação futura (HV-01–07) seguem em aberto.
- **Exige usuários de tecnologia assistiva:** todas as HV-01–07, e o gate
  **G-04** (renderer accessibility gate) do conjunto E40, ainda aberto.
- **Deve ser critério de entrada para produto:** nenhuma claim de
  acessibilidade de produto pode ser feita até HV-01–07 serem resolvidas com
  operador humano qualificado — mesmo um futuro criterion 10 "satisfeito"
  significaria apenas "verificação técnica de acessibilidade concluída", nunca
  "acessibilidade validada para usuários" (declaração explícita de E49).

Nenhuma claim WCAG é feita ou implicada por esta seção.

## User-evidence boundary

Decisões que **não podem avançar com segurança apenas com evidência técnica**
(technical evidence do slice: 43/43 testes, scan de segurança, checks
estruturais):

- Compreensão de terminologia pelo usuário (os rótulos de estado fazem sentido
  fora do vocabulário institucional?)
- Confiança (o usuário confia no sistema para decisões reais de autorização?)
- Compreensão de autoridade (o usuário entende quem pode aprovar o quê?)
- Compreensão de recuperação (o usuário sabe que pode voltar/corrigir sem
  perder trabalho, sem alguém explicar?)
- Interpretação de evidência (o usuário lê `EvidenceStatus`/`ArtifactState`
  corretamente sem treinamento?)
- Utilidade da Project Memory (a Memory derivada realmente ajuda alguém a
  retomar contexto, ou só parece que ajuda?)
- Jornada de retorno (alguém consegue voltar depois de dias/semanas e se
  situar?)
- Carga cognitiva das 6 views em conjunto
- Desempenho de usuário não-técnico (fora do perfil "fundador técnico" já
  sinalizado como viés potencial em ARP-0009)

Todas essas questões dependem do conjunto de gates **G-01–G-17** (`ARP-0009-E40`),
dos quais 11 permanecem críticos e abertos, com o conjunto geral marcado "Not
Ready for evaluation authorization or execution" na última leitura registrada.
Nenhuma dessas questões pode ser respondida por este documento nem pelo slice
técnico — `Technical Evidence != User Evidence` permanece o limite mais citado
em todo o programa.

## Production requirements candidates

Sem implementar nada, apenas nomeando (must-prove / must-design / must-build):

**Must-prove** (evidência antes de decidir arquitetura):
domínio sobrevive fora de processo síncrono único; Project Memory real escala;
identidade/autoridade real é viável sem quebrar `Authority != visibility !=
capability != permission`; ao menos uma das HV-01–07 de acessibilidade resolvida
com operador qualificado.

**Must-design** (decisão arquitetural antes de construir, sem código ainda):
authentication; authorization; audit; storage; encryption; backup; migrations;
data retention; tenancy; observability; error reporting; privacy; consent.

**Must-build** (execução, fora de escopo desta pesquisa e do orçamento desta
slice): deployment; rollback; dependency management; CI; testing layers além do
técnico; processo de acessibilidade contínuo; supportability.

Esta lista nomeia; não prioriza além do que já está refletido nas candidate
slices de `ARP-0009-E54`; não cria backlog amplo nem AP nova.

## External evaluation reassessment (E40)

- **O que já pode ser testado agora, sem esperar Stage 4 completo:** nada com
  segurança — mesmo os gates menos críticos de E40 dependem de um prototype
  freeze (G-03) e de um renderer accessibility gate (G-04) que a verificação
  estrutural do slice não fecha.
- **O que depende de maior fidelidade:** toda avaliação de compreensão de
  autoridade, recuperação e evidência (lista acima) depende de uma interface
  mais próxima de produto do que o bundle IIFE atual.
- **O que não deve esperar Stage 4 inteiro:** a resolução de HV-01–07
  (acessibilidade técnica com operador humano qualificado) é independente de
  decisão de arquitetura de produto e pode, em tese, ser conduzida em paralelo
  — mas isto é uma observação, não uma autorização; a diretiva atual não
  autoriza sessão empírica.
- **Custo de continuar adiando:** o próprio ARP-0009 já registra repetidamente
  a avaliação externa como "o maior risco do programa" — todo aprendizado de
  produto até aqui é técnico ou de auto-avaliação do executor, nunca de
  usuário real.
- **Menor próximo estudo realista:** uma sessão dirigida e limitada, com
  operador humano qualificado, focada especificamente em 1–2 das HV-01–07 mais
  críticas (navegação por teclado completa e leitor de tela), sem caracterizar
  isso como avaliação externa nem como user research — exatamente o formato já
  usado em E49, repetido e aprofundado.

Nenhum recrutamento é proposto. Nenhuma alteração a E40 é feita.

## Referências

`ARP-0009-E40` (gates), `E44–E49` (proposta, contratos, opções técnicas,
readiness, limitações, verificação de acessibilidade), `foundation/bootstrap/EXECUTION_CONTRACT.md`,
`foundation/bootstrap/PROJECT_CHARTER.md`, `ARP-0009-E51`, `ARP-0009-E52`.
