---
schema_version: "0.1.0-experimental"
id: GOV-001
kind: knowledge
knowledge_type: governance_policy
title: "Architecture Council Roles and Escalation"
status: operational
created_at: 2026-07-21
updated_at: 2026-07-23
owner: "Architecture Council"
language: pt-BR
relations:
  - type: governed_by
    target: PMM-001
  - type: constrained_by
    target: AIP-001
  - type: enacted_by
    target: ACD-001
  - type: refined_by
    target: AD-005
---

# GOV-001 — Papéis e Escalada do Conselho de Arquitetura

Os papéis abaixo são definidos por responsabilidade, autoridade e capability requerida — nunca por fornecedor, modelo ou runtime. Qualquer pessoa ou modelo compatível pode exercer um papel de execução desde que cumpra a capability e as restrições declaradas; a distribuição de autoridade entre papéis não muda com a troca de executor (ver [`EXECUTION_CONTRACT.md`](../bootstrap/EXECUTION_CONTRACT.md)).

## Raphael — Founder & Chief Vision Officer (CVO)

**Responsabilidade:** define objetivos, prioridades, filosofia, princípios e direção. Sua pergunta central é: **estamos construindo a coisa certa?**
**Autoridade:** decide mudança de visão e mudança filosófica; único ponto de autoridade sobre prioridade de produto.
**Capability requerida:** julgamento humano sobre visão, prioridade e risco de negócio — papel não delegável a um modelo.
**Restrições:** não substitui o Council em decisões que exigem revisão coletiva; decisões permanentes devem ser preservadas no Project Memory.

## Chief Systems Architect (CSA)

**Responsabilidade:** permanece acima da implementação diária; desenha e revisa arquitetura, evita overengineering, identifica padrões, simplifica sistemas, propõe abstrações e protege a visão de longo prazo.
**Autoridade:** interpreta a fonte de verdade arquitetural; não a substitui. Aprova ou devolve handoffs (IHRs) com impacto arquitetural.
**Capability requerida:** raciocínio arquitetural de longo prazo, revisão crítica de propostas e handoffs, consulta ao CVO em mudança de visão.
**Restrições:** não implementa; não aprova o próprio trabalho quando também atuar como executor de uma slice.

## Chief Execution Architect (CEA) / Executor

**Responsabilidade:** transforma arquitetura em realidade dentro de uma diretiva autorizada: implementa, organiza, automatiza, valida e documenta.
**Autoridade:** autonomia operacional dentro dos contratos aprovados (ver [`EXECUTION_CONTRACT.md`](../bootstrap/EXECUTION_CONTRACT.md)); deve acionar o ACP ao encontrar inconsistências; não aprova o próprio resultado.
**Capability requerida:** capacidade de ler o estado canônico via bootstrap (`AGENT_START_HERE.md`), operar Git conforme a Disciplina de Git, e retornar no `RETURN_SCHEMA.yaml`. Exercível hoje por qualquer modelo ou pessoa compatível com esse contrato.
**Restrições:** não inicia a etapa seguinte por iniciativa própria; escala mudanças de princípios, modelo conceitual, contratos públicos, Ontologia, governança ou visão de longo prazo.

## Relação

`CVO define onde vamos → CSA define como o sistema evolui → CEA/executor define como implementar corretamente`

Nenhum papel substitui o outro.

## Escalada

- Problema operacional: CEA/executor resolve.
- Problema estrutural: CEA/executor consulta o CSA e o Conselho.
- Mudança de visão: CSA consulta o CVO.
- Mudança filosófica: CSA e CVO decidem.

Alterações de princípios, modelo conceitual, contratos públicos, Ontologia, governança ou visão de longo prazo sempre exigem escalada.

## Responsabilidade compartilhada

Todos obedecem ao AIP. Nenhuma autoridade pessoal está acima da arquitetura e toda decisão permanente deve ser preservada no Project Memory.

## Histórico

- 2026-07-21: papéis formalizados e alinhados à ACD-001 e ao PMM-001.
- 2026-07-23: papéis reescritos como agnósticos de fornecedor/modelo (AD-005), sem alterar a distribuição de autoridade existente. Referência histórica não normativa: o papel de CSA foi exercido por ChatGPT e o de CEA/executor por Codex e, mais tarde, por Claude Code — nenhum desses nomes é normativo.
