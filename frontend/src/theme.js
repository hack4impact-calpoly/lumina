import { extendTheme } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

const Card = {
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
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

const CenterBox = {
  baseStyle: {
    w: isMobile ? '95%' : '900px',
  },
};

const Button = {
  variants: {
    animated: {
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      },
    },
    primary: {
      bgColor: 'blue.200',
    },
  },
};

const theme = extendTheme({
  components: {
    Card,
    CenterBox,
    Button,
  },
  textStyles: {
    t1: {
      fontSize: '10px',
      fontWeight: 'semibold',
      color: 'black',
    },
    t2: {
      fontSize: '24px',
      color: 'red',
    },
    t3: {
      fontSize: '16px',
      color: 'orange',
    },
  },
});

export default theme;
