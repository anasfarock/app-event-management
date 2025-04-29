import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function OtpVerificationScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    // Verify OTP logic
    navigation.replace("ResetPassword");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white px-6 justify-center"
    >
      <View className="items-center mb-6">
        <Image
          source={require("../../assets/images/eclipse-crop.png")}
          style={{
            width: screenWidth * 0.8,
            height: 120,
            resizeMode: "contain",
          }}
        />
      </View>

      <Text className="text-2xl font-bold text-black text-center mb-2">
        OTP
      </Text>
      <Text className="text-2xl font-bold text-black text-center mb-6">
        VERIFICATION
      </Text>

      <Text className="text-center text-gray-500 mb-6">
        Enter the 6-digit OTP sent to your{"\n"}registered email address.
      </Text>

      <View className="flex-row justify-between mb-6">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            maxLength={1}
            keyboardType="number-pad"
            className="w-12 h-12 bg-gray-100 rounded-md text-center text-2xl text-black"
          />
        ))}
      </View>

      <TouchableOpacity
        className="bg-black py-3 rounded-xl mb-4"
        onPress={handleVerify}
      >
        <Text className="text-white text-center font-bold text-base">
          Verify
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-[#00bfa6] font-semibold text-center">Back</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
