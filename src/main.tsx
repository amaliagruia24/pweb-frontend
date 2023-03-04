import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageContextProvider } from "@application/context/LanguageContextProvider";
import { BrowserRouter } from "react-router-dom";
import { store } from "@application/store";
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <LanguageContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </LanguageContextProvider>
    </Provider>
  </React.StrictMode>
)
