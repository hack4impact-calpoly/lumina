import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
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
  const [view, setView] = useState("")
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

  function switchView() {
    switch (view) {
      case "cancel":
        return <CancelShiftView />
      default:
        return <DefaultView date={date} events={events} currentEvent={currentEvent} setView={setView} />;
    }
  }

  return (
    <Flex>
      {switchView()}
    </Flex>
  );
};

const DefaultView = ({ date, events, currentEvent, setView }) => {
  function cancelShift() {
    //add verification and call
    setView("cancel")
  }

  return (
    <Flex flexDir="row">
      <Box minW="600px" mr="90px">
        <Box mb={3}>
          <Text fontSize="30px">{daysOfWeek[date.getDay()]}</Text>
          <Text fontWeight="bold" fontSize="40px">
            {`${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`}
          </Text>
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
          <Button
            variant="animated"
            bg="red.300"
            w="100%"
            onClick={() => cancelShift()}
          >
            Cancel Shift
          </Button>
        </VStack>
      </Box>
      <Box>
        <Button bg="orange.100" mb={3}>+ New Shift</Button>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "80vh", width: "900px" }}
          views={["month", "day"]}
        />
      </Box>
    </Flex>
  )
}

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

const CancelShiftView = ({}) => {
  return (
    <Center>
      HELLO
    </Center>
  )
}

export default ShiftCalendar;
