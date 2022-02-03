import React, { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  Flex,
  Image,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react';
import {
  ViewIcon,
  ViewOffIcon
} from '@chakra-ui/icons';

import logo from '../assets/images/RISE-logo-full-1.png';

{/* !!! Add react-router to forgot password and create new account !!! */}
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

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
            <Image id='logo' src={logo} alt='RISE logo in color.' mixBlendMode='multiply' mb='1rem'/>
            <Heading as='h1' size='3xl' align='center' color='#024E6B'>Volunteer System</Heading>
            <FormControl id='loginForm' mt='1rem' pt='2rem'>

              <FormLabel htmlFor='emailField'>Email</FormLabel>
              <Input
                type='email'
                id='emailField'
                placeholder=''
                value={ email }
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                isRequired
                variant='filled'
                background='white'
                mb='1rem'
              />

              <FormLabel htmlFor='passwordField'>Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? 'text' : 'password'}
                  id='passwordField'
                  placeholder=''
                  value={ password }
                  onChange={ (e) => {
                    setPassword(e.target.value);
                  }}
                  isRequired
                  variant='filled'
                  background='white'
                />
                <InputRightElement width='auto' right='0.5rem'>
                  <Button h='1.75rem' size='sm' leftIcon={show ? <ViewOffIcon /> : <ViewIcon />} onClick={ handleClick }>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              
              <FormLabel htmlFor='passwordField' id='forgotPassword' float='right'>Forgot your password?</FormLabel>

              <Button
                isFullWidth
                my='1rem'
                onClick={ () => submitLogin(email, password) }
                background='#024E6B'
                color='white'
              >
                Log In
              </Button>
              <Box id='createAccount' textAlign='center'>First time? <a href='#' title='Create a new Lumina volunteer account'>Create a new account</a></Box>
            </FormControl>
          </VStack>
        </Container>
      </main>
  );
}