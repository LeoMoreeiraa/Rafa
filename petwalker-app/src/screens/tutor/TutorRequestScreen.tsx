import { StyleSheet, View } from 'react-native';
import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { Button } from '../../components/Buttons';
import { colors, spacing } from '../../theme';
import { usePrototypeData } from '../../context/PrototypeContext';

export function TutorRequestScreen() {
  const {
    state: {
      tutor: { nextRide, demandLevel },
    },
    toggleTutorDemand,
  } = usePrototypeData();

  const demandText = demandLevel === 'alta' ? 'Alta demanda na região. Valores variam +12%.' : 'Demanda normal. Valores balanceados.';
  const gorjetaSugerida = 5;
  const repassePasseador = Math.max(nextRide.price - 13, 0);

  return (
    <ScreenContainer>
      <Heading>Solicitar passeio</Heading>
      <Body>Defina preferências para o Thor e confirme o pedido. Estimativas atualizam em tempo real.</Body>

      <Card>
        <Subheading>Preferências</Subheading>
        <View style={styles.rowBetween}>
          <Body>Thor (principal)</Body>
          <Pill variant="active">Labrador</Pill>
        </View>
        <PillRow>
          <Pill variant="active">45 minutos</Pill>
          <Pill>Parque preferido</Pill>
          <Pill>Adicionar cão extra</Pill>
        </PillRow>
        <View style={styles.notes}>
          <Body>Tutor presente na saída. Necessário reabastecer água a cada 20 minutos.</Body>
        </View>
      </Card>

      <Card>
        <Subheading>Estimativa</Subheading>
        <Body>
          Chegada estimada em {nextRide.etaMinutes} minutos • R$ {nextRide.price} (gorjeta sugerida R$ {gorjetaSugerida})
        </Body>
        <Caption>{demandText}</Caption>
        <View style={styles.rowBetween}>
          <Caption>Taxa PetWalker</Caption>
          <Body>R$ 8</Body>
        </View>
        <View style={styles.rowBetween}>
          <Caption>Passeador</Caption>
          <Body>R$ {repassePasseador}</Body>
        </View>
        <Button>Confirmar solicitação</Button>
        <Button variant="secondary">Cancelar</Button>
        <Button variant="ghost" onPress={toggleTutorDemand}>
          Simular demanda diferente
        </Button>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notes: {
    backgroundColor: 'rgba(15, 118, 110, 0.08)',
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(15, 118, 110, 0.18)',
  },
});
