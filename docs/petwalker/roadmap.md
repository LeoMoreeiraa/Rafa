# Roadmap Incremental PetWalker

## Visão geral
- Estrutura em três ondas principais: MVP operacional, expansão comercial e diferenciais inteligentes.
- Cada onda possui um conjunto de entregas priorizadas, dependências e critérios de sucesso.
- Roadmap considera ciclos de 6-8 semanas, com janelas de validação junto a usuários/operadores.

## Sprint 0 – Preparação (Semanas -2 a 0)
**Objetivo**: montar fundações de produto, equipe e infraestrutura antes do desenvolvimento do MVP.

### Entregas-chave
- Definição de equipe núcleo (PM, Tech Lead, Mobile, Backend, UX, QA) e rituais (daily, planning, review, retro).
- Criação de design system inicial (identidade, componentes críticos) e fluxos do app mobile (hi-fidelity para onboarding, solicitação e tracking).
- Setup de repositórios, convenções (lint, commit, branch), pipelines CI/CD e ambiente cloud com Terraform.
- Integração sandbox com provedores críticos (mapas, pagamentos, notificações) para testes end-to-end.
- Política de segurança e LGPD: consentimento, termos de uso, fluxo de solicitação de exclusão.

### Checkpoints
- Go/No-Go com stakeholders após validar protótipo navegável do app e testes técnicos de integrações.
- Checklist de readiness de release (observabilidade mínima, logging, feature flags) concluído.

## Onda 1 – MVP Operacional (Semanas 1-8)
**Objetivo**: validar core experience de solicitação e execução de passeios com pagamentos.

### Entregas-chave
- App mobile com onboarding básico, cadastro de cães e solicitação imediata.
- Matching inicial (distância + disponibilidade) com aceite de passeador.
- Tracking em tempo real (mapa, status, fotos) com histórico mínimo.
- Pagamentos com cartão + split (taxa PetWalker + repasse passeador).
- Avaliações pós-passeio e suporte via e-mail/app.
- Painel admin simplificado para aprovar passeadores e monitorar corridas.

### Dependências
- Integração base com gateway de mapas (Mapbox/Google).
- Integração com Stripe/Adyen para cartão e split.
- Infra de observabilidade mínima (logs métricas).

### KPIs de validação
- ≥80% das solicitações convertidas em passeios concluídos.
- NPS preliminar >30.
- Feedback qualitativo positivo sobre tracking e transparência.

### Backlog prioritário
- Implementar feature flag para Progressive Rollout em regiões piloto.
- Criar fluxo de reconciliação financeira diário com relatório automatizado para operações.
- Automatizar verificação documental dos passeadores com serviço de terceiros e fallback manual.
- Instrumentar métricas essenciais (matching success rate, latência de tracking, incidentes por passeio).

## Onda 2 – Expansão Comercial (Semanas 9-16)
**Objetivo**: adicionar marketplace e programas de fidelização/retomada.

### Entregas-chave
- Marketplace pet com catálogo curado, carrinho e checkout integrado.
- Suporte a agendamentos recorrentes de passeios com pacotes promocionais.
- Sistema de cupons, programas de indicação e gorjetas configuráveis.
- Painel admin ampliado (catálogo, gestão de pedidos, relatórios financeiros).
- Automação de notificações (push/sms) para lembretes e upsell.

### Dependências
- Integração logística (Correios/Loggi) para fulfillment básico.
- Contratos com fornecedores e definição de comissionamento.
- Ajustes de infraestrutura para picos (cache, filas).

### KPIs de validação
- ≥20% dos tutores realizando ao menos 1 compra no marketplace.
- Ticket médio dos passeios +10% via upsell/cross-sell.
- SLA de pedidos marketplace cumprido em ≥95%.

### Backlog prioritário
- Implementar catálogo administrável com importação CSV/integração parceiros.
- Desenvolver motor de promoções (cupons, combos, fidelidade) com regras configuráveis.
- Criar esteira logística com tracking e notificações de pedido, incluindo SLA monitorado.
- Integrar CRM para campanhas segmentadas e recuperação de carrinho.

## Onda 3 – Diferenciais Inteligentes (Semanas 17-28)
**Objetivo**: construir hub comunitário e IA especializada.

### Entregas-chave
- Hub social tipo "LinkedIn" com perfis, postagens de demanda/oferta e moderação.
- Assistente IA de saúde do cão com recomendações personalizadas e alertas proativos.
- Integração de dados de passeios + IA para planos semanais e gamificação (badges, metas).
- Chat em tempo real entre tutores e passeadores com templates de checklists.
- Ferramentas de análise avançada (Dashboards BI, segmentação).

### Dependências
- Coleta consistente de dados de passeios e marketplace para alimentar IA.
- Parceria com especialistas veterinários para revisão das recomendações.
- Moderação semi-automatizada (IA + revisão humana) do hub social.

### KPIs de validação
- ≥50% dos tutores consultando IA semanalmente; ≥70% engajamento em planos de passeio.
- Crescimento de 30% na retenção 90 dias após lançamento da IA.
- Engajamento no hub (posts/respondidos) >40% dos usuários ativos.

### Backlog prioritário
- Lançar comunidade com moderação assistida (flag de conteúdo + revisão humana em SLA definido).
- Treinar modelo IA com dados reais pós-anonimização e validar com especialistas veterinários.
- Implementar gamificação (badges, metas) com eventos instrumentados para BI.
- Integrar chat em tempo real com histórico persistido e templates pré-carregados.

## Pós-Onda 3 – Escala e otimização contínua
- Expansão geográfica com suporte multilíngue e novas moedas.
- Programas B2B (parcerias com condomínios, pet shops, veterinárias).
- IA avançada (previsão de demanda, dynamic pricing, segurança comportamental do cão).
- Compliance ampliado (ISO/PCI) e automação de chargeback/fraudes.

### Governança contínua
- Revisões trimestrais de arquitetura e custos, com otimização de provedores conforme uso.
- Rotina de pesquisa com usuários (tutores, passeadores) para priorização de backlog.
- Roadmap rolling de 6 meses com checkpoints mensais em steering com stakeholders.
