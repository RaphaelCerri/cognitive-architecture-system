---
schema_version: 0.1.0-experimental
id: ARP-0009-E76
kind: knowledge
knowledge_type: research_evidence
title: Audit/Event Artifact — Design Candidate (Option D audit side)
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E58
  - type: refines
    target: ARP-0009-E60
---

# Audit/Event Artifact — desenho candidato (lado audit da Opção D)

Fecha (documentalmente) G-A06: a Opção D aprovada em IHR-0031 deixou o lado
audit como gap explícito. Este desenho NÃO implementa nada.

```text
Audit trail != Event log != Project Memory != Evidence   (E58 §5)
```

## 1. Forma candidata

Um arquivo **append-only** por projeto, separado da Memory, NDJSON (uma linha
por entrada — legível, diffável, greppável, e à prova de "YAML crescente"):

`<project>/audit/audit-log.ndjson`

```json
{"seq":41,"at":"<tick|iso>","actor":{"label":"…","role":"…","session":"…"},
 "role_at_time":"…","authority_basis":"…","kind":"command|decision|event|apply",
 "ref":"<command/event/proposal id>","scope":"…","reason":"…",
 "provenance":["…"],"prev_hash":"<sha256 da linha anterior>","hash":"<sha256 desta linha sem o campo hash>"}
```

- `prev_hash`/`hash` formam **hash chain** simples: adulterar uma linha quebra
  a cadeia dali em diante — integridade verificável sem criptografia de chave
  (assinatura real fica para quando houver identidade técnica; E56 §6);
- o event log de domínio (`HistoryEntry`) continua existindo no runtime; o
  audit artifact é o registro durável com o que o runtime não tem:
  `role_at_time`, `authority_basis`, `delegation_chain` (quando existir);
- a Memory referencia o audit (`provenance_refs`), nunca o contém (limites de
  conteúdo E60 §content boundaries).

## 2. O que entra / o que não entra

Entra: comandos sensíveis, decisões (authorize/deny/review/apply), eventos de
transição relevantes, aplicações de proposal (E75 §1.6), incidentes. Não
entra: conteúdo de artifacts, texto longo, dados pessoais além do label do
ator, chain-of-thought, estado de UI.

## 3. Verificação candidata

`verify-audit`: percorre o arquivo, reconfere a hash chain e o seq monotônico;
qualquer quebra = finding, nunca autocorreção. Retenção: o arquivo segue o
projeto (arquivamento junto; deleção do projeto = decisão explícita com o
audit como último item apagado).

## 4. Limitações declaradas

Hash chain local não protege contra reescrita total por quem controla o disco
(proteção real = backup externo + Git remoto — G-A07); relógio local não é
confiável (usar tick lógico + data civil "best effort", nunca como prova);
multiusuário/concorrência ficam para Team Mode.

## 5. Caminho de implementação (não autorizado)

Slice candidata: implementar writer/verifier no experimento do adapter
(≤6 arquivos), acoplado ao ciclo do E75. Prereq: aceite deste desenho.
Stopping: qualquer tentação de pôr o audit DENTRO da Memory interrompe.
