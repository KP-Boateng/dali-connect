import { useState } from "react";
import { View, Text, TextInput, ScrollView, FlatList } from "react-native";
import tw from "twrnc";
import database from "../assets/json/dali_social_media.json";
import { useCallback } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import SearchListTile from "../components/searchListTile";

SplashScreen.preventAutoHideAsync();
const Home = () => {
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
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`flex-1 p-2 gap-2 `} onLayout={onLayoutRootView}>
      <View style={tw`w-2/3`}>
        <Text style={tw.style(`text-xl`, customFontStyles.InriaBold)}>
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
        <FlatList
          data={filteredList}
          renderItem={({ item }) => (
            <SearchListTile name={item.name} major={item.major} />
          )}
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
    </View>
  );
};

export default Home;
