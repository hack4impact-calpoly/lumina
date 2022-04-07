import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
  Divider,
  HStack,
  Stack,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FiHome, FiCalendar, FiMenu, FiUser } from "react-icons/fi";
import Directory from "./Directory";
import LogoWithBack from "../SharedComponents/LogoWithBack";
import ShiftCalendar from "./ShiftCalendar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { Card } from "../SharedComponents/Card";
import { BrowserView, MobileView } from "react-device-detect";

const sidebarItems = [
  {
    name: "Dashboard",
    mainContent: "dashboard",
    icon: FiHome,
  },
  {
    name: "Calendar",
    mainContent: "calendar",
    icon: FiCalendar,
  },
  {
    name: "Directory",
    mainContent: "directory",
    icon: FiMenu,
  },
  {
    name: "Profile",
    mainContent: "profile",
    icon: FiUser,
  },
];

const Home = () => {
  const [mainContent, setMainContent] = useState("");
  const [contactList, setContactList] = useState([
    {
      name: "Lenna Hane",
      phone: "(805) 555-5555",
    },
    {
      name: "Bernita Collier",
      phone: "(805) 555-5555",
    },
    {
      name: "Eliane Schneider",
      phone: "(805) 555-5555",
    },
    {
      name: "Emmalee Stark",
      phone: "(805) 555-5555",
    },
    {
      name: "Adriel Bogan",
      phone: "(805) 555-5555",
    },
    {
      name: "Vergie Marquardt",
      phone: "(805) 555-5555",
    },
    {
      name: "Jerrod Gutkowski",
      phone: "(805) 555-5555",
    },
    {
      name: "Chaim Jones",
      phone: "(805) 555-5555",
    },
    {
      name: "Erling Mayert",
      phone: "(805) 555-5555",
    },
    {
      name: "Howell Torphy",
      phone: "(805) 555-5555",
    },
    {
      name: "Sylvester Bednar",
      phone: "(805) 555-5555",
    },
    {
      name: "Griffin Little",
      phone: "(805) 555-5555",
    },
    {
      name: "Rhett Fritsch",
      phone: "(805) 555-5555",
    },
    {
      name: "Ara Halvorson",
      phone: "(805) 555-5555",
    },
    {
      name: "Murphy Jacobson",
      phone: "(805) 555-5555",
    },
    {
      name: "Arianna Jewess",
      phone: "(805) 555-5555",
    },
    {
      name: "Kristy Kuhlman",
      phone: "(805) 555-5555",
    },
    {
      name: "Karli Frami",
      phone: "(805) 555-5555",
    },
    {
      name: "Mina Carroll",
      phone: "(805) 555-5555",
    },
    {
      name: "Jennifer Ziemann",
      phone: "(805) 555-5555",
    },
    {
      name: "Nikki Murray",
      phone: "(805) 555-5555",
    },
    {
      name: "Kelsi Cronin",
      phone: "(805) 555-5555",
    },
    {
      name: "Clifford Feeney",
      phone: "(805) 555-5555",
    },
    {
      name: "Rowland Cormier",
      phone: "(805) 555-5555",
    },
  ]);
  const [user, setUser] = useState({
    firstName: "Lenna",
    lastName: "Hane",
    email: "lenna.hane@gmail.com",
    phone: "(805) 555-5555",
  });
  function switchMainComponent() {
    switch (mainContent) {
      case "directory":
        return (
          <Directory
            contactList={contactList}
            setContactList={setContactList}
          />
        );
      case "calendar":
        return <ShiftCalendar contactList={contactList} />;
      case "profile":
        return <Profile user={user} />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <Box w="100%">
      <BrowserView style={{ width: "100%" }}>
        <HomeBrowser
          mainContent={mainContent}
          setMainContent={setMainContent}
          switchMainComponent={switchMainComponent}
        />
      </BrowserView>
      <MobileView style={{ width: "100%" }}>
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
    <Box w="100%" {...rest}>
      <LogoWithBack
        position="fixed"
        boxShadow="md"
        as="header"
        backgroundColor="white"
        w="100%"
        zIndex="sticky"
        ml="150px"
      />
      <Flex w="100%">
        <Sidebar
          mainContent={mainContent}
          setMainContent={setMainContent}
          position="fixed"
          zIndex="sticky"
        />
        <Flex pt="90px" pb="90px" ml="300px" w="100%">
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
  return (
    <Box {...rest}>
      <Flex>
        <LogoWithBack
          position="fixed"
          boxShadow="md"
          as="header"
          backgroundColor="white"
          w="100%"
          zIndex="sticky"
          element={<MobileSignout />}
          back="/"
        />
        <MobileNavBar
          mainContent={mainContent}
          setMainContent={setMainContent}
          position="fixed"
          zIndex="sticky"
          height="fixed"
        />
        <Flex mt="80px" ml="10px">
          {switchMainComponent()}
        </Flex>
      </Flex>
    </Box>
  );
};

const MobileSignout = ({ mainContent, setMainContent, ...rest }) => {
  return (
    <Box {...rest} ml={2} flexDir="column">
      <Link to="/">
        <Text
          cursor="pointer"
          textAlign="center"
          fontWeight="bold"
          fontSize="15px"
        >
          Sign out
        </Text>
      </Link>
    </Box>
  );
};

const MobileNavBar = ({ mainContent, setMainContent, ...rest }) => {
  return (
    <Card {...rest} w="100%" h="100px" flexDir="row" bottom={0}>
      <HStack w="100%">
        <NavbarItem
          icon={FiHome}
          onClick={() => setMainContent("")}
          mainContent={mainContent}
          currentContent=""
        />
        <NavbarItem
          icon={FiCalendar}
          onClick={() => setMainContent("calendar")}
          mainContent={mainContent}
          currentContent="calendar"
        />
        <NavbarItem
          icon={FiMenu}
          onClick={() => setMainContent("directory")}
          mainContent={mainContent}
          currentContent="directory"
        />
        <NavbarItem
          icon={FiUser}
          onClick={() => setMainContent("profile")}
          mainContent={mainContent}
          currentContent="profile"
        />
      </HStack>
    </Card>
  );
};

const NavbarItem = ({ icon, name, mainContent, currentContent, ...rest }) => {
  return (
    <Center
      w="100%"
      bg={mainContent === currentContent ? "teal.400" : "white"}
      color={mainContent === currentContent ? "white" : "black"}
      alignItems="baseline"
      {...rest}
      p="0.5"
      borderRadius="lg"
      cursor="pointer"
      _hover={{
        bg: "teal.400",
        color: "white",
      }}
    >
      <Box w="65px" h="50px" align="center">
        <Icon mt={2} fontSize="30" as={icon} />
      </Box>
    </Center>
  );
};

const Sidebar = ({ mainContent, setMainContent, ...rest }) => {
  return (
    <Card {...rest} h="100%" flexDir="column">
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
        {sidebarItems.map((item) => {
          return (
            <SidebarItem
              name={item.name}
              icon={item.icon}
              w="100%"
              onClick={() => setMainContent(item.mainContent)}
              bg={mainContent === item.mainContent ? "teal.400" : "white"}
              color={mainContent === item.mainContent ? "white" : "black"}
            />
          );
        })}
      </VStack>
    </Card>
  );
};

const SidebarItem = ({ icon, name, ...rest }) => {
  return (
    <Flex
      alignItems="center"
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
      <Icon ml={0} fontSize="16" as={icon} />
      <Text fontSize="20px" ml={3}>
        {name}
      </Text>
    </Flex>
  );
};

export default Home;
