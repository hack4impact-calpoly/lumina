import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/SignupPage/Signup";
import HomePage from "./components/HomePage/HomePage";
import Home from "./components/Home/Home";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box mt={5}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
