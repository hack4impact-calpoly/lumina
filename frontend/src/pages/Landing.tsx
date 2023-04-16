import {
  Button,
  Checkbox,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import FormInput from '../components/FormInput';

function Landing() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signIn = async () => {
    if (email.length > 0 && password.length > 0) {
      console.log('signIn');
    }
  };
  return (
    <Container
      maxW="lg"
      pt={{ base: '5', md: '26' }}
      pb={{ base: '0', md: '26' }}
      px={{ base: '10' }}
    >
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'sm', md: 'sm' }}>
              Log in to your account
            </Heading>
          </Stack>
        </Stack>
        <Stack spacing="25" pb={{ base: '4' }}>
          <Stack spacing="5">
            <FormInput
              label="Email"
              type="email"
              isRequired
              onChange={setEmail}
            />
            <FormInput
              label="Password"
              type="password"
              isRequired
              onChange={setPassword}
            />
          </Stack>
          <HStack justify="space-between" spacing="0">
            <Checkbox defaultChecked fontSize="sm">
              <Text fontSize="sm">Remember me</Text>
            </Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="4">
            <Button variant="primary" onClick={signIn}>
              Sign in
            </Button>
          </Stack>
        </Stack>
        <HStack spacing="1" justify="center">
          <Text fontSize="sm" color="muted">
            {`Don't have an account?`}
          </Text>
          <Button
            onClick={() => navigate('/sign-up')}
            variant="link"
            colorScheme="blue"
            size="sm"
          >
            Sign up
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
}

export default Landing;
