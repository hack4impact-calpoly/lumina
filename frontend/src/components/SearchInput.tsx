import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type SearchInputProps = {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};
function SearchInput({ onChange, placeholder }: SearchInputProps) {
  return (
    <InputGroup>
      <Input
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <InputRightElement>
        <Icon as={AiOutlineSearch} />
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchInput;
