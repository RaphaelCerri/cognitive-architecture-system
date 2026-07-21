# Backlog de Evolução Arquitetural

Este backlog registra propostas de evolução da arquitetura. Ele não é uma lista de tarefas comuns, um sprint backlog ou um substituto para o planejamento operacional.

Toda ideia capaz de alterar princípios, ontologia, contratos, capacidades fundamentais, governança, inteligência, runtime, evolução ou limites do sistema deve nascer como uma **Architectural Proposal (AP)** antes de qualquer implementação.

## Fonte canônica

Todas as propostas ficam em [`proposals/`](proposals/), independentemente do estado atual. O caminho físico de uma proposta não representa seu status.

O status é um atributo lógico declarado no front matter YAML. Visões como propostas aprovadas, agendadas, concluídas, rejeitadas ou substituídas serão produzidas futuramente pelo compilador e nunca substituirão os objetos canônicos.

Uma Architectural Proposal ainda não é um Core Type. Na V1, cada AP é um objeto de `Knowledge` especializado por `knowledge_type: architectural_proposal`. A Ontologia poderá redefinir essa classificação no futuro.

## Estados iniciais

- `proposed`: registrada e aguardando avaliação arquitetural.
- `approved`: aceita como direção arquitetural, ainda sem compromisso de execução imediata.
- `scheduled`: selecionada para uma etapa ou milestone definida.
- `completed`: implementada e validada pelos critérios de aceitação.
- `rejected`: avaliada e recusada, preservando a justificativa histórica.
- `superseded`: substituída por outra proposta explicitamente relacionada.

Esses estados pertencem ao modelo lógico da V1 e não devem originar diretórios.

## Conteúdo obrigatório

Cada AP deve possuir, no mínimo:

- ID único;
- título;
- status;
- data de criação;
- autor;
- motivação;
- benefícios esperados;
- impacto arquitetural;
- complexidade estimada;
- dependências;
- momento ideal para implementação;
- critérios de aceitação;
- observações.

A estrutura de máquina é escrita em inglês no YAML. O conteúdo humano pode ser escrito em português, que é o idioma padrão do projeto.

## Fluxo permanente

1. Registrar a ideia como AP em estado `proposed` antes de iniciar sua implementação.
2. Avaliar a proposta com o Architectural Decision Filter (ADF) e registrar a decisão.
3. Alterar o status somente após a aprovação exigida pela governança do projeto.
4. Relacionar propostas que dependam, contradigam, substituam ou complementem outras.
5. Preservar propostas rejeitadas e substituídas para manter a rastreabilidade histórica.

## Revisão obrigatória por milestone — V1 manual

Ao concluir uma grande etapa ou milestone, nenhuma nova implementação arquitetural deve começar antes da revisão deste backlog. A revisão deve responder e registrar:

1. Existe alguma proposta que agora faz sentido implementar?
2. Alguma dependência foi resolvida?
3. Alguma proposta ficou obsoleta?
4. Alguma proposta pode ser fundida com outra?

Na V1, essa revisão é um protocolo manual obrigatório. A automação futura deverá apenas produzir recomendações e visões derivadas; mudanças na fonte canônica continuarão sujeitas à governança vigente.

## Identificação

Os IDs seguem provisoriamente o formato `AP-NNNN`, com numeração crescente e imutável. O ID não deve ser reutilizado, mesmo quando uma proposta for rejeitada ou substituída.

Use o [template de Architectural Proposal](_templates/architectural-proposal.md) para registrar novas ideias.
