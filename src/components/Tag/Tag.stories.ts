import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    name: "# 태그",
  },
};
