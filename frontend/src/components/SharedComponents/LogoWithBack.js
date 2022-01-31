import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, Center, IconButton, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const LogoWithBack = ({back}) => {
  return (
    <Flex mb={5}>
    <Center>
      <Link to={back}>
        <Center>
          <IconButton
            icon={<ArrowBackIcon w="5" h="5" verticalAlign="50%" />}
          />
        </Center>
      </Link>
    </Center>
    <Center flex="1" mr="40px">
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
