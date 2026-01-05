import { StyleSheet, View } from 'react-native';
import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { spacing } from '../../theme';
import { usePrototypeData } from '../../context/PrototypeContext';

export function WalkerOpportunitiesScreen() {
  const {
    state: {
      walker: { agenda, highlightedOpportunity, rideStatus },
    },
    toggleWalkerOpportunity,
    advanceWalkerRide,
  } = usePrototypeData();

  const rideStatusLabel: Record<typeof rideStatus, string> = {
    livre: 'Pronto para aceitar novas corridas',
    aceitou: 'Corrida aceita — confira briefing antes de iniciar',
    'em-andamento': 'Passeio em andamento — registre ocorrências',
    finalizado: 'Passeio finalizado — envie check-out',
  };

  return (
    <ScreenContainer>
      <Heading>Agenda do dia</Heading>
      <Body>Confira seus passeios confirmados e novas oportunidades perto de você.</Body>
      <Caption>{rideStatusLabel[rideStatus]}</Caption>

      <Card>
        <Subheading>Hoje, 12 de março</Subheading>
        {agenda.map((item) => (
          <View key={item.name} style={styles.item}>
            <View>
              <Body>
                {item.name} • {item.time}
              </Body>
              <Caption>{item.status === 'confirmado' ? '45 min • Vila Madalena' : '30 min • Pinheiros'}</Caption>
            </View>
            <Pill variant={item.status === 'confirmado' ? 'success' : 'warning'}>
              {item.status === 'confirmado' ? 'Confirmado' : 'Checar notas'}
            </Pill>
          </View>
        ))}
        <Button variant="secondary" onPress={advanceWalkerRide}>
          {rideStatus === 'finalizado' ? 'Reiniciar agenda (reset na avaliação)' : 'Atualizar status do dia'}
        </Button>
      </Card>

      <Card>
        <Subheading>Oportunidade em destaque</Subheading>
        <Body>
          {highlightedOpportunity.name} precisa de passeio • Chegada em {highlightedOpportunity.etaMinutes} min • R${' '}
          {highlightedOpportunity.reward} + gorjeta
        </Body>
        <PillRow>
          <Pill variant="active">{highlightedOpportunity.distanceKm} km distância</Pill>
          {highlightedOpportunity.requirements.map((req) => (
            <Pill key={req}>{req}</Pill>
          ))}
        </PillRow>
        <Button onPress={toggleWalkerOpportunity}>
          {highlightedOpportunity.accepted ? 'Cancelar aceite' : 'Aceitar corrida'}
        </Button>
        <Button variant="secondary" onPress={advanceWalkerRide}>
          {rideStatus === 'aceitou' ? 'Iniciar passeio' : 'Ver mais detalhes'}
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
