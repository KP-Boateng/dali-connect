import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import tw from "twrnc";
import { Text } from "react-native";
import { useCallback } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function Animation() {
  const [fontsLoaded] = useFonts({
    SpaceBold: require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw` justify-center items-center`} onLayout={onLayoutRootView}>
      <LottieView
        style={{ height: 300, width: 300 }}
        source={require("../assets/json/construction.json")}
        autoPlay
        loop
        speed={1}
      />
      <Text style={tw.style(`text-xl text-white`, customFontStyles.SpaceBold)}>
        Page under construction
      </Text>
    </View>
  );
}
