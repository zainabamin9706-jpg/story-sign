import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { AppContextProvider } from "./hooks/context/provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <Notifications />
    <AppContextProvider>
      {" "}
      <App />
    </AppContextProvider>
  </MantineProvider>,
);
