import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/SignupPage/Signup";
import HomePage from "./components/HomePage/HomePage";
import theme from "./theme";
import ForgotPassword_Email from './ForgotPassword_Email';
import ForgotPassword_Code from './ForgotPassword_Code';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        mt={5}
        mb={5}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword_Email/>} />
            <Route path="/forgot-password/code" element={<ForgotPassword_Code email="email@code.com" />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
