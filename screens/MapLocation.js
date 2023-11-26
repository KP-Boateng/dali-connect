// import React, { useState } from "react";
// import { View } from "react-native";
// import tw from "twrnc";
// import MapView, { Marker } from "react-native-maps";
// const opencage = require("opencage-api-client");

// const MapLocation = ({ route, navigation }) => {
//   const { home } = route.params;
//   const [coordinates, setCoordinates] = useState(null);
//   const memberLocation = {
//     latitude: 43.809514, // Replace with the actual latitude of the member's home
//     longitude: -72.155922, // Replace with the actual longitude of the member's home
//   };

//   const apiKey = "85003260f2764763810dbe43715e9e07";
//   // const location = "Paris, France"; // Replace with the location you want to geocode

//   // opencage
//   //   .geocode({ key: apiKey, q: home })
//   //   .then((data) => {
//   //     const { lat, lng } = data.results[0].geometry;
//   //     const coordinatesObject = { lat, lng };
//   //     alert(coordinatesObject.lat);
//   //     setCoordinates(coordinatesObject);
//   //     // coordinatesObject will be like: { lat: 49.2909409, lng: -123.024879 }
//   //   })
//   //   .catch((error) => {
//   //     console.warn(error.message);
//   //   });

//   return (
//     <View style={tw`flex-1 justify-center items-center bg-green-600`}>
//       <MapView
//         style={tw`flex-1 w-full h-full`}
//         initialRegion={{
//           latitude: memberLocation.latitude,
//           longitude: memberLocation.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         {/* Marker for the member's location */}
//         <Marker coordinate={memberLocation} title="Member's Home" />
//       </MapView>
//     </View>
//   );
// };

// export default MapLocation;

import React, { useState, useEffect } from "react";
import { View } from "react-native";
import tw from "twrnc";
import MapView, { Marker } from "react-native-maps";
const opencage = require("opencage-api-client");

const MapLocation = ({ route, navigation }) => {
  const { home, name } = route.params;
  const [coordinates, setCoordinates] = useState(null);
  const memberLocation = {
    latitude: 43.809514, // Replace with the actual latitude of the member's home
    longitude: -72.155922, // Replace with the actual longitude of the member's home
  };

  const apiKey = "85003260f2764763810dbe43715e9e07";

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await opencage.geocode({ key: apiKey, q: home });
        const { lat, lng } = response.results[0].geometry;
        const coordinatesObject = { latitude: lat, longitude: lng };
        setCoordinates(coordinatesObject);
      } catch (error) {
        console.warn(error.message);
      }
    };

    fetchCoordinates();
  }, [home, apiKey]);

  return (
    <View style={tw`flex-1 justify-center items-center bg-green-600`}>
      {coordinates && (
        <MapView
          style={tw`flex-1 w-full h-full`}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Marker for the member's location */}
          <Marker coordinate={coordinates} title={`${name}'s Home`} />
        </MapView>
      )}
    </View>
  );
};

export default MapLocation;
