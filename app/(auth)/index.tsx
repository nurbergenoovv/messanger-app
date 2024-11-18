import { useState } from "react";
import { View, Text, KeyboardAvoidingView, Alert } from "react-native";
import { useAuthRequest } from "expo-auth-session/providers/google";
import ButtonCustom from "@/components/button/ButtonCustom";
import Interval from "@/components/interval";
import InputCustom from "@/components/input/InputCustom";
import { Link, router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");

  const [request, response, promptAsync] = useAuthRequest({
    clientId:
      "94301005306-s6j1npidg2b2n77g2si33tih88aitc6h.apps.googleusercontent.com",
    androidClientId:
      "94301005306-s6j1npidg2b2n77g2si33tih88aitc6h.apps.googleusercontent.com",
    iosClientId: "",
    language: "en",
    redirectUri:
      "com.defiveninth.reminder:redirectUri:exp://10.0.3.42:8081/auth",
  });

  const handleLogin = () => {
    console.log("Login with:", email);
    router.navigate("/(auth)/register");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await promptAsync();
      if (result.type === "success") {
        const { id_token } = result.params;
        console.log("Google login success! Token:", id_token);
        Alert.alert("Logged in with Google", `Token: ${id_token}`);
      } else {
        console.log("Google login failed:", result);
        console.log(response);
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" className="bg-primary flex-1">
      <View className="items-center justify-center flex-1 p-5">
        <Text className="text-white font-bold text-[28px] mb-[10px]">
          Start with Email
        </Text>
        <Text className="text-base text-white/80 text-center mb-[30px]">
          Enter your email to continue
        </Text>

        <InputCustom
          value={email}
          setValue={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          enterKeyHint="done"
        />
        <ButtonCustom
          text="Next"
          onPress={handleLogin}
          textColor="[#333]"
          textWeight="bold"
          textSize="[20px]"
        />
        <Interval />
        <ButtonCustom
          text=" Continue with Google"
          onPress={handleGoogleLogin}
          textColor="[#333]"
          textWeight="bold"
          textSize="[20px]"
          disabled={!request}
          google
        />
        <Link href={"/_sitemap"}>Nav</Link>
      </View>
    </KeyboardAvoidingView>
  );
}
