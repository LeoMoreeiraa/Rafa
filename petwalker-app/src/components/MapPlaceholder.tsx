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
    backgroundColor: 'rgba(15, 118, 110, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(15, 118, 110, 0.22)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 12,
  },
  label: {
    backgroundColor: 'rgba(15, 118, 110, 0.9)',
    color: '#ffffff',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
});
