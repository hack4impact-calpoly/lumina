import {
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Card } from '../components/Card';
import HomePage from '../components/HomePage';
import { User } from '../types/User';

type Props = {
  users: User[];
};

const Directory = ({ users }: Props) => {
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchNumber, setSearchNumber] = useState('');
  return (
    <HomePage>
      <Heading textAlign="center" mb={3}>
        Directory
      </Heading>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={1}
      >
        <GridItem rowSpan={1} colSpan={2}>
          <VStack p={6}>
            <InputGroup>
              <Input
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search by name"
              />
              <InputRightElement>
                <Icon as={AiOutlineSearch} />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input
                onChange={(e) => setSearchEmail(e.target.value)}
                placeholder="Search by email"
              />
              <InputRightElement>
                <Icon as={AiOutlineSearch} />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input
                onChange={(e) => setSearchNumber(e.target.value)}
                placeholder="Search by number"
              />
              <InputRightElement>
                <Icon as={AiOutlineSearch} />
              </InputRightElement>
            </InputGroup>
          </VStack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <UserList
            users={users}
            searchName={searchName}
            searchEmail={searchEmail}
            searchNumber={searchNumber}
          />
        </GridItem>
      </Grid>
    </HomePage>
  );
};

type UserListProps = {
  users: User[];
  searchName: string;
  searchEmail: string;
  searchNumber: string;
};

const UserList = ({
  users,
  searchName,
  searchEmail,
  searchNumber,
}: UserListProps) => {
  return (
    <VStack w="100%">
      {users.map((user: User) => {
        const name = user.firstName + ' ' + user.lastName;
        if (
          name.toLowerCase().includes(searchName.toLowerCase()) &&
          user.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
          user.phoneNumber.toLowerCase().includes(searchNumber.toLowerCase())
        ) {
          return (
            <Card w="100%">
              <Text fontWeight="bold" fontSize="2xl">
                {name}
              </Text>
              <Text>{user.email}</Text>
              <Text>{user.phoneNumber}</Text>
            </Card>
          );
        }
        return <></>;
      })}
    </VStack>
  );
};

export default Directory;
