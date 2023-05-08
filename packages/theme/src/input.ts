import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const noBoxShadow = {
  _invalid: {
    boxShadow: "none",
  },
  _focusVisible: {
    borderColor: "primary.main",
    boxShadow: "none",
  },
};

const smallBorderWidth = {
  _invalid: {
    borderWidth: "1px",
  },
  _focusVisible: {
    borderWidth: "1px",
    borderColor: "primary.main",
  },
};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

export const inputTheme = defineMultiStyleConfig({
  variants: {
    outline: definePartsStyle({
      field: noBoxShadow,
    }),
    filled: definePartsStyle({
      field: smallBorderWidth,
    }),
    flushed: definePartsStyle({
      field: noBoxShadow,
    }),
  },
});

export const textareaTheme = defineStyleConfig({
  variants: {
    outline: defineStyle(noBoxShadow),
    filled: defineStyle(smallBorderWidth),
    flushed: defineStyle(noBoxShadow),
  },
});
