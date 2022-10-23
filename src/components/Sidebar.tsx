import { Button, Flex, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineUser,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import TextIcon from './TextIcon';

type SidebarElement = {
  name: string;
  url: string;
  icon: IconType;
};

const sidebarElements: SidebarElement[] = [
  {
    name: 'Dashboard',
    url: '/home/dashboard',
    icon: AiOutlineHome,
  },
  {
    name: 'Calendar',
    url: '/home/calendar',
    icon: AiOutlineCalendar,
  },
  {
    name: 'Directory',
    url: '/home/directory',
    icon: AiOutlineMenu,
  },
  {
    name: 'Profile',
    url: '/home/profile',
    icon: AiOutlineUser,
  },
];

type Props = {};

const Sidebar = (props: Props) => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <Flex h="100vh" shadow="lg" alignItems="center" flexDir="column">
      <ColorModeSwitcher w="100%" borderRadius={0} />
      <Spacer />
      <VStack w="100%" m={3}>
        {sidebarElements.map((element) => {
          return (
            <TextIcon
              left
              icon={element.icon}
              fontSize="xl"
              text={element.name}
              p="4"
              cursor="pointer"
              _hover={{
                bg: 'teal.400',
              }}
              w="100%"
              onClick={() => navigate(element.url)}
            />
          );
        })}
      </VStack>
      <Spacer />
      <Button w="100%" colorScheme="red" borderRadius={0} onClick={signOut}>
        Sign Out
      </Button>
    </Flex>
  );
};

export default Sidebar;
