import React from "react";
import { Box, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "../../SharedComponents/Card";

const AllDayShift = ({ currentEvent, ...rest }) => {
  return (
    <Card flexDir="row" w="100%" {...rest}>
      <Box mr="20px">
        <Heading fontSize="24px">All day</Heading>
      </Box>
      <Spacer />
      <VStack w="100%" maxW="300px" spacing="4px">
        <Box bg="green.100" w="100%" p={3}>
          <Text fontWeight="bold" fontSize="20px">Backup</Text>
          <Text fontSize="16px">
            {`${currentEvent.allDayShift.backup.name} - ${currentEvent.allDayShift.backup.phone}`}
          </Text>
        </Box>
      </VStack>
    </Card>
  );
};

export default AllDayShift;
