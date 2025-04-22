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

    setTimeout(checkLoginStatus, 1500);
  }, []);

  return (
    <View className="flex-1 bg-black justify-center items-center px-6">
      <Image
        source={require('../assets/images/eclipse-logo.png')}
        className="w-[320px] h-[320px] -mt-6"
        resizeMode="contain"
      />
    </View>
  );
}
