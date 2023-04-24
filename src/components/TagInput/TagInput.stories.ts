import type { Meta, StoryObj } from "@storybook/react";
import TagInput from "./TagInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TagInput> = {
  title: "TagInput",
  component: TagInput,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
  },
};

export default meta;
type Story = StoryObj<typeof TagInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {},
};
