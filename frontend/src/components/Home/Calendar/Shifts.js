import React from "react";
import { Box, Button, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "../../SharedComponents/Card";
import ShiftCard from "./ShiftCard";
import AllDayShift from "./AllDayShift";

const Shifts = ({
  currentEvent,
  contactList,
  date,
  events,
  setEvents,
  contactListSelectable,
  cancelShift,
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
              cancelShift={cancelShift}
            />
          );
        })
      ) : (
        <Box></Box>
      )}
      {currentEvent.allDayShift !== undefined ? (
        <AllDayShift currentEvent={currentEvent} />
      ) : (
        <Box></Box>
      )}
    </VStack>
  );
};

export default Shifts;
