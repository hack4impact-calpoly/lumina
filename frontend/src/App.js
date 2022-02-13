import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import HomePage from "./components/HomePage/HomePage";
import ChangePassword from "./components/ChangePasswordPage/ChangePassword";
import theme from "./theme";
import ForgotPassword_Email from './components/ChangePasswordPage/ForgotPassword_Email';
import ForgotPassword_Code from './components/ChangePasswordPage/ForgotPassword_Code';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword_Email/>} />
            <Route path="/forgot-password/code" element={<ForgotPassword_Code email="email@code.com" />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;