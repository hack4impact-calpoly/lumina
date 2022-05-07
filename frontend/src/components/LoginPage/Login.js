import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
    Box,
    Container,
    Center,
    Heading,
    FormControl,
    FormLabel,
    Button,
    Text,
} from '@chakra-ui/react'

import { Card } from '../SharedComponents/Card'
import LogoWithBack from '../SharedComponents/LogoWithBack'
import FormInput from '../SharedComponents/FormInput'

const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function Login() {
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(true)

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(true)

    const [showPassword, setShowPassword] = useState(false)

    function submitLogin() {
        if (isValidForm()) {
            console.log('submitted email: ' + email)
            console.log('submitted password: ' + password)
        }
    }

  function isValidForm() {
    const goodEmail = EMAIL_REGEX.test(email);
    if (!goodEmail) setValidEmail(false);
    else setValidEmail(true);
    const goodPassword = password.length >= 6;
    if (!goodPassword) setValidPassword(false);
    else setValidPassword(true);
    return (
      email !== "" &&
      goodEmail &&
      password !== "" &&
      goodPassword
    );
  }

    return (
        <Box style={mainStyle}>
            <Container h="100vh">
                <Center h="100%">
                    <Card>
                        <LogoWithBack />
                        <Heading
                            as="h1"
                            size="2xl"
                            align="center"
                            color="#024E6B"
                        >
                            Volunteer System
                        </Heading>
                        <FormControl id="loginForm" mt="1rem" pt="2rem">
                            <FormInput
                                id="email"
                                isInvalid={email === ''}
                                label="Email"
                                placeholder="example@example.com"
                                errorMessage="Email is required"
                                onChange={(e) => setEmail(e.target.value)}
                                isRequired
                            />
                            <Text color="red">
                                {validEmail ? '' : 'Invalid Email'}
                            </Text>

                            <FormInput
                                id="password"
                                isInvalid={password === ''}
                                label="Password"
                                errorMessage="Password is required"
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                setPassword={setPassword}
                                setShowPassword={setShowPassword}
                                showPassword={showPassword}
                                isRequired
                            />
                            <FormLabel
                                htmlFor="passwordField"
                                id="forgotPassword"
                                float="right"
                            >
                                <Link to="/forgot-password">
                                    Forgot your password?
                                </Link>
                            </FormLabel>

                            <Button
                                variant="animated"
                                isFullWidth
                                my="1rem"
                                onClick={() => submitLogin()}
                                background="#024E6B"
                                color="white"
                            >
                                Log In
                            </Button>
                            <Box id="createAccount" textAlign="center">
                                First time?{' '}
                                <Link
                                    to="/sign-up"
                                    title="Create a new Lumina volunteer account"
                                >
                                    Create a new account
                                </Link>
                            </Box>
                        </FormControl>
                    </Card>
                </Center>
            </Container>
        </Box>
    )
}
