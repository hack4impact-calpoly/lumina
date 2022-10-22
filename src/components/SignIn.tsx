import { Button, Heading, Stack, Center, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from './FormInput'
import { getAuth } from 'firebase/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { firebaseApp } from '../firebaseApp'

type Props = {}

const auth = getAuth(firebaseApp)

const SignIn = (props: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)

  const signIn = async () => {
    if (email.length > 0 && password.length > 0) {
      signInWithEmailAndPassword(email, password)
    }
  }

  if (error) {
    return (
      <Center>
        <Stack>
          <Text>An error has occured, please try again.</Text>
        </Stack>
      </Center>
    )
  }
  if (loading) {
    return (
      <Center>
        <Stack>
          <Text>Loading...</Text>
        </Stack>
      </Center>
    )
  }
  if (user) {
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/dashboard')
  }
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
  )
}

export default SignIn
