import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import reportWebVitals from './reportWebVitals';

import App from "./App";
import rootReducer from './redux/reducers/index';
import { sendAnalyticsToDB } from "./performance/send";

import "./index.css";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(sendAnalyticsToDB);