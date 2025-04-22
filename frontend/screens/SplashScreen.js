import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const { role } = JSON.parse(userData);
          if (role === 'Admin') {
            navigation.replace('AdminDashboard');
          } else {
            navigation.replace('Home');
          }
        } else {
          navigation.replace('Login');
        }
      } catch (e) {
        console.error('Error loading user data:', e);
        navigation.replace('Login');
      }
    };

    setTimeout(checkLoginStatus, 1500); // Splash duration
  }, []);

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Image
        source={require('../assets/images/eclipse-logo.png')} // adjust if your logo is elsewhere
        style={{ width: 345, height: 345 }}
        resizeMode="contain"
      />
    </View>
  );
}
