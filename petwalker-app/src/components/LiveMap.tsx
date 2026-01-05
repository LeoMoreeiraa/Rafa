import { memo, useMemo } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { colors, radius } from '../theme';

export type CoordinatePoint = {
  latitude: number;
  longitude: number;
};

interface LiveMapProps {
  path: CoordinatePoint[];
  currentPosition: CoordinatePoint;
  destination: CoordinatePoint;
  height?: number;
}

function LiveMapComponent({ path, currentPosition, destination, height = 240 }: LiveMapProps) {
  const region = useMemo(() => {
    const latitudes = path.length ? path.map((point) => point.latitude) : [currentPosition.latitude];
    const longitudes = path.length ? path.map((point) => point.longitude) : [currentPosition.longitude];

    const minLat = Math.min(...latitudes, destination.latitude, currentPosition.latitude);
    const maxLat = Math.max(...latitudes, destination.latitude, currentPosition.latitude);
    const minLng = Math.min(...longitudes, destination.longitude, currentPosition.longitude);
    const maxLng = Math.max(...longitudes, destination.longitude, currentPosition.longitude);

    const latitudeDelta = Math.max(0.005, maxLat - minLat + 0.004);
    const longitudeDelta = Math.max(0.005, maxLng - minLng + 0.004);

    return {
      latitude: (minLat + maxLat) / 2,
      longitude: (minLng + maxLng) / 2,
      latitudeDelta,
      longitudeDelta,
    };
  }, [path, currentPosition, destination]);

  return (
    <View style={[styles.wrapper, { height }]}>
      <MapView
        style={styles.map}
        region={region}
        scrollEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}
        zoomEnabled={false}
        pointerEvents="none"
      >
        {path.length ? (
          <Polyline
            coordinates={path}
            strokeColor={colors.primaryLight}
            strokeWidth={4}
            lineDashPattern={[10, 6]}
          />
        ) : null}
        <Marker coordinate={currentPosition} pinColor={colors.accent}>
          <View style={styles.marker} />
        </Marker>
        <Marker coordinate={destination} pinColor={colors.primary}>
          <View style={[styles.marker, styles.destinationMarker]} />
        </Marker>
      </MapView>
    </View>
  );
}

export const LiveMap = memo(LiveMapComponent);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginVertical: 12,
  },
  map: {
    flex: 1,
  },
  marker: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.background,
  },
  destinationMarker: {
    backgroundColor: colors.primary,
  },
});
