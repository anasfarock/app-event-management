import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

export default function AdminDashboardScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      {/* Title */}
      <Text className="text-2xl font-bold text-black px-4 mt-6">Dashboard</Text>

      {/* Stats Box */}
      <View className="border border-black rounded-lg mx-4 my-4 p-4">
        <Text className="text-lg font-semibold text-gray-700 mb-2">
          Statistics:
        </Text>
        <Text className="text-base text-black">
          <Text className="font-bold">Total Events:</Text> 12
        </Text>
        <Text className="text-base text-black">
          <Text className="font-bold">Total Attendees:</Text> 540
        </Text>
      </View>

      {/* Action Buttons */}
      <View className="px-4 flex-row flex-wrap gap-4 justify-between">
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateEvent")}
          className="border border-black px-6 py-3 rounded-lg"
        >
          <Text className="font-semibold text-black text-sm">Create Event</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("QRScanner")}
          className="border border-black px-6 py-3 rounded-lg"
        >
          <Text className="font-semibold text-black text-sm">Scan QR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ManageEvent")}
          className="border border-black px-6 py-3 rounded-lg"
        >
          <Text className="font-semibold text-black text-sm">
            Manage Events
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Bookings")}
          className="border border-black px-6 py-3 rounded-lg"
        >
          <Text className="font-semibold text-black text-sm">
            View Bookings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
