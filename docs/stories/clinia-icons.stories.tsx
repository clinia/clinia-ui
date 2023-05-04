import { AccessibilityIcon } from "@clinia-ui/icons/AccessibilityIcon";
import { CliniaIcon } from "@clinia-ui/icons/CliniaIcon";
import { AddIcon } from "@clinia-ui/icons/AddIcon";
import { AddImageIcon } from "@clinia-ui/icons/AddImageIcon";
import { AddSuggestionIcon } from "@clinia-ui/icons/AddSuggestionIcon";
import { AdminIcon } from "@clinia-ui/icons/AdminIcon";
import { AgeFocusIcon } from "@clinia-ui/icons/AgeFocusIcon";
import { AnalyticsIcon } from "@clinia-ui/icons/AnalyticsIcon";
import { AnalyzeModuleIcon } from "@clinia-ui/icons/AnalyzeModuleIcon";
import { AreaDownIcon } from "@clinia-ui/icons/AreaDownIcon";
import { AreaIcon } from "@clinia-ui/icons/AreaIcon";
import { AreaLeftIcon } from "@clinia-ui/icons/AreaLeftIcon";
import { AreaRightIcon } from "@clinia-ui/icons/AreaRightIcon";
import { ArrowDownIcon } from "@clinia-ui/icons/ArrowDownIcon";
import { ArrowLeftCircleIcon } from "@clinia-ui/icons/ArrowLeftCircleIcon";
import { ArrowRightCircleIcon } from "@clinia-ui/icons/ArrowRightCircleIcon";
import { ArrowUpIcon } from "@clinia-ui/icons/ArrowUpIcon";
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

export const AccessibilityIcon_ = () => [
  "AccessibilityIcon",
  <AccessibilityIcon {...props} />,
];

export const AddIcon_ = () => ["AddIcon", <AddIcon {...props} />];

export const AddImageIcon_ = () => [
  "AddImageIcon",
  <AddImageIcon {...props} />,
];

export const AddSuggestionIcon_ = () => [
  "AddSuggestionIcon",
  <AddSuggestionIcon {...props} />,
];

export const AdminIcon_ = () => ["AdminIcon", <AdminIcon {...props} />];
export const AgeFocusIcon_ = () => [
  "AgeFocusIcon",
  <AgeFocusIcon {...props} />,
];

export const AnalyticsIcon_ = () => [
  "AnalyticsIcon",
  <AnalyticsIcon {...props} />,
];

export const AnalyzeModuleIcon_ = () => [
  "AnalyzeModuleIcon",
  <AnalyzeModuleIcon {...props} />,
];

export const AreaDownIcon_ = () => [
  "AreaDownIcon",
  <AreaDownIcon {...props} />,
];

export const AreaIcon_ = () => ["AreaIcon", <AreaIcon {...props} />];

export const AreaLeftIcon_ = () => [
  "AreaLeftIcon",
  <AreaLeftIcon {...props} />,
];

export const AreaRightIcon_ = () => [
  "AreaRightIcon",
  <AreaRightIcon {...props} />,
];

export const ArrowDownIcon_ = () => [
  "ArrowDownIcon",
  <ArrowDownIcon {...props} />,
];

export const ArrowLeftCircleIcon_ = () => [
  "ArrowLeftCircleIcon",
  <ArrowLeftCircleIcon {...props} />,
];

export const ArrowRightCircleIcon_ = () => [
  "ArrowRightCircleIcon",
  <ArrowRightCircleIcon {...props} />,
];

export const ArrowUpIcon_ = () => ["ArrowUpIcon", <ArrowUpIcon {...props} />];

export const CliniaIcon_: IconStory = () => [
  "CliniaIcon",
  <CliniaIcon {...props} />,
];
