import { Button, Card, Center, VStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';

function Landing() {
  const navigate = useNavigate();
  return (
    <Center h="100%">
      <Card>
        <VStack>
          <SignIn />
          <Button
            w="100%"
            colorScheme="blue"
            onClick={() => navigate('/sign-up')}
          >
            Sign Up
          </Button>
        </VStack>
      </Card>
    </Center>
  );
}

export default Landing;
