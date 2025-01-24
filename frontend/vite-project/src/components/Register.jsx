

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleAvatarUpload = (e) => {
    setAvatar(e.target.files[0]);
  };



const handleRegister = () => {
    const formData = new FormData();
    formData.append("userId", uuidv4());
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) formData.append("avatar", avatar);
  
    console.log("Form Data:", Object.fromEntries(formData)); // Debugging form data
  
    axios
      .post("http://localhost:5000/api/auth/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Registration successful!");
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Registration error:", error.response ? error.response.data : error.message);
        alert("Failed to register. Please try again.");
      });
  };
  

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
        />
        <button onClick={handleRegister}>Register</button>
        <p>
          Already have an account? <span onClick={() => navigate("/signin")}>Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Register;