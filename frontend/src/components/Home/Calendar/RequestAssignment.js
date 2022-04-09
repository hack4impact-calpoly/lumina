import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Icon,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import {
  AiOutlineCloseSquare,
} from "react-icons/ai";
import Select from "react-select";

const RequestAssignment = ({
  type,
  label,
  contactListSelectable,
  assignNew,
  reassign,
  required,
  setInclude,
}) => {
  const [selected, setSelected] = useState("");

  function resetAssignment() {
    reassign(type);
    setInclude(false);
  }

  return (
    <Flex align="center" w="100%">
      {required ? (
        <WarningIcon boxSize={7} mr="20px" color="red" />
      ) : (
        <Icon
          as={AiOutlineCloseSquare}
          boxSize={7}
          mr="20px"
          cursor="pointer"
          onClick={() => resetAssignment()}
        />
      )}

      <Box w="100%">
        <Flex mb={1}>
          <Text fontWeight="bold" mr={3}>
            {label}
          </Text>
          <Spacer />
          <Button size="xs" onClick={() => assignNew(selected, type)}>
            Assign
          </Button>
        </Flex>

        <Select
          className="basic-single"
          classNamePrefix="select"
          isClearable
          isSearchable
          name="color"
          options={contactListSelectable}
          onChange={(e) => setSelected(e.value)}
        />
      </Box>
    </Flex>
  );
};

export default RequestAssignment;
