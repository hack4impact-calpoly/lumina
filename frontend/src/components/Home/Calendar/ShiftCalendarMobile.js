import React from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { AiOutlineFileSearch } from "react-icons/ai";
import { months } from "../../SharedComponents/DateTranslation";
import LuminaCalendar from "./LuminaCalendar";
import { ShiftDetailsDrawer } from "./CalendarDrawers";
import { PrepoulateConfirmModal } from "./CalendarModals";
import HomeMainContentContainer from "../../SharedComponents/HomeMainContentContainer";

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
    <HomeMainContentContainer flexDir="column" h="80vh">
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
    </HomeMainContentContainer>
  );
};

export default ShiftCalendarMobile;
