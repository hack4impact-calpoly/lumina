import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Text,
  Icon,
  VStack,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { FiHome, FiCalendar, FiMenu, FiUser } from "react-icons/fi";

const Home = () => {
  return (
    <Drawer
      autoFocus={false}
      isOpen={true}
      placement="left"
      returnFocusOnClose={false}
    >
      <DrawerContent>
        <DrawerBody>
          <Text textAlign="center" fontWeight="bold" fontSize="20px">Sign out</Text>
          <Divider mt={3}/>
          <VStack spacing="1" mt={3}>
            <SidebarItem name="Dashboard" icon={FiHome} w="100%"/>
            <SidebarItem name="Calendar" icon={FiCalendar} w="100%"/>
            <SidebarItem name="Directory" icon={FiMenu} w="100%"/>
            <SidebarItem name="Profile" icon={FiUser} w="100%"/>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
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
