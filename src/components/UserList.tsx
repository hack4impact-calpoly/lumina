import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { User } from '../types/User';
import { Card } from './Card';

type UserListProps = {
  users: User[];
  searchName: string;
  searchEmail: string;
  searchNumber: string;
  searchType: string;
};

const UserList = ({
  users,
  searchName,
  searchEmail,
  searchNumber,
  searchType,
}: UserListProps) => {
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
        const name = user.firstName + ' ' + user.lastName;
        if (
          name.toLowerCase().includes(searchName.toLowerCase()) &&
          user.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
          user.phoneNumber.toLowerCase().includes(searchNumber.toLowerCase()) &&
          filterType(user)
        ) {
          return (
            <Card w="100%">
              <Text
                fontWeight="bold"
                fontSize="2xl"
                color={user.admin ? 'red' : 'white'}
              >
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

export default UserList;
