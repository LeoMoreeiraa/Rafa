M# Inventário de Telas do MVP PetWalker

## App Tutor (Mobile)

| Fluxo | Tela | Objetivo | Elementos-chave |
| --- | --- | --- | --- |
| Onboarding | Splash + Login/Sign-up | Entrada rápida e CTA para criar conta | Logo, CTA cadastro/login, botão continuar com Google/Apple, link termos/LGPD |
| Onboarding | Cadastro de Tutor | Coletar dados pessoais e endereço | Inputs nome, telefone, CEP com autocomplete, upload documento, consentimento LGPD |
| Onboarding | Cadastro de Cão | Registrar perfil do pet | Foto, nome, raça, idade, porte, saúde, tags especiais |
| Home | Dashboard Tutor | Visão consolidada do dia | Card próximos passeios, CTA Solicitar Passeio, status tempo real, banner promo |
| Solicitação | Seleção de Cão e Preferências | Configurar pedido | Lista cães, duração, intensidad​e, horário (imediato/agendado), cão extra, observações |
| Solicitação | Estimativa | Revisar preço e tempo | Mapa com raio, valor estimado, tempo chegada, CTA Confirmar, opções pagamento |
| Espera | Status de Matching | Acompanhar aceite | Loading animado, avatar potencial passeador, ETA, botão cancelar |
| Corrida | Acompanhamento em Tempo Real | Monitorar passeio | Mapa ao vivo, status (indo/buscou/passeando), fotos do cão, botão ajuda |
| Corrida | Checklist de Retorno | Garantir entrega segura | Lista de verificação (coleira ok, água, observações), botão confirmar recebimento |
| Pós-corrida | Avaliação e Gorjeta | Capturar feedback e upsell | Rating 1-5, comentários, gorjeta sugerida/personalizada, CTA enviar |
| Histórico | Histórico de Passeios | Consultar registros | Lista passeios com data/valor/notas, filtros, link recibo |
| Pagamentos | Carteira e Métodos | Gerenciar cartões e recibos | Cards métodos, histórico cobranças, opção Pix futuro |
| Suporte | Central de Ajuda | Resolver dúvidas | FAQ, abrir ticket, chat suporte, status solicitações |

## App Passeador (Mobile)

| Fluxo | Tela | Objetivo | Elementos-chave |
| --- | --- | --- | --- |
| Onboarding | Splash + Cadastro | Registrar passeador | CTA criar conta, opção login, link requisitos |
| Onboarding | Verificação Documental | Validar identidade | Upload RG/CNH, selfie, comprovante residência, status aprovação |
| Onboarding | Perfil Profissional | Destacar habilidades | Campos experiência, raio atuação, disponibilidade, bio, certificados |
| Home | Agenda do Dia | Mostrar compromissos | Cards passeios agendados, slots livres, CTA ver oportunidades |
| Oportunidades | Feed de Corridas | Avaliar corridas novas | Lista com cão, distância coleta, recompensa, botões aceitar/recusar |
| Detalhe Corrida | Briefing | Preparar passeio | Dados tutor, pet, mapa coleta, notas especiais, botão iniciar navegação |
| Check-in | Chegada ao Tutor | Confirmar início | Botões chegando/iniciei, checklist pré, captura foto |
| Passeio | Tracking Interno | Executar rota | Mapa com rotas sugeridas, timer, botões pausar/ocorrência |
| Ocorrências | Registro de Evento | Registrar incidentes | Tipos de ocorrência, texto, upload foto, alerta tutor |
| Check-out | Finalizar Passeio | Encerrar com evidências | Checklist pós, foto, nota rápida para tutor |
| Carteira | Ganhos e Saques | Gerir finanças | Saldo atual, histórico passeios, botão solicitar saque, projeção semana |
| Avaliações | Feedback Recebido | Aprender com tutores | Ratings, comentários, média geral, badges/incentivos |
| Suporte | Central de Ajuda Paseador | Resolução específica | FAQ, canal com operações, status disputas |

## Painel Administrativo (Web)

| Módulo | Tela | Objetivo | Elementos-chave |
| --- | --- | --- | --- |
| Autenticação | Login Admin | Acesso seguro | MFA opcional, recuperação, banner status ambiente |
| Passeadores | Aprovação de Cadastro | Analisar e aprovar perfis | Lista pendentes, documentos, parecer, botão aprovar/reprovar |
| Operações | Corridas em Tempo Real | Monitorar passeios ativos | Mapa com heatmap, lista corridas, filtros por status, botão intervir |
| Operações | Disputas e Suporte | Resolver incidentes | Kanban disputas, detalhes caso, histórico mensagens, SLA |
| Financeiro | Relatórios de Pagamento | Controlar splits e payouts | Dashboard KPIs, exportação CSV, alertas reconciliação |
| Conteúdo | FAQ e Templates | Atualizar comunicação | Editor de artigos, templates push/SMS, histórico versões |

## Componentes Compartilhados
- **Sistema de notificações in-app**: banners, toasts, push; gestão de preferências.
- **Configurações e Perfil**: edição de dados, privacidade, termos, logout.
- **Suporte emergencial**: botão destacado para acionar central em incidentes.

## Próximos Passos de Design
1. Construir user flows clicáveis (Figma) para cada jornada crítica.
2. Definir linguagem visual (cores, tipografia, iconografia) alinhada ao posicionamento premium/trust.
3. Validar protótipos com 5 tutores e 5 passeadores reais para ajustes antes da implementação.
