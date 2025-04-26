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

export default function OtpVerificationScreen() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    // Verify OTP logic here
    navigation.replace("Home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white px-6 pt-10 justify-start"
    >
      {/* Logo */}
      <View className="items-center mb-8 -mt-6">
        <Image
          source={require("../../assets/images/eclipse-crop.png")} // your updated logo
          style={{
            width: screenWidth * 0.8,
            height: 100,
            resizeMode: "contain",
          }}
        />
      </View>

      {/* OTP Title */}
      <Text className="text-2xl font-bold text-black text-center mb-2 font-poppins tracking-wide">
        OTP
      </Text>
      <Text className="text-2xl font-bold text-black text-center mb-6 font-poppins tracking-wide">
        VERIFICATION
      </Text>

      {/* OTP Info */}
      <Text className="text-center text-gray-500 font-poppins mb-6">
        Enter the 6-digits OTP sent to your email: john@abc.com
      </Text>

      {/* OTP Boxes */}
      <View className="flex-row justify-between mb-8">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            maxLength={1}
            keyboardType="number-pad"
            className="w-12 h-12 bg-gray-100 rounded-md text-center text-2xl font-poppins text-black"
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        className="bg-black py-3 rounded-xl mb-6"
        onPress={handleVerify}
      >
        <Text className="text-white text-center font-bold text-base font-poppins">
          Verify
        </Text>
      </TouchableOpacity>

      {/* Back Link */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-center text-[#00bfa6] font-poppins font-semibold">
          Back
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
