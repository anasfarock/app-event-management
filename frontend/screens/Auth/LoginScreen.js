import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.toLowerCase().includes('admin')) {
      navigation.replace('AdminDashboard');
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      {/* Logo */}
      <View className="items-center mb-10">
        <Image
          source={require('../../assets/images/eclipse-logo-bbg.png')} // <-- Updated logo
          className="w-[140px] h-[90px]"
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text className="text-2xl font-bold text-black mb-6 text-center font-[Poppins-Bold]">
        LOGIN
      </Text>

      {/* Email Field */}
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black font-[Poppins-Regular]"
        placeholder="Enter your email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Field */}
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-1 text-black font-[Poppins-Regular]"
        placeholder="Enter your password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
        className="self-end mb-6"
      >
        <Text className="text-[#00bfa6] font-semibold text-sm font-[Poppins-SemiBold]">
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        className="bg-black py-3 rounded-xl mb-4"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold text-base font-[Poppins-Bold]">
          Login
        </Text>
      </TouchableOpacity>

      {/* Register Link */}
      <View className="items-center">
        <Text className="text-sm text-black font-[Poppins-Regular]">
          Don’t have an account?{' '}
          <Text
            className="text-[#00bfa6] font-semibold font-[Poppins-SemiBold]"
            onPress={() => navigation.navigate('Register')}
          >
            Register now
          </Text>
        </Text>
      </View>
    </View>
  );
}
