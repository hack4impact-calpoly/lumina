import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';

type Props = {
  children: JSX.Element | JSX.Element[];
  [x: string]: any;
};

const HomePage = ({ children }: Props) => {
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(10, 1fr)"
      gap={4}
      h="100%"
      overflow="hidden"
    >
      <GridItem rowSpan={1} colSpan={1}>
        <Sidebar />
      </GridItem>
      <GridItem rowSpan={1} colSpan={9} textAlign="start" overflowY="scroll" p={6}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default HomePage;
