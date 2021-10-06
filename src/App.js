import "./styles/App.css";
import React from "react";

import Router from "./router";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <div className="content">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
