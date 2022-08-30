import { Box, extendTheme, NativeBaseProvider } from "native-base";
import React, { useEffect, useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "../State/vanillaStore";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { StorageManager } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../colors";
import useStore from "../State/store";
import BrandButton from "../constants/BrandButton";
import VersalBox from "../constants/VersalBox";
import UnButton from "../constants/UnButton";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomePage/Home";
//Hooks
const Stack = createNativeStackNavigator();
const newColorTheme = {
  brand: {
    100: "#fcfcfc",
    200: "#1d1d1d",
    300: "#316bff",
    400: "#00d1ac",
    500: "#ff5959",
    800: "#646464",
    600: "#d9d9d9",
    700: "#818181",
  },
};

const theme = extendTheme({ colors: newColorTheme });

function General() {
  let colorScheme = useColorScheme();

  useEffect(() => {}, []);

  const Theme = useStore((state) => state.theme);

  return (
    <>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}

export default General;
