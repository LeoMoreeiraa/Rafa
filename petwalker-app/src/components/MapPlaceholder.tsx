import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../theme';

interface MapPlaceholderProps {
  label?: string;
  height?: number;
}

export function MapPlaceholder({ label = 'Emulação de rota', height = 160 }: MapPlaceholderProps) {
  return (
    <View style={[styles.base, { height }] }>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    backgroundColor: 'rgba(59, 130, 246, 0.35)',
    borderWidth: 1,
    borderColor: 'rgba(34, 211, 238, 0.35)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 12,
  },
  label: {
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    color: colors.text,
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
});
