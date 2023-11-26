import { Pressable, Text } from "react-native";
import { customFontStyles } from "../assets/fonts/fonts";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const CategoryTile = ({ text, icon, type, value }) => {
  const navigation = useNavigation();
  const categoryResultHandler = (val) => {
    navigation.navigate("categoryresult", { key: type, value: val });
  };
  return (
    <Pressable
      style={tw`bg-white p-2 rounded-lg flex-row justify-between items-center`}
      android_ripple={{ color: "green" }}
      onPress={() => {
        categoryResultHandler(value);
      }}
    >
      <Text
        style={tw.style(
          ` text-green-600 text-base`,
          customFontStyles.SpaceRegular
        )}
      >
        {text}
      </Text>
      {icon}
    </Pressable>
  );
};

export default CategoryTile;
