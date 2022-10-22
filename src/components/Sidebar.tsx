import { Flex, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineUser,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

type SidebarElement = {
  name: string;
  url: string;
  icon: IconType;
};

const sidebarElements: SidebarElement[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: AiOutlineHome,
  },
  {
    name: 'Calendar',
    url: '/calendar',
    icon: AiOutlineCalendar,
  },
  {
    name: 'Directory',
    url: '/directory',
    icon: AiOutlineMenu,
  },
  {
    name: 'Profile',
    url: '/profile',
    icon: AiOutlineUser,
  },
];

type Props = {};

const Sidebar = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Flex h="100%" shadow="lg" alignItems="center">
      <VStack w="100%" m={3}>
        {sidebarElements.map((element) => {
          return (
            <Flex
              alignItems="center"
              p="4"
              mx="4"
              borderRadius="lg"
              cursor="pointer"
              _hover={{
                bg: 'teal.400',
                color: 'white',
              }}
              w="100%"
              onClick={() => navigate(element.url)}
            >
              <Icon ml={0} fontSize="16" as={element.icon} />
              <Text fontSize="20px" ml={3}>
                {element.name}
              </Text>
            </Flex>
          );
        })}
      </VStack>
    </Flex>
  );
};

export default Sidebar;
