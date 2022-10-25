import { Alert, AlertIcon, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

function AdminAlerts() {
  return (
    <Flex flexDir="column" p={3}>
      <Text fontWeight="bold" textAlign="start" mb={3}>
        Alerts
      </Text>
      <VStack>
        <Alert status="error">
          <AlertIcon />
          <Text>A volunteer has cancelled their shift</Text>
        </Alert>
        <Alert status="warning">
          <AlertIcon />
          <Text>There are new volunteers that need approval</Text>
        </Alert>
        <Alert status="info">
          <AlertIcon />
          <Text>A volunteer has signed up for a shift</Text>
        </Alert>
      </VStack>
    </Flex>
  );
}

export default AdminAlerts;
