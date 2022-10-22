import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import HomePage from '../components/HomePage';
import { fakeUsers } from '../hooks/createFakeUser';
import { User } from '../types/User';

type Props = {};

const Dashboard = (props: Props) => {
  const user: User = fakeUsers(1)[0];
  return (
    <HomePage>
      <Grid
        templateRows="repeat(7, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={1}
        h="100%"
      >
        <GridItem rowSpan={1} colSpan={2}>
          <Heading size="4xl">{'Hi ' + user.firstName + '!'}</Heading>
        </GridItem>
        <GridItem rowSpan={6} colSpan={1}>
          <Text fontWeight="bold" fontSize="4xl">
            Your next shifts
          </Text>
        </GridItem>
        <GridItem rowSpan={6} colSpan={1}>
          <Text fontWeight="bold" fontSize="4xl">
            Annoucements
          </Text>
        </GridItem>
      </Grid>
    </HomePage>
  );
};

export default Dashboard;
