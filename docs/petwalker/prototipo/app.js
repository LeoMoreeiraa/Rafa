const prototypeData = {
  tutor: {
    label: "Tutor",
    description: "Fluxos principais para o tutor solicitar, acompanhar e finalizar passeios.",
    screens: [
      {
        id: "tutor-splash",
        name: "Entrada",
        tag: "Onboarding",
        notes: [
          "Entrada rápida com CTAs claros para criar conta ou prosseguir com Single Sign-On.",
          "Mensagem de valor resumida reforça segurança e conveniência.",
          "Acesso a termos e LGPD visível logo na abertura."
        ],
        devices: [
          {
            title: "Splash",
            tag: "Primeiro contato",
            body: `
              <div class="card">
                <h3>Faça parte da matilha</h3>
                <p>Cuide da rotina do seu cão com passeadores verificados e acompanhamento em tempo real.</p>
                <div class="pill-row">
                  <span class="pill">Segurança 24/7</span>
                  <span class="pill">Pagamentos in-app</span>
                  <span class="pill">Passeadores certificados</span>
                </div>
                <button class="primary-action">Criar conta</button>
                <button class="secondary-action">Continuar com Google</button>
                <p style="font-size: 11px; text-align: center; color: var(--muted);">Ao continuar você concorda com os Termos &amp; LGPD.</p>
              </div>
            `
          },
          {
            title: "Login rápido",
            tag: "Retorno",
            body: `
              <div class="card">
                <h3>Bem-vindo de volta, Ana</h3>
                <p style="color: var(--muted);">Pronto para o próximo passeio?</p>
                <div class="field">
                  <label>E-mail</label>
                  <input type="email" placeholder="ana@exemplo.com" value="ana@exemplo.com" />
                </div>
                <div class="field">
                  <label>Senha</label>
                  <input type="password" placeholder="••••••••" value="passeiotop" />
                </div>
                <button class="primary-action">Entrar</button>
                <button class="secondary-action">Esqueci minha senha</button>
              </div>
            `
          }
        ]
      },
      {
        id: "tutor-onboarding",
        name: "Cadastro Rápido",
        tag: "Onboarding",
        notes: [
          "Fluxo em duas etapas: dados do tutor e do cão, com progresso visível.",
          "Campos essenciais apenas; uploads simulados com indicadores de status.",
          "Consentimentos de LGPD e marketing separados para clareza."
        ],
        devices: [
          {
            title: "Dados do tutor",
            tag: "Passo 1 de 2",
            body: `
              <div class="progress-bar"><span style="width: 55%"></span></div>
              <div class="card">
                <div class="field">
                  <label>Nome completo</label>
                  <input placeholder="Ana Souza" value="Ana Souza" />
                </div>
                <div class="field">
                  <label>Telefone</label>
                  <input placeholder="(11) 91234-5678" value="(11) 91234-5678" />
                </div>
                <div class="field">
                  <label>Endereço</label>
                  <input placeholder="Rua das Palmeiras, 210" value="Rua das Palmeiras, 210" />
                </div>
                <div class="pill-row">
                  <span class="pill active">LGPD OK</span>
                  <span class="pill">Receber novidades</span>
                </div>
                <button class="primary-action">Continuar</button>
              </div>
            `
          },
          {
            title: "Cadastro do cão",
            tag: "Passo 2 de 2",
            body: `
              <div class="progress-bar"><span style="width: 95%"></span></div>
              <div class="card">
                <div class="field">
                  <label>Nome do cão</label>
                  <input placeholder="Thor" value="Thor" />
                </div>
                <div class="field">
                  <label>Raça</label>
                  <input placeholder="Labrador" value="Labrador" />
                </div>
                <div class="pill-row">
                  <span class="pill active">Energia alta</span>
                  <span class="pill">Sociável</span>
                  <span class="pill">Cuidados especiais</span>
                </div>
                <div class="field">
                  <label>Notas para o passeador</label>
                  <textarea rows="3" placeholder="Gosta de brincar no parque e precisa de água a cada 20min."></textarea>
                </div>
                <button class="primary-action">Finalizar cadastro</button>
              </div>
            `
          }
        ]
      },
      {
        id: "tutor-home",
        name: "Home & Solicitação",
        tag: "Core",
        notes: [
          "Resumo do dia destaca próximos passeios e call-to-action principal.",
          "Solicitação guiada com preferências do cão e estimativa de preço.",
          "Atalhos para suporte e histórico sempre acessíveis."
        ],
        devices: [
          {
            title: "Home",
            tag: "Visão geral",
            body: `
              <div class="card">
                <div class="inline">
                  <div>
                    <h3>Próximo passeio</h3>
                    <p>Hoje, 17h • Thor</p>
                  </div>
                  <span class="badge">Confirmado</span>
                </div>
                <div class="map-placeholder"></div>
                <button class="primary-action">Solicitar novo passeio</button>
                <button class="secondary-action">Ver histórico</button>
              </div>
              <div class="card">
                <h3>Insights do Thor</h3>
                <p>Você cumpriu 80% da meta semanal de atividade.</p>
                <div class="progress-bar"><span style="width: 80%"></span></div>
              </div>
            `
          },
          {
            title: "Solicitação",
            tag: "Configuração",
            body: `
              <div class="card">
                <h3>Detalhes do passeio</h3>
                <div class="field">
                  <label>Cão</label>
                  <select>
                    <option>Thor (principal)</option>
                    <option>Luna</option>
                  </select>
                </div>
                <div class="field">
                  <label>Duração</label>
                  <select>
                    <option>45 minutos</option>
                    <option>30 minutos</option>
                    <option>60 minutos</option>
                  </select>
                </div>
                <div class="pill-row">
                  <span class="pill active">Imediato</span>
                  <span class="pill">Agendar</span>
                  <span class="pill">Adicionar cão extra</span>
                </div>
              </div>
              <div class="card">
                <div class="inline">
                  <div>
                    <h3>Estimativa</h3>
                    <p>Chegada em 12 min • R$ 48,00</p>
                  </div>
                  <span class="badge">Alta demanda</span>
                </div>
                <p>O valor inclui taxa PetWalker e gorjeta sugerida de R$ 5,00.</p>
                <button class="primary-action">Confirmar solicitação</button>
              </div>
            `
          }
        ]
      },
      {
        id: "tutor-tracking",
        name: "Matching & Tracking",
        tag: "Core",
        notes: [
          "Tela de matching mostra progresso do aceite e destaca confiança do passeador.",
          "Tracking em tempo real exibe status, fotos e botões rápidos de suporte.",
          "Alertas visuais informam pausas ou incidentes."
        ],
        devices: [
          {
            title: "Matching",
            tag: "Tempo real",
            body: `
              <div class="card">
                <h3>Buscando passeador...</h3>
                <p>Encontrando o melhor match para Thor. 3 passeadores próximos.</p>
                <div class="progress-bar"><span style="width: 65%"></span></div>
                <div class="list">
                  <div class="list-item">
                    <div>
                      <strong>Carla M.</strong>
                      <span style="color: var(--muted);">Chega em 8 min • 4.9⭐</span>
                    </div>
                    <span class="badge">Preferido</span>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Lucas P.</strong>
                      <span style="color: var(--muted);">Chega em 11 min • 4.8⭐</span>
                    </div>
                    <span class="badge warning">Em análise</span>
                  </div>
                </div>
                <button class="secondary-action">Cancelar</button>
              </div>
            `
          },
          {
            title: "Passeio em andamento",
            tag: "Tracking",
            body: `
              <div class="card">
                <div class="inline">
                  <div>
                    <h3>Carla começou o passeio</h3>
                    <p>19 min restantes • 1,6 km percorridos</p>
                  </div>
                  <span class="badge">Ao vivo</span>
                </div>
                <div class="map-placeholder"></div>
                <div class="pill-row">
                  <span class="pill active">Status: Passeando</span>
                  <span class="pill">Fotos (2)</span>
                  <span class="pill">Notas</span>
                </div>
                <button class="primary-action">Enviar mensagem</button>
                <button class="secondary-action">Solicitar suporte 24/7</button>
              </div>
            `
          }
        ]
      },
      {
        id: "tutor-checkout",
        name: "Checklist & Avaliação",
        tag: "Encerramento",
        notes: [
          "Checklist garante transparência na entrega do cão com fotos e anotações.",
          "Avaliação rápida incentiva gorjetas e feedback qualitativo.",
          "Recibo consolidado pronto para envio ou compartilhamento."
        ],
        devices: [
          {
            title: "Checklist de retorno",
            tag: "Confirmação",
            body: `
              <div class="card">
                <h3>Confirme o retorno do Thor</h3>
                <div class="list">
                  <label class="pill active">Coleira e guia ok</label>
                  <label class="pill active">Água servida</label>
                  <label class="pill">Observações adicionais</label>
                </div>
                <div class="field">
                  <label>Anotações da Carla</label>
                  <textarea rows="3">Thor brincou bastante no parque e socializou bem com outros cães.</textarea>
                </div>
                <button class="primary-action">Confirmar retorno</button>
              </div>
            `
          },
          {
            title: "Avaliação",
            tag: "Feedback",
            body: `
              <div class="card">
                <h3>Como foi o passeio?</h3>
                <p>Ajude-nos avaliando a experiência.</p>
                <div class="pill-row">
                  <span class="pill active">⭐️⭐️⭐️⭐️⭐️</span>
                  <span class="pill">Adicionar gorjeta (R$ 5)</span>
                </div>
                <div class="field">
                  <label>Comentários</label>
                  <textarea rows="3" placeholder="Carla cuidou muito bem do Thor!">Carla cuidou muito bem do Thor!</textarea>
                </div>
                <button class="primary-action">Enviar avaliação</button>
                <p style="font-size: 12px; text-align: center; color: var(--muted);">Recibo e resumo enviados para seu e-mail.</p>
              </div>
            `
          }
        ]
      }
    ]
  },
  walker: {
    label: "Passeador",
    description: "Fluxos para o passeador verificar documentos, aceitar corridas e gerenciar ganhos.",
    screens: [
      {
        id: "walker-onboarding",
        name: "Onboarding",
        tag: "Verificação",
        notes: [
          "Checklist de documentos obrigatórios com status em tempo real.",
          "Benefícios destacados para reduzir churn durante onboarding.",
          "CTA para suporte caso haja dúvida no processo."
        ],
        devices: [
          {
            title: "Documentos",
            tag: "Passo 1",
            body: `
              <div class="card">
                <h3>Verificação de segurança</h3>
                <p>Envie os documentos para liberar seu perfil.</p>
                <div class="list">
                  <div class="list-item">
                    <div>
                      <strong>Documento com foto</strong>
                      <span style="color: var(--muted);">RG, CNH ou RNE</span>
                    </div>
                    <span class="badge">Enviado</span>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Comprovante de residência</strong>
                      <span style="color: var(--muted);">Últimos 3 meses</span>
                    </div>
                    <span class="badge warning">Pendente</span>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Certidão negativa</strong>
                      <span style="color: var(--muted);">Upload digital</span>
                    </div>
                    <span class="badge">Enviado</span>
                  </div>
                </div>
                <button class="primary-action">Enviar comprovante</button>
                <button class="secondary-action">Falar com suporte</button>
              </div>
            `
          },
          {
            title: "Perfil profissional",
            tag: "Passo 2",
            body: `
              <div class="card">
                <h3>Conte sobre sua experiência</h3>
                <div class="field">
                  <label>Raio de atuação</label>
                  <select>
                    <option>Até 5 km</option>
                    <option>Até 8 km</option>
                  </select>
                </div>
                <div class="field">
                  <label>Disponibilidade</label>
                  <input placeholder="Seg a Sex • 8h às 18h" value="Seg a Sex • 8h às 18h" />
                </div>
                <div class="pill-row">
                  <span class="pill active">Certificação PetWalker</span>
                  <span class="pill">Primeiros socorros</span>
                </div>
                <button class="primary-action">Concluir</button>
              </div>
            `
          }
        ]
      },
      {
        id: "walker-home",
        name: "Agenda & Oportunidades",
        tag: "Operação",
        notes: [
          "Agenda do dia mostra corridas confirmadas e slots livres.",
          "Feed de oportunidades destaca ganho, distância e requisitos.",
          "Filtro rápido para aceitar corridas compatíveis."
        ],
        devices: [
          {
            title: "Agenda",
            tag: "Visão diária",
            body: `
              <div class="card">
                <h3>Hoje, 12 de março</h3>
                <div class="list">
                  <div class="list-item">
                    <div>
                      <strong>Thor • 14h</strong>
                      <span style="color: var(--muted);">45 min • Vila Madalena</span>
                    </div>
                    <span class="badge">Confirmado</span>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Luna • 16h</strong>
                      <span style="color: var(--muted);">30 min • Pinheiros</span>
                    </div>
                    <span class="badge warning">Checar notas</span>
                  </div>
                </div>
                <button class="primary-action">Abrir oportunidades</button>
              </div>
            `
          },
          {
            title: "Oportunidades",
            tag: "Feed",
            body: `
              <div class="card">
                <div class="inline">
                  <div>
                    <h3>Thor precisa de passeio</h3>
                    <p>Chegada em 9 min • R$ 38 + gorjeta</p>
                  </div>
                  <span class="badge">Alta reputação</span>
                </div>
                <p>Raça: Labrador • Energia alta • Tutor presente na saída.</p>
                <div class="pill-row">
                  <span class="pill active">3 km distância</span>
                  <span class="pill">Parque preferido</span>
                  <span class="pill">Fotos obrigatórias</span>
                </div>
                <button class="primary-action">Aceitar corrida</button>
                <button class="secondary-action">Ver mais detalhes</button>
              </div>
            `
          }
        ]
      },
      {
        id: "walker-tracking",
        name: "Execução do Passeio",
        tag: "Core",
        notes: [
          "Check-in orienta captura de foto e checklist antes de sair.",
          "Tracking interno tem controle de pausa e registro de ocorrência.",
          "Check-out inclui resumo automático para tutor e registro na carteira."
        ],
        devices: [
          {
            title: "Check-in",
            tag: "Pré passeio",
            body: `
              <div class="card">
                <h3>Chegada confirmada?</h3>
                <div class="pill-row">
                  <span class="pill active">Foto enviada</span>
                  <span class="pill">Água ok</span>
                  <span class="pill">Equipamentos ok</span>
                </div>
                <p>Avise o tutor que o passeio vai começar.</p>
                <button class="primary-action">Iniciar passeio</button>
                <button class="secondary-action">Enviar mensagem ao tutor</button>
              </div>
            `
          },
          {
            title: "Durante o passeio",
            tag: "Tracking",
            body: `
              <div class="card">
                <div class="inline">
                  <div>
                    <h3>Passeio em andamento</h3>
                    <p>12 min restantes • 1,1 km percorridos</p>
                  </div>
                  <span class="badge">Ao vivo</span>
                </div>
                <div class="map-placeholder"></div>
                <div class="pill-row">
                  <span class="pill active">Marcar pausa</span>
                  <span class="pill">Adicionar ocorrência</span>
                  <span class="pill">Compartilhar foto</span>
                </div>
                <button class="primary-action">Finalizar passeio</button>
              </div>
            `
          },
          {
            title: "Check-out",
            tag: "Resumo",
            body: `
              <div class="card">
                <h3>Resumo enviado ao tutor</h3>
                <div class="list">
                  <div class="list-item">
                    <div>
                      <strong>Duração</strong>
                      <span style="color: var(--muted);">45 min</span>
                    </div>
                    <span class="badge">OK</span>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Notas</strong>
                      <span style="color: var(--muted);">Brincou no parque, hidratado e feliz.</span>
                    </div>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Fotos enviadas</strong>
                      <span style="color: var(--muted);">3</span>
                    </div>
                    <span class="badge">✔</span>
                  </div>
                </div>
                <button class="primary-action">Registrar chegada</button>
              </div>
            `
          }
        ]
      },
      {
        id: "walker-wallet",
        name: "Carteira & Feedback",
        tag: "Financeiro",
        notes: [
          "Carteira mostra saldo atual, previsão da semana e atalhos para saque.",
          "Feedback dos tutores ajuda a manter engajamento e incentiva boas práticas.",
          "CTA para aprimorar perfil e conquistar badges."
        ],
        devices: [
          {
            title: "Carteira",
            tag: "Ganhos",
            body: `
              <div class="card">
                <h3>Saldo disponível</h3>
                <p style="font-size: 28px; font-weight: 600;">R$ 482,50</p>
                <div class="list">
                  <div class="list-item">
                    <div>
                      <strong>Esta semana</strong>
                      <span style="color: var(--muted);">6 passeios • R$ 320</span>
                    </div>
                    <span class="badge">+12%</span>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Próximo payout</strong>
                      <span style="color: var(--muted);">Terça-feira</span>
                    </div>
                  </div>
                </div>
                <button class="primary-action">Solicitar saque</button>
              </div>
            `
          },
          {
            title: "Avaliações",
            tag: "Reputação",
            body: `
              <div class="card">
                <h3>Feedback dos tutores</h3>
                <div class="list">
                  <div class="list-item">
                    <div>
                      <strong>Ana S.</strong>
                      <span style="color: var(--muted);">⭐️⭐️⭐️⭐️⭐️ • "Thor voltou exausto e feliz!"</span>
                    </div>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Marcelo T.</strong>
                      <span style="color: var(--muted);">⭐️⭐️⭐️⭐️ • "Ótima comunicação."</span>
                    </div>
                  </div>
                </div>
                <button class="secondary-action">Ver dicas para aumentar rating</button>
              </div>
            `
          }
        ]
      }
    ]
  },
  admin: {
    label: "Admin",
    description: "Painel web para operações acompanharem qualidade e segurança do serviço.",
    screens: [
      {
        id: "admin-login",
        name: "Login Seguro",
        tag: "Acesso",
        notes: [
          "Autenticação com MFA opcional e selo de ambiente (staging/produção).",
          "Resumo de status do sistema para garantir visibilidade antes de entrar.",
          "CTA para fluxos críticos de contingência."
        ],
        devices: [
          {
            title: "Login",
            tag: "Admin",
            body: `
              <div class="card">
                <h3>Entrar no painel</h3>
                <p>Use suas credenciais corporativas.</p>
                <div class="field">
                  <label>E-mail corporativo</label>
                  <input placeholder="operacoes@petwalker.com" value="operacoes@petwalker.com" />
                </div>
                <div class="field">
                  <label>Senha</label>
                  <input type="password" placeholder="••••••" />
                </div>
                <div class="pill-row">
                  <span class="pill active">MFA habilitado</span>
                  <span class="pill">Ambiente: Produção</span>
                </div>
                <button class="primary-action">Acessar painel</button>
                <button class="secondary-action">Central de contingência</button>
              </div>
            `
          }
        ]
      },
      {
        id: "admin-approval",
        name: "Aprovação Passeadores",
        tag: "Qualidade",
        notes: [
          "Lista de pendências com filtros e indicadores de SLA.",
          "Modal de análise mostra documentos e histórico rapidamente.",
          "Botões claros de aprovar/reprovar com motivos padrões."
        ],
        devices: [
          {
            title: "Fila de análise",
            tag: "Pendências",
            body: `
              <div class="card">
                <div class="inline">
                  <div>
                    <h3>14 cadastros aguardando</h3>
                    <p>SLA médio: 6h • Meta: 12h</p>
                  </div>
                  <span class="badge warning">Prioridade</span>
                </div>
                <div class="list">
                  <div class="list-item">
                    <div>
                      <strong>Carla Mendes</strong>
                      <span style="color: var(--muted);">Docs ok • Antecedentes pendente</span>
                    </div>
                    <button class="secondary-action" style="width:auto; padding:6px 12px;">Revisar</button>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>João Lima</strong>
                      <span style="color: var(--muted);">Novo • Raio sugerido 8 km</span>
                    </div>
                    <button class="secondary-action" style="width:auto; padding:6px 12px;">Revisar</button>
                  </div>
                </div>
              </div>
            `
          },
          {
            title: "Detalhe da Carla",
            tag: "Revisão",
            body: `
              <div class="card">
                <h3>Checklist de aprovação</h3>
                <div class="list">
                  <div class="list-item">
                    <div>
                      <strong>Documento oficial</strong>
                      <span style="color: var(--muted);">Verificado automaticamente</span>
                    </div>
                    <span class="badge">OK</span>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Antecedentes</strong>
                      <span style="color: var(--muted);">Resultado disponível</span>
                    </div>
                    <span class="badge warning">Revisar</span>
                  </div>
                </div>
                <button class="primary-action">Aprovar passeador</button>
                <button class="secondary-action">Reprovar com motivo</button>
              </div>
            `
          }
        ]
      },
      {
        id: "admin-operations",
        name: "Monitoramento",
        tag: "Tempo real",
        notes: [
          "Mapa simulado mostra calor de corridas ativas por região.",
          "Lista lateral com corridas em risco para intervenção rápida.",
          "Botões de ação direta para contatar tutor ou passeador."
        ],
        devices: [
          {
            title: "Visão em tempo real",
            tag: "Mapa",
            body: `
              <div class="card">
                <h3>Corridas ativas (32)</h3>
                <div class="map-placeholder"></div>
                <div class="pill-row">
                  <span class="pill active">Região: Pinheiros</span>
                  <span class="pill">Alertas: 2</span>
                  <span class="pill">SLAs ok</span>
                </div>
              </div>
            `
          },
          {
            title: "Alertas críticos",
            tag: "Atenção",
            body: `
              <div class="card">
                <h3>Intervenções necessárias</h3>
                <div class="list">
                  <div class="list-item">
                    <div>
                      <strong>Passeio 45871</strong>
                      <span style="color: var(--muted);">Pausa longa • Tutor aguarda atualização</span>
                    </div>
                    <span class="badge danger">10 min</span>
                  </div>
                  <div class="list-item">
                    <div>
                      <strong>Passeio 45852</strong>
                      <span style="color: var(--muted);">Solicitado suporte via app</span>
                    </div>
                    <span class="badge warning">Em andamento</span>
                  </div>
                </div>
                <button class="primary-action">Contatar passeador</button>
                <button class="secondary-action">Abrir ticket</button>
              </div>
            `
          }
        ]
      }
    ]
  }
};

