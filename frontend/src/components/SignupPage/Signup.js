import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  Input,
  Checkbox,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validForm, setValidForm] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  function register() {
    if (formFilled()) {
      const newUser = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      };
      const goodEmail = isValidEmail();
      const goodPhoneNumber = isValidPhoneNumber();
      const goodPassword = isValidPassword();
      if (goodEmail && goodPhoneNumber && goodPassword) {
        console.log("Valid user!");
      }
    }
  }

  function formFilled() {
    setValidForm(
      name !== "" &&
        email !== "" &&
        phoneNumber !== "" &&
        password !== "" &&
        confirmPassword !== ""
    );
    return (
      name !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      password !== "" &&
      confirmPassword !== ""
    );
  }

  function isValidPassword() {
    return password === confirmPassword && password.length >= 6
  }

  function isValidEmail() {
    setValidEmail(email.includes("@"));
    return email.includes("@");
  }

  function isValidPhoneNumber() {
    setValidPhoneNumber(phoneNumber.length === 10);
    return phoneNumber.length === 10;
  }

  return (
    <Box mt={5} mb={5} ml="25%" mr="25%">
      <Stack direction="row">
        <Link to="/">
          <Button textAlign="right" mt={3} mb={3} bg="white">
            {"< Back"}
          </Button>
        </Link>
        <Image align="center" />
      </Stack>
      <Heading>Register an account</Heading>
      <Text mb={2}>All fields are required</Text>
      <Stack>
        <Text fontWeight="bold">Name</Text>
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <Text fontWeight="bold">Email</Text>
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Text color="red">{validEmail ? "" : "Not a valid email address"}</Text>
        <Text fontWeight="bold">Phone Number</Text>
        <Input
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Text color="red">
          {validPhoneNumber ? "" : "Not a valid phone number (numbers only, no country code)"}
        </Text>
        <Text fontWeight="bold">Password</Text>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text color="red">
          {password.length >= 6
            ? ""
            : "Passwords must be at least 6 characters long"}
        </Text>
        <Text fontWeight="bold">Confirm Password</Text>
        <Input
          placeholder="Confirm Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Checkbox onChange={() => setShowPassword(!showPassword)}>
          Show password
        </Checkbox>
        <Text color="red">
          {password === confirmPassword
            ? ""
            : "Password and Confirm password must be the same"}
        </Text>

        <Button onClick={() => register()}>Register</Button>
        <Text color="red">
          {validForm
            ? ""
            : "Please fill out all text boxes"}
        </Text>
      </Stack>
    </Box>
  );
};

export default Signup;
