# C-lite Stage 3 — Vertical Slice Executável (experimental)

Implementação experimental local do menor ciclo governado do C-lite:
ideia → descoberta → suposições → entendimento → plano → aprovação → fila →
execução → pendência → falha → recuperação → conclusão → resultado → evidências →
aceitar/revisar/rejeitar → memória do projeto → retorno.

**Fronteira:** local-only, single-user, dados 100% sintéticos, comportamento
determinístico. Zero backend, zero rede em runtime, nenhuma autenticação,
nenhum agente real, nenhum deploy. A interface demonstra fluxo e compreensão;
**não aplica controle de acesso real** e não constitui claim de segurança,
acessibilidade ou usabilidade. Não é produto nem frontend de produção.

Autorização: Council Decision sobre o checkpoint `4e9ec43` (proposta E44–E47).
Conteúdo derivado de ARP-0009-E29 com o finding F-01 corrigido
(`Responsável pela pesquisa` como label do executor).

## Executar

Pré-requisito: Node.js 24+ (o repositório não exige mais nada globalmente).

```bash
npm install        # instala somente devDependencies (typescript, esbuild, @types/node)
npm run build      # gera dist/app.js (bundle único, sem dependências de runtime)
```

Abra `index.html` diretamente no navegador (duplo clique / `file://`).
Não há servidor: a página é estática e a CSP bloqueia qualquer recurso externo.

## Verificar

```bash
npm run typecheck  # tsc --noEmit (strict)
npm test           # node --test — domínio, transições inválidas, fixture, memória, persistência
```

Não há lint configurado (decisão registrada no architecture and limitation report).

## Estrutura

- `src/domain/` — state machine, eventos, commands, guards, fixture e derivação
  da Project Memory. Independente da camada visual; testável sem navegador.
- `src/app/` — persistência (Option D: fixture canônico + estado em memória +
  snapshot local descartável) e as seis views (SF-01–SF-08).
- `tests/` — transições válidas/inválidas, validação de fixture (incl. termos
  proibidos F-01 e ausência de dados pessoais), consequências de revisão,
  derivação da memória, snapshot/reset determinístico e varredura de fronteira
  de segurança (sem rede, sem eval, sem innerHTML).

## Reset e snapshot

O estado é salvo em `localStorage` apenas para suportar o retorno ao projeto
(reload). O snapshot carrega versões de fixture/contrato e é descartado
automaticamente se qualquer versão mudar. "Reiniciar o protótipo" (na view
Histórico) remove o snapshot e reconstrói o estado inicial do fixture de forma
determinística. O snapshot nunca é Source of Truth.

## Limitações conhecidas

Registradas em `knowledge/research/evidence/clite-stage3-architecture-limitation-report.md`
(E48), junto com o mapeamento para requisitos, findings e exit criteria do Stage 3.
