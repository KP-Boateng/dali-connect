import { View, ScrollView } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
import CategoryTile from "./CategoryTile";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import SpinLoading from "../screens/SpinLoading";

SplashScreen.preventAutoHideAsync();
const Majors = () => {
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
            type={"major"}
            value={"anthropology"}
            text={"Anthropology"}
            icon={<FontAwesome name="group" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"art history"}
            text={"Art History"}
            icon={<MaterialIcons name="museum" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"chinese"}
            text={"Chinese"}
            icon={<FontAwesome5 name="language" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"cognitive science"}
            text={"Cognitive Science"}
            icon={<FontAwesome5 name="brain" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"computer science"}
            text={"Computer Science/CS"}
            icon={<Entypo name="code" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"msda"}
            text={"Data Analytics/MSDA"}
            icon={<AntDesign name="areachart" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"digital art"}
            text={"Digital Arts"}
            icon={<Fontisto name="film" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"econ"}
            text={"Economics"}
            icon={<FontAwesome name="money" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"engineering"}
            text={"Engineering"}
            icon={<MaterialIcons name="engineering" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"engineering management"}
            text={"Engineering Management"}
            icon={<FontAwesome name="balance-scale" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"engineering sciences"}
            text={"Engineering Sciences"}
            icon={<MaterialIcons name="engineering" size={24} color="green" />}
          />
          {/* <CategoryTile
            type={"major"}
            value={"government"}
            text={"Government"}
            icon={<FontAwesome5 name="handshake" size={24} color="green" />}
          /> */}
          <CategoryTile
            type={"major"}
            value={"human-centered design"}
            text={"Human Centered Design"}
            icon={
              <MaterialCommunityIcons name="human" size={24} color="green" />
            }
          />
          <CategoryTile
            type={"major"}
            value={"ling"}
            text={"Linguistics"}
            icon={<FontAwesome5 name="language" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"math"}
            text={"Mathematics"}
            icon={
              <MaterialCommunityIcons
                name="math-integral"
                size={24}
                color="green"
              />
            }
          />
          <CategoryTile
            type={"major"}
            value={"mathematical data science"}
            text={"Mathematical Data Science"}
            icon={<AntDesign name="areachart" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"mechanical engineering"}
            text={"Mechanical Engineering"}
            icon={<FontAwesome name="gear" size={24} color="green" />}
          />
          {/* <CategoryTile
          type={"major"}
          value={""
            text={"MSDA"}
            icon={<AntDesign name="areachart" size={24} color="green" />}
          /> */}
          <CategoryTile
            type={"major"}
            value={"music"}
            text={"Music"}
            icon={<FontAwesome name="music" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"neuroscience"}
            text={"Neuroscience"}
            icon={<FontAwesome5 name="brain" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"philosophy"}
            text={"Philosophy"}
            icon={<FontAwesome5 name="brain" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"physics"}
            text={"Physics"}
            icon={<Fontisto name="atom" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"sociology"}
            text={"Sociology"}
            icon={<FontAwesome name="group" size={24} color="green" />}
          />
          <CategoryTile
            type={"major"}
            value={"studio art"}
            text={"Studio Art"}
            icon={<Fontisto name="film" size={24} color="green" />}
          />
        </View>
      </ScrollView>

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

export default Majors;
