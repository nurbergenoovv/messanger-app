import {
  View,
  TextInput,
  KeyboardTypeOptions,
  EnterKeyHintType,
  ColorValue,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { Eye, EyeOff, Search } from "lucide-react-native";

export default function InputCustom({
  value,
  setValue,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
  autoComplete,
  enterKeyHint = undefined,
  placeholderTextColor = "rgba(255, 255, 255, 0.7)",
  className = "",
  secureTextEntry = undefined,
  maxLength = undefined,
  search = undefined,
  textColor = "white",
  backgroundColor = "bg-white/20"
}: {
  value: string;
  setValue: (email: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoComplete?:
    | "additional-name"
    | "address-line1"
    | "address-line2"
    | "birthdate-day"
    | "birthdate-full"
    | "birthdate-month"
    | "birthdate-year"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-day"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-number"
    | "cc-name"
    | "cc-given-name"
    | "cc-middle-name"
    | "cc-family-name"
    | "cc-type"
    | "country"
    | "current-password"
    | "email"
    | "family-name"
    | "gender"
    | "given-name"
    | "honorific-prefix"
    | "honorific-suffix"
    | "name"
    | "name-family"
    | "name-given"
    | "name-middle"
    | "name-middle-initial"
    | "name-prefix"
    | "name-suffix"
    | "new-password"
    | "nickname"
    | "one-time-code"
    | "organization"
    | "organization-title"
    | "password"
    | "password-new"
    | "postal-address"
    | "postal-address-country"
    | "postal-address-extended"
    | "postal-address-extended-postal-code"
    | "postal-address-locality"
    | "postal-address-region"
    | "postal-code"
    | "street-address"
    | "sms-otp"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-device"
    | "url"
    | "username"
    | "username-new"
    | "off"
    | undefined;
  enterKeyHint?: EnterKeyHintType | undefined;
  placeholderTextColor?: ColorValue | undefined;
  className?: string;
  secureTextEntry?: boolean | undefined
  onKeyPress?: (event: KeyboardEvent) => void
  maxLength?: number | undefined
  search?: boolean | undefined
  textColor?: string
  backgroundColor?: string
}) {
  const [view, setView] = useState<boolean>(false)
  return (
    <View className={`w-full ${backgroundColor} rounded-[10px] flex flex-row items-center justify-center px-[15px] h-[50px] py-4 mb-[15px] ${className}`}>
      {
        search && <Search size={24} color={"white"} className="ml-5 "/>
      }
      <TextInput
        className={` ${secureTextEntry == undefined && search == undefined ? "w-full ml-5" : search ? "ml-3 w-11/12" : "w-11/12"} h-full text-[16px] text-${textColor}`}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={setValue}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        enterKeyHint={enterKeyHint}
        secureTextEntry={secureTextEntry && !view}
        onKeyPress={()=> "sdadadadadada"}
        maxLength={maxLength}
      />
      {
        secureTextEntry == undefined ? <View className="w-[24px] h-[24px]"></View> : 
        view ? <TouchableOpacity onPress={() => setView(!view)}  > <EyeOff color={"white"} size={24}/> </TouchableOpacity> : 
        <TouchableOpacity onPress={() => setView(!view)}  > <Eye color={"white"} size={24}/> </TouchableOpacity>
      }
      
    </View>
  );
}
