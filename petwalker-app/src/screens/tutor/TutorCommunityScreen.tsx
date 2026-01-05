import { Image, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ScreenContainer } from '../../components/Layout';
import { Card } from '../../components/Card';
import { PillRow } from '../../components/PillRow';
import { Pill } from '../../components/Pill';
import { Button } from '../../components/Buttons';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { usePrototypeData } from '../../context/PrototypeContext';
import { colors, radius, spacing } from '../../theme';

export function TutorCommunityScreen() {
  const {
    state: {
      tutor: { communityFeed },
    },
    togglePostLike,
    togglePostSave,
  } = usePrototypeData();

  return (
    <ScreenContainer>
      <Heading>Hub da comunidade</Heading>
      <Body>Feed em tempo real com curadoria de passeadores, tutores e especialistas parceiros.</Body>

      {communityFeed.map((post) => (
        <Card key={post.id}>
          <View style={styles.header}>
            <View style={styles.avatarPlaceholder}>
              <Caption style={styles.avatarInitial}>{post.author.charAt(0)}</Caption>
            </View>
            <View style={styles.headerText}>
              <Subheading>{post.author}</Subheading>
              <Caption>
                {post.role} • {post.publishedAt}
              </Caption>
            </View>
          </View>

          {post.image ? <Image source={{ uri: post.image }} style={styles.postImage} /> : null}

          <Body>{post.content}</Body>

          <PillRow>
            {post.highlights.map((highlight) => (
              <Pill key={`${post.id}-${highlight}`} variant="active">
                #{highlight}
              </Pill>
            ))}
          </PillRow>

          <View style={styles.socialRow}>
            <Caption>{post.likes} curtidas • {post.comments} comentários</Caption>
          </View>

          <View style={styles.actions}>
            <Button variant="secondary" onPress={() => togglePostLike(post.id)}>
              <View style={styles.inline}>
                <Feather
                  name={post.liked ? 'thumbs-up' : 'thumbs-up'}                  size={18}
                  color={post.liked ? colors.accent : colors.text}
                />
                <Body style={styles.inlineText}>{post.liked ? 'Curtido' : 'Curtir'}</Body>
              </View>
            </Button>
            <Button variant="secondary" onPress={() => togglePostSave(post.id)}>
              <View style={styles.inline}>
                <Feather
                  name={post.saved ? 'bookmark' : 'bookmark'}
                  size={18}
                  color={post.saved ? colors.accent : colors.text}
                />
                <Body style={styles.inlineText}>{post.saved ? 'Salvo' : 'Salvar'}</Body>
              </View>
            </Button>
          </View>
        </Card>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: {
    fontSize: 18,
    color: colors.primaryLight,
  },
  postImage: {
    width: '100%',
    height: 180,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
  },
  socialRow: {
    marginTop: spacing.sm,
  },
  actions: {
    marginTop: spacing.sm,
    flexDirection: 'row',
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
