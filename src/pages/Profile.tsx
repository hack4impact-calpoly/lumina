import { Avatar, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import HomePage from '../components/HomePage';
import { fakeUsers } from '../hooks/createFakeUser';
import { User } from '../types/User';

type Props = {};

const Profile = (props: Props) => {
  const user: User = fakeUsers(1)[0];
  const name: string = user.firstName + ' ' + user.lastName;
  return (
    <HomePage>
      <Heading textAlign="center" mb={6}>
        Profile
      </Heading>
      <VStack>
        <Avatar w="320px" h="320px" />
        <Text fontWeight="bold" fontSize="6xl">
          {name}
        </Text>
        <Text fontSize="2xl">{user.email}</Text>
        <Text fontSize="2xl">{user.phoneNumber}</Text>
      </VStack>
    </HomePage>
  );
};

export default Profile;
