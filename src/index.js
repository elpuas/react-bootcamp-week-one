import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import App from "./App";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Header />,
    <App />,
    <Footer />
  </div>,
  rootElement
);
