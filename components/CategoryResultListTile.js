import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import React, { useCallback } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import database from "../assets/json/dali_social_media.json";

SplashScreen.preventAutoHideAsync();
const CategoryResultListTile = ({ name, major }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    InriaBold: require("../assets/fonts/InriaSans-Bold.ttf"),
    InriaRegular: require("../assets/fonts/InriaSans-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const details = database.find((user) => user.name === name);

  // alert(details.name);
  return (
    <TouchableOpacity
      style={tw`flex gap-2 my-1 p-2 rounded-lg bg-green-600`}
      onLayout={onLayoutRootView}
      onPress={() => navigation.navigate("profiledetail", { details })}
    >
      <View style={tw`flex-row justify-start items-center`}>
        <Text
          style={tw.style(`text-lg text-white`, customFontStyles.InriaBold)}
        >
          {name}
        </Text>
      </View>
      <View style={tw` flex-row justify-end items-center`}>
        <Text
          style={tw.style(`text-base text-white`, customFontStyles.InriaBold)}
        >
          {major}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(CategoryResultListTile);
