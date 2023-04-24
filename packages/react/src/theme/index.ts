// TODO : INPUT FOCUS BORDER

import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { inputTheme } from "./input";
import { colors } from "./colors";

// TODO : Gray
// TODO : Border radius
// TODO : Border width

export const theme = extendTheme(
  {
    // TODO : Undo, testing purposes
    colors,
    fonts: {
      body: "Montserrat, sans-serif",
      heading: "Montserrat, sans-serif",
      mono: "SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace",
    },
    components: {
      Input: inputTheme,
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);
