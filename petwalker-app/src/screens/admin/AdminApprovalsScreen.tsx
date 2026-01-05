import { StyleSheet, View } from 'react-native';
import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { spacing } from '../../theme';

export function AdminApprovalsScreen() {
  return (
    <ScreenContainer>
      <Heading>Aprovação de passeadores</Heading>
      <Body>Monitore o SLA e revise cadastros pendentes.</Body>

      <Card>
        <Subheading>Pendências</Subheading>
        <Body>14 cadastros aguardando • SLA médio 6h • Meta 12h</Body>
        <View style={styles.item}>
          <View>
            <Body>Carla Mendes</Body>
            <Caption>Docs ok • Antecedentes pendente</Caption>
          </View>
          <Button variant="secondary">Revisar</Button>
        </View>
        <View style={styles.item}>
          <View>
            <Body>João Lima</Body>
            <Caption>Novo • Raio sugerido 8 km</Caption>
          </View>
          <Button variant="secondary">Revisar</Button>
        </View>
      </Card>

      <Card>
        <Subheading>Checklist de aprovação</Subheading>
        <View style={styles.item}>
          <Body>Documento oficial</Body>
          <Pill variant="success">OK</Pill>
        </View>
        <View style={styles.item}>
          <Body>Antecedentes</Body>
          <Pill variant="warning">Revisar</Pill>
        </View>
        <Button>Aprovar passeador</Button>
        <Button variant="secondary">Reprovar com motivo</Button>
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
