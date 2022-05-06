import React from "react";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { daysOfWeek, months } from "../../SharedComponents/DateTranslation";
import { CreateShiftModal, PrepoulateConfirmModal } from "./CalendarModals";
import LuminaCalendar from "./LuminaCalendar";
import Shifts from "./Shifts";
import { getDaysInMonth } from "./DateFunctions";

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
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth + 1);
    let newEvents = deleteCurrentMonthShifts(currentMonth);;
    for (let i = 1; i < daysInMonth + 1; i++) {
      const startDate = new Date(currentYear, currentMonth, i);
      const endDate = new Date(currentYear, currentMonth, i + 1);
      let shifts = [];
      switch (startDate.getDay()) {
        case 0:
          shifts = [
            {
              start: new Date(currentYear, currentMonth, i, 0),
              end: new Date(currentYear, currentMonth, i, 8),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 8),
              end: new Date(currentYear, currentMonth, i, 12),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 12),
              end: new Date(currentYear, currentMonth, i, 16),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 16),
              end: new Date(currentYear, currentMonth, i + 1, 0),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
          ];
          break;
        case 1:
          shifts = [
            {
              start: new Date(currentYear, currentMonth, i, 0),
              end: new Date(currentYear, currentMonth, i, 8, 30),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 17),
              end: new Date(currentYear, currentMonth, i + 1, 8, 30),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
          ];
          break;
        case 2:
        case 3:
        case 4:
        case 5:
          shifts = [
            {
              start: new Date(currentYear, currentMonth, i, 17),
              end: new Date(currentYear, currentMonth, i + 1, 8, 30),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
          ];
          break;
        case 6:
          shifts = [
            {
              start: new Date(currentYear, currentMonth, i, 8),
              end: new Date(currentYear, currentMonth, i, 16),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 16),
              end: new Date(currentYear, currentMonth, i + 1, 0),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
          ];
          break;
        default:
          console.log("Invalid day");
          break;
      }
      const newEvent = {
        id: 0,
        title: "2/2",
        start: startDate,
        end: endDate,
        shifts: shifts,
      };
      newEvents.push(newEvent);
    }
    setEvents(newEvents);
    sessionStorage.setItem("events", JSON.stringify(newEvents));
  }

  function deleteCurrentMonthShifts(currentMonth) {
    let newEvents = events;
    newEvents = newEvents.filter((event) => new Date(event.start).getMonth() !== currentMonth);
    return newEvents
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
