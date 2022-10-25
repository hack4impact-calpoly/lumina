import { Flex, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AdminAlerts from '../components/AdminAlerts';
import AdminMessages from '../components/AdminMessages';
import EZGrid from '../components/EZGrid';
import HomePage from '../components/HomePage';

const Admin = () => {
  return (
    <HomePage>
      <EZGrid colUnits={2} rowUnits={21}>
        <GridItem colSpan={2} rowSpan={1}>
          <Heading>Admin Center</Heading>
        </GridItem>
        <GridItem colSpan={1} rowSpan={10} borderWidth="2px">
          <AdminAlerts />
        </GridItem>
        <GridItem colSpan={1} rowSpan={20} borderWidth="2px" overflowY='scroll'>
          <AdminMessages />
        </GridItem>
        <GridItem colSpan={1} rowSpan={10} borderWidth="2px">
          <Flex p={3}>
            <Text fontWeight="bold">Actions</Text>
          </Flex>
        </GridItem>
      </EZGrid>
    </HomePage>
  );
};

export default Admin;
