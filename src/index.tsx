import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import store from "store";
import NotificationsProvider from "providers/notifications";
import LoadingProvider from "providers/loading";
import ErrorProvider from "providers/error";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <NotificationsProvider />
        <LoadingProvider />
        <ErrorProvider />

        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
