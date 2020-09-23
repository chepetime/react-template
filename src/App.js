import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Routes from "./Routes";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <Navigation />
          <div className="Canvas">
            <Helmet>
              <title>King Tide</title>
            </Helmet>
            <Switch>
              <Routes />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}
