import { useState, useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LoadingScreen from "./LoadingScreen";
import { AntDesign } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
// import { Fontisto } from "@expo/vector-icons";
import Majors from "../components/Majors";
import Minors from "../components/Minors";
import Roles from "../components/Roles";

SplashScreen.preventAutoHideAsync();
const Categories = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [subGroup, setSubGroup] = useState(null);
  const [chosenCategory, setChosenCategory] = useState(null);
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
  return (
    <View style={tw`flex-1 gap-4 p-2`}>
      <View style={tw` gap-2 bg-white`}>
        <Pressable
          style={tw`bg-green-600 p-2 rounded-lg flex-row justify-between items-center`}
          android_ripple={{ color: "white" }}
          onPress={() => {
            setChosenCategory("major");
          }}
        >
          <Text
            style={tw.style("text-white text-lg", customFontStyles.InriaBold)}
          >
            Search by Major
          </Text>
          {chosenCategory === "major" && (
            <AntDesign name="checkcircle" size={24} color="white" />
          )}
        </Pressable>
        <Pressable
          style={tw`bg-green-600 p-2 rounded-lg flex-row justify-between items-center`}
          android_ripple={{ color: "white" }}
          onPress={() => {
            setChosenCategory("minor");
          }}
        >
          <Text
            style={tw.style("text-white text-lg", customFontStyles.InriaBold)}
          >
            Search by Minor
          </Text>
          {chosenCategory === "minor" && (
            <AntDesign name="checkcircle" size={24} color="white" />
          )}
        </Pressable>
        <Pressable
          style={tw`bg-green-600 p-2 rounded-lg flex-row justify-between items-center`}
          android_ripple={{ color: "white" }}
          onPress={() => {
            setChosenCategory("role");
          }}
        >
          <Text
            style={tw.style("text-white text-lg", customFontStyles.InriaBold)}
          >
            Search by Role
          </Text>
          {chosenCategory === "role" && (
            <AntDesign name="checkcircle" size={24} color="white" />
          )}
        </Pressable>
      </View>

      {chosenCategory === null && (
        <View
          style={tw` flex-1 bg-green-600 justify-center items-center rounded-lg`}
        >
          <Text
            style={tw.style(
              ` text-white text-base`,
              customFontStyles.SpaceRegular
            )}
          >
            No chosen category
          </Text>
        </View>
      )}
      {chosenCategory === "major" && (
        <Majors
          subGroup={subGroup}
          setSubGroup={setSubGroup}
          chosenCategory={chosenCategory}
        />
      )}

      {chosenCategory === "minor" && (
        <Minors subGroup={subGroup} setSubGroup={setSubGroup} />
      )}

      {chosenCategory === "role" && (
        <Roles
          //navigation={navigation}
          subGroup={subGroup}
          setSubGroup={setSubGroup}
        />
      )}
    </View>
  );
};

export default Categories;
