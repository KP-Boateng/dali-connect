// import { StyleSheet } from "react-native";
// const customFonts = {
//   MontserratRegular: require("./Montserrat-Regular.ttf"),
//   // Add other custom fonts if needed
// };
// export const customFontStyles = StyleSheet.create({
//   MontserratRegular: {
//     fontFamily: "MontserratRegular",
//     fontWeight: "normal",
//   },
// });
import { StyleSheet } from "react-native";
// import * as Font from "expo-font";

// Define your customFonts object with the correct path to your font file
// const customFonts = {
//   MontserratRegular: require("./Montserrat-Regular.ttf"),
//   // Add other custom fonts if needed
// };

// Load fonts asynchronously
// export const loadFontsAsync = async () => {
//   await Font.loadAsync(customFonts);
// };

// Export styles for components to use
export const customFontStyles = StyleSheet.create({
  MontserratRegular: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  MontserratBold: { fontFamily: "MontserratBold", fontWeight: "normal" },
});
