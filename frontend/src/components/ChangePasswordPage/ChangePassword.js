import { Box, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import { CenterBox } from "../SharedComponents/CenterBox";
import { Card } from "../SharedComponents/Card";
import FormInput from "../SharedComponents/FormInput";
import { Auth } from 'aws-amplify';
import { useLocation, useNavigate } from "react-router-dom";

const ChangePassword = (props) => {
  const [successPasswordChange, setSuccessPasswordChange] = useState(false);

  const { state } = useLocation();
  console.log(state);
  const email = state.email;
  const code = state.code;

  return (
    <CenterBox>
      {successPasswordChange ? (
        <ChangePasswordConfirm />
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


      //update password through amplify
      // Auth.forgotPasswordSubmit(email, code, password)
      //   .then(data => console.log(data))
      //   .catch(err => console.log(err));
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
    <Box>
      <LogoWithBack back="/" />
      <Text textAlign="center" mb={5}>
        Password reset has been verified. Please set a new password.
      </Text>
      <Card>
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
  );
};

const ChangePasswordConfirm = () => {
  return <Box>GOOD PASSWORD</Box>;
};

export default ChangePassword;
