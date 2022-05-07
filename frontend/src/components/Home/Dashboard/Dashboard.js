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
import UserShifts from "./UserShifts";
import UserShiftsM from "./UserShiftsMobile";
import Annoucements from "./Annoucements";
import Announcements from "./AnnouncementsMobile";
import CreateAnnoucement from "./CreateAnnoucement";
import { ChevronRightIcon } from '@chakra-ui/icons'

const Dashboard = ({ contactList, setContactList }) => {
  return (
    <Box w="100%">
      <BrowserView>
        <DashboardBrowser />
      </BrowserView>
      <MobileView>
        <DashboardMobile />
      </MobileView>
    </Box>
  );
};

const DashboardBrowser = ({}) => {
  const [createAnnoucement, setCreateAnnoucement] = useState(false);
  return (
    <Box mr="10%">
      {createAnnoucement ? (
        <CreateAnnoucement setCreateAnnoucement={setCreateAnnoucement} />
      ) : (
        <Box>
          <Heading mb="3%" size="4xl">
            Hi First Name!
          </Heading>
          <Flex flexDir="row">
            <UserShifts w="45%" />
            <Annoucements ml="5%" w="45%" setCreateAnnoucement={setCreateAnnoucement} />
          </Flex>
        </Box>
      )}
    </Box>
  );
};

const DashboardMobile = ({}) => {
  const [createAnnoucement, setCreateAnnoucement] = useState(false);
  return (
  <Box>
     <Text fontSize="40px" fontWeight="extrabold" marginLeft="4">
        Hi + Name!
      </Text>
     <Text  mt={4} fontSize="30px" fontWeight="bold" marginLeft="4">
       Your next shifts
      </Text>
     <Text mt={2} marginLeft="5">
        This week
     </Text>
     <Text> 
     <Flex flexDir="row">
            <UserShiftsM ml="25%" w="45%" />
      </Flex>
     </Text>
     <Text mt={4} ml="4"> See all your upcoming shifts
      <ChevronRightIcon w={10} h={10}>
      </ChevronRightIcon>
     </Text>
     <Text marginLeft="4" mt={5} fontSize="30px" fontWeight="bold">
       Announcements
     </Text>
     <Text mt={3}>
       <Button colorScheme="red" marginLeft="4" onClick={() => setCreateAnnoucement(true)}>+ New </Button>
     </Text>
     <Announcements ml="25%" w="45%" setCreateAnnoucement={setCreateAnnoucement} />
     <Text mt={4} marginLeft="4"> See all announcements
      <ChevronRightIcon w={10} h={10}>
      </ChevronRightIcon>
     </Text>
  </Box>);
};

export default Dashboard;
