import { Fragment } from 'react'
import { Stack } from "expo-router"
import { Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <Fragment>
      <StatusBar />
      <Stack screenOptions={{
        headerShown: false,
        gestureEnabled: Platform.OS === 'ios',
      }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </Fragment>
  )
}
