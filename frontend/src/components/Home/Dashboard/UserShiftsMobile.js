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
import { daysOfWeek, months } from "../../SharedComponents/DateTranslation";
import moment from "moment";

const UserShiftsM = ({ ...rest }) => {
  return (
    <Box {...rest}>
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
    </Box>
  );
};

const UserShiftCard = ({ start, end, ...rest }) => {
  const startTime = moment(start).format("hh:mmA");
  const endTime = moment(end).format("hh:mmA");
  return (
    <Card mt={4} w={80}>
    <Text ml="25%" fontWeight="bold" fontSize="20px">
        {daysOfWeek[start.getDay()]},{" "}
        {`${months[start.getMonth()]} ${start.getDate()}`}
      </Text>
      <Text mt="5%" ml="40%" fontSize="15px">{startTime}</Text>
      <Text ml="50%">|</Text>
      <Text ml="40%" fontSize="15px">{endTime}</Text>
      <Text mt="5%" marginLeft="20%" fontSize="20px">
        {daysOfWeek[end.getDay()]},{" "}
        {`${months[end.getMonth()]} ${end.getDate()}`}
      </Text>
    </Card>
  );
};

export default UserShiftsM;
