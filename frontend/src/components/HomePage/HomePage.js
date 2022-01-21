import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Placeholder Home</h1>
      <Link to="/sign-up">
        <button>Go to sign up</button>
      </Link>
    </div>
  );
};

export default HomePage;
