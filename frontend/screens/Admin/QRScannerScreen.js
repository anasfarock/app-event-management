import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function QRScannerScreen() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [attendees, setAttendees] = useState([
    { name: "John Doe", status: "Checked In" },
    { name: "Sarah", status: "Checked In" },
  ]);

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setAttendees((prev) => [...prev, { name: data, status: "Checked In" }]);
    setTimeout(() => setScanned(false), 2000); // allow re-scanning after 2s
  };

  if (!Camera || !Camera.Constants || !Camera.Constants.Type) {
    return (
      <Text className="text-red-500 text-center mt-20">
        Camera module not ready. Try restarting the app.
      </Text>
    );
  }

  if (hasPermission === null) {
    return (
      <Text className="text-center mt-20">Requesting camera permission...</Text>
    );
  }
  if (hasPermission === false) {
    return (
      <Text className="text-center mt-20 text-red-500">
        No access to camera
      </Text>
    );
  }

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
      <Text className="text-2xl font-bold text-black text-center mb-4">
        QR Scanner
      </Text>

      {/* Camera view with QR scanner */}
      <View className="w-full h-60 bg-gray-200 mb-4 overflow-hidden rounded-md">
        <Camera
          className="flex-1"
          ref={cameraRef}
          type={Camera.Constants.Type.back}
          barCodeScannerSettings={{
            barCodeTypes: [Camera.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </View>

      {/* Info Text */}
      <Text className="text-center text-base font-semibold mb-4 text-black">
        Scan QR to Confirm Attendance
      </Text>

      {/* Attendee List */}
      <ScrollView className="border border-black rounded-lg px-4 py-3 mb-6">
        {attendees.map((person, index) => (
          <View key={index} className="flex-row items-center mb-2">
            <Ionicons name="checkmark-circle" size={18} color="gray" />
            <Text className="ml-2 text-gray-700">
              {person.name} - {person.status}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("AdminDashboard")}
        className="border border-black rounded-md py-2 px-4 self-center"
      >
        <Text className="text-black font-semibold">Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}
