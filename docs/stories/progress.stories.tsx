import { chakra } from "@chakra-ui/system";
import * as React from "react";
import { Progress, ProgressLabel } from "@clinia-ui/react";

export default {
  title: "Components / Feedback / Linear Progress",
  decorators: [
    (story: Function) => (
      <chakra.div maxW="500px" mt="40px" mx="auto">
        {story()}
      </chakra.div>
    ),
  ],
};

export const basic = () => <Progress value={50} />;

export const withColorScheme = () => <Progress colorScheme="pink" value={20} />;

export const indeterminate = () => (
  <Progress margin="20px" colorScheme="cyan" size="xs" isIndeterminate />
);

export const withLabel = () => (
  <Progress value={60}>
    <ProgressLabel>60%</ProgressLabel>
  </Progress>
);

export const withStripe = () => <Progress hasStripe value={20} />;

export const withSizes = () => (
  <div>
    <Progress size="sm" value={20} />
    <br />
    <Progress size="md" value={20} />
    <br />
    <Progress size="lg" value={20} />
  </div>
);

export const withAnimation = () => <Progress hasStripe isAnimated value={20} />;

export const withCustomBorderRadius = () => (
  <Progress value={20} borderRadius="4px" />
);
