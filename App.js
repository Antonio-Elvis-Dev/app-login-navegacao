import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

console.disableYellowBox=true;

export default function App() {

  return (
    <NavigationContainer >
      <Routes />
    </NavigationContainer>
  );
}


