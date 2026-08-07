---
schema_version: "0.1.0-experimental"
id: AD-011
kind: knowledge
knowledge_type: architectural_directive
title: "Pending Review Debt Resolution"
status: operational
created_at: 2026-08-07
owner: "Raphael Caveagna, Founder & CVO"
language: pt-BR
relations:
  - type: authorizes
    target: ASSESS-0003
  - type: ratifies_experimentally
    target: GOV-003
  - type: ratifies_experimentally
    target: GRP-001
  - type: closes
    target: AD-006
---

# AD-011: resolução da dívida de revisão

## Decisão do CVO

Em 2026-08-07, o CVO determinou: “resolve o que está em pending review”. A
ordem autoriza inventário, revisão independente, reconciliação de decisões já
existentes e correção de blockers documentais. Ela não significa aceite cego.

## Resultado autorizado

- IHR-0002 a IHR-0034: reconciliar como `reviewed` nos escopos experimentais
  registrados, usando decisões históricas e revisão independente.
- IHR-0035: revisar somente após corrigir integridade do registro.
- IHR-0036 a IHR-0041: decidir separadamente conforme evidência atual.
- As 29 evidências legadas: aceitar apenas como evidência experimental, sem
  promoção ontológica ou claim de atualidade permanente.
- GOV-003 e GRP-001: ratificar como candidatos experimentais, não operacionais.
- AD-006: encerrar; troca lógica de papel passa a seguir GOV-003/GRP-001.

## Condições

1. Cada disposição deve estar registrada em ASSESS-0003.
2. Limitações originais permanecem vinculantes.
3. Aceite de pesquisa não canoniza tecnologia, taxonomia, schema ou Ontologia.
4. IHR-0040 não inicia V1-M03.
5. IHR-0041 não autoriza runtime multiagente de produção.
6. O commit omnibus `7fe78f8` permanece intacto e recebe finding material de
   rollback/proveniência; esta diretiva não autoriza reescrever Git.

## Encerramento de AD-006

O escopo temporário de AD-006 está encerrado. Reviews produzidos por papel
acumulado continuam identificados como não independentes; ASSESS-0003 não os
reescreve, apenas registra a revisão independente atual.
