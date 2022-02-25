import { Text, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import { CenterBox } from "../SharedComponents/CenterBox";

export default function ConfirmSignup() {
   const location = useLocation();

  return (
    <CenterBox textAlign="center">
      <LogoWithBack />
      <Heading as="h1" mb={8}>
        Account Created
      </Heading>
      <Heading as="h2" mb={5}>
        Hi, {location.state.name}!
      </Heading>
      <Text mb={6}>
        An account has been created using the email{" "}
        {<Text fontWeight="bold">{location.state.email}</Text>} which will be used to log in to
        the Lumina Alliance volunteer system.
      </Text>
      <Text mb={6}>
        Please wait 3-5 business days for your account to become active, as you
        will not be able to access the volunteer system until a staff member
        approves your account.
      </Text>
      <Text mb={6}>Thank you for volunteering with Lumina Alliance!</Text>
      <Link to="/">
        <Button color="white" bg="teal" variant="animated">
          Return to Login
        </Button>
      </Link>
    </CenterBox>
  )
}
