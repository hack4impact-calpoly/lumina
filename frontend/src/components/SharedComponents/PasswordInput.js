import React from "react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
} from "@chakra-ui/react";

// Show input states MUST be held within the parent component

const PasswordInput = ({
  label,
  setPassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <InputGroup>
      <Input
        placeholder={label}
        type={showPassword ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputRightElement w="5.5rem">
        <Button onClick={() => setShowPassword(!showPassword)}>
          <Text mr="9px">{showPassword ? "Hide" : "Show"}</Text>
          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
