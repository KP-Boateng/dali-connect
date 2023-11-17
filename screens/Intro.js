import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import tw from "twrnc";
import { useEffect, useCallback } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
// import { useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
const Intro = () => {
  const [fontsLoaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the HomeScreen after 2 seconds
      navigation.navigate("home");
    }, 3000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={tw.style(`flex-1 justify-center items-center bg-green-600`)}
      onLayout={onLayoutRootView}
    >
      <Text
        style={tw.style(
          `text-3xl text-white font-bold`,
          customFontStyles.MontserratBold
        )}
      >
        DALI Connect
      </Text>
    </View>
  );
};

export default Intro;
