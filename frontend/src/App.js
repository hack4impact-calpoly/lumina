import logo from './logo.svg';
import { ChakraProvider, Box } from "@chakra-ui/react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword_Email from './ForgotPassword_Email';
import ForgotPassword_Code from './ForgotPassword_Code';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword_Email/>} />
          <Route path="/forgot-password/code" element={<ForgotPassword_Code email="email@code.com" />} />
        </Routes>
      </Router>
    </ChakraProvider>
    
  );
}

export default App;
