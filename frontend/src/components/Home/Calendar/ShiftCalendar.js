import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "../../SharedComponents/Card";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { daysOfWeek, months } from "../../SharedComponents/DateTranslation";
import ShiftCard from "./ShiftCard";
import datesAreOnSameDay from "./DateFunctions";
import { CreateShiftModal, CancelShiftModal } from "./CalendarModals";

const localizer = momentLocalizer(moment);

const emptyEvent = {
  id: 0,
  title: "2/2",
  start: new Date(),
  end: new Date(),
  shifts: [],
  allDay: true,
};

const ShiftCalendar = ({ contactList }) => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState();

  useEffect(() => {
    let sessionStorageEvents = window.sessionStorage.getItem("events");
    if (sessionStorageEvents === null) {
      //insert API call
      let tempEvents = [
        {
          id: 0,
          title: "2/2",
          start: new Date(2022, 1, 18),
          end: new Date(2022, 1, 19),
          shifts: [
            {
              start: new Date(2022, 1, 18, 10),
              end: new Date(2022, 1, 18, 13),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Lenna Hane",
                  phone: "(805) 555 - 555",
                },
                secondBackup: {
                  name: "Eliane Schneider",
                  phone: "(805) 555-5555",
                },
              },
            },
            {
              start: new Date(2022, 1, 18, 9),
              end: new Date(2022, 1, 18, 17),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Donna Cruz",
                  phone: "(805) 555 - 555",
                },
                accompaniment: {
                  name: "Emmalee Stark",
                  phone: "(805) 555-5555",
                },
              },
            },
            {
              start: new Date(2022, 1, 18, 10),
              end: new Date(2022, 1, 18, 18),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Emmalee Stark",
                  phone: "(805) 555 - 555",
                },
              },
            },
          ],
          allDay: true,
          allDayShift: {
            backup: {
              name: "Bernita Collier",
              phone: "(805) 555 - 555",
            },
          },
        },
        {
          id: 0,
          title: "2/2",
          start: new Date(2022, 2, 18),
          end: new Date(2022, 2, 19),
          shifts: [
            {
              start: new Date(2022, 2, 18, 10),
              end: new Date(2022, 2, 18, 13),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Lenna Hane",
                  phone: "(805) 555 - 555",
                },
                secondBackup: {
                  name: "Eliane Schneider",
                  phone: "(805) 555-5555",
                },
              },
            },
            {
              start: new Date(2022, 2, 18, 9),
              end: new Date(2022, 2, 18, 17),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Donna Cruz",
                  phone: "(805) 555 - 555",
                },
                accompaniment: {
                  name: "Emmalee Stark",
                  phone: "(805) 555-5555",
                },
              },
            },
            {
              start: new Date(2022, 2, 18, 10),
              end: new Date(2022, 2, 18, 18),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Emmalee Stark",
                  phone: "(805) 555 - 555",
                },
              },
            },
          ],
          allDay: true,
          allDayShift: {
            backup: {
              name: "Bernita Collier",
              phone: "(805) 555 - 555",
            },
          },
        },
      ];
      setEvents(tempEvents);
      window.sessionStorage.setItem("events", JSON.stringify(tempEvents));
    } else {
      setEvents(JSON.parse(sessionStorageEvents));
    }
  }, []);

  var contactListSelectable = [];
  contactList.forEach((contact) => {
    contactListSelectable.push({ value: contact.name, label: contact.name });
  });

  function findNearestEvent() {
    events.forEach((event) => {
      if (datesAreOnSameDay(new Date(event.start), new Date())) {
        setCurrentEvent(event);
        return;
      }
    });
    setCurrentEvent(emptyEvent);
  }

  return (
    <Box w="100%">
      <BrowserView style={{ width: "100%" }}>
        {currentEvent ? (
          <ShiftCalendarBrowser
            contactList={contactList}
            date={new Date(currentEvent.start)}
            currentEvent={currentEvent}
            setCurrentEvent={setCurrentEvent}
            events={events}
            setEvents={setEvents}
            contactListSelectable={contactListSelectable}
          />
        ) : (
          findNearestEvent()
        )}
      </BrowserView>
      <MobileView style={{ width: "100%" }}>
        {currentEvent ? (
          <ShiftCalendarMobile
            contactList={contactList}
            date={new Date(currentEvent.start)}
            currentEvent={currentEvent}
            setCurrentEvent={setCurrentEvent}
            events={events}
          />
        ) : (
          findNearestEvent()
        )}
      </MobileView>
    </Box>
  );
};

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
    <Flex flexDir="row" w="100%" h="80vh">
      <Box w="30%" mr={10}>
        <Box mb={3}>
          <Text fontSize="30px">{daysOfWeek[date.getDay()]}</Text>
          <Text fontWeight="bold" fontSize="40px">
            {`${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`}
          </Text>
        </Box>
        <VStack spacing={3}>
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

          <Button
            variant="animated"
            bg="red.300"
            w="100%"
            onClick={() => openCancelShiftModal()}
          >
            Cancel Shift
          </Button>
        </VStack>
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
          w="70%"
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

const ShiftCalendarMobile = ({
  contactList,
  date,
  currentEvent,
  setCurrentEvent,
  events,
}) => {
  return (
    <Flex w="100%" flexDir="column" h="65vh">
      <LuminaCalendar
        events={events}
        setCurrentEvent={setCurrentEvent}
        w="100%"
      />
      <Flex p={2}>
        <Box mb={3}>
          <Text fontWeight="bold" fontSize="24px">
            {`${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`}
          </Text>
        </Box>
        <Spacer />
        <Button bg="blue.200">
          <Icon as={AiOutlineFileSearch} mr={1} />
          <Text>View Details</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

const LuminaCalendar = ({ events, setCurrentEvent, w }) => {
  return (
    <Calendar
      selectable
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={events}
      style={{ width: w }}
      views={isMobile ? ["month"] : ["month", "day"]}
      onSelectEvent={(e) => setCurrentEvent(e)}
    />
  );
};

export default ShiftCalendar;
