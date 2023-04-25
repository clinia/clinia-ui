import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { inputTheme, textareaTheme } from "./input";
import { colors } from "./colors";
import { radii } from "./radii";
import { fonts } from "./fonts";

export const theme = extendTheme(
  {
    colors,
    radii,
    fonts,
    components: {
      Input: inputTheme,
      NumberInput: inputTheme,
      Select: inputTheme,
      Textarea: textareaTheme,
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);
