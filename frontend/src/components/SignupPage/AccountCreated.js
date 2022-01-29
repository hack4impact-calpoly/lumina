import { Button } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const AccountCreated = ({ firstName, email }) => {
  return (
    <Box textAlign="center" mt={5} mb={5} ml={400} mr={400}>
      <Heading as="h1" mb={8}>
        Account Created
      </Heading>
      <Heading as="h2" mb={5}>
        Hi, {firstName}!
      </Heading>
      <Text mb={2}>
        An account has been created using the email {email}, which will be used
        to log in to the Lumina Alliance volunteer system.
      </Text>
      <Text mb={2}>
        Please wait 3-5 business days for your account to become active, as you
        will not be able to access the volunteer system until a staff member
        approves your account.
      </Text>
      <Text mb={2}>Thank you for volunteering with Lumina Alliance!</Text>
      <Link to="/">
        <Button>Return to Login</Button>
      </Link>
    </Box>
  );
};

export default AccountCreated;
