import { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import Home from "./components/Home/Home";
import ChangePassword from "./components/ChangePasswordPage/ChangePassword";
import theme from "./theme";
import ForgotPassword_Email from './components/ChangePasswordPage/ForgotPassword_Email';
import ForgotPassword_Code from './components/ChangePasswordPage/ForgotPassword_Code';
import Directory from "./components/Home/Directory";
import NotFound from "./components/NotFound/NotFound";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  const [contactList, setContactList] = useState([
    {
      name: "Lenna Hane",
      phone: "(805) 555-5555",
    },
    {
      name: "Bernita Collier",
      phone: "(805) 555-5555",
    },
    {
      name: "Eliane Schneider",
      phone: "(805) 555-5555",
    },
    {
      name: "Emmalee Stark",
      phone: "(805) 555-5555",
    },
    {
      name: "Adriel Bogan",
      phone: "(805) 555-5555",
    },
    {
      name: "Vergie Marquardt",
      phone: "(805) 555-5555",
    },
    {
      name: "Jerrod Gutkowski",
      phone: "(805) 555-5555",
    },
    {
      name: "Chaim Jones",
      phone: "(805) 555-5555",
    },
    {
      name: "Erling Mayert",
      phone: "(805) 555-5555",
    },
    {
      name: "Howell Torphy",
      phone: "(805) 555-5555",
    },
    {
      name: "Sylvester Bednar",
      phone: "(805) 555-5555",
    },
    {
      name: "Griffin Little",
      phone: "(805) 555-5555",
    },
    {
      name: "Rhett Fritsch",
      phone: "(805) 555-5555",
    },
    {
      name: "Ara Halvorson",
      phone: "(805) 555-5555",
    },
    {
      name: "Murphy Jacobson",
      phone: "(805) 555-5555",
    },
    {
      name: "Arianna Jewess",
      phone: "(805) 555-5555",
    },
    {
      name: "Kristy Kuhlman",
      phone: "(805) 555-5555",
    },
    {
      name: "Karli Frami",
      phone: "(805) 555-5555",
    },
    {
      name: "Mina Carroll",
      phone: "(805) 555-5555",
    },
    {
      name: "Jennifer Ziemann",
      phone: "(805) 555-5555",
    },
    {
      name: "Nikki Murray",
      phone: "(805) 555-5555",
    },
    {
      name: "Kelsi Cronin",
      phone: "(805) 555-5555",
    },
    {
      name: "Clifford Feeney",
      phone: "(805) 555-5555",
    },
    {
      name: "Rowland Cormier",
      phone: "(805) 555-5555",
    },
  ]);
  return (
    <ChakraProvider theme={theme}>
      <Box bg='#F6F6F6' minH="100vh">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword_Email/>} />
            <Route path="/forgot-password/code" element={<ForgotPassword_Code/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/dashboard" element={<Home />} />
            <Route path="/home/calendar" element={<Home />} />
            <Route path="/home/directory" element={<Home />} />
            <Route path="/home/profile" element={<Home />} />
            <Route path="/mobile-directory" element={<Directory />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App
