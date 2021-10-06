import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Settings, Builds } from "./pages";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <div className="content">
        <Router>
          <Switch>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/builds">
              <Builds />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
