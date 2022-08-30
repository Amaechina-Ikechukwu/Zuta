import react, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
  Appearance,
} from "react-native";
import * as SystemUI from "expo-system-ui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "./State/store";
import create from "zustand";
import { useTheme } from "@react-navigation/native";
import { colors } from "./colors";
import store from "./State/vanillaStore";
import General from "./components/General";

export default function App() {
  const changeTheme = useStore((state) => state.changeTheme);
  const systemColor = Appearance.getColorScheme();
  const setSystemUi = useStore((state) => state.setSystemUi);

  const storeData = async (value) => {
    await AsyncStorage.setItem("theme", value);
    getData();
  };

  const getData = () => {
    AsyncStorage.getItem("theme").then((value) => {
      if (value !== null) {
        // value previously stored
        changeTheme(value);
      }
    });
  };
  const changeMode = () => {
    changeTheme(systemColor);
    setSystemUi(true);
  };
  useEffect(() => {
    getData();
    // Appearance.addChangeListener(changeMode());
    // console.log("from app.js", systemColor);
  }, []);

  return <General />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  darkcontainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.primary,
  },
  darktext: {
    color: "#000",
  },
});
