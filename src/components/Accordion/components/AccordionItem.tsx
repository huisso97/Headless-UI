import { ReactNode } from "react";
import useAccordionContext from "../hooks/useAccordionContext";
import { AccordionContext } from "./AccordionProvider";

interface AccordionItemProps {
  HeadingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  header: ReactNode;
  content: ReactNode;
}

const AccordionItem = ({
  HeadingTag = "h3",
  header,
  content,
}: AccordionItemProps) => {
  const { activeHeader, toggleHeader } = useAccordionContext(AccordionContext);

  return (
    <div>
      <HeadingTag className="header">
        {<button onClick={() => toggleHeader(header)}>{header}</button>}
      </HeadingTag>
      {activeHeader === header && (
        <section className="panel">{content}</section>
      )}
    </div>
  );
};

export default AccordionItem;

AccordionItem.displayName = "AccordionItem";
