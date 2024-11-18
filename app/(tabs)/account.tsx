import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  Button,
} from "react-native";
import {
  ChevronRight,
  Bell,
  Lock,
  UserPlus,
  HelpCircle,
  LogOut,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Component() {
  return (
	
    <SafeAreaView className="flex flex-col h-screen">
      <View className="pt-5 pl-5 shadow">
	  <Text className="text-2xl font-medium">Account</Text>
      </View>

      <ScrollView className="flex-grow">
        <View className="w-full p-4 space-y-6">
          <View className="bg-white p-4 rounded-lg shadow flex flex-row items-center space-x-4">
            <View className="h-20 w-20 rounded-full">
              <Image source={require("@/assets/images/user.jpg")} className="w-20 h-20 rounded-full" alt="User" />
            </View>
            <View>
              <Text className="text-xl font-semibold">Иван Петров</Text>
              <Text className="text-gray-500">+7 (999) 123-45-67</Text>
              <TouchableOpacity className="flex flex-row p-0 h-auto text-blue-500">
                <Text>Изменить</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Account Settings */}
          <View className="bg-white p-4 rounded-lg shadow space-y-4">
            <Text className="font-semibold mb-2">Настройки аккаунта</Text>
            <TouchableOpacity className="flex flex-row items-center justify-between w-full shadow py-1">
              <View className="flex flex-row items-center space-x-3">
                <Bell className="h-5 w-5 text-primary" />
                <Text>Уведомления</Text>
              </View>
              <Switch />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center justify-between w-full shadow py-1">
              <View className="flex flex-row items-center space-x-3">
                <Lock className="h-5 w-5 text-primary" />
                <Text>Конфиденциальность</Text>
              </View>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center justify-between w-full shadow py-1">
              <View className="flex flex-row items-center space-x-3">
                <UserPlus className="h-5 w-5 text-primary" />
                <Text>Пригласить друзей</Text>
              </View>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </TouchableOpacity>
          </View>

          {/* Support */}
          <View className="bg-white p-4 rounded-lg shadow space-y-4">
            <Text className="font-semibold mb-2">Поддержка</Text>
            <TouchableOpacity className="flex flex-row items-center justify-between w-full shadow py-1">
              <View className="flex flex-row items-center space-x-3">
                <HelpCircle className="h-5 w-5 text-primary" />
                <Text>Помощь</Text>
              </View>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="w-full flex flex-row items-center justify-center bg-primary py-4 rounded-lg">
            <LogOut className="h-5 w-5 mr-2 text-white" />
			<Text className="font-semibold text-white">
            	Выйти
			</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
