import { Avatar, Heading, Text, VStack } from '@chakra-ui/react';
import HomePage from '../components/HomePage';
import { useUser } from '../components/HomeWrapper';

const Profile = () => {
  const user = useUser();
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
