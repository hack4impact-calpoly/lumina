import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Signup from "./components/SignupPage/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign-up" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
