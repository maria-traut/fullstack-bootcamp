import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router/js-tabs";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#70c485" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Gallery",
          tabBarIcon: ({ color }) => (
            <Ionicons name="images" size={28} color={color as string} />
          ),
        }}
      />

      <Tabs.Screen
        name="new"
        options={{
          title: "New",
          tabBarIcon: ({ color }) => (
            <Ionicons name="create" size={28} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={28} color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
}
