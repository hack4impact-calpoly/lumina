import { Flex, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import AdminAlerts from '../components/AdminAlerts';
import AdminMessages from '../components/AdminMessages';
import HomePage from '../components/HomePage';

function Admin() {
  return (
    <HomePage>
      <SimpleGrid columns={2}>
        <GridItem colSpan={2} rowSpan={1}>
          <Heading>Admin Center</Heading>
        </GridItem>
        <GridItem colSpan={1} borderWidth="2px">
          <AdminAlerts />
        </GridItem>
        <GridItem
          maxH="85vh"
          colSpan={1}
          rowSpan={2}
          borderWidth="2px"
          overflowY="scroll"
        >
          <AdminMessages />
        </GridItem>
        <GridItem colSpan={1} borderWidth="2px">
          <Flex p={3}>
            <Text fontWeight="bold">Actions</Text>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </HomePage>
  );
}

export default Admin;
