import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

export const Default: StoryFn<CardProps<"div">> = (args) => (
  <Card {...args}>Default Card</Card>
);

export const Link: StoryFn<CardProps<"section">> = (args) => (
  <Card as="section" {...args}>
    Section Card
  </Card>
);
