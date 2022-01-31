import { Box, useStyleConfig } from "@chakra-ui/react";

export function CenterBox(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("CenterBox", { variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {props.children}
    </Box>
  );
}