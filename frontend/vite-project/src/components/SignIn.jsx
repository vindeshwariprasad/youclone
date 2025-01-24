
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    axios
      .post("http://localhost:5000/api/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch(() => alert("Invalid credentials"));
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign In</button>
        <p>
          Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
