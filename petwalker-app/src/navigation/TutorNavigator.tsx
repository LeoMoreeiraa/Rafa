import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme';
import { TutorHomeScreen } from '../screens/tutor/TutorHomeScreen';
import { TutorRequestScreen } from '../screens/tutor/TutorRequestScreen';
import { TutorTrackingScreen } from '../screens/tutor/TutorTrackingScreen';
import { TutorFeedbackScreen } from '../screens/tutor/TutorFeedbackScreen';
import { TutorMarketplaceScreen } from '../screens/tutor/TutorMarketplaceScreen';
import { TutorCommunityScreen } from '../screens/tutor/TutorCommunityScreen';

const Tab = createBottomTabNavigator();

export function TutorNavigator() {
  return (
    <Tab.Navigator
      id="TutorTabs"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: 'rgba(148, 163, 184, 0.2)',
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.muted,
      }}
    >
      <Tab.Screen
        name="TutorHome"
        component={TutorHomeScreen}
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="TutorRequest"
        component={TutorRequestScreen}
        options={{
          title: 'Solicitar',
          tabBarIcon: ({ color, size }) => <Feather name="calendar" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="TutorTracking"
        component={TutorTrackingScreen}
        options={{
          title: 'Tracking',
          tabBarIcon: ({ color, size }) => <Feather name="map" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="TutorMarketplace"
        component={TutorMarketplaceScreen}
        options={{
          title: 'Marketplace',
          tabBarIcon: ({ color, size }) => <Feather name="shopping-bag" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="TutorCommunity"
        component={TutorCommunityScreen}
        options={{
          title: 'Comunidade',
          tabBarIcon: ({ color, size }) => <Feather name="users" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="TutorFeedback"
        component={TutorFeedbackScreen}
        options={{
          title: 'Avaliar',
          tabBarIcon: ({ color, size }) => <Feather name="star" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
