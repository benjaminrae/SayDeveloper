import { type StoryFn, type Meta } from "@storybook/react";
import FormGroup, { type FormGroupProps } from "./FormGroup";

export default {
  title: "Components/FormGroup",
  component: FormGroup,
} satisfies Meta<typeof FormGroup>;

const Template: StoryFn<typeof FormGroup> = (args: FormGroupProps) => (
  <FormGroup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  caption: "Caption",
  id: "id",
  label: "Label",
  required: false,
  type: "text",
  value: "",
  size: "md",
  isDisabled: false,
  inputOptions: { placeholder: "Placeholder", id: "id" },
} as FormGroupProps;

export const Required = Template.bind({});
Required.args = { ...Default.args, required: true };

export const Text = Template.bind({});
Text.args = { ...Default.args, type: "text" };

export const Email = Template.bind({});
Email.args = { ...Default.args, type: "email" };

export const Password = Template.bind({});
Password.args = { ...Default.args, type: "password" };

export const Number = Template.bind({});
Number.args = { ...Default.args, type: "number" };

export const Small = Template.bind({});
Small.args = { ...Default.args, size: "sm" };

export const Medium = Template.bind({});
Medium.args = { ...Default.args, size: "md" };

export const Large = Template.bind({});
Large.args = { ...Default.args, size: "lg" };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { ...Default.args, size: "xl" };

export const Tel = Template.bind({});
Tel.args = { ...Default.args, type: "tel" };

export const Url = Template.bind({});
Url.args = { ...Default.args, type: "url" };

export const Search = Template.bind({});
Search.args = { ...Default.args, type: "search" };

export const Date = Template.bind({});
Date.args = { ...Default.args, type: "date" };

export const Time = Template.bind({});
Time.args = { ...Default.args, type: "time" };

export const Week = Template.bind({});
Week.args = { ...Default.args, type: "week" };

export const Month = Template.bind({});
Month.args = { ...Default.args, type: "month" };

export const DatetimeLocal = Template.bind({});
DatetimeLocal.args = { ...Default.args, type: "datetime-local" };

export const Color = Template.bind({});
Color.args = { ...Default.args, type: "color" };

export const Range = Template.bind({});
Range.args = { ...Default.args, type: "range" };

export const File = Template.bind({});
File.args = { ...Default.args, type: "file" };

export const Checkbox = Template.bind({});
Checkbox.args = { ...Default.args, type: "checkbox" };

export const Radio = Template.bind({});
Radio.args = { ...Default.args, type: "radio" };

export const Hidden = Template.bind({});
Hidden.args = { ...Default.args, type: "hidden" };

export const Image = Template.bind({});
Image.args = { ...Default.args, type: "image" };

export const Submit = Template.bind({});
Submit.args = { ...Default.args, type: "submit" };

export const Reset = Template.bind({});
Reset.args = { ...Default.args, type: "reset" };

export const Button = Template.bind({});
Button.args = { ...Default.args, type: "button", value: "Button" };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, isDisabled: true };
