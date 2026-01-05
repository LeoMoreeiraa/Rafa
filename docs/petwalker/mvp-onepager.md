# PetWalker MVP One-Pager

## Tese
- **Problema**: tutores urbanos lutam para conciliar rotina e garantir passeios seguros, enquanto passeadores independentes sofrem com demanda irregular e baixa previsibilidade financeira.
- **Solução**: app mobile que conecta tutores e passeadores confiáveis, com matching inteligente, acompanhamento em tempo real e pagamentos integrados.
- **Mercado**: serviços pet crescem >15% ao ano no Brasil; 40% dos cães vivem em apartamentos nas capitais.

## Proposta de Valor do MVP
- **Confiança**: verificação de passeadores, tracking GPS ao vivo, avaliações bidirecionais.
- **Conveniente**: solicitação imediata ou agendada em poucos toques, chat e notificações em tempo real.
- **Rentável**: monetização via taxa por passeio + gorjeta; ticket médio projetado R$45 por corrida de 45 minutos.

## Escopo do MVP (8 semanas)
- App tutor: onboarding, cadastro de cães, solicitação de passeio, acompanhamento ao vivo, avaliação e pagamento.
- App passeador: verificação documental, agenda básica, aceite de corrida, check-in/out com notas e fotos.
- Backend: matching baseado em proximidade/disponibilidade, tracking GPS a cada 15s, split de pagamentos (Stripe/Pagar.me).
- Painel admin: aprovação de passeadores, monitoramento de corridas e disputas, relatórios básicos.

## Jornada do Usuário (Tutor)
1. Cadastra perfil e cão em <5 minutos com validação de endereço.
2. Solicita passeio imediato/agendado e recebe estimativa de preço e tempo.
3. Acompanha percurso ao vivo, recebe fotos/notas e confirma término.
4. Avalia experiência, pagamento automático com recibo e possibilidade de gorjeta.

## Diferenciais Competitivos
- Segurança reforçada: checklists pré/pós passeio e registro de ocorrências com evidências.
- Performance: arquitetura preparada para escalar, com latência alvo <300 ms para matching/tracking.
- Dados acionáveis: painel com indicadores em tempo real (corridas ativas, SLA, satisfação).

## Indicadores Meta (3 primeiros meses pós-lançamento)
- 1.200 passeios concluídos (média 100/semana após rampa inicial).
- Taxa de aceite ≥80% e NPS ≥30.
- Retenção 30 dias ≥45% dos tutores.

## Plano de Execução
- **Sprint 0 (2 semanas)**: equipe núcleo montada, design system, setup de repositórios/CI/CD, integrações sandbox.
- **Sprints 1-2**: fluxos de onboarding, cadastro de cães e matching básico.
- **Sprints 3-4**: tracking em tempo real, checklists, avaliações e recibos.
- **Sprints 5-6**: pagamentos com split, painel admin inicial, observabilidade e métricas.
- **Sprints 7-8**: testes beta fechados, ajustes de UX, prontidão operacional (suporte, políticas LGPD).

## Recursos Necessários
- Equipe: 1 PM, 1 Tech Lead (fullstack), 2 dev mobile, 2 dev backend, 1 UX/UI, 1 QA, 1 Analista Operações.
- OPEX inicial: R$90k para equipe (2 meses) + R$15k infra/serviços (mapas, pagamentos, notificações, KYC).
- Marco de investimento: R$200k para 4 meses cobrindo MVP, marketing de lançamento e contingências.

## Próximos Passos
- Validar estimativas de custos/mapas/pagamentos com fornecedores.
- Selecionar grupo piloto (50 tutores, 20 passeadores) para beta controlado.
- Preparar storytelling para captação apresentando roadmap pós-MVP.
