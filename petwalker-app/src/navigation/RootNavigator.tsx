import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PersonaSelectScreen } from '../screens/PersonaSelectScreen';
import { TutorNavigator } from './TutorNavigator';
import { WalkerNavigator } from './WalkerNavigator';
import { AdminNavigator } from './AdminNavigator';
import { RootStackParamList } from './types';
import { colors } from '../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.surface,
    text: colors.text,
    primary: colors.primary,
    border: 'rgba(148, 163, 184, 0.2)',
    notification: colors.accent,
  },
};

export function RootNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator id="RootStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PersonaSelect" component={PersonaSelectScreen} />
        <Stack.Screen name="Tutor" component={TutorNavigator} />
        <Stack.Screen name="Walker" component={WalkerNavigator} />
        <Stack.Screen name="Admin" component={AdminNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
