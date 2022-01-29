import { Button } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { isMobile } from "react-device-detect";
import React from "react";
import { Link } from "react-router-dom";

const AccountCreated = ({ firstName, email }) => {
  return (
    <Box textAlign="center">
      <Heading as="h1" mb={8}>
        Account Created
      </Heading>
      <Heading as="h2" mb={5}>
        Hi, {firstName}!
      </Heading>
      <Text mb={6}>
        An account has been created using the email {<Text fontWeight="bold">{email}</Text>} which will be used
        to log in to the Lumina Alliance volunteer system.
      </Text>
      <Text mb={6}>
        Please wait 3-5 business days for your account to become active, as you
        will not be able to access the volunteer system until a staff member
        approves your account.
      </Text>
      <Text mb={6}>Thank you for volunteering with Lumina Alliance!</Text>
      <Link to="/">
        <Button>Return to Login</Button>
      </Link>
    </Box>
  );
};

export default AccountCreated;
