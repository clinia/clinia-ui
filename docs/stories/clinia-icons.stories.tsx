import React, { ComponentType } from "react";
import { CliniaIcon } from "@clinia-ui/icons/CliniaIcon";
import { AccessibilityIcon } from "@clinia-ui/icons/AccessibilityIcon";
import { Card, CardBody, Center, Icon, Stack, Text } from "@clinia-ui/react";
import { Meta } from "@storybook/react";

const a: Meta = {
  decorators: [(story) => <>{story.toString()}</>],
};

type IconStory = () => [string, JSX.Element];

export default {
  title: "Icons",
  decorators: [
    (Story: IconStory) => {
      const [name, component] = Story();
      return (
        <Card align="center">
          <CardBody>
            <Stack>
              <Center>{component}</Center>
              <Text>{name}</Text>
            </Stack>
          </CardBody>
        </Card>
      );
    },
  ],
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
