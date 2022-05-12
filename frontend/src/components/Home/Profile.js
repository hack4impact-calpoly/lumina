import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../SharedComponents/Card";
import moment from "moment";
import { daysOfWeek, months } from "../SharedComponents/DateTranslation";

const Profile = ({ user }) => {
  const [shifts, setShifts] = useState([
    {
      start: new Date(2022, 1, 18, 10),
      end: new Date(2022, 1, 18, 13),
      title: "2/2",
      info: {
        primary: {
          name: "Adriel Bogan",
          phone: "(805) 555 - 555",
        },
        backup: {
          name: "Lenna Hane",
          phone: "(805) 555 - 555",
        },
        secondBackup: {
          name: "Eliane Schneider",
          phone: "(805) 555-5555",
        },
        allDay: {
          backup: {
            name: "Bernita Collier",
            phone: "(805) 555 - 555",
          },
        },
      },
    },
  ]);
  let navigate = useNavigate()
  function submit() {
    navigate('/change-password')
  }

  return (
    <Flex w="100%" flexDir="column" align="center">
      <Box mb={3} align="center">
        <Heading
          size="4xl"
          pb={5}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          {`${user.firstName} ${user.lastName}`}
        </Heading>
        <Text pb={3}>{user.email}</Text>
        <Text pb={3}>{user.phone}</Text>
        <Button color="red.500" w="100%" variant="animated" onClick={() => submit()}>
          <Text pr={3}>Change Password</Text>
          <ArrowForwardIcon />
        </Button>
      </Box>
      <Box>
        <Heading size="xl" mb={3}>
          Recent Shifts
        </Heading>
        {shifts.map((shift) => {
          return <ShiftCard shift={shift} mb={3} />;
        })}
      </Box>
      <Button color="blue.500" cursor="pointer" variant="animated">
        <Flex align="baseline">
          <Text fontSize="20px" mr={3}>
            See all past shifts
          </Text>
          <ArrowForwardIcon h="100%" />
        </Flex>
      </Button>
    </Flex>
  );
};

const ShiftCard = ({ shift, ...rest }) => {
  const startTime = moment(shift.start).format("hh:mmA");
  const endTime = moment(shift.end).format("hh:mmA");
  return (
    <Card w="500px" {...rest}>
      <Flex>
        <Box>
          <Text fontWeight="bold" fontSize="20px">
            {`
              ${daysOfWeek[shift.start.getDay()]}, 
              ${months[shift.start.getMonth()]} 
              ${shift.start.getDate()} 
              ${shift.start.getFullYear()}
            `}
          </Text>
          <Text>{`${startTime} - ${endTime}`}</Text>
        </Box>
        <Spacer />
        <Flex color="blue.500" alignItems="center" cursor="pointer">
          <Text fontSize="18px" mr={1}>
            Details
          </Text>
          <ArrowForwardIcon w={15} h={15} />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Profile;
