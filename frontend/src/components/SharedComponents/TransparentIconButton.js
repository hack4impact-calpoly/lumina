import React from "react";
import { IconButton } from "@chakra-ui/react";

// Renders an icon button with no gray background

const TransparentIconButton = (props) => {
  return <IconButton {...props} icon={props.icon} bg="rgba(255,255,255,0)" />;
};

export default TransparentIconButton;
