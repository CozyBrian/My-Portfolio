import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import smoothscroll from "smoothscroll-polyfill";

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
