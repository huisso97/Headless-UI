import { Meta, StoryFn } from "@storybook/react";
import Accordion from "../components/Accordion";
import AccordionItem from "../components/AccordionItem";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

const items = [
  {
    header: "Item 1",
    content: "Content 1",
  },
  {
    header: "Item 2",
    content: "Content 2",
  },
  {
    header: "Item 3",
    content: "Content 3",
  },
];

export const Default: StoryFn<JSX.Element> = () => (
  <Accordion>
    {items.map(({ header, content }, i) => (
      <AccordionItem header={header} content={content} key={i} />
    ))}
  </Accordion>
);
