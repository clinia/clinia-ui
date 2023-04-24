import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const outline = definePartsStyle({
  field: {
    _invalid: {
      boxShadow: "none",
    },
    _focusVisible: {
      borderColor: "primary.500",
      boxShadow: "none",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: {
    outline,
  },
});
