import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function ButtonCustom({
  onPress,
  disabled = false,
  loading = false,
  text = "",
  className = "",
  textColor = "primary",
  textWeight = "normal",
  textSize = "base",
  backgroundColor = "bg-white",
  google = false,
}: {
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  text: string;
  className?: string;
  textColor?: string;
  textWeight?:
    | "normal"
    | "bold"
    | "medium"
    | "light"
    | "extrabold"
    | "black"
    | "semibold"
    | "mono"
    | "thin"
    | "extralight";
  textSize?:
    | "base"
    | "sm"
    | "lg"
    | "xl"
    | "xs"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | `[${number}px]`;
  backgroundColor?: string;
  google?: boolean;
}) {
  return (
    <TouchableOpacity
      className={`w-full h-[50px] rounded-[10px] flex flex-row justify-center items-center mb-[20px] ${backgroundColor} ${className}`}
      onPress={onPress}
      disabled={disabled}
    >
      {google && <Image source={require("@/assets/images/google.png")} className="w-[28px] h-[28px]"/> }
      <Text className={`text-${textSize} font-${textWeight} text-${textColor}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
