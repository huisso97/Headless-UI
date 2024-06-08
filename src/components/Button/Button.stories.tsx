import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Default: StoryFn<ButtonProps<"button">> = (args) => (
  <Button {...args}>Default Button</Button>
);

export const Link: StoryFn<ButtonProps<"a">> = (args) => (
  <Button as="a" {...args} href="#">
    Link Button
  </Button>
);
