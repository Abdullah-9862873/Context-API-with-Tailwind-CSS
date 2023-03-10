import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>
);
reportWebVitals();
