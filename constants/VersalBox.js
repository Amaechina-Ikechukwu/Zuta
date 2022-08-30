import { Box } from "native-base";
import React, { useState, useEffect } from "react";
import useStore from "../State/store";
function VersalBox({ children }) {
  const Theme = useStore((state) => state.theme);
  return (
    <Box
      flex={1}
      bg={Theme === "light" ? "brand.100" : "brand.200"}
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}

export default VersalBox;
