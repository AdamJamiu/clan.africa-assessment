import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./providers/GlobalStateContext";
import { PriceProvider } from "./providers/PriceControl";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PriceProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </PriceProvider>
);
