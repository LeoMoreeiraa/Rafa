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
    backgroundColor: 'rgba(148, 163, 184, 0.15)',
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
    backgroundColor: 'rgba(37, 99, 235, 0.28)',
  },
  success: {
    backgroundColor: 'rgba(52, 211, 153, 0.22)',
  },
  warning: {
    backgroundColor: 'rgba(250, 204, 21, 0.2)',
  },
  danger: {
    backgroundColor: 'rgba(248, 113, 113, 0.2)',
  },
});

const variantTextStyles = StyleSheet.create({
  default: {},
  active: {
    color: colors.text,
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
