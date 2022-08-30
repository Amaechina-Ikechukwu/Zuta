import { Box, Button, Text } from "native-base";
import React, { useState, useEffect } from "react";
import BrandButton from "../../constants/BrandButton";
import UnButton from "../../constants/UnButton";
import VersalBox from "../../constants/VersalBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "../../State/store";
import BrandText from "../../constants/BrandText";
import { StyleSheet } from "react-native";
import { colors } from "../../colors";
function Home() {
  const storeData = async (value) => {
    await AsyncStorage.setItem("theme", value);
    changeTheme(value);
    console.log("from theme", Theme);
  };
  const changeTheme = useStore((state) => state.changeTheme);
  const Theme = useStore((state) => state.changeTheme);

  return (
    <VersalBox
      children={
        <>
          <Box>
            <BrandText text={"Welcome to Zuta"} weight={"medium"} />
          </Box>
          <Button
            style={{
              padding: 5,
              backgroundColor: colors.accent,
              borderRadius: 5,
            }}
            onPress={() => storeData("dark")}
          >
            <Text style={styles.text}>Change Dark</Text>
          </Button>
          <Button
            style={{
              padding: 5,
              backgroundColor: colors.accent,
              borderRadius: 5,
            }}
            onPress={() => storeData("light")}
          >
            <Text style={styles.text}>Change Light</Text>
          </Button>
          <BrandButton text={"Place An Order"} />
          <UnButton text={"Hide"} />
        </>
      }
    />
  );
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
export default Home;
