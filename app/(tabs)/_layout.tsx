import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarActiveTintColor: "#ffd33d",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused? "home-sharp" : "home-outline"} size={30}/>        
        }} />
      <Tabs.Screen name="about" options={{ title: 'About',
        tabBarActiveTintColor: "#ffd33d",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={30}/>
       }} />
    </Tabs>
    
  );
}
