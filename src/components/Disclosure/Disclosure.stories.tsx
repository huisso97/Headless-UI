import { Meta, StoryFn } from "@storybook/react";
import Disclosure from "./Disclosure";
import DisclosureButton from "./DisclosureButton";
import DisclosurePanel from "./DisclosurePanel";

export default {
  title: "Components/Disclosure",
  component: Disclosure,
} as Meta;

const Template: StoryFn = (args) => (
  <Disclosure {...args}>
    <DisclosureButton style={{ backgroundColor: "white" }}>
      {args.defaultOpen ? "Close" : "Open"}
    </DisclosureButton>
    <DisclosurePanel style={{ border: "1px solid black" }}>
      <p>This is the panel content</p>
    </DisclosurePanel>
  </Disclosure>
);

export const Default = Template.bind({});
Default.args = {
  defaultOpen: false,
};
