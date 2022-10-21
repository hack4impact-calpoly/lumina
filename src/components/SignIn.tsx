import { Button, Heading, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from './FormInput'

type Props = {}

const SignIn = (props: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const signIn = () => {
    navigate("/dashboard")
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
      <Button colorScheme='teal' onClick={signIn}>Sign In</Button>
    </Stack>
  )
}

export default SignIn
