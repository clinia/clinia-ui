// TODO : INPUT FOCUS BORDER

import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";
import { checkboxTheme } from "./checkbox";
import { inputTheme } from "./input";

// TODO : Gray
// TODO : Border radius
// TODO : Border width

export const theme = extendTheme({
  // TODO : Undo, testing purposes
  colors: {
    primary: {
      500: "#35c7f3",
      600: "#35c7f3",
    },
    red: {
      100: "#F5C9C9",
      500: "#d62828",
    },
    green: {
      50: "#ff69b4", //"#E4F9F0",
      100: "#ff69b4", //"#C8F3E1",
      500: "#ff69b4", //"#25d087",
    },
    blue: {
      100: "#ff69b4", //"#B3EAFA",
      500: "#ff69b4", //"#35c7f3",
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
    mono: "SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace",
  },
  components: {
    Button: buttonTheme,
    Checkbox: checkboxTheme,
    Input: inputTheme,
  },
});
