import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

const container = document.getElementById("app");
createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
