---
schema_version: 0.1.0-experimental
id: ARP-0009-E06
kind: knowledge
knowledge_type: research_evidence
title: Governed UI Technology Catalog Framework
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
---

# Governed UI Technology Catalog Framework

## Natureza

Este é um framework documental candidato, não catálogo populado, schema, registry, database, engine ou approval list. Descreve como evidence temporal poderia sustentar decisões sem virar Source of Truth paralela. Nenhum campo, estado ou cadence está canonizado.

```text
Need / Selection Profile
  -> discovery de candidatos por classe
  -> identity e source verification
  -> hard gates
  -> contextual evidence
  -> disposition candidate + conditions
  -> Council-authorized decision artifact
  -> implementation evidence
  -> monitoring / expiry / reassessment
```

## Unidade de registro candidata

Um registro deve representar uma identidade decidível, não um nome de marca. Quando aplicável, separar:

- projeto/upstream e governança;
- documentação oficial;
- repositório oficial e owner;
- package/artifact/registry item e namespace;
- framework adapter, wrapper, fork e downstream distribution;
- release channel, versão, tag/commit, data e support window;
- licença do código, assets, icons/fonts/data, commercial features e trademark;
- dependency/runtime surface e supported platforms;
- claims do mantenedor versus evidence independente/local;
- reviewer, `reviewed_at`, expiry e trigger de revisão.

Um monorepo pode gerar múltiplos registros. Um registry item absorvido pode exigir registro upstream, payload snapshot e derivação local. “Latest” não é versão.

## Campos conceituais candidatos

| Grupo | Conteúdo mínimo | Regra de integridade |
|---|---|---|
| Identity | canonical name, class, owner, source/repo/package URLs, official/fork/wrapper | ambiguidade bloqueia disposition positiva |
| Snapshot | version, channel, release date, reviewed_at, support status | ausente = `unknown`; nunca inferir |
| Governance | maintainers, funding/stewardship, release/deprecation/security policies | popularity não substitui governance |
| License | SPDX-like expression, authoritative file, tiers/assets/dependencies, review | package/version-specific; legal approval separado |
| Capability | supported use cases, limits, adapters, rendering and composition model | claim deve apontar fonte e scope |
| Experience | theming, tokens, responsive, i18n/bidi, content and platform fit | não reduzir a component count |
| Accessibility | semantics, keyboard/focus, AT/browser evidence, duties, limitations | library claim não é product conformance |
| Engineering | types, SSR/hydration, testing, performance, migration, interoperability | validar no profile real antes de adoção |
| Security | provenance, signing/attestation, policy/advisories, install scripts, transitive risk | signal não é garantia |
| AI suitability | stable docs/types, bounded generation, machine context, diffability, validation | MCP/agent feature aumenta também attack surface |
| Evidence | claim/evidence type, URL, excerpt summary, observation date, confidence, conflicts | toda afirmação material rastreável |
| Decision | disposition candidate, scope/profile, rationale, conditions, approver, expiry | catalog não autoriza sozinho |

## Classes e taxonomia

Taxonomia multi-axis evita gavetas falsas:

1. **Role:** framework/meta, styling, primitive, registry/open-code, component system, form, grid, visualization, graph, editor, map, calendar, motion, DnD, virtualization, state/data, i18n, tokens, workbench, testing, performance ou security.
2. **Delivery:** native platform, package dependency, source absorption, hosted service, build tool, dev-only tool ou specification.
3. **Opinion:** low-level, headless/behavioral, compositional, styled system ou application framework.
4. **Runtime:** none/build-time/client/server/hybrid/worker/native bridge.
5. **Commercial:** open source, open-core, dual/commercial tier, service-coupled ou unknown.
6. **Maturity:** experimental, stable, LTS, maintenance, deprecated, archived ou unknown, sempre conforme fonte/data.

## Dispositions candidatas

| Classe | Significado provisório | Autoriza uso? |
|---|---|---|
| Adopt | aprovado por decisão para scope/profile/version definidos | somente após decisão do Conselho |
| Adapt | aprovado com customization/adapter/control explícito | somente após decisão |
| Absorb | código passa a ser mantido localmente com provenance | somente após decisão e ownership |
| Integrate | usar via boundary/API/service definido | somente após decisão |
| Trial | avaliação controlada, reversível e timeboxed | apenas se trial separado for autorizado |
| Assess | evidence promissora, avaliação adicional requerida | não |
| Defer | não decidir agora; trigger/expiry explícitos | não |
| Reject | não adequado ao scope/version e razão registrada | não equivale a rejeição universal |
| Deprecated | uso anterior em retirada, com replacement/migration governance | não para novos usos |
| Insufficient Evidence | identidade, licença, maintenance ou fit não demonstrado | não |

