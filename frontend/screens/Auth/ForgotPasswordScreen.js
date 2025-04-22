import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleSendOTP = () => {
    if (!email) {
      alert('Please enter your registered email.');
      return;
    }

    // Simulate OTP process
    console.log('Send OTP to:', email);
    navigation.navigate('OTPVerification'); // Replace with actual screen name
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <View className="items-center mb-6">
        <Image
          source={require('../../assets/images/eclipse-logo.png')}
          style={{ width: 180, height: 100 }}
          resizeMode="contain"
        />
      </View>

      <Text className="text-2xl font-bold text-black text-center mb-2">FORGOT</Text>
      <Text className="text-2xl font-bold text-black text-center mb-6">PASSWORD</Text>

      <Text className="text-center text-gray-500 mb-6">
        Enter your registered email and we’ll{"\n"}send you an OTP to verify.
      </Text>

      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-6 text-black"
        placeholder="Enter your email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        className="bg-black py-3 rounded-xl mb-4"
        onPress={handleSendOTP}
      >
        <Text className="text-white text-center font-bold text-base">Send OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text className="text-[#00bfa6] font-semibold text-center">Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
