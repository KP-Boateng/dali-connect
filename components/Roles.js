import { View, Pressable, Text, ScrollView } from "react-native";
import tw from "twrnc";
// import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
// import { Fontisto } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { customFontStyles } from "../assets/fonts/fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import SpinLoading from "../screens/SpinLoading";

SplashScreen.preventAutoHideAsync();
const Roles = ({ subGroup, setSubGroup }) => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    InriaBold: require("../assets/fonts/InriaSans-Bold.ttf"),
    SpaceRegular: require("../assets/fonts/SpaceGrotesk[wght].ttf"),
    SpaceBold: require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
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

  const setSubGroupHandler = (role, value) => {
    setSubGroup(role);
    navigation.navigate("categoryresult", { key: role, value: value });
  };

  return (
    <View style={tw` flex-1 p-2 gap-2 bg-green-600  rounded-lg`}>
      <View style={tw`flex-1 gap-4 `}>
        <Pressable
          style={tw`bg-white p-2 rounded-lg flex-row justify-between items-center`}
          android_ripple={{ color: "green" }}
          onPress={() => {
            setSubGroupHandler("dev", true);
          }}
        >
          <Text
            style={tw.style(
              ` text-green-600 text-base`,
              customFontStyles.SpaceRegular
            )}
          >
            Developer
          </Text>
          <FontAwesome5 name="laptop-code" size={24} color="green" />
        </Pressable>

        <Pressable
          style={tw`bg-white p-2 rounded-lg flex-row justify-between items-center`}
          android_ripple={{ color: "green" }}
          onPress={() => {
            setSubGroupHandler("des", true);
          }}
        >
          <Text
            style={tw.style(
              ` text-green-600 text-base`,
              customFontStyles.SpaceRegular
            )}
          >
            Designer
          </Text>
          <MaterialCommunityIcons
            name="blender-software"
            size={24}
            color="green"
          />
        </Pressable>
        <Pressable
          style={tw`bg-white p-2 rounded-lg flex-row justify-between items-center`}
          android_ripple={{ color: "green" }}
          onPress={() => {
            setSubGroupHandler("pm", true);
          }}
        >
          <Text
            style={tw.style(
              ` text-green-600 text-base`,
              customFontStyles.SpaceRegular
            )}
          >
            Project Manager
          </Text>
          <FontAwesome5 name="jira" size={24} color="green" />
        </Pressable>
      </View>
      {/* <View style={tw` justify-center items-center`}>
        <Pressable
          style={tw`bg-white p-2 rounded-lg flex-row gap-2`}
          android_ripple={{ color: "green" }}
        >
          <Text
            style={tw.style(
              `text-green-600 text-lg `,
              customFontStyles.SpaceBold
            )}
          >
            See Results
          </Text>
        </Pressable>
      </View> */}
      {/* </ScrollView> */}
    </View>
  );
};

export default Roles;
