import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Profile> = {
  title: "Profile",
  component: Profile,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    user: {
      _id: "id",
      email: "이메일",
      answers: 0,
      questions: 0,
      nickname: "닉네임",
      photoURL: "https://source.boringavatars.com/beam/130/닉네임?square",
    },
  },
};
