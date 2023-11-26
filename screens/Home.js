import { View, Text, TextInput } from "react-native";
import tw from "twrnc";
import database from "../assets/json/dali_social_media.json";
import React, { useEffect, useState, memo } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import SearchListTile from "../components/searchListTile";
import Footer from "../components/Footer";
import LoadingScreen from "./LoadingScreen";
import { FlashList } from "@shopify/flash-list";

SplashScreen.preventAutoHideAsync();
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const filteredList = database.filter((user) =>
    user.name.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  const searchInputChangeHandler = (text) => {
    setSearchInput(text);
  };

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
    <View style={tw`flex-1 p-2 gap-2 `}>
      <View style={tw`w-2/3`}>
        <Text
          style={tw.style(`text-xl text-green-600`, customFontStyles.InriaBold)}
        >
          Get to know the amazing team of the DALI Lab
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Search team members by name"
          style={tw.style(
            `border-black border-2 rounded-lg p-2 font-semibold`,
            customFontStyles.InriaRegular
          )}
          value={searchInput}
          onChangeText={searchInputChangeHandler}
        />
      </View>
      {filteredList.length > 0 ? (
        <FlashList
          data={filteredList}
          renderItem={renderItem}
          estimatedItemSize={1000}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <View
          style={tw`flex-1 bg-green-600 justify-center items-center rounded-lg`}
        >
          <Text
            style={tw.style(
              `text-white text-base`,
              customFontStyles.SpaceRegular
            )}
          >
            There is no DALI member with this initial
          </Text>
        </View>
      )}
      <Footer />
    </View>
  );
};

export default memo(Home);
