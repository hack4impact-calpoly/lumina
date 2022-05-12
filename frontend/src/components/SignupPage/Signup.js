import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Card } from "../SharedComponents/Card";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import FormInput from "../SharedComponents/FormInput";
import { CenterBox } from "../SharedComponents/CenterBox";

const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const NUMBER_REGEX = /^\d+$/

const Signup = () => {
    const [firstName, setFirstName] = useState('')

    const [email, setEmail] = useState('')

    const [accountCreated, setAccountCreated] = useState(false)


  return (
    <CenterBox>
      {accountCreated ? (
        <Navigate to="/sign-up/success" replace={false} state={{name: firstName, email: email}} />
      ) : (
        <SignupForm
          firstName={firstName}
          setFirstName={setFirstName}
          email={email}
          setEmail={setEmail}
          setAccountCreated={setAccountCreated}
        />
      )}
    </CenterBox>
  );
};

const SignupForm = ({
    firstName,
    setFirstName,
    email,
    setEmail,
    setAccountCreated,
}) => {
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [validEmail, setValidEmail] = useState(true)
    const [validPhoneNumber, setValidPhoneNumber] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [samePasswordConfirmPassword, setSamePasswordConfirmPassword] =
        useState(true)
    const [showPassword, setShowPassword] = useState(false)

    async function register() {
        if (isValidForm()) {
            try {
                const { user } = await Auth.signUp({
                    username: email,
                    password: password,
                })

  function register() {
    if (isValidForm()) {
         console.log(firstName)
         setAccountCreated(true);
    }

    function isValidForm() {
        const goodName = firstName !== '' && lastName !== ''
        const goodEmail = EMAIL_REGEX.test(email)
        if (!goodEmail) setValidEmail(false)
        else setValidEmail(true)
        const goodPhoneNumber =
            NUMBER_REGEX.test(phoneNumber) && phoneNumber.length === 10
        if (!goodPhoneNumber) setValidPhoneNumber(false)
        else setValidPhoneNumber(true)
        const goodPassword = password.length >= 6
        if (!goodPassword) setValidPassword(false)
        else setValidPassword(true)
        const identicalPassword = password === confirmPassword
        if (!identicalPassword) setSamePasswordConfirmPassword(false)
        else setSamePasswordConfirmPassword(true)
        return (
            goodName &&
            email !== '' &&
            goodEmail &&
            phoneNumber !== '' &&
            goodPhoneNumber &&
            password !== '' &&
            confirmPassword !== '' &&
            identicalPassword &&
            goodPassword
        )
    }

    return (
        <Box>
            <LogoWithBack back="/" />
            <Heading>Register an account</Heading>
            <Text mb={2}>All fields are required</Text>
            <Card>
                <FormInput
                    id="firstName"
                    isInvalid={firstName === ''}
                    label="First Name"
                    placeholder="John"
                    errorMessage="First name is required"
                    onChange={(e) => setFirstName(e.target.value)}
                    isRequired
                />
                <FormInput
                    id="lastName"
                    isInvalid={lastName === ''}
                    label="Last Name"
                    placeholder="Doe"
                    errorMessage="Last name is required"
                    onChange={(e) => setLastName(e.target.value)}
                    isRequired
                />
                <FormInput
                    id="email"
                    isInvalid={email === ''}
                    label="Email"
                    placeholder="example@example.com"
                    errorMessage="Email is required"
                    onChange={(e) => setEmail(e.target.value)}
                    isRequired
                />
                <Text color="red">{validEmail ? '' : 'Invalid Email'}</Text>
                <FormInput
                    id="phoneNumber"
                    isInvalid={phoneNumber === ''}
                    label="Phone Number"
                    placeholder="+1 (___)___-____"
                    errorMessage="Phone Number is required"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    isRequired
                />
                <Text color="red">
                    {validPhoneNumber
                        ? ''
                        : 'Invalid Phone Number (numbers only)'}
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
                <Text color={validPassword ? 'black' : 'red'} fontSize="14px">
                    *Password must be at least 6 characters long
                </Text>
                <FormInput
                    id="confirmPassword"
                    isInvalid={confirmPassword === ''}
                    label="Confirm Password"
                    errorMessage="Confirm Password is required"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    setPassword={setConfirmPassword}
                    setShowPassword={setShowPassword}
                    showPassword={showPassword}
                    isRequired
                />
                <Text color="red">
                    {samePasswordConfirmPassword
                        ? ''
                        : 'Password and Confirm Password must be the same'}
                </Text>
                <Button
                    variant="animated"
                    w="100%"
                    mt={3}
                    color="white"
                    bg="teal"
                    onClick={() => register()}
                >
                    Register
                </Button>
            </Card>
        </Box>
    )
}

export default Signup
