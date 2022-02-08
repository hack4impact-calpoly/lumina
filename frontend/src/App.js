import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
=======
import Login from "./components/LoginPage/Login";
>>>>>>> issue4
import Signup from "./components/SignupPage/Signup";
import HomePage from "./components/HomePage/HomePage";
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
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;