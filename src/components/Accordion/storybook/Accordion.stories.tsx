import { Meta, StoryFn } from "@storybook/react";
import Accordion from "../components/Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

export const Default: StoryFn<JSX.Element> = () => <Accordion />;
