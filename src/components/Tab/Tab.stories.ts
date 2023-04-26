import type { Meta, StoryObj } from "@storybook/react";
import Tab from "./Tab";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tab> = {
  title: "Tab",
  component: Tab,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    tabs: [
      { title: "기본 정보", content: "test1" },
      { title: "후기", content: "test2" },
    ],
  },
};
