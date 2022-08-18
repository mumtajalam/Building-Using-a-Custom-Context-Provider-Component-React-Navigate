import React, { Component, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Navigate from "./Navigate";
import NoMatch from "./Nomatch";

const App = () => {
  return (
    <div id="main">
      <BrowserRouter>
        <Navigate />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="*" component={NoMatch} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
