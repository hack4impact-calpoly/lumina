import { GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import HomePage from '../components/HomePage';
import Announcements from '../components/Announcements';
import { useUser } from '../components/HomeWrapper';
import EZGrid from '../components/EZGrid';

const Dashboard = () => {
  const user = useUser();
  return (
    <HomePage>
      <EZGrid rowUnits={7} colUnits={2}>
        <GridItem rowSpan={1} colSpan={2}>
          <Heading size="4xl">{'Hi ' + user.firstName + '!'}</Heading>
        </GridItem>
        <GridItem rowSpan={6} colSpan={1}>
          <Text fontWeight="bold" fontSize="4xl">
            Your next shifts
          </Text>
        </GridItem>
        <GridItem rowSpan={6} colSpan={1}>
          <Announcements />
        </GridItem>
      </EZGrid>
    </HomePage>
  );
};

export default Dashboard;
