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
import * as ImagePicker from "expo-image-picker";

export default function CreateEventScreen() {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCreateEvent = async () => {
    if (!title || !description || !date || !time || !image) {
      alert("Please fill all fields and upload an image");
      return;
    }

    try {
      // Upload image to Cloudinary
      const data = new FormData();
      data.append("file", {
        uri: image,
        type: "image/jpeg",
        name: "event.jpg",
      });
      data.append("upload_preset", "YOUR_UPLOAD_PRESET");

      const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const cloudData = await cloudRes.json();
      const imageUrl = cloudData.secure_url;

      // Send to backend
      const res = await API.post("/events", {
        title,
        description,
        date: date.toISOString(),
        time: time.toISOString(),
        image: imageUrl,
      });

      if (res.data.success) {
        alert("Event created!");
        navigation.goBack();
      } else {
        alert(res.data.message || "Event creation failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating event");
    }
  };

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
      <TouchableOpacity
        onPress={pickImage}
        className="border border-black px-4 py-2 rounded-md mb-4"
      >
        <Text className="text-black font-semibold text-center">
          Upload Image
        </Text>
      </TouchableOpacity>

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />
      )}

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
