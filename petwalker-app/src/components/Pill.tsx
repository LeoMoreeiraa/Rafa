import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

interface PillProps {
  children?: ReactNode;
  variant?: 'default' | 'active' | 'success' | 'warning' | 'danger';
}

export function Pill({ children, variant = 'default' }: PillProps) {
  return (
    <View style={[styles.base, variantStyles[variant]]}>
      <Text style={[styles.text, variantTextStyles[variant]]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: 'rgba(15, 118, 110, 0.08)',
  },
  text: {
    color: colors.muted,
    fontSize: typography.caption,
    fontWeight: '500',
  },
});

const variantStyles = StyleSheet.create({
  default: {},
  active: {
    backgroundColor: 'rgba(15, 118, 110, 0.18)',
  },
  success: {
    backgroundColor: 'rgba(22, 163, 74, 0.18)',
  },
  warning: {
    backgroundColor: 'rgba(249, 115, 22, 0.18)',
  },
  danger: {
    backgroundColor: 'rgba(220, 38, 38, 0.16)',
  },
});

const variantTextStyles = StyleSheet.create({
  default: {},
  active: {
    color: colors.primary,
  },
  success: {
    color: colors.success,
  },
  warning: {
    color: colors.warning,
  },
  danger: {
    color: colors.danger,
  },
});
