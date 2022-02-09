import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Center, IconButton, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Consists of the Rise logo with an optional back button
// Accepted props:
// 'back="/link-here"' - designates what the back button does, if not included the back button will not render

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
          alt='RISE logo in color.'
          mixBlendMode='multiply'
        />
      </Center>
    </Flex>
  );
};

export default LogoWithBack;
