import React from "react";
import { Box, Button, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "../../SharedComponents/Card";
import ShiftCard from "./ShiftCard";

const Shifts = ({
  currentEvent,
  contactList,
  date,
  events,
  setEvents,
  contactListSelectable,
  ...rest
}) => {
  return (
    <VStack spacing={3} {...rest}>
      {currentEvent.shifts.length !== 0 ? (
        currentEvent.shifts.map((shift) => {
          return (
            <ShiftCard
              contactList={contactList}
              date={date}
              events={events}
              setEvents={setEvents}
              shift={shift}
              contactListSelectable={contactListSelectable}
            />
          );
        })
      ) : (
        <Box></Box>
      )}
      {currentEvent.allDayShift !== undefined ? (
        <Card flexDir="row" w="100%">
          <Box mr="20px">
            <Heading fontSize="24px">All day</Heading>
          </Box>
          <Spacer />
          <VStack w="300px" spacing="4px">
            <Box w="100%">
              <Text fontSize="20px">Backup</Text>
              <Text fontSize="16px">
                {`${currentEvent.allDayShift.backup.name} - ${currentEvent.allDayShift.backup.phone}`}
              </Text>
            </Box>
          </VStack>
        </Card>
      ) : (
        <Box></Box>
      )}
    </VStack>
  );
};

export default Shifts;
