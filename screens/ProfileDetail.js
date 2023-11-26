import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import tw from "twrnc";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Entypo } from "@expo/vector-icons";
import LoadingScreen from "./LoadingScreen";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

SplashScreen.preventAutoHideAsync();
const ProfileDetail = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const { details } = route.params;

  const [fontsLoaded] = useFonts({
    InriaBold: require("../assets/fonts/InriaSans-Bold.ttf"),
    SpaceRegular: require("../assets/fonts/SpaceGrotesk[wght].ttf"),
  });
  // const onLayoutRootView = useCallback(async () => {
  //   navigation.setOptions({ title: details.name });
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await SplashScreen.hideAsync();
        navigation.setOptions({ title: details.name });
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

  return (
    <View style={tw`flex-1 bg-green-600 p-2 gap-2`}>
      <View style={tw` h-1/3 justify-center items-center `}>
        <Image
          source={details.picture}
          style={tw`h-full w-full rounded-lg`}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <Text
        style={tw.style(
          `text-white text-center text-3xl`,
          customFontStyles.SpaceRegular
        )}
      >
        {details.name}
      </Text>
      {details.mentor && (
        <Text
          style={tw.style(
            `text-white text-center text-lg`,
            customFontStyles.SpaceRegular
          )}
        >
          Mentor
        </Text>
      )}
      <ScrollView style={tw`flex-1`}>
        <View style={tw`flex-1 gap-2`}>
          <Text
            style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
          >
            Major: {details.major}
          </Text>
          {details.minor && (
            <Text
              style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
            >
              Minor: {details.minor}
            </Text>
          )}
          <Text
            style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
          >
            Year: {details.year}
          </Text>
          <Text
            style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
          >
            Role:{" "}
            {`${details.core ? "(Core)" : ""}${
              details.dev ? "Developer" : ""
            } ${details.des ? "Designer" : ""}${
              details.pm ? "Project Manager" : ""
            }`}
          </Text>
          <View style={tw`flex-row justify-between items-center`}>
            <Text
              style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
            >
              Home: {details.home}
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("maplocation", {
                  home: details.home,
                  name: details.name,
                });
              }}
              style={{}}
            >
              <Entypo name="location-pin" size={24} color="white" />
            </Pressable>
          </View>
          <Text
            style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
          >
            Birthday: {details.birthday}
          </Text>
          <Text
            style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
          >
            Favorite Quote: {details.quote}
          </Text>
          <Text
            style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
          >
            1st Favorite Thing: {details["favorite thing 1"]}
          </Text>
          <Text
            style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
          >
            2nd Favorite Thing: {details["favorite thing 2"]}
          </Text>
          <Text
            style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
          >
            3rd Favorite Thing: {details["favorite thing 3"]}
          </Text>
          {details["favorite dartmouth tradition"] && (
            <Text
              style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
            >
              Favorite Darmouth Tradition:{" "}
              {details["favorite dartmouth tradition"]}
            </Text>
          )}
          {details["fun fact"] && (
            <Text
              style={tw.style(`text-white text-lg`, customFontStyles.InriaBold)}
            >
              Fun Fact: {details["fun fact"]}
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileDetail;
