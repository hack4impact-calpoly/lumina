import React from "react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
} from "@chakra-ui/react";

// Generic password input box with a show and hide right element button
// Show password states MUST be handled in the parent component
// Accepted Props:
// placeholder (optional)
// setPassword (required)
// showPassword, setShowPassword (required)

const PasswordInput = ({
  placeholder,
  setPassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <InputGroup>
      <Input
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputRightElement w="5.5rem">
        <Button
          bg="rgba(255, 255, 255, 0)"
          onClick={() => setShowPassword(!showPassword)}
          _hover={{
            bg: "rgba(255, 255, 255, 0)",
          }}
        >
          <Text mr="9px">{showPassword ? "Hide" : "Show"}</Text>
          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
