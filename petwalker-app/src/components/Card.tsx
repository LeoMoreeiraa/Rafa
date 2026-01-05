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
    borderColor: 'rgba(96, 165, 250, 0.25)',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  highlight: {
    borderColor: 'rgba(34, 211, 238, 0.45)',
    shadowColor: colors.accent,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 8,
  },
});