const roleTabsEl = document.getElementById("roleTabs");
const screenTabsEl = document.getElementById("screenTabs");
const screenContentEl = document.getElementById("screenContent");
let currentRole = "tutor";
let currentScreenId = prototypeData[currentRole].screens[0].id;

const renderTabs = () => {
  roleTabsEl.innerHTML = Object.entries(prototypeData)
    .map(([key, value]) => {
      const activeClass = key === currentRole ? "tab active" : "tab";
      return `<button class="${activeClass}" data-role="${key}">${value.label}</button>`;
    })
    .join("");

  const currentScreens = prototypeData[currentRole].screens;
  screenTabsEl.innerHTML = currentScreens
    .map((screen) => {
      const activeClass = screen.id === currentScreenId ? "tab active" : "tab";
      return `<button class="${activeClass}" data-screen="${screen.id}">${screen.name}</button>`;
    })
    .join("");
};

const renderScreen = () => {
  const role = prototypeData[currentRole];
  const screen = role.screens.find((s) => s.id === currentScreenId) || role.screens[0];
  if (!screen) return;

  const devicesHtml = screen.devices
    .map((device) => {
      return `
        <div class="device">
          <div class="status-bar">
            <span>09:41</span>
            <span>LTE · 95%</span>
          </div>
          <div class="screen-header">
            <h2>${device.title}</h2>
            ${device.tag ? `<span class="screen-tag">${device.tag}</span>` : ""}
          </div>
          <div class="content">${device.body}</div>
        </div>
      `;
    })
    .join("");

  const notesHtml = screen.notes
    ? `
      <aside class="notes">
        <h3>Highlights</h3>
        <ul>
          ${screen.notes.map((note) => `<li>${note}</li>`).join("")}
        </ul>
      </aside>
    `
    : "";

  screenContentEl.innerHTML = `${devicesHtml}${notesHtml}`;
};

roleTabsEl.addEventListener("click", (event) => {
  const role = event.target.getAttribute("data-role");
  if (!role || role === currentRole) return;
  currentRole = role;
  currentScreenId = prototypeData[currentRole].screens[0].id;
  renderTabs();
  renderScreen();
});

screenTabsEl.addEventListener("click", (event) => {
  const screenId = event.target.getAttribute("data-screen");
  if (!screenId || screenId === currentScreenId) return;
  currentScreenId = screenId;
  renderTabs();
  renderScreen();
});

const handleDocOpen = (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const action = target.getAttribute("data-action");
  if (action !== "open-doc") return;
  const href = target.getAttribute("data-target");
  if (!href) return;
  window.open(href, "_blank");
};

document.body.addEventListener("click", handleDocOpen);

renderTabs();
renderScreen();
