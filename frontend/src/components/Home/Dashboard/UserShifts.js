import { EmailIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Spacer,
  Flex,
  Text,
  VStack,
  IconButton,
  Icon,
  Center,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Card } from "../../SharedComponents/Card";
import FormInput from "../../SharedComponents/FormInput";
import { BrowserView, MobileView } from "react-device-detect";
import { AiOutlineRight } from "react-icons/ai";
import { daysOfWeek, months } from "../../SharedComponents/DateTranslation";
import moment from "moment";
import MoreInfo from "../../SharedComponents/MoreInfo";

const UserShifts = ({ ...rest }) => {
  return (
    <Box {...rest}>
      <Heading mb={5}>Your next shifts</Heading>
      <VStack>
        <UserShiftCard
          start={new Date(2022, 3, 8, 11)}
          end={new Date(2022, 3, 8, 14)}
        />
        <UserShiftCard
          start={new Date(2022, 3, 9, 11)}
          end={new Date(2022, 3, 9, 14)}
        />
      </VStack>
      <MoreInfo text="See all your upcoming shifts"/>
    </Box>
  );
};

const UserShiftCard = ({ start, end, ...rest }) => {
  const startTime = moment(start).format("hh:mmA");
  const endTime = moment(end).format("hh:mmA");
  return (
    <Card w="100%" {...rest}>
      <Text fontWeight="bold" fontSize="30px">
        {daysOfWeek[start.getDay()]},{" "}
        {`${months[start.getMonth()]} ${start.getDate()}`}
      </Text>
      <Text fontSize="20px">{startTime}</Text>
      <Text>|</Text>
      <Text fontSize="20px">{endTime}</Text>
      <Text fontSize="30px">
        {daysOfWeek[end.getDay()]},{" "}
        {`${months[end.getMonth()]} ${end.getDate()}`}
      </Text>
    </Card>
  );
};

export default UserShifts;
