import { Text, View } from "react-native";
import tw from "twrnc";
import HyperlinkText from "../components/HyperText";
import LoadingScreen from "./LoadingScreen";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { customFontStyles } from "../assets/fonts/fonts";
SplashScreen.preventAutoHideAsync();
const About = () => {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
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

  return (
    <View style={tw`flex-1 p-2 bg-green-600`}>
      <Text
        style={tw.style(
          customFontStyles.SpaceRegular,
          `text-xl text-center text-white`
        )}
      >
        Welcome to DALI Connect
      </Text>
      <Text
        style={tw.style(customFontStyles.InriaRegular, `text-base text-white`)}
      >
        Version: 1.0
      </Text>
      <Text
        style={tw.style(customFontStyles.InriaRegular, `text-base text-white`)}
      >
        This app is built to connect you to the members of the DALI (Digital
        Applied Learning and Innovation) Lab
      </Text>
      <Text>
        {
          <HyperlinkText
            text={"DALI Lab website"}
            url={"http://dali.dartmouth.edu/"}
          />
        }
      </Text>
    </View>
  );
};

export default About;
