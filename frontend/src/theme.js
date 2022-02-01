import { extendTheme } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

const Card = {
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'smooth',
  },
};

const CenterBox ={
  baseStyle : {
    w: isMobile ? "95%" : "900px",
  }
}

const Button = {
  variants: {
    animated: {
      _hover: {
        transform: "translateY(-2px)",
        boxShadow: "lg",
      },
    },
  },
};

const theme = extendTheme({
  components: {
    Card,
    CenterBox,
    Button,
  },
});

export default theme;
