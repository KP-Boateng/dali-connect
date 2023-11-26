import { View, ScrollView } from "react-native";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CategoryTile from "./CategoryTile";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import SpinLoading from "../screens/SpinLoading";

SplashScreen.preventAutoHideAsync();
const Minors = () => {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    InriaBold: require("../assets/fonts/InriaSans-Bold.ttf"),
    SpaceRegular: require("../assets/fonts/SpaceGrotesk[wght].ttf"),
    SpaceBold: require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
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
    return <SpinLoading />; // Render the loading screen
  }

  return (
    <View style={tw` flex-1 p-2 gap-2 bg-green-600  rounded-lg`}>
      <ScrollView style={tw`flex-1`}>
        <View style={tw`flex-1 gap-2 `}>
          <CategoryTile
            type={"minor"}
            value={"computer science"}
            text={"Computer Science/CS"}
            icon={<Entypo name="code" size={24} color="green" />}
          />
          <CategoryTile
            type={"minor"}
            value={"digital art"}
            text={"Digital Arts"}
            icon={<Fontisto name="film" size={24} color="green" />}
          />
          <CategoryTile
            type={"minor"}
            value={"engineering"}
            text={"Engineering"}
            icon={<MaterialIcons name="engineering" size={24} color="green" />}
          />
          <CategoryTile
            type={"minor"}
            value={"engineering sciences"}
            text={"Engineering Sciences"}
            icon={<MaterialIcons name="engineering" size={24} color="green" />}
          />
          <CategoryTile
            type={"minor"}
            value={"french"}
            text={"French"}
            icon={<FontAwesome5 name="language" size={24} color="green" />}
          />
          <CategoryTile
            type={"minor"}
            value={"government"}
            text={"Government"}
            icon={<FontAwesome5 name="handshake" size={24} color="green" />}
          />
          <CategoryTile
            type={"minor"}
            value={"human-centered design"}
            text={"Human Centered Design"}
            icon={
              <MaterialCommunityIcons name="human" size={24} color="green" />
            }
          />
          <CategoryTile
            type={"minor"}
            value={"neuroscience"}
            text={"Neuroscience"}
            icon={<FontAwesome5 name="brain" size={24} color="green" />}
          />
          <CategoryTile
            type={"minor"}
            value={"qss"}
            text={"QSS"}
            icon={<FontAwesome5 name="brain" size={24} color="green" />}
          />
          <CategoryTile
            type={"minor"}
            value={"Women's, Gender, and Sexuality Studies"}
            text={"Women's, Gender, and Sexuality Studies"}
            icon={<Ionicons name="woman" size={24} color="green" />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Minors;
