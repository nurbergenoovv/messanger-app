import { useState } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import ButtonCustom from "@/components/button/ButtonCustom";
import InputCustom from "@/components/input/InputCustom";
import { router } from "expo-router";

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirumPassword, setConfirumPassword] = useState("");

  const handleLogin = () => console.log("Login with:", password);

  return (
    <KeyboardAvoidingView behavior="padding" className="bg-primary flex-1">
      <View className="items-center justify-center flex-1 p-5">
        <Text className="text-white font-bold text-[28px] mb-[10px]">
          Sign Up
        </Text>
        <Text className="text-base text-white/80 text-center mb-[30px]">
          Create new account
        </Text>
        <InputCustom
          value={firstName}
          setValue={setFirstName}
          placeholder="First name"
          keyboardType="default"
          autoCapitalize="words"
        />
        <InputCustom
          value={lastName}
          setValue={setLastName}
          placeholder="Last name"
          keyboardType="default"
          autoCapitalize="words"
        />
        <InputCustom
          value={password}
          setValue={setPassword}
          placeholder="Password"
          keyboardType="visible-password"
          secureTextEntry
        />
        <InputCustom
          value={confirumPassword}
          setValue={setConfirumPassword}
          placeholder="Confirum Password"
          keyboardType="visible-password"
          secureTextEntry
        />
        <ButtonCustom
          text="Sign Up"
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
          onPress={() => router.back()}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
