import React from "react";
import ReactDOM from "react-dom/client";
import { FidyahTheme } from "@fidyah/theme/index";
import { Store } from "./context";
import App from "./App.jsx";
import "./lib/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Store>
      <FidyahTheme>
        <App />
      </FidyahTheme>
    </Store>
  </React.StrictMode>
);
