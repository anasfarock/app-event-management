import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function MyProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { updatedName, updatedEmail, updatedPhone, profileImage } =
    route.params || {};

  const name = updatedName || "John Doe";
  const email = updatedEmail || "john@example.com";
  const phone = updatedPhone || "+12–345–67890";

  const handleLogout = () => {
    // Logic to clear session/token
    navigation.navigate("Login");
  };

  const handleEditProfile = () => {
    navigation.navigate("EditProfile", { name, email, phone });
  };

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View className="items-center mb-6">
        <Image
          source={require("../../assets/images/eclipse-crop.png")}
          style={{ width: 120, height: 40, resizeMode: "contain" }}
        />
      </View>

      {/* Title */}
      <Text className="text-2xl font-bold text-black mb-4">My Profile</Text>

      {/* Profile Box */}
      <View className="border border-black rounded-lg px-6 py-6 items-center mb-6">
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("../../assets/images/user-avatar.png")
          }
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />

        <Text className="text-gray-800 font-semibold mb-1">Name: {name}</Text>
        <Text className="text-gray-800 font-semibold mb-1">Email: {email}</Text>
        <Text className="text-gray-800 font-semibold">Phone: {phone}</Text>
      </View>

      {/* Buttons */}
      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={handleLogout}
          className="border border-black rounded-md px-4 py-2"
        >
          <Text className="text-black font-semibold">Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleEditProfile}
          className="bg-black rounded-md px-4 py-2"
        >
          <Text className="text-white font-semibold">Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
