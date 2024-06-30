import { ReactNode } from "react";

interface AccordionItemProps {
  HeadingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headerProps: ReactNode;
  panelProps: ReactNode;
}

const AccordionItem = ({
  HeadingTag = "h3",
  headerProps,
  panelProps,
}: AccordionItemProps) => {
  return (
    <div>
      <HeadingTag className="header">
        {<button>{headerProps}</button>}
      </HeadingTag>
      <section className="panel">{panelProps}</section>
    </div>
  );
};

export default AccordionItem;

AccordionItem.displayName = "AccordionItem";
