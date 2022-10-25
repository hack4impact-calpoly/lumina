import {
  Card,
  CardBody,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { User } from '../types';

type UserListProps = {
  users: User[];
  searchName: string;
  searchEmail: string;
  searchNumber: string;
  searchType: string;
};

function UserList({
  users,
  searchName,
  searchEmail,
  searchNumber,
  searchType,
}: UserListProps) {
  const filterType = (user: User): boolean => {
    if (searchType !== 'all') {
      if (searchType === 'admin') {
        return user.admin;
      }
      return !user.admin;
    }
    return true;
  };

  return (
    <VStack w="100%">
      {users.map((user: User) => {
        const name = `${user.firstName} ${user.lastName}`;
        if (
          name.toLowerCase().includes(searchName.toLowerCase()) &&
          user.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
          user.phoneNumber.toLowerCase().includes(searchNumber.toLowerCase()) &&
          filterType(user)
        ) {
          return (
            <Card variant="elevated" w="100%">
              <CardBody>
                <Text
                  fontWeight="bold"
                  fontSize="2xl"
                  color={
                    user.admin
                      ? useColorModeValue('red', 'red.500')
                      : useColorModeValue('black', 'white')
                  }
                >
                  {name}
                </Text>
                <Text>{user.email}</Text>
                <Text>{user.phoneNumber}</Text>
              </CardBody>
            </Card>
          );
        }
        return null;
      })}
    </VStack>
  );
}

export default UserList;
