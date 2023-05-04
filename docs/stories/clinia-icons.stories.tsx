import { AccessibilityIcon } from "@clinia-ui/icons/AccessibilityIcon";
import { CliniaIcon } from "@clinia-ui/icons/CliniaIcon";
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

const a: Meta = {
  decorators: [(story) => <>{story.toString()}</>],
};

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
        <Card align="center">
          <CardBody>
            <Stack>
              <Center>{component}</Center>
              <Text>{name}</Text>
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

export const CliniaIcon_: IconStory = () => [
  "CliniaIcon",
  <CliniaIcon {...props} />,
];

export const AccessibilityIcon_ = () => [
  "AccessibilityIcon",
  <AccessibilityIcon {...props} />,
];
