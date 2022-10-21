import { Center } from '@chakra-ui/react'
import React from 'react'
import { Card } from '../components/Card'
import SignIn from '../components/SignIn'

type Props = {}

const Landing = (props: Props) => {

  return (
    <Center h='100%'>
      <Card>
        <SignIn />
      </Card>
    </Center>
  )
}

export default Landing
