import { Image, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from '../../components/Card';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { ScreenContainer } from '../../components/Layout';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { usePrototypeData } from '../../context/PrototypeContext';
import { colors, radius, spacing } from '../../theme';

export function TutorMarketplaceScreen() {
  const {
    state: {
      tutor: { marketplace },
    },
    toggleProductFavorite,
    purchaseMarketplaceProduct,
  } = usePrototypeData();

  return (
    <ScreenContainer>
      <Heading>Marketplace PetWalker</Heading>
      <Body>Produtos e serviços curados para manter o tutor fiel e o pet feliz.</Body>

      {marketplace.map((product) => {
        const formattedPrice = product.price.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        return (
          <Card key={product.id}>
          <View style={styles.productHeader}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productMeta}>
              <Subheading>{product.title}</Subheading>
              <Caption>{product.subtitle}</Caption>
                <Body style={styles.price}>R$ {formattedPrice}</Body>
              <PillRow>
                {product.badge ? <Pill variant="active">{product.badge}</Pill> : null}
                <Pill variant={product.stock > 0 ? 'success' : 'warning'}>
                  {product.stock > 0 ? `${product.stock} unidades` : 'Reposição em andamento'}
                </Pill>
              </PillRow>
            </View>
          </View>

          <View style={styles.actions}>
            <Button onPress={() => purchaseMarketplaceProduct(product.id)}>
              {product.stock > 0 ? 'Reservar no carrinho' : 'Avise quando voltar'}
            </Button>
            <Button variant="secondary" onPress={() => toggleProductFavorite(product.id)}>
              <View style={styles.inline}>
                <Feather
                  name={product.favorited ? 'heart' : 'heart'}
                  size={18}
                    color={product.favorited ? colors.accent : colors.muted}
                />
                  <Caption style={styles.inlineText}>{product.favorited ? 'Favoritado' : 'Favoritar'}</Caption>
              </View>
            </Button>
          </View>
          </Card>
        );
      })}

      <Card>
        <Subheading>Curadoria inteligente</Subheading>
        <Body>
          Simule bundles premium e veja como isso aumenta o ticket médio na jornada de onboarding do tutor. Use as
          interações acima para demonstrar engajamento e sense of urgency.
        </Body>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  productHeader: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: radius.md,
  },
  productMeta: {
    flex: 1,
    gap: spacing.sm,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
  actions: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  inlineText: {
    fontWeight: '600',
  },
});
