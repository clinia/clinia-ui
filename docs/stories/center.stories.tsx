import * as React from "react";
import { Box, Center, PhoneIcon } from "@clinia-ui/react";

export default {
  title: "Components / Layout / Center",
};

export const basic = () => (
  <Center bg="#da3d6929" w="400px" h="400px">
    <Box p="40px" bg="primary.main">
      Box
    </Box>
  </Center>
);

export const iconWithFrame = () => (
  <Center bg="primary.main" color="white" boxSize="40px" borderRadius="full">
    <PhoneIcon />
  </Center>
);
