---
schema_version: 0.1.0-experimental
id: IHR-0041
kind: knowledge
knowledge_type: implementation_handoff_report
title: Governed Role Orchestration Guard
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_experimental_only
acceptance_scope: experimental_only
review_basis: ASSESS-0003
version: "1.0"
created_at: 2026-08-07
milestone: V1-M02
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: documents
    target: GOV-003-E01
  - type: authorized_by
    target: AD-010
---

# IHR-0041: orquestração governada de papéis

## Purpose

Impedir que troca de papel declarada seja confundida com independência e criar a
base verificável para uma entrada única do CVO coordenar agentes isolados.

## Sources

Decisão literal do CVO nesta sessão, GOV-001/002, AD-006, E57/E58/E59,
Execution Contract, AP-0012 e auditoria independente da governança recente.

## Execution loop

1. A sessão CSA/CEA declarou a ausência de independência do histórico recente.
2. Um agente auditor separado encontrou conflito normativo e bypasses.
3. A primeira implementação recebeu parecer `revise` apesar da suíte positiva.
4. Os ataques reproduzidos viraram testes de regressão e o guard foi endurecido.
5. Cada correção retornou ao auditor para nova revisão adversarial.

## Decisions applied

- Multiagente isolado é a topologia futura preferida.
- Air gap manual usa a mesma cadeia verificável e sessões distintas.
- Sessão única não produz claim independente nem autoaceite.
- Router possui authority institucional zero.
- GOV-003 e GRP-001 ficam experimentais; ASSESS-0003 posteriormente os ratificou
  como candidatos não operacionais.
- Verificação de referências reais é uma porta obrigatória da integração.

## Work performed

AD-010, GOV-003 e GRP-001 formalizam os três modos e o boundary do router.
GOV-002 e o Execution Contract foram corrigidos. O experimento implementa
envelopes com digest e um guard de eventos. AP-0022 registra a evolução futura.

## Validations

- `npm test`: 23 passed, 0 failed.
- `npm run demo`: fluxo estruturalmente válido com sessões declaradas distintas,
  sem claim de isolamento técnico.
- `git diff --check`: passou; somente avisos de normalização LF/CRLF.
- O runner paralelo do Node encontrou `spawn EPERM` no sandbox Windows; a suíte
  foi executada no processo principal sem reduzir casos ou asserções.

## Findings

- blocker: none após corrigir a contradição de GOV-002 e os bypasses encontrados
  na primeira revisão adversarial.
- material histórico: AD-007/008/009 foram autorizadas sem review independente
  naquela sessão; ASSESS-0003 posteriormente fechou essa pendência.
- material: o runtime multiagente real ainda não existe.
- observation: um agente auditor separado revisou normas e código sem editar
  artifacts; seu primeiro parecer foi `revise` e originou novos testes.

## Independent review

Após três ciclos adversariais, o reviewer separado reproduziu os bypasses,
confirmou seu bloqueio e emitiu `accept` estritamente para escopo experimental.
Parecer final: 23 testes aprovados; 0 blocker, 0 material e 0 minor. Isso não
substitui a decisão do CVO/Council nem promove o guard para produção.

## Limitations

Sem autenticação, isolamento real de processo, audit log append-only, binding ao
Git/object store ou integração com adapters de agentes.

O envelope exercitado representa o handoff CSA para CEA desta slice. Outros
handoffs exigem envelopes próprios encadeados; não foram implementados.

## Files

Dezoito arquivos foram criados ou modificados nesta unidade. Os principais são
AD-010, GOV-003, GRP-001, AP-0022, o experimento, a evidência e este IHR.

## Commits

Nenhum commit criado.

## Git state

Branch `main`, HEAD inicial/final `e014c51`. Mudanças e untracked anteriores
foram preservados.

## Residual risks

- runtime mentir sobre `runtime_identity` sem identity provider;
- verifier de integração permissivo ou comprometido;
- isolamento declarado ser confundido com isolamento técnico;
- envelopes de fases futuras divergirem do primeiro contrato candidato.

## Future decisions

GOV-003/GRP-001 foram ratificados como candidatos experimentais por AD-011.
Permanece decidir se AP-0022 recebe uma slice própria de identidade, log
append-only e adapters isolados.

## Project status snapshot

```yaml
V1-M02: in_progress
IHR-0041: reviewed_experimental_only
GOV-003: experimental
GRP-001: experimental
AP-0022: proposed
runtime_multi_agent: not_started
```

## Pacote para revisão

Disposição posterior em ASSESS-0003: aceito como proteção experimental, com
AP-0022 `proposed`. O aceite não inicia runtime multiagente.

## Nota pós-revisão sobre Git

O commit posterior `7fe78f8` incluiu esta slice junto com outros artifacts e
paths locais. O conteúdo foi revisado, mas rollback por unidade não está
disponível por `git revert` simples. ASSESS-0003 registra o finding material.
