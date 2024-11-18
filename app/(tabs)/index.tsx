import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { EllipsisVertical, SquarePen } from "lucide-react-native";
import InputCustom from "@/components/input/InputCustom";
import ChatCard from "@/components/message-card";

export default function Main() {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <SafeAreaView className="p-5">
      <View className="flex flex-row justify-between mb-5">
        <Text className="text-2xl font-medium">Chats</Text>

        <View className="flex flex-row gap-5">
          <Link href={"/(auth)/password"}>
            <SquarePen color={"black"} />
          </Link>
          <Link href={"/(auth)/password"}>
            <EllipsisVertical color={"black"} />
          </Link>
        </View>
      </View>
      <InputCustom
        value={searchText}
        setValue={setSearchText}
        textColor="white"
        placeholderTextColor={"white"}
        placeholder="Search"
        backgroundColor="bg-primary/100"
        search
      />
      
	  <FlatList
    className="mb-[65px]"
        data={[
          {key: true, id: 1},
          {key: false, id: 2},
          {key: false, id: 3},
          {key: false, id: 4},
          {key: true, id: 5},
          {key: true, id: 6},
          {key: false, id: 7},
          {key: true, id: 8},
          {key: false, id: 9},
          {key: false, id: 10},
          {key: false, id: 11},
          {key: true, id: 12},
          {key: false, id: 13},
          {key: true, id: 14},
          {key: true, id: 15},
          {key: false, id: 16},
          {key: false, id: 17},
          {key: false, id: 18},
        ]}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={({item, index}) => <ChatCard isNew={item.key} key={index}/>}
      />

    </SafeAreaView>
  );
}
