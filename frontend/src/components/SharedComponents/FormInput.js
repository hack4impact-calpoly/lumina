import React from 'react'
import {
    FormControl,
    Input,
    FormLabel,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Box,
    Button,
    Text,
} from '@chakra-ui/react'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'

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
// isRequired (optional)
// Also accepts all <PasswordInput> properties (required if type === 'password')
// See signup page for examples

const FormInput = (props) => {
  return (
    <FormControl {...props} isInvalid={props.isInvalid}>
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
            value={props.value}
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

const PasswordInput = ({
    placeholder,
    onChange,
    showPassword,
    setShowPassword,
}) => {
    return (
        <InputGroup>
            <Input
                placeholder={placeholder}
                type={showPassword ? 'text' : 'password'}
                onChange={onChange}
            />
            <InputRightElement w="5.5rem">
                <Button
                    bg="rgba(255, 255, 255, 0)"
                    onClick={() => setShowPassword(!showPassword)}
                    _hover={{
                        bg: 'rgba(255, 255, 255, 0)',
                    }}
                >
                    <Text mr="9px">{showPassword ? 'Hide' : 'Show'}</Text>
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default FormInput
