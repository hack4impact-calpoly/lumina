import { GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import HomePage from '../components/HomePage';
import Announcements from '../components/Announcements';
import { useUser } from '../components/HomeWrapper';
// import EZGrid from '../components/EZGrid';

function Dashboard() {
  const user = useUser();
  return (
    <HomePage>
      <SimpleGrid columns={2}>
        <GridItem rowSpan={1} colSpan={2}>
          <Heading size="4xl">{`Hi ${user.firstName}!`}</Heading>
        </GridItem>
        <GridItem colSpan={1}>
          <Text fontWeight="bold" fontSize="4xl">
            Your next shifts
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Announcements />
        </GridItem>
      </SimpleGrid>
    </HomePage>
  );
}

export default Dashboard;
