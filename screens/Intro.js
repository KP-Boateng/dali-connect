import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import tw from "twrnc";
import { useEffect, useCallback } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
// import { useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
const Intro = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

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
      style={tw.style(`flex-1  justify-center items-center bg-green-600`)}
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
      <Pressable
        style={tw`p-2 bg-white bg-opacity-50 rounded-lg absolute bottom-0 `}
      >
        <Text
          style={tw.style(customFontStyles.MontserratRegular)}
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          Let's Go
        </Text>
      </Pressable>
    </View>
  );
};

export default Intro;
