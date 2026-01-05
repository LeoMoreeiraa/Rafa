import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator';
import { colors } from './src/theme';
import { PrototypeProvider } from './src/context/PrototypeContext';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <PrototypeProvider>
        <View style={styles.container}>
          <StatusBar style="light" />
          <RootNavigator />
        </View>
      </PrototypeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
