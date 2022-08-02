import React, { useState } from "react";
import axios from 'axios'

function Login({token, setToken}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userHandler = () => {
    setError("");
    setPassword("");
    setUserName("");
    axios({
        url:'https://fakestoreapi.com/auth/login',
        method: "POST",
        data: {
            username: userName,
            password: password,
        },
    }).then(response => {
        console.log(response.data.token);
        setToken(response.data.token);
        localStorage.setItem("userToken", response.data.token);
    }).catch((err) => {
        console.log(err.response)
        setError(err.response.data);
    });
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
        {setError && <small>{error}</small>}
        <button onClick={userHandler}>Login</button>
      </div>
    </div>
  );
}
export default Login;
