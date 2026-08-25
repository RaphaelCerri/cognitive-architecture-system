# Foundation

> [English](README.md) · **Português**

Foundation preserva os documentos fundamentais que orientam a arquitetura antes de qualquer decisão de implementação.

Project Memory é uma responsabilidade arquitetural, não um diretório. Todo conhecimento permanente deve ser persistido no tipo e local semanticamente adequados. A necessidade futura de uma camada física específica deverá nascer como Architectural Proposal.

Nesta fase, os documentos são representados experimentalmente como especializações de `Knowledge`. A Ontologia futura decidirá sua classificação definitiva.

## Estrutura atual

- [`manifestos/`](manifestos/): compromissos filosóficos aprovados.
- [`governance/`](governance/): autoridade, papéis e processos decisórios.
- [`principles/`](principles/): princípios que governam todas as decisões.
- [`protocols/`](protocols/): comportamentos obrigatórios derivados dos princípios.
- [`decisions/`](decisions/): Architectural Decision Records.
- [`directives/`](directives/): decisões emitidas pelo Conselho de Arquitetura.
- [`bootstrap/`](bootstrap/): camada agent-agnostic de entrada de executores (Charter, Status derivado, mapa do repositório, contrato de execução, contrato de retorno, manifests).

Essa organização é física e evolutiva; não define a Ontologia nem cria Core Types.

Foundation não contém convenções específicas de modelos, ferramentas ou runtimes.
