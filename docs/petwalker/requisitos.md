# Requisitos do PetWalker

## Visão geral
- Plataforma mobile que conecta tutores e passeadores de cães em tempo real.
- Experiência inspirada em apps de ride-sharing (solicitação, matching, acompanhamento e pagamento dentro do app).
- Monetização com taxa por corrida, comissão sobre marketplace de produtos pet e serviços premium baseados em IA.

## Personas
### Tutor (cliente)
- Precisa agendar passeios confiáveis para o cão, com transparência de localização e histórico.
- Deseja recomendações personalizadas de cuidados, atividades e produtos.

### Passeador
- Procura demanda constante e previsível de passeios com remuneração justa.
- Necessita ferramentas de agenda, rotas eficientes e avaliação dos tutores.

### Administrador/Operações
- Monitora qualidade dos passeios, responde disputas, gerencia cadastros e marketplace.
- Acompanha métricas de negócio, aprova passeadores e organiza campanhas.

## Proposta de valor
- Segurança e confiança: rastreamento em tempo real, histórico de passeios e avaliações.
- Conveniência: matching rápido, pagamentos in-app e notificações.
- Inteligência: recomendações automáticas de atividades e saúde baseadas no perfil do cão.
- Receita extra para parceiros via marketplace pet com curadoria.

## Funcionalidades principais
- Onboarding com verificação de identidade, informações do cão e certificações do passeador.
- Solicitação de passeio com parâmetros (horário, duração, nível de atividade, cão adicional).
- Feed de oportunidades para passeadores com filtros por localização, agenda e valor.
- Matching e confirmação com chat in-app, detalhes da rota e preço.
- Geolocalização em tempo real do passeio para tutor e registro da rota.
- Pagamentos digitais (cartão, carteira) com divisão automática de taxas e gorjetas.
- Marketplace pet com catálogo, avaliações, carrinho, checkout e entrega/drop-off.
- Assistente de saúde (IA) com recomendações de atividade semanal, alertas de saúde e dicas nutricionais.
- Sistema de avaliações bidirecional e suporte para incidentes.
- Painel administrativo com gestão de usuários, corridas, disputas, catálogo e estatísticas.
- Hub comunitário estilo "LinkedIn" onde tutores e passeadores publicam oportunidades, agendas e perfis profissionais.

## Fluxos iniciais
### Tutor solicita passeio
1. Tutor escolhe cão, horário (imediato ou agendado) e preferências.
2. App calcula estimativa de tempo/preço e envia pedido a passeadores próximos.
3. Passeador aceita; tutor recebe confirmação, dados do profissional e rota prevista.
4. Passeio inicia com check-in; tutor acompanha localização e status (início, pausa, fim).
5. Ao finalizar, tutor confirma condição do cão, pagamento ocorre e ambos avaliam.

### Passeador aceita corrida
1. Recebe push com detalhes (cão, distância coleta, duração, recompensa).
2. Visualiza mapa até o tutor, aceita ou recusa.
3. Realiza check-in no início, registra ocorrências e adiciona fotos/notas.
4. Encerramento gera recibo e pagamento em carteira do passeador.

### Compra no marketplace
1. Tutor navega por categorias curadas (ração, acessórios, serviços).
2. Adiciona itens ao carrinho, aplica cupons e escolhe entrega.
3. Pagamento integrado; comissão do PetWalker calculada.
4. Status de pedido e rastreio ficam disponíveis no app.

### Assistente de saúde
1. Tutor cadastra raça, idade, peso, condições médicas e objetivos.
2. IA sugere plano semanal de caminhadas (km, intensidade, duração).
3. Recomenda suplementos ou produtos correlatos e sincroniza com passeios agendados.
4. Tutor recebe alertas proativos (ex.: excesso de esforço, clima adverso).

### Hub comunitário
1. Usuário cria perfil público destacando habilidades, certificações, locais favoritos e depoimentos.
2. Tutores publicam demandas recorrentes (ex.: dia da semana, horário, localização, requisitos, faixa de preço).
3. Passeadores compartilham disponibilidade, experiências e portfólio.
4. Partes interessadas interagem via comentários ou mensagens diretas antes de formalizar passeios.

## Requisitos funcionais
- Cadastro seguro com autenticação multifator opcional.
- Validação documental de passeadores (certidões, comprovante de residência, antecedentes).
- Algoritmo de matching geolocalizado com balanceamento de oferta/demanda.
- Tracking GPS contínuo com atualizações a cada X segundos e fallback offline.
- Histórico completo de passeios, incluindo rotas, notas, fotos e avaliações.
- Integração com gateway de pagamento (split de taxas, estorno parcial, gorjetas).
- Catálogo marketplace com gerenciamento de estoque, parceiros e ordens.
- Assistente IA treinado com guidelines veterinárias e base de dados de raças.
- Sistema de notificações push, e-mail e SMS para eventos críticos.
- Suporte in-app com abertura de tickets e chat com operações.
- Hub comunitário com moderação, filtros por localização/habilidade e opção de denunciar conteúdo.

## Requisitos não funcionais
- Disponibilidade alvo 99,5% mensal para serviços críticos (matching, tracking).
- Latência média abaixo de 300 ms para chamadas core (matching, tracking, chat).
- Escalabilidade horizontal para picos de solicitações em regiões metropolitanas.
- Conformidade com LGPD (consentimento, anonimização, direito de exclusão).
- Criptografia TLS para tráfego e encriptação de dados sensíveis em repouso.
- Observabilidade: logs estruturados, métricas e tracing distribuído.
- Planos de contingência para indisponibilidade de GPS ou pagamento.

