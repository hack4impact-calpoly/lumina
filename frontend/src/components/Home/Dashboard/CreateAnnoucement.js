import { Box, Button, Flex, Heading, Icon, Spacer } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const CreateAnnoucement = ({setCreateAnnoucement, ...rest}) => {
  return (
    <Box>
      <Flex>
        <Icon as={AiOutlineClose} w={8} h={8} onClick={() => setCreateAnnoucement(false)} cursor="pointer" />
        <Spacer />
        <Heading>
          New Annoucement
        </Heading>
        <Spacer />
        <Button bg="red.200" variant="animated">
          Post
        </Button>
      </Flex>
    </Box>
  );
};

export default CreateAnnoucement;
