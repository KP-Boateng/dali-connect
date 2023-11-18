import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import Intro from "./screens/Intro";
import Home from "./screens/Home";
import ProfileDetail from "./screens/ProfileDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: { backgroundColor: "green" },
          headerTitleAlign: "center",
          // headerTitleStyle: { color: "#fff" },
        }}
      >
        <Stack.Screen
          name="intro"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "DALI Connect",
            headerTitleStyle: { fontWeight: "900" },
            headerBackVisible: false,
          }}
        />
        <Stack.Screen name="profiledetail" component={ProfileDetail} />
      </Stack.Navigator>

      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
