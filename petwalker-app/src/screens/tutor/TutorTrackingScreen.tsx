import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { usePrototypeData } from '../../context/PrototypeContext';
import { LiveRouteMap } from '../../components/LiveRouteMap';

export function TutorTrackingScreen() {
  const {
    state: {
      tutor: { nextRide, map },
    },
    advanceTutorRide,
  } = usePrototypeData();

  const statusLabelMap: Record<typeof nextRide.status, string> = {
    'aguardando': 'Aguardando confirmação',
    'buscando': 'Buscando passeador',
    'a-caminho': 'Passeador a caminho',
    'passeando': 'Passeio em andamento',
    'retornando': 'Retornando para casa',
    'concluido': 'Passeio concluído',
  };

  const trackingSummary =
    nextRide.status === 'concluido'
      ? 'Passeio finalizado. Faça a avaliação no próximo passo.'
      : `Última atualização há 45 segundos. Próxima captura em 15 segundos.`;

  return (
    <ScreenContainer>
      <Heading>Tracking em tempo real</Heading>
      <Body>Acompanhe o passeio ao vivo e fale com o passeador se precisar.</Body>

      <Card>
        <Subheading>Passeio em andamento</Subheading>
        <Caption>
          Carla começou às 16h05 • Status atual: {statusLabelMap[nextRide.status]} • {nextRide.distanceKm} km percorridos
        </Caption>
        <LiveRouteMap
          path={map.path}
          currentIndex={map.currentIndex}
          currentPosition={map.currentPosition}
          destination={map.destination}
          statusLabel={statusLabelMap[nextRide.status]}
          etaMinutes={nextRide.etaMinutes}
        />
        <PillRow>
          <Pill variant="active">Status: {statusLabelMap[nextRide.status]}</Pill>
          <Pill>Fotos ({nextRide.photos})</Pill>
          <Pill>{nextRide.status === 'passeando' ? 'Pontos de atenção' : 'Notas compartilhadas'}</Pill>
        </PillRow>
        <PillRow>
          <Pill variant="success">ETA {nextRide.etaMinutes} min</Pill>
          <Pill variant="warning">Destino a {Math.max(0, 2.3 - nextRide.distanceKm).toFixed(1)} km</Pill>
        </PillRow>
        <Button>Enviar mensagem</Button>
        <Button variant="secondary">Solicitar suporte 24/7</Button>
        <Button variant="ghost" onPress={advanceTutorRide}>
          Simular próxima etapa
        </Button>
      </Card>

      <Card>
        <Subheading>Registros rápidos</Subheading>
        <Body>{trackingSummary}</Body>
        <PillRow>
          <Pill variant="success">Sinal GPS estável</Pill>
          <Pill variant={nextRide.status === 'retornando' ? 'warning' : 'default'}>
            {nextRide.status === 'retornando' ? 'Chegada em breve' : 'Clima: nublado'}
          </Pill>
        </PillRow>
      </Card>
    </ScreenContainer>
  );
}
