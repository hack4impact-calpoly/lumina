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
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "../SharedComponents/Card";
import { CheckIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { BiGlobe, BiTimeFive, BiTime, BiUser } from "react-icons/bi";
import { AiOutlinePlusSquare, AiOutlineCloseSquare } from "react-icons/ai";
import FormInput from "../SharedComponents/FormInput";

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
    date: new Date(),
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
  let date = currentEvent.date;

  function cancelShift() {
    //add verification and call
    onCancelOpen();
  }

  function createShift() {
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
                <Text fontSize="16px">
                  {`${currentEvent.allDay.backup.name} - ${currentEvent.allDay.backup.number}`}
                </Text>
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
        <Button bg="orange.100" mb={3} onClick={() => createShift()}>
          + New Shift
        </Button>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "80vh" }}
          views={["month", "day"]}
        />
      </Box>
      <CancelShiftModal
        date={date}
        shift={currentEvent.shifts[0]}
        isOpen={isCancelOpen}
        onClose={onCancelClose}
      />
      <CreateShiftModal isOpen={isCreateOpen} onClose={onCreateClose} />
    </Flex>
  );
};

const ShiftCard = ({ shift }) => {
  return (
    <Card flexDir="row" w="100%">
      <Box w="100%">
        <Heading fontSize="24px">{`${shift.startTime} - ${shift.endTime}`}</Heading>
      </Box>
      <Spacer />
      <VStack w="100%" spacing="4px">
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

const CreateShiftModal = ({ isOpen, onClose }) => {
  const [includeSecondBackup, setIncludeSecondBackup] = useState(false);
  const [includeAccompaniment, setIncludeAccompaniment] = useState(false);

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const [endDate, setEndDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  function closeModal() {
    setIncludeAccompaniment(false);
    setIncludeSecondBackup(false);
    onClose();
  }

  function createShift() {
    closeModal();
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
          <Flex align="center" mt={3}>
            <Icon as={BiGlobe} mr={3} w={6} h={6} />
            <Text>Pacific Daylight Time (GMT-7)</Text>
          </Flex>
          <Divider mt={3} mb={3} />
          <VStack align="left" spacing={3}>
            <AddVolunteer type="Primary" />
            <AddVolunteer type="Backup" />
            {includeSecondBackup ? (
              <AddVolunteer
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

            {includeAccompaniment ? (
              <AddVolunteer
                type="Accompaniment"
                removeable
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
            <Button onClick={() => createShift()}>Create new shift</Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const AddVolunteer = ({ type, removeable, onRemove }) => {
  const [searchVolunteer, setSearchVolunteer] = useState(false);
  const [name, setName] = useState("");
  return (
    <Flex flexDir="column" align="left">
      <Flex flexDir="row" align="center">
        <Icon as={BiUser} w={6} h={6} mr={3} />
        <Text>{type}</Text>
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
        <FormInput
          leftElement={<SearchIcon />}
          rightElement={
            <IconButton
              icon={<CloseIcon />}
              onClick={() => setSearchVolunteer(false)}
            />
          }
          id="search"
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <Button
          mt={3}
          onClick={() => setSearchVolunteer(true)}
        >{`Assign ${type} Now (Optional)`}</Button>
      )}
    </Flex>
  );
};

export default ShiftCalendar;
