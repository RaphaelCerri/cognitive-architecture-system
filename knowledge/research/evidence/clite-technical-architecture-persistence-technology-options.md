---
schema_version: 0.1.0-experimental
id: ARP-0009-E46
kind: knowledge
knowledge_type: research_evidence
title: C-lite Technical Architecture, Persistence and Technology Options
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
    target: ARP-0007
---

# C-lite Technical Architecture, Persistence and Technology Options

## Natureza

Opções técnicas comparadas para o vertical slice de Stage 3. Nenhuma tecnologia é selecionada ou instalada; nenhuma opção é autorizada por este documento. Recomendações são candidatas e exigem decisão do Conselho nos entry criteria (E47).

## Architecture questions — respostas candidatas

1. **Boundary do slice:** um processo local, single-user, sem rede; entrada é o cenário sintético; saída é aprendizado documentado + contratos exercitados. Nada fora do ciclo governado E44 entra no slice.
2. **Executáveis:** transições de estado, guards, eventos, histórico, autoridade consequente, input/failure/recovery, review outcomes, Memory/return (tabela em E44).
3. **Simulados:** pesquisa, fontes, atividades, agente, tempo — roteirizados por fixture.
4. **Persistência exigida:** Project, Execution (checkpoint), Artifact/Evidence, Decisions, Memory — o necessário para return journey.
5. **Somente memória:** estado de view/navegação, rascunhos de formulário, modo de exibição.
6. **Sobreviver ao reload:** sim, para o agregado do projeto — o return journey (J6) é hipótese central (HP-02/HP-07); perder contexto no reload invalidaria o teste da jornada.
7. **Deterministic reset:** comando explícito que descarta estado derivado e reconstrói do fixture versionado — equivalente executável do "Prototype reset" de E30.
8. **Long-running sem processo real:** passos de cenário avançados por evento explícito (E44); nenhum timer por padrão.
9. **Failure/retry observável:** falha roteirizada no passo N do fixture; retry re-enfileira e re-executa passos com preservação verificável (E45 §Execution).
10. **Artifact vs evidence no modelo:** entidades e contratos distintos com relação claim-level (E45).
11. **Authority sem enforcement real:** roles + guards + auditoria + explicação; boundary textual obrigatória (E44).
12. **Controles visuais ≠ segurança:** disclaimer persistente; nenhuma iconografia de segurança (cadeado etc.); linguagem "representa/demonstra", nunca "protege/garante"; teste de conteúdo proíbe vocabulário de garantia.
13. **Project Memory local:** derivada do event log + snapshot legível (opções abaixo).
14. **Eventos/commands necessários:** catálogo E45 (34 eventos, 14 commands candidatos).
15. **Contracts mínimos:** os 17 data candidates de E45; somente os campos mínimos listados.
16. **Partes que exigirão arquitetura de produção futura:** autenticação/autorização reais; execução real de agentes e ferramentas; multiusuário/concorrência; persistência canônica da Memory no repositório; rede/segurança/observabilidade reais; acessibilidade com AT real. Registradas como fronteira, não como trabalho.

## Persistence options

| Critério | A — In-memory only | B — Local browser storage | C — Local versioned fixture | D — Hybrid |
|---|---|---|---|---|
| Custo de implementação | mínimo | baixo | médio | médio |
| Return journey (J6) | **falha** — reload perde contexto | suporta | suporta (somente leitura do baseline) | **suporta** |
| Deterministic reset | trivial | requer limpeza explícita | **nativo** (fixture é o reset) | nativo |
| Acoplamento a browser | nenhum | **alto** — contratos podem vazar para storage API | nenhum | baixo (snapshot é opcional e descartável) |
| Alinhamento com Memory documental | fraco | fraco | **forte** — fixture Markdown/YAML versionado | forte |
| Risco de simular persistência demais | baixo | médio | médio | controlado (snapshot ≠ Source of Truth, declarado) |
| Reprodutibilidade/teste | boa | média | **ótima** | ótima |

**Recomendação proporcional: Option D — Hybrid.** Fixture sintético canônico versionado no repositório (conteúdo E29 com F-01 corrigido, em Markdown/YAML); runtime state em memória reconstruído por eventos; snapshot local **opcional** apenas para return journey, sempre descartável e nunca tratado como Source of Truth. B puro é rejeitado pelo risco de acoplamento de contratos ao browser; A puro é rejeitado porque mata J6; C puro dificulta registrar o estado corrente entre sessões.

## Accessibility technical questions — o que Stage 3 pode realmente testar

