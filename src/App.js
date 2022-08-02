import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Item from "./components/Item";
import Items from "./components/Items";
import Login from "./components/Login";

function App() {

  const [tokens, setTokens] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <div className="root">
      <Navbar />
      
      <Router>
        <Routes>
          <Route exact path="/" element={tokens ? <Home /> : <Login tokens={tokens} setTokens={setTokens} />} />
          <Route path="/item/id:" element={<Item />} />
          <Route>404 Error Page</Route>
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
