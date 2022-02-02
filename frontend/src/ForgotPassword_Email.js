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
import { Link } from "react-router-dom";
import { ArrowBackIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const ForgotPassword_Email = () => {
    const [email, setEmail] = useState("");

    function submit() {
        const userEmail = {
            email: email
        }
    }

    return(
        <Box>
            <Flex mb={5}>
                <Center>
                    <Link to="/">
                        <Center>
                            <ArrowBackIcon w="5" h="5" verticalAlign="50%" />
                            <Text mb="2px" fontSize="20px">
                            Login
                            </Text>
                        </Center>
                    </Link>
                </Center>
                <Center flex="1" mr="100px">
                    <Image
                    src="https://slochamber.org/wp-content/uploads/2018/12/RISE_1024.png"
                    w="100px"
                    h="50px"
                    />
                </Center>
            </Flex>

            <Center>
            <Heading>Forgot Password</Heading>
            </Center>
            <Center>
            <Text mb={2}>Please enter the email that your RISE volunteer account is associated with.</Text>
            </Center>
            
            <Center>
            <Stack>
                
                <Text fontWeight="bold">Email</Text>
                <Input
                    width="300px"
                    onChange={(e) => setEmail(e.target.value)}/>

                <Button width="150px" colorScheme='red' onClick={() => submit()}> Sumbit </Button>
            </Stack>
            </Center>
        </Box>
    );

};


export default ForgotPassword_Email;
