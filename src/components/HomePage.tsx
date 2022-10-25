import { GridItem } from '@chakra-ui/react';
import React from 'react';
import EZGrid from './EZGrid';
import Sidebar from './Sidebar';

type Props = {
  children: JSX.Element | JSX.Element[];
  [x: string]: any;
};

const HomePage = ({ children }: Props) => {
  return (
    <EZGrid rowUnits={1} colUnits={10} overflow="hidden">
      <GridItem rowSpan={1} colSpan={1}>
        <Sidebar />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={9}
        textAlign="start"
        overflowY="scroll"
        p={6}
      >
        {children}
      </GridItem>
    </EZGrid>
  );
};

export default HomePage;
