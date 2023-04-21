import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const buttonTheme = defineStyleConfig({
  defaultProps: {
    colorScheme: "primary",
  },
});

export const theme = extendTheme({
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
      100: "#C8F3E1",
      500: "#25d087",
    },
    blue: {
      100: "#B3EAFA",
      500: "#35c7f3",
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
    mono: "SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace",
  },
  components: {
    Button: buttonTheme,
  },
});
