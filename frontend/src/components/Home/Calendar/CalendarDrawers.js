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

export const ShiftDetailsDrawer = ({
  date,
  currentEvent,
  contactList,
  events,
  setEvents,
  contactListSelectable,
  cancelShift,
  isOpen,
  onClose,
  btnRef,
}) => {
  return (
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
          <Shifts
            currentEvent={currentEvent}
            contactList={contactList}
            date={date}
            events={events}
            setEvents={setEvents}
            contactListSelectable={contactListSelectable}
            cancelShift={cancelShift}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
