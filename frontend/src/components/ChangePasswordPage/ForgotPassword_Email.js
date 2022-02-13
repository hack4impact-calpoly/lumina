import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  Input,
  Text,
  Image,
  Center,
  Flex,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import FormInput from "../SharedComponents/FormInput";
import { Card } from "../SharedComponents/Card";

const ForgotPassword_Email = () => {
    const [email, setEmail] = useState("");

    function submit() {
        const userEmail = {
            email: email
        }
    }

    return(
        <Box>
            <LogoWithBack back="/"/>

            <Center>
            <Heading>Forgot Password</Heading>
            </Center>
            <Center>
            <Text mb={2}>Please enter the email that your RISE volunteer account is associated with.</Text>
            </Center>
            
            <Center>
            <Stack>
                
                <FormInput 
                width="300px"
                id="email" 
                invalid={email === ""} 
                label="Email" 
                placeholder="example@example.com" 
                onChange={(e) => setEmail(e.target.value)}
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
                onClick={() => submit()}> Sumbit </Button>
            </Flex>
        </Box>
    );

};


export default ForgotPassword_Email;
