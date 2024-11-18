import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function ChatCard({ isNew = false }: { isNew?: boolean }) {
  return (
    <TouchableOpacity
      className="w-full p-3 bg-white rounded-lg shadow flex flex-row items-center"
      onPress={() => router.navigate("/(screens)/chat")}
    >
      <Image
        source={require("@/assets/images/user.jpg")}
        className="w-[50px] h-[50px] aspect-square rounded-full"
      />
      <View className="pl-3 w-10/12 h-full">
        <View className="w-fit flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Jonny Adam</Text>
          <Text className="text-sm text-gray-500 font-semibold">20:00</Text>
        </View>
        <View className="w-fit flex flex-row justify-between items-center">
          <Text className="text-sm text-gray-500 truncate">
            Lorem ipsum, dolor sit asdasdet c...
          </Text>
          {isNew && (
            <View className="w-7 h-7 flex flex-col items-center justify-center bg-primary rounded-3xl">
              <Text className="text-white text-sm font-semibold">2</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
