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

const ShiftCalendarMobile = ({
  contactList,
  date,
  currentEvent,
  setCurrentEvent,
  events,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
        <Button bg="blue.200" onClick={onOpen}>
          <Icon as={AiOutlineFileSearch} mr={1} />
          <Text>View Details</Text>
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>{daysOfWeek[date.getDay()]}</Text>
            <Text fontWeight="bold" fontSize="24px">
              {`${
                months[date.getMonth()]
              } ${date.getDate()}, ${date.getFullYear()}`}
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <Heading>HELLO!</Heading>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default ShiftCalendarMobile;
