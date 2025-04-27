import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

export default function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      alert("Please fill in both fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Reset password logic here
    console.log("Password reset to:", newPassword);
    navigation.navigate("Login"); // After reset, go back to Login
  };

  return (
    <View className="flex-1 bg-white px-6 pt-10 justify-start">
      {/* Logo */}
      <View className="items-center mb-8 -mt-6">
        <Image
          source={require("../../assets/images/eclipse-crop.png")}
          style={{
            width: screenWidth * 0.8,
            height: 100,
            resizeMode: "contain",
          }}
        />
      </View>

      {/* Title */}
      <Text className="text-2xl font-bold text-black text-center mb-2 font-poppins tracking-wide">
        CREATE NEW
      </Text>
      <Text className="text-2xl font-bold text-black text-center mb-6 font-poppins tracking-wide">
        PASSWORD
      </Text>

      {/* New Password Input */}
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black font-poppins"
        placeholder="Enter New Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      {/* Confirm Password Input */}
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-6 text-black font-poppins"
        placeholder="Confirm New Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Reset Password Button */}
      <TouchableOpacity
        className="bg-black py-3 rounded-xl mb-6"
        onPress={handleResetPassword}
      >
        <Text className="text-white text-center font-bold text-base font-poppins">
          Reset Password
        </Text>
      </TouchableOpacity>

      {/* Back Link */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-center text-[#00bfa6] font-poppins font-semibold">
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}
