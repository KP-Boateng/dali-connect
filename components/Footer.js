import React, { memo } from "react";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FocusRender from "react-navigation-focus-render";

SplashScreen.preventAutoHideAsync();
const Footer = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    InriaBold: require("../assets/fonts/InriaSans-Bold.ttf"),
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
    <FocusRender>
      <View
        style={tw`w-full flex-row justify-between p-2 bg-green-600 bottom-0`}
        onLayout={onLayoutRootView}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("intro");
          }}
          style={tw` flex-1 gap-2 justify-center items-center `}
        >
          <Ionicons name="home" size={24} color="white" />
          <Text style={tw.style(`text-white`, customFontStyles.InriaBold)}>
            Home
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            // navigation.navigate("intro");
          }}
          style={tw` flex-1 gap-2 justify-center items-center `}
        >
          <MaterialIcons name="category" size={24} color="white" />
          <Text style={tw.style(`text-white`, customFontStyles.InriaBold)}>
            Categories
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("about");
          }}
          style={tw` flex-1 gap-2 justify-center items-center `}
        >
          <Feather name="settings" size={24} color="white" />
          <Text style={tw.style(`text-white`, customFontStyles.InriaBold)}>
            About
          </Text>
        </Pressable>
      </View>
    </FocusRender>
  );
};

export default memo(Footer);
