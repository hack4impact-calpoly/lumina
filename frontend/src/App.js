import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Signup from "./components/SignupPage/Signup";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/sign-up" element={<Signup/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
