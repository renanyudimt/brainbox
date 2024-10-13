import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { chakraTheme } from "./libs/chakra-ui/theme";
import { AppRoutes } from "./routes";
import "./styles/embla/base.css";
import "./styles/embla/embla.css";

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <ColorModeScript initialColorMode="light" />
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
