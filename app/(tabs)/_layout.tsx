import { Tabs } from "expo-router";
import { Mails, User } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5d42f5",
        headerShown: false,
        tabBarStyle: { paddingTop: 11},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => <Mails size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <User size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
