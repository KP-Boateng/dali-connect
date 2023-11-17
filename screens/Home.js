import { View, Text } from "react-native";
import tw from "twrnc";

const Home = () => {
  return (
    <View style={tw`flex-1 justify-center items-center `}>
      <Text style={tw`text-3xl`}>Home Screen</Text>
    </View>
  );
};

export default Home;
