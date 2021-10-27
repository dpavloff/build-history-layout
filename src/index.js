import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import App from "./App";
import { store } from './redux/store';
import { sendAnalyticsToDB } from "./performance/send";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(sendAnalyticsToDB);