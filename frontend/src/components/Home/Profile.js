import React from "react";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Profile = ({ user }) => {
  return (
    <Flex w="100%" flexDir="column">
      <VStack>
        <Heading size="2xl" pb={5}>
          {user.name}
        </Heading>
        <Text pb={3}>{user.email}</Text>
        <Text pb={3}>{user.phone}</Text>
        <Flex align="center">
          <Text pr={3}>Change Password</Text>
          <ArrowForwardIcon />
        </Flex>
      </VStack>
      <Flex>
        <Heading size="xl">Recent Shifts</Heading>
      </Flex>
    </Flex>
  );
};

export default Profile;
