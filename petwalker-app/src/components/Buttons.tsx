import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onPress?: () => void;
}

export function Button({ children, variant = 'primary', onPress }: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.base, styles[variant], pressed && styles.pressed]}>
      {typeof children === 'string' ? (
        <Text style={[styles.text, variant === 'ghost' && styles.ghostText]}>{children}</Text>
      ) : (
        <View style={styles.customContent}>{children}</View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.md,
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: 'rgba(148, 163, 184, 0.18)',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.85,
  },
  text: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
  ghostText: {
    color: colors.muted,
  },
  customContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
});
