# Arquitetura Inicial do PetWalker

## Visão geral
- Abordagem modular com serviços focados (matching, tracking, marketplace, IA) expostos via APIs GraphQL/REST.
- Front-end mobile multiplataforma (React Native) e painel web administrativo (Next.js) conectados a um gateway API.
- Infraestrutura em nuvem (AWS) com orquestração Kubernetes (EKS) para escalar horizontalmente serviços críticos.
- Observabilidade de ponta a ponta (OpenTelemetry) acoplada a stack de logs, métricas e tracing.

## Camadas principais
- **Clientes**: Aplicativo mobile (React Native + Expo) e web admin em Next.js hospedado em Vercel/CloudFront.
- **Gateway/API**: NestJS (Node.js) com GraphQL para clients e REST para parceiros; API Gateway gerencia throttling e autenticação.
- **Serviços core**: Microserviços em NestJS/TypeScript (matching, tracking, billing, marketplace, notifications, user profile).
- **Dados**: PostgreSQL (transações), Redis (cache/sessões), DynamoDB (eventos tracking), S3 (arquivos, fotos de passeios).
- **IA/ML**: Serviço dedicado em Python (FastAPI) usando modelos customizados com pipelines em SageMaker e armazenamento de features em Feature Store.
- **Infraestrutura de mensagens**: Kafka para eventos (solicitação, aceitação, rota) e SNS/SQS para notificações externas.

## Serviços detalhados
- **Serviço de Autenticação**: OAuth2 + Cognito, MFA opcional, gerenciamento de credenciais e sessão.
- **Matching Engine**: Calcula oferta vs demanda, aplica filtros (distância, rating, agenda) e distribui corridas.
- **Tracking**: Ingestão de coordenadas (WebSockets/GraphQL Subscriptions), persistência em DynamoDB e replicação para data lake.
- **Marketplace**: Catálogo, estoque, integrações de parceiros via APIs, carrinho e checkout.
- **Billing/Payments**: Integra com Stripe/Adyen para split, antecipa repasses e gerencia conciliações.
- **Notifications**: Gera push (Firebase/APNs), e-mail (SES) e SMS (Twilio) com templates versionados.
- **Support/Case Management**: Fluxo de disputas, chat operador-cliente, integrações com CRM (Zendesk).
- **Analytics & Insights**: Lakehouse (S3 + Athena) alimentado por eventos Kafka para BI, dashboards (QuickSight/Metabase).
- **Assistente IA Saúde**: Microserviço com APIs para recomendações personalizadas, coleta dados de passeios e responde em linguagem natural.

## Fluxo de dados crítico (matching e tracking)
1. Tutor solicita corrida via mobile → Gateway → Matching Engine.
2. Matching publica evento `ride.requested` no Kafka; consumidores atualizam Redis para notificações em tempo real.
3. Passeador aceita → evento `ride.accepted` → Tracking inicia WebSocket para streaming de localização.
4. Tracking armazena ponto a cada 5-10 segundos em DynamoDB, atualiza Redis para dashboards em tempo real.
5. Ao finalizar, Billing atualiza valores em PostgreSQL, gera fatura e dispara eventos de analytics.

## Segurança e compliance
- Criptografia TLS 1.2+, rotação de segredos com AWS Secrets Manager.
- Política de acesso zero-trust com IAM granular; auditoria em CloudTrail.
- Mascaramento e tokenização de dados sensíveis (ex.: dados de pagamento).
- Conformidade LGPD: consentimento explícito, endpoint de data subject requests, governança de dados.
- Backups automáticos (RDS snapshots, DynamoDB PITR) e DR regional.

## Observabilidade
- OpenTelemetry nos serviços + Collector → Prometheus (métricas), Grafana (dashboards), Loki (logs), Jaeger (tracing).
- Alertas em PagerDuty para SLIs críticos (latência, disponibilidade, fila).
- Feature flags (LaunchDarkly) para liberações graduais e rollback rápido.

## Pipeline de entrega
- Monorepo com Turborepo para apps TypeScript; serviço IA em repo separado (Python).
- CI/CD via GitHub Actions: lint, testes, segurança (Snyk), build Docker e deploy via ArgoCD.
- Estrutura IaC em Terraform para EKS, RDS, DynamoDB, VPC, load balancers e secrets.

## Requisitos de geolocalização
- Uso do Mapbox/Google Maps SDK no mobile para mapas e rotas.
- Streaming via WebSockets com fallback para HTTP long polling.
- Ajustes de precisão conforme modo (em passeio vs parado) para otimizar bateria.
- Armazenamento de histórico de rotas para auditoria e relatórios.

## Integrações externas chave
- Pagamentos: Stripe Connect (split e payouts), Boleto/Pix via parceiro local.
- Identidade: Onfido/Aleph para validação documental dos passeadores.
- Logística marketplace: integração com provedores (Correios, Loggi) para fulfillment.
- Clima: API de weather (OpenWeather) para recomendações da IA e alertas.

## Considerações de escabilidade
- Autoscaling baseado em métricas (CPU/memória) e métricas de negócio (solicitações por minuto).
- Cache Redis para dados de consulta frequente (catálogo, perfis) e rate limiting.
- Uso de gRPC interno para comunicação entre microserviços com balanceamento via service mesh (Istio).

## Roadmap técnico para infraestrutura
1. Provisionar ambiente dev/stg/prod via Terraform, incluindo VPC, EKS, RDS e Redis.
2. Configurar CI/CD básico com pipelines de build e deploy para gateway e mobile.
3. Implementar observabilidade mínima (logs/métricas) antes do tráfego real.
4. Evoluir para mesh, feature flags e canary release conforme maturidade.
