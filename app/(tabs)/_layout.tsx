import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#58cc02",
        headerStyle: {
          backgroundColor: "#58cc02"
        },
        headerShadowVisible: false,
        headerTintColor: "#222",
        tabBarStyle: {
          backgroundColor: "#777"
        }
      }}
    >
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "home-sharp" : "home-outline"} size={30} color={color} />
      }} />
      <Tabs.Screen name="about" options={{
        title: 'About',
        tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={30} color={color} />
      }} />
    </Tabs>

  );
}
