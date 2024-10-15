import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { inputTheme } from "./components/Input";

const config: ThemeConfig = {
  useSystemColorMode: false,
};

export const chakraTheme: ThemeConfig = extendTheme({
  config,
  global: {
    body: {
      fontSize: {
        base: `16px`,
        sm: `14px`,
        md: `16px`,
        lg: `18px`,
        xl: `22px`,
      },
    },
  },
  fonts: {
    body: "'Poppins', sans-serif",
  },
  colors: {
    gray: {
      50: `rgba(247, 247, 248, 1)`,
      75: `rgba(227, 226, 226, 1)`,
      100: `rgba(218, 218, 218, 1)`,
      200: `rgba(215, 215, 215, 1)`,
      300: `rgba(204, 204, 204, 1)`,
      400: `rgba(194, 195, 203, 1)`,
      450: `rgba(160, 160, 165, 1)`,
      500: `rgba(142, 146, 149, 1)`,
      600: `rgba(117, 116, 116, 1)`,
      700: `rgba(102, 102, 102, 1)`,
      800: `rgba(73, 73, 73, 1)`,
      850: `rgba(43, 45, 48, 1)`,
      900: `rgba(32, 34, 35, 1)`,
      925: `rgba(27, 30, 32, 1)`,
      950: `rgba(21, 22, 23, 1)`,

      "950/10": `rgba(20, 23, 24, 0.1)`,
    },
    black: `rgba(33, 33, 33, 1)`,
  },
  components: {
    Input: inputTheme,
  },
});
