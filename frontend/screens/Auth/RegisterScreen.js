import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import axios from "axios";

const screenWidth = Dimensions.get("window").width;

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("User"); // default role

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Simulate registration and redirect
    console.log({ name, email, password, role });
    navigation.replace(role === "Admin" ? "DrawerDashboard" : "Home");
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <View className="items-center mb-6">
        <Image
          source={require("../../assets/images/eclipse-crop.png")}
          style={{
            width: screenWidth * 0.8, // 80% of the device width
            height: 120, // fixed height (adjustable)
            resizeMode: "contain",
          }}
        />
      </View>

      <Text className="text-2xl font-bold text-black mb-6 text-center">
        REGISTER
      </Text>

      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black"
        placeholder="Full Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black"
        placeholder="Enter your email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black"
        placeholder="Enter your password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black"
        placeholder="Confirm your password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Text className="text-sm text-black font-semibold mb-2">Role:</Text>
      <View className="flex-row mb-6">
        <TouchableOpacity
          onPress={() => setRole("User")}
          className="flex-row items-center mr-6"
        >
          <View
            className={`w-4 h-4 rounded-full border border-black mr-2 ${
              role === "User" ? "bg-black" : ""
            }`}
          />
          <Text className="text-black">User</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setRole("Admin")}
          className="flex-row items-center"
        >
          <View
            className={`w-4 h-4 rounded-full border border-black mr-2 ${
              role === "Admin" ? "bg-black" : ""
            }`}
          />
          <Text className="text-black">Admin</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-black py-3 rounded-xl mb-4"
        onPress={handleSignup}
      >
        <Text className="text-white text-center font-bold text-base">
          Signup
        </Text>
      </TouchableOpacity>

      <View className="items-center">
        <Text className="text-sm text-black">
          Already have an account?{" "}
          <Text
            className="text-[#00bfa6] font-semibold"
            onPress={() => navigation.navigate("Login")}
          >
            Signin
          </Text>
        </Text>
      </View>
    </View>
  );
}
