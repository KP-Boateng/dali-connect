import { Image } from "expo-image";
import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import tw from "twrnc";

const LoadingScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-green-600`}>
      <Image
        source={require("../assets/Logo_White.png")}
        style={tw`h-[300px] w-[300px]`}
        contentFit="contain"
      />
      {/* <ActivityIndicator size="large" color="green" />
      <Text>Loading...</Text> */}
    </View>
  );
};

export default LoadingScreen;
