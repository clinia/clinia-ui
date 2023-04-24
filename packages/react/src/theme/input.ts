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
      borderColor: "primary.main",
      boxShadow: "none",
    },
  },
});

const filled = definePartsStyle({
  field: {
    _invalid: {
      borderWidth: "1px",
    },
    _focusVisible: {
      borderWidth: "1px",
      borderColor: "primary.main",
    },
  },
});

const flushed = definePartsStyle({
  field: {
    _invalid: {
      boxShadow: "none",
    },
    _focusVisible: {
      borderColor: "primary.main",
      boxShadow: "none",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: {
    outline,
    filled,
    flushed,
  },
});
