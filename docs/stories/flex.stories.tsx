import * as React from "react";
import { Box, Flex } from "@clinia-ui/react";

export default {
  title: "Components / Layout / Flex",
};

export const Vertical = () => (
  <Flex gap={4} direction="column">
    <span>ooooooo</span>
    <span>ahhhhh</span>
    <span>Woah!</span>
  </Flex>
);

export const Horizontal = () => (
  <Flex gap={4}>
    <span>ooooooo</span>
    <span>ahhhhh</span>
    <span>Woah!</span>
  </Flex>
);

export const VerticalWithMargin = () => (
  <Flex gap={4} direction="column">
    <Box boxSize="40px" bg="primary.main" borderRadius="full" />
    <Box boxSize="40px" bg="primary.main" borderRadius="full" />
    <Box boxSize="40px" bg="primary.main" borderRadius="full" mt={4} />
  </Flex>
);
