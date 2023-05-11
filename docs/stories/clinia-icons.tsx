import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import * as Icons from "@clinia-ui/icons/index";
import { theme } from "@clinia-ui/theme";

import {
  Button,
  Card,
  CardBody,
  Center,
  Stack,
  Text,
  Tooltip,
} from "@clinia-ui/react";
import { PropsWithChildren, useState } from "react";

type IconDecoratorProps = PropsWithChildren<{
  name: string;
}>;

const IconDecorator = ({ name, children }: IconDecoratorProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip isOpen={open} label={`'${name}' copied to clipboard`}>
      <Button
        height="fit-content"
        variant="unstyled"
        onClick={() => {
          navigator.clipboard.writeText(name);
          setOpen(true);
          setTimeout(() => setOpen(false), 2000);
        }}
      >
        <Card align="center" width={170}>
          <CardBody>
            <Stack>
              <Center>{children}</Center>
              <Text fontSize="xs">{name}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Button>
    </Tooltip>
  );
};

const icons = Object.entries(Icons).map(([name, Icon]) => (
  <Icon color="primary.main" boxSize="2em" />
));

export default () => (
  <ChakraProvider theme={theme}>
    <SimpleGrid spacing={3} columns={5}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <IconDecorator name={name}>
          <Icon color="primary.main" boxSize="2em" />
        </IconDecorator>
      ))}
    </SimpleGrid>
  </ChakraProvider>
);
