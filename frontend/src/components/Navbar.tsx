import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Sidebar from './Sidebar';

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box width="full" py="4" px={{ base: '4', md: '8' }} bg="bg-accent">
      <Flex justify="space-between">
        <IconButton
          icon={<Icon as={AiOutlineMenu} />}
          aria-label="Open Menu"
          onClick={onToggle}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          isFullHeight
          preserveScrollBarGap
          // Only disabled for showcase
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent maxW="50%">
            <Sidebar />
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
