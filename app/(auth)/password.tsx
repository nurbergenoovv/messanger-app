import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import ButtonCustom from "@/components/button/ButtonCustom";
import InputCustom from "@/components/input/InputCustom";
import { Link, router } from "expo-router";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");

  const handleLogin = () => console.log("Login with:", password);

  return (
    <KeyboardAvoidingView behavior="padding" className="bg-primary flex-1">
      <View className="items-center justify-center flex-1 p-5">
        <Text className="text-white font-bold text-[28px] mb-[10px]">
        Continue with password
        </Text>
        <Text className="text-base text-white/80 text-center mb-[30px]">
          Enter your password to continue
        </Text>

        <InputCustom
          value={password}
          setValue={setPassword}
          placeholder="Password"
          keyboardType="visible-password"
          secureTextEntry
        />
        <ButtonCustom
          text="Next"
          onPress={handleLogin}
          textColor="[#333]"
          textWeight="bold"
          textSize="[18px]"
        />
         <ButtonCustom
          text="Back"
          textColor="white"
          textWeight="bold"
          textSize="[18px]"
          backgroundColor="bg-black/75"
          onPress={()=> router.back()}
        />
        <TouchableOpacity onPress={()=>{}} ></TouchableOpacity>
        <Link href={"/(auth)/reset-password"} className="text-right w-full px-2 font-bold text-white">Reset Password</Link>
      </View>
    </KeyboardAvoidingView>
  );
}
