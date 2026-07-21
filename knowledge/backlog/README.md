# Backlog de Evolução Arquitetural

Este backlog registra possíveis evoluções da arquitetura. Ele não é uma lista de tarefas, um sprint backlog ou um substituto para planejamento operacional.

Nenhuma ideia arquitetural deve permanecer apenas em conversas ou ser implementada diretamente. Toda ideia capaz de alterar princípios, Ontologia, contratos, capacidades fundamentais, governança, inteligência, runtime, evolução ou limites do sistema deve nascer como uma **Architectural Proposal (AP)**.

## Fonte canônica

Todas as propostas ficam em [`proposals/`](proposals/), independentemente de seu estado. O caminho físico nunca representa status.

O status é um atributo lógico no YAML. Visões como propostas aprovadas, agendadas, concluídas, rejeitadas ou substituídas serão produzidas pelo Compiler e nunca substituirão os objetos canônicos.

Na V1, cada AP é um objeto de `Knowledge` especializado por `knowledge_type: architectural_proposal`. Architectural Proposal não é um Core Type; a Ontologia poderá redefinir essa classificação.

## Estados iniciais

- `proposed`: registrada e aguardando avaliação.
- `approved`: aceita como direção arquitetural, sem compromisso de execução imediata.
- `scheduled`: selecionada para uma milestone definida.
- `completed`: implementada e validada pelos critérios de aceitação.
- `rejected`: avaliada e recusada, com justificativa preservada.
- `superseded`: substituída por outra proposta explicitamente relacionada.

## Conteúdo obrigatório

Cada AP deve possuir ID único, título, status, data de criação, autor, motivação, benefícios esperados, impacto arquitetural, complexidade estimada, dependências, momento ideal para implementação, critérios de aceitação e observações.

A estrutura de máquina é escrita em inglês no YAML. O conteúdo humano pode ser escrito em português, idioma padrão do projeto.

## Fluxo oficial

`Insight → Architectural Proposal → revisão do Conselho → aprovação → milestone adequada → implementação → ADR quando aplicável → Capability ou outro artefato permanente`

1. Registrar a ideia em `proposed` antes de qualquer implementação.
2. Avaliar a proposta com o ADF e registrar a decisão do Conselho.
3. Alterar o status somente após a decisão exigida pela governança.
4. Relacionar propostas que dependam, contradigam, substituam ou complementem outras.
5. Preservar propostas rejeitadas e substituídas para manter o histórico.

## Revisão obrigatória por milestone — V1 manual

Ao concluir uma grande etapa, nenhuma nova implementação arquitetural deve começar antes da revisão de todas as APs pendentes. O resultado deve informar ao Conselho:

1. Existe alguma proposta que agora faz sentido implementar?
2. Alguma dependência foi resolvida?
3. Alguma proposta ficou obsoleta?
4. Alguma proposta pode ser fundida com outra?

Na V1, a revisão é manual e obrigatória. A automação futura produzirá recomendações e visões derivadas; mudanças canônicas continuarão sujeitas à governança.

## Identificação

Os IDs seguem provisoriamente `AP-NNNN`, com numeração crescente, imutável e sem reutilização.

Use o [template de Architectural Proposal](_templates/architectural-proposal.md) para registrar novas ideias.
