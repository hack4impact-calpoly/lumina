import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { BiGlobe, BiTimeFive, BiTime } from "react-icons/bi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { months } from "../../SharedComponents/DateTranslation";
import datesAreOnSameDay from "./DateFunctions";
import { isWeekend } from "./DateFunctions";
import AddVolunteer from "./AddVolunteer";

export const CancelShiftConfirmModal = ({
  date,
  shift,
  isCancelOpen,
  onCancelClose,
  cancelShift,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function openCancelShiftModal() {
    //add verification and call
    cancelShift();
    onCancelClose();
    onOpen();
  }

  return (
    <Box>
      <Modal isOpen={isCancelOpen} onClose={onCancelClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {`You are going to delete the shift on ${
                months[date.getMonth()]
              } ${date.getDate()}, ${date.getFullYear()} at ${moment(
                shift.start
              ).format("hh:mmA")}-${moment(shift.end).format(
                "hh:mmA"
              )}. Are you sure?`}
            </Text>
            <Button bg="red.300" mr={3} onClick={() => openCancelShiftModal()}>
              Yes
            </Button>
            <Button onClick={() => onCancelClose()}>No</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <CancelShiftModal
        date={date}
        shift={shift}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
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
            } ${date.getDate()}, ${date.getFullYear()} at ${moment(
              shift.start
            ).format("hh:mmA")}-${moment(shift.end).format("hh:mmA")}`}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const CreateShiftModal = ({
  contactList,
  events,
  setEvents,
  isOpen,
  onClose,
  contactListSelectable,
}) => {
  const [includeSecondBackup, setIncludeSecondBackup] = useState(false);
  const [includeAccompaniment, setIncludeAccompaniment] = useState(false);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const [endDate, setEndDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const [primary, setPrimary] = useState("");
  const [backup, setBackup] = useState("");
  const [accompaniment, setAccompaniment] = useState("");
  const [secondBackup, setSecondBackup] = useState("");

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
      const primaryInfo = primary
        ? contactList.filter((contact) => contact.name === primary)[0]
        : undefined;
      const backupInfo = backup
        ? contactList.filter((contact) => contact.name === backup)[0]
        : undefined;

      let newShift = {
        start: startDate,
        end: endDate,
        title: "2/2",
        info: {
          primary: primaryInfo,
          backup: backupInfo,
          allDay: {
            backup: {
              name: "Bernita Collier",
              phone: "(805) 555 - 555",
            },
          },
        },
      };
      let localEvents = events;

      localEvents.forEach((event) => {
        if (datesAreOnSameDay(new Date(event.start), newShift.start)) {
          event.shifts.push(newShift);
          setEvents(localEvents);
          window.sessionStorage.setItem("events", JSON.stringify(localEvents));
          closeModal();
          return;
        }
      });
      const newEvent = {
        id: "1",
        title: "2/2",
        start: new Date(
          newShift.start.getFullYear(),
          newShift.start.getMonth(),
          newShift.start.getDate()
        ),
        end: new Date(
          newShift.start.getFullYear(),
          newShift.start.getMonth(),
          newShift.start.getDate()
        ),
        shifts: [newShift],
        allDay: true,
      };
      const newEvents = [...events, newEvent];
      setEvents(newEvents);
      window.sessionStorage.setItem("events", JSON.stringify(newEvents));
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
            <Text>Pacific Daylight Time (GMT-8)</Text>
          </Flex>
          <Divider mt={3} mb={3} />
          <VStack align="left" spacing={3}>
            <AddVolunteer
              type="Primary"
              setVolunteer={setPrimary}
              contactListSelectable={contactListSelectable}
            />
            <AddVolunteer
              type="Backup"
              setVolunteer={setBackup}
              contactListSelectable={contactListSelectable}
            />
            {includeAccompaniment || isWeekend(startDate) ? (
              <AddVolunteer
                type="Accompaniment"
                removeable={!isWeekend(startDate)}
                onRemove={() => setIncludeAccompaniment(false)}
                setVolunteer={setAccompaniment}
                contactListSelectable={contactListSelectable}
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
                type="Second Backup"
                removeable
                onRemove={() => setIncludeSecondBackup(false)}
                setVolunteer={setSecondBackup}
                contactListSelectable={contactListSelectable}
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

export const PrepoulateConfirmModal = ({ prepopulate, isOpen, onClose }) => {
  function prepopulateClose() {
    prepopulate();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Are you sure?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            You are about to prepopulate the entire current month with the{" "}
            <b>default</b> shifts.{" "} <br />
            <b>
              This will remove any existing shifts and events from the current
              months.
            </b>{" "}<br />
          </Text>
          <Button bg="red.300" onClick={() => prepopulateClose()}>
            Yes
          </Button>
          <Button ml={3} onClick={() => onClose()}>
            No
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
