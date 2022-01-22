import React, { useState } from "react";
import { Box, Button, Heading, Stack, Input, Checkbox} from "@chakra-ui/react"
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box>
      <Heading mb={5}>Sign Up</Heading>
      <Stack>
        <Input placeholder='Name'/>
        <Input placeholder='Email'/>
        <Input placeholder='Phone Number'/>
        <Input placeholder='Password' type={showPassword ? 'text' : 'password'}/>
        <Checkbox onChange={() => setShowPassword(!showPassword)}>Show password</Checkbox>
      </Stack>
      <Link to="/">
        <Button>Go back to home</Button>
      </Link>
    </Box>
  );
};

export default Signup;
