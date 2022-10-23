import { HStack, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  fontSize: string;
  text: string;
  onClick?: any;
  left?: boolean;
  isLink?: boolean;
  [x: string]: any;
};

const TextIcon = ({
  icon,
  fontSize,
  text,
  onClick,
  left,
  isLink,
  ...rest
}: Props) => {
  const getText = () => {
    if (isLink) {
      return (
        <Link>
          <Text fontSize={fontSize}>{text}</Text>
        </Link>
      );
    }
    return <Text fontSize={fontSize}>{text}</Text>;
  };

  if (left) {
    return (
      <HStack tabIndex={0} cursor="pointer" onClick={onClick} {...rest}>
        <Icon as={icon} fontSize={fontSize} pt={1} />
        {getText()}
      </HStack>
    );
  }
  return (
    <HStack tabIndex={0} cursor="pointer" onClick={onClick} {...rest}>
      {getText()}
      <Icon as={icon} fontSize={fontSize} pt={1} />
    </HStack>
  );
};

export default TextIcon;
