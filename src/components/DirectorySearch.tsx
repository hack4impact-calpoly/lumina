import { HStack, Radio, RadioGroup, VStack } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';

type SearchProps = {
  name: React.Dispatch<React.SetStateAction<string>>;
  email: React.Dispatch<React.SetStateAction<string>>;
  number: React.Dispatch<React.SetStateAction<string>>;
  typeChange: React.Dispatch<React.SetStateAction<string>>;
  type: string;
};

const DirectorySearch = ({
  name,
  email,
  number,
  typeChange,
  type,
}: SearchProps) => {
  return (
    <VStack>
      <SearchInput onChange={name} placeholder="Search by name" />
      <SearchInput onChange={email} placeholder="Search by email" />
      <SearchInput onChange={number} placeholder="Search by number" />
      <RadioGroup onChange={typeChange} value={type}>
        <HStack>
          <Radio value="all">All</Radio>
          <Radio value="volunteers">Volunteers</Radio>
          <Radio value="admin">Admin</Radio>
        </HStack>
      </RadioGroup>
    </VStack>
  );
};

export default DirectorySearch;
