import { type StoryFn, type Meta } from "@storybook/react";
import LoginPage from "../pages/login";

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
} satisfies Meta<typeof LoginPage>;

const Template: StoryFn<typeof LoginPage> = () => <LoginPage />;

export const Default = Template.bind({});
