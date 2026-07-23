# EXPERIMENTS — matriz derivada de papéis (NÃO autoritativa)

View derivada mantida manualmente (criada pela auditoria macro, Tier A,
2026-07-23). A fonte de verdade é o conjunto diretiva→IHR de cada experimento.
Nenhum contrato interno destes diretórios é canônico
(`disposable_experimental` — ver REPOSITORY_MAP).

| Experimento | Papel atual (de fato) | Origem | Testes | Estado | Depende de |
|---|---|---|---|---|---|
| `clite-stage3-vertical-slice/` | especificação executável + **estímulo oficial do estudo mínimo** (Council, IHR-0032; commit de referência `4c80585`) | IHR-0024 | 43 | congelado por função — mudanças invalidariam o freeze G-03 do estudo | — |
| `clite-domain-extraction-feasibility/` | **domínio de referência de fato** (o adapter importa daqui) | IHR-0029 | 74 | ativo como dependência; sem novas features autorizadas | — |
| `clite-memory-adapter-feasibility/` | prova da tese Memory (Markdown/YAML) → domínio; formato `memory-format-0.1-experimental` | IHR-0031 | 46 | ativo como prova; formato experimental de trabalho | domain-extraction |

Divergência conhecida e permanente entre os dois domínios (por design, ver
IHR-0029/E71 §4): `ui`/`context.stale`, `RefreshView`/`RefreshContext`,
fixture importado vs injetado. **Correções de comportamento aplicadas a um
domínio devem ser avaliadas para o outro.** A decisão formal de qual
implementação é a referência canônica pertence à futura Production
Architecture Proposal — esta matriz apenas registra a prática atual.
