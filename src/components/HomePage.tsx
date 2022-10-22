import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const HomePage = ({ children }: Props) => {
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      h="100%"
    >
      <GridItem rowSpan={1} colSpan={1}>
        <Sidebar />
      </GridItem>
      <GridItem rowSpan={1} colSpan={4}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default HomePage;
