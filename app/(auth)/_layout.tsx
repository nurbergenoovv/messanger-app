import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="password"/>
      <Stack.Screen name="reset-password"/>
      <Stack.Screen name="register"/>
    </Stack>
  )
}