| Verificável no slice | Método |
|---|---|
| semantic HTML (headings, landmarks, listas) | automated check + manual technical check |
| keyboard flow completo do ciclo | manual technical check roteirizado |
| focus management (foco visível, foco após transição/erro) | manual technical check |
| status announcements (mudança de estado anunciável) | manual technical check; base para AT check |
| form errors (associação programática, erro textual) | automated + manual |
| non-color states | inspeção de conteúdo/estilo |
| zoom / reflow até limites definidos | manual technical check |
| reduced motion (padrão sem motion; timer opcional respeita preferência) | inspeção |
| basic screen-reader behavior | **assistive technology check** — somente se explicitamente autorizado nos entry criteria |

Distinções preservadas: `automated check != manual technical check != assistive technology check != user evidence`. Nenhuma dessas camadas produz conformance claim; usuários com deficiência só entram na avaliação externa adiada (gates E40).

## Security technical boundaries

- dados exclusivamente sintéticos; proibição de dados pessoais testada por revisão de fixtures;
- nenhum secret, credencial, variável sensível;
- nenhuma chamada externa (teste automatizável: zero requests de rede);
- nenhuma execução dinâmica de código (sem `eval`/geração de código em runtime);
- nenhum HTML não confiável renderizado; se conteúdo do fixture for renderizado como rich text, sanitização obrigatória ou renderização como texto puro;
- nenhuma claim de permissão real (boundary E44);
- risco de dependências: minimizar; qualquer dependência exige identidade/licença/manutenção verificadas (critério ARP-0009 landscape) — sem instalação nesta slice;
- risco de local storage: snapshot opcional não pode conter nada além do estado sintético; reset/deleção documentados e testáveis;
- relação com ARP-0007: estas boundaries são aplicação proporcional dos princípios já registrados; ARP-0007 não é modificado.

## Technology selection questions — needs first

Necessidades derivadas (antes de qualquer candidato): execução local sem servidor obrigatório; state machine explícita e testável; formulários simples; navegação entre 6 views (routing mínimo ou troca de view por estado); renderização de conteúdo documental (fixture Markdown/YAML → apresentação); fixtures determinísticos versionados; base acessível (HTML semântico nativo primeiro); testabilidade da state machine sem UI; zero backend; build simples ou inexistente; integração com o repositório versionado.

**Observação comparativa não autorizativa:** as necessidades acima são satisfazíveis com plataforma web nativa e dependências mínimas ou nulas; um framework completo não é exigido pelo problema. A decisão de tecnologia é entry criterion (E47) e seguirá o Technology Selection Framework do próprio ARP-0009 (need → hard gates → evidência contextual → decisão humana). Nenhum candidato é nomeado como escolha.

## Architecture options

| Critério | A — Static multi-page + client state | B — SPA com state machine explícita | C — Document-driven application | D — Hybrid document-driven + state machine |
|---|---|---|---|---|
| Scope fit | parcial — estado entre páginas é frágil | bom | parcial — comportamento fica implícito no documento | **ótimo** |
| Traceability (fixture→view→evento) | fraca | média | boa | **ótima** — conteúdo rastreia a E29; comportamento rastreia a E45 |
| Accessibility base | boa (páginas simples) | depende de disciplina | boa | boa, com atenção a announcements |
| Deterministic behavior | média | boa | boa | **ótima** (fixture + guards) |
| Project Memory alignment | fraca | média | **forte** | **forte** |
| Testability | fraca (estado disperso) | boa | média | **ótima** (máquina testável sem UI) |
| Dependency burden | mínimo | médio | baixo | baixo–médio |
| Learning value | baixo — repete o protótipo | médio | médio | **alto** — exercita exatamente as distinções do C-lite |
| Migration risk (virar produção por acidente) | baixo | **médio-alto** | baixo | médio, mitigável por boundary declarada |
| Throwaway vs evolutionary | throwaway | evolutivo demais | intermediário | **intermediário controlado**: contratos evoluem, código é descartável |

**Recomendação: Option D — Hybrid document-driven state-machine application**, com B como fallback aceitável. Rationale: D é a única opção que exercita simultaneamente as três apostas do C-lite — conteúdo documental como fonte (alinhado à Source of Truth Markdown/YAML do sistema maior), state machine explícita (famílias separadas, guards, transições inválidas) e event log observável. A separa demais o estado; B tende a acoplar o aprendizado ao framework; C esconde comportamento no documento.

Mitigação do risco de produção acidental (comum a todas): repositório do slice marcado como experimental, boundary textual na interface, exit criteria proibindo claim de produção, e relatório final obrigatório de limitações.
