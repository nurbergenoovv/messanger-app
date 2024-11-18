import { View, Text } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View className="flex-row items-center w-full mb-[20px]">
          <View className="flex-1 h-[1px] bg-white/50" />
          <Text className="text-white px-[10px] text-[14px]">OR</Text>
          <View className="flex-1 h-[1px] bg-white/50" />
        </View>
  )
}