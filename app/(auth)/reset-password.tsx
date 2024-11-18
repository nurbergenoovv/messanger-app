import { useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import ButtonCustom from "@/components/button/ButtonCustom";
import InputCustom from "@/components/input/InputCustom";
import { router } from "expo-router";

export default function ResetPassScreen() {
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = () => console.log("Login with:", newPassword);

  return (
    <KeyboardAvoidingView behavior="padding" className="bg-primary flex-1">
      <View className="items-center justify-center flex-1 p-5">
        <Text className="text-white font-bold text-[28px] mb-[10px]">
        Reset Password
        </Text>
        <Text className="text-base text-white/80 text-center mb-[30px]">
          Enter your code from your email and new password to continue
        </Text>

        <InputCustom
          value={otp}
          setValue={setOtp}
          placeholder="Code"
          keyboardType="numeric"
          maxLength={4}
          autoComplete="sms-otp"
        />
        <InputCustom
          value={newPassword}
          setValue={setNewPassword}
          placeholder="New Password"
          keyboardType="visible-password"
          secureTextEntry
          autoComplete="password-new"
        />
        <ButtonCustom
          text="Next"
          onPress={handleLogin}
          textColor="[#333]"
          textWeight="bold"
          textSize="[18px]"
        />
      </View>
    </KeyboardAvoidingView>
  );
}
