import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from '../../components/Card';
import { Heading, Body, Subheading, Caption } from '../../components/Typography';
import { Button } from '../../components/Buttons';
import { ScreenContainer } from '../../components/Layout';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { colors, spacing, radius } from '../../theme';
import { LiveRouteMap } from '../../components/LiveRouteMap';
import { usePrototypeData } from '../../context/PrototypeContext';

export function TutorHomeScreen() {
  const navigation = useNavigation<any>();
  const {
    state: {
      tutor: { nextRide, healthCompletion, demandLevel, map, marketplace, communityFeed },
    },
    toggleTutorDemand,
  } = usePrototypeData();

  const statusLabelMap: Record<typeof nextRide.status, string> = {
    'aguardando': 'Aguardando confirmação',
    'buscando': 'Buscando passeador',
    'a-caminho': 'Passeador a caminho',
    'passeando': 'Passeio em andamento',
    'retornando': 'Retornando para casa',
    'concluido': 'Passeio concluído',
  };

  const etaLabel = nextRide.status === 'concluido' ? 'Concluído' : `Chegada em ${nextRide.etaMinutes} min`;
  const demandPillVariant = demandLevel === 'alta' ? 'warning' : 'default';
  const demandLabel = demandLevel === 'alta' ? 'Alta demanda' : 'Demanda normal';
  const featuredProduct = marketplace[0];
  const latestCommunityPost = communityFeed[0];
  const formattedPrice = nextRide.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <ScreenContainer>
      <Heading>Olá, Ana 👋</Heading>
      <Body>Seu próximo passeio está {nextRide.status === 'concluido' ? 'finalizado' : 'em andamento'}.</Body>

      <Card>
        <Subheading>Próximo passeio</Subheading>
        <Caption>Hoje, 17h • Thor (Labrador)</Caption>
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
          <Pill>{etaLabel}</Pill>
          <Pill>Preço estimado R$ {formattedPrice}</Pill>
        </PillRow>
        <Button>Solicitar novo passeio</Button>
        <Button variant="secondary">Ver histórico</Button>
      </Card>

      <View style={styles.grid}>
        <Card>
          <Subheading>Saúde do Thor</Subheading>
          <Body>Você alcançou {Math.round(healthCompletion * 100)}% da meta semanal de atividade.</Body>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${healthCompletion * 100}%` }]} />
          </View>
          <Caption>Manter rotina atual garante bem-estar.</Caption>
        </Card>
        <Card>
          <Subheading>Comunicados</Subheading>
          <Body>Nova área verde liberada para passeios no bairro.</Body>
          <PillRow>
            <Pill variant="success">Recomendado</Pill>
            <Pill>Parque das Flores</Pill>
            <Pill variant={demandPillVariant}>{demandLabel}</Pill>
          </PillRow>
          <Button variant="secondary" onPress={toggleTutorDemand}>
            Alternar cenário de demanda
          </Button>
        </Card>
      </View>

      {featuredProduct ? (
        <Card variant="highlight">
          <Subheading>Marketplace em destaque</Subheading>
          <Caption>{featuredProduct.badge ?? 'Curado para você'}</Caption>
          <View style={styles.marketplacePreview}>
            <Image source={{ uri: featuredProduct.image }} style={styles.marketplaceImage} />
            <View style={styles.marketplaceCopy}>
              <Body style={styles.marketplaceTitle}>{featuredProduct.title}</Body>
              <Caption>{featuredProduct.subtitle}</Caption>
              <Pill variant="success">R$ {featuredProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Pill>
            </View>
          </View>
          <Button onPress={() => navigation.navigate('TutorMarketplace')}>Explorar marketplace</Button>
        </Card>
      ) : null}

      {latestCommunityPost ? (
        <Card>
          <Subheading>Movimento na comunidade</Subheading>
          <Caption>
            {latestCommunityPost.author} • {latestCommunityPost.role}
          </Caption>
          {latestCommunityPost.image ? (
            <Image source={{ uri: latestCommunityPost.image }} style={styles.communityImage} />
          ) : null}
          <Body numberOfLines={3}>{latestCommunityPost.content}</Body>
          <PillRow>
            <Pill variant="active">{latestCommunityPost.likes} curtidas</Pill>
            <Pill>{latestCommunityPost.comments} comentários</Pill>
          </PillRow>
          <Button variant="secondary" onPress={() => navigation.navigate('TutorCommunity')}>
            Abrir hub da comunidade
          </Button>
        </Card>
      ) : null}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    gap: spacing.md,
    flexWrap: 'wrap',
  },
  progressBar: {
    height: 10,
    backgroundColor: 'rgba(15, 118, 110, 0.12)',
    borderRadius: 999,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    width: '80%',
    backgroundColor: colors.primary,
  },
  marketplacePreview: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  marketplaceImage: {
    width: 96,
    height: 96,
    borderRadius: radius.md,
  },
  marketplaceCopy: {
    flex: 1,
    gap: spacing.xs,
  },
  marketplaceTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  communityImage: {
    width: '100%',
    height: 180,
    borderRadius: radius.md,
  },
});
