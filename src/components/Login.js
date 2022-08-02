import React, { useState } from "react";
import axios from 'axios'

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  userUrl = 'https://fakestoreapi.com/auth/login';
  const userHandler = () => {
    axios(
        
    )
  }

  return (
    <div className="login">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small>eror placeholder</small>
        <button>Login</button>
      </div>
    </div>
  );
}
export default Login;
