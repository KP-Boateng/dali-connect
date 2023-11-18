import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View
      style={tw`w-full flex-row justify-between p-2 bg-green-600 fixed bottom-0`}
    >
      <View style={tw` flex-1 gap-2 justify-center items-center`}>
        <Pressable
          onPress={() => {
            navigation.navigate("intro");
          }}
        >
          <Ionicons name="home" size={24} color="white" />
        </Pressable>
        <Text style={tw`text-white`}>Home</Text>
      </View>
      <View style={tw`flex-1 gap-2 justify-center items-center`}>
        <Pressable>
          <MaterialIcons name="category" size={24} color="white" />
        </Pressable>
        <Text style={tw`text-white`}>Categories</Text>
      </View>
      <View style={tw`flex-1 gap-2 justify-center items-center`}>
        <Pressable>
          <Feather name="settings" size={24} color="white" />
        </Pressable>
        <Text style={tw`text-white`}>About</Text>
      </View>
    </View>
  );
};

export default Footer;
