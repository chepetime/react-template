import React from "react";

import { Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function Routes(props) {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </>
  );
}

export default Routes;
