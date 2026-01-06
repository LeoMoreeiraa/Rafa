import { useCallback, useMemo, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, radius, spacing } from '../theme';
import { Caption } from './Typography';

type MapPoint = {
  latitude: number;
  longitude: number;
};

interface LiveRouteMapProps {
  path: MapPoint[];
  currentIndex: number;
  currentPosition: MapPoint;
  destination: MapPoint;
  statusLabel: string;
  etaMinutes: number;
}

export function LiveRouteMap({ path, currentIndex, currentPosition, destination, statusLabel, etaMinutes }: LiveRouteMapProps) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  }, []);

  const bounds = useMemo(() => {
    const points = [...path, destination];
    const latitudes = points.map((point) => point.latitude);
    const longitudes = points.map((point) => point.longitude);
    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLong = Math.min(...longitudes);
    const maxLong = Math.max(...longitudes);
    const latRange = Math.max(0.0001, maxLat - minLat);
    const longRange = Math.max(0.0001, maxLong - minLong);
    return { minLat, minLong, latRange, longRange };
  }, [path, destination]);

  const normalize = (point: MapPoint): ViewStyle => {
    if (!dimensions) {
      return { left: 0, top: 0 };
    }

    const leftRatio = (point.longitude - bounds.minLong) / bounds.longRange;
    const topRatio = 1 - (point.latitude - bounds.minLat) / bounds.latRange;
    const clampedLeft = Math.min(1, Math.max(0, leftRatio));
    const clampedTop = Math.min(1, Math.max(0, topRatio));

    return {
      left: clampedLeft * dimensions.width,
      top: clampedTop * dimensions.height,
    };
  };

  const currentStyle = normalize(currentPosition);
  const destinationStyle = normalize(destination);

  return (
    <View style={styles.container}>
      <View style={styles.map} onLayout={handleLayout}>
        {[0.2, 0.4, 0.6, 0.8].map((offset) => (
          <View
            key={`grid-h-${offset}`}
            style={[
              styles.gridLineHorizontal,
              dimensions ? { top: offset * dimensions.height } : null,
            ]}
          />
        ))}
        {[0.25, 0.5, 0.75].map((offset) => (
          <View
            key={`grid-v-${offset}`}
            style={[
              styles.gridLineVertical,
              dimensions ? { left: offset * dimensions.width } : null,
            ]}
          />
        ))}

        {path.map((point, index) => {
          const position = normalize(point);
          const visited = index <= currentIndex;
          return (
            <View
              key={`${point.latitude}-${point.longitude}-${index}`}
              style={[styles.pathNode, position, visited ? styles.pathNodeVisited : styles.pathNodePending]}
            />
          );
        })}

        <View style={[styles.destinationPulse, destinationStyle]} />
        <Feather
          name="flag"
          size={18}
          color={colors.accent}
          style={[styles.destinationIcon, destinationStyle as TextStyle]}
        />

        <View style={[styles.avatarRing, currentStyle]} />
        <Feather
          name="navigation"
          size={22}
          color={colors.primary}
          style={[styles.currentIcon, currentStyle as TextStyle]}
        />
      </View>
      <View style={styles.legend}>
        <Caption style={styles.legendText}>Status: {statusLabel}</Caption>
        <Caption style={styles.legendText}>
          Próxima atualização em {etaMinutes > 0 ? `${etaMinutes} min` : 'instantes'}
        </Caption>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  map: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1.4,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceAlt,
    overflow: 'hidden',
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(15, 118, 110, 0.12)',
  },
  gridLineHorizontal: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(15, 118, 110, 0.12)',
  },
  gridLineVertical: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(15, 118, 110, 0.12)',
  },
  pathNode: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: -6,
    marginTop: -6,
  },
  pathNodeVisited: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOpacity: 0.45,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
  },
  pathNodePending: {
    backgroundColor: 'rgba(15, 118, 110, 0.12)',
  },
  destinationPulse: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 11,
    marginLeft: -11,
    marginTop: -11,
    backgroundColor: 'rgba(15, 118, 110, 0.18)',
  },
  destinationIcon: {
    position: 'absolute',
    marginLeft: -9,
    marginTop: -10,
  },
  avatarRing: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: 'rgba(15, 118, 110, 0.12)',
    marginLeft: -14,
    marginTop: -14,
  },
  currentIcon: {
    position: 'absolute',
    marginLeft: -11,
    marginTop: -11,
    transform: [{ rotate: '45deg' }],
  },
  legend: {
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    borderWidth: 1,
    borderColor: 'rgba(15, 118, 110, 0.12)',
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: spacing.md,
    rowGap: spacing.xs,
  },
  legendText: {
    color: colors.muted,
  },
});
