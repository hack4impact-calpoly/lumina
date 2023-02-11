import {
  Button,
  Container,
  Stack,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import nonEmptyFields from '../hooks/nonEmptyFields';
import signUp from '../hooks/signUp';
import { emailRegex, phoneRegex } from '../misc/regex';
import Logo from '../components/Logo';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const validateEmail = () => email.toLowerCase().match(emailRegex);

  const validatePhone = () => phoneNumber.toLowerCase().match(phoneRegex);
  const validateSignUp = () => {
    if (
      nonEmptyFields(
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword
      )
    ) {
      if (password === confirmPassword && validateEmail() && validatePhone()) {
        signUp(email, password, `+1${phoneNumber}`, firstName + lastName);
      }
    }
  };

  return (
    <Container maxW="md" py={{ base: '12', md: '24' }}>
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Logo />
          <Stack spacing="3" textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }}>Create an account</Heading>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormInput
              label="First Name"
              type="text"
              isRequired
              onChange={setFirstName}
            />
            <FormInput
              label="Last Name"
              type="text"
              isRequired
              onChange={setLastName}
            />
            <FormInput
              label="Email"
              type="email"
              isRequired
              onChange={setEmail}
            />
            <FormInput
              label="Phone Number"
              type="text"
              isRequired
              onChange={setPhoneNumber}
            />
            <FormInput
              label="Password"
              type="password"
              isRequired
              onChange={setPassword}
            />
            <FormInput
              label="Confirm Password"
              type="password"
              isRequired
              onChange={setConfirmPassword}
            />
          </Stack>
          <Stack spacing="4">
            <Button variant="primary" onClick={validateSignUp}>
              Create account
            </Button>
          </Stack>
        </Stack>
        <HStack justify="center" spacing="1">
          <Text fontSize="sm" color="muted">
            Already have an account?
          </Text>
          <Button
            onClick={() => navigate('/')}
            variant="link"
            colorScheme="blue"
            size="sm"
          >
            Log in
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
}

export default SignUp;
