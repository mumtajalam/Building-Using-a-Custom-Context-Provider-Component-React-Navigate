import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Navigate from "./Navigate";

class App extends Component {
  render() {
    return (
      <div id="main">
        <BrowserRouter>
          <Navigate />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
