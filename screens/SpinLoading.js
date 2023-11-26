// import { Image } from "expo-image";
import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import tw from "twrnc";

const SpinLoading = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <ActivityIndicator size="large" color="green" />
      <Text>Loading...</Text>
    </View>
  );
};
export default SpinLoading;