## Métricas de sucesso
- Taxa de aceitação de passeios (solicitações aceitas / total).
- NPS dos tutores e passeadores.
- Retenção de usuários (30/60/90 dias).
- Ticket médio por passeio e receita adicional do marketplace.
- Aderência às recomendações de saúde (km percorridos vs. meta sugerida).

## Riscos e pendências
- Adesão de passeadores depende de validação e onboarding robusto.
- Custos de geolocalização e infraestrutura em tempo real podem ser elevados.
- Responsabilidade civil em incidentes durante passeios precisa de seguro dedicado.
- Necessário definir parcerias e SLAs logísticos para o marketplace.
- Precisamos de especialistas para treinar/validar as recomendações da IA.

## Próximos passos sugeridos
- Validar hipóteses com entrevistas rápidas com tutores e passeadores.
- Definir MVP: quais módulos entram na primeira entrega vs. roadmap futuro.
- Especificar integrações (pagamentos, mapas, notificadores) e restrições regionais.

## MVP proposto
- **Núcleo do tutor**: cadastro completo de perfis, registro de cães, solicitação de passeios imediatos ou agendados, acompanhamento em mapa e confirmação/pagamento ao final.
- **Núcleo do passeador**: onboarding com verificação documental, agenda básica, aceite de passeios com rota até o tutor e check-in/out com registro de ocorrências simples (texto e foto).
- **Matching e tracking**: algoritmo inicial baseado em distância/agenda, atualização GPS a cada 15 segundos com fallback para última posição conhecida e notificações push para eventos críticos.
- **Pagamentos e carteira**: integração única com gateway parceiro (split de taxas e gorjetas), payout semanal ao passeador e relatórios básicos no app.
- **Suporte e compliance**: suporte via FAQ + abertura de ticket, consentimento LGPD na jornada de onboarding, armazenamento cifrado de dados sensíveis.
- **Admin inicial**: painel web simplificado para aprovar passeadores, revisar passeios em andamento/finalizados, visualizar disputas e intervir manualmente.

### Fora do MVP (entradas para roadmap)
- Marketplace com catálogo completo e logística integrada.
- Assistente de saúde baseado em IA com recomendações personalizadas.
- Hub comunitário social com perfis públicos e feeds de conteúdo.
- Integrações com múltiplos gateways de pagamento ou programas de fidelidade.
- Automação avançada de disputas e moderação assistida por IA.

## Integrações prioritárias
- **Mapas e geolocalização**
	- SDK móvel com suporte a rotas pedonais, geofencing e atualização em background (ex.: Google Maps Platform, Mapbox).
	- Webhooks ou APIs para reverse geocoding e cálculo de estimativas de tempo/distância.
	- Política de quotas e custos monitorada; definir chave separada por ambiente (dev, staging, produção).
- **Pagamentos**
	- Gateway com suporte a split de pagamento e marketplace (ex.: Stripe Connect, Pagar.me Marketplace).
	- Recursos obrigatórios: tokenização de cartão, estorno parcial, cobrança recorrente opcional e gerenciamento de compliance (KYC, anti-fraude).
	- Definir cronograma de reconciliação financeiro com exportação diária para backoffice e webhooks de status.
- **Notificações**
	- Push via Firebase Cloud Messaging (Android) e Apple Push Notification Service (iOS) com abstração unificada no backend.
	- Failover via SMS/e-mail para eventos críticos (ex.: check-in não realizado, disputa aberta).
	- Configuração de templates parametrizáveis e preferências opt-in/out por usuário.

### Fornecedores e custos indicativos
- **Mapas**
	- Google Maps Platform: cobrança por mil chamadas; estimar uso focado em Directions API e Geocoding com teto mensal para piloto.
	- Mapbox: plano escalonado com tarifa por mil MAUs; considerar uso offline parcial e widgets personalizáveis.
- **Pagamentos**
	- Stripe Connect: taxa fixa + percentual sobre transação; vantagens em KYC e suporte global.
	- Pagar.me Marketplace: modelo focado em Brasil com split nativo e antecipação opcional de recebíveis.
- **Notificações**
	- Firebase Cloud Messaging: gratuito para push; custo associado apenas ao uso complementar de Analytics/Crashlytics.
	- Twilio ou TotalVoice: cobrança por mensagem para SMS de contingência e verificação.

### Dependências técnicas e compliance
- **Mapas**
	- SDK mobile (Android/iOS) com suporte a background location; exige configuração de chaves e restrição por domínio/app.
	- Bibliotecas server-side para calcular rotas e estimativas (Node.js/Java) com quotas monitoradas por métricas.
	- Adequar termos de uso para uso comercial e informar usuários sobre coleta de dados de localização.
- **Pagamentos**
	- SDK ou APIs REST para tokenização; requer backend seguro com storage de tokens e certificações PCI-DSS SAQ A.
	- Webhooks de autorização, captura, estorno e payout; infraestrutura para retries e assinatura de mensagens.
	- Processo de KYC/KYB para passeadores e para a conta-mãe da plataforma, incluindo coleta de documentos e verificação automática.
- **Notificações**
	- Configuração de APNs (certificados ou tokens) e FCM (server key) com camada de abstração no backend.
	- Integração com provedor de e-mail transacional (ex.: SendGrid, AWS SES) para notificações obrigatórias.
	- Políticas de consentimento e opt-out registradas, com logs de entrega e auditoria para eventos críticos.
