import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
  Image,
  Center,
  Flex,
  InputRightElement,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import FormInput from "../SharedComponents/FormInput";


const ForgotPassword_Code = ({email}) => {
    const [code, setCode] = useState("");

    function submit() {
        const userCode = {
            email: email,
            code: code
        }
    }

    return(
        <Box>
            <LogoWithBack back="/"/>

            <Center>
            <Heading>Forgot Password</Heading>
            </Center>
            <Center>
            <Text>An email has been sent to {email} to verify that you are trying to change your password.</Text>
            </Center>

            <Center>
                <Stack>
                    <FormInput 
                    width="300px" 
                    id="code" 
                    invalid={email === ""}
                    label="Please enter the verification code:"
                    onChange={(e) => setCode(e.target.value)}
                    isRequired/>
                </Stack>
            </Center>
                
            <Flex>
                <Button 
                mt= "30px" 
                ml="725px"
                width="150px"
                color={"white"}
                bg={"#E53E3E"}
                variant="animated"
                onClick={() => submit()}>Submit</Button>
            </Flex>
            
        </Box>
    );
};


export default ForgotPassword_Code;