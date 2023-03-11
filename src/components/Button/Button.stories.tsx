import Button, { type ButtonProps } from "./Button";
import { type Meta, type StoryFn } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  children,
  ...args
}: ButtonProps) => <Button {...args}>{children}</Button>;

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
  disabled: false,
  position: "center",
  size: "md",
  variant: "primary",
  semantic: "text",
} satisfies ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, variant: "secondary" };

export const Stroke = Template.bind({});
Stroke.args = { ...Primary.args, variant: "stroke" };

export const Ghost = Template.bind({});
Ghost.args = { ...Primary.args, variant: "ghost" };

export const Disabled = Template.bind({});
Disabled.args = { ...Primary.args, disabled: true };

export const Icon = Template.bind({});
Icon.args = { ...Primary.args, semantic: "icon" };

export const IconStart = Template.bind({});
IconStart.args = { ...Primary.args, semantic: "icon", position: "start" };

export const IconEnd = Template.bind({});
IconEnd.args = { ...Primary.args, semantic: "icon", position: "end" };

export const IconCenter = Template.bind({});
IconCenter.args = { ...Primary.args, semantic: "icon", position: "center" };

export const Small = Template.bind({});
Small.args = { ...Primary.args, size: "sm" };

export const Medium = Template.bind({});
Medium.args = { ...Primary.args, size: "md" };

export const Large = Template.bind({});
Large.args = { ...Primary.args, size: "lg" };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { ...Primary.args, size: "xl" };

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { ...Primary.args, size: "xs" };
