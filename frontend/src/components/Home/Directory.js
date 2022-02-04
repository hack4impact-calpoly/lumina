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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Card } from "../SharedComponents/Card";
import FormInput from "../SharedComponents/FormInput";
import TransparentIconButton from "../SharedComponents/TransparentIconButton";

const Directory = () => {
  const [name, setName] = useState("");
  const [contactList, setContactList] = useState([
    {
      name: "First Last",
      phone: "(805) 555-555",
    },
    {
      name: "First Last",
      phone: "(805) 555-555",
    },
    {
      name: "First Last",
      phone: "(805) 555-555",
    },
    {
      name: "First Last",
      phone: "(805) 555-555",
    },
    {
      name: "First Last",
      phone: "(805) 555-555",
    },
    {
      name: "First Last",
      phone: "(805) 555-555",
    },
  ]);

  return (
    <Flex flexDir="row">
      <HeaderAndSearch align="top" setName={setName} minW="400px" mr="90px" />
      <VStack spacing={4}>
        {contactList.map((contact) => {
          return <Contact name={contact.name} number={contact.phone} />;
        })}
      </VStack>
    </Flex>
  );
};

const Contact = ({ name, number }) => {
  return (
    <Card w="500px">
      <HStack>
        <VStack align="left">
          <Text fontWeight="bold" fontSize="20px">
            {name}
          </Text>
          <Text>{number}</Text>
        </VStack>
        <Spacer />
        <HStack align="right" spacing={8}>
          <TransparentIconButton icon={<PhoneIcon w={8} h={8} />} />
          <TransparentIconButton icon={<EmailIcon w={8} h={8} />} />
        </HStack>
      </HStack>
    </Card>
  );
};

const HeaderAndSearch = (props, { setName }) => {
  return (
    <Box {...props}>
      <Heading>Directory</Heading>
      <FormInput
        leftElement={<SearchIcon />}
        mt={5}
        id="search"
        label="Search by name"
        onChange={(e) => setName(e.target.value)}
      />
    </Box>
  );
};

export default Directory;
