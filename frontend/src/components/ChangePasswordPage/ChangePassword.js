import { Box, Center, Text, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import { CenterBox } from "../SharedComponents/CenterBox";
import { Card } from "../SharedComponents/Card";
import FormInput from "../SharedComponents/FormInput";

const ChangePassword = () => {
  const [successPasswordChange, setSuccessPasswordChange] = useState(false);
  let navigate = useNavigate();

  return (
    <CenterBox>
      {successPasswordChange ? (
        navigate("/change-password/confirm", { replace: false })
      ) : (
        <ChangePasswordForm
          setSuccessPasswordChange={setSuccessPasswordChange}
        />
      )}
    </CenterBox>
  );
};

const ChangePasswordForm = ({ setSuccessPasswordChange }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [validPassword, setValidPassword] = useState(true);
  const [samePasswordConfirmPassword, setSamePasswordConfirmPassword] =
    useState(true);

  function submitPasswordChange() {
    if(isValidForm()) {
      setSuccessPasswordChange(true)
    }
  }

  function isValidForm() {
    const goodPassword = password.length >= 6;
    if (!goodPassword) setValidPassword(false);
    else setValidPassword(true);
    const identicalPassword = password === confirmPassword;
    if (!identicalPassword) setSamePasswordConfirmPassword(false);
    else setSamePasswordConfirmPassword(true);
    return (
      password !== "" &&
      confirmPassword !== "" &&
      identicalPassword &&
      goodPassword
    );
  }
  return (
    <Center>
    <Box textAlign="center">
      <LogoWithBack back="/" />
      <Heading as="h1" mb={8}>
        Password Reset
      </Heading>
      <Text mb={5}>
        Password reset has been verified. Please set a new password.
      </Text>
      <Card textAlign="left">
        <FormInput
          id="password"
          label="Password"
          isRequired
          type="password"
          isInvalid={password === ""}
          errorMessage="Password is required"
          onChange={(e) => setPassword(e.target.value)}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        <Text color={validPassword ? "black" : "red"} fontSize="14px">
          *Password must be at least 6 characters long
        </Text>
        <FormInput
          id="confirmPassword"
          label="Confirm Password"
          isRequired
          type="password"
          isInvalid={confirmPassword === ""}
          errorMessage="Confirm Password is required"
          onChange={(e) => setConfirmPassword(e.target.value)}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        <Text color="red">
          {samePasswordConfirmPassword
            ? ""
            : "Password and Confirm Password must be the same"}
        </Text>
        <Button mt={3} onClick={() => submitPasswordChange()}>
          Submit
        </Button>
      </Card>
    </Box>
    </Center>
  );
};

export default ChangePassword;
