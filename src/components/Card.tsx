import { Flex, useColorModeValue, useStyleConfig } from '@chakra-ui/react';

// Generic Card component, essentially a box with an undershadow
// Accepted props:
// All props that <Box> accepts, <Card> also accepts (i.e. 'mt', 'w', 'h', etc.)
type Props = {
  children?: JSX.Element | JSX.Element[] | string;
  [x: string]: any;
};
export function Card({ children, ...rest }: Props) {
  const styles = useStyleConfig('Card');

  // Pass the computed styles into the `__css` prop
  return (
    <Flex
      __css={styles}
      {...rest}
      background={useColorModeValue('white', 'whiteAlpha.50')}
    >
      {children}
    </Flex>
  );
}
