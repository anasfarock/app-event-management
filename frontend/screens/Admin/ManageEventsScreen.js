import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const mockEvents = [
  {
    id: 1,
    title: "Tech Summit 2025",
    location: "Islamabad, Pakistan",
    time: "02:00 PM",
    date: "20 May 2025",
  },
  {
    id: 2,
    title: "Startup Expo",
    location: "Islamabad, Pakistan",
    time: "02:00 PM",
    date: "20 May 2025",
  },
];

export default function ManageEventScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Header */}

      {/* Title */}
      <Text className="text-2xl font-bold text-black mb-6 font-poppins">
        Manage Events
      </Text>

      {/* Event List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {mockEvents.map((event) => (
          <View
            key={event.id}
            className="border border-black rounded-lg p-4 mb-4"
          >
            <Text className="text-lg font-semibold text-black mb-1">
              {event.title}
            </Text>
            <Text className="text-gray-600 text-sm mb-1">
              Location: {event.location}
            </Text>
            <Text className="text-gray-600 text-sm mb-1">
              Time: {event.time}
            </Text>
            <Text className="text-gray-600 text-sm mb-4">
              Date: {event.date}
            </Text>

            <View className="flex-row justify-between">
              <TouchableOpacity className="border border-black rounded-md px-4 py-2">
                <Text className="text-black font-bold text-sm">View</Text>
              </TouchableOpacity>

              <TouchableOpacity className="border border-black rounded-md px-4 py-2">
                <Text className="text-black font-bold text-sm">Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-black rounded-md px-4 py-2">
                <Text className="text-white font-bold text-sm">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
