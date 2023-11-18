import { Text, View } from "react-native";
import tw from "twrnc";
import HyperlinkText from "../components/HyperText";
const About = () => {
  return (
    <View style={tw`flex-1 p-2 bg-green-600`}>
      <Text style={tw`text-xl text-center text-white`}>
        Welcome to DALI Connect
      </Text>
      <Text style={tw`text-base text-white`}>Version: 1.0</Text>
      <Text style={tw`text-base text-white`}>
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
