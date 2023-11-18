import { View, Text } from "react-native";
import tw from "twrnc";
import { Image } from "expo-image";
import { useCallback } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

SplashScreen.preventAutoHideAsync();
const ProfileDetail = ({ route }) => {
  const { details } = route.params;
  const [fontsLoaded] = useFonts({
    InriaBold: require("../assets/fonts/InriaSans-Bold.ttf"),
    SpaceBold: require("../assets/fonts/SpaceGrotesk[wght].ttf"),
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
    <View style={tw`flex-1 bg-green-600 p-2 gap-2`}>
      {/* <Text style={tw`text-white text-base`}>Profile Details Screen</Text> */}
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
          customFontStyles.SpaceBold
        )}
      >
        {details.name}
      </Text>
    </View>
  );
};

export default ProfileDetail;
