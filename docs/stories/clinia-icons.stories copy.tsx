import * as Icons from "@clinia-ui/icons/index";
import {
  Button,
  Card,
  CardBody,
  Center,
  Stack,
  Text,
  Tooltip,
} from "@clinia-ui/react";
import { Meta } from "@storybook/react";
import { useState } from "react";

type IconStory = () => [string, JSX.Element];

const IconDecorator = ({ story }: { story: IconStory }) => {
  const [name, component] = story();
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
              <Center>{component}</Center>
              <Text fontSize="xs">{name}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Button>
    </Tooltip>
  );
};

export default {
  title: "Icons",
  decorators: [(story: IconStory) => <IconDecorator story={story} />],
};

const props = {
  color: "primary.main",
  boxSize: "2em",
};
