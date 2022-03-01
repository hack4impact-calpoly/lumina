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
import {
  AiOutlinePlusSquare,
  AiOutlineCloseSquare,
  AiOutlineFileSearch,
} from "react-icons/ai";
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
        allDay: {
          backup: {
            name: "Bernita Collier",
            phone: "(805) 555 - 555",
          },
        },
      },
    },
    {
      start: new Date(2022, 1, 19, 9),
      end: new Date(2022, 1, 19, 17),
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
        allDay: {
          backup: {
            name: "Madison Lee",
            phone: "(805) 555 - 555",
          },
        },
      },
    },
    {
      start: new Date(2022, 1, 20, 10),
      end: new Date(2022, 1, 20, 18),
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
        allDay: {
          backup: {
            name: "Adriel Bogan",
            phone: "(805) 555 - 555",
          },
        },
      },
    },
  ]);
  const [currentEvent, setCurrentEvent] = useState();

  function findNearestEvent() {
    let nearestIndex = 0;
    let dateDifference = Math.abs(
      events[nearestIndex].start.getTime() - date.getTime()
    );
    events.forEach((event, index) => {
      if (Math.abs(event.start.getTime() - date.getTime()) < dateDifference) {
        nearestIndex = index;
        dateDifference = Math.abs(event.start.getTime() - date.getTime());
      }
    });
    setCurrentEvent(events[nearestIndex]);
  }

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
          findNearestEvent()
        )}
      </BrowserView>
      <MobileView>
        {currentEvent ? (
          <ShiftCalendarMobile
            contactList={contactList}
            date={currentEvent.start}
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
                  {`${currentEvent.info.allDay.backup.name} - ${currentEvent.info.allDay.backup.phone}`}
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
        <LuminaCalendar events={events} setCurrentEvent={setCurrentEvent} />
      </Box>
      <CancelShiftModal
        date={date}
        shift={currentEvent}
        isOpen={isCancelOpen}
        onClose={onCancelClose}
      />
      <CreateShiftModal
        isOpen={isCreateOpen}
        events={events}
        setEvents={setEvents}
        onClose={onCreateClose}
        contactList={contactList}
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
    <Flex w="100%" flexDir="column">
      <LuminaCalendar events={events} setCurrentEvent={setCurrentEvent} />
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

const ShiftCard = ({ contactList, date, events, setEvents, shift }) => {
  const startTime = moment(shift.start).format("hh:mmA");
  const endTime = moment(shift.end).format("hh:mmA");
  const [includeSecondBackup, setIncludeSecondBackup] = useState(false);
  const [includeAccompaniment, setIncludeAccompaniment] = useState(false);
  var contactListSelectable = [];
  contactList.forEach((contact) => {
    contactListSelectable.push({ value: contact.name, label: contact.name });
  });

  function assignNew(name, type) {
    if (name !== "") {
      const info = name
        ? contactList.filter((contact) => contact.name === name)[0]
        : undefined;
      let localEvents = events.map((event) => {
        if (event.start === date) {
          switch (type) {
            case "primary":
              event.info.primary = info;
              break;
            case "backup":
              event.info.backup = info;
              break;
            case "accompaniment":
              setIncludeAccompaniment(false);
              event.info.accompaniment = info;
              break;
            case "secondBackup":
              setIncludeSecondBackup(false);
              event.info.secondBackup = info;
              break;
            default:
              break;
          }
        }
        return event;
      });
      setEvents(localEvents);
    }
  }

  function reassign(type) {
    let localEvents = events.map((event) => {
      if (event.start === date) {
        event.info[type] = undefined;
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
        <Primary
          primaryInfo={shift.info.primary}
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
          reassign={reassign}
        />
        <Backup
          backupInfo={shift.info.backup}
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
          reassign={reassign}
        />
        {shift.info.accompaniment || isWeekend(date) ? (
          <Accompaniment
            date={date}
            setIncludeAccompaniment={setIncludeAccompaniment}
            accompanimentInfo={shift.info.accompaniment}
            contactListSelectable={contactListSelectable}
            assignNew={assignNew}
            reassign={reassign}
          />
        ) : includeAccompaniment ? (
          <RequestAssignment
            required={isWeekend(date)}
            type="accompaniment"
            label="Accompaniment"
            contactListSelectable={contactListSelectable}
            assignNew={assignNew}
            reassign={reassign}
            setInclude={setIncludeAccompaniment}
          />
        ) : (
          <Button w="100%" onClick={() => setIncludeAccompaniment(true)}>
            Add Accompaniment
          </Button>
        )}
        <SecondBackup
          includeSecondBackup={includeSecondBackup}
          setIncludeSecondBackup={setIncludeSecondBackup}
          secondBackupInfo={shift.info.secondBackup}
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
          reassign={reassign}
        />
      </VStack>
    </Card>
  );
};

const Primary = ({
  primaryInfo,
  contactListSelectable,
  assignNew,
  reassign,
}) => {
  return (
    <Flex bg={primaryInfo ? "green.100" : "orange.100"} w="100%" p={2}>
      {primaryInfo ? (
        <Flex align="center" w="100%">
          <CheckIcon boxSize={7} mr="20px" />
          <Box w="100%">
            <Flex align="center" w="100%">
              <Text fontWeight="bold" mr={3}>
                Primary
              </Text>
              <Spacer />
              <Button size="xs" onClick={() => reassign("primary")}>
                Re-assign
              </Button>
            </Flex>
            <Text>{primaryInfo.name}</Text>
            <Text>{primaryInfo.phone}</Text>
          </Box>
        </Flex>
      ) : (
        <RequestAssignment
          required
          type="primary"
          label="Primary"
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
        />
      )}
    </Flex>
  );
};

const Backup = ({ backupInfo, contactListSelectable, assignNew, reassign }) => {
  return (
    <Box w="100%">
      {backupInfo ? (
        <Box>
          <Flex>
            <Text fontSize="20px" fontWeight="bold">
              Backup
            </Text>
            <Spacer />
            <Button size="xs" onClick={() => reassign("backup")}>
              Re-assign
            </Button>
          </Flex>
          <Text fontSize="16px">{`${backupInfo.name} - ${backupInfo.phone}`}</Text>
        </Box>
      ) : (
        <RequestAssignment
          required
          type="backup"
          label="Backup"
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
        />
      )}
    </Box>
  );
};

const Accompaniment = ({
  date,
  accompanimentInfo,
  setIncludeAccompaniment,
  contactListSelectable,
  assignNew,
  reassign,
}) => {
  return (
    <Box w="100%">
      {accompanimentInfo ? (
        <Box>
          <Flex>
            <Text fontSize="20px" fontWeight="bold">
              Accompaniment
            </Text>
            <Spacer />
            <Button size="xs" onClick={() => reassign("accompaniment")}>
              {isWeekend(date) ? "Re-assign" : "Remove"}
            </Button>
          </Flex>
          <Text fontSize="16px">{`${accompanimentInfo.name} - ${accompanimentInfo.phone}`}</Text>
        </Box>
      ) : (
        <RequestAssignment
          required={isWeekend(date)}
          type="accompaniment"
          label="Accompaniment"
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
          reassign={reassign}
          setInclude={setIncludeAccompaniment}
        />
      )}
    </Box>
  );
};

const SecondBackup = ({
  includeSecondBackup,
  setIncludeSecondBackup,
  secondBackupInfo,
  contactListSelectable,
  assignNew,
  reassign,
}) => {
  return (
    <Box w="100%">
      {secondBackupInfo ? (
        <Box w="100%">
          <Box>
            <Flex>
              <Text fontSize="20px" fontWeight="bold">
                Second Backup
              </Text>
              <Spacer />
              <Button size="xs" onClick={() => reassign("secondBackup")}>
                Remove
              </Button>
            </Flex>
            <Text fontSize="16px">{`${secondBackupInfo.name} - ${secondBackupInfo.phone}`}</Text>
          </Box>
        </Box>
      ) : includeSecondBackup ? (
        <RequestAssignment
          type="secondBackup"
          label="Second Backup"
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
          reassign={reassign}
          setInclude={setIncludeSecondBackup}
        />
      ) : (
        <Button w="100%" onClick={() => setIncludeSecondBackup(true)}>
          Add Second Backup
        </Button>
      )}
    </Box>
  );
};

const RequestAssignment = ({
  type,
  label,
  contactListSelectable,
  assignNew,
  reassign,
  required,
  setInclude,
}) => {
  const [selected, setSelected] = useState("");

  function resetAssignment() {
    reassign(type);
    setInclude(false);
  }

  return (
    <Flex align="center" w="100%">
      {required ? (
        <WarningIcon boxSize={7} mr="20px" color="red" />
      ) : (
        <Icon
          as={AiOutlineCloseSquare}
          boxSize={7}
          mr="20px"
          cursor="pointer"
          onClick={() => resetAssignment()}
        />
      )}

      <Box w="100%">
        <Flex mb={1}>
          <Text fontWeight="bold" mr={3}>
            {label}
          </Text>
          <Spacer />
          <Button size="xs" onClick={() => assignNew(selected, type)}>
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
          onChange={(e) => setSelected(e.value)}
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
            } ${date.getDate()}, ${date.getFullYear()} at ${moment(
              shift.start
            ).format("hh:mmA")}-${moment(shift.end).format("hh:mmA")}`}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const CreateShiftModal = ({
  contactList,
  events,
  setEvents,
  isOpen,
  onClose,
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
      setEvents([...events, newShift]);
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
              contactList={contactList}
              type="Primary"
              setVolunteer={setPrimary}
            />
            <AddVolunteer
              contactList={contactList}
              type="Backup"
              setVolunteer={setBackup}
            />
            {includeAccompaniment || isWeekend(startDate) ? (
              <AddVolunteer
                contactList={contactList}
                type="Accompaniment"
                removeable={!isWeekend(startDate)}
                onRemove={() => setIncludeAccompaniment(false)}
                setVolunteer={setAccompaniment}
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
                setVolunteer={setSecondBackup}
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

const AddVolunteer = ({
  contactList,
  type,
  removeable,
  onRemove,
  setVolunteer,
}) => {
  const [searchVolunteer, setSearchVolunteer] = useState(false);
  var contactListSelectable = [];
  contactList.forEach((contact) => {
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
          onChange={(e) => setVolunteer(e.value)}
        />
      ) : (
        <Button
          onClick={() => setSearchVolunteer(true)}
        >{`Assign ${type} Now (Optional)`}</Button>
      )}
    </Flex>
  );
};

const LuminaCalendar = ({ events, setCurrentEvent }) => {
  return (
    <Calendar
      selectable
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={events}
      style={{ height: "80vh" }}
      views={["month", "day"]}
      onSelectEvent={(e) => setCurrentEvent(e)}
    />
  );
};

function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 0 ? true : false;
}

export default ShiftCalendar;
