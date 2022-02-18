import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import HomePage from "./components/HomePage/HomePage";
import Home from "./components/Home/Home";
import ChangePassword from "./components/ChangePasswordPage/ChangePassword";
import theme from "./theme";
import ForgotPassword_Email from './components/ChangePasswordPage/ForgotPassword_Email';
import ForgotPassword_Code from './components/ChangePasswordPage/ForgotPassword_Code';
import Directory from "./components/Home/Directory";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg='#F6F6F6' h="100vh">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/placeholder" element={<HomePage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword_Email/>} />
            <Route path="/forgot-password/code" element={<ForgotPassword_Code/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/mobile-directory" element={<Directory />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;