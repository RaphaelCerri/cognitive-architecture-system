---
schema_version: 0.1.0-experimental
id: ARP-0009-E65
kind: knowledge
knowledge_type: research_evidence
title: C-lite Minimal Study — Participant Screener and Informed Consent (Candidate)
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E63
  - type: related_to
    target: ARP-0009-E34
---

# C-lite Minimal Study — Screener e Consentimento (candidatos)

Instrumentos **candidatos, não enviados e não autorizados**. Fecham
documentalmente os itens 3 e 4 do pacote mínimo (E64 §2). Nenhuma pessoa foi
contatada. A versão final entregue a participantes exige aceite do Chief/
Council (gate de consentimento) e formatação acessível.

## 1. Participant Screener (candidato — nunca divulgado ainda)

> **Convite à triagem — pesquisa interna de protótipo (não é teste de
> produto).** Responder leva ~3 minutos. Suas respostas servem somente para
> verificar compatibilidade com o estudo e serão apagadas conforme a política
> de retenção informada ao final.

| # | Pergunta | Uso | Exclusão se |
|---|---|---|---|
| S-01 | Você tem 18 anos ou mais? | elegibilidade legal | não |
| S-02 | Você lê e conversa confortavelmente em português? | idioma da sessão | não |
| S-03 | Você consegue participar de uma sessão de até 60 minutos, com pausas se precisar? | disponibilidade | não |
| S-04 | Qual opção descreve melhor sua experiência? (a) trabalho com software/produto/IA/automação/arquitetura; (b) crio, gerencio, coordeno ou contrato projetos, sem trabalhar diretamente com software; (c) nenhuma das duas | cohort A / cohort B / inelegível | (c) |
| S-05 | Você participou da criação deste projeto de pesquisa ou conhece seus documentos internos? | conflito/contaminação | sim |
| S-06 | Você tem relação de subordinação direta com quem conduz o estudo? | coerção | sim (registrar categoria, sem detalhe) |
| S-07 | Você precisa de alguma acomodação para participar (ex.: zoom, teclado, pausas, tempo extra, outro formato)? — resposta voluntária | preparo de acomodação | nunca exclui; barreira de meio é blocker do estudo |
| S-08 | Podemos usar seu contato somente para agendar esta sessão? | consentimento de contato | não |

Campos administrativos: código temporário (`CAND-xx`), cohort resultante,
resultado (elegível/inelegível+categoria/lista de espera). **Não coletar:**
CPF/documentos, diagnóstico, empregador, histórico profissional detalhado,
dados sensíveis. Contato fica no repositório de contato (E66), nunca junto das
notas.

## 2. Participant Information + Informed Consent (candidato)

> ### Sobre este estudo
> Estamos avaliando **a representação de um protótipo de pesquisa** — não
> avaliamos você, e este não é um teste de produto, uma certificação nem uma
> validação comercial. É pesquisa interna formativa.
>
> **O sistema é simulado.** Nenhuma pesquisa real acontece, nenhuma
> inteligência artificial real executa nada, nenhum dado verdadeiro é usado e
> nenhum controle de acesso real existe. Tudo o que você verá é uma
> demonstração local no navegador.
>
> ### O que você fará
> Até **60 minutos**, com pausas quando quiser: realizar pequenas tarefas no
> protótipo (enviar uma ideia fictícia, revisar um plano, decidir uma
> aprovação simulada, reagir a uma falha simulada, revisar um resultado) e
> conversar sobre o que entendeu. Não existem respostas certas ou erradas.
>
> ### O que registramos — e o que não registramos
> **Não gravamos áudio, vídeo nem tela.** Duas pessoas estarão presentes: uma
> conduz; outra faz anotações estruturadas. Registramos: um código (nunca seu
> nome), seu grupo de perfil, as tarefas realizadas, observações do que
> aconteceu e paráfrases do que você disse. Uma citação curta e
> **parafraseada** só será usada se você autorizar abaixo. Seu nome e contato
> ficam em local separado das anotações e nunca aparecem em documentos do
> projeto.
>
> ### Seus direitos
> Participação **voluntária**. Você pode pular qualquer tarefa, pausar, ou
> **desistir a qualquer momento sem justificar — recebendo a compensação
> combinada mesmo assim**. Pode pedir a exclusão dos seus dados até o marco de
> retirada informado abaixo; depois da anonimização em sínteses agregadas, a
> remoção completa pode não ser possível — isto não é uma promessa de
> anonimato absoluto.
>
> ### Riscos e limitações
> Riscos previsíveis: cansaço, eventual confusão com termos do protótipo e os
> riscos ordinários de privacidade de qualquer registro escrito — mitigados
> pela ausência de gravação e pela pseudonimização. Este estudo **não** emite
> garantia de segurança nem de acessibilidade do sistema.
>
> ### Dados, guarda e prazo
> Anotações pseudonimizadas: apagadas até 90 dias após a decisão sobre a
> síntese (máximo absoluto de 180 dias da coleta). Contato e agendamento:
> apagados até 30 dias após a conclusão ou cancelamento. Registro do seu
> consentimento: mantido pelo período informado na sessão. Local de guarda:
> [armazenamento aprovado — E66], acesso restrito às duas pessoas do estudo.
>
> ### Compensação
> [valor/forma aprovados — E66], devida pela participação, **independente** de
> opinião positiva ou de completar todas as tarefas.
>
> ### Contato
> [contato do estudo] · [contato de acomodações]
>
> ### Autorizações
> ( ) Li e aceito participar nas condições acima.
> ( ) Autorizo o uso de citações curtas parafraseadas e sem identificação.
>   (opcional — não afeta a participação)
>
> Código do participante: ____ · Versão do consentimento: 1.0-proposal ·
> Versão do protocolo: E62 1.0-proposal · Estímulo: commit `4c80585` · Data: ____

**O consentimento não** promete anonimato absoluto, não emite claim de
segurança/acessibilidade, não apresenta o estudo como certificação e não
contém renúncia ampla de direitos. Reconsentimento obrigatório se protocolo,
estímulo ou retenção mudarem materialmente.

## 3. O que este documento NÃO faz

Não divulga o screener, não contata ninguém, não coleta consentimento, não
fecha o gate de consentimento (exige aceite humano da versão final e
formatação acessível), não constitui aconselhamento jurídico.
