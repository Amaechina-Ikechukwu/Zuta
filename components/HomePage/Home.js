import { Avatar, Box, Button, Center, Text } from "native-base";
import React, { useState, useEffect } from "react";
import BrandButton from "../../constants/BrandButton";
import UnButton from "../../constants/UnButton";
import VersalBox from "../../constants/VersalBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "../../State/store";
import BrandText from "../../constants/BrandText";
import { StyleSheet } from "react-native";
import { colors } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import GeneralButton from "../../constants/GeneralButton";
function Home() {
  //Hooks
  const changeTheme = useStore((state) => state.changeTheme);
  const Theme = useStore((state) => state.theme);
  const navigation = useNavigation();
  ///////////////////////////////////////

  //Functions
  const storeData = async (value) => {
    await AsyncStorage.setItem("theme", value);
    changeTheme(value);
    console.log("from theme", Theme);
  };

  const goToSetting = () => {
    navigation.navigate("Settings");
  };

  return (
    <VersalBox
      children={
        <Box flex={1} w="full" p={1}>
          <Box alignItems={"flex-end"}>
            <GeneralButton
              children={<Avatar bg="brand.300">A</Avatar>}
              click={() => goToSetting()}
            />
          </Box>

          <Center>
            <BrandButton text={"Place An Order"} />
            <Box h="3" />
            <UnButton text={"Hide"} />
          </Center>
        </Box>
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
