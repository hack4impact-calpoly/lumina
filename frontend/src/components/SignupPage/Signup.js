import React, { useState } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import FormInput from "../SharedComponents/FormInput";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  function register() {
    navigate("/account-created");
  }

  return (
    <Box>
      <LogoWithBack back="/" />
      <Heading>Register an account</Heading>
      <Text mb={2}>All fields are required</Text>
      <form onSubmit={() => register()}>
        <FormInput
          id="firstname"
          isInvalid={firstName === ""}
          label="First Name"
          errorMessage="First name is required"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormInput
          id="lastName"
          isInvalid={lastName === ""}
          label="Last Name"
          errorMessage="Last name is required"
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormInput
          id="email"
          isInvalid={email === ""}
          label="Email"
          errorMessage="Email is required"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          id="phoneNumber"
          isInvalid={phoneNumber === ""}
          label="Phone Number"
          errorMessage="Phone Number is required"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <FormInput
          id="password"
          isInvalid={password === ""}
          label="Password"
          errorMessage="Password is required"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          setPassword={setPassword}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        <FormInput
          id="confirmPassword"
          isInvalid={confirmPassword === ""}
          label="Confirm Password"
          errorMessage="Confirm Password is required"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          setPassword={setConfirmPassword}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        <Button
          color="white"
          bg="teal"
          type="submit"
          onClick={() => register()}
          float="right"
        >
          Register
        </Button>
      </form>

      {/* <Text fontWeight="bold">Phone Number</Text>
        <Input
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Text color="red">
          {!validPhoneNumber
            ? ""
            : "Not a valid phone number (numbers only, no country code)"}
        </Text>
        <Text fontWeight="bold">Password</Text>
        <PasswordInput
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Text color="red">
          {password.length >= 6
            ? ""
            : "Passwords must be at least 6 characters long"}
        </Text>
        <Text fontWeight="bold">Confirm Password</Text>
        <PasswordInput
          placeholder="Confirm Password"
          setPassword={setConfirmPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Text color="red">
          {password === confirmPassword
            ? ""
            : "Password and Confirm password must be the same"}
        </Text> */}
    </Box>
  );
};

export default Signup;
