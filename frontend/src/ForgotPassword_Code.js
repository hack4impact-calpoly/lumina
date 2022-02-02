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


const ForgotPassword_Code = ({email}) => {
    const [code, setCode] = useState("");

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
            <Text>An email has been sent to {email} to verify that you are trying to change your password.</Text>
            </Center>

            <Center>
            <Stack>
                
                <Text fontWeight="bold">Please enter the verification code:</Text>
                
                <Input width="300px" onChange={(e) => setCode(e.target.value)}/>
                
                
                <Button colorScheme='red' width="150px">Submit</Button>
                
            </Stack>
            </Center>
            
        </Box>
    );
};


export default ForgotPassword_Code;