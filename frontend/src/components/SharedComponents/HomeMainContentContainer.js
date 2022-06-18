import { Flex, useStyleConfig } from "@chakra-ui/react";

export function HomeMainContentContainer(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("HomeMainContentContainer", { variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Flex __css={styles} {...rest}>
      {props.children}
    </Flex>
  );
}
export default HomeMainContentContainer