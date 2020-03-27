import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./Header";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Header />,
    <App />
  </div>,
  rootElement
);
