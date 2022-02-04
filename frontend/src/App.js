import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/SignupPage/Signup";
import HomePage from "./components/HomePage/HomePage";
import Home from "./components/Home/Home";
import theme from "./theme";
import Directory from "./components/Home/Directory";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mobile-directory" element={<Directory />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
