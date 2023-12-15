import { DefaultTheme } from "@/common/styles";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const theme = extendTheme({
  breakpoints: DefaultTheme.breakpoints,
  colors: DefaultTheme.colors,
  components: DefaultTheme.components,
  styles: {
    global: DefaultTheme.styles.global,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
