import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import tw from "twrnc";
import { customFontStyles } from "../assets/fonts/fonts";

const HyperlinkText = ({ url, text }) => {
  const handlePress = () => {
    // Open the link when pressed
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text
        style={tw.style(
          customFontStyles.InriaRegular,
          `text-base text-white underline`
        )}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HyperlinkText;
