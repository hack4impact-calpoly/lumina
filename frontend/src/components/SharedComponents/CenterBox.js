import { Box, Center, useStyleConfig } from "@chakra-ui/react";

export function CenterBox(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("CenterBox", { variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Center>
      <Box __css={styles} {...rest}>
        {props.children}
      </Box>
    </Center>
  );
}