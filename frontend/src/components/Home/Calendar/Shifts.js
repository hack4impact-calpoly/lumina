import React from "react";
import { Box, VStack, Divider } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ShiftCard from "./ShiftCard";
import AllDayShift from "./AllDayShift";
import { BrowserView, MobileView } from "react-device-detect";
import ShiftEntry from "./ShiftEntry";

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
    <Box w="100%">
      <BrowserView>
        <ShiftsBrowser
          currentEvent={currentEvent}
          contactList={contactList}
          date={date}
          events={setEvents}
          contactListSelectable={contactListSelectable}
          cancelShift={cancelShift}
        />
      </BrowserView>
      <MobileView>
        <ShiftsMobile
          currentEvent={currentEvent}
          contactList={contactList}
          date={date}
          events={setEvents}
          contactListSelectable={contactListSelectable}
          cancelShift={cancelShift}
        />
      </MobileView>
    </Box>
  );
};

const ShiftsBrowser = ({
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

const ShiftsMobile = ({
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
    <VStack {...rest}>
      {currentEvent.shifts.length !== 0 ? (
        currentEvent.shifts.map((shift) => {
          return (
            <Box>
              <ShiftEntry
                contactList={contactList}
                date={date}
                events={events}
                setEvents={setEvents}
                shift={shift}
                contactListSelectable={contactListSelectable}
                cancelShift={cancelShift}
              />
              <Divider />
            </Box>
          );
        })
      ) : (
        <Box></Box>
      )}
    </VStack>
  );
};

export default Shifts;
