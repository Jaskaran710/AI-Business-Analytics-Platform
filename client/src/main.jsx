import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "react-hot-toast";

import "./index.css";

import App from "./App.jsx";

import {
  AnalyticsProvider
} from "./context/AnalyticsContext";

createRoot(
  document.getElementById("root")
).render(

  <StrictMode>

    <AnalyticsProvider>

      <Toaster
        position="top-right"
      />

      <App />

    </AnalyticsProvider>

  </StrictMode>

);
