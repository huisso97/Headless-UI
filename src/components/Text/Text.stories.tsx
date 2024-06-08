import { Meta, StoryFn } from "@storybook/react";
import Text, { TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
} as Meta;

export const Default: StoryFn<TextProps<"span">> = (args) => (
  <Text {...args}>Default Text</Text>
);

export const Link: StoryFn<TextProps<"p">> = (args) => (
  <Text as="p" {...args}>
    P Text
  </Text>
);
