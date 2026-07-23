# C-lite Domain Extraction Feasibility — experimento

Extração técnica **limitada, reversível e experimental** do núcleo de domínio do
vertical slice C-lite Stage 3, autorizada pela Council Decision "C-lite Domain
Extraction Feasibility" (2026-07-23). Responde empiricamente:

> A state machine, os commands, events, guards, invalid transitions e a
> derivação da Project Memory sobrevivem como um domínio executável e testável
> sem depender da aplicação de demonstração?

```text
Feasibility Extraction != Canonical Domain Package
Extracted Code         != Production-Ready Code
Passing Tests          != Product Validation
Experimental Contract  != Ontology
```

## O que existe aqui

- `src/fixture-contract.ts` — contrato experimental `ScenarioFixture` que
  inverte a dependência do Stage 3: o domínio recebe conteúdo de cenário por
  parâmetro em vez de importar um fixture concreto.
- `src/types.ts`, `src/events.ts`, `src/commands.ts`, `src/machine.ts`,
  `src/memory.ts` — domínio extraído, sem `window`/`document`/`localStorage`/
  tipos DOM (o `tsconfig` compila **sem** a lib DOM, tornando a independência
  verificável pelo typecheck).
- `src/persistence.ts` — boundary experimental de load/save com adapter
  in-memory; o domínio nunca conhece o mecanismo de armazenamento.
- `src/fixtures/oficina-horizonte.ts` — porte do cenário original ao contrato.
- `src/fixtures/estufa-vertical.ts` — segundo fixture mínimo e sintético,
  provando que o domínio não depende semanticamente da oficina.
- `tests/` — suíte executável com `node --test`, sem navegador.

## Diferenças de contrato registradas (vs Stage 3)

1. `AppState.ui { state, view }` **não foi extraído**; permanece somente
   `context: { stale: boolean }` — o guard de stale context é domínio
   (`Derived Status != Canonical Decision`); navegação de views é apresentação.
2. `VIEW_REFRESHED` → `CONTEXT_REFRESHED`; comando `RefreshView` →
   `RefreshContext`.
3. Conteúdo antes hardcoded na máquina/commands agora vem do fixture:
   gatilho da contradição, texto de correção da suposição, limite adicionado na
   revisão do plano, evidências de falha/conclusão, claim de revisão de escopo,
   ticks por passo, labels de papéis.
4. O default de `affectedScope` em `DecideReview`/revise deixou de citar a
   "Seção de aprovação externa" (texto do cenário da oficina).

## Como rodar

```bash
npm install     # somente devDependencies (typescript, @types/node)
npm run typecheck
npm test
```

## O que este experimento NÃO é

Não é um pacote de domínio canônico; não é `packages/` nem `src/domain/`
definitivo; não altera o vertical slice original, a Ontologia, ARCH-001 ou o
Compiler; não implementa persistência real, identidade, autorização real ou
motor de execução; não prova concorrência, escala nem adequação de produto.
Promoção a qualquer forma canônica exige decisão do Council.
