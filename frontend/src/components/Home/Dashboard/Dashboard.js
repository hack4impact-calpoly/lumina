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
import Annoucements from "./Annoucements";
import CreateAnnoucement from "./CreateAnnoucement";
import HomeMainContentContainer from "../../SharedComponents/HomeMainContentContainer";

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
    <HomeMainContentContainer>
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
    </HomeMainContentContainer>
  );
};

const DashboardMobile = ({}) => {
  return <Box></Box>;
};

export default Dashboard;
