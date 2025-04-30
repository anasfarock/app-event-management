import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Linking,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";

export default function QRPassScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const qrRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  // ✅ Safe destructuring with fallback
  const {
    fullName = "Guest User",
    email = "noemail@example.com",
    phone = "N/A",
    event = {
      title: "Untitled Event",
      time: "Unknown Time",
      date: "Unknown Date",
      location: "Unknown Location",
    },
  } = route?.params || {};

  const qrValue = JSON.stringify({
    fullName,
    email,
    phone,
    event,
  });

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleSave = async () => {
    if (!hasPermission) {
      Alert.alert("Permission required", "Media access not granted.");
      return;
    }

    try {
      const uri = await captureRef(qrRef, {
        format: "png",
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert("Saved", "QR code saved to device.");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to save QR code.");
    }
  };

  const openMap = () => {
    if (event.location) {
      Linking.openURL(`https://maps.google.com?q=${event.location}`);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-12 justify-between">
      {/* Header */}
      <View>
        <View className="flex-row items-center mb-6">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <View className="items-center mb-6">
          <Image
            source={require("../../assets/images/eclipse-crop.png")}
            style={{ width: 120, height: 40, resizeMode: "contain" }}
          />
        </View>

        {/* Booking Confirmed Text */}
        <Text className="text-2xl font-bold text-black text-center mb-4">
          Booking{"\n"}Confirmed
        </Text>

        {/* QR Code */}
        <View className="items-center mb-6" ref={qrRef}>
          <QRCode value={qrValue} size={200} />
        </View>

        {/* Event Details */}
        <View className="items-center mb-6">
          <Text className="font-semibold text-black">{event.title}</Text>
          <Text className="text-gray-700 text-sm">Time: {event.time}</Text>
          <Text className="text-gray-700 text-sm">Date: {event.date}</Text>
          <Text className="text-gray-700 text-sm">
            Location: {event.location} (
            <Text className="text-blue-600 underline" onPress={openMap}>
              Map Link
            </Text>
            )
          </Text>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          className="border border-black py-2 rounded-md self-center px-6"
          onPress={handleSave}
        >
          <Text className="text-black font-semibold">Save to Device</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center py-3 border-t border-gray-200 mt-6">
        <TouchableOpacity>
          <Ionicons name="home" size={24} color="gray" />
          <Text className="text-xs text-center text-gray-600">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="checkmark-done-outline" size={24} color="gray" />
          <Text className="text-xs text-center text-gray-600">My Events</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="gray" />
          <Text className="text-xs text-center text-gray-600">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
