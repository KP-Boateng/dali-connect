import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import tw from "twrnc";

const Intro = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-green-600`}>
      <Text style={tw`text-3xl text-white`}>DALI Connect</Text>
    </View>
  );
};

export default Intro;
