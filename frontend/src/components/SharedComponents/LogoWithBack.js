import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Center, IconButton, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Consists of the Rise logo with an optional back button
// Accepted props:
// 'back="/link-here"' - designates what the back button does, if not included the back button will not render

const LogoWithBack = (props) => {
  return (
    <Flex mb={5} {...props}>
      <Center>
        {props.back ? (
          <Link to={props.back}>
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
      <Center flex="1" mr={props.back ? "40px" : "0px"}>
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
