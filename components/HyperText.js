import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import tw from "twrnc";

const HyperlinkText = ({ url, text }) => {
  const handlePress = () => {
    // Open the link when pressed
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={tw`text-white text-base underline`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HyperlinkText;
