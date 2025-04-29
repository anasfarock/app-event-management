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
    navigation.navigate("Login");
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      {/* Logo */}
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

      {/* Title */}
      <Text className="text-2xl font-bold text-black text-center mb-2">
        CREATE NEW
      </Text>
      <Text className="text-2xl font-bold text-black text-center mb-6">
        PASSWORD
      </Text>

      {/* Inputs */}
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black"
        placeholder="Enter New Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-6 text-black"
        placeholder="Confirm New Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Reset Password Button */}
      <TouchableOpacity
        className="bg-black py-3 rounded-xl mb-4"
        onPress={handleResetPassword}
      >
        <Text className="text-white text-center font-bold text-base">
          Reset Password
        </Text>
      </TouchableOpacity>

      {/* Back Link */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-center text-[#00bfa6] font-semibold">Back</Text>
      </TouchableOpacity>
    </View>
  );
}
