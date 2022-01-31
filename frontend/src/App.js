import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "./App.css";
import Signup from "./components/SignupPage/Signup";
import HomePage from "./components/HomePage/HomePage";
import AccountCreated from "./components/SignupPage/AccountCreated";
import theme from "./theme";

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
            <Route path="/account-created" element={<AccountCreated />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
