import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as Calendar from "expo-calendar";

export default function EventDetailsScreen() {
  const navigation = useNavigation();
  const [calendarReady, setCalendarReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        setCalendarReady(true);
      }
    })();
  }, []);

  const addToCalendar = async () => {
    if (!calendarReady) {
      Alert.alert("Permission Error", "Calendar access is not granted.");
      return;
    }

    const defaultCalendarSource =
      Platform.OS === "ios"
        ? await Calendar.getDefaultCalendarAsync()
        : { isLocalAccount: true, name: "Expo Calendar" };

    const calendarId =
      Platform.OS === "ios"
        ? defaultCalendarSource.id
        : await Calendar.createCalendarAsync({
            title: "Expo Calendar",
            color: "blue",
            entityType: Calendar.EntityTypes.EVENT,
            source: defaultCalendarSource,
            name: "Expo Calendar",
            ownerAccount: "personal",
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
          });

    const event = {
      title: "Tech Summit 2025",
      startDate: new Date("2025-05-20T14:00:00"),
      endDate: new Date("2025-05-20T15:00:00"),
      timeZone: "Asia/Karachi",
      location: "Islamabad, Pakistan",
      notes: "Organized by XYZ.",
    };

    try {
      await Calendar.createEventAsync(calendarId, event);
      Alert.alert("Success", "Event added to your calendar!");
    } catch (error) {
      console.error("Calendar Error:", error);
      Alert.alert("Error", "Failed to add event to calendar.");
    }
  };

  const openMap = () => {
    Linking.openURL("https://maps.google.com?q=Islamabad");
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center px-6 pt-12">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View className="items-center mb-4 mt-2">
        <Image
          source={require("../../assets/images/eclipse-crop.png")}
          style={{ width: 120, height: 40, resizeMode: "contain" }}
        />
      </View>

      <Image
        source={require("../../assets/images/eclipse-crop.png")}
        className="w-full h-48"
        resizeMode="cover"
      />

      <ScrollView className="flex-1 px-6 pt-4">
        <Text className="text-lg font-bold text-black mb-1">
          Tech Summit 2025
        </Text>
        <Text className="text-gray-700">Time: 02:00 PM</Text>
        <Text className="text-gray-700">Date: 20 May 2025</Text>
        <Text className="text-gray-700">
          Location: Islamabad, Pakistan (
          <Text onPress={openMap} className="text-blue-600 underline">
            Map Link
          </Text>
          )
        </Text>

        <Text className="font-semibold text-black mt-4 mb-1">Description:</Text>
        <Text className="text-gray-700 text-sm leading-relaxed mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Text>

        <Text className="text-black font-semibold mb-6">Organized by: XYZ</Text>

        <View className="flex-row justify-between mb-10">
          <TouchableOpacity
            onPress={addToCalendar}
            className="border border-black rounded-md px-4 py-2"
          >
            <Text className="text-black font-semibold">Add to Calendar</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-black rounded-md px-4 py-2">
            <Text className="text-white font-semibold">Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
    </View>
  );
}
