import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme';
import { AdminLoginScreen } from '../screens/admin/AdminLoginScreen';
import { AdminApprovalsScreen } from '../screens/admin/AdminApprovalsScreen';
import { AdminMonitorScreen } from '../screens/admin/AdminMonitorScreen';

const Tab = createBottomTabNavigator();

export function AdminNavigator() {
  return (
    <Tab.Navigator
      id="AdminTabs"
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
        name="AdminLogin"
        component={AdminLoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: ({ color, size }) => <Feather name="lock" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="AdminApprovals"
        component={AdminApprovalsScreen}
        options={{
          title: 'Aprovação',
          tabBarIcon: ({ color, size }) => <Feather name="check-circle" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="AdminMonitor"
        component={AdminMonitorScreen}
        options={{
          title: 'Monitorar',
          tabBarIcon: ({ color, size }) => <Feather name="activity" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
