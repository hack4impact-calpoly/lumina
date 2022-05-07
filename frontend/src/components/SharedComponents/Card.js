import { Flex, useStyleConfig } from '@chakra-ui/react'

// Generic Card component, essentially a box with an undershadow
// Accepted props:
// All props that <Box> accepts, <Card> also accepts (i.e. 'mt', 'w', 'h', etc.)

export function Card(props) {
    const { variant, children, ...rest } = props

    const styles = useStyleConfig('Card', { variant })

  // Pass the computed styles into the `__css` prop
  return (
    <Flex __css={styles} {...rest}>
      {props.children}
    </Flex>
  );
}
