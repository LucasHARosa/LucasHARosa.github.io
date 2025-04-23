import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  );
}
