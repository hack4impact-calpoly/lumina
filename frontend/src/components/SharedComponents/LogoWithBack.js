import React, { useRef } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Center, IconButton, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Consists of the Rise logo with an optional back button
// Accepted props (all optional):
// 'back="/link-here"' - designates what the back button does, if not included the back button will not render
// element - designates what the "back" button should look like, default is the arrow icon but can be replaced with anything
// logoMr - margin right on the logo, value should be the width of your back element, default 40px for the back icon
//          required if also passing in an element property

const LogoWithBack = ({ back, element, logoMr, ...rest }) => {
  const backElement = useRef(null);
  return (
    <Flex mb={5} {...rest}>
      <Center>
        {back ? (
          <Link to={back}>
            <Center ref={backElement}>
              {element ? (
                element
              ) : (
                <IconButton
                  variant="animated"
                  icon={<ArrowBackIcon w="5" h="5" />}
                />
              )}
            </Center>
          </Link>
        ) : (
          <Box></Box>
        )}
      </Center>
      <Center flex="1" mr={back ? (element ? logoMr : "40px") : "0px"}>
        <Image
          src="https://slochamber.org/wp-content/uploads/2018/12/RISE_1024.png"
          w="100px"
          h="50px"
          alt="RISE logo in color."
          mixBlendMode="multiply"
        />
      </Center>
    </Flex>
  );
};

export default LogoWithBack;
