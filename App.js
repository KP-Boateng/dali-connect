import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import Intro from "./screens/Intro";
import Home from "./screens/Home";
import ProfileDetail from "./screens/ProfileDetail";
import MapLocation from "./screens/MapLocation";
import About from "./screens/About";
import Footer from "./components/Footer";
import Categories from "./screens/Categories";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="intro"
        screenOptions={{
          // headerStyle: { backgroundColor: "green" },
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "900", color: "#2e7d32" },
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
            headerBackVisible: false,
          }}
        />
        <Stack.Screen name="profiledetail" component={ProfileDetail} />
        <Stack.Screen
          name="maplocation"
          component={MapLocation}
          options={{ title: "Map Location" }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{ title: "About" }}
        />
        <Stack.Screen
          name="categories"
          component={Categories}
          options={{ title: "Categories" }}
        />
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
