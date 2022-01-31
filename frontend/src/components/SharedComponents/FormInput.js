import React from "react";
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import PasswordInput from "./PasswordInput";

const FormInput = (props) => {
  return (
    <FormControl isRequired isInvalid={props.isInvalid}>
      <FormLabel htmlFor={props.htmlFor} fontWeight="bold">
        {props.label}
      </FormLabel>
      {props.type === "password" ? (
        <PasswordInput {...props}/>
      ) : (
        <Input
          id={props.htmlFor}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      )}

      <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
