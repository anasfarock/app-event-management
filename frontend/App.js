import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";
import "./global.css";

// Screens
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import ForgotPasswordScreen from "./screens/Auth/ForgotPasswordScreen";
import HomeScreen from "./screens/User/HomeScreen";
import AdminDashboardScreen from "./screens/Admin/AdminDashboardScreen";
import OTPVerificationScreen from "./screens/Auth/OTPVerificationScreen";
import ResetPasswordScreen from "./screens/Auth/ResetPasswordScreen";
import CreateEventScreen from "./screens/Admin/CreateEventScreen";
import ManageEventScreen from "./screens/Admin/ManageEventsScreen";
import ViewBookingsScreen from "./screens/Admin/ViewBookingsScreen";
import QRScannerScreen from "./screens/Admin/QRScannerScreen";
import EventDetailsScreen from "./screens/Shared/EventDetailsScreen";
import MyProfileScreen from "./screens/Shared/MyProfileScreen";
import MyEventScreen from "./screens/User/MyEventsScreen";
import BookingFormScreen from "./screens/User/BookingFormScreen";
import QRPassScreen from "./screens/User/QRPassScreen";
import DrawerDashboard from "./screens/Admin/DrawerDashboard";
import EditProfileScreen from "./screens/Shared/EditProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} /> */}
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerificationScreen}
        />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
        <Stack.Screen name="ManageEvents" component={ManageEventScreen} />
        <Stack.Screen name="QRPass" component={QRPassScreen} />
        <Stack.Screen name="DrawerDashboard" component={DrawerDashboard} />
        <Stack.Screen name="ViewBookings" component={ViewBookingsScreen} />
        <Stack.Screen name="MyEvents" component={MyEventScreen} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="BookingForm" component={BookingFormScreen} />
        <Stack.Screen name="QRScanner" component={QRScannerScreen} />
        <Stack.Screen
          name="EventDetails"
          component={EventDetailsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="EventDetailsAdmin"
          component={EventDetailsScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
