---
schema_version: 0.1.0-experimental
id: ARP-0009-E41
kind: knowledge
knowledge_type: research_evidence
title: C-lite Renderer Validation Report
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: evaluates
    target: ARP-0009-E30
  - type: refines
    target: ARP-0009-E39
---

# C-lite Renderer Validation Report

## Natureza e limites

**[Decisão]** Validação interna do renderer candidato para o protótipo C-lite `1.0`, autorizada pelo Chief após o checkpoint `d3c8d4397dc36d9022b8c85d47ed4c379752363b`. Esta validação é documental e técnica, executada por agente interno sem participantes, sem sessão operada por humano e sem tecnologia assistiva.

```text
Internal renderer validation != G-04 launch-gate closure
Documentary/technical check != empirical accessibility evidence
Suitable for internal walkthrough != approved for participant sessions
```

Esta validação **não fecha o gate G-04** de E40: o gate exige evidência empírica de keyboard/focus/zoom/reflow/AT em dispositivo controlado dedicado, que permanece pendente para qualquer avaliação com participantes.

## Renderer environment

| Campo | Valor registrado |
|---|---|
| Renderer | VS Code built-in Markdown Preview |
| VS Code version | 1.129.1 (commit `8a7abeba6e03ea3af87bfbce9a1b7e48fed567b8`, x64) |
| OS | Windows 11 Pro build 10.0.26200 |
| Extensões instaladas para esta validação | nenhuma |
| Dispositivo | máquina de desenvolvimento do operador, não dispositivo controlado dedicado |
| Rede | nenhum acesso externo exigido pelo documento |

**Limitação de ambiente:** a máquina possui extensões VS Code pré-existentes de uso geral (não instaladas para esta tarefa). Nenhuma foi adicionada, removida ou configurada; ainda assim, o ambiente não equivale ao "controlled device" exigido por E39/E40 para sessões com participantes.

## Prototype identity

Versão validada: protótipo `1.0`, no commit `d3c8d4397dc36d9022b8c85d47ed4c379752363b`.

| Arquivo | SHA-256 |
|---|---|
| clite-scenario-content-pack.md (E29) | `9E129D1A2ADDCDF528D11F66346EA2849F10D7F606E3FCFFB400E834D7CC25D8` |
| clite-structured-interactive-prototype.md (E30) | `C0B4EE19B2DCB7FFD9D544E494842C2F16EB152AD537F68BEE746DEBB08B0BEE` |
| clite-prototype-annotation-pack.md (E31) | `2A5C753309A6D04312F918FF8D437A2E05EE2188379256ED6597AA80C4D5A204` |

Nenhum dos três arquivos foi modificado nesta slice; os hashes servem de identidade candidata para um futuro freeze G-03.

## Technical validation results

Verificação automatizada do documento E30 (script determinístico, sem dependências externas):

| Verificação | Resultado |
|---|---|
| Headings | 39 headings, hierarquia H1→H3 consistente |
| Links internos | 65 |
| Âncoras quebradas | 0 |
| Slugs duplicados | 0 |
| URLs externas / requisições externas | 0 — o documento não referencia nenhum recurso externo |
| Variantes SV alcançáveis por link | 24 de 24 |
| Variantes sem link de saída (dead ends) | 0 |
| Reinício determinístico | seção `Prototype reset` alcançável de SV-21/SV-23/SV-24; retorno reproduz estado inicial idêntico |
| Alterações no repositório causadas pela renderização | nenhuma — preview é somente leitura |
| Ordem de leitura | linear e lógica: reset → contexto → SF-01…SF-08 → inventário → coverage → exclusões → boundary |
| Distinção de estados | cada variante declara estado textual próprio; nenhuma dependência de cor ou motion |

## Capability assessment (documentary)

| Capacidade | Avaliação | Base |
|---|---|---|
| Navegação por âncora | funciona no preview nativo | comportamento documentado do VS Code; 0 âncoras quebradas |
| Headings/estrutura semântica | renderizados como hierarquia HTML | comportamento documentado |
| Zoom | zoom global do VS Code (Ctrl +/-) aplica-se ao preview; conteúdo reflui | comportamento documentado; **não testado empiricamente com usuário** |
| Reflow | conteúdo Markdown linear reflui em larguras estreitas; tabelas largas podem exigir scroll horizontal | inspeção do documento; tabelas existem em SV-09 e seções de inventário |
| Keyboard / visible focus | preview é um webview; links são focáveis, mas visibilidade de foco e travessia completa por teclado **não são comprovadas** | limitação conhecida registrada em E39; requer teste empírico |
| Assistive technology | não testado; fora do escopo autorizado | E39/E40 gates permanecem abertos |
| Segurança do preview | política padrão do preview restringe scripts e conteúdo externo; documento não contém script, HTML embutido ou recurso remoto | inspeção integral do conteúdo |
| Telemetria | telemetria do VS Code é do editor, não do documento; nenhum dado do protótipo é transmitido pelo conteúdo | inspeção do conteúdo |

## Resultado

**Suitable with limitations.**

O renderer candidato é adequado para o walkthrough interno e para revisões assistidas desta slice: navegação íntegra, estrutura semântica preservada, reinício determinístico, nenhum recurso externo e nenhuma modificação do repositório.

Limitações que impedem resultado `suitable` pleno:

1. keyboard/visible focus/zoom/reflow avaliados documentalmente, não empiricamente;
2. compatibilidade com tecnologia assistiva não testada (não autorizada nesta slice);
3. ambiente de validação não é o dispositivo controlado dedicado exigido para sessões;
4. tabelas largas podem quebrar reflow em larguras muito estreitas — comportamento não medido;
5. versão exata validada (1.129.1) precisará ser re-fixada no momento de um futuro launch.

Nenhuma condição `unsuitable` foi encontrada; a alternativa estática local não precisou ser avaliada.

## Consequências

- O walkthrough interno (E42) pode usar este renderer com validade interna.
- G-04 permanece **aberto** para qualquer avaliação com participantes.
- Este relatório não constitui claim de acessibilidade, usabilidade ou segurança.
