import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

type FormInputProps = {
  isRequired?: boolean;
  label: string;
  type: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const FormInput = ({ isRequired, label, type, onChange }: FormInputProps) => {
  const [show, setShow] = useState<boolean>(false);

  const input = () => {
    if (type === 'password') {
      return (
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            onChange={(e) => onChange(e.target.value)}
          />
          <InputRightElement>
            <button
              style={{ background: 'clear', width: '100%', height: '100%' }}
              onClick={() => setShow(!show)}
            >
              <Icon
                cursor="pointer"
                as={show ? AiOutlineEye : AiOutlineEyeInvisible}
              />
            </button>
          </InputRightElement>
        </InputGroup>
      );
    }
    if (onChange !== undefined)
      return <Input type={type} onChange={(e) => onChange(e.target.value)} />;
    return <Input type={type} />;
  };
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      {input()}
    </FormControl>
  );
};

export default FormInput;
