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
  Icon,
  Center,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Card } from "../../SharedComponents/Card";
import { daysOfWeek, months } from "../../SharedComponents/DateTranslation";
import MoreInfo from "../../SharedComponents/MoreInfo";
import { ChevronRightIcon } from '@chakra-ui/icons';

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Nulla facilisi nullam vehicula ipsum a. Mattis nunc sed blandit libero volutpat sed cras ornare. Enim tortor at auctor urna nunc id cursus metus. Neque ornare aenean euismod elementum nisi quis eleifend quam. Enim nec dui nunc mattis. Nisl pretium fusce id velit. Non quam lacus suspendisse faucibus interdum posuere lorem. Massa vitae tortor condimentum lacinia quis vel eros. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Fringilla ut morbi tincidunt augue interdum velit euismod in. Nisl purus in mollis nunc sed id semper. Sociis natoque penatibus et magnis dis parturient montes. Ac tortor dignissim convallis aenean. Felis eget nunc lobortis mattis aliquam. Cras tincidunt lobortis feugiat vivamus. Sapien et ligula ullamcorper malesuada proin. Massa placerat duis ultricies lacus sed turpis tincidunt id. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Maecenas accumsan lacus vel facilisis. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Pellentesque id nibh tortor id aliquet lectus proin nibh. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Quam viverra orci sagittis eu volutpat odio. Et netus et malesuada fames ac. Morbi tempus iaculis urna id. Pharetra sit amet aliquam id. Odio ut sem nulla pharetra diam sit amet nisl. Adipiscing at in tellus integer feugiat scelerisque varius. In hac habitasse platea dictumst vestibulum rhoncus est. Cursus mattis molestie a iaculis at erat. Nibh ipsum consequat nisl vel pretium lectus quam id. Pretium quam vulputate dignissim suspendisse in est ante. Lacus sed turpis tincidunt id aliquet risus. Cursus turpis";

const Announcements = ({ setCreateAnnoucement, ...rest }) => {
  return (
    <Box {...rest}>
      <VStack>
        <AnnoucementCard
          date={new Date(2022, 2, 13, 12)}
          header="New Protocol"
          body={loremIpsum}
        />
        <AnnoucementCard
          date={new Date(2022, 3, 13, 12)}
          header="New Protocol, super long title to test"
          body={loremIpsum}
        />
      </VStack>
    </Box>
  );
};

const AnnoucementCard = ({ date, header, body, ...rest }) => {
  return (
    <Card mt={4}  w={80}>
      <Flex>
        <Text fontWeight="bold" fontSize="17px" isTruncated maxW="300px">
          {header}
        </Text>
        <Spacer />
        <Text>
          {`${
            months[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()}`}
        </Text>
      </Flex>
      <Text noOfLines={3}>{body}</Text>
      <Text mt={4} marginLeft="2"> Read more 
      <ChevronRightIcon w={10} h={10}> </ChevronRightIcon>
     </Text>
    </Card>
  );
};

export default Announcements;
