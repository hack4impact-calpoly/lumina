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
  Icon
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Card } from "../SharedComponents/Card";
import FormInput from "../SharedComponents/FormInput";
import { BrowserView, MobileView } from "react-device-detect";
import { AiFillCloseCircle } from "react-icons/ai";

const Directory = ({ contactList, setContactList}) => {
  const [name, setName] = useState("");

  return (
    <Box>
      <BrowserView>
        <DirectoryBrowser setName={setName} name={name} contactList={contactList} />
      </BrowserView>
      <MobileView>
        <DirectoryMobile setName={setName} name={name} contactList={contactList} />
      </MobileView>
    </Box>
  );
};

const DirectoryBrowser = ({ contactList, name, setName }) => {
  return (
    <Flex flexDir="row">
      <HeaderAndSearch setName={setName} name={name} minW="400px" mr="90px" />
      <VStack spacing={4}>
        {contactList.map((contact) => {
          if(contact.name.toLowerCase().includes(name.toLowerCase())) {
            return (
              <Contact name={contact.name} number={contact.phone} width="500px" />
            );
          }
        })}
      </VStack>
    </Flex>
  );
};

const DirectoryMobile = ({ contactList, name, setName }) => {
  return (
    <VStack align="left" w="95%" ml="2.5%" spacing={4}>
      <HeaderAndSearch setName={setName} name={name} mb="30px" />
      {contactList.map((contact) => {
        return <Contact name={contact.name} number={contact.phone} w="100%" />;
      })}
    </VStack>
  );
};

const Contact = ({ name, number, ...rest }) => {
  return (
    <Card {...rest}>
      <HStack>
        <VStack align="left">
          <Text fontWeight="bold" fontSize="20px">
            {name}
          </Text>
          <Text>{number}</Text>
        </VStack>
        <Spacer />
        <HStack align="right" spacing={8}>
          <IconButton variant="animated" icon={<PhoneIcon w={8} h={8} />} />
          <IconButton variant="animated" icon={<EmailIcon w={8} h={8} />} />
        </HStack>
      </HStack>
    </Card>
  );
};

const HeaderAndSearch = ({ setName, name, ...rest }) => {
  function clearInput() {
    console.log(name)
    setName("")
  }
  return (
    <Box {...rest}>
      <Heading>Directory</Heading>
      <FormInput
        leftElement={<SearchIcon />}
        rightElement={<Icon as={AiFillCloseCircle} cursor="pointer" onClick={() => clearInput()} />}
        value={name}
        mt={5}
        id="search"
        label="Search by name"
        onChange={(e) => setName(e.target.value)}
      />
    </Box>
  );
};

export default Directory;
