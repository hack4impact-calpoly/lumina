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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowBackIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import FormInput from "../SharedComponents/FormInput";
import { CenterBox } from "../SharedComponents/CenterBox";
import { Card } from "../SharedComponents/Card";

function ForgotPassword_Code(props) {
  const [code, setCode] = useState("");
  const [validCode, setValidCode] = useState(true);

  const { state } = useLocation();
  console.log(state);
  const email = state.email;

  let navigate = useNavigate();

  function submit() {
    if (code === "") setValidCode(false);
    else {
      setValidCode(true);

      const userCode = {
        email: email,
        code: code,
      };
      navigate("/change-password");
    }
    return code !== "" && validCode;
  }

  return (
    <CenterBox textAlign="center">
      <LogoWithBack back="/" />

      <Heading>Forgot Password</Heading>

      <Text>
        An email has been sent to {email} to verify that you are trying to
        change your password.
      </Text>

      <Card>
        <FormInput
          width="300px"
          ml={260}
          id="code"
          invalid={code === ""}
          label="Please enter the verification code:"
          onChange={(e) => setCode(e.target.value)}
          isRequired
        />
        <Text color="red">{validCode ? "" : "Invalid Code"}</Text>

        <Flex>
          <Button
            mt="30px"
            ml="425px"
            width="150px"
            color={"white"}
            bg={"#E53E3E"}
            variant="animated"
            onClick={() => submit()}
          >
            Submit
          </Button>
        </Flex>
      </Card>
    </CenterBox>
  );
}

export default ForgotPassword_Code;
