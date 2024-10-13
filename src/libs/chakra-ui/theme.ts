import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { inputTheme } from "./components/Input";

const config: ThemeConfig = {
  useSystemColorMode: false,
};

export const chakraTheme: ThemeConfig = extendTheme({
  config,
  fonts: {
    body: "'Poppins', sans-serif",
  },
  colors: {
    background: {
      light: "#F7F8FA",
      dark: "#141718",
    },
  },
  components: {
    Input: inputTheme,
  },
});
