import { Heading } from '@chakra-ui/react';
import React from 'react';
import HomePage from '../components/HomePage';
import { User } from '../types/User';

type Props = {
  user: User;
};

const Admin = ({ user }: Props) => {
  return (
    <HomePage>
      <Heading>Admin Center</Heading>
    </HomePage>
  );
};

export default Admin;
