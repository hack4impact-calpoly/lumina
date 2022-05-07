import React, { useState } from 'react'
import {
  Button,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import FormInput from "../SharedComponents/FormInput";
import { Card } from "../SharedComponents/Card";
import { CenterBox } from "../SharedComponents/CenterBox";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ForgotPassword_Email = () => {
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(true)

    let navigate = useNavigate()

    function submit() {
        const goodEmail = EMAIL_REGEX.test(email)
        if (!goodEmail) setValidEmail(false)
        else {
            setValidEmail(true)
            // userEmail in JSON to possibly send to backend later
            const userEmail = {
                email: email,
            }
            navigate('/forgot-password/code', { state: userEmail })
        }
        return email !== '' && goodEmail
    }

    return (
        <CenterBox textAlign="center">
            <LogoWithBack back="/" />

            <Heading>Forgot Password</Heading>

            <Text mb={2}>
                Please enter the email that your RISE volunteer account is
                associated with.
            </Text>

            <Card>
                <FormInput
                    width="300px"
                    ml={260}
                    id="email"
                    invalid={email === ''}
                    label="Email"
                    placeholder="example@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    isRequired
                />
                <Text color="red">{validEmail ? '' : 'Invalid Email'}</Text>

                <Flex>
                    <Button
                        mt="30px"
                        ml="425px"
                        width="150px"
                        color={'white'}
                        bg={'#E53E3E'}
                        variant="animated"
                        onClick={() => submit()}
                    >
                        {' '}
                        Submit{' '}
                    </Button>
                </Flex>
            </Card>
        </CenterBox>
    )
}

export default ForgotPassword_Email
