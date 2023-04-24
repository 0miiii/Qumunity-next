import type { Meta, StoryObj } from "@storybook/react";
import TagDescription from "./TagDescription";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TagDescription> = {
  title: "TagDescription",
  component: TagDescription,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
  },
};

export default meta;
type Story = StoryObj<typeof TagDescription>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    width: "300px",
  },
};
