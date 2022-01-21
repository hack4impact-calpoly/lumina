import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
      </div>
      <Link to="/">
        <button>Go back to home</button>
      </Link>
    </div>
  );
};

export default Signup;
