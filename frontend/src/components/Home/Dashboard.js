import { Card } from "../SharedComponents/Card";
import React from "react";
import {
  Box,
  Heading,
  HStack,
  Spacer,
  Flex,
  Text,
  VStack,
  IconButton,
  Button,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'

const Dashboard = () => {
  // const [name, setName] = useState("");
  return (
  <Box>
     <Heading>Hi + Name!</Heading>
     <Text  mt={4} fontSize="30px">
       Your next shifts
      </Text>
     <Text mt={1} fontFamily>
        This week
     </Text>
     <Text> 
       <Card h={80} w={300} mt={3}>
        </Card> 
     </Text>
     <Text mt={5} fontSize="30px">
       Announcements
     </Text>
     <Text mt={3}>
       <Button colorScheme='red' align="center">+ New</Button>
     </Text>
     <Card mt={4} h={300} w={400}>
     </Card>
     <Text mt={4}> See all announcements
      <ChevronRightIcon w={10} h={10}>
      </ChevronRightIcon>
     </Text>
  </Box>);

};

export default Dashboard
