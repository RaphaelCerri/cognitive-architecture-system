# Cognitive Architecture System

> [English](README.md) · **Português**

Arquitetura cognitiva governada para transformar conversas, decisões e pesquisa em memória
institucional versionada, inspecionável e reutilizável por humanos e agentes de IA.

Sua regra central é simples: **nenhum agente aprova o próprio trabalho, e nenhuma conversa, pessoa,
modelo ou runtime é fonte de verdade por si só**. O repositório é o registro institucional.

Não é um framework pronto para produção. É um sistema de arquitetura e governança em evolução, com
experimentos executáveis que testam hipóteses de risco antes que elas se tornem design canônico.

## Estado verificável

| Indicador | Estado atual |
|---|---:|
| Documentos Markdown | 276 |
| Código | 42 arquivos TypeScript e 34 JavaScript |
| Experimentos | 7 executáveis e 1 blueprint documental |
| Resultado local | **248 testes aprovados, 0 falhas** |
| Decisões arquiteturais | 13 ADRs e 13 diretivas de autoridade |
| Propostas e programas de pesquisa | 22 APs e 10 ARPs |

Contagens verificadas em 2026-08-21, excluindo dependências, `.git/` e saídas do Graphify.

## O que está demonstrado

| Capacidade | Evidência executável | Resultado |
|---|---|---:|
| Ontologia formal e contratos de conhecimento | [Ontology framing](experiments/ontology-framing/) | 35 testes |
| Migração de viés e fairness assurance | [Experimento de fairness](experiments/bias-migration-fairness-assurance/) | 14 testes |
| Separação governada de papéis | [Guard de orquestração](experiments/governed-role-orchestration/) | 23 testes |
| Memória institucional entre sessões | [Adaptador de memória](experiments/clite-memory-adapter-feasibility/) | 54 testes |
| Comandos, eventos, replay e transições | [Extração de domínio](experiments/clite-domain-extraction-feasibility/) | 74 testes |
| Falha, retry, cancelamento e recuperação | [Vertical slice Stage 3](experiments/clite-stage3-vertical-slice/) | 43 testes |
| Elicitação orientada à maturidade | [Protocolo de interação](experiments/interaction-protocol/) | 5 testes |

### Ontologia formal e contratos

O experimento separa três camadas frequentemente misturadas em sistemas de IA:

```text
Metamodelo Constitucional
  identidade, autoridade, proveniência, mudança e extensão
                    ↓ governa
Ontologia do Sistema
  conceitos, relações, restrições e dimensões de estado
                    ↓ representada como
Representações
  Markdown/YAML, JSON, grafos, índices e views de runtime
```

O kernel executável valida envelopes tipados, proveniência, relações declaradas e derivadas, aliases
de compatibilidade e propostas de migração não destrutivas. Um parser YAML 1.2 read-only roda sobre
o corpus real com aliases limitados, rejeição de chaves duplicadas e fixtures negativas.

### Fairness assurance além da média agregada

O experimento compara superfícies de dano antes e depois de uma mudança cognitiva. Os resultados
são `preserved`, `reduced`, `amplified` ou `displaced`. `Displaced` captura quando a média melhora,
mas o dano migra para outro subgrupo ou dimensão.

Os cenários cobrem viés por omissão, segmentação sensível sem autoridade, autoaprovação, compressão
de memória que desloca incerteza e melhoria restrita à fonte dominante.

### Papéis governados e autoridade

O modelo separa três responsabilidades: **CVO** define visão e aceita resultados, **CSA** projeta e
revisa arquitetura, e **CEA** executa a implementação. O guard valida envelopes de autoridade,
identidade de sessão, transições e integridade da cadeia de eventos. Ele bloqueia autoaceite do
executor, impersonação do CVO, falsa independência de revisão, mudança posterior à autorização e
aplicação de memória antes do aceite.

Esta é uma prova local de separação de funções, não infraestrutura multiagente autenticada.

### Memória institucional e estado determinístico

O adaptador diferencia informação canônica, derivada e temporária; detecta conflitos de
obsolescência; exige decisão humana diante de contradições; e produz propostas sem autoescrever a
memória. O domínio extraído usa comandos, eventos, guards, replay determinístico, persistência,
linhagem, cancelamento, falha e retry em dois domínios sintéticos.

## Estrutura do repositório

```text
foundation/      princípios, governança, protocolos, diretivas e ADRs
architecture/    visões arquiteturais em evolução
knowledge/       propostas, avaliações, pesquisa e evidências
milestones/      handoffs e trilha de execução
experiments/     provas executáveis e fixtures sintéticas
roadmap/         plano ordenado de validação V1
scripts/         backup e continuidade operacional
.features/       registro de capacidades entregues
```

O bootstrap é agnóstico de runtime. Codex, Claude Code ou outro executor devem reconstruir
autoridade, estado e contratos de retorno a partir dos mesmos artefatos versionados.

## Executar um experimento

```powershell
cd experiments/ontology-framing
npm install
npm test
```

Cada experimento possui dependências e scripts próprios. Consulte a
[matriz de experimentos](experiments/EXPERIMENTS.md).

## Limites explícitos

O repositório demonstra engenharia de artefatos cognitivos, governança de agentes, modelagem de
conhecimento, Responsible AI e validação experimental. Ele não oferece atualmente:

- pacote instalável ou API pública;
- runtime autônomo de agentes;
- autenticação ou isolamento real de credenciais entre papéis;
- RAG vetorial, embeddings ou retrieval híbrido;
- observabilidade de produção para custo, tokens e latência;
- garantia de prontidão para produção.

A fronteira faz parte do design. Especificações não são apresentadas como software entregue.

## Entradas recomendadas

1. [O que o sistema faz](O-QUE-O-SISTEMA-FAZ.md)
2. [Agent Start Here](AGENT_START_HERE.md)
3. [Foundation](foundation/README.md)
4. [Matriz de experimentos](experiments/EXPERIMENTS.md)
5. [Ontology framing](experiments/ontology-framing/README.md)
6. [Auditoria e gap register](knowledge/research/evidence/system-audit-gap-register-and-portfolio.md)
7. [Roadmap V1](roadmap/V1.md)

## Assistência por IA

Raphael Caveagna dirige arquitetura, modelo de governança, critérios de aceite e fronteiras dos
experimentos com implementação e revisão assistidas por IA. As claims deste README ficam limitadas
a artefatos versionados e testes executáveis.
