import { Tag } from '@chakra-ui/react';
import React from 'react';
import { MessageType } from '../types';

type Props = {
  text: string;
  color: string;
  val: MessageType | null;
  targetVal: MessageType | null;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
};

const SelectTag = ({ text, color, val, targetVal, onClick }: Props) => {
  return (
    <Tag
      colorScheme={color}
      borderWidth={val === targetVal ? '3px' : '0px'}
      onClick={onClick}
      cursor="pointer"
    >
      {text}
    </Tag>
  );
};

export default SelectTag;
