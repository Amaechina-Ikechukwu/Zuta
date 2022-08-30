import React, { useState, useEffect } from "react";
import { Box, Pressable, Text } from "native-base";
function GeneralButton({ children, click }) {
  return (
    <Pressable onPress={click}>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            rounded="full"
            alignItems="center"
            justifyContent="center"
            //   bg={isPressed ? "gray.500" : isHovered ? "blue.500" : "brand.300"}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            p="2"
          >
            {children}
          </Box>
        );
      }}
    </Pressable>
  );
}

export default GeneralButton;
