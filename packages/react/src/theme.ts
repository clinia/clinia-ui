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
