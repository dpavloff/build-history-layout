import "./styles/App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Router from "./router";
import Footer from "./components/Footer";
import { fetchMetricsFromApi } from "./redux/actions/settingsActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMetricsFromApi());
  }, [dispatch]);
  return (
    <div className="main">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
