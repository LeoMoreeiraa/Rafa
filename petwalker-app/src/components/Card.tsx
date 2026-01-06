import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, radius, spacing } from '../theme';

interface CardProps {
  children?: ReactNode;
  variant?: 'default' | 'highlight';
}

export function Card({ children, variant = 'default' }: CardProps) {
  return <View style={[styles.base, variant === 'highlight' && styles.highlight]}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: 'rgba(15, 118, 110, 0.12)',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  highlight: {
    borderColor: 'rgba(15, 118, 110, 0.35)',
    shadowColor: colors.primary,
    shadowOpacity: 0.14,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 6,
  },
});
