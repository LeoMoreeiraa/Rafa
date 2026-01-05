import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { spacing } from '../theme';

interface PillRowProps {
  children?: ReactNode;
}

export function PillRow({ children }: PillRowProps) {
  return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
});
