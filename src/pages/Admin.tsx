import { Heading } from '@chakra-ui/react';
import React from 'react';
import HomePage from '../components/HomePage';
import { useUser } from '../components/HomeWrapper';

const Admin = () => {
  const user = useUser();
  return (
    <HomePage>
      <Heading>Admin Center</Heading>
    </HomePage>
  );
};

export default Admin;
