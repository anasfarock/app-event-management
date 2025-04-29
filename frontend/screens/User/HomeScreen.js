import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleDetails = () => {
    navigation.navigate("EventDetails"); // make sure this screen exists in your navigator
  };

  const handleBookNow = () => {
    navigation.navigate("BookingForm"); // make sure this screen exists in your navigator
  };

  return (
    <View className="flex-1 py-7 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white">
        <Image
          source={require("../../assets/images/eclipse-crop.png")}
          style={{ width: 100, height: 40 }}
          resizeMode="contain"
        />
        <View className="flex-row flex-1 mx-2 bg-gray-100 px-3 py-2 rounded-full items-center">
          <Ionicons name="search" size={18} color="gray" />
          <TextInput
            className="ml-2 flex-1 text-sm text-black"
            placeholder="Search Events"
            placeholderTextColor="#aaa"
          />
        </View>
        <TouchableOpacity>
          <Feather name="sliders" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View className="px-4 py-2">
        <Text className="text-xl font-bold text-black">Upcoming Events</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Event Card */}
        <View className="bg-white mx-4 mt-4 border border-black/10 rounded-xl overflow-hidden shadow-sm">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
            }}
            style={{ height: 160, width: "100%" }}
            resizeMode="cover"
          />
          <View className="p-4">
            <Text className="text-base font-bold text-black mb-1">
              Tech Summit 2025
            </Text>
            <Text className="text-sm text-gray-600">
              Location: Islamabad, Pakistan
            </Text>
            <Text className="text-sm text-gray-600">Time: 02:00 PM</Text>
            <Text className="text-sm text-gray-600 mb-3">
              Date: 20 May 2025
            </Text>

            <View className="flex-row justify-between">
              <TouchableOpacity
                className="px-4 py-2 border border-black rounded-full"
                onPress={handleDetails}
              >
                <Text className="text-black text-sm font-semibold">
                  Details
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="px-4 py-2 bg-black rounded-full"
                onPress={handleBookNow}
              >
                <Text className="text-white text-sm font-semibold">
                  Book Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav (simulated here, will improve later if needed) */}
      <View className="absolute bottom-0 left-0 right-0 flex-row justify-around items-center bg-white border-t border-gray-200 py-2">
        <TouchableOpacity className="items-center">
          <Ionicons name="home" size={20} color="black" />
          <Text className="text-xs text-black">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate("MyEvents")}
        >
          <Ionicons name="checkmark-done" size={20} color="gray" />
          <Text className="text-xs text-gray-700">My Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate("MyProfile")}
        >
          <Ionicons name="person" size={20} color="gray" />
          <Text className="text-xs text-gray-700">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
