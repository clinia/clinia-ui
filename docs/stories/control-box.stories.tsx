import * as React from "react";
import { chakra } from "@chakra-ui/system";
import { ControlBox, CheckIcon, VisuallyHidden } from "@clinia-ui/react";

export default {
  title: "Components / Forms / Control Box",
};

const Box = chakra.div;

export const Checkbox = (props: any) => {
  return (
    <Box as="label" display="flex" alignItems="center" cursor="pointer">
      <VisuallyHidden type="checkbox" as="input" {...props} />
      <ControlBox
        w="16px"
        h="16px"
        bg="white"
        border="2px"
        rounded="md"
        color="white"
        borderColor="inherit"
        _focus={{ boxShadow: "outline" }}
        _hover={{ borderColor: "gray.300" }}
        _disabled={{ opacity: 0.4 }}
        _checked={{ bg: "primary.main", borderColor: "primary.main" }}
      >
        <CheckIcon w="0.64em" h="0.64em" />
      </ControlBox>
      <Box as="span" ml={2} verticalAlign="center" userSelect="none">
        This is a Checkbox
      </Box>
    </Box>
  );
};

export const Radio = (props: any) => {
  return (
    <Box as="label" display="flex" alignItems="center" cursor="pointer">
      <VisuallyHidden type="radio" as="input" {...props} />
      <ControlBox
        w="16px"
        h="16px"
        bg="white"
        border="2px"
        rounded="full"
        type="radio"
        borderColor="inherit"
        _focus={{ boxShadow: "outline" }}
        _hover={{ borderColor: "gray.300" }}
        _disabled={{ opacity: 0.4 }}
        _checked={{ bg: "primary.main", borderColor: "primary.main" }}
      >
        <Box w="8px" h="8px" bg="white" rounded="full" />
      </ControlBox>
      <Box as="span" ml={2} verticalAlign="center" userSelect="none">
        This is a Radio
      </Box>
    </Box>
  );
};

export const Combined = () => (
  <Box maxWidth="md" mx="auto" mt={9}>
    <Checkbox />
    <br />
    <Radio name="id" />
    <Radio name="id" />
  </Box>
);
