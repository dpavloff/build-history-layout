import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './store';

store.dispatch({ type: "INIT" });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
