import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

// Import your screens
import AdminDashboardScreen from "./AdminDashboardScreen";
import CreateEventScreen from "./CreateEventScreen";
import ManageEventScreen from "./ManageEventsScreen";
import ViewBookingsScreen from "./ViewBookingsScreen";
import QRScannerScreen from "./QRScannerScreen";
import MyProfileScreen from "../Shared/MyProfileScreen";
import { useRoute } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

// 🔹 Custom top header bar (shown inside each screen)
function CustomHeader({ navigation, title = "" }) {
  const route = useRoute(); // Get current route name

  return (
    <View className="bg-white px-4 py-10 flex-row items-center justify-between">
      {/* Conditionally render Back Button */}
      <View>
        {route.name !== "AdminDashboard" && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>

      <Image
        source={require("../../assets/images/eclipse-crop.png")}
        style={{ width: 100, height: 40 }}
        resizeMode="contain"
      />

      <Ionicons
        name="ellipsis-vertical"
        size={24}
        color="black"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}

// 🔹 Custom drawer items
function CustomDrawerContent({ navigation }) {
  const menuItems = [
    { label: "Dashboard", screen: "AdminDashboard" },
    { label: "Create Event", screen: "CreateEvent" },
    { label: "Manage Event", screen: "ManageEvent" },
    { label: "Bookings", screen: "Bookings" },
    { label: "QR Scanner", screen: "QRScanner" },
    { label: "My Profile", screen: "MyProfile" },
    { label: "Logout", screen: "Login" }, // implement proper logout logic later
  ];

  return (
    <View className="flex-1 bg-white pt-16">
      <Image
        source={require("../../assets/images/eclipse-crop.png")}
        style={{
          width: 120,
          height: 40,
          resizeMode: "contain",
          marginLeft: 20,
        }}
      />
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(item.screen)}
          className="border-b border-gray-300 py-4 px-6"
        >
          <Text className="text-lg font-semibold text-gray-800">
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// 🔹 Wrap screens with the header
function withHeader(Component) {
  return function WrappedScreen({ navigation }) {
    return (
      <View className="flex-1">
        <CustomHeader navigation={navigation} />
        <Component navigation={navigation} />
      </View>
    );
  };
}

export default function DrawerDashboard() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          width: 260,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="AdminDashboard"
        component={withHeader(AdminDashboardScreen)}
      />
      <Drawer.Screen
        name="CreateEvent"
        component={withHeader(CreateEventScreen)}
      />
      <Drawer.Screen
        name="ManageEvent"
        component={withHeader(ManageEventScreen)}
      />
      <Drawer.Screen
        name="Bookings"
        component={withHeader(ViewBookingsScreen)}
      />
      <Drawer.Screen name="QRScanner" component={withHeader(QRScannerScreen)} />
      <Drawer.Screen name="MyProfile" component={withHeader(MyProfileScreen)} />
    </Drawer.Navigator>
  );
}
