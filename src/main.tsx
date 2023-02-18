import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

import "react-toastify/dist/ReactToastify.css";
import { AppThemeProvider } from "./hooks/context/theme/useAppTheme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <App />
        <ToastContainer
          position="bottom-right"
          theme="colored"
          limit={3}
          autoClose={1000}
        />
      </AppThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
