import { Box, Flex, Text, Icon, VStack, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FiHome, FiCalendar, FiMenu, FiUser } from "react-icons/fi";
import Directory from "./Directory";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { Card } from "../SharedComponents/Card";
import { BrowserView, MobileView } from "react-device-detect";

const Home = () => {
  const [mainContent, setMainContent] = useState("");

  function switchMainComponent() {
    switch (mainContent) {
      case "directory":
        return <Directory />;
      case "calendar":
        return <Calendar />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <Box>
      <BrowserView>
        <HomeBrowser
          mainContent={mainContent}
          setMainContent={setMainContent}
          switchMainComponent={switchMainComponent}
        />
      </BrowserView>
      <MobileView>
        <HomeMobile
          mainContent={mainContent}
          setMainContent={setMainContent}
          switchMainComponent={switchMainComponent}
        />
      </MobileView>
    </Box>
  );
};

const HomeBrowser = ({
  mainContent,
  setMainContent,
  switchMainComponent,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <LogoWithBack
        position="fixed"
        boxShadow="md"
        as="header"
        backgroundColor="white"
        w="100%"
        zIndex="sticky"
      />
      <Flex>
        <Sidebar
          mainContent={mainContent}
          setMainContent={setMainContent}
          position="fixed"
          zIndex="sticky"
        />
        <Flex mt="90px" ml="370px">
          {switchMainComponent()}
        </Flex>
      </Flex>
    </Box>
  );
};

const HomeMobile = ({
  mainContent,
  setMainContent,
  switchMainComponent,
  ...rest
}) => {
  return <Box {...rest}>MOBILE HOME</Box>;
};

const Sidebar = ({ mainContent, setMainContent, ...rest }) => {
  return (
    <Card {...rest} w="300px" h="100%" flexDir="column">
      <Link to="/">
        <Text
          cursor="pointer"
          textAlign="center"
          fontWeight="bold"
          fontSize="20px"
        >
          Sign out
        </Text>
      </Link>
      <Divider mt={3} />
      <VStack spacing="1" mt={3}>
        <SidebarItem
          name="Dashboard"
          icon={FiHome}
          w="100%"
          onClick={() => setMainContent("")}
          bg={mainContent === "" ? "teal.400" : "white"}
          color={mainContent === "" ? "white" : "black"}
        />
        <SidebarItem
          name="Calendar"
          icon={FiCalendar}
          w="100%"
          onClick={() => setMainContent("calendar")}
          bg={mainContent === "calendar" ? "teal.400" : "white"}
          color={mainContent === "calendar" ? "white" : "black"}
        />
        <SidebarItem
          name="Directory"
          icon={FiMenu}
          w="100%"
          onClick={() => setMainContent("directory")}
          bg={mainContent === "directory" ? "teal.400" : "white"}
          color={mainContent === "directory" ? "white" : "black"}
        />
        <SidebarItem
          name="Profile"
          icon={FiUser}
          w="100%"
          onClick={() => setMainContent("profile")}
          bg={mainContent === "profile" ? "teal.400" : "white"}
          color={mainContent === "profile" ? "white" : "black"}
        />
      </VStack>
    </Card>
  );
};

const SidebarItem = ({ icon, name, ...rest }) => {
  return (
    <Flex
      alignItems="baseline"
      {...rest}
      p="4"
      mx="4"
      borderRadius="lg"
      cursor="pointer"
      _hover={{
        bg: "teal.400",
        color: "white",
      }}
    >
      <Icon mr="4" fontSize="16" as={icon} />
      <Text fontSize="20px">{name}</Text>
    </Flex>
  );
};

export default Home;