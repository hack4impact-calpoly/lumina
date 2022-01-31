import { Box, useStyleConfig } from "@chakra-ui/react";

export function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {props.children}
    </Box>
  );
}
