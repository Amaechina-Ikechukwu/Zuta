import { Text } from "native-base";
import React, { useState, useEffect } from "react";
import useStore from "../State/store";
function BrandText(props) {
  const Theme = useStore((state) => state.theme);

  return (
    <Text
      color={Theme === "light" ? props.color || "brand.700" : "brand.100"}
      fontWeight={props.weight || "normal"}
      fontSize={props.size}
    >
      {props.text}
    </Text>
  );
}

export default BrandText;
