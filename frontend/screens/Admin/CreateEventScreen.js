import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function CreateEventScreen() {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [description, setDescription] = useState("");

  const handleCreateEvent = () => {
    // Event creation logic
    console.log({
      title,
      date: date.toDateString(),
      time: time.toLocaleTimeString(),
      description,
    });
  };

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Header */}
      <View className="flex-row items-center mb-6 px-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View className="items-center mb-8">
        <Image
          source={require("../../assets/images/eclipse-crop.png")}
          style={{ width: 120, height: 40, resizeMode: "contain" }}
        />
      </View>

      {/* Title */}
      <Text className="text-2xl font-bold text-black text-center mb-2 font-poppins">
        Create New
      </Text>
      <Text className="text-2xl font-bold text-black text-center mb-6 font-poppins">
        Event
      </Text>

      {/* Inputs */}
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black"
        placeholder="Title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />

      {/* Date Picker */}
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        className="flex-row items-center bg-gray-100 px-4 py-3 rounded-md mb-4 justify-between"
      >
        <Text className="text-black">
          {date ? date.toDateString() : "Select Date"}
        </Text>
        <Ionicons name="calendar" size={20} color="#666" />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShowDatePicker(false);
            setDate(currentDate);
          }}
        />
      )}

      {/* Time Picker */}
      <TouchableOpacity
        onPress={() => setShowTimePicker(true)}
        className="flex-row items-center bg-gray-100 px-4 py-3 rounded-md mb-4 justify-between"
      >
        <Text className="text-black">
          {time ? time.toLocaleTimeString() : "Select Time"}
        </Text>
        <Ionicons name="time" size={20} color="#666" />
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, selectedTime) => {
            const currentTime = selectedTime || time;
            setShowTimePicker(false);
            setTime(currentTime);
          }}
        />
      )}

      {/* Description */}
      <TextInput
        multiline
        numberOfLines={5}
        className="bg-gray-100 px-4 py-3 rounded-md mb-4 text-black"
        placeholder="Description Box"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
      />

      {/* Upload Image */}
      <TouchableOpacity className="border border-black px-4 py-2 rounded-md mb-6">
        <Text className="text-black font-semibold text-center">
          Upload Image
        </Text>
      </TouchableOpacity>

      {/* Create Button */}
      <TouchableOpacity
        onPress={handleCreateEvent}
        className="bg-black py-3 rounded-xl mb-6"
      >
        <Text className="text-white text-center font-bold text-base font-poppins">
          Create Event
        </Text>
      </TouchableOpacity>
    </View>
  );
}