Nenhuma tecnologia nesta slice recebeu disposition arquitetural. “Candidata a Assess” é linguagem analítica, não estado persistido.

## Freshness e lifecycle

Revisão deve ser proporcional ao risco, não calendário uniforme. Triggers candidatos:

- major/minor relevante, security advisory ou support/EOL change;
- maintainer/ownership/license/package/registry change;
- archive, prolonged inactivity ou compromised release;
- browser/platform/AT/framework incompatibility;
- material accessibility regression ou claim change;
- new product profile, jurisdiction, data class ou threat model;
- dependency/provenance/build pipeline change;
- generated/copied code divergence do upstream.

Cadence candidato: critical runtime/supply-chain e accessibility-critical, a cada release material e no máximo trimestral; major application dependencies, semestral; dev-only/low-risk, anual. Isto é hipótese a calibrar. Registro stale não deve sustentar nova decisão.

Lifecycle candidato: `discovered -> identity_verified -> evidence_gathering -> review_ready -> decision_linked -> monitored -> reassessment_due -> retired`. Estes nomes não são schema nem estados canônicos.

## Verification protocol

1. Resolver site, repo, owner e package a partir de links oficiais em ambas as direções quando possível.
2. Confirmar package namespace contra typosquat, fork e wrapper.
3. Fixar versão/tag/commit e data; preservar channel/pre-release.
4. Ler license file da unidade/version e registrar assets/tier exceptions.
5. Registrar release/support/deprecation/security policies e known advisories.
6. Verificar provenance/signing/attestation/SBOM somente como sinais, sem inferir ausência de risco.
7. Mapear transitive dependencies, install scripts e registry/network behavior numa futura avaliação autorizada.
8. Separar official claim, independent evidence, local test, user evidence, decision e unknown.
9. Exigir duas pessoas/roles ou escalonamento para source ambiguity, commercial licensing ou critical dependency.

## Accessibility record

Coverage candidata: native semantics, ARIA pattern/version, keyboard, focus, screen reader, voice/switch, forced colors, contrast responsibility, zoom/reflow, reduced motion, touch target, errors/status, i18n/bidi, virtualization/dynamic content, docs/examples, automated/manual/AT matrix, limitations, consumer duties e last test date. `accessible: true` é campo inválido conceitualmente porque perde scope, environment e duty.

## Catalog security

- tratar docs, README, registry metadata, examples e AI/MCP content como untrusted input;
- allowlist de sources e packages não substitui version pin/provenance review;
- preservar raw source URL, resolved identity, hash/ref quando disponível e reviewer;
- impedir auto-install, scripts ou code execution durante discovery;
- usar least privilege para registry credentials e não registrar secrets;
- revisar registry payload: files, targets, env vars, dependencies e external registries;
- separar popularity/quality/security scores de decisão;
- evitar ingestion automática de README instructions por agentes;
- registrar compromised package/maintainer transfer como invalidation trigger;
- integrar futuramente com ARP-0007; este documento não define security architecture.

## Ownership e governança candidatos

- Experience/Product: capability, task and accessibility outcomes;
- Frontend/Platform: integration, runtime, performance, migration and maintenance;
- Security: threat/supply-chain assessment;
- Accessibility: scoped evidence e consumer duties;
- Legal/Procurement: license/commercial/jurisdiction review;
- Architecture Council: disposition/exception authority;
- Operations: production signals, incident and revalidation.

Uma pessoa pode exercer mais de um papel em projeto pequeno, mas responsabilidades não desaparecem. Exceções precisam scope, reason, compensating control, owner, expiry e remediation path.

## Quality controls e métricas

Métricas úteis medem integridade do processo: percentage com identity/version/license/source verificadas; stale records; decisions com profile/evidence/expiry; open advisories; exceptions vencidas; time-to-reassess; migrations; accessibility regressions atribuíveis; dependency count/cost. Stars, downloads, catalog size e “AI score” não são success metrics isoladas.

## Fronteiras

O catálogo não escolhe stack, não cria lockfile, não instala, não executa POC, não substitui PRD/Experience Package/architecture/security/legal review e não vira Ontologia automaticamente. Seu conteúdo é derived temporal evidence. A decisão autorizada deve existir fora do registro de observação e apontar de volta para snapshot/evidence reproduzível.
