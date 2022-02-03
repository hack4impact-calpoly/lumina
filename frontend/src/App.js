import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/login';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Login />
      </div>
    </ChakraProvider>
  );
}

export default App;
