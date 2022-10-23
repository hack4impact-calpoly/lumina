import { Grid, GridItem, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import DirectorySearch from '../components/DirectorySearch';
import HomePage from '../components/HomePage';
import { useUsers } from '../components/HomeWrapper';
import UserList from '../components/UserList';

const Directory = () => {
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
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={1} colSpan={2}>
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
      </Grid>
    </HomePage>
  );
};

export default Directory;
