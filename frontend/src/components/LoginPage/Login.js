import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Text
} from '@chakra-ui/react';

import { Card } from "../SharedComponents/Card";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import FormInput from "../SharedComponents/FormInput";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  let submitLogin = (email, password) => {
    console.log('submitted email: ' + email);
    console.log('submitted password: ' + password);
  }

  const mainStyle = {
    backgroundColor: '#F6F6F6'
  }

  return (
      <main style={ mainStyle }>
        <Container h='100vh'>
          <VStack justify='center' h='100%'>
            <Card>
              <LogoWithBack />
              <Heading as='h1' size='3xl' align='center' color='#024E6B'>Volunteer System</Heading>
              <FormControl id='loginForm' mt='1rem' pt='2rem'>

              <FormInput
                id="email"
                isInvalid={email === ""}
                label="Email"
                placeholder="example@example.com"
                errorMessage="Email is required"
                onChange={(e) => setEmail(e.target.value)}
                isRequired
              />
              <Text color="red">{validEmail ? "" : "Invalid Email"}</Text>

                <FormInput
                  id="password"
                  isInvalid={password === ""}
                  label="Password"
                  errorMessage="Password is required"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  setPassword={setPassword}
                  setShowPassword={setShowPassword}
                  showPassword={showPassword}
                  isRequired
                />                
                <FormLabel htmlFor='passwordField' id='forgotPassword' float='right'>
                  <Link to="/forgot-password">
                    Forgot your password?
                  </Link>
                </FormLabel>

                <Button
                  isFullWidth
                  my='1rem'
                  onClick={ () => submitLogin(email, password) }
                  background='#024E6B'
                  color='white'
                >
                  Log In
                </Button>
                <Box id='createAccount' textAlign='center'>First time? <Link to='/sign-up' title='Create a new Lumina volunteer account'>Create a new account</Link></Box>
              </FormControl>
            </Card>
          </VStack>
        </Container>
      </main>
  );
}
