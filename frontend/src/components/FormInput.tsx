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

function FormInput({ isRequired, label, type, onChange }: FormInputProps) {
  const [show, setShow] = useState<boolean>(false);

  const input = () => {
    if (type === 'password') {
      return (
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            borderColor="#C1C1C1"
            bg="#F6F5F5"
            onChange={(e) => onChange(e.target.value)}
          />
          <InputRightElement>
            <button
              type="button"
              style={{
                background: 'clear',
                width: '100%',
                height: '100%',
              }}
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
      return (
        <Input
          type={type}
          bg="#F6F5F5"
          borderColor="#C1C1C1"
          onChange={(e) => onChange(e.target.value)}
        />
      );
    return <Input type={type} bg="#F6F5F5" borderColor="#C1C1C1" />;
  };
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel style={{ fontSize: '15px' }}>{label}</FormLabel>
      {input()}
    </FormControl>
  );
}

FormInput.defaultProps = {
  isRequired: false,
};

export default FormInput;
