---
schema_version: 0.1.0-experimental
id: ARP-0009-E68
kind: knowledge
knowledge_type: research_evidence
title: C-lite Minimal Study — Browser/Stimulus Validation Report
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E64
  - type: related_to
    target: ARP-0009-E49
---

# C-lite Minimal Study — Validação Técnica do Estímulo

Preflight **reproduzível e executado** (parte técnica) + checklist do que
exige operador humano (parte empírica, **pendente**). A validação técnica não
substitui verificação com tecnologia assistiva, teste de usabilidade nem user
evidence.

## 1. Identificação do estímulo

| Item | Valor |
|---|---|
| Estímulo | `experiments/clite-stage3-vertical-slice/` |
| Último commit que tocou o estímulo | `4c80585` ("test: verify c-lite governed flow") — candidato ao freeze na autorização G-17 |
| HEAD do repositório na validação | `ebc2d6b375cb70c787cb4c57c90c760d211efdea` |
| Launch method | `index.html` via `file://` local; snapshot resetado antes de cada sessão (reset determinístico testado) |
| Dados | 100% sintéticos (fixture Oficina Horizonte); scan de dados pessoais nos testes |

## 2. Checks técnicos — EXECUTADOS nesta validação (comandos reais)

| Check | Comando | Resultado |
|---|---|---|
| Typecheck | `npm run typecheck` | ✅ verde |
| Build | `npm run build` | ✅ `dist/app.js` 76.770 bytes |
| Testes | `npm test` | ✅ **43/43** |
| Zero network no bundle | scan de `fetch`/URLs no `dist/app.js` | ✅ nenhum |
| CSP | `connect-src 'none'` no `index.html` | ✅ presente |
| Idioma | `lang="pt-BR"` | ✅ presente |
| Seis views | suíte estrutural existente | ✅ (coberto pelos 43) |
| Recovery path / retry / requested input / Memory return | testes de máquina existentes | ✅ (coberto pelos 43) |
| Sem mutação inesperada do repositório | `git status` pós-validação | ✅ tracked worktree limpo (build regrava somente `dist/`, ignorado) |

## 3. Ambiente de sessão — candidato

| Item | Candidato | Estado |
|---|---|---|
| Browser | Chrome (mesma família usada em E49 — Chrome 150 na máquina de referência) | **versão exata a congelar no dia da validação empírica** |
| OS | Windows 11 Pro (build de referência 26200) | idem |
| Viewport | ≥1366×768, janela maximizada | candidato |
| Zoom inicial | 100% (ajustável por acomodação até 400%) | candidato |
| Rede | irrelevante por design (CSP bloqueia; `file://`) | ✅ |

## 4. Checklist empírico — PENDENTE (exige operador humano; não inventado)

Executar na máquina exata da sessão, antes da primeira sessão (≈30 min), e
registrar por item `passed | failed | limited`:

- [ ] abrir via `file://` e resetar o snapshot; confirmar estado inicial;
- [ ] percorrer o caminho MT-1→MT-8 completo com **mouse**;
- [ ] percorrer o caminho crítico completo **somente por teclado** (Tab/Enter/
      setas), com foco visível em cada passo (HV aberta em E49);
- [ ] zoom 200% e 400%: tarefas realizáveis sem perda de conteúdo (HV aberta);
- [ ] recarregar a página no meio do ciclo: retomada + aviso de contexto
      desatualizado aparecem; `RefreshView` desbloqueia ações sensíveis;
- [ ] simular indisponibilidade de rede (desligar Wi-Fi): comportamento
      idêntico;
- [ ] DevTools aba Network durante um ciclo: **zero requests** externos;
- [ ] verificar que nenhum dado real aparece em nenhuma view;
- [ ] leitor de tela (Narrator): **fora do escopo desta validação** — permanece
      HV-01–07/CM-0001; participante que dependa de AT não verificada não faz
      sessão (E67 §3.4).

## 5. Boundary

```text
Technical Validation (este documento, executado)
!= Empirical Environment Check (checklist acima, pendente)
!= Accessibility Verification with AT (HV-01–07, caminho separado)
!= User Evidence (as sessões em si)
```
