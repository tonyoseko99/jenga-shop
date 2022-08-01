import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Item from "./components/Item";
import Items from "./components/Items";
function App() {
  return (
    <div className="root">
      <Navbar />
      
      <Footer />
      
    </div>
  );
}

export default App;