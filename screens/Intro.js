import { View, Text, Pressable } from "react-native";
import tw from "twrnc";
import { useEffect, useCallback } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import * as SplashScreen from "expo-splash-screen";
//import { onLayoutRootView } from "../assets/fonts/fonts";
// import { fontsLoaded } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import { Image } from "expo-image";

SplashScreen.preventAutoHideAsync();
const Intro = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    SpaceRegular: require("../assets/fonts/SpaceGrotesk[wght].ttf"),
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
      <Image
        source={require("../assets/Logo_White.png")}
        style={tw`w-[300px] h-[300px]`}
        transition={1000}
        contentFit="contain"
      />
      <Text
        style={tw.style(
          `text-3xl text-white font-black`,
          customFontStyles.SpaceRegular
        )}
      >
        DALI Connect
      </Text>
      <Pressable
        android_ripple={{ color: "white" }}
        style={tw`p-2 bg-white bg-opacity-30 rounded-lg absolute bottom-4 `}
      >
        <Text
          style={tw.style(`text-xl text-white`, customFontStyles.SpaceRegular)}
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          Let's Connect
        </Text>
      </Pressable>
    </View>
  );
};

export default Intro;
