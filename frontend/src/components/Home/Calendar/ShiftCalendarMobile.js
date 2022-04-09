import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  useDisclosure,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { AiOutlineFileSearch } from "react-icons/ai";
import { daysOfWeek, months } from "../../SharedComponents/DateTranslation";
import LuminaCalendar from "./LuminaCalendar";
import Shifts from "./Shifts";
import { ShiftDetailsDrawer } from "./CalendarDrawers";
import { PrepoulateConfirmModal } from "./CalendarModals";

const ShiftCalendarMobile = ({
  contactList,
  date,
  currentEvent,
  setCurrentEvent,
  events,
  setEvents,
  contactListSelectable,
  cancelShift,
  prepopulate
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const {
    isOpen: isPrepopulateOpen,
    onOpen: onPrepopulateOpen,
    onClose: onPrepopulateClose,
  } = useDisclosure();

  return (
    <Flex w="98%" flexDir="column" h="65vh">
      <Button variant="animated" bg="orange.100" mb={3} onClick={() => onPrepopulateOpen()}>
        Prepopulate
      </Button>
      <Button variant="animated" bg="orange.100" mb={3} >
        + New Shift
      </Button>

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
        <Button bg="blue.200" onClick={onOpen}>
          <Icon as={AiOutlineFileSearch} mr={1} />
          <Text>View Details</Text>
        </Button>
      </Flex>
      <ShiftDetailsDrawer
        date={date}
        currentEvent={currentEvent}
        contactList={contactList}
        events={events}
        setEvents={setEvents}
        contactListSelectable={contactListSelectable}
        cancelShift={cancelShift}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      />
      <PrepoulateConfirmModal
        prepopulate={prepopulate}
        isOpen={isPrepopulateOpen}
        onClose={onPrepopulateClose}
      />
    </Flex>
  );
};

export default ShiftCalendarMobile;
