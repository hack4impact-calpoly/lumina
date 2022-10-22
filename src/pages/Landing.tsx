import { Button, Center, VStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import SignIn from '../components/SignIn';

type Props = {};

const Landing = (props: Props) => {
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
};

export default Landing;
