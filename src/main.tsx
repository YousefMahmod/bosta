import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";
import i18n from "./i18n.ts";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>
);
