import { HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  fontSize: string;
  text: string;
  onClick: any;
  left?: boolean;
  isLink?: boolean;
  [x: string]: any;
};

function TextIcon({
  icon,
  fontSize,
  text,
  onClick,
  left,
  isLink,
  ...rest
}: Props) {
  const getText = () => {
    if (isLink) {
      return <Text fontSize={fontSize}>{text}</Text>;
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
}

TextIcon.defaultProps = {
  left: false,
  isLink: false,
};

export default TextIcon;
