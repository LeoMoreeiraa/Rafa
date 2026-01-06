import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme';
import { WalkerOnboardingScreen } from '../screens/walker/WalkerOnboardingScreen';
import { WalkerOpportunitiesScreen } from '../screens/walker/WalkerOpportunitiesScreen';
import { WalkerTrackingScreen } from '../screens/walker/WalkerTrackingScreen';
import { WalkerWalletScreen } from '../screens/walker/WalkerWalletScreen';

const Tab = createBottomTabNavigator();

export function WalkerNavigator() {
  return (
    <Tab.Navigator
      id="WalkerTabs"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: 'rgba(15, 118, 110, 0.12)',
          paddingVertical: 6,
          height: 72,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="WalkerOnboarding"
        component={WalkerOnboardingScreen}
        options={{
          title: 'Onboarding',
          tabBarIcon: ({ color, size }) => <Feather name="shield" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="WalkerAgenda"
        component={WalkerOpportunitiesScreen}
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color, size }) => <Feather name="calendar" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="WalkerTracking"
        component={WalkerTrackingScreen}
        options={{
          title: 'Passeio',
          tabBarIcon: ({ color, size }) => <Feather name="map" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="WalkerWallet"
        component={WalkerWalletScreen}
        options={{
          title: 'Carteira',
          tabBarIcon: ({ color, size }) => <Feather name="dollar-sign" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
