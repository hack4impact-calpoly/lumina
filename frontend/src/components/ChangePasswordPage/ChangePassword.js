import {
  Box,
  Checkbox,
  Heading,
  Input,
  Stack,
  Text,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box>
      <Heading textAlign="center" mb={5}>Change Password</Heading>
      <Text textAlign="center" mb={5}>
        Password reset has been verified. Please set a new password.
      </Text>
      <Link to="/">
        <Button mb={5}>Go back to home</Button>
      </Link>
      <Stack>
        <Text>New Password</Text>
        <Input
          placeholder="New Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text>Confirm New Password</Text>
        <Input
          placeholder="Confirm New Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Checkbox onChange={() => setShowPassword(!showPassword)}>
          Show Password
        </Checkbox>
        <Text color="red">
          {password === confirmPassword
            ? ""
            : "Password and Confirm Password needs to be the same"}
        </Text>
      </Stack>
    </Box>
  );
};

export default ChangePassword;
