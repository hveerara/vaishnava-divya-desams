import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
root.render(
  <React.StrictMode>
    <ScrollToTop />
    <App />
  </React.StrictMode>
);
