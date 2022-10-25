import { Grid } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children?: JSX.Element | JSX.Element[] | string;
  colUnits: number;
  rowUnits: number;
  gap?: number;
  [x: string]: any;
};

const EZGrid = ({ children, colUnits, rowUnits, gap, ...rest }: Props) => {
  return (
    <Grid
      templateRows={`repeat(${rowUnits}, 1fr)`}
      templateColumns={`repeat(${colUnits}, 1fr)`}
      gap={gap ? gap : 1}
      h="100%"
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default EZGrid;
