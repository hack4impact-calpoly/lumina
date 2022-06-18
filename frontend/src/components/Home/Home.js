import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
  Divider,
  HStack,
  Center,
} from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FiHome, FiCalendar, FiMenu, FiUser } from "react-icons/fi";
import LogoWithBack from "../SharedComponents/LogoWithBack";
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

  return (
    <Box w="100%">
      <BrowserView style={{ width: "100%" }}>
        <HomeBrowser user={user} />
        <Outlet />
      </BrowserView>
      <MobileView style={{ width: "100%" }}>
        <HomeMobile />
        <Outlet />
      </MobileView>
    </Box>
  );
};

const HomeBrowser = ({ ...rest }) => {
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
        <Sidebar position="fixed" zIndex="sticky" />
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

const MobileNavBar = ({ ...rest }) => {
  let navigate = useNavigate();
  return (
    <Card {...rest} w="100%" h="100px" flexDir="row" bottom={0}>
      <HStack w="100%">
        <NavbarItem
          icon={FiHome}
          onClick={() => navigate("/home/dashboard")}
          currentContent=""
        />
        <NavbarItem
          icon={FiCalendar}
          onClick={() => navigate("/home/calendar")}
          currentContent="calendar"
        />
        <NavbarItem
          icon={FiMenu}
          onClick={() => navigate("/home/directory")}
          currentContent="directory"
        />
        <NavbarItem
          icon={FiUser}
          onClick={() => navigate("/home/profile")}
          currentContent="profile"
        />
      </HStack>
    </Card>
  );
};

const NavbarItem = ({ icon, ...rest }) => {
  return (
    <Center
      w="100%"
      alignItems="baseline"
      {...rest}
      p="0.5"
      borderRadius="lg"
      cursor="pointer"
    >
      <Box w="65px" h="50px" align="center">
        <Icon mt={2} fontSize="30" as={icon} />
      </Box>
    </Center>
  );
};

const Sidebar = ({ ...rest }) => {
  let navigate = useNavigate();
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
              key={item.name}
              name={item.name}
              icon={item.icon}
              w="100%"
              onClick={() => navigate(`/home/${item.mainContent}`)}
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
