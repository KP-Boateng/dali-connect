import { View, Text, TextInput } from "react-native";
import tw from "twrnc";
import database from "../assets/json/dali_social_media.json";
import React, { useEffect, useState, memo } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import SearchListTile from "../components/searchListTile";
import LoadingScreen from "./LoadingScreen";
import { FlashList } from "@shopify/flash-list";

SplashScreen.preventAutoHideAsync();
const CategoryResult = ({ route }) => {
  //keys  to access values from the json file
  const { key, value } = route.params;
  const [loading, setLoading] = useState(true);
  let filteredList;
  let alternateValue;
  value === "computer science"
    ? (alternateValue = "cs")
    : value === "data analytics"
    ? (alternateValue = "msda")
    : value === "human centererd design"
    ? (alternateValue = "human-centered design")
    : null;

  key === "major"
    ? (filteredList = database.filter(
        (user) =>
          user.major.toLowerCase().includes(value.toLowerCase()) ||
          user.major.toLowerCase().startsWith(alternateValue)
      ))
    : key === "minor"
    ? (filteredList = database.filter(
        (user) =>
          typeof user.minor === "string" &&
          (user.minor.toLowerCase().includes(value.toLowerCase()) ||
            user.minor.toLowerCase().startsWith(alternateValue))
      ))
    : (filteredList = database.filter((user) => user[key] === value));
  // const filteredList = database.filter((user) => user === value);

  const [fontsLoaded] = useFonts({
    InriaBold: require("../assets/fonts/InriaSans-Bold.ttf"),
    SpaceRegular: require("../assets/fonts/SpaceGrotesk[wght].ttf"),
    InriaRegular: require("../assets/fonts/InriaSans-Regular.ttf"),
  });

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await SplashScreen.hideAsync();
        setLoading(false);
      } catch (error) {
        console.error("Error hiding splash screen:", error);
      }
    };

    if (fontsLoaded) {
      loadFonts();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || loading) {
    return <LoadingScreen />; // Render the loading screen
  }

  const renderItem = ({ item }) => (
    <SearchListTile name={item.name} major={item.major} />
  );

  return (
    <View style={tw`flex-1 bg-white p-2`}>
      <FlashList
        data={filteredList}
        renderItem={renderItem}
        estimatedItemSize={1000}
        keyExtractor={(item) => item.name}
      />
      {/* <Text>{role}</Text> */}
    </View>
  );
};

export default CategoryResult;
