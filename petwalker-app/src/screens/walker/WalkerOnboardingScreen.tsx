import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { usePrototypeData } from '../../context/PrototypeContext';

export function WalkerOnboardingScreen() {
  const {
    state: {
      walker: { rideStatus },
    },
  } = usePrototypeData();

  const statusLabel: Record<typeof rideStatus, string> = {
    livre: 'Pronto para aceitar corridas',
    aceitou: 'Corrida aceita, aguardando check-in',
    'em-andamento': 'Passeio em execução',
    finalizado: 'Passeio finalizado, envie registros',
  };

  return (
    <ScreenContainer>
      <Heading>Verificação de segurança</Heading>
      <Body>Envie os documentos obrigatórios para liberar seu perfil de passeador.</Body>
      <Caption>Status atual: {statusLabel[rideStatus]}</Caption>

      <Card>
        <Subheading>Checklist</Subheading>
        <Body>RG ou CNH com foto</Body>
        <Pill variant="success">Enviado</Pill>
        <Body>Comprovante de residência (últimos 3 meses)</Body>
        <Pill variant={rideStatus === 'livre' ? 'warning' : 'success'}>
          {rideStatus === 'livre' ? 'Pendente' : 'Validado' }
        </Pill>
        <Body>Certidão negativa</Body>
        <Pill variant="success">Validado</Pill>
        <Button>Enviar comprovante</Button>
        <Button variant="secondary">Falar com suporte</Button>
      </Card>

      <Card>
        <Subheading>Perfil profissional</Subheading>
        <Body>Disponibilidade: Seg a Sex • 8h às 18h</Body>
        <PillRow>
          <Pill variant="active">Raio de atuação: 5 km</Pill>
          <Pill>Certificação PetWalker</Pill>
          <Pill>Primeiros socorros</Pill>
        </PillRow>
        <Caption>Ajuste esses dados a qualquer momento no perfil.</Caption>
      </Card>
    </ScreenContainer>
  );
}
