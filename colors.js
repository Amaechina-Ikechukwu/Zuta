import store from "./State/vanillaStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import useStore from "./State/store";
console.log("themecolr", store.getState().theme);

const getData = () => {
  let theme = "";
  AsyncStorage.getItem("theme").then((value) => {
    if (value !== null) {
      // value previously stored
      theme = value;
      console.log("from async storage", value);
    }
  });
  return theme;
};
export const colors = {
  primary: getData() == "light" ? "#fcfcfc" : "#1d1d1d",
  accent: "#316bff",
  success: "#00d1ac",
  error: "#ff5959",
  disable: "#646464",
  highlight: "#d9d9d9",
  confirmCode: "#818181",
};
