import React from "react";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { daysOfWeek, months } from "../../SharedComponents/DateTranslation";
import { CreateShiftModal, PrepoulateConfirmModal } from "./CalendarModals";
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
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  const {
    isOpen: isPrepopulateOpen,
    onOpen: onPrepopulateOpen,
    onClose: onPrepopulateClose,
  } = useDisclosure();

  function cancelShift() {
    //nothing
  }

  function openCreateShiftModal() {
    onCreateOpen();
  }

  function prepopulate() {
    console.log("ol");
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
          cancelShift={cancelShift}
        />
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
        <Button
          variant="animated"
          bg="orange.100"
          mb={3}
          ml={3}
          onClick={() => onPrepopulateOpen()}
        >
          Prepopulate
        </Button>
        <LuminaCalendar
          events={events}
          setCurrentEvent={setCurrentEvent}
          w="90%"
        />
      </Box>
      <CreateShiftModal
        contactList={contactList}
        isOpen={isCreateOpen}
        events={events}
        setEvents={setEvents}
        onClose={onCreateClose}
        contactListSelectable={contactListSelectable}
      />
      <PrepoulateConfirmModal
        prepopulate={prepopulate}
        isOpen={isPrepopulateOpen}
        onClose={onPrepopulateClose}
      />
    </Flex>
  );
};

export default ShiftCalendarBrowser;
