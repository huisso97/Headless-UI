import { ReactNode } from "react";
import AccordionProvider from "./AccordionProvider";

interface AccordionProps {
  children: ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  return (
    <AccordionProvider>
      <div className="accordion">{children}</div>
    </AccordionProvider>
  );
};

export default Accordion;

Accordion.displayName = "Accordion";
