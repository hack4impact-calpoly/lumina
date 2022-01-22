import React, { useState } from "react";
import { Box, Button, Heading, Stack, Input, Checkbox } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <Heading mb={5}>Sign Up</Heading>
      <Stack>
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox onChange={() => setShowPassword(!showPassword)}>
          Show password
        </Checkbox>
      </Stack>
      <Link to="/">
        <Button>Go back to home</Button>
      </Link>
    </Box>
  );
};

export default Signup;
