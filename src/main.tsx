import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { defaultTheme } from "./styles/themes/default";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <App />
        <ToastContainer
          position="bottom-right"
          theme="colored"
          limit={3}
          autoClose={1000}
        />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
