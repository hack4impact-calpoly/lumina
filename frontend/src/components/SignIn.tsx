import { Button, Heading, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import { Auth } from '@aws-amplify/auth';
import { redirect } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  console.log(navigate);

  const signIn = async () => {
    if (email.length > 0 && password.length > 0) {
      console.log('signIn');
    }

    Auth.signIn(email, password).then((res) => {
      console.log(res);
      return redirect('/home');
    });
  };

  return (
    <Stack>
      <Heading>Volunteer Login</Heading>
      <FormInput label="Email" type="email" isRequired onChange={setEmail} />
      <FormInput
        label="Password"
        type="password"
        isRequired
        onChange={setPassword}
      />
      <Button colorScheme="teal" onClick={signIn}>
        Sign In
      </Button>
    </Stack>
  );
}

export default SignIn;
