import {
  ArrowForwardIcon,
  ChevronDownIcon,
  EmailIcon,
  PhoneIcon,
  SearchIcon,
  Container,
  HStack,
  Stack,
  Button,
  ButtonGroup,
  IconButton,
} from "@clinia-ui/react";
import * as React from "react";
import { motion } from "framer-motion";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components / Forms / Button",
  decorators: [
    (Story: any) => (
      <Container mt="40px" display="flex" flexWrap="wrap" gap="4">
        <Story />
      </Container>
    ),
  ],
} as Meta;

interface StoryProps {
  children?: React.ReactNode;
}

export const basic: StoryFn<StoryProps> = (props) => <Button {...props} />;
basic.argTypes = {
  children: { type: "string" },
};
basic.args = {
  children: "Button",
};

export const outlines: StoryFn<StoryProps> = (props) => (
  <>
    <Button {...props} variant="outline" colorScheme="red" />
    <Button {...props} variant="outline" colorScheme="green" />
    <Button {...props} variant="outline" colorScheme="blue" />
    <Button {...props} variant="outline" colorScheme="teal" />
    <Button {...props} variant="outline" colorScheme="pink" />
    <Button {...props} variant="outline" colorScheme="purple" />
    <Button {...props} variant="outline" colorScheme="cyan" />
    <Button {...props} variant="outline" colorScheme="orange" />
    <Button {...props} variant="outline" colorScheme="yellow" />
  </>
);
outlines.argTypes = {
  children: { type: "string" },
};
outlines.args = {
  children: "Button",
};

export const WithVariants = () => (
  <HStack spacing="24px">
    <Button variant="solid">Button</Button>
    <Button variant="outline">Button</Button>
    <Button variant="ghost">Button</Button>
    <Button variant="link">Button</Button>
    <Button variant="unstyled">Button</Button>
  </HStack>
);

export const WithSizes = () => (
  <HStack>
    <Button size="xs">Button</Button>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
    <Button size="lg">Button</Button>
  </HStack>
);

export const WithIcon = () => (
  <Stack direction="row" spacing={4}>
    <Button leftIcon={<EmailIcon />} variant="solid">
      Email
    </Button>
    <Button rightIcon={<ArrowForwardIcon />} variant="outline">
      Call us
    </Button>
  </Stack>
);

export const WithLoadingSpinnerPlacement = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button
      isLoading
      loadingText="Loading"
      variant="outline"
      spinnerPlacement="start"
    >
      Submit
    </Button>
    <Button
      isLoading
      loadingText="Loading"
      variant="outline"
      spinnerPlacement="end"
    >
      Continue
    </Button>
  </Stack>
);

export const WithDisabled = () => (
  <HStack spacing="24px">
    <Button as="div" isDisabled variant="solid">
      Button
    </Button>
    <Button isDisabled variant="outline">
      Button
    </Button>
    <Button isDisabled variant="ghost">
      Button
    </Button>
    <Button isDisabled variant="link">
      Button
    </Button>
  </HStack>
);

export const CustomComposition = () => (
  <Button
    size="md"
    height="48px"
    width="200px"
    border="2px solid"
    backgroundColor="green.500"
  >
    Button
  </Button>
);

export const iconButton = () => (
  <Stack direction="row">
    <IconButton aria-label="Search database" icon={<SearchIcon />} />

    <IconButton aria-label="Search database" icon={<SearchIcon />} />

    <IconButton aria-label="Call Segun" size="lg">
      <PhoneIcon />
    </IconButton>
  </Stack>
);

export const WithButtonGroup = () => (
  <ButtonGroup variant="outline">
    <Button>Save</Button>
    <Button colorScheme="gray">Cancel</Button>
  </ButtonGroup>
);

export const WithHorizontalAttachedButtons = () => (
  <ButtonGroup size="sm" isAttached variant="outline">
    <Button>Save</Button>
    <Button>Cancel</Button>
    <IconButton
      fontSize="2xl"
      aria-label="Add to friends"
      icon={<ChevronDownIcon />}
    />
  </ButtonGroup>
);

export const WithVerticalAttachedButtons = () => (
  <ButtonGroup size="lg" orientation="vertical" isAttached variant="outline">
    <IconButton fontSize="2xl" aria-label="Email Santa" icon={<EmailIcon />} />
    <IconButton
      fontSize="2xl"
      aria-label="Call the Grinch"
      icon={<PhoneIcon />}
    />
    <IconButton
      fontSize="2xl"
      aria-label="Add to friends"
      icon={<ChevronDownIcon />}
    />
  </ButtonGroup>
);

const motionConfig = {
  initial: false,
  transition: {
    type: "spring",
    duration: 2,
    bounce: 0,
  },
};

const MotionButton = motion(Button);
const BG_GRADIENT_SOFT = `linear-gradient(to right, #fa8080, #F40000)`;
const BG_GRADIENT_SOFT_REVERSED = `linear-gradient(to right, #F40000, #fa8080)`;

export const WithMotion = () => {
  const [binary, setBinary] = React.useState(false);
  return (
    <>
      <Button onClick={() => setBinary((binary) => !binary)}>
        Toggle binary state: {String(binary)}
      </Button>
      <MotionButton
        {...motionConfig}
        animate={{
          scale: binary ? 1.2 : 1,
          backgroundImage: binary
            ? BG_GRADIENT_SOFT
            : BG_GRADIENT_SOFT_REVERSED,
        }}
      >
        ({String(binary)}) Doesn't work
      </MotionButton>
    </>
  );
};
