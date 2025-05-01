import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { name, email, phone } = route?.params || {
    name: "",
    email: "",
    phone: "",
  };

  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPhone, setUpdatedPhone] = useState(phone);

  const handleSave = () => {
    if (!updatedName || !updatedEmail || !updatedPhone) {
      Alert.alert("All fields are required.");
      return;
    }

    navigation.navigate("MyProfile", {
      name: updatedName,
      email: updatedEmail,
      phone: updatedPhone,
    });
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

      <Text className="text-2xl font-bold text-black mb-4 text-center">
        Edit Profile
      </Text>

      <TextInput
        className="border border-gray-300 rounded-md mb-4 px-4 py-3"
        placeholder="Full Name"
        value={updatedName}
        onChangeText={setUpdatedName}
      />
      <TextInput
        className="border border-gray-300 rounded-md mb-4 px-4 py-3"
        placeholder="Email"
        keyboardType="email-address"
        value={updatedEmail}
        onChangeText={setUpdatedEmail}
      />
      <TextInput
        className="border border-gray-300 rounded-md mb-4 px-4 py-3"
        placeholder="Phone"
        keyboardType="phone-pad"
        value={updatedPhone}
        onChangeText={setUpdatedPhone}
      />

      <TouchableOpacity
        onPress={handleSave}
        className="bg-black rounded-md px-6 py-3 mt-2"
      >
        <Text className="text-white text-center font-semibold">Save</Text>
      </TouchableOpacity>
    </View>
  );
}
