import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Button } from '../components/Buttons';
import { Card } from '../components/Card';
import { Body, Heading, Subheading } from '../components/Typography';
import { ScreenContainer } from '../components/Layout';
import { Pill } from '../components/Pill';
import { PillRow } from '../components/PillRow';
import { spacing } from '../theme';
import { RootStackParamList } from '../navigation/types';

export function PersonaSelectScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <Heading>Escolha a visão</Heading>
      <Body>Explore os fluxos principais de cada persona. Enquanto desenvolvemos, todos os dados exibidos são simulados.</Body>

      <View style={styles.grid}>
        <Card>
          <Subheading>Tutor</Subheading>
          <Body>Agenda passeios confiáveis, acompanha o cão em tempo real e avalia a experiência.</Body>
          <PillRow>
            <Pill variant="active">Matching inteligente</Pill>
            <Pill>Pagamentos in-app</Pill>
            <Pill>Checklist retorno</Pill>
          </PillRow>
          <Button onPress={() => navigation.navigate('Tutor')}>Entrar como Tutor</Button>
        </Card>

        <Card>
          <Subheading>Passeador</Subheading>
          <Body>Gestiona agenda, aceita corridas com transparência de ganho e ganha reputação.</Body>
          <PillRow>
            <Pill variant="active">Agenda diária</Pill>
            <Pill>Controle de ocorrências</Pill>
            <Pill>Carteira semanal</Pill>
          </PillRow>
          <Button onPress={() => navigation.navigate('Walker')}>Entrar como Passeador</Button>
        </Card>

        <Card>
          <Subheading>Admin</Subheading>
          <Body>Time de operações monitora qualidade, aprova cadastros e resolve disputas.</Body>
          <PillRow>
            <Pill variant="active">Monitoramento ao vivo</Pill>
            <Pill>SLAs de suporte</Pill>
            <Pill>Relatórios financeiros</Pill>
          </PillRow>
          <Button onPress={() => navigation.navigate('Admin')}>Entrar como Admin</Button>
        </Card>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: spacing.lg,
  },
});
