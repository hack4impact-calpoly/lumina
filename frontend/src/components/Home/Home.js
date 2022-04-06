import { Box, Flex, Text, Icon, VStack, Divider, HStack, Stack, Center } from "@chakra-ui/react";
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
import { CenterBox } from "../SharedComponents/CenterBox";

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
        <Flex pt="90px" pb="90px" ml="20%" w="100vw">
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
  return( 
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
          back = "/"
        />
        <MobileNavBar
          mainContent={mainContent}
          setMainContent={setMainContent}
          position="fixed"
          zIndex="sticky"
          height = "fixed"
        />
        <Flex mt="150px" ml="10px">
          {switchMainComponent()}
        </Flex>
      </Flex>
  </Box>);
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
            //name={"Dashboard"} 
            icon={FiHome}
            w="100%"
            onClick={() => setMainContent("")}
            bg={mainContent === "" ? "teal.400" : "white"}
            color={mainContent === "" ? "white" : "black"}
          />
          <NavbarItem
          //name="Calendar"
          icon={FiCalendar}
          w="100%"
          onClick={() => setMainContent("calendar")}
          bg={mainContent === "calendar" ? "teal.400" : "white"}
          color={mainContent === "calendar" ? "white" : "black"}
        />
        <NavbarItem
          //name="Directory"
          icon={FiMenu}
          w="100%"
          onClick={() => setMainContent("directory")}
          bg={mainContent === "directory" ? "teal.400" : "white"}
          color={mainContent === "directory" ? "white" : "black"}
        />
        <NavbarItem
          //name="Profile"
          icon={FiUser}
          w="100%"
          onClick={() => setMainContent("profile")}
          bg={mainContent === "profile" ? "teal.400" : "white"}
          color={mainContent === "profile" ? "white" : "black"}
        />
      </HStack>
    </Card>

    
    );
};

const NavbarItem = ({ icon, name, ...rest }) => {
  return (
    <Stack
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
    <Box w="65px" h="50px"  align={"center"}>
      <Icon mt={2} fontSize="30" as={icon} />
    </Box>
      
    </Stack>
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
      <Text fontSize="20px">{name}</Text>
    </Flex>
  );

};



export default Home;
