import { Heading } from '@chakra-ui/react';
import React from 'react';
import HomePage from '../components/HomePage';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <HomePage>
      <Heading>Dashboard</Heading>
    </HomePage>
  );
};

export default Dashboard;
