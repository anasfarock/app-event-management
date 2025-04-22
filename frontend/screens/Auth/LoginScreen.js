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
    // For now, simulate login and redirect
    if (email.toLowerCase().includes('admin')) {
      navigation.replace('AdminDashboard');
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <View className="items-center mb-10">
        <Image
          source={require('../../assets/images/eclipse-logo-bbg.png')} // adjust path if needed
          style={{ width: 180, height: 100 }}
          resizeMode="contain"
        />
      </View>

      <Text className="text-2xl font-bold text-black mb-6 text-center">LOGIN</Text>

      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black"
        placeholder="Enter your email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-1 text-black"
        placeholder="Enter your password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
        className="self-end mb-6"
      >
        <Text className="text-[#00bfa6] font-semibold text-sm">Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-black py-3 rounded-xl mb-4"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold text-base">Login</Text>
      </TouchableOpacity>

      <View className="items-center">
        <Text className="text-sm text-black">
          Don’t have an account?{' '}
          <Text
            className="text-[#00bfa6] font-semibold"
            onPress={() => navigation.navigate('Register')}
          >
            Register now
          </Text>
        </Text>
      </View>
    </View>
  );
}
