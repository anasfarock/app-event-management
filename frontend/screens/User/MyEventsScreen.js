import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function MyEventScreen() {
  const navigation = useNavigation();

  const [events, setEvents] = useState([
    { id: 1, title: "Tech Summit 2025" },
    { id: 2, title: "Startup Expo" },
  ]);

  const handleCancelBooking = (eventId) => {
    Alert.alert(
      "Cancel Booking",
      "Are you sure you want to cancel this booking?",
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () =>
            setEvents((prev) => prev.filter((e) => e.id !== eventId)),
        },
      ]
    );
  };

  const handleViewQR = (eventTitle) => {
    navigation.navigate("QRPass", { eventTitle });
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
      <Text className="text-2xl font-bold text-black mb-6">My Events</Text>

      {/* Events List */}
      <ScrollView>
        {events.map((event) => (
          <View
            key={event.id}
            className="border border-black rounded-lg p-4 mb-4"
          >
            <Text className="text-lg font-semibold text-black mb-4">
              {event.title}
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                className="border border-black px-4 py-2 rounded-md"
                onPress={() => handleCancelBooking(event.id)}
              >
                <Text className="text-black font-semibold text-sm">
                  Cancel Booking
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-black px-4 py-2 rounded-md"
                onPress={() => handleViewQR(event.title)}
              >
                <Text className="text-white font-semibold text-sm">
                  View QR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
