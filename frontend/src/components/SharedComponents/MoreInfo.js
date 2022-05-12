import React from "react";
import { Center, Flex, Text, Icon } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";

const MoreInfo = ({ text, ...rest }) => {
  return (
    <Center cursor="pointer" mt={5} {...rest}>
      <Flex>
        <Text fontWeight="bold" fontSize="20px">
          {text}
        </Text>
        <Icon as={AiOutlineRight} w={8} h={8} ml={1} />
      </Flex>
    </Center>
  );
};

export default MoreInfo;
