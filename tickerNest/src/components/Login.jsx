import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./styles/Login.css";
import logo from "../assets/logo.png"; // at the top of the file


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-wrapper">
        
      <div className="login-box">
        <div className="logo-wrapper">
        <img src={logo} alt="TickerNest Logo" className="login-logo" />
    </div>
        <h2>Welcome Back</h2>
        <p className="subtitle">Log in to your Ticker Nest account</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          {error && <p className="error">{error}</p>}
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Don’t have an account? <a href="/signup" style={{ color: "#22c55e", fontWeight: "bold" }}>Sign Up</a>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

