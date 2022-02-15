import { Text, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import { CenterBox } from "../SharedComponents/CenterBox";

export default function ConfirmChangePassword() {
  return (
    <CenterBox textAlign="center">
      <LogoWithBack />
      <Heading as="h1" mb={8}>
        Account Created
      </Heading>
      <Text mb={6}>
        Your password has been successfully changed. A confirmation of this change has been sent to your associated email account.
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
