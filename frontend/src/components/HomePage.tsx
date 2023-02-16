import { GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';

type Props = {
  children: JSX.Element | JSX.Element[];
  [x: string]: any;
};

function HomePage({ children }: Props) {
  return (
    <SimpleGrid columns={100} overflowY="hidden" h="100vh">
      <GridItem colSpan={15}>
        <Sidebar />
      </GridItem>
      <GridItem colSpan={85} textAlign="start" overflowY="scroll" p={6}>
        {children}
      </GridItem>
    </SimpleGrid>
  );
}

export default HomePage;
