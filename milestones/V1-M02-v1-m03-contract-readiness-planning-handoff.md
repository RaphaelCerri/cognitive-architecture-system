---
schema_version: "0.1.0-experimental"
id: IHR-0042
kind: knowledge
knowledge_type: implementation_handoff_report
title: "V1-M03 Knowledge Object Contract Readiness Planning"
status: reviewed
version: "1.0"
created_at: 2026-08-07
reviewed_at: 2026-08-07
review_outcome: accepted_as_v1m03_planning_readiness_only
acceptance_scope: planning_readiness_only
review_basis: ASSESS-0004
milestone: V1-M02
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: plans
    target: V1-M03
  - type: documents
    target: ARP-0010-E04
  - type: authorized_by
    target: AD-012
  - type: governed_by
    target: IHP-001
  - type: reviewed_by
    target: ASSESS-0004
---

# IHR-0042: planejamento de readiness dos contratos V1-M03

## 1. Contexto

Converter IHR-0040 em um plano governado e testável da V1-M03, sem transformar
o envelope candidato em schema ou alegar Core Types confirmados. Fontes: AD-012,
Roadmap V1, AP-0003/0006, ARP-0010-E01..E03, ASSESS-0002/0003,
ADR-0001/0005/0007/0013, IHR-0038..0040 e revisão CSA independente.

## 2. O que foi executado

1. Reconstruiu o boundary entre formato canônico e taxonomia experimental.
2. Separou fonte, envelope, profiles, semântica e views derivadas.
3. Definiu quatro profiles candidatos composicionais.
4. Criou oito gates e compatibilidade strict/tolerant.
5. Transformou gaps de readiness em evaluator e seis testes.
6. Criou AD-012, V1-M03 em planning e ARP-0010-E04.

## 3. Arquivos afetados

Dezoito arquivos foram criados ou modificados nesta unidade: diretiva,
milestone, evidência, três arquivos executáveis, IHR, package, roadmap, dois APs,
ARP-0010, assessment, matriz de experimentos, índices, PROJECT_STATUS e feature log.

## 4. Validação realizada

- `npm test`: 27 passed, 0 failed.
- `npm run plan:v1m03`: planning ready, stabilization blocked, sete gaps.
- `git diff --check`: passou; somente avisos de normalização LF/CRLF.
- Não executados: parser YAML novo, teste humano, migration dry-run, schema,
  Compiler, Runtime e ADF contratual, porque pertencem a slices futuras.

## 5. Plano versus execução

O plano autorizado foi cumprido sem estabilizar schema. A primeira revisão
independente devolveu `revise`: o IHR não seguia os 12 títulos literais do IHP,
o milestone usava um label novo e AD-012 acionava alias legado. Os três pontos
foram corrigidos. Nenhum desvio de escopo substantivo ocorreu.

## 6. Decisões tomadas pelo CEA

- Planejamento inicia; estabilização permanece bloqueada.
- Markdown+YAML completo continua Source of Truth.
- Profiles candidatos não são Core Types.
- Validação estrutural não concede authority nem validade semântica.
- Cobertura bruta do repositório não é gate.
- `ontology_boundary_confirmed` confirma apenas o boundary experimental; G7 é
  um ADF contratual posterior e independente.
- Type Registry e Compiler permanecem fora de escopo.

## 7. Estado da documentação

Roadmap V1 agora distingue planejamento autorizado de implementação não iniciada.
ARP-0010 registra E04; AP-0003/0006 somente recebem relação informativa. O
milestone V1-M03 usa `milestone_record` e AD-012 usa `architecture_directive`,
sem criar labels ou aliases novos.

## 8. Backlog e propostas

AP-0003 permanece `proposed`; AP-0006 permanece `scheduled/remain_experimental`.
A próxima candidata é um experimento de contrato com parser YAML real e corpus
classificado. Teste humano e authority normalization continuam gates explícitos.

## 9. Riscos e pontos de atenção

- profiles candidatos virarem taxonomia por repetição;
- dependência circular entre schema e AP-0003;
- `schema_version` misturar versão do artifact e do contrato;
- perda de comments/unknown fields em futuro round-trip;
- compatibilidade estrutural ser confundida com correção semântica;
- quatro profiles ainda não possuem owner nem evidência humana.

## 10. Questões para o Conselho

Após revisão deste planejamento, autorizar ou não um experimento de contrato com
parser YAML real e corpus classificado. Decidir também se o teste humano será
uma slice própria ou gate do mesmo experimento. Nenhuma resposta é inferida aqui.

## 11. Próxima ação recomendada

Aceitar somente o plano/readiness gate. Em decisão posterior, autorizar o
experimento de contrato; não iniciar schema, registry ou migração.

## 12. Evidências

AD-012, V1-M03, ARP-0010-E04, evaluator e seis testes novos; suíte total 27/27;
demo com `planning_status: ready`, `stabilization_status: blocked` e sete gaps;
`git diff --check` aprovado. Branch `main`, HEAD `7fe78f8`, nenhum commit criado.
O finding de escopo do commit-base permanece registrado em ASSESS-0003.

## Pacote para revisão do CSA

Disposição independente: `accepted_as_v1m03_planning_readiness_only`. Isso não
aceita schema, profiles canônicos, promoção de AP-0006, implementação ou
fechamento de V1-M03.
