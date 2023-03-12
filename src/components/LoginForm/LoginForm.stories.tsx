import { type StoryFn, type Meta } from "@storybook/react";
import LoginForm, { type LoginFormProps } from "./LoginForm";

export default {
  title: "Components/LoginForm",
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args: LoginFormProps) => (
  <LoginForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
