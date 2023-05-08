import { ThemeProvider, useTheme } from "@chakra-ui/system";
import * as React from "react";
import { Spinner } from "@clinia-ui/react";

export default {
  title: "Components / Feedback / Spinner",
};

export const basic = () => <Spinner />;

export const color = () => <Spinner color="primary.main" />;

export const size = () => (
  <div>
    {["xl", "lg", "md", "sm", "xs"].map((size) => (
      <Spinner key={size} margin={3} color="primary.main" size={size} />
    ))}
  </div>
);

export const speed = () => <Spinner color="primary.main" speed="0.8s" />;

export const emptyColor = () => (
  <Spinner color="primary.main" emptyColor="primary.100" />
);
