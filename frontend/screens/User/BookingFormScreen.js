import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BookingFormScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      Alert.alert("Incomplete Form", "Please fill in all fields.");
      return;
    }

    // Navigate to QRPassScreen with data
    navigation.navigate("QRPass", {
      fullName: name,
      email,
      phone,
      event: {
        title: "Tech Summit 2025",
        time: "02:00 PM",
        date: "20 May 2025",
        location: "Islamabad, Pakistan",
      },
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white px-6 pt-12 justify-between"
    >
      {/* Header */}
      <View>
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
        <Text className="text-2xl font-bold text-black text-center mb-6">
          Booking Form
        </Text>

        {/* Form Inputs */}
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
          placeholder="Phone Number"
          placeholderTextColor="#888"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        {/* Submit Button */}
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-black py-3 rounded-xl"
        >
          <Text className="text-white text-center font-bold text-base">
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
    </KeyboardAvoidingView>
  );
}
