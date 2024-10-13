import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

export const inputTheme = defineMultiStyleConfig({
  baseStyle: {
    field: {
      fontSize: ["14px", "18px"],
      _placeholder: {
        color: "#A3A3A8",
      },
    },
  },
  variants: {
    outline: {
      field: {
        borderRadius: "8px",
      },
    },
  },
});
