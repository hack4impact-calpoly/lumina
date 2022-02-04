import { Box, Flex, Text, Icon, VStack, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FiHome, FiCalendar, FiMenu, FiUser } from "react-icons/fi";
import Directory from "./Directory";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

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
      <LogoWithBack boxShadow="md" />
      <Flex>
        <Sidebar setMainContent={setMainContent} />
        <Flex mt="30px" ml="70px">
          {switchMainComponent()}
        </Flex>
      </Flex>
    </Box>
  );
};

const Sidebar = ({ setMainContent }) => {
  return (
    <Flex w="300px" h="100%" flexDir="column" boxShadow="md" pos="sticky">
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
        />
        <SidebarItem
          name="Calendar"
          icon={FiCalendar}
          w="100%"
          onClick={() => setMainContent("calendar")}
        />
        <SidebarItem
          name="Directory"
          icon={FiMenu}
          w="100%"
          onClick={() => setMainContent("directory")}
        />
        <SidebarItem
          name="Profile"
          icon={FiUser}
          w="100%"
          onClick={() => setMainContent("profile")}
        />
      </VStack>
    </Flex>
  );
};

const SidebarItem = ({ icon, name, ...rest }) => {
  return (
    <Flex
      {...rest}
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "cyan.400",
        color: "white",
      }}
    >
      <Icon
        mr="4"
        fontSize="16"
        _groupHover={{
          color: "white",
        }}
        as={icon}
      />
      <Text fontSize="20px">{name}</Text>
    </Flex>
  );
};

export default Home;
