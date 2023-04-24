import type { Meta, StoryObj } from "@storybook/react";
import Post from "./Post";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Post> = {
  title: "Post",
  component: Post,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Post>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    post: {
      _id: "id",
      votes: 0,
      answers: 0,
      views: 0,
      title: "글 제목",
      content: "글 내용",
      tags: ["#javascript", "#typescript"],
      author: {
        _id: "id",
        email: "이메일",
        answers: 0,
        questions: 0,
        nickname: "닉네임",
        photoURL: "https://source.boringavatars.com/beam/130/닉네임?square",
      },
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    },
  },
};
