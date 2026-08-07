---
title: "Diretiva Enxuta — Slice 1: Protocolo de Interação (MVP demonstrável)"
status: DRAFT
canonicality: directive_draft
issued_by: CSA (tradução da visão), sob autorização do CVO (Raphael) em 2026-07-23
governs_executor: CEA
profile: personal-low-risk (GOV-002)
parent_vision: knowledge/DRAFT-VISION-self-extending-capability-arms.md
created_at: 2026-07-23
language: pt-BR
---

# Diretiva — Slice 1: Protocolo de Interação (MVP demonstrável)

## Contexto (uma frase)
Primeiro passo da visão de braços auto-extensíveis: construir a **espinha** que todos os
braços vão usar — o Protocolo de Interação — e **prová-lo rodando**, não só documentá-lo.

```text
Especificar != Provar   ·   Documento != Execução   ·   Experimento != Canon
```

## Ação autorizada
Criar um experimento **`experiments/interaction-protocol/`** contendo (a) uma spec curta do
Protocolo e (b) uma **demonstração executável em texto** que mostra o protocolo conduzindo
uma elicitação de exemplo, com a árvore de perguntas, as transições de fase e o resumo
estruturado final.

## O Protocolo a implementar (desenhado pelo CSA — implemente, não redesenhe)

**Fases do loop:**
1. **Enquadrar** — 1-2 frases dizendo o que vamos fazer e quantas etapas (reduz ansiedade).
2. **Elicitar** — 1 a 3 perguntas amplas por turno. NUNCA despejar lista.
3. **Ramificar** — cada resposta seleciona o próximo conjunto de perguntas (árvore, não
   lista fixa).
4. **Aprofundar** — depois das respostas de superfície, sondar ativamente o que NÃO foi
   dito ("você falou X; e sobre Y, que costuma vir junto?") — capturar o esquecido.
5. **Brainstorm/Insight** — devolver padrões/insights vistos nos dados e discuti-los
   (provocar, não só coletar).
6. **Sintetizar** — resumo digerível + UMA próxima ação clara.
   (Otimizar é fase específica de cada braço; fica fora do protocolo base.)

**Regras de comunicação (transversais):**
- Uma coisa de cada vez; máximo 3 perguntas por turno.
- Sempre mostrar progresso ("etapa 2 de 5").
- Linguagem simples; zero jargão sem explicação.
- Todo turno termina com UMA ação/decisão clara pro usuário.
- Incentivo: reconhecer o que já foi conquistado antes de pedir o próximo.
- Resumo antes de mudar de fase.

**Estado rastreado pelo protocolo:**
`fase_atual` · `respostas_coletadas` (estruturado) · `threads_abertas` (o que falta
perguntar) · `insights_gerados` · `lacunas_detectadas` (o que o usuário pode ter esquecido).

**Contrato de saída:** um registro estruturado da sessão (YAML ou JSON) que possa virar
Memory depois (reaproveitar o formato de memória já existente, sem promovê-lo a canon).

## Demonstração exigida
Rodar o protocolo em um exemplo pequeno e neutro (ex.: elicitar um mini-processo qualquer)
e **imprimir**: a sequência ramificada de perguntas, as transições de fase, os insights
gerados, as lacunas sondadas, e o registro estruturado final. Deve rodar localmente sem
dependência externa e sem rede.

## Escopo — permitido / proibido
- **Permitido:** criar somente dentro de `experiments/interaction-protocol/`.
- **Proibido:** tocar em `foundation/`, `knowledge/` (exceto ler), ontologia, ARCH-001,
  outros experimentos, `.obsidian/`; promover qualquer contrato a canon; qualquer rede,
  integração real, autenticação; iniciar o Braço de Processos (é o próximo slice, não este).

## Orçamentos (personal-low-risk, enxuto)
- Iterações: até 5. Arquivos: até 10. Commits: 1 (mensagem: `feat: prototype interaction protocol`).
- Sem push. Reversível por `git revert`. Parar e relatar ao atingir qualquer limite.

## Como retornar
`RETURN_SCHEMA.yaml` (duas camadas). Validação real exigida: a demonstração precisa ter
sido **executada** e a saída real colada no relatório (não inventada). Terminar
interrompendo — não iniciar o slice do Braço de Processos automaticamente.

## Critério de sucesso (verificável)
Um humano roda a demonstração e vê: perguntas poucas-por-vez e ramificadas, uma fase de
aprofundamento que pergunta algo que não foi perguntado antes, pelo menos um insight
gerado, e um resumo final digerível com uma próxima ação — tudo a partir de respostas de
exemplo.
