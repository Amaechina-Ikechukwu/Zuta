import { Box, Radio, Stack, VStack } from "native-base";
import React, { useState, useEffect } from "react";
import { useColorScheme, Appearance } from "react-native";
import VersalBox from "../../constants/VersalBox";
import useStore from "../../State/store";
import * as SystemUI from "expo-system-ui";
import BrandText from "../../constants/BrandText";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Settings() {
  const systemColor = Appearance.getColorScheme();
  const Theme = useStore((state) => state.theme);
  const changeTheme = useStore((state) => state.changeTheme);
  const isSystemUI = useStore((state) => state.isSystemUI);
  const setSystemUi = useStore((state) => state.setSystemUi);
  console.log(systemColor);
  ///////////////////////////////////////
  //Functions
  const storeData = async (value) => {
    await AsyncStorage.setItem("theme", value);
    changeTheme(value);
    console.log("from theme", Theme);
  };
  const themeChange = (value) => {
    changeTheme(value);
    storeData(value);
  };
  useEffect(() => {}, []);

  return (
    <VersalBox
      children={
        <Box w="full" p={2}>
          <BrandText text={"Appearance"} weight="light" size="20" />
          <VStack p={2}>
            <Radio.Group
              name="exampleGroup"
              defaultValue={Theme}
              accessibilityLabel="pick a size"
              onChange={(nextValue, index) => {
                themeChange(nextValue);
              }}
            >
              <Stack
                direction={{
                  base: "column",
                  md: "column",
                }}
                alignItems={{
                  base: "flex-start",
                  md: "flex-start",
                }}
                space={4}
                w="full"
              >
                <Radio
                  value={"light"}
                  colorScheme="blue"
                  id="light"
                  size="lg"
                  my={1}
                >
                  <BrandText text={"Light"} color="black" size="20" />
                </Radio>
                <Radio
                  value={"dark"}
                  colorScheme="blue"
                  id="dark"
                  size="lg"
                  my={1}
                >
                  <BrandText text={"Dark"} color="black" size="20" />
                </Radio>
                {/* <Radio
                value={isSystemUI ? "system" : null}
                id="System"
                colorScheme="blue"
                size="lg"
                my={1}
              >
                System
              </Radio> */}
              </Stack>
            </Radio.Group>
          </VStack>
        </Box>
      }
    />
  );
}

export default Settings;
