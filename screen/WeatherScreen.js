import Weather from "../components/weather";
import { StatusBar ,View , Text } from "react-native";
import React from 'react' 



export default function WeatherScreen({route}) {
    return (
    <View>
    <Weather zipCode={route.params.zipCode} />
    <StatusBar style="auto" />
    </View>
    );
   }