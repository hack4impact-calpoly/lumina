import { GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import DirectorySearch from '../components/DirectorySearch';
import HomePage from '../components/HomePage';
import { useUsers } from '../components/HomeWrapper';
import UserList from '../components/UserList';

function Directory() {
  const users = useUsers();
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchNumber, setSearchNumber] = useState('');
  const [searchType, setSearchType] = useState('all');
  return (
    <HomePage>
      <Heading textAlign="center" mb={3}>
        Directory
      </Heading>
      <SimpleGrid columns={5} mb={3}>
        <GridItem rowSpan={1} colSpan={2} mr={1}>
          <DirectorySearch
            name={setSearchName}
            email={setSearchEmail}
            number={setSearchNumber}
            typeChange={setSearchType}
            type={searchType}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <UserList
            users={users}
            searchName={searchName}
            searchEmail={searchEmail}
            searchNumber={searchNumber}
            searchType={searchType}
          />
        </GridItem>
      </SimpleGrid>
    </HomePage>
  );
}

export default Directory;
