import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const mockBookings = [
  {
    id: 1,
    eventTitle: "Tech Summit",
    attendees: [
      { name: "John Doe", email: "john@abc.com" },
      { name: "Sarah", email: "sarah@abc.com" },
    ],
  },
  {
    id: 2,
    eventTitle: "Startup Expo",
    attendees: [
      { name: "John Doe", email: "john@abc.com" },
      { name: "Sarah", email: "sarah@abc.com" },
    ],
  },
];

export default function ViewBookingsScreen() {
  const navigation = useNavigation();

  const handleExport = (eventTitle) => {
    console.log(`Exporting bookings for ${eventTitle} as .csv`);
    // Add CSV export logic here
  };

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Back Button */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View className="items-center mb-8">
        <Image
          source={require("../../assets/images/eclipse-crop.png")}
          style={{ width: 120, height: 40, resizeMode: "contain" }}
        />
      </View>

      {/* Title */}
      <Text className="text-2xl font-bold text-black mb-6 font-poppins">
        Bookings
      </Text>

      {/* Bookings List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {mockBookings.map((booking) => (
          <View
            key={booking.id}
            className="border border-black rounded-lg p-4 mb-4"
          >
            <Text className="text-lg font-semibold text-black mb-2">
              {booking.eventTitle}
            </Text>

            {booking.attendees.slice(0, 2).map((attendee, index) => (
              <Text key={index} className="text-sm text-gray-700 mb-1">{`${
                index + 1
              }. ${attendee.name} - ${attendee.email}`}</Text>
            ))}

            <Text className="text-sm text-black font-semibold mb-4 underline">
              ...See More
            </Text>

            <View className="items-end">
              <TouchableOpacity
                onPress={() => handleExport(booking.eventTitle)}
                className="border border-black px-4 py-2 rounded-md"
              >
                <Text className="text-black font-semibold text-sm">
                  Export as .csv
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
