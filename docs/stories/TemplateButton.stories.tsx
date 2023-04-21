import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@clinia-ui/core";

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Template Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Different: Story = {
  args: {
    children: "Other",
  },
};
