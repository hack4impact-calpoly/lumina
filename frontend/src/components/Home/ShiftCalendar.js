import React, { useState } from "react";
import { Box, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "../SharedComponents/Card";
import { CheckIcon } from "@chakra-ui/icons";

const localizer = momentLocalizer(moment);
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ShiftCalendar = () => {
  const date = new Date();
  const [currentEvent, setCurrentEvent] = useState({
    shifts: [
      {
        startTime: "5:00PM",
        endTime: "8:30AM",
        primary: "You",
        backup: {
          name: "Donna Cruz",
          number: "(805) 555 - 555",
        },
      },
    ],
    allDay: {
      backup: {
        name: "Madison Lee",
        number: "(805) 555 - 555",
      },
    },
  });
  const [events, setEvents] = useState([
    {
      start: new Date("February 14, 2022 12:00:00"),
      end: new Date("February 14, 2022 15:00:00"),
      title: "Some title",
    },
  ]);
  return (
    <Flex flexDir="row">
      <Box minW="600px" mr="90px">
        <Box mb={3}>
          <Heading>{daysOfWeek[date.getDay()]}</Heading>
          <Heading>
            {`${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`}
          </Heading>
        </Box>
        <VStack spacing={3}>
          {currentEvent.shifts.map((shift) => {
            return <ShiftCard shift={shift} />;
          })}
          <Card flexDir="row" w="100%">
            <Box mr="20px">
              <Heading fontSize="24px">All day</Heading>
            </Box>
            <Spacer />
            <VStack w="300px" spacing="4px">
              <Box w="100%">
                <Text fontSize="20px">Backup</Text>
                <Text fontSize="16px">{`${currentEvent.allDay.backup.name} - ${currentEvent.allDay.backup.number}`}</Text>
              </Box>
            </VStack>
          </Card>
        </VStack>
      </Box>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "80vh", widthL: "800px" }}
        onClick={() => console.log("CLICKED")}
      />
    </Flex>
  );
};

const ShiftCard = ({ shift }) => {
  return (
    <Card flexDir="row" w="100%">
      <Box mr="20px">
        <Heading fontSize="24px">{`${shift.startTime} - ${shift.endTime}`}</Heading>
      </Box>
      <Spacer />
      <VStack w="300px" spacing="4px">
        <Flex alignItems="center" bg="green.100" w="100%" p={2}>
          <CheckIcon boxSize={7} mr="20px" />
          <Box>
            <Text fontWeight="bold">Primary</Text>
            <Text>{shift.primary}</Text>
          </Box>
        </Flex>
        <Box w="100%">
          <Text fontSize="20px">Backup</Text>
          <Text fontSize="16px">{`${shift.backup.name} - ${shift.backup.number}`}</Text>
        </Box>
      </VStack>
    </Card>
  );
};

export default ShiftCalendar;
