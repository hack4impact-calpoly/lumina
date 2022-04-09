import React from "react";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { daysOfWeek, months } from "../../SharedComponents/DateTranslation";
import { CreateShiftModal, CancelShiftModal } from "./CalendarModals";
import LuminaCalendar from "./LuminaCalendar";
import Shifts from "./Shifts";

const ShiftCalendarBrowser = ({
  contactList,
  date,
  currentEvent,
  setCurrentEvent,
  events,
  setEvents,
  contactListSelectable,
}) => {
  const {
    isOpen: isCancelOpen,
    onOpen: onCancelOpen,
    onClose: onCancelClose,
  } = useDisclosure();
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  function openCancelShiftModal() {
    //add verification and call
    let localEvents = events.map((event) => {
      if (event.start === date) {
        event.info.primary = undefined;
      }
      return event;
    });
    setEvents(localEvents);
    onCancelOpen();
  }

  function openCreateShiftModal() {
    onCreateOpen();
  }

  return (
    <Flex flexDir="row" w="100%" minH="75vh">
      <Box minW="40%" mr={10}>
        <Box mb={3}>
          <Text fontSize="30px">{daysOfWeek[date.getDay()]}</Text>
          <Text fontWeight="bold" fontSize="40px">
            {`${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`}
          </Text>
        </Box>
        <Shifts
          currentEvent={currentEvent}
          contactList={contactList}
          date={date}
          events={events}
          setEvents={setEvents}
          contactListSelectable={contactListSelectable}
          onCancelOpen={onCancelOpen}
        />
        <Button
          variant="animated"
          bg="red.300"
          w="100%"
          onClick={() => openCancelShiftModal()}
        >
          Cancel Shift
        </Button>
      </Box>
      <Box w="100%">
        <Button
          variant="animated"
          bg="orange.100"
          mb={3}
          onClick={() => openCreateShiftModal()}
        >
          + New Shift
        </Button>
        <LuminaCalendar
          events={events}
          setCurrentEvent={setCurrentEvent}
          w="90%"
        />
      </Box>
      <CancelShiftModal
        date={date}
        shift={currentEvent}
        isOpen={isCancelOpen}
        onClose={onCancelClose}
      />
      <CreateShiftModal
        contactList={contactList}
        isOpen={isCreateOpen}
        events={events}
        setEvents={setEvents}
        onClose={onCreateClose}
        contactListSelectable={contactListSelectable}
      />
    </Flex>
  );
};

export default ShiftCalendarBrowser;
