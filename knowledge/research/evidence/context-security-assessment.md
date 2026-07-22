---
schema_version: "0.1.0-experimental"
document_role: security_assessment
title: "Context Retrieval Security Assessment"
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0001, ARP-0006, ARP-0007]
language: pt-BR
---

# Context Retrieval Security Assessment

ARP-0007 permanece `scoped`; este documento aplica seus critérios somente à onda autorizada. Fontes primárias: OWASP Top 10 for LLM Applications v2.0/2025 e NIST AI 600-1, acessadas em 2026-07-22.

## Trust boundaries e ameaças

| Fronteira | Ameaça | Controle arquitetural candidato | Evidência futura |
|---|---|---|---|
| documento externo → índice | indirect prompt injection, RAG poisoning | origem/trust label, sanitização, quarentena, conteúdo como dado | corpus adversarial |
| documento canônico → grafo | parser bug, relação inferida falsa, staleness | aresta `explicit/inferred`, hash, timestamp, rebuild, reopen | consistency tests |
| consulta → ranking | retrieval manipulation, authority bypass | policy filter antes de relevance, allowlist por escopo | authority recall |
| contexto → runtime | context confusion, instruction collision | separação de canais, delimitadores, provenance, least context | injection success rate |
| runtime → ferramenta | excessive agency, exfiltration | least privilege, approvals, budget, sandbox, output validation | adversarial tool tests |
| cache/memória → futuro | memory poisoning, dado sensível persistente | TTL, classificação, write gate, lineage, exclusão | retention/deletion tests |
| dependência externa | supply-chain compromise | pin, license/SBOM review, signatures quando disponíveis | provenance record |

## Requisitos mínimos antes de protótipo

1. Fonte canônica e derivada distinguíveis por máquina e pessoa.
2. Autoridade filtrada antes de similaridade; negação por padrão para dados restritos.
3. Toda seleção explica origem, trecho, motivo e transformações.
4. Índice removível/reconstruível; nunca aceita escrita de volta sem gate canônico.
5. Conteúdo recuperado não pode conceder ferramentas, mudar políticas ou autoaprovar exceções.
6. Limites de tokens, documentos, profundidade de traversal, tempo e chamadas.
7. Testes de prompt injection direto/indireto, poisoning, exfiltração, confused deputy e falha fechada.

## Risco residual

OWASP registra que RAG/fine-tuning não eliminam prompt injection. Portanto, relevância alta não implica confiança. NIST AI 600-1 sustenta gestão de risco ao longo do ciclo de vida; controles precisam de owner, medição e resposta, não apenas prompt. A opção híbrida reduz exposição, mas permanece sujeita a documentos canônicos comprometidos e a erros de classificação.

## Fontes

- https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf
- https://owasp.org/www-project-top-10-for-large-language-model-applications/2_0_vulns/LLM06_ExcessiveAgency.html
- https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence

## Catálogo explícito de ameaças

A avaliação considera prompt injection, indirect prompt injection, context poisoning, graph poisoning, relation poisoning, metadata poisoning, embedding poisoning, RAG poisoning, cache poisoning, poisoned summaries, exfiltração, segredos, PII, perda de proveniência, fontes não confiáveis, omissão de contexto crítico e derivados tratados como canônicos. Estes são threat cases, não incidentes observados.

## Guardrails candidatos

- trust tiers e allowlists por fonte, autoridade e escopo;
- separação inequívoca entre instrução e dado;
- limites de profundidade, expansão, documentos, tempo e orçamento de tokens;
- Authority Resolver e governing documents obrigatórios;
- detecção de conflitos e reabertura da fonte canônica;
- proveniência por trecho e transformação;
- comportamento fail-closed diante de contexto crítico ausente ou autoridade ambígua;
- filtros de segredos, PII e outros dados sensíveis.
