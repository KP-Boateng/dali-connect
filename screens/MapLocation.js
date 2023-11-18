import { View } from "react-native";
import tw from "twrnc";
import Animation from "../components/Animation";
import MapView from "react-native-maps";

const MapLocation = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-green-600`}>
      <Animation />
      {/* <MapView
        style={tw`flex-1`}
        initialRegion={{
          latitude: 37.78825, // Replace with the actual latitude of the member's home
          longitude: -122.4324, // Replace with the actual longitude of the member's home
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
    </View>
  );
};

export default MapLocation;
