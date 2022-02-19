import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "../SharedComponents/Card";
import { CheckIcon, WarningIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { BiGlobe, BiTimeFive, BiTime, BiUser } from "react-icons/bi";
import { AiOutlinePlusSquare, AiOutlineCloseSquare } from "react-icons/ai";
import Select from "react-select";
import { BrowserView, MobileView } from "react-device-detect";

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

const ShiftCalendar = ({ contactList }) => {
  const date = new Date();
  const [events, setEvents] = useState([
    {
      start: new Date(2022, 1, 18, 10),
      end: new Date(2022, 1, 18, 13),
      title: "2/2",
      info: {
        primary: "You",
        backup: {
          name: "Lenna Hane",
          number: "(805) 555 - 555",
        },
        allDay: {
          backup: {
            name: "Bernita Collier",
            number: "(805) 555 - 555",
          },
        },
      },
    },
    {
      start: new Date(2022, 1, 19, 9),
      end: new Date(2022, 1, 19, 17),
      title: "2/2",
      info: {
        primary: "You",
        backup: {
          name: "Donna Cruz",
          number: "(805) 555 - 555",
        },
        allDay: {
          backup: {
            name: "Madison Lee",
            number: "(805) 555 - 555",
          },
        },
      },
    },
    {
      start: new Date(2022, 1, 20, 10),
      end: new Date(2022, 1, 20, 18),
      title: "2/2",
      info: {
        primary: "You",
        backup: {
          name: "Emmalee Start",
          number: "(805) 555 - 555",
        },
        allDay: {
          backup: {
            name: "Adriel Bogan",
            number: "(805) 555 - 555",
          },
        },
      },
    },
  ]);
  const [currentEvent, setCurrentEvent] = useState(
    events.filter(
      (event) =>
        event.start.getFullYear() === date.getFullYear() &&
        event.start.getMonth() === date.getMonth() &&
        event.start.getDate() === date.getDate()
    )[0]
  );
  return (
    <Box>
      <BrowserView>
        {currentEvent ? (
          <ShiftCalendarBrowser
            contactList={contactList}
            date={currentEvent.start}
            currentEvent={currentEvent}
            setCurrentEvent={setCurrentEvent}
            events={events}
            setEvents={setEvents}
          />
        ) : (
          <Spinner />
        )}
      </BrowserView>
      <MobileView>
        {currentEvent ? (
          <ShiftCalendarMobile
            contactList={contactList}
            date={currentEvent.start}
            currentEvent={currentEvent}
            events={events}
          />
        ) : (
          <Spinner />
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
        event.info.primary = "";
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
    <Flex flexDir="row" w="100%">
      <Box w="100%" maxW="500px" mr={10}>
        <Box mb={3}>
          <Text fontSize="30px">{daysOfWeek[date.getDay()]}</Text>
          <Text fontWeight="bold" fontSize="40px">
            {`${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`}
          </Text>
        </Box>
        <VStack spacing={3}>
          <ShiftCard
            contactList={contactList}
            date={date}
            events={events}
            setEvents={setEvents}
            shift={currentEvent}
          />
          <Card flexDir="row" w="100%">
            <Box mr="20px">
              <Heading fontSize="24px">All day</Heading>
            </Box>
            <Spacer />
            <VStack w="300px" spacing="4px">
              <Box w="100%">
                <Text fontSize="20px">Backup</Text>
                <Text fontSize="16px">
                  {`${currentEvent.info.allDay.backup.name} - ${currentEvent.info.allDay.backup.number}`}
                </Text>
              </Box>
            </VStack>
          </Card>
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
      <Box>
        <Button
          variant="animated"
          bg="orange.100"
          mb={3}
          onClick={() => openCreateShiftModal()}
        >
          + New Shift
        </Button>
        <Calendar
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "80vh" }}
          views={["month", "week"]}
          onSelectEvent={(e) => setCurrentEvent(e)}
        />
      </Box>
      <CancelShiftModal
        date={date}
        shift={currentEvent}
        isOpen={isCancelOpen}
        onClose={onCancelClose}
      />
      <CreateShiftModal
        isOpen={isCreateOpen}
        onClose={onCreateClose}
        contactList={contactList}
      />
    </Flex>
  );
};

const ShiftCalendarMobile = ({ contactList, date, currentEvent, events }) => {
  return (
    <Flex w="100%">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "80vh" }}
        views={["month"]}
      />
    </Flex>
  );
};

const ShiftCard = ({ contactList, date, events, setEvents, shift }) => {
  const startTime = moment(shift.start).format("hh:mmA");
  const endTime = moment(shift.end).format("hh:mmA");

  function assignNewPrimary(primary) {
    let localEvents = events.map((event) => {
      if (event.start === date) {
        event.info.primary = primary;
      }
      return event;
    });
    setEvents(localEvents);
  }

  return (
    <Card flexDir="row" w="100%">
      <Box>
        <Heading fontSize="24px">{`${startTime} - ${endTime}`}</Heading>
      </Box>
      <Spacer />
      <VStack w="100%" spacing="4px">
        <Flex
          bg={shift.info.primary === "" ? "orange.100" : "green.100"}
          w="100%"
          p={2}
        >
          {shift.info.primary === "" ? (
            <NoPrimary contactList={contactList} assignNewPrimary={assignNewPrimary} />
          ) : (
            <Primary shift={shift} />
          )}
        </Flex>
        <Box w="100%">
          <Text fontSize="20px">Backup</Text>
          <Text fontSize="16px">{`${shift.info.backup.name} - ${shift.info.backup.number}`}</Text>
        </Box>
      </VStack>
    </Card>
  );
};

