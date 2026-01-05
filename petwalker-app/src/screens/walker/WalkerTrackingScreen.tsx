import { StyleSheet, View } from 'react-native';
import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { MapPlaceholder } from '../../components/MapPlaceholder';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { spacing } from '../../theme';
import { usePrototypeData } from '../../context/PrototypeContext';

export function WalkerTrackingScreen() {
  const {
    state: {
      walker: { rideStatus, highlightedOpportunity },
    },
    advanceWalkerRide,
  } = usePrototypeData();

  const isInProgress = rideStatus === 'em-andamento';
  const isFinalizado = rideStatus === 'finalizado';
  const rideSummary =
    rideStatus === 'livre'
      ? 'Aguardando aceite para iniciar check-in.'
      : rideStatus === 'aceitou'
        ? 'Faça o check-in no tutor para começar.'
        : rideStatus === 'em-andamento'
          ? 'Compartilhe fotos e registre pausas quando necessário.'
          : 'Finalize o check-out e envie o resumo para o tutor.';

  return (
    <ScreenContainer>
      <Heading>Execução do passeio</Heading>
      <Body>{rideSummary}</Body>

      <Card>
        <Subheading>Check-in</Subheading>
        <Caption>
          {rideStatus === 'aceitou' ? 'Chegada confirmada às 15h58' : 'Check-in concluído'}
        </Caption>
        <PillRow>
          <Pill variant="active">Foto enviada</Pill>
          <Pill>Água ok</Pill>
          <Pill>Equipamentos conferidos</Pill>
        </PillRow>
        <Button onPress={advanceWalkerRide}>
          {rideStatus === 'aceitou' ? 'Iniciar passeio' : 'Atualizar status'}
        </Button>
        <Button variant="secondary">Enviar mensagem ao tutor</Button>
      </Card>

      <Card>
        <Subheading>Passeio em andamento</Subheading>
        <Caption>
          {isInProgress
            ? `12 min restantes • ${highlightedOpportunity.distanceKm + 0.2} km percorridos`
            : 'Assim que iniciar o passeio, acompanhe métricas aqui.'}
        </Caption>
        <MapPlaceholder />
        <PillRow>
          <Pill variant="active">Marcar pausa</Pill>
          <Pill>Adicionar ocorrência</Pill>
          <Pill>Compartilhar foto</Pill>
        </PillRow>
        <Button onPress={advanceWalkerRide}>
          {isInProgress ? 'Finalizar passeio' : 'Simular andamento'}
        </Button>
      </Card>

      <Card>
        <Subheading>Check-out</Subheading>
        <View style={styles.item}>
          <Body>Duração</Body>
          <Caption>{isFinalizado ? '45 min' : '--'}</Caption>
        </View>
        <View style={styles.item}>
          <Body>Notas</Body>
          <Caption>
            {isFinalizado ? 'Brincou no parque, hidratado e feliz.' : 'Notas serão preenchidas após o passeio.'}
          </Caption>
        </View>
        <Button variant="secondary" onPress={advanceWalkerRide}>
          {isFinalizado ? 'Registrar chegada' : 'Avançar para check-out'}
        </Button>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
});
