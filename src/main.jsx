import React from "react";
import ReactDOM from "react-dom/client";
import { FidyahTheme } from "@fidyah/theme/index";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FidyahTheme>
      <App />
    </FidyahTheme>
  </React.StrictMode>
);
