import { Meta, StoryFn } from "@storybook/react";
import Disclosure from "./Disclosure";
import DisclosureButton from "./DisclosureButton";
import DisclosurePanel from "./DisclosurePanel";
import { useState } from "react";

export default {
  title: "Components/Disclosure",
  component: Disclosure,
} as Meta;

const Template: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newIsOpen: boolean) => {
    setIsOpen(newIsOpen);
  };

  return (
    <Disclosure isOpen={isOpen} onToggle={handleToggle}>
      <DisclosureButton
        style={{ backgroundColor: "white", padding: "10px", cursor: "pointer" }}
      >
        {isOpen ? "Close" : "Open"}
      </DisclosureButton>
      <DisclosurePanel style={{ border: "1px solid black", padding: "10px" }}>
        <p>This is the panel content</p>
      </DisclosurePanel>
    </Disclosure>
  );
};

export const Default = Template.bind({});
