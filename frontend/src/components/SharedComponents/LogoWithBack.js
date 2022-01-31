import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Center, IconButton, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const LogoWithBack = ({ back }) => {
  return (
    <Flex mb={5}>
      <Center>
        {back ? (
          <Link to={back}>
            <Center>
              <IconButton
                variant="animated"
                icon={<ArrowBackIcon w="5" h="5" verticalAlign="50%" />}
              />
            </Center>
          </Link>
        ) : (
          <Box></Box>
        )}
      </Center>
      <Center flex="1" mr={back ? "40px" : "0px"}>
        <Image
          src="https://slochamber.org/wp-content/uploads/2018/12/RISE_1024.png"
          w="100px"
          h="50px"
        />
      </Center>
    </Flex>
  );
};

export default LogoWithBack;
