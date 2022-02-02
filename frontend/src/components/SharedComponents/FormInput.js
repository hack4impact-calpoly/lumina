import React from "react";
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import PasswordInput from "./PasswordInput";

// Generic Input for a form, includes a <FormControl>, <FormLabel>, <Input>, <FormErrorMessage>, etc.
// Available props:
// id (required)
// isInvalid (optional)
// label (required)
// leftElement (optional)
// rightElement (optional)
// placeholder (optional)
// onChange (required)
// type (password or not)
// errorMessage (optional)
// Also accepts all <PasswordInput> properties (required if type === 'password')
// See signup page for examples


const FormInput = (props) => {
  return (
    <FormControl isRequired isInvalid={props.isInvalid}>
      <FormLabel htmlFor={props.id} fontWeight="bold">
        {props.label}
      </FormLabel>
      <InputGroup>
        {props.leftElement ? (
          <InputLeftElement>{props.leftElement}</InputLeftElement>
        ) : (
          <Box></Box>
        )}
        {props.type === "password" ? (
          <PasswordInput {...props} />
        ) : (
          <Input
            id={props.id}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
        )}
        {props.rightElement ? (
          <InputRightElement>{props.rightElement}</InputRightElement>
        ) : (
          <Box></Box>
        )}
      </InputGroup>
      <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
