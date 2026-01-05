import { StyleSheet, View } from 'react-native';
import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { spacing } from '../../theme';
import { usePrototypeData } from '../../context/PrototypeContext';

export function TutorFeedbackScreen() {
  const {
    state: {
      tutor: { nextRide },
    },
    advanceTutorRide,
    resetMockData,
  } = usePrototypeData();

  const rideComplete = nextRide.status === 'concluido';

  return (
    <ScreenContainer>
      <Heading>Checklist e avaliação</Heading>
      <Body>Garanta a entrega segura do cão e dê feedback ao passeador.</Body>

      <Card>
        <Subheading>Checklist de retorno</Subheading>
        <View style={styles.list}>
          <Pill variant="active">Coleira e guia ok</Pill>
          <Pill variant="active">Água servida</Pill>
          <Pill>Observações adicionais</Pill>
        </View>
        <Caption>Notas da Carla</Caption>
        <Body>Thor brincou bastante no parque e socializou bem.</Body>
        <Button onPress={() => !rideComplete && advanceTutorRide()}>
          {rideComplete ? 'Passeio já confirmado' : 'Confirmar retorno'}
        </Button>
      </Card>

      <Card>
        <Subheading>Avaliação</Subheading>
        <PillRow>
          <Pill variant="active">⭐️⭐️⭐️⭐️⭐️</Pill>
          <Pill>Adicionar gorjeta (R$ 5)</Pill>
        </PillRow>
        <Body>Carla cuidou muito bem do Thor! Quero agendar com ela novamente.</Body>
        <Button onPress={resetMockData}>Enviar avaliação</Button>
        <Caption>{rideComplete ? 'Recibo enviado para seu e-mail.' : 'Finalize o retorno para liberar a avaliação.'}</Caption>
        <Button variant="ghost" onPress={resetMockData}>
          Reiniciar simulação
        </Button>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: spacing.sm,
  },
});
