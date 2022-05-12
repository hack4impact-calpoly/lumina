import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Icon,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import {
  AiOutlineCloseSquare,
} from "react-icons/ai";
import Select from "react-select";
const AddVolunteer = ({
    type,
    removeable,
    onRemove,
    setVolunteer,
    contactListSelectable,
  }) => {
    const [searchVolunteer, setSearchVolunteer] = useState(false);
    return (
      <Flex flexDir="column" align="left">
        <Flex mb={3} flexDir="row" align="center">
          <Icon as={BiUser} w={6} h={6} mr={3} />
          <Text>{type}</Text>
          {searchVolunteer ? (
            <Button ml={3} size="xs" onClick={() => setSearchVolunteer(false)}>
              Remove Assignment
            </Button>
          ) : (
            <Box></Box>
          )}
  
          <Spacer />
          {removeable ? (
            <Icon
              as={AiOutlineCloseSquare}
              w={5}
              h={5}
              cursor="pointer"
              onClick={onRemove}
            />
          ) : (
            <Box></Box>
          )}
        </Flex>
        {searchVolunteer ? (
          <Select
            className="basic-single"
            classNamePrefix="select"
            isClearable
            isSearchable
            name="color"
            options={contactListSelectable}
            onChange={(e) => setVolunteer(e.value)}
          />
        ) : (
          <Button
            onClick={() => setSearchVolunteer(true)}
          >{`Assign ${type} Now (Optional)`}</Button>
        )}
      </Flex>
    );
  };

export default AddVolunteer