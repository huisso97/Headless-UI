import { Meta, StoryFn } from "@storybook/react";
import FormControl, { FormControlProps } from "./FormControl";

export default {
  title: "Components/FormControl",
  component: FormControl,
} as Meta;

export const Default: StoryFn<FormControlProps<"input">> = (args) => (
  <FormControl {...args} />
);

export const Link: StoryFn<FormControlProps<"textarea">> = (args) => (
  <FormControl as="textarea" {...args} />
);