const Primary = ({ shift }) => {
  return (
    <Flex align="center">
      <CheckIcon boxSize={7} mr="20px" />
      <Box w="100%">
        <Text fontWeight="bold" mr={3}>
          Primary
        </Text>
        <Text>{shift.info.primary}</Text>
      </Box>
    </Flex>
  );
};

const NoPrimary = ({ contactList, assignNewPrimary }) => {
  const [selectedPrimary, setSelectedPrimary] = useState("");
  var contactListSelectable = [];
  contactList.map((contact) => {
    contactListSelectable.push({ value: contact.name, label: contact.name });
  });
  return (
    <Flex align="center" w="100%">
      <WarningIcon boxSize={7} mr="20px" />
      <Box w="100%">
        <Flex mb={1}>
          <Text fontWeight="bold" mr={3}>
            Primary
          </Text>

          <Button size="xs" onClick={() => assignNewPrimary(selectedPrimary)}>
            Assign
          </Button>
        </Flex>

        <Select
          className="basic-single"
          classNamePrefix="select"
          isClearable
          isSearchable
          name="color"
          options={contactListSelectable}
          onChange={(e) => setSelectedPrimary(e.value)}
        />
      </Box>
    </Flex>
  );
};

const CancelShiftModal = ({ date, shift, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Success</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            {`You have cancelled your volunteer shift on ${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()} at ${shift.startTime}-${
              shift.endTime
            }`}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const CreateShiftModal = ({ contactList, isOpen, onClose }) => {
  const [includeSecondBackup, setIncludeSecondBackup] = useState(false);
  const [includeAccompaniment, setIncludeAccompaniment] = useState(false);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const [endDate, setEndDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const isWeekend =
    startDate.getDay() == 6 || startDate.getDay() == 0 ? true : false;
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  function resetStates() {
    setIncludeAccompaniment(false);
    setIncludeSecondBackup(false);
    setStartDate(setHours(setMinutes(new Date(), 0), 9));
    setEndDate(setHours(setMinutes(new Date(), 0), 9));
  }

  function closeModal() {
    resetStates();
    onClose();
  }

  function createShift() {
    if (validShift()) {
      closeModal();
    }
  }

  function validShift() {
    return endDate.getTime() - startDate.getTime() > 0;
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Shift</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Text fontWeight="bold">Start</Text>
            <Flex align="center">
              <Icon as={BiTime} mr={3} color="gray" w={6} h={6} />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                filterTime={filterPassedTime}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </Flex>
          </Box>
          <Box mt={3}>
            <Text fontWeight="bold">End</Text>
            <Flex align="center">
              <Icon as={BiTimeFive} mr={3} color="gray" w={6} h={6} />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                showTimeSelect
                filterTime={filterPassedTime}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </Flex>
          </Box>
          <Text color="red">
            {validShift() ? "" : "End date/time must be after start date/time"}
          </Text>
          <Flex align="center" mt={3}>
            <Icon as={BiGlobe} mr={3} w={6} h={6} />
            <Text>Pacific Daylight Time (GMT-7)</Text>
          </Flex>
          <Divider mt={3} mb={3} />
          <VStack align="left" spacing={3}>
            <AddVolunteer contactList={contactList} type="Primary" />
            <AddVolunteer contactList={contactList} type="Backup" />
            {includeAccompaniment || isWeekend ? (
              <AddVolunteer
                contactList={contactList}
                type="Accompaniment"
                removeable={!isWeekend}
                onRemove={() => setIncludeAccompaniment(false)}
              />
            ) : (
              <Flex
                cursor="pointer"
                onClick={() => setIncludeAccompaniment(true)}
              >
                <Icon as={AiOutlinePlusSquare} w={6} h={6} mr={3} />
                <Text>Add Accompaniment</Text>
              </Flex>
            )}
            {includeSecondBackup ? (
              <AddVolunteer
                contactList={contactList}
                type="Second Backup"
                removeable
                onRemove={() => setIncludeSecondBackup(false)}
              />
            ) : (
              <Flex
                cursor="pointer"
                onClick={() => setIncludeSecondBackup(true)}
              >
                <Icon as={AiOutlinePlusSquare} w={6} h={6} mr={3} />
                <Text>Add Second Backup</Text>
              </Flex>
            )}
            <Button onClick={() => createShift()}>Create new shift</Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const AddVolunteer = ({ contactList, type, removeable, onRemove }) => {
  const [searchVolunteer, setSearchVolunteer] = useState(false);
  var contactListSelectable = [];
  contactList.map((contact) => {
    contactListSelectable.push({ value: contact.name, label: contact.name });
  });
  return (
    <Flex flexDir="column" align="left">
      <Flex mb={3} flexDir="row" align="center">
        <Icon as={BiUser} w={6} h={6} mr={3} />
        <Text>{type}</Text>
        {searchVolunteer ? (
          <Button ml={3} size="xs" onClick={() => setSearchVolunteer(false)}>
            Remove Assignment
          </Button>
        ) : (
          <Box></Box>
        )}

        <Spacer />
        {removeable ? (
          <Icon
            as={AiOutlineCloseSquare}
            w={5}
            h={5}
            cursor="pointer"
            onClick={onRemove}
          />
        ) : (
          <Box></Box>
        )}
      </Flex>
      {searchVolunteer ? (
        <Select
          className="basic-single"
          classNamePrefix="select"
          isClearable
          isSearchable
          name="color"
          options={contactListSelectable}
        />
      ) : (
        <Button
          onClick={() => setSearchVolunteer(true)}
        >{`Assign ${type} Now (Optional)`}</Button>
      )}
    </Flex>
  );
};

export default ShiftCalendar;
