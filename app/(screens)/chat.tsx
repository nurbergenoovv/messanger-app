import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { ArrowLeft, MoreVertical, Paperclip, Send } from "lucide-react-native";
import { router } from "expo-router";

export default function Component() {
  const messages = [
    { id: 1, sender: "other", content: "Привет! Как дела?", time: "10:00" },
    {
      id: 2,
      sender: "me",
      content: "Привет! Все хорошо, спасибо. Как ты?",
      time: "10:02",
    },
    {
      id: 3,
      sender: "other",
      content: "Тоже неплохо. Готов к нашей встрече сегодня?",
      time: "10:05",
    },
    {
      id: 4,
      sender: "me",
      content: "Да, конечно! В 14:00 в кафе, верно?",
      time: "10:07",
    },
    {
      id: 5,
      sender: "other",
      content: "Именно так. Не могу дождаться!",
      time: "10:08",
    },
    { id: 6, sender: "me", content: "Я тоже! До встречи!", time: "10:10" },
  ];

  return (
    <SafeAreaView className="w-full flex flex-col h-screen">
      <View className="w-full px-4 py-2 flex-row items-center justify-between border-b border-gray-200">
        <View className="w-full flex flex-row items-center justify-between space-x-3">
          <TouchableOpacity
            className="text-gray-600"
            onPress={() => router.back()}
          >
            <ArrowLeft className="h-8 w-8 text-primary" />
          </TouchableOpacity>
          <View>
            <Text className="text-center text-lg font-bold text-gray-800">
              Анна Иванова
            </Text>
            <Text>
              <Text className="text-center text-xs text-gray-500 font-light">
                Сегодня, 12:00
              </Text>
            </Text>
          </View>
          <View className="h-10 w-10 rounded-full">
            <Image
              source={require("@/assets/images/user.jpg")}
              className="w-10 h-10 rounded-full"
              alt="User"
            />
          </View>
        </View>
      </View>
      <KeyboardAvoidingView behavior="padding" className="flex-1 max-w-full">
        {/* Messages */}
        <ScrollView className="flex-grow px-4 py-6" snapToEnd>
          <View className="space-y-4">
            {messages.map((message) => (
              <View
                key={message.id}
                className={`flex-row ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <View
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === "me"
                      ? "bg-blue-500 text-white"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  <Text className="text-sm">{message.content}</Text>
                  <Text
                    className={`text-xs mt-1 ${
                      message.sender === "me"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.time}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Message input */}
        <View className="bg-white border-t border-gray-200 p-4">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="text-gray-400 hover:text-gray-600">
              <Paperclip className="h-5 w-5 text-primary" />
            </TouchableOpacity>
            <TextInput
              className="flex-grow bg-transparent border-none focus:ring-0 text-sm text-gray-800 placeholder-black/75"
              placeholder="Введите сообщение..."
              placeholderTextColor={"gray"}
            />
            <TouchableOpacity className="bg-primary text-white hover:bg-primary/75 w-9 h-9 items-center justify-center rounded-full">
              <Send className="text-white ml-[-2px]" size={20}/>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
