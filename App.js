import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import zipCodeScreen from "./screen/ZipCodeScreen";
import WeatherScreen from "./screen/WeatherScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="Home"
          component={zipCodeScreen}
          
        />
        <Stack.Screen
          name="Weather"
          component={WeatherScreen}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}